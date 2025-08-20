"use client";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect } from "react";
import DataContext from "@/contextApi/DataContext";
import { Form1 } from "../forms";

const PopForm: React.FC = () => {
  const { isOpen, setIsOpen, setGridView } = useContext(DataContext);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setGridView(true);
    }
    return () => {
      document.body.style.overflow = "unset";
      setGridView(false);
    };
  }, [isOpen, setGridView]);
  return (
    <div
      className={`fixed flex items-center justify-center bg-primary/30 z-50 ${isOpen ? "inset-0 w-screen h-screen opacity-100 scale-100" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0"}`}
      onClick={(e) => {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className="max-w-sm shadow-2xl rounded-lg w-full relative bg-dark p-4 max-md:mx-4">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-16 bg-white right-4 z-20 cursor-pointer text-black p-2 rounded-full aspect-square hover:bg-secondary"
        >
          <AiOutlineClose size={20} />
        </button>
        <Form1 />
      </div>
    </div>
  );
};

export default PopForm;
