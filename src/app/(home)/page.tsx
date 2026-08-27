import { Banner, Container, OfferSlider, Section } from "@/components";
import { pageData } from "@/utils/pageData";
import Form1 from "../../components/forms/Form1";
import {
  Accommodation,
  Facilities,
  SignatureTherapies,
  WellnessPrograms,
} from "./components";
import LuxurySuitesSection from "../resort/components/LuxurySuitesSection";
import { resortPageData } from "../resort/resortPageData";
import EscapeCard from "../resort/components/EscapeCard";
import SlidingTitle from "@/components/slider/SlidingTitle";

export default function Home() {
  return (
    <main>

      
      <Banner {...pageData.bannerData} />
      {/* <OfferSlider /> */}
      {/* <SlidingTitle items= {pageData.slidingTitle.items}/> */}
      <Section className="bg-dark lg:!py-8 !py-4">
        <Container>
          <Form1 />
        </Container>
      </Section>
      {/* <EscapeCard {...pageData.vacationData}/> */}
      {/* <HolisticHealing {...pageData.holisticHealing} />*/}
      <WellnessPrograms {...pageData?.wellnessPrograms} />
      <Facilities {...pageData?.facilities} />
      <SignatureTherapies {...pageData?.signatureTherapies} />
      {/* <Accommodation {...pageData.accommodation} /> */}
      {/* <Testimonials {...pageData.testimonials} /> */}
      <LuxurySuitesSection {...resortPageData?.luxurySuites} />

      <Section className="bg-dark lg:!py-8 !py-4">
        <Container>
          <Form1 />
        </Container>
      </Section>
    </main>
  );
}
