"use client";
import { useState } from "react";
import { Headings } from "../typography";
import { TestimonialsTypes } from "@/@types/types";

const TestimonialCard: React.FC<TestimonialsTypes["cards"][0]> = ({
  author: title,
  review: desc,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-full flex flex-col gap-6">
      <p className="text-light text-lg ">
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
        className="text-primary font-semibold text-lg tracking-wide"
      >
        {title}
      </Headings>
    </div>
  );
};

export default TestimonialCard;
