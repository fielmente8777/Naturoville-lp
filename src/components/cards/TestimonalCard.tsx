"use client";
import { useState } from "react";
import { Headings } from "../typography";

const TestimonialCard: React.FC<{ author: string; review: string }> = ({ author: title, review: desc }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-full flex flex-col gap-6">
      <p className="text-light text-lg  max-md:text-center">
        {readMore ? desc : `${desc.slice(0, 300)}...`}
        <span
          className="cursor-pointer text-dark font-semibold"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "...Read less" : "Read more"}
        </span>
      </p>
      <Headings
        level={3}
        className="text-primary font-semibold text-lg tracking-wide max-md:text-center"
      >
        {title}
      </Headings>
    </div>
  );
};

export default TestimonialCard;
