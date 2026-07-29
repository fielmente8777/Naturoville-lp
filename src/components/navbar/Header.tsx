"use client";
import { usePathname } from "next/navigation";
import LandingNavBar from "./LandingNavBar";
import Navbar from "./Navbar";

const Header = () => {
  const pathName = usePathname();
  if (pathName === "/thank-you/") {
    return null;
  } else if (pathName === "/cabana/" || pathName === "/wedding-lp/") {
    return <LandingNavBar />;
  } else {
    return <Navbar />;
  }
};

export default Header;
