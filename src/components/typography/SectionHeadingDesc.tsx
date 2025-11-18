import Headings from "./Headings";

interface SectionHeadingDescProps {
  title?: string;
  subTitle?: string;
  description?: string;
  descriptionColor?: string;
  textcenter?: boolean;
  titleColor?: string;
  subTitleColor?: string;
  smTextCenter?: boolean;
  titleClassName?: string;
  subTitleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeadingDesc: React.FC<SectionHeadingDescProps> = ({
  title,
  subTitle,
  description,
  descriptionColor,
  textcenter = false,
  titleColor,
  subTitleColor,
  smTextCenter = false,
  titleClassName,
  subTitleClassName,
  descriptionClassName,
}) => {
  return (
    <div className="flex flex-col w-full gap-4">
      {title && (
        <Headings
          level={2}
          className={` ${titleClassName} ${textcenter ? "text-center" : ""} ${smTextCenter ? "max-md:text-center" : ""} ${titleColor ? `text-${titleColor}` : "text-primary"}  abhayaLibre md:text-5xl text-2xl `}
        >
          {title}
        </Headings>
      )}
      {subTitle && (
        <Headings
          level={3}
          className={` ${subTitleClassName} ${textcenter ? "text-center" : ""} ${smTextCenter ? "max-md:text-center" : ""} ${subTitleColor ? `text-${subTitleColor}` : "text-dark"} abhayaLibre md:text-[2.5rem]/[3rem] text-2xl`}
        >
          {subTitle}
        </Headings>
      )}
      {description && (
        <p
          className={` ${descriptionClassName} ${textcenter ? "text-center" : ""} ${smTextCenter ? "max-md:text-center" : ""} ${descriptionColor ? `text-${descriptionColor}` : "text-light"} md:text-lg text-base`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeadingDesc;
