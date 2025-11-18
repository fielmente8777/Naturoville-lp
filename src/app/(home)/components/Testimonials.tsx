"use client";
import { TestimonialsTypes } from "@/@types/types";
import { LazyLoadedVideo, Section, SectionWithContainer } from "@/components";
import { RatingIcon } from "@/utils/icons";

const Testimonials: React.FC<TestimonialsTypes> = ({ title, review }) => {
  return (
    <Section className="bg-bg1 max-md:!py-0">
      <SectionWithContainer>
        <div className="w-full md:space-y-14 space-y-8">
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <div className="flex items-center gap-2 justify-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <RatingIcon key={index} />
              ))}
            </div>
            <h2 className="text-primary text-2xl md:text-5xl abhayaLibre text-center">
              {title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 max-w-3xl mx-auto">
            {review?.map((card, index) => (
              <div key={index}>
                <LazyLoadedVideo src={card.videoSrc} poster={card.thumbnail}  />
              </div>
            ))}
          </div>
        </div>
      </SectionWithContainer>
    </Section>
  );
};

export default Testimonials;

{
  /* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
  <div className="flex flex-col md:gap-7 gap-6 max-w-lg">
    <div className="md:space-y-4 space-y-2">
      <h2 className="text-dark text-lg max-md:text-center">{title}</h2>
      <h3 className="md:text-5xl text-2xl text-primary abhayaLibre max-md:text-center">
        {description}
      </h3>
    </div>
    <div className="w-full max-w-[80px] relative aspect-square max-md:mx-auto">
      <Image src="/quote.png" alt="quote" fill className="object-contain" />
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
        renderSlide={(card) => <TestimonialCard {...card} />}
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
</div>; */
}
