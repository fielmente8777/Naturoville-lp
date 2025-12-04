"use client";

import { SignatureTherapiesTypes } from "@/@types/types";
import { SwiperCarousel } from "@/components";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const GallerySlider: React.FC<{
  images: SignatureTherapiesTypes["images"];
}> = ({ images }) => {
  return (
    <div className="w-full md:mt-14 mt-8 common">
      <SwiperCarousel
        data={images || []}
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        speed={1000}
        className="w-full custom-swiper md:aspect-4/2 aspect-[4/5.5]"
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        renderSlide={(item) => (
          <div className="relative w-full aspect-[4/5.5] rounded-t-[11.5rem] overflow-hidden after:absolute after:inset-3 after:border after:border-white after:rounded-t-[11.5rem]">
            <Image src={item} alt="image" fill className="object-cover" />
          </div>
        )}
      />
    </div>
  );
};

export default GallerySlider;
