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
    </main>
  );
}
