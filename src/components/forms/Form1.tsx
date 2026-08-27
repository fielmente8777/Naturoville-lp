"use client";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import useClickOutside from "@/hocks/useClickOutside";
import { DropDownIcon } from "@/utils/icons";
import { contact } from "../../../Constent";
import { getDateInputLimits } from "@/hocks/getDateInputLimits";
import DatePicker from "react-datepicker";
import DataContext from "@/contextApi/DataContext";
import "react-datepicker/dist/react-datepicker.css";
import { countries } from "@/utils/constant";

const Form1 = () => {
  const { gridView, isExtended, setIsExtended } = useContext(DataContext);
  const formRef = useRef<HTMLDivElement | null>(null);
  const [countryCode, setCountryCode] = useState("+91");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOfferDropdownOpen, setIsOfferDropdownOpen] = useState(false);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  const { min } = getDateInputLimits({
    showPast: false,
  });

  const offers = [
    // "Wellness Offers",
    "Rejuvenation Treatments",
    "Lifestyle Treatments",
    "Ailment Treatments",
    "Panchkarma",
    "Ladies Shakti Special",
    "Detoxification Treatments",
    "Ayurvedic Weight loss Treatments",
    "Stress Management",
  ];

  // Time slots as shown in the reference image
  // const timeSlots = [
  //   "10 AM to 12 PM IST",
  //   "12 PM to 2 PM IST",
  //   "2 PM to 4 PM IST",
  //   "4 PM to 6 PM IST",
  //   "6 PM to 8 PM IST",
  // ];
  const timeSlots = [
    "Whatsapp",
    "Call",
    "Email",
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    wellnessOffer: "",
    checkIn: "",
    checkOut: "",
    preferTime: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    wellnessOffer: "",
    dateRange: "",
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

  const handleDateRangeChange = (update: [Date | null, Date | null]) => {
    setDateRange(update);

    const [start, end] = update;
    const checkInString = start ? start.toISOString().split("T")[0] : "";
    const checkOutString = end ? end.toISOString().split("T")[0] : "";

    setFormData((prev) => ({
      ...prev,
      checkIn: checkInString,
      checkOut: checkOutString,
    }));

    // Clear error when date is selected
    if (errors.dateRange) {
      setErrors((prev) => ({ ...prev, dateRange: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      wellnessOffer: "",
      dateRange: "",
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

    // Date range validation
    if (!formData.checkIn.trim() || !formData.checkOut.trim()) {
      newErrors.dateRange = "Please select both check-in and check-out dates";
      isValid = false;
    } else if (startDate && endDate && startDate > endDate) {
      newErrors.dateRange = "Check-out must be after check-in";
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
          Description: `Offer: ${formData.wellnessOffer}, Check-in: ${formData.checkIn}, Check-out: ${formData.checkOut}, Preferred Way to contact: ${formData.preferTime}`,
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
        setDateRange([null, null]);
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
      placeholder: "Select Treatment*",
      required: true,
    },
    {
      name: "dateRange",
      type: "dateRange",
      placeholder: "Check-in & Check-out Dates*",
      required: true,
    },
    {
      name: "preferTime",
      type: "time",
      placeholder: "Preferred Way of Contact*",
      required: true,
    },
  ];

  const offerDropDownRef = useRef<HTMLDivElement | null>(null);
  const timeDropDownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(offerDropDownRef, () => {
    setIsOfferDropdownOpen(false);
  });

  useClickOutside(timeDropDownRef, () => {
    setIsTimeDropdownOpen(false);
  });

  return (
    <div className="w-full" ref={formRef}>
      <form
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
                    {countries.map((country, index) => (
                      <option key={index} value={country.code}>
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
                ref={offerDropDownRef}
              >
                <button
                  type="button"
                  onClick={() => setIsOfferDropdownOpen(!isOfferDropdownOpen)}
                  className={`w-full h-full px-4 py-3.5 text-left bg-white flex items-center justify-between ${
                    !formData.wellnessOffer ? "text-gray-400" : ""
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={isOfferDropdownOpen}
                >
                  {formData.wellnessOffer || field.placeholder}
                  <span
                    className={`${isOfferDropdownOpen ? "rotate-180" : ""} transition-all duration-300 ease-in-out`}
                  >
                    <DropDownIcon />
                  </span>
                </button>
                {isOfferDropdownOpen && (
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
                          setIsOfferDropdownOpen(false);
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
            ) : field.type === "dateRange" ? (
              <div
                className={`${isExtended ? "md:col-span-2" : gridView ? "" : "hidden"} flex flex-col bg-white`}
              >
                <DatePicker
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={handleDateRangeChange}
                  minDate={new Date(min ?? Date.now())}
                  placeholderText={field.placeholder}
                  wrapperClassName="w-full !p-0 h-full bg-white"
                  className="px-4 py-3.5 bg-white w-full h-full"
                  // aria-required={field.required}
                  isClearable={true}
                />
                {errors.dateRange && (
                  <p className="text-sm text-red-500 col-span-full">
                    {errors.dateRange}
                  </p>
                )}
              </div>
            ) : field.type === "time" ? (
              <div
                className={`relative ${isExtended ? "md:col-span-2" : gridView ? "" : "hidden"} w-full h-full flex flex-col bg-white`}
                ref={timeDropDownRef}
              >
                <button
                  type="button"
                  onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                  className={`w-full h-full px-4 py-3.5 text-left bg-white flex items-center justify-between ${
                    !formData.preferTime ? "text-gray-400" : ""
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={isTimeDropdownOpen}
                >
                  {formData.preferTime || field.placeholder}
                  <span
                    className={`${isTimeDropdownOpen ? "rotate-180" : ""} transition-all duration-300 ease-in-out`}
                  >
                    <DropDownIcon />
                  </span>
                </button>
                {isTimeDropdownOpen && (
                  <div
                    aria-label="Time selection"
                    className="absolute top-full z-10 w-full bg-white border border-light shadow-lg max-h-60 overflow-y-auto"
                  >
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            preferTime: time,
                          }));
                          setIsTimeDropdownOpen(false);
                          setErrors((prev) => ({
                            ...prev,
                            preferTime: "",
                          }));
                        }}
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        role="option"
                        aria-selected={formData.preferTime === time}
                      >
                        {time}
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
