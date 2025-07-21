import { FacilitiesTypes } from "@/@types/types";
import { LinkButton, SectionHeadingDesc, SectionWithContainer } from "@/components";
import { FlowerIcon } from "@/utils/icons";
import Image from "next/image";

const Facilities: React.FC<FacilitiesTypes> = ({ title, list, links, src }) => {
  return (
    <SectionWithContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="relative md:aspect-[4/2.3] aspect-[4/3] w-full">
          <Image src={src} alt={title} fill className="object-cover rounded-sm" />
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
       {links.map((link, index) => (
        <LinkButton key={index} href={link.href} label={link.label} className="mt-4 bg-primary text-white" />
       ))}
      </div>
    </SectionWithContainer>
  );
};

export default Facilities;
