"use client";
import { AccommodationTypes } from "@/@types/types";
import {
  AccommodationCard,
  Container,
  OnlyButton,
  Section,
  SectionHeadingDesc,
  SwiperCarousel
} from "@/components";
import DataContext from "@/contextApi/DataContext";
import { FlowerIcon } from "@/utils/icons";
import Link from "next/link";
import { useContext } from "react";
import { Autoplay, Pagination } from "swiper/modules";

const Accommodation: React.FC<AccommodationTypes> = ({
  title,
  description,
  cards,
  links,
}) => {
  const { setIsOpen } = useContext(DataContext);
  return (
    <Section className="max-md:!py-0">
      <Section className="relative after:absolute after:content-[''] after:bg-[url(/bg.png)] after:bg-no-repeat after:bg-cover after:opacity-3.5 md:after:w-[614px] after:aspect-[4/2.5] after:left-0 after:-top-16 after:z-[-1]">
        <div className="w-full md:space-y-14 space-y-8">
          <Container className="flex flex-col items-center justify-center w-full">
            <FlowerIcon />
            <SectionHeadingDesc
              title={title}
              description={description}
              textcenter
            />
          </Container>
          <div className="common max-md:px-4">
            <SwiperCarousel
              data={cards.length >= 5 ? cards : [...cards, ...cards]}
              slidesPerView={1}
              spaceBetween={24}
              loop={true}
              centeredSlides={true}
              grabCursor={true}
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true, el: ".pagination" }}
              className="w-full"
              breakpoints={{
                768: {
                  slidesPerView: 1.5,
                },
                1024: {
                  slidesPerView: 2.5,
                },
              }}
              renderSlide={(card) => <AccommodationCard {...card} />}
            />
            {/* <div className="pagination flex items-center justify-center mt-8"></div> */}
          </div>
          <div className="flex justify-center mt-4 max-md:px-4">
            {/* {links.map((link, index) => (
              <OnlyButton
                key={index}
                onclick={() => setIsOpen(true)}
                label={link.label}
                className="bg-primary text-white"
              />
            ))} */}
            <div className="flex justify-center">
              <Link href="https://wa.me/+919520890995?text=Hello" target="_blank" className="transition-all rounded-lg max-md:w-full flex items-center justify-center font-medium border duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-2xl px-6 py-3 mt-4 bg-primary text-white">Book Now</Link>

            </div>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default Accommodation;
