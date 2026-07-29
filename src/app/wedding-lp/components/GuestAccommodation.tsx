import { Container, LinkButton, Section } from "@/components";
import Gallery from "./slider/Gallery";

interface GuestAccommodationProps {
  gallery: string[];
  description: string;
  buttons: {
    label: string;
    link: string;
  }[];
}

const GuestAccommodation: React.FC<GuestAccommodationProps> = ({
  gallery,
  description,
  buttons,
}) => {
  return (
    <Section className="py-0!">
      <Gallery images={gallery} />
      <Container className="py-12">
        <p
          className="text-primary lg:max-w-2xl lg:px-8 mx-auto text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <LinkButton label={buttons[0].label} href={buttons[0].link} showIcon className="bg-primary text-white mt-10 w-fit mx-auto rounded-full! " />
      </Container>
    </Section>
  );
};

export default GuestAccommodation;
