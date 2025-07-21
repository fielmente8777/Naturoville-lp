"use client";

import { createContext, useState } from "react";
import React, { ReactNode } from "react";

export const DataContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenNav?: boolean;
  setIsOpenNav?: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
  isOpenNav: false,
  setIsOpenNav: () => {},
});

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
    <DataContext.Provider
      value={{ isOpen, setIsOpen, isOpenNav, setIsOpenNav }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
