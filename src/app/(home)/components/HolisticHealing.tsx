"use client";
import { HolisticHealingTypes } from "@/@types/types";
import {
  Container,
  Headings,
  HealingCard,
  Section,
  SwiperCarousel,
} from "@/components";
import { FlowerIcon } from "@/utils/icons";
import { Autoplay } from "swiper/modules";

const HolisticHealing: React.FC<HolisticHealingTypes> = ({ title, cards }) => {
  return (
    <Section className="relative after:absolute after:content-[''] after:bg-[url(/bg.png)] after:bg-no-repeat after:bg-contain after:bg-center after:opacity-3.5 md:after:w-[550px] after:inset-0 max-md:after:mx-4 after:h-[350px] after:left-0 after:top-0 after:z-[-1] ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-span-2 flex flex-col">
            <div className="md:max-w-[280px] w-full  md:mt-auto mb-0 space-y-4">
              <div className="flex max-md:items-center max-md:justify-center">
                <FlowerIcon />
              </div>
              <Headings
                level={2}
                className="text-primary md:text-[2rem]/[2.5rem] max-md:text-center text-xl font-medium abhayaLibre "
              >
                {title}
              </Headings>
            </div>
          </div>
          <div className="md:col-span-4 md:grid hidden grid-cols-4 gap-3">
            {cards.map((card, index) => (
              <HealingCard key={index} {...card} />
            ))}
          </div>
          <div className="md:col-span-4 md:hidden block w-full">
            <SwiperCarousel
              data={cards}
              slidesPerView={2}
              spaceBetween={0}
              loop={true}
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              renderSlide={(card, index) => (
                <HealingCard key={index} {...card} />
              )}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HolisticHealing;
