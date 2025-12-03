"use client";
import { ExperiencesProps } from "@/@types/types";
import {
  Container,
  Section,
  SectionHeadingDesc,
  SwiperCarousel,
} from "@/components";
import ExperienceCard from "@/components/cards/ExperienceCard";
import { FlowerIcon3 } from "@/utils/icons";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

interface ExperiencesSlidersProps {
  title: string;
  subTitle: string;
  cards: ExperiencesProps["cards"];
}

const ExperiencesSliders: React.FC<ExperiencesSlidersProps> = ({
  cards,
  title,
  subTitle,
}) => {
  return (
    <Section>
      <Container className="flex flex-col items-center justify-center w-full">
        <FlowerIcon3 />
        <SectionHeadingDesc title={title} description={subTitle} textcenter />
      </Container>
      <div className="w-full mt-8">
        <SwiperCarousel
          data={cards || []}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          navigation={{
            nextEl: ".cafe-next",
            prevEl: ".cafe-prev",
          }}
          className="w-full we-offer-slider"
          swiperSlideClassName="swiper-slide"
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0, // Keep flat
            stretch: -22, // Don't stretch
            depth: 40, // Controls scale & blur of side slides
            modifier: 2, // Makes the central slide more prominent
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
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          renderSlide={(card) => <ExperienceCard {...card} />}
        />
      </div>
    </Section>
  );
};

export default ExperiencesSliders;
