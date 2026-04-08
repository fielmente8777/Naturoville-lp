import { AccommodationTypes } from "@/@types/types";
import { Headings } from "../typography";
import Image from "next/image";
import SwiperCarousel from "../SwiperCarousel";
import { Navigation } from "swiper/modules";

const AccommodationCard: React.FC<AccommodationTypes["cards"][0]> = ({
  title,
  images,
}) => {
  return (
    <div className="md:space-y-10 space-y-2 room-card-2">
      <SwiperCarousel
        data={images || []}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={true}
        renderSlide={(src) => (
          <div className="relative md:aspect-[4/3] aspect-[4/2.5] w-full">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover rounded-sm"
              sizes="100vw"
            />
          </div>
        )}
      />
      <Headings
        level={3}
        className="md:text-[2rem]/[2.5rem] text-[1.375rem] font-medium abhayaLibre text-primary text-center"
      >
        {title}
      </Headings>
    </div>
  );
};

export default AccommodationCard;
