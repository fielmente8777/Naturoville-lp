import { contact } from "../../../Constent";

export const CabanaPageData = {
  bannerData: {
    title: "Cabanas by the Pool",
    logo: "/logo2.png",
    videos: [
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/naturoville/NV-Drone+(2).mp4",
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/naturoville/what-to-expect_1.mp4",
      // "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/naturoville/a-day-at-cabana.mp4",
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/naturoville/Christmas+at+Naturoville+celebrations.mp4",
    ],
  },
  signatureTherapies: {
    title: "Experience Serenity at Naturoville Wellness Resort!",
    description2: [
      "Step into a space where time slows down.",
      "At Cabanas by the Pool, mornings turn into lazy brunches, afternoons drift by with sun-soaked conversations, and evenings glow with soft lights and laughter. Designed for comfort and calm, our private poolside cabanas are perfect for everything from intimate kitty parties and relaxed brunches to sunset celebrations, cocktail nights, and wedding gatherings.",
      "Whether you’re hosting a special occasion or simply unwinding with good food, handcrafted drinks, and gentle mountain air, this is where moments feel effortless. Surrounded by nature and quiet luxury, every gathering here feels personal, unhurried, and beautifully memorable.",
    ],
    images: [
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DJI_0534-HDR-Edit.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DJI_0539-HDR.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DSC01715-HDR.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DSC01764.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DSC01803.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DSC01819.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DSC01830.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DSC01864.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DSC01870-HDR.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DSC01885-HDR.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DSC01894-HDR.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DSC01900-HDR.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DSC01909-HDR.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DSC01912-HDR.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/naturoville/cabana/DSC01993-HDR.webp",
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
    title: "A Perfect Start to Your Foreverat Naturoville Wellness Resort",
    subTitle: "EXCLUSIVE WELLNESS DESTINATION WEDDING",
    description:
      "From serene pre-wedding spa rituals to breathtaking outdoor receptions, we blend luxury with holistic well-being. Exchange your vows in nature’s lap and celebrate a love that nourishes the soul.",
    link: {
      label: "PLAN YOUR WEDDING",
      href: `tel:${contact.phoneNumber}`,
    },
    images: [
      {
        src: "/b1.png",
        alt: "Celebrate",
      },
      {
        src: "/b2.png",
        alt: "Celebrate",
      },
    ],
  },
};
