import { SignatureTherapiesTypes } from "@/@types/types";
import Image from "next/image";

const TherapieCard: React.FC<SignatureTherapiesTypes["cards"][0]> = ({
  title,
  description,
  src,
}) => {
  return (
    <div className="">
      <div className="relative w-full md:aspect-[4/2.2] aspect-[4/2.4] rounded-md overflow-hidden">
        <Image
          src={src}
          alt={title}
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute md:block hidden bottom-6 left-6 right-6  bg-black/50 px-6 py-2 rounded-sm">
          <h3 className="text-[2rem]/[2.5rem] text-white abhayaLibre">
            {title}
          </h3>
          <p className="text-lg text-white font-light">{description}</p>
        </div>
      </div>
      <div className="md:hidden block mt-4 text-center">
        <h3 className="text-[2rem]/[2.5rem] text-primary abhayaLibre">{title}</h3>
        <p className="text-lg text-white font-light">{description}</p>
      </div>
    </div>
  );
};

export default TherapieCard;
