import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import TestimonialsSlider from "./slider/TestimonialsSlider";

interface TestimonialsTypes {
  title: string;
  description: string;
  reviews: {
    review: string;
    name: string;
    event: string;
  }[];
}

const Testimonials: React.FC<TestimonialsTypes> = ({
  title,
  description,
  reviews,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-[#F5F5DC4D]"
      containerClassName="flex flex-col lg:gap-14 gap-10"
    >
      <SectionHeadingDesc title={title} description={description} textcenter />
      <TestimonialsSlider reviews={reviews} />
    </SectionWithContainer>
  );
};

export default Testimonials;




