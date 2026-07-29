// useForm.ts
import { useCallback, useState } from "react";
import axios from "axios";
import { contact } from "../../Constent";

// ============================================================
// TYPES
// ============================================================

interface BaseFormData {
  name: string;
  email?: string;
  phone: string;
  countryCode?: string;

  // Date fields
  checkIn?: string;
  checkOut?: string;

  // Event form
  eventType?: string;

  // Other optional fields
  message?: string;
  city?: string;
  budget?: string;
  villa?: string;
  guests?: string;

  createdFrom?: string;

  // Allow additional custom fields
  [key: string]: string | undefined;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  eventType?: string;
  checkIn?: string;
  checkOut?: string;
  message?: string;
  city?: string;
  budget?: string;
  villa?: string;
  guests?: string;

  [key: string]: string | undefined;
}

interface ApiPayload {
  Domain: string;
  Name: string;
  email?: string;
  Contact: string;
  check_in?: string;
  check_out?: string;
  Description: string;
  created_from: string;
  source_url: string;
  guests?: string;
  hId?: string;

  [key: string]: string | number | boolean | undefined;
}

type TransformFunction<T extends BaseFormData> = (
  data: T
) => ApiPayload;

interface UseFormProps<T extends BaseFormData> {
  initialData?: Partial<T>;

  // Fields to include
  includeCheckIn?: boolean;
  includeCheckOut?: boolean;
  includeMessage?: boolean;
  includeCity?: boolean;
  includeBudget?: boolean;
  includeVilla?: boolean;
  includeEventType?: boolean;
  includeEmail?: boolean;

  // API settings
  formHid?: string;
  createdFrom?: string;

  // Date mode
  // true = single date (Event Date)
  // false = date range (Check-in + Check-out)
  singleDateMode?: boolean;

  // Callbacks
  onSubmitSuccess?: () => void;
  onValidationError?: (errors: FormErrors) => void;

  // Custom validation / transform
  validateForm?: (data: T) => FormErrors;
  transformData?: TransformFunction<T>;
}

// ============================================================
// VALIDATORS
// ============================================================

