import Container from "./Container";
import Section from "./Section";

interface SectionWithContainerProps {
  sectionId?: string;
  containerId?: string;
  sectionClassName?: string;
  containerClassName?: string;
  children: React.ReactNode;
  containerStyle?: React.CSSProperties;
  sectionStyle?: React.CSSProperties;
  lgpy?: string;
}

const SectionWithContainer: React.FC<SectionWithContainerProps> = ({
  sectionId = "",
  containerId = "",
  sectionClassName = "",
  containerClassName = "",
  lgpy = "",
  sectionStyle = {},
  containerStyle={},
  children,
}) => {
  return (
    <Section id={sectionId} className={sectionClassName} style={sectionStyle} lgpy={lgpy}>
      <Container id={containerId} className={containerClassName} style={containerStyle}>
        {children}
      </Container>
    </Section>
  );
};

export default SectionWithContainer;
