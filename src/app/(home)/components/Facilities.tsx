"use client"
import { FacilitiesTypes } from "@/@types/types";
import {
  OnlyButton,
  SectionHeadingDesc,
  SectionWithContainer
} from "@/components";
import DataContext from "@/contextApi/DataContext";
import { FlowerIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Facilities: React.FC<FacilitiesTypes> = ({ title, list, links, src }) => {
  const { setIsOpen } = useContext(DataContext);
  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:bg-[url(/bg.png)] after:bg-no-repeat after:bg-contain after:opacity-5 md:after:w-[680px] after:w-[400px] max-md:after:mx-4 md:after:h-[480px] after:h-[400px] after:right-0 md:after:top-0 after:bottom-0 after:z-[-1]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="relative md:aspect-[4/2.3] aspect-[4/3] w-full">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div className="space-y-4">
          <FlowerIcon />
          <SectionHeadingDesc title={title} />
          <ul className="list-disc pl-5 space-y-4 pt-2">
            {list.map((item, index) => (
              <li key={index} className="text-lg text-dark mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:mt-14 w-full flex flex-col items-center">
        {/* {links.map((link, index) => (
          <OnlyButton
            key={index}
            onclick={() => setIsOpen(true)}
            label={link.label}
            className="mt-4 bg-primary text-white"
          />
        ))} */}
        <Link href="https://wa.me/+919520890995?text=Hello" target="_blank" className="transition-all rounded-lg max-md:w-full flex items-center justify-center font-medium border duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-2xl px-6 py-3 mt-4 bg-primary text-white">Explore Activities Now</Link>
      </div>
    </SectionWithContainer>
  );
};

export default Facilities;
