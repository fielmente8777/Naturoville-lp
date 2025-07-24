"use client";
import { OutLinePhone } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <header className="md:py-6 py-2">
      <nav className="max-width">
        <div className="flex items-center justify-between md:py-4">
          <div className="relative max-md:w-24 md:aspect-[4/1.5] h-[3.9rem] aspect-[4/.3]">
            <Image src="/logo.png" alt="logo" fill className="object-contain" />
          </div>
          <div className="">
            <Link
              href="tel:+91 96222 05133"
              className="md:text-primary text-white md:bg-white md:hover:bg-primary md:hover:text-white rounded-sm px-4 py-2 text-lg flex items-center gap-2"
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
