"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGift } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { contact } from "../../../Constent";

const OfferPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const currentMonth = new Date().toLocaleString(undefined, { month: "long" });

  const text = `limited time discount upto 20% off this ${currentMonth}.`;

  // Auto-close panel after 5 seconds (show tab only)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={handleToggle}
        className="bg-primary border border-white relative z-40 cursor-pointer flex items-center gap-6 text-white font-semibold tracking-wider p-2 shadow-lg transition-all duration-300"
        style={{ writingMode: "vertical-rl" }}
      >
        {/* Show Gift Icon Only on Mobile & When Closed */}
        {/* {isMobile && !isOpen ? ( */}
        {isOpen ? <MdClose size={24} /> : <FaGift size={24} />}
        {/* ) : (
          <IoIosArrowDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : "-rotate-90"
            }`}
          />
        )} */}

        {/* Hide text when gift icon appears */}
        {/* {!(isMobile && !isOpen) && "CURRENT OFFERS"} */}
      </button>

      {/* Slide Panel */}
      <div
        className={`
    absolute top-0 h-full border border-white  z-20
    transition-all duration-700 ease-in-out
    ${isOpen ? "translate-x-0 " : "-translate-x-[250px]"}
  `}
      >
        <div className="flex flex-col items-center bg-primary/80 backdrop-blur-md justify-center w-[250px] gap-4 px-4 py-5">
          <div className="relative w-32 aspect-[4/2]">
            <Image
              src={"/LOGO 1.png"}
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>

          {/* <h2 className="text-white text-center font-semibold tracking-wider">
            Direct Booking Offer
          </h2> */}

          <p className="text-white text-center">{text}</p>

          <Link
            href={contact.WhatsappEmbadedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white px-3 py-2 rounded-full gap-2 text-sm text-primary uppercase"
          >
            Book Now
            {/* <ArrowUpIcons /> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
