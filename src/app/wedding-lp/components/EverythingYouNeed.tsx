import { LinkButton, SectionHeadingDesc, SectionWithContainer } from "@/components";
import { FaCheck } from "react-icons/fa6";
export interface EverythingYouNeedProps {
  title: string;
  description: string;
  items: {
    number: string;
    title: string;
    description: string;
    features: string[];
  }[];
  buttons: {
    label: string;
    link: string;
  }[];
}

const EverythingYouNeed: React.FC<EverythingYouNeedProps> = ({
  title,
  description,
  items,
  buttons,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary relative">
        <div className="absolute bg-[#D4AF371A] w-[384px] aspect-square rounded-full blur-3xl top-0 left-0"/>
        <div className="absolute bg-[#D4AF371A] w-[384px] aspect-square rounded-full blur-3xl bottom-4 right-0"/>
      <SectionHeadingDesc
        title={title}
        description={description}
        textcenter
        titleColor="white"
        descriptionColor="white"
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 lg:mt-14 mt-6">
        {items.map((item, index) => (
          <EverythingYouNeedCard key={index} {...item} />
        ))}
      </div>
      <LinkButton showIcon href={buttons[0].link} label={buttons[0].label} className="bg-primary text-white mt-10 w-fit mx-auto" />
    </SectionWithContainer>
  );
};

export default EverythingYouNeed;

export const EverythingYouNeedCard: React.FC<
  EverythingYouNeedProps["items"][0]
> = ({ title, description, features }) => {
  return (
    <div className="p-8 bg-white/10 rounded-2xl overflow-hidden border-[0.5px] border-white/10 flex flex-col gap-4">
      <p className="text-3xl text-white abhayaLibre">{title}</p>
      <p className="text-lg text-white/80">{description}</p>
      <ul className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="bg-[#D4AF3733] rounded-full aspect-square p-1.5">
              <FaCheck className="text-[#D4AF37]" />
            </span>
            <span className="text-white">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
