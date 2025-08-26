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
  // title,
  description,
  cards,
}) => {
  return (
    <Section className="bg-bg1 max-md:!py-0">
      <SectionWithContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col md:gap-7 gap-6 max-w-lg">
            <div className="md:space-y-4 space-y-2">
              {/* <h2 className="text-dark text-lg max-md:text-center">{title}</h2> */}
              <h3 className="md:text-5xl text-2xl text-primary abhayaLibre max-md:text-center">
                {description}
              </h3>
            </div>
            <div className="w-full max-w-[80px] relative aspect-square max-md:mx-auto">
              <Image
                src="/quote.png"
                alt="quote"
                fill
                className="object-contain"
              />
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
          <div className="max-w-[518px] w-full bg-bg1 p-6 flex flex-col gap-4 border rounded-lg border-primary box-shadow">
            <h2 className="text-primary text-[1.75rem]/[2.25rem] abhayaLibre">
              Path to better stays!
            </h2>
            <Form />
          </div>

        </div>
      </SectionWithContainer>
    </Section>
  );
};

export default Testimonials;
