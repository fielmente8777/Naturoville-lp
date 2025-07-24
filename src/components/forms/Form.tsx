"use client";
import axios from "axios";
import { useRef, useState } from "react";
import { countries } from "../chatbot/constant";
import useClickOutside from "@/hocks/useClickOutside";
import { DropDownIcon } from "@/utils/icons";
import { contact } from "../../../Constent";

const Form = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    message: "",
    wellnessOffer: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    wellnessOffer: "",
  });

  // Regex patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const dropDownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropDownRef, () => {
    setIsDropdownOpen(false);
  });

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

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
      wellnessOffer: "",
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
          Description: formData.message,
          created_from: "website",
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
          message: "",
          wellnessOffer: "",
        });
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
      name: "message",
      type: "textarea",
      placeholder: "Message",
      required: false,
    },
  ];

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {inputFields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1">
            {field.type === "tel" ? (
              <div className="flex items-center border border-light rounded-lg divide-x divide-light">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className={`ps-3 py-3.5 bg-white focus:outline-none border-light rounded-l-md `}
                  aria-label="Country code"
                  style={{ width: `${countryCode.length * 2.5}ch` }}
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
                  className="pl-2 w-full py-3.5 bg-white outline-none rounded-lg"
                  aria-required={field.required}
                />
              </div>
            ) : field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={field.placeholder}
                rows={3}
                className="px-4 py-3.5 bg-white border border-light rounded-lg resize-none"
                aria-required={field.required}
              />
            ) : field.type === "select" ? (
              <div className="relative" ref={dropDownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full px-4 py-3.5 text-left bg-white border border-light rounded-lg  flex items-center justify-between ${
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
                    className="absolute z-10 w-full mt-1 bg-white border border-light rounded-lg shadow-lg"
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
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100 rounded-lg"
                        role="option"
                        aria-selected={formData.wellnessOffer === offer}
                      >
                        {offer}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="px-4 py-3.5 bg-white border border-light rounded-lg"
                aria-required={field.required}
              />
            )}
            {errors[field.name as keyof typeof errors] && (
              <p className="text-sm text-red-500">
                {errors[field.name as keyof typeof errors]}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`py-3 px-6 bg-primary text-white rounded-lg uppercase font-medium hover:bg-secondary transition-colors ${
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

export default Form;
