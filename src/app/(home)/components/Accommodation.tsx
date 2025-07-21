"use client";
import { AccommodationTypes } from "@/@types/types";
import {
  AccommodationCard,
  Container,
  LinkButton,
  Section,
  SectionHeadingDesc,
  SwiperCarousel,
} from "@/components";
import { FlowerIcon } from "@/utils/icons";
import { Autoplay, Pagination } from "swiper/modules";

const Accommodation: React.FC<AccommodationTypes> = ({
  title,
  description,
  cards,
  links,
}) => {
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
            <div className="pagination flex items-center justify-center mt-8"></div>
          </div>
          <div className="flex justify-center mt-4 max-md:px-4">
            {links.map((link, index) => (
              <LinkButton
                key={index}
                href={link.href}
                label={link.label}
                className="bg-primary text-white"
              />
            ))}
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default Accommodation;
