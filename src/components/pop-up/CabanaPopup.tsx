"use client";
import { CabanaPageData } from "@/app/cabana/cabanaPageData";
import Image from "next/image";
import { useState, useEffect } from "react";
import LinkButton from "../buttons/LinkButton";

const CabanaPopup = () => {
  const data = CabanaPageData?.celebratePageData;
  let hasBeenDismissed = false;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (hasBeenDismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    hasBeenDismissed = true;
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4`}
    >
      <div className="bg-white p-4 rounded-xl max-w-3xl w-full relative">
        <button
          className="text-primary absolute z-10 top-2 right-2 cursor-pointer hover:bg-primary hover:text-white w-8 aspect-square rounded-full"
          onClick={handleClose}
          type="button"
          aria-label="Close popup"
        >
          ✕
        </button>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center mt-5">
          <div className="w-full relative aspect-square">
            <Image
              src={data?.images[1].src}
              alt="image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-primary text-2xl md:text-3xl abhayaLibre">
              {data?.title}
            </h2>
            <p className="">{data?.description}</p>
            <LinkButton
              href={data?.link.href}
              label={data?.link.label}
              showIcon
              className="bg-primary text-white rounded-full! py-2!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabanaPopup;
