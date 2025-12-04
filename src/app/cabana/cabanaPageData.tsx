import { contact } from "../../../Constent";

export const CabanaPageData = {
  bannerData: {
    title: "Cabanas by the Pool",
    logo: "/logo2.png",
    videos: [
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/naturoville/NV-Drone+(2).mp4",
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/naturoville/what-to-expect_1.mp4",
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/naturoville/a-day-at-cabana.mp4",
    ],
  },
  signatureTherapies: {
    title: "Experience Serenity at Naturoville Wellness Resort!",
    description2: [
      "Escape to Naturoville, Rishikesh a luxurious resort surrounded by lush greenery and the calm of the Himalayan foothills. Enjoy expansive lawns, premium rooms, and modern amenities in a nature-inspired setting. Whether it’s a getaway, family vacation, wedding, or corporate event, we ensure warm, seamless hospitality.",
      "Rejuvenate at our Ayurvedic wellness centre, breathe in clean mountain air, and experience a space designed for complete relaxation.",
    ],
    images: [
      "/1.webp",
      "/Artboard14.webp",
      "/Artboard15.webp",
      "/Artboard22.webp",
      "/Artboard36.webp",
      "/DSC09158.webp",
    ],
    links: [
      {
        label: "RESERVE NOW",
        href: `https://wa.me/${contact.WhatsappNumber.replace(/\s+/g, "")}?text=Hello`,
      },
    ],
  },
  gallery: {
    title: "Explore Cabana Gallery",
    subTitle: "",
    images: [
      "/DSC05223.webp",
      "/DSC05288.webp",
      "/DSC05334.webp",
      "/DSC05342.webp",
      "/DSC05369.webp",
      "/DSC05390.webp",
      "/DSC05404.webp",
      "/DSC05405.webp",
      "/DSC05413.webp",
      "/DSC05418.webp",
      "/DSC05437.webp",
      "/DSC05451.webp",
    ],
    links: [
      {
        label: "VIEW MENU",
        href: "/Naturoville Menu PR1.pdf",
      },
      {
        label: "RESERVE NOW",
        href: `https://wa.me/${contact.WhatsappNumber.replace(/\s+/g, "")}?text=Hello`,
      },
    ],
  },
  celebratePageData: {
    title: "Celebrate in Style with Naturoville Wellness Resort",
    subTitle: "EXCLUSIVE CHRISTMASS & NEW YEAR CELEBRATION",
    description:
      "Celebrate Christmas with live music, a bonfire, a 5-course menu, games & gifts, and welcome the New Year with a Gala Dinner, DJ & bonfire — book your festive celebrations now!",
    link: {
      label: "BOOK NOW",
      href: `tel:${contact.phoneNumber}`,
    },
    images: [
      {
        src: "/Celebrate1.jpg",
        alt: "Celebrate",
      },
      {
        src: "/Celebrate2.jpg",
        alt: "Celebrate",
      },
    ],
  },
};
