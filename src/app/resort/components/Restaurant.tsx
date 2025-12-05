import {
  Container,
  LinkButton,
  Section,
  SectionHeadingDesc,
} from "@/components";
import { FlowerIcon3 } from "@/utils/icons";
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
      <Container className="flex flex-col items-center justify-center w-full">
        <FlowerIcon3 />
        <SectionHeadingDesc title={title} description={subTitle} textcenter />
      </Container>

      <div className="mt-12 md:space-y-16 space-y-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`grid md:grid-cols-6 grid-cols-1 gap-8 items-center w-full max-w-[1450px]`}
              key={index}
            >
              <div
                className={`md:col-span-4 items-center ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
              >
                <div className="relative w-full aspect-[4/2.2]">
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
                className={`md:col-span-2 space-y-4 md:p-0 p-3 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
              >
                <h1 className="md:text-3xl text-2xl text-primary abhayaLibre">
                  {card.title}
                </h1>
                <p className="text-lg/relaxed">{card.description}</p>

                <div>
                  <LinkButton
                    label={card.link.label}
                    href={card.link.href}
                    showIcon
                    className="w-fit bg-primary text-white rounded-full!"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Restaurant;
