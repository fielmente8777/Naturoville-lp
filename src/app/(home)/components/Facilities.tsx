"use client";
import { FacilitiesTypes } from "@/@types/types";
import {
  Container,
  LinkButton,
  Section,
  SectionHeadingDesc,
  SwiperCarousel,
} from "@/components";
import { FlowerIcon3 } from "@/utils/icons";
import Image from "next/image";
import { Navigation } from "swiper/modules";

const Facilities: React.FC<FacilitiesTypes> = ({ title, cards }) => {
  return (
    <Section className="facilities box-shadow">
      <span className="span"></span>
      <div className="space-y-4 flex flex-col items-center justify-center">
        <FlowerIcon3 />
        <SectionHeadingDesc title={title} textcenter />
      </div>
      <div className="flex items-center justify-center gap-8 mt-10 lg:px-10 py-6">
        <button className="prev max-lg:hidden">
          <PrevIcon />
        </button>

        <Container>
          <SwiperCarousel
            data={cards}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            modules={[Navigation]}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            renderSlide={(card) => (
              <div className="grid lg:grid-cols-2 grid-cols-1 shadow-lg border border-primary overflow-hidden">
                <div className="w-full relative aspect-[4/2.5]">
                  <Image
                    src={card.images[0]}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="card px-6 py-10 flex flex-col gap-6">
                  <div className="space-y-1.5">
                    <h3 className="text-[2rem]/[2.5rem] text-primary abhayaLibre">
                      {card.title}
                    </h3>
                    <p className="text-lg text-primary">{card.subTitle}</p>
                  </div>
                  <ul className="list-disc pl-6">
                    {card.list.map((item, index) => (
                      <li key={index} className="text-light md:text-lg">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <LinkButton
                    target="_blank"
                    rel="noopener noreferrer"
                    href={card.link.href}
                    label={card.link.label}
                    className="bg-primary"
                  />
                </div>
              </div>
            )}
          />
        </Container>
        <button className="next max-lg:hidden">
          <NextIcon />
        </button>
      </div>
    </Section>
  );
};

export default Facilities;

export const NextIcon = () => (
  <svg
    width={73}
    height={15}
    viewBox="0 0 73 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M72.7071 6.65691C73.0976 7.04743 73.0976 7.6806 72.7071 8.07112L66.3431 14.4351C65.9526 14.8256 65.3195 14.8256 64.9289 14.4351C64.5384 14.0446 64.5384 13.4114 64.9289 13.0209L70.5858 7.36401L64.9289 1.70716C64.5384 1.31664 64.5384 0.68347 64.9289 0.292946C65.3195 -0.0975785 65.9526 -0.0975785 66.3431 0.292946L72.7071 6.65691ZM0 7.36401L0 6.36401L72 6.36401V7.36401V8.36401L0 8.36401L0 7.36401Z"
      fill="#002B21"
    />
  </svg>
);
export const PrevIcon = () => (
  <svg
    width={73}
    height={15}
    viewBox="0 0 73 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.292892 6.65691C-0.0976334 7.04743 -0.0976334 7.6806 0.292892 8.07112L6.65685 14.4351C7.04738 14.8256 7.68054 14.8256 8.07107 14.4351C8.46159 14.0446 8.46159 13.4114 8.07107 13.0209L2.41422 7.36401L8.07107 1.70716C8.46159 1.31664 8.46159 0.68347 8.07107 0.292946C7.68054 -0.0975785 7.04738 -0.0975785 6.65685 0.292946L0.292892 6.65691ZM73 7.36401V6.36401L1 6.36401V7.36401V8.36401L73 8.36401V7.36401Z"
      fill="#002B21"
    />
  </svg>
);
