"use client";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

const Accordion2: React.FC<Props> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl px-4 py-3">
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-primary"
      >
        <h3 className="text-lg">{question}</h3>

        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <Foo />
        </span>
      </button>

      {/* Answer */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
        }`}
      >
        <p className="overflow-hidden text-sm">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion2;

export const Foo = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="#002B21"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
