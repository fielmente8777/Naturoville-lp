"use client";

import { WellnessProgramsTypes } from "@/@types/types";
import {
  Container,
  Section,
  SectionHeadingDesc,
  SwiperCarousel,
  WellnesCard,
} from "@/components";
import {
  BtnNextIcon,
  BtnNextIcon2,
  BtnPrevIcon,
  BtnPrevIcon2,
} from "@/utils/icons";
import { Navigation } from "swiper/modules";
import { contact } from "../../../../Constent";
import Link from "next/link";

const WellnessPrograms: React.FC<WellnessProgramsTypes> = ({
  title,
  description,
  icon,
  cards,
}) => {
  return (
    <Section className="flex w-full flex-col gap-8 bg-bg1 md:gap-14">
      {/* Heading */}
      <Container className="flex w-full flex-col items-center justify-center">
        {icon}

        <SectionHeadingDesc
          title={title}
          description={description}
          textcenter
        />
      </Container>

      {/* Wellness Programs Slider */}
      <div className="relative ml-auto w-full max-w-[1410px] max-md:px-5">
        <SwiperCarousel
          data={cards}
          className="w-full"
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2.25,
              spaceBetween: 24,
            },
          }}
          modules={[Navigation]}
          navigation={{
            nextEl: ".wellness-next",
            prevEl: ".wellness-prev",
          }}
          renderSlide={(card) => <WellnesCard {...card} />}
        />

        {/* Desktop Slider Buttons */}
        <div className="flex items-center justify-center gap-8 max-md:hidden">
          <button
            className="wellness-prev flex w-8 items-center justify-center"
            type="button"
          >
            <BtnPrevIcon />
          </button>

          <button
            className="wellness-next flex w-8 items-center justify-center"
            type="button"
          >
            <BtnNextIcon />
          </button>
        </div>

        {/* Mobile Previous Button */}
        <button
          className="wellness-prev box-shadow absolute left-0 top-[35%] z-10 flex aspect-square w-10 -translate-y-[35%] items-center justify-center rounded-full bg-white px-4 md:hidden"
          type="button"
        >
          <BtnPrevIcon2 />
        </button>

        {/* Mobile Next Button */}
        <button
          className="wellness-next box-shadow absolute right-0 top-[35%] z-10 flex aspect-square w-10 -translate-y-[35%] items-center justify-center rounded-full bg-white px-4 md:hidden"
          type="button"
        >
          <BtnNextIcon2 />
        </button>
      </div>

      {/* WELLNESS CTA */}

      <div className="w-full md:px-4 md:py-12">
        <div
          className="
      relative
      mx-auto
      flex
      h-[325px]
      w-[898px]
      flex-col
      overflow-hidden
      border-[0.5px]
      border-white
      bg-[#002B21]
      px-[24px]
      py-[32px]
      max-md:h-full
      max-md:w-full
    "
        >
          {/* =================================================
        LOTUS WATERMARK
        ================================================= */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <img
              src="/lotuswater.png"
              alt=""
              className="
          h-[390px]
          w-[390px]
          object-contain
          brightness-0
          invert
          opacity-[10]
        "
            />
          </div>

          {/* =================================================
        CONTENT
        ================================================= */}
          <div className="relative z-10 flex w-full flex-col items-center">
            {/* =================================================
          HEADING
          Figma: Abhaya Libre Medium
          Weight: 500
          Size: 48px
          Line Height: 56px
          ================================================= */}
            <h2
              className="
    abhayaLibre
    w-full
    max-w-[850px]
    text-center
    text-[48px]
    font-medium
    text-white
    max-md:text-[30px]
  "
            >
              Wellness Packages Starting at ₹25,000/-
              <br />
              per Night
            </h2>

            {/* =================================================
          DESCRIPTION
          ================================================= */}
            <p
              className="
          m-0
          mt-[24px]
          p-0
          text-center
          text-lg
          text-white
          max-md:mt-4
          max-md:text-[17px]
          max-md:leading-[22px]
        "
            >
              Your journey towards complete wellness begins here.
            </p>

            {/* =================================================
          BUTTONS
          ================================================= */}
            <div
              className="
          mt-[24px]
          grid
          w-full
          grid-cols-2
          gap-[24px]
          max-md:grid-cols-1
          max-md:gap-4
        "
            >
              {/* BOOK NOW */}
              <Link
                href={`https://wa.me/${contact.WhatsappNumber.replace(
                  /\s+/g,
                  ""
                )}?text=Hello`}
                target="_blank"
                rel="noopener noreferrer"
                className="
            flex
            py-2
            w-full
            items-center
            justify-center
            rounded-[8px]
            border
            border-white
            bg-white
            px-[16px]
            text-[20px]
            font-medium
            uppercase
            text-[#002B21]
            transition-all
            duration-200
            hover:bg-transparent
            hover:text-white
            max-md:text-[16px]
          "
              >
                BOOK NOW
              </Link>

              {/* DOWNLOAD BROCHURE */}
              <Link
                href="/Naturoville-Wellness-Resort-Brochure.pdf"
                download
                className="
            flex
            py-2
            w-full
            items-center
            justify-center
            gap-[14px]
            rounded-[8px]
            border
            border-white
            bg-transparent
            px-[16px]
            text-[20px]
            font-medium
            uppercase
            text-white
            transition-all
            duration-200
            hover:bg-white
            hover:text-[#002B21]
            max-md:text-[16px]
          "
              >
                <DownloadIcon />
                DOWNLOAD BROCHURE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WellnessPrograms;

export const DownloadIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125 4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.8042 19.4125 19.4125 19.0208 18.55 20 18H6Z"
      fill="currentColor"
    />
  </svg>
);
