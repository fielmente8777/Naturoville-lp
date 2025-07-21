import { WellnessProgramsTypes } from "@/@types/types";
import Image from "next/image";
import { Headings } from "../typography";

const WellnesCard: React.FC<WellnessProgramsTypes["cards"][0]> = ({
  title,
  src,
}) => {
  return (
    <div className="space-y-6">
      <div className="relative aspect-[4/3] md:aspect-[4/2.4] w-full">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <Headings level={3} className="text-[1.75rem]/[2rem] font-medium abhayaLibre text-primary">
        {title}
      </Headings>
    </div>
  );
};

export default WellnesCard;
