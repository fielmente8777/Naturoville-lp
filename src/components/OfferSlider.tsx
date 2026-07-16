"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import { Section } from "./sectionComponents";
import SwiperCarousel from "./SwiperCarousel";

const OfferSlider = () => {
  const currentMonth = new Date().toLocaleDateString("en-US", {
    month: "long",
  });
  const offersTitle = [
    // `LIMITED TIME OFFER: UP TO 20% OFF – ENDS THIS ${currentMonth}`,
    "Monsoon Special Offer: Stay 3 Nights & Enjoy the 4th Night Complimentary! Hurry Offer Ends Soon.",
  ];

  const data =
    offersTitle.length > 2
      ? offersTitle
      : [...offersTitle, ...offersTitle, ...offersTitle];
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
        slidesPerView={0.4}
        spaceBetween={550}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        renderSlide={(item, index) => (
          <div key={index} className="py-3 w-full">
            <div className="relative">
              <p className="text-white text-nowrap text-xl text-center max-sm:px-12 uppercase">
                {item}
              </p>
              <span className="text-white absolute right-[-3.5px] top-1/2 translate-y-[-50%]">
                •
              </span>
            </div>
          </div>
        )}
      />
    </Section>
  );
};

export default OfferSlider;
