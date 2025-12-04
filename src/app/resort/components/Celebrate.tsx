import { LinkButton, Section, SectionHeadingDesc } from "@/components";
import { FlowerIcon3 } from "@/utils/icons";
import Image from "next/image";
import React from "react";

interface CelebrateProps {
  title: string;
  subTitle: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
  images: { src: string; alt: string }[];
}

const Celebrate = ({
  title,
  subTitle,
  description,
  images,
  link,
}: CelebrateProps) => {
  return (
    <Section className="!py-0">
      <div className="grid lg:grid-cols-[1.6fr_1.5fr_1.6fr]">
        <div className="relative w-full aspect-[2/2.5]">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center shadow-inner items-center space-y-4 px-4 py-8">
          <FlowerIcon3 />
          <SectionHeadingDesc title={title} description={subTitle} textcenter />

          <p className="text-center text-light2">{description}</p>

          <div>
            <LinkButton
              href={link.href}
              label={link.label}
              showIcon
              className="bg-primary text-white rounded-full!"
            />
          </div>
        </div>

        <div className="relative w-full aspect-[2/2.5]">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default Celebrate;
