"use client";

import { createContext, JSX, useContext, useState } from "react";
import React, { ReactNode } from "react";

type AmenityItem = {
  title: string;
  icon?: JSX.Element;
};

type PopUpAmenity = {
  title: string;
  amities: AmenityItem[];
};

export const DataContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenNav?: boolean;
  setIsOpenNav?: React.Dispatch<React.SetStateAction<boolean>>;
  gridView: boolean;
  setGridView: React.Dispatch<React.SetStateAction<boolean>>;
  isExtended: boolean;
  setIsExtended: React.Dispatch<React.SetStateAction<boolean>>;
  isImageGalleryOpen?: boolean;
  setIsImageGalleryOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isAmenityOpen: boolean;
  setIsAmenityOpen: React.Dispatch<React.SetStateAction<boolean>>;
  roomName: string;
  setRoomName: React.Dispatch<React.SetStateAction<string>>;
  popUpAminityData: PopUpAmenity[];
  setPopUpAminityData: React.Dispatch<React.SetStateAction<PopUpAmenity[]>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
  isOpenNav: false,
  setIsOpenNav: () => {},
  gridView: false,
  setGridView: () => {},
  isExtended: false,
  setIsExtended: () => {},
  isImageGalleryOpen: false,
  setIsImageGalleryOpen: () => {},
  isAmenityOpen: false,
  setIsAmenityOpen: () => {},
  roomName: "",
  setRoomName: () => {},
  popUpAminityData: [],
  setPopUpAminityData: () => {},
});

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [gridView, setGridView] = useState(false);
  const [isExtended, setIsExtended] = useState(false);
  const [isImageGalleryOpen, setIsImageGalleryOpen] = useState(false);
  const [isAmenityOpen, setIsAmenityOpen] = useState(false);
  const [roomName, setRoomName] = useState("Room 1");
  const [popUpAminityData, setPopUpAminityData] = useState<PopUpAmenity[]>([]);

  return (
    <DataContext.Provider
      value={{
        roomName,
        setRoomName,
        popUpAminityData,
        setPopUpAminityData,
        isAmenityOpen,
        setIsAmenityOpen,
        isOpen,
        setIsOpen,
        isOpenNav,
        setIsOpenNav,
        gridView,
        setGridView,
        isExtended,
        setIsExtended,
        isImageGalleryOpen,
        setIsImageGalleryOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

export const useDataContext = () => useContext(DataContext);
