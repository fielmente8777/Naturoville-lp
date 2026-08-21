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
