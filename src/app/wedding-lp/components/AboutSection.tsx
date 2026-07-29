"use client";

import {
  LinkButton,
  SectionHeadingDesc,
  SectionWithContainer,
  SwiperCarousel,
} from "@/components";
import {
  BtnNextIcon,
  BtnNextIcon2,
  BtnPrevIcon,
  BtnPrevIcon2,
  FlowerIcon3,
} from "@/utils/icons";
import Image from "next/image";
import { EffectCoverflow, Navigation } from "swiper/modules";

interface AboutSectionTypes {
  title: string;
  images: string[];
  description: string[];
  buttons: {
    label: string;
    link: string;
  }[];
}

const AboutSection: React.FC<AboutSectionTypes> = ({
  title,
  images,
  description,
  buttons,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative ">
      <div className="absolute inset-4 bg-bg1 border border-primary rounded-[56px] z-[-1]" />
      <div className="flex flex-col md:gap-14 gap-8">
        <div className="flex flex-col items-center gap-4 w-full max-w-5xl mx-auto">
          <span>
            <FlowerIcon3 />
          </span>
          <SectionHeadingDesc
            title={title}
            description={description[0]}
            descriptionColor="primary"
            textcenter
          />
        </div>

        {/* cards sliders */}
        <div className="w-full  md:block hidden">
          <SwiperCarousel
            data={images || []}
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
            renderSlide={(src) => (
              <div className="relative w-full md:aspect-[4/2.5] aspect-[4/2.4] rounded-md overflow-hidden">
                <Image
                  src={src}
                  alt={title}
                  className="object-cover"
                  fill
                  sizes="100vw"
                />
              </div>
            )}
          />
        </div>

        <div className="w-full  block md:hidden relative">
          <SwiperCarousel
            data={images || []}
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
            renderSlide={(src) => (
              <div className="relative w-full md:aspect-[4/2.5] aspect-[4/2.4] rounded-md overflow-hidden">
                <Image
                  src={src}
                  alt={title}
                  className="object-cover"
                  fill
                  sizes="100vw"
                />
              </div>
            )}
          />
          <button className="about-prev px-4 flex items-center justify-center w-10 aspect-square rounded-full bg-white absolute -left-3 box-shadow top-[50%] -translate-y-[50%] z-10">
            <BtnPrevIcon2 />
          </button>
          <button className="about-next px-4 flex items-center justify-center w-10 aspect-square rounded-full bg-white absolute -right-3 box-shadow top-[50%] -translate-y-[50%] z-10">
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

        {/* desc */}
        <p className="text-center text-primary md:text-lg">{description[1]}</p>

        <div className="flex justify-center">
          <LinkButton
            showIcon
            href={buttons[0].link}
            label={buttons[0].label}
            className="bg-primary text-white"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
