import Image from "next/image";
import { Headings } from "../typography";
import Navbar from "../navbar/Navbar";
import { BannerType } from "@/@types/types";
import { LazyLoadedVideo } from "../Video";

const Banner: React.FC<BannerType> = ({ title, src, videoSrc }) => {
  return (
    <section className="w-full max_screen ">
      <div className="w-full md:hidden bg-primary">
        <Navbar />
      </div>
      <div className="relative md:aspect-[16/9] aspect-[16/9] w-full after:absolute after:inset-0 after:bg-black/50">
        {videoSrc ? (
          <LazyLoadedVideo
            src={videoSrc}
            muted={true}
            autoPlay
            loop
            controls={false}
          />
        ) : (
          <Image
            src={src}
            alt="banner"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            loading="eager"
          />
        )}
        <div className="absolute w-full top-0 left-0 z-20 flex flex-col">
          <div className="w-full max-md:hidden">
            <Navbar />
          </div>
          <div className="w-full text-center flex flex-col space-y-4 mt-auto md:mb-36 mb-16">
            <Headings
              level={1}
              className="text-white sr-only text-[2rem]/[2.5rem] md:text-[3.5rem]/[4rem] tracking-wide playfair-display"
            >
              {title}
            </Headings>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
