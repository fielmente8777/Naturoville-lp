import { Section, SectionHeadingDesc } from "@/components";
import Accordion2 from "@/components/accordion/Accordion2";
import Image from "next/image";

interface FaqTypes {
  images: string;
  title: string;
  description: string;
  items: {
    question: string;
    answer: string;
  }[];
}

const Faq: React.FC<FaqTypes> = ({ images, title, description, items }) => {
  return (
    <Section className="py-0! relative w-full aspect-square lg:aspect-[4/1.8]">
      <Image
        src={images}
        alt="wedding"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute top-1/2 right-20 -translate-y-1/2 max-w-xl w-full bg-white/10 backdrop-blur-md rounded-4xl p-8 z-10 space-y-3">
        <SectionHeadingDesc
          title={title}
          description={description}
          titleColor="white"
          titleClassName="md:text-4xl!"
          descriptionColor="white"
        />
        <div className="space-y-4">
          {items.map((item, index) => (
            <Accordion2 key={index} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Faq;
