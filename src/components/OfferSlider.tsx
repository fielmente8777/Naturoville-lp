"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import { Section } from "./sectionComponents";
import SwiperCarousel from "./SwiperCarousel";

const OfferSlider = () => {
  const offersTitle = ["LIMITED TIME OFFER: UP TO 10% OFF – ENDS THIS SEPTEMBER!"];

  const data = offersTitle.length > 5 ? offersTitle : [...offersTitle, ...offersTitle, ...offersTitle];
  return (
    <Section className="bg-primary demo !py-0">
      <SwiperCarousel
        data={data}
        speed={8000}
        loop={true}
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}

        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        renderSlide={(item, index) => (
          <div key={index} className="py-3 w-full">
            <div className="relative">
              <p className="text-white text-wrap text-xl text-center max-sm:px-12">{item}</p>
              <span className="text-white absolute right-[-3.5px] top-1/2 translate-y-[-50%]">
                •
              </span>
            </div>
          </div>
        )}
      />
    </Section>
  );
}

export default OfferSlider;