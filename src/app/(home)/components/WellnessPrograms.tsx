"use client";
import { WellnessProgramsTypes } from "@/@types/types";
import {
  Container,
  OnlyButton,
  Section,
  SectionHeadingDesc,
  SwiperCarousel,
  WellnesCard
} from "@/components";
import DataContext from "@/contextApi/DataContext";
import {
  BtnNextIcon,
  BtnNextIcon2,
  BtnPrevIcon,
  BtnPrevIcon2,
} from "@/utils/icons";
import Link from "next/link";
import { useContext } from "react";
import { Navigation } from "swiper/modules";

const WellnessPrograms: React.FC<WellnessProgramsTypes> = ({
  title,
  description,
  icon,
  cards,
  links,
}) => {
  const { setIsOpen } = useContext(DataContext);
  return (
    <Section className="flex flex-col md:gap-14 gap-8 w-full bg-bg1">
      <Container className="flex items-center justify-between w-full">
        <div className="w-full flex flex-col max-md:items-center max-md:justify-center">
          {icon}
          <SectionHeadingDesc
            title={title}
            description={description}
            smTextCenter
          />
        </div>
        {/* slider buttons */}
        <div className="flex items-center justify-center gap-8 max-md:hidden">
          <button className="wellness-prev flex items-center justify-center w-8">
            <BtnPrevIcon />
          </button>
          <button className="wellness-next flex items-center justify-center w-8">
            <BtnNextIcon />
          </button>
        </div>
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
          <Link href={links[0].href} target="_blank" className="transition-all rounded-lg max-md:w-full flex items-center justify-center font-medium border duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-2xl px-6 py-3 mt-4 bg-primary text-white">Choose Your Program</Link>

        </div>
      </Container>
    </Section>
  );
};

export default WellnessPrograms;
