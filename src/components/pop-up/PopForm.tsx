"use client";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect } from "react";
import DataContext from "@/contextApi/DataContext";
import { Form } from "../forms";

const PopForm: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(DataContext);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (
    <div
      className={`fixed flex items-center justify-center bg-secondary/30 z-50 ${isOpen ? "inset-0 w-screen h-screen opacity-100 scale-100" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0"}`}
      onClick={(e) => {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className="max-w-md shadow-2xl rounded-lg w-full relative bg-white p-4 max-md:mx-4">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-16 bg-white right-4 z-20 cursor-pointer text-black p-2 rounded-full aspect-square hover:bg-secondary"
        >
          <AiOutlineClose size={20} />
        </button>
        <Form />
      </div>
    </div>
  );
};

export default PopForm;
