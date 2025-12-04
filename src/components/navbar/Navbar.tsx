"use client";
import { OutLinePhone } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "../../../Constent";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const pathName = usePathname();
  // Weather state
  const [temp, setTemp] = useState<number | null>(null);

  // Memoized function to fetch weather
  const getTemp = useCallback(async () => {
    try {
      const apiKey = "8611baa95180437492f54121230505";
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000); // Set a timeout for the request

      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=30.116354761705797, 78.1664741693149`,
        { signal: controller.signal }
      );

      clearTimeout(timeout);
      setTemp(response?.data?.current?.temp_c);
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      setTemp(null); // Handle error gracefully
    }
  }, []);

  // Fetch weather only user's location
  useEffect(() => {
    getTemp();
  }, [getTemp]);

  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <header className="py-3">
      <nav className="max-width">
        <div className="flex items-center justify-between ">
          <div className="relative md:w-36 w-28 md:aspect-[4/2] aspect-[4/2.2] ">
            <Image
              src="/LOGO 2.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-4">
            {/* Weather Information */}
            <div className="flex items-center gap-2 text-primary text-xl">
              <span className="">
                <WeatherIcon />
              </span>
              <span>{temp ? `${temp}°C` : "Loading..."}</span>
            </div>
            {/* address */}
            <Link href={contact.addressUrl} target="_blank" className="flex max-md:hidden items-center gap-2">
              <span>
                <LocationIcon />
              </span>
              <span className="text-xl text-primary max-md:hidden">
                Dehradun, Uttarakhand
              </span>
            </Link>
            <Link
              href={"tel:" + contact.phoneNumber}
              target="_blank"
              rel="noreferrer"
              className=" text-white bg-primary rounded-sm px-4 py-2 text-lg flex items-center gap-2"
            >
              <span>
                <OutLinePhone />
              </span>

              <span className="md:block hidden text-nowrap">Call Now</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

export const WeatherIcon = ({ ...props }) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_432_533)">
      <path
        d="M8.795 13.493V7.978a.781.781 0 10-1.563 0v5.515a2.344 2.344 0 101.563 0z"
        fill="#002B21"
      />
      <path
        d="M10.357 12.579V2.734A2.346 2.346 0 008.014.391 2.346 2.346 0 005.67 2.734v9.845a3.914 3.914 0 00-1.563 3.124 3.91 3.91 0 003.907 3.906 3.91 3.91 0 003.906-3.906c0-1.249-.598-2.4-1.563-3.124zM4.063 2.266H2.5M4.063 4.426H2.5M4.063 6.587H2.5M4.063 8.747H2.5M4.063 10.908H2.5M12.584.39a.781.781 0 100 1.563.781.781 0 000-1.562zM17.5 1.572a1.99 1.99 0 10-1.092 3.652c.446 0 .813-.147 1.091-.395"
        stroke="#002B21"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_432_533">
        <path fill="#fff" d="M0 0H20V20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const LocationIcon = ({ ...props }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 1.5a8.26 8.26 0 00-8.25 8.25c0 7.06 7.5 12.39 7.82 12.614a.75.75 0 00.86 0c.32-.223 7.82-5.555 7.82-12.614A8.26 8.26 0 0012 1.5zm0 5.25a3 3 0 110 6 3 3 0 010-6z"
      fill="#002B21"
    />
  </svg>
);
