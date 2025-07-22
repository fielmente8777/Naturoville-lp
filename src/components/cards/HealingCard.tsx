import { HolisticHealingTypes } from "@/@types/types";

const HealingCard: React.FC<HolisticHealingTypes["cards"][0]> = ({ title,icon }) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="w-fit px-5 py-11 border border-primary rounded-[12.5rem] flex flex-col items-center">
                {icon}
            </div>
            <h3 className="text-lg text-center text-primary px-2">{title}</h3>
        </div>
    );
}

export default HealingCard;