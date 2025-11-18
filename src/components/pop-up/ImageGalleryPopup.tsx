"use client";

import { useDataContext } from "@/contextApi/DataContext";
import { FlowerIcon } from "@/utils/icons";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { contact } from "../../../Constent";
import LinkButton from "../buttons/LinkButton";
import { SectionHeadingDesc } from "../typography";
import Image from "next/image";
import SwiperCarousel from "../SwiperCarousel";
import { Autoplay, Pagination } from "swiper/modules";

const ImageGalleryPopup = () => {
  const { isImageGalleryOpen, setIsImageGalleryOpen } = useDataContext();
  //   after 10sec popup will open
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImageGalleryOpen?.(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [setIsImageGalleryOpen]);

  const closePopup = () => {
    setIsImageGalleryOpen?.(false);
  };
  const gridPatterns = [
    "row-span-4",
    "row-span-2",
    "row-span-3",
    "row-span-3",
    "row-span-4",
    "row-span-3",
    "row-span-2",
  ];
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center 
    bg-black/50 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
    ${isImageGalleryOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
    >
      <div
        className={`${isImageGalleryOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"} bg-white max-w-4xl w-full relative`}
      >
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 bg-primary flex items-center justify-center w-8 aspect-square rounded-full text-white"
        >
          <MdClose />
        </button>
        <div className="max-w-3xl mx-auto py-4 px-4 flex flex-col gap-4 h-full">
          <div className="flex gap-px items-center justify-center flex-col">
            <FlowerIcon />
            <SectionHeadingDesc
              title={data?.title}
              textcenter
              titleClassName="lg:!text-[3rem] !text-2xl font-serif"
            />
          </div>
          <div className="lg:grid hidden grid-cols-3  grid-flow-row auto-rows-[2.75rem] gap-4">
            {data?.images.map((imgSrc, index) => (
              <div
                key={index}
                className={`w-full h-full aspect-auto relative overflow-hidden rounded-lg ${gridPatterns[index % gridPatterns.length]}`}
              >
                <Image
                  src={imgSrc}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
                {/* <div className="absolute top-2 left-2 z-10 bg-white text-sm">
                  {imgSrc}
                </div> */}
              </div>
            ))}
          </div>
          <div className="lg:hidden block w-full">
            <SwiperCarousel
              data={data?.images}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true, el: ".pagination " }}
              className="!mt-4"
              renderSlide={(item, index) => (
                <div
                  key={index}
                  className="w-full aspect-[3/2] relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={item}
                    alt={`Gallery Image`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
            />
            <div className="pagination mt-2 flex items-center justify-center"></div>
          </div>
          <p className="text-primary text-center">{data?.description}</p>
          <LinkButton
            href={data.link.href}
            label={data.link.label}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary !text-sm lg:!px-30 uppercase text-white mx-auto w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryPopup;

export const data = {
  title: "Our Upcoming Rooms",
  description:
    "Discover our upcoming rooms, designed for comfort, style, and unforgettable stays. Be among the first to book and experience something truly special.",
  images: [
    "/popimg/popimg7.jpg",
    "/popimg/popimg1.jpg",
    "/popimg/popimg5.jpg",
    "/popimg/popimg3.jpg",
    "/popimg/popimg6.jpg",
    "/popimg/popimg4.jpg",
    "/popimg/popimg2.jpg",
  ],
  link: {
    label: "Book Now",
    href: contact.WhatsappEmbadedLink,
  },
};
