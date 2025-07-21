interface SectionProps {
  className?: string;
  lgpy?: string;
  py?: string;
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({
  className = "",
  lgpy,
  py,
  id,
  children,
  style = {},
}) => {
  return (
    <section
      className={`max_screen ${lgpy ? `lg:py-${lgpy}` : "lg:py-16"} ${py ? `py-${py}` : "py-8"} ${className}`}
      id={id}
      style={style}
    >
      {children}
    </section>
  );
};

export default Section;
