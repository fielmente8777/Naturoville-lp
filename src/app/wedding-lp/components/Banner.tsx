import { Section } from "@/components";
import WeddingForm from "@/components/forms/WeddingForm";
import Image from "next/image";

interface BannerType {
  image: string;
  title: string;
  description: string;
  offer: string;
}

const Banner: React.FC<BannerType> = ({ image, title, description, offer }) => {
  return (
    <Section className="py-0! relative w-full aspect-square lg:aspect-[4/1.8]">
      <Image
        src={image}
        alt="wedding"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,43,33,0.7)_0%,rgba(0,43,33,0.5)_50%,rgba(0,43,33,0.8)_100%)] z-10" />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-[231px] aspect-4/2 rounded-lg border-[0.5px] backdrop-blur-sm border-white/70">
            <Image
              src="/LOGO 1.png"
              alt="logo"
              fill
              className="object-contain p-3"
            />
          </div>
          <h1 className="text-white text-3xl lg:text-7xl uppercase max-w-4xl mx-auto text-center abhayaLibre">
            {title}
          </h1>
          <p className="text-white/90 text-lg max-w-4xl mx-auto text-center">
            {description}
          </p>
          <div className="md:block hidden">
            <WeddingForm />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
