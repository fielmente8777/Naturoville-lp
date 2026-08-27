import { Container, Section } from "@/components";
import WeddingForm from "@/components/forms/WeddingForm";
import SlidingTitle from "@/components/slider/SlidingTitle";
import AboutSection from "./components/AboutSection";
import Banner from "./components/Banner";
import DestinationWeddingSection from "./components/DestinationWeddingSection";
import EverythingYouNeed from "./components/EverythingYouNeed";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import GuestAccommodation from "./components/GuestAccommodation";
import { weddingPageData } from "./components/pagedata";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Naturoville Rishikesh | Luxury Destination Wedding Venue",
  description:
    "Host your dream destination wedding at Naturoville Rishikesh with luxury rooms, lush lawns, poolside venues, vegetarian catering, décor, and celebrations for up to 200 guests.",
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
export default function WeddingLp() {
  return (
    <main>
      {/* <SlidingTitle items={weddingPageData.highlights} /> */}
      <Banner {...weddingPageData.hero} />
      <Section className="md:hidden block">
        <Container>
          <WeddingForm />
        </Container>
      </Section>
      <AboutSection {...weddingPageData.aboutSection} />
      <DestinationWeddingSection
        {...weddingPageData.destinationWeddingSection}
      />
      <EverythingYouNeed {...weddingPageData.everythingYouNeed} />
      <Faq {...weddingPageData.faq} />
      <SlidingTitle items={weddingPageData.highlightsBottom} />
      <GuestAccommodation {...weddingPageData.guestAccommodation} />
      {/* <Testimonials {...weddingPageData.testimonials} /> */}
      <FinalCta {...weddingPageData.finalCta} />
      <Section className=" p-0!">
        <Container>
          <div className="py-6 flex flex-col gap-5 w-full mx-auto" id="form">
            <WeddingForm />
          </div>
        </Container>
      </Section>
    </main>
  );
}
