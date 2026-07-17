"use client";
import React from "react";
import Image from "next/image";
import { LazyLoadedVideo } from "../Video";
import { Section } from "../sectionComponents";
import SwiperCarousel from "../SwiperCarousel";

type BannerProps = {
  title: string;
  description: string;
  logo: string;
  videos: string[];
};

const Banner3 = ({ videos, title, logo, description }: BannerProps) => {
  return (
    <Section className="bg-bg1 !p-5">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-3 items-center">
        <div className="lg:col-span-4 col-span-1 flex flex-col py-12 items-center justify-center space-y-4 px-4 md:border border-primary h-full">
          <div className="relative w-full aspect-[4/1]">
            <Image src={logo} alt="logo" fill className="object-contain" />
          </div>

          <h1 className="md:text-6xl abhayaLibre text-6xl text-center font-aboreto text-primary ">
            {title}
          </h1>
          <p className="text-lg font-semibold mt-5">{description}</p>
        </div>

        <div className="lg:col-span-8 col-span-1 grid lg:grid-cols-3 gap-3 h-full">
          {/* {videos?.map((video, index) => (
            <div key={index} className="relative w-full aspect-4/6 rounded-sm">
              <LazyLoadedVideo
                src={video}
                loop
                muted
                controls={false}
                autoPlay
              />
            </div>
          ))} */}

          <div className="relative w-full aspect-4/6 rounded-sm">
              <LazyLoadedVideo
                src={videos[0]}
                loop
                muted
                controls={false}
                autoPlay
              />
            </div>
          <div className="relative w-full aspect-4/6 rounded-sm">
              <LazyLoadedVideo
                src={videos[1]}
                loop
                muted
                controls={false}
                autoPlay
              />
            </div>
          <div className="relative w-full aspect-4/6 rounded-sm max-md:hidden">
              <LazyLoadedVideo
                src={videos[2]}
                loop
                muted
                controls={false}
                autoPlay
              />
            </div>
        </div>

        {/* <div className="mt-6 block lg:hidden">
          <SwiperCarousel
            data={videos}
            slidesPerView={1.25}
            spaceBetween={10}
            renderSlide={(vd, index) => (
              <div
                key={index}
                className="bg-orange-300 relative w-full aspect-4/5 rounded-sm"
              >
                <LazyLoadedVideo src={vd} loop />
              </div>
            )}
          />
        </div> */}
      </div>
    </Section>
  );
};

export default Banner3;
