import {
  LinkButton,
  SectionHeadingDesc,
  SectionWithContainer,
} from "@/components";
import LazyLoadedVideo from "@/components/Video/SEOVideo";

interface DestinationWeddingSectionTypes {
  title: string;
  description: string;
  buttons: {
    label: string;
    link: string;
  }[];
  videos: {
    src: string;
    poster: string;
  }[];
}

const DestinationWeddingSection: React.FC<DestinationWeddingSectionTypes> = ({
  title,
  description,
  buttons,
  videos,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 max-w-6xl mx-auto">
        <div className="relative w-full lg:aspect-4/6 ">
          <LazyLoadedVideo
            src={videos[0].src}
            poster={videos[0].poster}
            loop
            muted
            autoPlay
            controls={false}
          />
        </div>
        <div className="flex flex-col gap-10">
          <SectionHeadingDesc
            title={title}
            description={description}
            textcenter
          />
          <LinkButton
            href={buttons[0].link}
            label={buttons[0].label}
            className="bg-primary text-white w-fit mx-auto rounded-full!"
          />
        </div>
        <div className="relative w-full lg:aspect-4/6 ">
          <LazyLoadedVideo
            src={videos[1].src}
            poster={videos[1].poster}
            loop
            muted
            autoPlay
            controls={false}
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default DestinationWeddingSection;
