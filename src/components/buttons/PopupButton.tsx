"use client";
import { useDataContext } from "@/contextApi/DataContext";
import { JSX } from "react";

interface PopupButtonProps {
  label: string;
  className?: string;
  roomName: string;
  popUpAminityData: {
    title: string;
    amities: {
      icon?: JSX.Element;
      title: string;
    }[];
  }[];
}
const PopupButton: React.FC<PopupButtonProps> = ({
  label,
  className = "",
  roomName,
  popUpAminityData,
  ...props
}) => {
  const { setIsAmenityOpen, setRoomName, setPopUpAminityData } =
    useDataContext();
  const onclick = ({
    roomName,
    popUpAminityData,
  }: {
    roomName: string;
    popUpAminityData: {
      title: string;
      amities: {
        icon?: JSX.Element;
        title: string;
      }[];
    }[];
  }) => {
    setIsAmenityOpen(true);
    setRoomName(roomName);
    setPopUpAminityData(popUpAminityData);
  };
  return (
    <button
      className={`transition-all duration-300 ease-in-out hover:scale-x-105 active:scale-95  ${className}`}
      {...props}
      onClick={() => onclick({ roomName, popUpAminityData })}
    >
      {label}
    </button>
  );
};

export default PopupButton;
