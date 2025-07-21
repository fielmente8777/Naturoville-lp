"use client";
import { TestimonialsTypes } from "@/@types/types";
import {
  Section,
  SectionWithContainer,
  SwiperCarousel,
  TestimonialCard,
} from "@/components";
import { Autoplay, Pagination } from "swiper/modules";
import Form from "../../../components/forms/Form";
import Image from "next/image";

const Testimonials: React.FC<TestimonialsTypes> = ({
  title,
  description,
  cards,
}) => {
  return (
    <Section className="bg-bg1">
      <SectionWithContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="max-w-[518px] w-full bg-bg1 p-6 flex flex-col gap-4 border rounded-lg border-primary box-shadow">
            <h2 className="text-primary text-[1.75rem]/[2.25rem] abhayaLibre">
              Path to better stays!
            </h2>
            <Form />
          </div>
          <div className="flex flex-col md:gap-14 gap-8 max-w-lg">
            <div className="space-y-4">
              <h2 className="text-dark text-lg">{title}</h2>
              <h3 className="md:text-5xl text-2xl text-primary abhayaLibre">
                {description}
              </h3>
              <div className="w-full max-w-[60px] relative aspect-square">
                <Image
                  src="/quote.png"
                  alt="quote"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="common">
              <SwiperCarousel
                data={cards}
                slidesPerView={1}
                spaceBetween={24}
                loop={true}
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true, el: ".pagination_2" }}
                className="w-full"
                renderSlide={(card, index) => (
                  <TestimonialCard key={index} {...card} />
                )}
              />
              <div className="flex justify-center mt-4 pagination_2"></div>
            </div>
          </div>
        </div>
      </SectionWithContainer>
    </Section>
  );
};

export default Testimonials;
