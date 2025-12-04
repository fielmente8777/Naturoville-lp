import Banner3 from "@/components/banner/Banner3";
import { CabanaPageData } from "./cabanaPageData";
import { OfferSlider, Section } from "@/components";
import SignatureTherapies from "@/components/sectionComponents/SignatureTherapies";
import Celebrate from "../resort/components/Celebrate";
import Gallery from "./components/Gallery";
import Form2New from "@/components/forms/Form2new";

export default function CabanaLandingPage() {
  return (
    <main>
      <Banner3 {...CabanaPageData?.bannerData} />
      <Section className="bg-primary py-8!">
        <div className="!p-4 bg-white md:rounded-2xl max-w-[1450px] mx-auto">
          <Form2New rounded />
        </div>
      </Section>
      <SignatureTherapies {...CabanaPageData?.signatureTherapies} />
      <Gallery {...CabanaPageData?.gallery} />
      <Celebrate {...CabanaPageData?.celebratePageData} />
    </main>
  );
}
