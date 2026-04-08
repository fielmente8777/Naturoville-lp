"use client";
import { LuxurySuitesSectionProps } from "@/@types/types";
import { SwiperCarousel } from "@/components";
import Image from "next/image";
import { Navigation } from "swiper/modules";

const RoomImageSlider: React.FC<{
  images: LuxurySuitesSectionProps["cards"][0]["images"];
}> = ({ images }) => {
  return (
    <div className="w-full room-card-2">
      <SwiperCarousel
        data={images || [""]}
        slidesPerView={1}
        spaceBetween={4}
        loop={true}
        modules={[Navigation]}
        navigation={true}
        className="w-full"
        renderSlide={(image) => (
          <div className="relative w-full aspect-[4/3.1] rounded-3xl overflow-hidden">
            <Image src={image} alt="image" fill className="object-cover" />
          </div>
        )}
      />
    </div>
  );
};

export default RoomImageSlider;
