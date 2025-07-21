import { AccommodationTypes } from "@/@types/types";
import { Headings } from "../typography";
import Image from "next/image";

const AccommodationCard: React.FC<AccommodationTypes["cards"][0]> = ({
  title,
  src,
}) => {
  return (
    <div className="md:space-y-10 space-y-2">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover rounded-sm"
          sizes="100vw"
        />
      </div>
      <Headings level={3} className="md:text-[2rem]/[2.5rem] text-[1.375rem] font-medium abhayaLibre text-primary text-center">
        {title}
      </Headings>
    </div>
  );
};

export default AccommodationCard;
