import { WellnessProgramsTypes } from "@/@types/types";
import Image from "next/image";
import { Headings } from "../typography";

const WellnesCard: React.FC<WellnessProgramsTypes["cards"][0]> = ({
  title,
  src,
  desc
}) => {
  return (
    <div className="md:space-y-6 space-y-3">
      <div className="relative aspect-[4/2.2] md:aspect-[4/2.4] w-full">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <Headings level={3} className="md:text-[1.75rem]/[2rem] text-[1.5rem] max-md:text-center font-medium abhayaLibre text-primary">
        {title}
      </Headings>
      <p className="text-light md:text-lg">{desc}</p>
    </div>
  );
};

export default WellnesCard;
