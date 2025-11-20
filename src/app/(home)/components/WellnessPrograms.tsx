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
import Link from "next/link";
import { Navigation } from "swiper/modules";

const WellnessPrograms: React.FC<WellnessProgramsTypes> = ({
  title,
  description,
  icon,
  cards,
  links,
}) => {
  return (
    <Section className="flex flex-col md:gap-14 gap-8 w-full bg-bg1">
      <Container className="flex items-center justify-center flex-col w-full">
        {icon}
        <SectionHeadingDesc
          title={title}
          description={description}
          textcenter
        />
      </Container>
      <div className="max-w-[1410px] max-md:px-5 ml-auto w-full relative">
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
        {/* slider buttons */}
        <div className="flex items-center justify-center gap-8 max-md:hidden">
          <button className="wellness-prev flex items-center justify-center w-8">
            <BtnPrevIcon />
          </button>
          <button className="wellness-next flex items-center justify-center w-8">
            <BtnNextIcon />
          </button>
        </div>
        <button className="wellness-prev px-4 flex md:hidden items-center justify-center w-10 aspect-square rounded-full bg-white absolute left-0 box-shadow top-[35%] -translate-y-[35%] z-10">
          <BtnPrevIcon2 />
        </button>
        <button className="wellness-next px-4 flex md:hidden items-center justify-center w-10 aspect-square rounded-full bg-white absolute right-0 box-shadow top-[35%] -translate-y-[35%] z-10">
          <BtnNextIcon2 />
        </button>
      </div>
      <Container>
        {/* {links.map((link, index) => (
          <OnlyButton
            key={index}
            onclick={() => setIsOpen(true)}
            label={link.label}
            className="w-fit bg-primary text-white mx-auto"
          />
        ))} */}
        <div className="flex justify-center">
          <Link
            href={links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            download={true}
            className="transition-all rounded-lg max-md:w-full flex items-center justify-center font-medium border duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-2xl px-6 py-3 mt-4 bg-primary text-white"
          >
            <DownloadIcon />
            &nbsp;
            {links[0].label}
          </Link>
        </div>
      </Container>
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
      d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z"
      fill="white"
    />
  </svg>
);
