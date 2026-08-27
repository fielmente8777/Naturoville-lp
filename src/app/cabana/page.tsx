import { Section } from "@/components";
import Banner3 from "@/components/banner/Banner3";
import Form2New from "@/components/forms/Form2new";
import SignatureTherapies from "@/components/sectionComponents/SignatureTherapies";
import Celebrate from "../resort/components/Celebrate";
import { CabanaPageData } from "./cabanaPageData";
import Gallery from "./components/Gallery";
import SlidingTitle from "@/components/slider/SlidingTitle";
import CabanaPopup from "@/components/pop-up/CabanaPopup";
import NewCelebrate from "../resort/components/NewCelebrate";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Cabanas by the Pool | Naturoville Wellness Resort",
  description:
    "Relax at Cabanas by the Pool at Naturoville Wellness Resort. Enjoy private poolside cabanas, delicious food, handcrafted drinks, and a serene setting for brunches, parties, celebrations, and weddings.",
  keywords: [
    "wellness",
    "spa",
    "ayurveda",
    "naturopathy",
    "holistic healing",
    "retreat",
    "wellness center",
    "luxury wellness",
  ],
  alternates: {
    canonical: "https://naturoville.com",
  },

  openGraph: {
    title:
      "Best Ayurveda Wellness & Panchkarma Center in Rishikesh | Naturoville",
    description:
      "Explore Naturoville, Rishikesh's premier Ayurvedic & Retreat. Rejuvenate your mind and body at the best wellness center in Rishikesh.",
    url: "https://naturoville.com",
    siteName: "Naturoville",
    images: [
      {
        url: "https://naturoville.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naturoville - Holistic Wellness Retreat",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Ayurveda Wellness & Panchkarma Center in Rishikesh | Naturoville",
    description:
      "Explore Naturoville, Rishikesh's premier Ayurvedic & Retreat. Rejuvenate your mind and body at the best wellness center in Rishikesh.",
    images: ["https://naturoville.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function CabanaLandingPage() {
  return (
    <main>
      {/* <SlidingTitle
        className="text-primary! bg-bg1!"
        items={[
          "Enjoy Exclusive Monsoon Offers & Create Unforgettable Getaways This Rainy Season.",
        ]}
      /> */}
      <Banner3 {...CabanaPageData?.bannerData} />
      <Section className="bg-primary py-8!">
        <div className="!p-4 bg-white md:rounded-2xl max-w-[1450px] mx-auto">
          <Form2New rounded />
        </div>
      </Section>
      <SignatureTherapies {...CabanaPageData?.signatureTherapies} />
      <Gallery {...CabanaPageData?.gallery} />
      {/* <Celebrate {...CabanaPageData?.celebratePageData} /> */}
      <NewCelebrate {...CabanaPageData.newCelebrateData} />
      <CabanaPopup />
      <Section className="bg-primary py-8! border-b border-white">
        <div className="!p-4 bg-white md:rounded-2xl max-w-[1450px] mx-auto">
          <Form2New rounded />
        </div>
      </Section>
    </main>
  );
}
