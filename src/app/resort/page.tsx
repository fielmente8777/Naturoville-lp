import { Banner, Section } from "@/components";
import Form2 from "@/components/forms/Form2";
import SignatureTherapies from "@/components/sectionComponents/SignatureTherapies";
import SlidingTitle from "@/components/slider/SlidingTitle";
import EscapeCard from "./components/EscapeCard";
import ExperiencesSliders from "./components/ExperiencesSliders";
import LuxurySuitesSection from "./components/LuxurySuitesSection";
import NewCelebrate from "./components/NewCelebrate";
import Restaurant from "./components/Restaurant";
import { resortPageData } from "./resortPageData";
import CabanaPopup from "@/components/pop-up/CabanaPopup";
import Form2New from "@/components/forms/Form2new";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Naturoville Wellness Resort Rishikesh | Luxury Stay & Spa",
  description:
    "Experience a luxurious stay at Naturoville Wellness Resort, Rishikesh. Enjoy premium rooms and suites, wellness spa, fine dining, poolside cabanas, nature experiences, and destination weddings.",
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

const page = () => {
  return (
    <div>
      <Banner {...resortPageData?.bannerData} />
      {/* <OfferSlider /> */}
      {/* <SlidingTitle items={["Monsoon Special Offer: Stay 3 Nights & Enjoy the 4th Night Complimentary! Hurry Offer Ends Soon."]} /> */}
      <Section className="bg-dark md:py-2! py-0!">
        <div className="max-w-[1380px] mx-auto p-3 rounded-md bg-white">
          <Form2 />
        </div>
      </Section>
      {/* <EscapeCard {...resortPageData.vacationData} /> */}
      <SignatureTherapies
        {...resortPageData.signatureTherapies}
        button={false}
        showDetails={false}
      />
      {/* <Accommodation {...resortPageData.accommodation} /> */}
      <LuxurySuitesSection {...resortPageData?.luxurySuites} />
      <ExperiencesSliders {...resortPageData?.experienceData} />
      <Restaurant {...resortPageData?.restaurantPageData} />
      {/* <Celebrate {...resortPageData?.celebratePageData} /> */}
      <NewCelebrate {...resortPageData?.newCelebrateData} />
      <CabanaPopup />
      <Section className="bg-primary py-8! border-b border-white">
        <div className="!p-4 bg-white md:rounded-2xl max-w-[1450px] mx-auto">
          <Form2New rounded />
        </div>
      </Section>
    </div>
  );
};

export default page;
