"use client";
import { AccommodationTypes } from "@/@types/types";
import {
  AccommodationCard,
  Container,
  Section,
  SectionHeadingDesc,
  SwiperCarousel,
} from "@/components";
import { BtnNextIcon, BtnNextIcon2, BtnPrevIcon, BtnPrevIcon2, FlowerIcon3 } from "@/utils/icons";
import Link from "next/link";
import { Navigation } from "swiper/modules";

const Accommodation: React.FC<AccommodationTypes> = ({
  title,
  description,
  cards,
  links,
}) => {
  return (
    <Section className="max-md:!py-0">
      <Section className="">
        <div className="w-full md:space-y-14 space-y-8">
          <Container className="flex flex-col items-center justify-center w-full">
              <FlowerIcon3 />
              <SectionHeadingDesc title={title} description={description} textcenter/>
          </Container>
          <div className="common max-md:px-4">
            <SwiperCarousel
              data={cards.length >= 5 ? cards : [...cards, ...cards]}
              slidesPerView={1}
              spaceBetween={24}
              loop={true}
              centeredSlides={true}
              grabCursor={true}
              modules={[Navigation]}
              navigation={{
                nextEl: ".accommodation-next",
                prevEl: ".accommodation-prev",
              }}
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
          <div className="flex items-center justify-center gap-4">
            <button className="accommodation-prev flex items-center justify-center text-primary rounded-full">
              <BtnPrevIcon/>
            </button>
            <button className="accommodation-next flex items-center justify-center text-primary rounded-full">
              <BtnNextIcon/>
            </button>
          </div>
          <div className="flex justify-center max-md:px-4">
            {/* {links.map((link, index) => (
              <OnlyButton
                key={index}
                onclick={() => setIsOpen(true)}
                label={link.label}
                className="bg-primary text-white"
              />
            ))} */}
            <div className="flex justify-center">
              <Link
                href={links[0].href}
                target="_blank"
                className="transition-all rounded-lg max-md:w-full flex items-center justify-center font-medium border duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-2xl px-6 py-3 mt-4 bg-primary text-white"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default Accommodation;
