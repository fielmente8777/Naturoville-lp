import { LinkButton, Section, SectionHeadingDesc } from "@/components";
import Image from "next/image";
import React from "react";

interface RestaurantProps {
  title: string;
  subTitle: string;

  cards: {
    title: string;
    src: string[];
    description: string;
    link: {
      label: string;
      href: string;
    };
  }[];
}

const Restaurant = ({ title, subTitle, cards }: RestaurantProps) => {
  return (
    <Section>
      <SectionHeadingDesc title={title} description={subTitle} textcenter />

      <div className="mt-12 space-y-16">
        {cards.map((card, index) => (
          <div
            className={`flex gap-8 items-center max-w-[1330px] bg-black ${index % 2 === 0 ? "flex-row-reverse" : "lg:flex-row"}`}
            key={index}
          >
            <div
              className={`flex-5 items-center ${index % 2 === 0 ? "order-1" : "order-2"}`}
            >
              <div className="relative w-full aspect-4/2">
                <Image
                  src={card.src[0]}
                  alt="restaurant-image"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-2 border border-white z-10 flex items-end justify-center" />
              </div>
            </div>

            <div
              className={`col-span-4 space-y-4 ${index % 2 === 0 ? "order-2" : "order-1"}`}
            >
              <h1 className="md:text-3xl text-2xl text-primary abhayaLibre">
                {card.title}
              </h1>
              <p className="text-lg/relaxed">{card.description}</p>

              <div>
                <LinkButton
                  label={card.link.label}
                  href={card.link.href}
                  className="w-fit bg-primary text-white rounded-full!"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Restaurant;
