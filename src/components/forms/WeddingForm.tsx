"use client";

import { getDateInputLimits } from "@/hocks/getDateInputLimits";
import useForm from "@/hocks/useForm";
import { countries } from "@/utils/constant";
import {
  CalendarIcon,
  CallIcon,
  UserIcon,
  VilaIcon,
} from "@/utils/formIcons";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  gridView?: boolean;
}

// ============================================================
// EVENT TYPE OPTIONS
// ============================================================

const eventTypeOptions = [
  {
    value: "wedding",
    label: "Wedding",
  },
  {
    value: "small-gathering",
    label: "Small Gathering",
  },
  {
    value: "corporate-event",
    label: "Corporate Event",
  },
  {
    value: "birthday",
    label: "Birthday",
  },
  {
    value: "other",
    label: "Other",
  },
];

// ============================================================
// DROPDOWN TYPES
// ============================================================

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: DropdownOption[];
  error?: string;
}

// ============================================================
// CUSTOM DROPDOWN
// ============================================================

const CustomDropdown = ({
  value,
  onChange,
  placeholder,
  options,
  error,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(
    (option) => option.value === value
  );

  // ----------------------------------------------------------
  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  // ----------------------------------------------------------

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // ----------------------------------------------------------
  // SELECT OPTION
  // ----------------------------------------------------------

  const handleSelect = (
    selectedValue: string
  ) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative w-full"
    >
      {/* SELECTED VALUE */}
      <button
        type="button"
        onClick={() =>
          setIsOpen((prev) => !prev)
        }
        className="flex w-full items-center justify-between gap-2 bg-transparent text-left outline-none"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span
          className={
            selectedOption
              ? "text-secondarya"
              : "text-secondarya/70"
          }
        >
          {selectedOption?.label ||
            placeholder}
        </span>

        <IoIosArrowDown
          className={`shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN OPTIONS */}
      {isOpen && (
        <div className="absolute left-0 top-full z-[9999] mt-2 w-full min-w-[180px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() =>
                handleSelect(option.value)
              }
              className={`block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-gray-100 ${
                value === option.value
                  ? "bg-primary/10 text-primary"
                  : "text-secondarya"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================================
// WEDDING FORM
// ============================================================

const WeddingForm = ({
  gridView = false,
}: Props) => {
  // ==========================================================
  // EVENT DATE STATE
  // ==========================================================

  const [
    eventDate,
    setEventDate,
  ] = useState<Date | null>(null);

  // ==========================================================
  // DATE LIMITS
  // ==========================================================

  const {
    min,
    max,
  } = getDateInputLimits({
    showPast: false,
    showFuture: true,
  });

  const minDate = min
    ? new Date(min)
    : undefined;

  const maxDate = max
    ? new Date(max)
    : undefined;

  // ==========================================================
  // FORM HOOK
  // ==========================================================

  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
    submitSuccess,
  } = useForm({
    // Event Date
    includeCheckIn: true,
    includeCheckOut: false,

    // Event Type
    includeEventType: true,

    // Not required for this form
    includeMessage: false,
    includeCity: false,
    includeBudget: false,
    includeVilla: false,

    // Single date = Event Date
    singleDateMode: true,

    // After successful submission
    onSubmitSuccess: () => {
      setEventDate(null);
    },
  });

  // ==========================================================
  // EVENT TYPE CHANGE
  // ==========================================================

  const handleEventTypeChange = (
    value: string
  ) => {
    setFieldValue(
      "eventType",
      value
    );
  };

  // ==========================================================
  // EVENT DATE CHANGE
  // ==========================================================

  const handleEventDateChange = (
    date: Date | null
  ) => {
    setEventDate(date);

    setFieldValue(
      "checkIn",
      date
        ? date
            .toISOString()
            .split("T")[0]
        : ""
    );
  };

  // ==========================================================
  // FORM INPUT STYLES
  // ==========================================================

  const inputWrapperClass =
    "flex h-[42px] items-center gap-2 rounded-lg border border-[#d6d6d6] bg-white px-3";

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full rounded-xl border border-[#173d36] bg-[#faf9f6] shadow-sm ${
        gridView
          ? "p-4"
          : "px-4 py-4"
      }`}
    >
      {/* ================================================== */}
      {/* FORM FIELDS */}
      {/* ================================================== */}

      <div
        className={`flex w-full items-start gap-2.5 ${
          gridView
            ? "flex-col"
            : "flex-wrap lg:flex-nowrap"
        }`}
      >
        {/* ================================================= */}
        {/* FULL NAME */}
        {/* ================================================= */}

        <div
          className={`w-full ${
            gridView
              ? ""
              : "lg:flex-1"
          }`}
        >
          <div
            className={
              inputWrapperClass
            }
          >
            <span className="shrink-0 text-p2">
              <UserIcon />
            </span>

            <input
              type="text"
              name="name"
              value={
                formData.name
              }
              onChange={
                handleChange
              }
              placeholder="Full Name"
              className="w-full min-w-0 bg-transparent text-sm text-secondarya outline-none placeholder:text-secondarya/70"
              aria-label="Full Name"
            />
          </div>

          {errors.name && (
            <p className="mt-1 text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        {/* ================================================= */}
        {/* PHONE */}
        {/* ================================================= */}

        <div
          className={`w-full ${
            gridView
              ? ""
              : "lg:flex-1"
          }`}
        >
          <div
            className={
              inputWrapperClass
            }
          >
            <span className="shrink-0 text-p2">
              <CallIcon />
            </span>

            {/* COUNTRY CODE */}
            <div className="relative shrink-0">
              <select
                name="countryCode"
                value={
                  formData.countryCode ||
                  "+91"
                }
                onChange={(e) =>
                  setFieldValue(
                    "countryCode",
                    e.target.value
                  )
                }
                className="cursor-pointer appearance-none bg-transparent pr-4 text-sm text-secondarya outline-none"
                aria-label="Country Code"
              >
                {countries.map(
                  (
                    country,
                    index
                  ) => (
                    <option
                      key={`${country.code}-${index}`}
                      value={
                        country.code
                      }
                    >
                      {
                        country.code
                      }
                    </option>
                  )
                )}
              </select>

              <IoIosArrowDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-xs" />
            </div>

            {/* PHONE NUMBER */}
            <input
              type="tel"
              name="phone"
              value={
                formData.phone
              }
              onChange={
                handleChange
              }
              placeholder="Ph Number"
              className="w-full min-w-0 bg-transparent text-sm text-secondarya outline-none placeholder:text-secondarya/70"
              aria-label="Phone Number"
            />
          </div>

          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        {/* ================================================= */}
        {/* EVENT TYPE */}
        {/* ================================================= */}

        <div
          className={`w-full ${
            gridView
              ? ""
              : "lg:flex-1"
          }`}
        >
          <div
            className={
              inputWrapperClass
            }
          >
            <span className="shrink-0 text-p2">
              <VilaIcon />
            </span>

            <CustomDropdown
              value={
                formData.eventType ||
                ""
              }
              onChange={
                handleEventTypeChange
              }
              placeholder="Event Type"
              options={
                eventTypeOptions
              }
              error={
                errors.eventType
              }
            />
          </div>

          {errors.eventType && (
            <p className="mt-1 text-xs text-red-500">
              {
                errors.eventType
              }
            </p>
          )}
        </div>

        {/* ================================================= */}
        {/* EVENT DATE */}
        {/* ================================================= */}

        <div
          className={`w-full ${
            gridView
              ? ""
              : "lg:flex-1"
          }`}
        >
          <div
            className={
              inputWrapperClass
            }
          >
            <span className="shrink-0 text-p2">
              <CalendarIcon />
            </span>

            <DatePicker
              selected={
                eventDate
              }
              onChange={
                handleEventDateChange
              }
              minDate={
                minDate
              }
              maxDate={
                maxDate
              }
              placeholderText="Event Date"
              dateFormat="dd/MM/yyyy"
              className="w-full min-w-0 bg-transparent text-sm text-secondarya outline-none placeholder:text-secondarya/70"
              wrapperClassName="w-full"
              calendarClassName="!z-[99999]"
              popperClassName="!z-[99999]"
              aria-label="Event Date"
            />
          </div>

          {errors.checkIn && (
            <p className="mt-1 text-xs text-red-500">
              {
                errors.checkIn
              }
            </p>
          )}
        </div>

        {/* ================================================= */}
        {/* SUBMIT BUTTON */}
        {/* ================================================= */}

        <div
          className={`w-full ${
            gridView
              ? ""
              : "lg:w-auto"
          }`}
        >
          <button
            type="submit"
            disabled={
              isSubmitting
            }
            className="h-[42px] w-full whitespace-nowrap rounded-full bg-[#003c32] px-6 text-sm font-medium uppercase tracking-wide text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 lg:w-auto"
          >
            {isSubmitting
              ? "Submitting..."
              : submitSuccess
                ? "Thank You!"
                : "ENQUIRE NOW"}
          </button>
        </div>
      </div>

      {/* ================================================== */}
      {/* OFFER TEXT */}
      {/* ================================================== */}

      <p className="mt-3 text-center text-xs text-[#173d36]">
        Enjoy a 15% Discount on
        WEDDING & SMALL GATHERING
        bookings! Limited DATES
        Available!
      </p>
    </form>
  );
};

export default WeddingForm;