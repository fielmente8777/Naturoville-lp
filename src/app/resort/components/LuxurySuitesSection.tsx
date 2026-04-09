import { LuxurySuitesSectionProps } from "@/@types/types";
import {
  LinkButton,
  SectionHeadingDesc,
  SectionWithContainer,
} from "@/components";
import PopupButton from "@/components/buttons/PopupButton";
import { FlowerIcon3 } from "@/utils/icons";
import RoomImageSlider from "./RoomImageSlider";

const LuxurySuitesSection: React.FC<LuxurySuitesSectionProps> = ({
  title,
  subTitle,
  cards,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="luxury-section"
      containerClassName="md:space-y-14 space-y-10"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <FlowerIcon3 />
        <SectionHeadingDesc title={title} description={subTitle} textcenter />
      </div>
      <div className="md:space-y-16 space-y-10">
        {cards.map((card, index) => (
          <div className="grid xl:grid-cols-7 grid-cols-1 gap-4" key={index}>
            <div
              className={`xl:col-span-4 xl:block hidden ${index % 2 === 0 ? "order-1" : "order-2"}`}
            >
              <RoomImageSlider images={card.images} />
            </div>
            <div
              className={`md:col-span-3 flex flex-col gap-6 card-2 px-6 py-8.75 ${index % 2 === 0 ? "order-2" : "order-1"}`}
            >
              <div className="space-y-2">
                <h3 className="md:text-[2rem] text-xl text-primary abhayaLibre">
                  {card.title}
                </h3>

                {/* room type or room size info */}
                <ul className="flex items-center gap-2">
                  {card.roomType.map((roomType, index) => (
                    <li key={index} className="text-lg text-[#343434]">
                      {roomType}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="max-xl:block hidden">
                <RoomImageSlider images={card.images} />
              </div>

              {/* primary amenities */}
              <ul className="flex max-sm:flex-col md:items-center gap-2">
                {card.amities.slice(0, 2).map((amenity, index) => (
                  <li
                    key={index}
                    className={`text-[#002B21] max-sm:text-xs w-fit text-nowrap flex gap-2 items-center border border-[#343434] px-2 py-1 rounded-lg ${index === 0 ? "bg-white" : "bg-[#fffff3]"}`}
                  >
                    <span>{amenity.icon}</span>
                    <span>{amenity.title}</span>
                  </li>
                ))}
              </ul>

              {/* room description */}

              <p className="text-lg text-light">{card.description}</p>

              {/* secondary amenities */}
              <ul className="grid md:grid-cols-2 grid-cols-1 gap-6 border bg-[#FFFFF3] rounded-xl p-4">
                {card.amities.slice(2).map((amenity, index) => (
                  <li key={index} className={`text-[#002B21] flex gap-2`}>
                    <span>{amenity.icon}</span>
                    <span>{amenity.title}</span>
                  </li>
                ))}
              </ul>
              <div className="flex max-md:flex-col gap-4 md:items-center justify-between">
                <LinkButton
                  label={card.cta.label}
                  href={card.cta.href}
                  showIcon
                  className="w-fit bg-primary text-white rounded-full!"
                />
                <PopupButton
                  label="All Suite Amenities"
                  className="text-primary underline underline-offset-2"
                  roomName={card.title}
                  popUpAminityData={card.popUpAmities}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default LuxurySuitesSection;
