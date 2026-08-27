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
    </div>
  );
};

export default page;
