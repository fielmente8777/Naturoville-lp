"use client";

import { introProps } from "@/@types/types";
import { SwiperCarousel } from "@/components";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";

const NewCelebrateSlider: React.FC<{ images: introProps["images"] }> = ({
  images,
}) => {
  return (
    <>
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={4}
        loop={true}
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        className="w-full"
        renderSlide={(image) => (
          <div className="relative w-full aspect-[4/3.25] overflow-hidden">
            <div className="relative w-full max-w-[75%] aspect-[4/3.5] rounded-3xl overflow-hidden">
              <Image
                src={image[0]}
                alt={image[0]}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-full">
              <div className="max-w-[40%] w-full rounded-3xl overflow-hidden ml-auto relative aspect-[4/6]">
                <Image
                  src={image[1]}
                  alt={image[1]}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default NewCelebrateSlider;