export const validators = {
  email: (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  phone: (phone: string): boolean => {
    return /^[0-9]{10,15}$/.test(phone);
  },

  required: (value: string): boolean => {
    return value?.trim().length > 0;
  },
};

// ============================================================
// DEFAULT FORM DATA
// ============================================================

const getDefaultInitialData = (): BaseFormData => ({
  name: "",
  email: "",
  phone: "",
  countryCode: "+91",

  checkIn: "",
  checkOut: "",

  eventType: "",

  message: "",
  city: "",
  budget: "",
  villa: "",
  guests: "",

  createdFrom: "webform",
});

// ============================================================
// MAIN HOOK
// ============================================================

export const useForm = <
  T extends BaseFormData = BaseFormData
>({
  initialData = {},

  includeCheckIn = false,
  includeCheckOut = false,
  includeMessage = false,
  includeCity = false,
  includeBudget = false,
  includeVilla = false,
  includeEventType = false,
  includeEmail = false,

  formHid,
  createdFrom = "webform",

  singleDateMode = false,

  onSubmitSuccess,
  onValidationError,

  validateForm: customValidate,
  transformData,
}: UseFormProps<T> = {}) => {
  // ==========================================================
  // STATE
  // ==========================================================

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitSuccess, setSubmitSuccess] =
    useState(false);

  const [formData, setFormData] = useState<T>(
    () =>
      ({
        ...getDefaultInitialData(),
        ...initialData,
      }) as T
  );

  const [errors, setErrors] =
    useState<FormErrors>({});

  // ==========================================================
  // VALIDATION
  // ==========================================================

  const defaultValidate =
    useCallback((): FormErrors => {
      const newErrors: FormErrors = {};

      // ------------------------------------------------------
      // NAME
      // ------------------------------------------------------

      if (!formData.name?.trim()) {
        newErrors.name = "Name is required";
      }

      // ------------------------------------------------------
      // EMAIL
      // ------------------------------------------------------

      if (includeEmail) {
        if (!formData.email?.trim()) {
          newErrors.email = "Email is required";
        } else if (
          !validators.email(formData.email)
        ) {
          newErrors.email =
            "Please enter a valid email";
        }
      }

      // ------------------------------------------------------
      // PHONE
      // ------------------------------------------------------

      if (!formData.phone?.trim()) {
        newErrors.phone =
          "Phone number is required";
      } else if (
        !validators.phone(formData.phone)
      ) {
        newErrors.phone =
          "Phone number must be 10-15 digits";
      }

      // ------------------------------------------------------
      // EVENT TYPE
      // Only required when includeEventType is true
      // ------------------------------------------------------

      if (
        includeEventType &&
        !formData.eventType?.trim()
      ) {
        newErrors.eventType =
          "Event type is required";
      }

      // ------------------------------------------------------
      // CITY
      // ------------------------------------------------------

      if (
        includeCity &&
        !formData.city?.trim()
      ) {
        newErrors.city =
          "Location is required";
      }

      // ------------------------------------------------------
      // BUDGET
      // ------------------------------------------------------

      if (
        includeBudget &&
        !formData.budget?.trim()
      ) {
        newErrors.budget =
          "Budget is required";
      }

      // ------------------------------------------------------
      // VILLA
      // ------------------------------------------------------

      if (
        includeVilla &&
        !formData.villa?.trim()
      ) {
        newErrors.villa =
          "Villa is required";
      }

      // ------------------------------------------------------
      // CHECK-IN / EVENT DATE
      // ------------------------------------------------------

      if (
        includeCheckIn &&
        !formData.checkIn?.trim()
      ) {
        newErrors.checkIn = singleDateMode
          ? "Event date is required"
          : "Check-in date is required";
      }

      // ------------------------------------------------------
      // CHECK-OUT
      // ------------------------------------------------------

      if (includeCheckOut) {
        if (!formData.checkOut?.trim()) {
          newErrors.checkOut =
            "Check-out date is required";
        } else if (
          formData.checkIn &&
          formData.checkOut &&
          formData.checkIn >
            formData.checkOut
        ) {
          newErrors.checkOut =
            "Check-out must be after check-in";
        }
      }

      // ------------------------------------------------------
      // MESSAGE
      // Optional field
      // ------------------------------------------------------

      // No validation required for optional message

      return newErrors;
    }, [
      formData,
      includeCheckIn,
      includeCheckOut,
      includeCity,
      includeBudget,
      includeVilla,
      includeEventType,
      includeEmail,
      singleDateMode,
    ]);

  // ==========================================================
  // VALIDATE FORM
  // ==========================================================

  const validateForm = useCallback((): boolean => {
    const newErrors = customValidate
      ? customValidate(formData)
      : defaultValidate();

    setErrors(newErrors);

    const isValid =
      Object.keys(newErrors).length === 0;

    if (
      !isValid &&
      onValidationError
    ) {
      onValidationError(newErrors);
    }

    return isValid;
  }, [
    formData,
    customValidate,
    defaultValidate,
    onValidationError,
  ]);

  // ==========================================================
  // HANDLE INPUT CHANGE
  // ==========================================================

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
      >
    ) => {
      const {
        name,
        value,
      } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error for this field
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }
    },
    [errors]
  );

  // ==========================================================
  // SET FIELD VALUE
  // Useful for dropdowns and date pickers
  // ==========================================================

  const setFieldValue = useCallback(
    (
      field: keyof T,
      value: string
    ) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));

      // Clear error for this field
      if (errors[field as string]) {
        setErrors((prev) => ({
          ...prev,
          [field as string]: undefined,
        }));
      }
    },
    [errors]
  );

  // ==========================================================
  // HANDLE DATE CHANGE
  //
  // singleDateMode = true
  //   Event Date -> checkIn
  //
  // singleDateMode = false
  //   Check-in -> checkIn
  //   Check-out -> checkOut
  // ==========================================================

  const handleDateChange =
    useCallback(
      (
        dates:
          | [Date | null, Date | null]
          | Date
          | null
      ) => {
        // ----------------------------------------------------
        // SINGLE DATE MODE
        // Used for Event Date
        // ----------------------------------------------------

        if (singleDateMode) {
          const date =
            dates instanceof Date
              ? dates
              : null;

          const dateString = date
            ? date
                .toISOString()
                .split("T")[0]
            : "";

          setFormData((prev) => ({
            ...prev,
            checkIn: dateString,
          }));

          if (errors.checkIn) {
            setErrors((prev) => ({
              ...prev,
              checkIn: undefined,
            }));
          }

          return;
        }

        // ----------------------------------------------------
        // RANGE DATE MODE
        // Used for Check-in / Check-out
        // ----------------------------------------------------

        if (Array.isArray(dates)) {
          const [
            start,
            end,
          ] = dates;

          setFormData((prev) => ({
            ...prev,

            checkIn: start
              ? start
                  .toISOString()
                  .split("T")[0]
              : "",

            checkOut: end
              ? end
                  .toISOString()
                  .split("T")[0]
              : "",
          }));

          if (
            errors.checkIn ||
            errors.checkOut
          ) {
            setErrors((prev) => ({
              ...prev,
              checkIn: undefined,
              checkOut: undefined,
            }));
          }
        }
      },
      [
        singleDateMode,
        errors,
      ]
    );

  // ==========================================================
  // RESET FORM
  // ==========================================================

  const resetForm = useCallback(() => {
    setFormData({
      ...getDefaultInitialData(),
      ...initialData,
    } as T);

    setErrors({});
    setSubmitSuccess(false);
  }, [initialData]);

  // ==========================================================
  // BUILD DESCRIPTION
  // ==========================================================

  const getDescription =
    useCallback((): string => {
      const parts: string[] = [];

      // ------------------------------------------------------
      // EVENT DATE
      // ------------------------------------------------------

      if (
        singleDateMode &&
        formData.checkIn
      ) {
        parts.push(
          `Event Date: ${formData.checkIn}`
        );
      }

      // ------------------------------------------------------
      // CHECK-IN / CHECK-OUT
      // ------------------------------------------------------

      if (
        !singleDateMode &&
        includeCheckIn &&
        formData.checkIn
      ) {
        parts.push(
          `Check-in: ${formData.checkIn}`
        );
      }

      if (
        !singleDateMode &&
        includeCheckOut &&
        formData.checkOut
      ) {
        parts.push(
          `Check-out: ${formData.checkOut}`
        );
      }

      // ------------------------------------------------------
      // EVENT TYPE
      // ------------------------------------------------------

      if (
        includeEventType &&
        formData.eventType
      ) {
        parts.push(
          `Event Type: ${formData.eventType}`
        );
      }

      // ------------------------------------------------------
      // MESSAGE
      // ------------------------------------------------------

      if (
        includeMessage &&
        formData.message
      ) {
        parts.push(
          `Message: ${formData.message}`
        );
      }

      // ------------------------------------------------------
      // CITY
      // ------------------------------------------------------

      if (
        includeCity &&
        formData.city
      ) {
        parts.push(
          `City: ${formData.city}`
        );
      }

      // ------------------------------------------------------
      // BUDGET
      // ------------------------------------------------------

      if (
        includeBudget &&
        formData.budget
      ) {
        parts.push(
          `Budget: ${formData.budget}`
        );
      }

      // ------------------------------------------------------
      // VILLA
      // ------------------------------------------------------

      if (
        includeVilla &&
        formData.villa
      ) {
        parts.push(
          `Villa: ${formData.villa}`
        );
      }

      // ------------------------------------------------------
      // GUESTS
      // ------------------------------------------------------

      if (formData.guests) {
        parts.push(
          `Guests: ${formData.guests}`
        );
      }

      return parts.join("\n");
    }, [
      formData,
      singleDateMode,
      includeCheckIn,
      includeCheckOut,
      includeEventType,
      includeMessage,
      includeCity,
      includeBudget,
      includeVilla,
    ]);

  // ==========================================================
  // SUBMIT FORM
  // ==========================================================

  const handleSubmit =
    useCallback(
      async (
        e?: React.FormEvent<HTMLFormElement>
      ) => {
        // Prevent page reload
        if (e) {
          e.preventDefault();
        }

        // Validate
        if (!validateForm()) {
          return;
        }

        setIsSubmitting(true);

        try {
          // --------------------------------------------------
          // CREATE API PAYLOAD
          // --------------------------------------------------

          const payload: ApiPayload =
            transformData
              ? transformData(formData)
              : {
                  Domain:
                    contact.formDomain,

                  Name:
                    formData.name,

                  email:
                    formData.email,

                  Contact:
                    (formData.countryCode ||
                      "") +
                    formData.phone,

                  check_in:
                    formData.checkIn,

                  check_out:
                    formData.checkOut,

                  Description:
                    getDescription(),

                  created_from:
                    formData.createdFrom ||
                    createdFrom,

                  source_url:
                    window.location.href,

                  hId:
                    formHid ||
                    contact.formHid ||
                    "",
                };

          // --------------------------------------------------
          // API REQUEST
          // --------------------------------------------------

          const { data } =
            await axios.post<{
              Status: boolean;
              message?: string;
            }>(
              "https://nexon.eazotel.com/eazotel/addcontacts",
              payload,
              {
                headers: {
                  "Content-Type":
                    "application/json",
                },
              }
            );

          // --------------------------------------------------
          // SUCCESS
          // --------------------------------------------------

          if (data.Status) {
            setSubmitSuccess(true);

            resetForm();

            if (onSubmitSuccess) {
              onSubmitSuccess();
            }

            setTimeout(() => {
              setSubmitSuccess(false);
            }, 3000);

            window.open(
              "/thank-you/",
              "_blank"
            );
          } else {
            alert(
              data.message ||
                "Something went wrong. Please try again."
            );
          }
        } catch (error) {
          console.error(
            "Submission error:",
            error
          );

          alert(
            "An error occurred. Please try again later."
          );
        } finally {
          setIsSubmitting(false);
        }
      },
      [
        formData,
        validateForm,
        transformData,
        getDescription,
        createdFrom,
        formHid,
        resetForm,
        onSubmitSuccess,
      ]
    );

  // ==========================================================
  // RETURN
  // ==========================================================

  return {
    // Data
    formData,
    setFormData,

    // Validation
    errors,
    validateForm,

    // Submission
    isSubmitting,
    submitSuccess,
    handleSubmit,

    // Input handlers
    handleChange,
    setFieldValue,

    // Date
    handleDateChange,

    // Reset
    resetForm,

    // Description
    getDescription,

    // Configuration
    includeCheckIn,
    includeCheckOut,
    includeMessage,
    includeCity,
    includeBudget,
    includeVilla,
    includeEventType,
  };
};

export default useForm;