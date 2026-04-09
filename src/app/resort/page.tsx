import { Banner, OfferSlider, Section } from "@/components";
import Form2 from "@/components/forms/Form2";
import SignatureTherapies from "@/components/sectionComponents/SignatureTherapies";
import Celebrate from "./components/Celebrate";
import ExperiencesSliders from "./components/ExperiencesSliders";
import LuxurySuitesSection from "./components/LuxurySuitesSection";
import Restaurant from "./components/Restaurant";
import { resortPageData } from "./resortPageData";

const page = () => {
  return (
    <div>
      <Banner {...resortPageData?.bannerData} />
      <OfferSlider />
      <Section className="bg-dark md:py-2! py-0!">
        <div className="max-w-[1380px] mx-auto p-3 rounded-md bg-white">
          <Form2 />
        </div>
      </Section>
      <SignatureTherapies
        {...resortPageData.signatureTherapies}
        button={false}
        showDetails={false}
      />
      {/* <Accommodation {...resortPageData.accommodation} /> */}
      <LuxurySuitesSection {...resortPageData?.luxurySuites} />
      <ExperiencesSliders {...resortPageData?.experienceData} />
      <Restaurant {...resortPageData?.restaurantPageData} />
      <Celebrate {...resortPageData?.celebratePageData} />
    </div>
  );
};

export default page;
