"use client";
import { weddingPageData } from "@/app/wedding-lp/components/pagedata";
import { usePathname } from "next/navigation";
import SlidingTitle from "./SlidingTitle";



const SlidingText = () => {
    const pathName = usePathname();
    const paths = ["/", "/cabana/", "/resort/"];

    const today = new Date();

  // RULE: from 25th onward → next month
  const shouldShift = today.getDate() >= 25;
  
  const monthIndex = shouldShift
    ? today.getMonth() + 1
    : today.getMonth();

    const month = new Date(
    today.getFullYear(),
    monthIndex,
    1
  ).toLocaleString(undefined, { month: "long" });
    
    const text = [`Limited time discount upto 20% off this ${month}.`, `Limited time discount upto 20% off this ${month}.`, `Limited time discount upto 20% off this ${month}.`];
    if (paths.includes(pathName)) {
        return <SlidingTitle items={text} />;
    }
    return (
        <SlidingTitle items={weddingPageData.highlights} />
    );
}

export default SlidingText;