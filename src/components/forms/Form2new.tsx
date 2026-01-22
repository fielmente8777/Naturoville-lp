"use client";
import { getDateInputLimits } from "@/hocks/getDateInputLimits";
import useClickOutside from "@/hocks/useClickOutside";
import {
  ArrowUpIcons,
  DropDownIcon2,
  FillMail,
  FillPhoneIcon,
  UserIcon,
} from "@/utils/icons";
import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { contact } from "../../../Constent";
import { countries } from "@/utils/constant";

interface formProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  gridView?: boolean;
  rounded?: boolean;
}

const Form2New: React.FC<formProps> = ({
  setOpen,
  gridView = false,
  rounded = false,
}) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [countryCode, setCountryCode] = useState("+91");
  const { min } = getDateInputLimits({
    showPast: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const PACKAGEs = [
    // "Day cabana",
    // "Sunset cabana",
    "Private group cabana",
    "Birthdays",
    "Kitty parties",
    "Weddings",
    "Pool parties",
    "Others",
  ];
  const [isPACKAGEDropdownOpen, setIsPACKAGEDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    
    fullName: "",
    PhoneNumber: "",
    EmailId: "",
    PACKAGE: "",
  });
  

  const [error, setError] = useState({
   
    fullName: "",
    PhoneNumber: "",
    EmailId: "",
    PACKAGE: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (error[name as keyof typeof error]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };



  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      
      fullName: "",
      PhoneNumber: "",
      EmailId: "",
      PACKAGE: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
      isValid = false;
    }

    if (!formData.EmailId.trim()) {
      newErrors.EmailId = "Please enter your email";
      isValid = false;
    } else if (!validateEmail(formData.EmailId)) {
      newErrors.EmailId = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.PhoneNumber)) {
      newErrors.PhoneNumber = "Phone number must be 10 digits";
      isValid = false;
    }

    

    if (!formData.PACKAGE.trim()) {
      newErrors.PACKAGE = "PACKAGE is required";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          email: formData?.EmailId,
          Name: formData?.fullName,
          Contact: formData?.PhoneNumber,
          Description: ` PACKAGE: ${formData?.PACKAGE}`,
          // check_in: `${formData?.checkIn}`,
          // check_out: `${formData?.checkOut}`,
          created_from: "web-form",
          source_url: window.location.href,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        // Reset form completely
        setFormData({
          
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
          PACKAGE: "",
        });
        setError({
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
          PACKAGE: "",
        });

        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);

        if (setOpen) {
          setOpen(false);
        }
        window.open("/thank-you", "_blank");
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const PACKAGEDropDownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(PACKAGEDropDownRef, () => {
    if (isPACKAGEDropdownOpen) {
      setIsPACKAGEDropdownOpen(false);
    }
  });

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`grid ${
        !gridView ? "md:grid-cols-10" : "gap-2 bg-transparent"
      } grid-cols-2 max-md:gap-2  lg:divide-x max-md:divide-y divide-[#E0E0E0]`}
      ref={formRef}
    >
      {/* Full Name Field */}
      <div
        className={`col-span-2 relative flex flex-col px-4 gap-4 ${
          rounded && "lg:rounded-l-2xl"
        } bg-[#fff]  `}
      >
        <label
          htmlFor="fullName"
          className="text-sm max-md:py-3 uppercase text-[#343434]"
        >
          Full Name*
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          aria-label="Full Name*"
          placeholder="Type Here ..."
          onChange={handleInputChange}
          value={formData.fullName}
          className="outline-none  w-full bg-transparent text-base text-[#343434] placeholder:text-[#9C9C9C]"
        />
        <span className="md:right-2 right-6 absolute bottom-3">
          <UserIcon />
        </span>
        {error.fullName && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.fullName}
          </span>
        )}
      </div>

      {/* Phone Number Field */}
      <div className={`col-span-2 w-full flex flex-col px-4 gap-4 bg-[#fff]`}>
        <label
          htmlFor="PhoneNumber"
          className="text-sm max-md:py-3 uppercase text-[#343434]"
        >
          Phone Number*
        </label>
        <div className="flex relative items-center w-full">
          <select
            aria-label="Country Code"
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={`text-[#343434] placeholder:text-[#343434] focus:outline-none w-full bg-transparent`}
            style={{ width: `${countryCode.length * 2}ch` }}
          >
            {countries.map((country, index) => (
              <option
                key={index + 101}
                value={country.code}
                aria-label={country.name}
                className="bg-gray-100"
              >
                {`${country.code}`}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="PhoneNumber"
            aria-label="Phone Number*"
            placeholder="Type Here ..."
            onChange={handleInputChange}
            value={formData.PhoneNumber}
            className=" ps-1 outline-none max-w-[90%] no-spinner appearance-auto  w-full text-base text-[#343434] placeholder:text-[#9C9C9C] bg-transparent"
          />
          <span className="absolute md:-right-2 md:bottom-0 right-2 bottom-1">
            <FillPhoneIcon />
          </span>
        </div>
        {error.PhoneNumber && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.PhoneNumber}
          </span>
        )}
      </div>

      {/* Email Field */}
      <div className={`col-span-2 relative px-4 flex flex-col gap-4 bg-[#fff]`}>
        <label
          htmlFor="EmailId"
          className="text-sm uppercase max-md:py-3 text-[#343434]"
        >
          Email Id*
        </label>
        <input
          type="text"
          name="EmailId"
          aria-label="Email Id*"
          placeholder="Type Here ..."
          onChange={handleInputChange}
          value={formData.EmailId}
          className="outline-none  max-w-[90%] w-full bg-transparent text-base text-[#343434] placeholder:text-[#9C9C9C]"
        />
        <span className="absolute md:right-2 right-6 bottom-3">
          <FillMail />
        </span>
        {error.EmailId && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.EmailId}
          </span>
        )}
      </div>
      {/* PACKAGE Field */}
      <div
        className={`relative col-span-2 w-full flex flex-col bg-white`}
        ref={PACKAGEDropDownRef}
      >
        <label
          htmlFor="PACKAGE"
          className="text-sm max-md:py-2 uppercase text-[#343434] px-4"
        >
          PACKAGE*
        </label>
        <button
          type="button"
          onClick={() => setIsPACKAGEDropdownOpen(!isPACKAGEDropdownOpen)}
          className={`w-full px-4 py-3.5 text-left bg-white flex items-center justify-between ${
            !formData.PACKAGE ? "text-[#9C9C9C]" : ""
          }`}
          aria-haspopup="listbox"
          aria-expanded={isPACKAGEDropdownOpen}
        >
          {formData.PACKAGE ? formData.PACKAGE : "Select Package"}
          <span
            className={`${
              isPACKAGEDropdownOpen ? "rotate-180" : ""
            } transition-all duration-300 ease-in-out max-md:mr-2`}
          >
            <DropDownIcon2 />
          </span>
        </button>
        {isPACKAGEDropdownOpen && (
          <div
            role="listbox"
            className="absolute top-full z-10 w-full bg-white border border-light shadow-lg"
          >
            {PACKAGEs.map((PACKAGE) => (
              <button
                key={PACKAGE}
                type="button"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    PACKAGE: PACKAGE,
                  }));
                  setIsPACKAGEDropdownOpen(false);
                  setError((prev) => ({
                    ...prev,
                    wellnessOffer: "",
                  }));
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                role="option"
                aria-selected={formData.PACKAGE === PACKAGE}
              >
                {PACKAGE}
              </button>
            ))}
          </div>
        )}
        {error.PACKAGE && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.PACKAGE}
          </span>
        )}
      </div>
     

      {/* Submit Button */}
      <div
        className={` col-span-2 max-md:col-span-2 md:px-2 ${
          rounded && "lg:rounded-r-2xl overflow-hidden"
        } ${gridView && "col-span-2"} flex items-center bg-[#fff]`}
      >
        <button
          type="submit"
          aria-label="Book Now"
          className="text-center bg-primary py-4 w-full h-full text-white md:rounded-full hover:bg-primary/95 duration-300 transition-all ease-in-out capitalize"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="border-t-2 border-white w-6 h-6 rounded-full animate-spin mx-auto block" />
          ) : submitSuccess ? (
            "Thank You!"
          ) : (
            <span className="flex items-center justify-center gap-2">
              Book Now
              <span>
                <ArrowUpIcons />
              </span>
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default Form2New;

export const CalenderIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 19C2 20.7 3.3 22 5 22H19C20.7 22 22 20.7 22 19V11H2V19ZM19 4H17V3C17 2.4 16.6 2 16 2C15.4 2 15 2.4 15 3V4H9V3C9 2.4 8.6 2 8 2C7.4 2 7 2.4 7 3V4H5C3.3 4 2 5.3 2 7V9H22V7C22 5.3 20.7 4 19 4Z"
      fill="#003232"
    />
  </svg>
);
