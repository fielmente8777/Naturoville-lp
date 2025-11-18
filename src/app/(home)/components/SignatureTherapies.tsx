"use client";
import { SignatureTherapiesTypes } from "@/@types/types";
import {
  OnlyButton,
  SectionHeadingDesc,
  SectionWithContainer,
  SwiperCarousel,
  TherapieCard
} from "@/components";
import {
  BtnNextIcon,
  BtnNextIcon2,
  BtnPrevIcon,
  BtnPrevIcon2,
  FlowerIcon3
} from "@/utils/icons";
import Link from "next/link";
import { useState } from "react";
import { EffectCoverflow, Navigation } from "swiper/modules";

const SignatureTherapies: React.FC<SignatureTherapiesTypes> = ({
  title,
  description,
  cards,
  links,
}) => {
  const categories = Array.from(new Set(cards.map((card) => card.category)));
  const [category, setCategory] = useState(categories[0]);
  const filteredCards = cards.filter((card) => card.category === category);
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };


  return (
    <SectionWithContainer sectionClassName="bg-[#FFFCF8]">
      <div className="flex flex-col md:gap-14 gap-8">
        <div className="flex flex-col items-center gap-4 w-full max-w-5xl mx-auto">
          <span>
            <FlowerIcon3 />
          </span>
          <SectionHeadingDesc
            title={title}
            description={description}
            textcenter
          />
        </div>
        {/* buttons for categories */}
        <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center w-full">
          {categories.map((cat, index) => (
            <OnlyButton
              label={cat}
              key={index}
              onclick={() => handleCategoryChange(cat)}
              className={`!px-[1.375rem] !py-2.5 max-md:w-[18rem] !rounded-full hover:scale-[1.01] ${category === cat ? "bg-primary text-white" : "bg-transparent box-shadow text-primary"} border border-primary transition-colors duration-300 hover:bg-primary hover:text-white active:bg-primary/90 active:text-white`}
            />
          ))}
        </div>
        {/* cards sliders */}
        <div className="w-full  md:block hidden">
          <SwiperCarousel
            data={[...filteredCards, ...filteredCards]}
            modules={[EffectCoverflow, Navigation]}
            navigation={{
              nextEl: ".about-next",
              prevEl: ".about-prev",
            }}
            className="w-full"
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0, // Keep flat
              stretch: 20, // Don't stretch
              depth: 300, // Controls scale & blur of side slides
              modifier: 2.5, // Makes the central slide more prominent
              slideShadows: true, // Shadow adds blur illusion
            }}
            speed={800}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            renderSlide={(card, index) => (
              <TherapieCard key={index} {...card} />
            )}
          />
        </div>
        <div className="w-full  block md:hidden relative">
          <SwiperCarousel
            data={[...filteredCards, ...filteredCards]}
            modules={[Navigation]}
            navigation={{
              nextEl: ".about-next",
              prevEl: ".about-prev",
            }}
            slidesPerView={1}
            spaceBetween={24}
            className="w-full"
            loop={true}
            speed={800}
            renderSlide={(card, index) => (
              <TherapieCard key={index} {...card} />
            )}
          />
          <button className="about-prev px-4 flex items-center justify-center w-10 aspect-square rounded-full bg-white absolute -left-4 box-shadow top-[30%] -translate-y-[30%] z-10">
            <BtnPrevIcon2 />
          </button>
          <button className="about-next px-4 flex items-center justify-center w-10 aspect-square rounded-full bg-white absolute -right-4 box-shadow top-[30%] -translate-y-[30%] z-10">
            <BtnNextIcon2 />
          </button>
        </div>
        {/* slider buttons */}
        <div className="md:flex hidden items-center justify-center gap-8">
          <button className="about-prev flex items-center justify-center w-8">
            <BtnPrevIcon />
          </button>
          <button className="about-next flex items-center justify-center w-8">
            <BtnNextIcon />
          </button>
        </div>
        {/* contact link */}
        {/* {links &&
          links.map((link, index) => (
            <OnlyButton
              key={index}
              // {...link}
              label={link.label}
              onclick={() => setIsOpen(true)}
              className="bg-primary text-white border-primary w-fit mx-auto"
            />
          ))} */}
          <div className="flex justify-center">
          <Link href={links[0].href} target="_blank" className="transition-all rounded-lg max-md:w-full flex items-center justify-center font-medium border duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-2xl px-6 py-3 mt-4 bg-primary text-white">Start Your Therapy</Link>

          </div>
      </div>
    </SectionWithContainer>
  );
};

export default SignatureTherapies;
