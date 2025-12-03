import { ExperiencesProps } from "@/@types/types";
import Image from "next/image";

const ExperienceCard: React.FC<ExperiencesProps["cards"][0]> = ({
  title,
  alt,
  src,
}) => {
  return (
    <div className="relative w-full aspect-[4/5]">
      <Image
        src={src}
        alt={alt || title || "image"}
        fill
        className="object-cover"
      />
      <div className="absolute inset-2 border border-white z-10 flex items-end justify-center">
        <h3 className="text-2xl text-white font-aboreto text-center bg-black/40 w-full py-2">
          {title || alt}
        </h3>
      </div>
    </div>
  );
};

export default ExperienceCard;
