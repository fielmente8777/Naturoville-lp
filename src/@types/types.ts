import { JSX } from "react";

export interface BannerType {
  title: string;
  videoSrc?: string;
  src: string;
}

export interface HolisticHealingTypes {
  title: string;
  icon: JSX.Element;
  cards: {
    title: string;
    icon: JSX.Element;
  }[];
}

export interface SignatureTherapiesTypes {
  title: string;
  description?: string;
  description2?: string[];
  button?: boolean;
  showDetails?: boolean;
  cards?: {
    category: string;
    title: string;
    description: string;
    src: string;
    showDetails?: boolean;
  }[];
  images?: string[];
  links: {
    label: string;
    href: string;
  }[];
}

export interface FacilitiesTypes {
  title: string;
  list: string[];
  cards: {
    title: string;
    subTitle?: string;
    images: string[];
    list: string[];
    link: {
      label: string;
      href: string;
    };
  }[];
  src: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface WellnessProgramsTypes {
  title: string;
  description: string;
  icon: JSX.Element;
  cards: {
    title: string;
    desc: string;
    src: string;
  }[];
  links: {
    label: string;
    href: string;
  }[];
}

export interface AccommodationTypes {
  title: string;
  description: string;
  cards: {
    title: string;
    src: string;
    images: string[];
  }[];
  links: {
    label: string;
    href: string;
  }[];
}

export interface TestimonialsTypes {
  title: string;
  description?: string;
  cards?: {
    author: string;
    review: string;
  }[];
  review: {
    videoSrc: string;
    thumbnail: string;
  }[];
}

export interface ExperiencesProps {
  src: string;
  title: string;
  subTitle: string;
  cards: {
    title?: string;
    alt?: string;
    src: string;
  }[];
}

export interface LuxurySuitesSectionProps {
  title: string;
  subTitle: string;
  cards: {
    title: string;
    roomType: string[];
    description: string;
    amities: {
      icon: JSX.Element;
      title: string;
    }[];
    popUpAmities: {
      title: string;
      amities: {
        icon?: JSX.Element;
        title: string;
      }[];
    }[];
    cta: {
      label: string;
      href: string;
    };
    images: string[];
  }[];
}

export interface introProps {
  title: string;
  description: string[];
  points: string[];
  cta: {
    label: string;
    href: string;
  };
  images: string[][];
  video: {
    src: string;
    poster?: string;
  };
}
