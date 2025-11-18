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
  description: string;
  cards: {
    category: string;
    title: string;
    description: string;
    src: string;
  }[];
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
