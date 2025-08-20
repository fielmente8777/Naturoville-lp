"use client";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { countries } from "../chatbot/constant";
import useClickOutside from "@/hocks/useClickOutside";
import { DropDownIcon } from "@/utils/icons";
import { contact } from "../../../Constent";
import { getDateInputLimits } from "@/hocks/getDateInputLimits";
import DatePicker from "react-datepicker";
import DataContext from "@/contextApi/DataContext";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const Form1 = () => {
  const { gridView, isExtended, setIsExtended } = useContext(DataContext);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [countryCode, setCountryCode] = useState("+91");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const { min } = getDateInputLimits({
    showPast: false,
  });

  const offers = [
    "Wellness Offers",
    "Rejuvenation Treatments",
    "Lifestyle Treatments",
    "Ailment Treatments",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    wellnessOffer: "",
    checkIn: "",
    checkOut: "",
    preferTime: "",
  });

  const handleTimeChange = (time: string | null) => {
    setFormData((prev) => ({
      ...prev,
      preferTime: time || "",
    }));

    // Clear error when time is selected
    if (errors.preferTime) {
      setErrors((prev) => ({
        ...prev,
        preferTime: "",
      }));
    }
  };

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    wellnessOffer: "",
    checkIn: "",
    checkOut: "",
    preferTime: "",
  });

  // Regex patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleDateChange = (
    date: Date | null,
    field: "checkIn" | "checkOut"
  ) => {
    const dateString = date ? date.toISOString().split("T")[0] : "";

    setFormData((prev) => ({
      ...prev,
      [field]: dateString,
    }));

    if (field === "checkIn") {
      setStartDate(date);
      // Clear check-out error if both dates are selected
      if (date && endDate && date > endDate) {
        setEndDate(null);
        setFormData((prev) => ({ ...prev, checkOut: "" }));
      }
    } else {
      setEndDate(date);
    }

    // Clear error when date is selected
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      wellnessOffer: "",
      checkIn: "",
      checkOut: "",
      preferTime: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
      isValid = false;
    }

    // Offer validation
    if (!formData.wellnessOffer) {
      newErrors.wellnessOffer = "Please select an offer";
      isValid = false;
    }

    // Check-in validation
    if (!formData.checkIn.trim()) {
      newErrors.checkIn = "check-in date is required";
      isValid = false;
    }

    if (!formData.checkOut.trim()) {
      newErrors.checkOut = "check-out date is required";
      isValid = false;
    } else if (startDate && endDate && startDate > endDate) {
      newErrors.checkOut = "Check-out must be after check-in";
      isValid = false;
    }

    // Time validation
    if (!formData.preferTime.trim()) {
      newErrors.preferTime = "Preferred time is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: contact.formDomain,
          email: formData.email,
          Name: formData.name,
          Contact: formData.phone,
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          Description: `Offer: ${formData.wellnessOffer}, Check-in: ${formData.checkIn}, Check-out: ${formData.checkOut}, Preferred Time: ${formData.preferTime}`,
          created_from: "landing_page",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          preferTime: "",
          wellnessOffer: "",
        });
        setStartDate(null);
        setEndDate(null);
        setSubmitSuccess(true);
        window.open("/thank-you/", "_blank");
      } else {
        alert(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Full Name*",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email Address*",
      required: true,
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Phone Number*",
      required: true,
    },
    {
      name: "wellnessOffer",
      type: "select",
      placeholder: "Wellness Offer*",
      required: true,
    },
    {
      name: "checkIn",
      type: "date",
      placeholder: "Check-in Date*",
      required: true,
      min: min,
      onChange: (date: Date | null) => handleDateChange(date, "checkIn"),
    },
    {
      name: "checkOut",
      type: "date",
      placeholder: "Check-out Date*",
      required: true,
      min: min,
      onChange: (date: Date | null) => handleDateChange(date, "checkOut"),
    },
    {
      name: "preferTime",
      type: "time",
      placeholder: "Preferred Time of Contact*",
      required: true,
    },
  ];
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropDownRef, () => {
    setIsDropdownOpen(false);
  });
  // useClickOutside(formRef, () => {
  //   if (isExtended) {
  //     setIsExtended(false);
  //   }
  // });

  return (
    <div className="w-full">
      <form
        ref={formRef}
        onClick={(e) => {
          e.stopPropagation();
          setIsExtended(true);
        }}
        onSubmit={handleSubmit}
        className={`${!gridView ? "grid md:divide-x md:divide-[#E0E0E0]" : "flex flex-col gap-2"} grid-cols-1 ${isExtended ? "md:grid-cols-8 md:gap-y-2" : "md:grid-cols-9"}  max-md:gap-2  w-full`}
      >
        {inputFields.map((field) => (
          <React.Fragment key={field.name}>
            {field.type === "tel" ? (
              <div className="md:col-span-2 w-full h-full flex flex-col bg-white">
                <div className={`flex items-center w-full h-full `}>
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className={`ps-3 py-3.5 bg-white focus:outline-none h-full`}
                    aria-label="Country code"
                    style={{
                      width: `${countryCode.length * 2.5}ch`,
                      backgroundColor: "white",
                    }}
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="pe-4 py-3.5 bg-white outline-none w-full h-full focus:outline-none"
                    aria-required={field.required}
                  />
                </div>
                {errors[field.name as keyof typeof errors] && (
                  <p className="text-sm text-red-500 col-span-full">
                    {errors[field.name as keyof typeof errors]}
                  </p>
                )}
              </div>
            ) : field.type === "select" ? (
              <div
                className={`relative md:col-span-2 w-full h-full flex flex-col bg-white`}
                ref={dropDownRef}
              >
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full h-full px-4 py-3.5 text-left bg-white flex items-center justify-between ${
                    !formData.wellnessOffer ? "text-gray-400" : ""
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                >
                  {formData.wellnessOffer || field.placeholder}
                  <span
                    className={`${isDropdownOpen ? "rotate-180" : ""} transition-all duration-300 ease-in-out`}
                  >
                    <DropDownIcon />
                  </span>
                </button>
                {isDropdownOpen && (
                  <div
                    role="listbox"
                    className="absolute top-full z-10 w-full bg-white border border-light shadow-lg"
                  >
                    {offers.map((offer) => (
                      <button
                        key={offer}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            wellnessOffer: offer,
                          }));
                          setIsDropdownOpen(false);
                          setErrors((prev) => ({
                            ...prev,
                            wellnessOffer: "",
                          }));
                        }}
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        role="option"
                        aria-selected={formData.wellnessOffer === offer}
                      >
                        {offer}
                      </button>
                    ))}
                  </div>
                )}
                {errors[field.name as keyof typeof errors] && (
                  <p className="text-sm text-red-500 col-span-full">
                    {errors[field.name as keyof typeof errors]}
                  </p>
                )}
              </div>
            ) : field.type === "date" ? (
              <div
                className={`${isExtended ? "md:col-span-2" : gridView ? "" : "hidden"} flex flex-col bg-white`}
              >
                <DatePicker
                  selected={field.name === "checkIn" ? startDate : endDate}
                  onChange={(date) =>
                    handleDateChange(date, field.name as "checkIn" | "checkOut")
                  }
                  placeholderText={field.placeholder}
                  wrapperClassName="w-full !p-0 h-full bg-white"
                  className="px-4 py-3.5 bg-white w-full h-full"
                  aria-required={field.required}
                  minDate={field.min ? new Date(field.min) : undefined}
                />
                {errors[field.name as keyof typeof errors] && (
                  <p className="text-sm text-red-500 col-span-full">
                    {errors[field.name as keyof typeof errors]}
                  </p>
                )}
              </div>
            ) : field.type === "time" ? (
              <div
                className={`${isExtended ? "md:col-span-2" : gridView ? "" : "hidden"} px-4 py-3.5 bg-white`}
              >
                <TimePicker
                  onChange={handleTimeChange}
                  value={formData.preferTime}
                  disableClock={false}
                  clearIcon={null}
                  className="w-full outline-none focus:outline-none"
                  format="h:mm a"
                />
                {errors[field.name as keyof typeof errors] && (
                  <p className="text-sm text-red-500 col-span-full">
                    {errors[field.name as keyof typeof errors]}
                  </p>
                )}
              </div>
            ) : (
              <div className="md:col-span-2 flex flex-col bg-white">
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={`px-4 py-3.5 bg-white focus:outline-none w-full h-full `}
                  aria-required={field.required}
                />
                {errors[field.name as keyof typeof errors] && (
                  <p className="text-sm text-red-500 col-span-full">
                    {errors[field.name as keyof typeof errors]}
                  </p>
                )}
              </div>
            )}
          </React.Fragment>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`py-3 ${isExtended ? "md:col-span-2" : "md:col-span-1"} px-6 bg-primary text-white uppercase font-medium hover:bg-secondary transition-colors ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : submitSuccess ? (
            "Thank You!"
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default Form1;
