import { LinkButton, Section, SectionHeadingDesc, SectionWithContainer } from "@/components";

import React from "react";

interface EscapeProps {
  title: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
}

const EscapeCard = ({ title, description,link }: EscapeProps) => {
  return (
    <SectionWithContainer>
      <div className="bg-primary rounded-2xl py-12 px-8 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold abhayaLibre">{title}</h2>
        <p className="text-white text-sm md:text-lg mt-6">{description}</p>
        <div>
          <LinkButton
            label={link.label}
            href={link.href}
            showIcon
            className="mt-10 w-fit mx-auto bg-white text-primary rounded-full!"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default EscapeCard;
