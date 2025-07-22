import { Banner, Container, Section } from "@/components";
import { pageData } from "@/utils/pageData";
import { Accommodation, Facilities, HolisticHealing, SignatureTherapies, Testimonials, WellnessPrograms } from "./components";
import Form1 from '../../components/forms/Form1';

export default function Home() {
  return (
   <main>
    <Banner {...pageData.bannerData}/>
    <Section className="bg-dark lg:!py-8 !py-4">
      <Container>
        <Form1 />
      </Container>
    </Section>
    <HolisticHealing {...pageData.holisticHealing} />
    <SignatureTherapies {...pageData.signatureTherapies} />
    <Facilities {...pageData.facilities} />
    <WellnessPrograms {...pageData.wellnessPrograms} />
    <Accommodation {...pageData.accommodation} />
    <Testimonials {...pageData.testimonials} />
   </main>
  );
}
