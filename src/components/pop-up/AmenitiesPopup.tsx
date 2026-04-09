"use client";
import { useDataContext } from "@/contextApi/DataContext";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const AmenitiesPopup = () => {
  const { isAmenityOpen, setIsAmenityOpen, roomName, popUpAminityData } =
    useDataContext();
  useEffect(() => {
    if (isAmenityOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isAmenityOpen]);

  return (
    <div
      className={`fixed inset-0 z-999999 flex items-center justify-center bg-primary/50 backdrop-blur-md transition-all duration-300 ease-in-out ${
        isAmenityOpen
          ? "opacity-100 scale-100 visible"
          : "opacity-0 scale-95 invisible"
      }`}
    >
      <div className="max-w-5xl rounded-2xl overflow-hidden max-h-[78vh] h-full  w-full bg-white py-8 relative">
        <button
          onClick={() => setIsAmenityOpen(false)}
          className="absolute top-4 bg-primary right-4 z-20 cursor-pointer text-white p-2 rounded-full aspect-square hover:bg-secondary hover:shadow-2xl transition-all duration-300 ease-in-out"
        >
          <AiOutlineClose size={20} />
        </button>
        <h2 className="font-semibold px-8 text-primary abhayaLibre text-3xl capitalize mb-4">
          {roomName}
        </h2>
        <div className="overflow-y-auto bg-white h-full px-8 pb-8">
          {popUpAminityData?.map((section) => (
            <div key={section.title} className="mb-4 space-y-2">
              <h3 className="font-semibold text-primary jost text-xl capitalize">
                {section.title}
              </h3>
              <ul className="grid lg:grid-cols-2 gap-3">
                {section.amities.map((item) => (
                  <li key={item.title} className="flex gap-2.5">
                    {" "}
                    <span className="text-primary mt-px">
                      <TickIcon />{" "}
                    </span>{" "}
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesPopup;
export const TickIcon = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.25 9L15.42 6.9075L15.675 4.14L12.9675 3.525L11.55 1.125L9 2.22L6.45 1.125L5.0325 3.5175L2.325 4.125L2.58 6.9L0.75 9L2.58 11.0925L2.325 13.8675L5.0325 14.4825L6.45 16.875L9 15.7725L11.55 16.8675L12.9675 14.475L15.675 13.86L15.42 11.0925L17.25 9ZM7.5675 12.54L4.7175 9.6825L5.8275 8.5725L7.5675 10.32L11.955 5.9175L13.065 7.0275L7.5675 12.54Z"
      fill="currentColor"
    />
  </svg>
);
