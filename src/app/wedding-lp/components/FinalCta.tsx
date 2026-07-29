import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import Image from "next/image";

interface FinalCtaProps {
  title: string;
  description: string;
}

const FinalCta: React.FC<FinalCtaProps> = ({ title, description }) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary py-12 relative">
      <div className="absolute -top-5 left-0 z-10">
        <div className="w-25 aspect-[4/4.25] relative">
          <Image
            src="/wedding-lp-img/group.png"
            alt="group"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute -bottom-5 right-0 z-10">
        <div className="w-25 aspect-[4/4.25] relative rotate-180">
          <Image
            src="/wedding-lp-img/group.png"
            alt="group"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <SectionHeadingDesc
        title={title}
        description={description}
        textcenter
        titleColor="white"
        descriptionColor="white"
        descriptionClassName="lg:px-80"
      />
    </SectionWithContainer>
  );
};

export default FinalCta;
