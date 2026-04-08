"use client";
import { footerLinks, socialLinks } from "@/utils/pageData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import OnlyButton from "../buttons/OnlyButton";
import LazyLoadedMap from "../map/LazyLoadedMap";
import { Container } from "../sectionComponents";
import { useContext } from "react";
import DataContext from "@/contextApi/DataContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const pathName = usePathname();
  const { setIsOpen } = useContext(DataContext);
  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <footer className="max_screen">
      <section className="bg-primary">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:py-20 py-10 md:gap-24">
            <div className=" flex flex-col max-md:mx-auto gap-8 w-fit">
              <div className="w-full max-w-[15rem] relative md:aspect-[4/1.5] aspect-[4/2.5] max-md:mx-auto">
                <Image
                  src={footerLinks.src}
                  alt={"logo"}
                  fill
                  className="object-contain"
                />
              </div>
              <ul className="flex items-center justify-center gap-12 ">
                {socialLinks.map((link, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <Link href={link.href} className="text-white">
                      <span className="text-white">{link.icon}</span>
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <OnlyButton
                onclick={() => setIsOpen(true)}
                label={footerLinks.link.label}
                className="md:w-fit flex items-center justify-center bg-transparent text-white border border-white hover:bg-white hover:text-primary"
              />
            </div>
            {footerLinks.data.map((link, index) => (
              <div key={index} className="w-full flex flex-col gap-4">
                {link.title && (
                  <h3 className="text-white! md:text-[2rem]/[2.5rem]! text-2xl! mb-2 abhayaLibre">
                    {link.title}
                  </h3>
                )}

                {!link.mapUrl ? (
                  <ul className="flex flex-col gap-4 text-white">
                    {link.links?.map((item, index) => (
                      <li key={index} className="flex ">
                        <span className="mr-2">{item.icon}</span>
                        <span className="flex flex-wrap">
                          <Link href={item.href} className="text-white">
                            {item.label}
                          </Link>
                          {item.href2 && <span className="mr-2">,</span>}
                          {item.label2 && (
                            <Link href={item.href2} className="text-white">
                              {item.label2}
                            </Link>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div
                    key={index}
                    className="max-md:aspect-[4/3.5] w-full h-full bg-white"
                  >
                    <LazyLoadedMap src={link.mapUrl} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <div className="bg-[#282B32]">
        <Container>
          <div className="py-4 flex max-md:flex-col max-md:gap-3 items-center justify-center text-white relative">
            <span className="md:px-6 px-4 text-nowrap">
              {" "}
              &copy; {year} Naturoville Wellness
            </span>
            <span className="max-md:hidden text-xl">|</span>
            <span className="md:px-6 px-4 text-nowrap">
              All rights reserved
            </span>
            <span className="max-md:hidden text-xl">|</span>
            <span className="px-6">
              Designed & Developed by{" "}
              {/* <Link
                href={"https://www.eazotel.com/"}
                className="font-medium"
                target="_blank"
              >
                Eazotel
              </Link> */}
               <Link
                href="https://www.fielmente.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fielmente
              </Link>
            </span>
            <ul className="md:absolute right-4 flex items-center justify-center gap-4 max-md:border-t max-md:border-white max-md:pt-4 max-md:w-full">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-[#131313] w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white border border-dark"
                  >
                    {item.icon}
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
