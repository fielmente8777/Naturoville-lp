import { contact } from "../../Constent";
import {
  AyurvedaIcon,
  FillFacebookIcon,
  FlowerIcon,
  IntegratedIcon,
  OutLineAtEmail,
  OutLineCall,
  OutLineInstagramIcon,
  OutLineLocation,
  SpiritualIcon,
  SustainableIcon,
} from "./icons";

export const pageData = {
  bannerData: {
    title: "Welcome to Our Wellness Center",
    videoSrc:
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/naturoville/Natureovilla-propertyvideo.mp4",
    src: "/core/im3.webp",
  },
  holisticHealing: {
    title: "Our Unique Approach to Holistic Healing & Wellness",
    icon: <FlowerIcon />,
    cards: [
      {
        title: "Ayurveda & Naturopathy Focus",
        icon: <AyurvedaIcon />,
      },
      {
        title: "Integrated Healing Infrastructure",
        icon: <IntegratedIcon />,
      },
      {
        title: "Spiritual Natural Environment",
        icon: <SpiritualIcon />,
      },
      {
        title: "Sustainable Wellness",
        icon: <SustainableIcon />,
      },
    ],
  },
  signatureTherapies: {
    title: "Explore Our Signature Therapies & Treatments",
    description:
      "Naturoville offers over 20 curated Ayurvedic and Naturopathic therapies addressing modern ailments with ancient healing wisdom.",
    cards: [
      {
        category: "CORE AYURVEDIC THERAPIES",
        title: "Kizhi & Patra Potli",
        description: "Herbal pouches heated and massaged on the body",
        src: "/core/im1.webp",
      },
      {
        category: "CORE AYURVEDIC THERAPIES",
        title: "Abhyanga",
        description: "Full-body massage using warm herbal oils",
        src: "/core/im2.webp",
      },
      {
        category: "CORE AYURVEDIC THERAPIES",
        title: "Akshi Tarpan",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        src: "/core/im3.webp",
      },
      {
        category: "CORE AYURVEDIC THERAPIES",
        title: "Pizhichil (Oil Bath)",
        description: "Continuous warm oil stream + massage",
        src: "/core/im4.webp",
      },
      {
        category: "CORE AYURVEDIC THERAPIES",
        title: "Shirodhara",
        description: "Warm oil poured on the forehead",
        src: "/core/im5.webp",
      },
      // SPECIALIZED BASTIS
      {
        category: "SPECIALIZED BASTIS (OIL RETENTION THERAPIES)",
        title: "Kati Basti",
        description: "For lower back pain",
        src: "/specialized/im1.webp",
      },
      {
        category: "SPECIALIZED BASTIS (OIL RETENTION THERAPIES)",
        title: "Pristha Basti",
        description: "For upper/middle back issues",
        src: "/specialized/im2.webp",
      },
      {
        category: "SPECIALIZED BASTIS (OIL RETENTION THERAPIES)",
        title: "Greeva Basti",
        description: "For neck stiffness and cervical problems",
        src: "/specialized/im3.webp",
      },
      {
        category: "SPECIALIZED BASTIS (OIL RETENTION THERAPIES)",
        title: "Udara Basti",
        description: "For digestion, bloating, menstrual relief",
        src: "/specialized/im4.webp",
      },
      {
        category: "SPECIALIZED BASTIS (OIL RETENTION THERAPIES)",
        title: "Hriday Basti",
        description: "Emotional and heart-centered healing",
        src: "/specialized/im5.webp",
      },
      {
        category: "SPECIALIZED BASTIS (OIL RETENTION THERAPIES)",
        title: "Janu Basti",
        description: "Knee care and arthritis treatment",
        src: "/specialized/im6.webp",
      },
      {
        category: "SPECIALIZED BASTIS (OIL RETENTION THERAPIES)",
        title: "Liver Basti",
        description: "Liver detox and function improvement",
        src: "/specialized/im7.webp",
      },
      // OTHER WELLNESS THERAPIES
      {
        category: "OTHER WELLNESS THERAPIES",
        title: "Navarakizhi",
        description: "Rice bolus therapy for muscular nourishment",
        src: "/other/im1.webp",
      },
      {
        category: "OTHER WELLNESS THERAPIES",
        title: "Vibro Powder Massage",
        description: "Herbal powder-based exfoliation",
        src: "/other/im2.webp",
      },
      {
        category: "OTHER WELLNESS THERAPIES",
        title: "Mud Bath",
        description: "Mineral-rich detoxifying therapy for skin and muscles",
        src: "/other/im3.webp",
      },
      {
        category: "OTHER WELLNESS THERAPIES",
        title: "Takradhara (Forehead & Full Body)",
        description: "Buttermilk therapy for stress, Pitta imbalance",
        src: "/other/im4.webp",
      },
      {
        category: "OTHER WELLNESS THERAPIES",
        title: "Swedana (Steam Therapy)",
        description: "Herbal steam for detox and skin purification",
        src: "/other/im5.webp",
      },
      {
        category: "OTHER WELLNESS THERAPIES",
        title: "Marma Massage",
        description: "Energy point stimulation",
        src: "/other/im6.webp",
      },
      {
        category: "OTHER WELLNESS THERAPIES",
        title: "Deep Tissue Massage (DTM)",
        description: "Modern therapeutic massage for chronic pain relief",
        src: "/other/im7.webp",
      },
    ],
    links: [{ label: "GET EXCLUSIVE OFFERS", href: "" }],
  },
  facilities: {
    title: "Facilities & Activities",
    list: [
      "Doctor Consultation Wing & Ayurveda Treatment Center",
      "Yoga & Meditation Pavilions (2 daily yoga + 1 meditation session included)",
      "Recreational Lawns, Musical Garden, Organic Farms",
      "Cycling, swimming, indoor & outdoor games",
      "Wellness Library, Gymnasium, Gazebo",
      "Heated and normal swimming pools with private cabanas",
    ],
    src: "/facilities.webp",
    links: [{ label: "GET EXCLUSIVE OFFERS", href: "" }],
  },
  wellnessPrograms: {
    title: "Explore Our Wellness Programs",
    description:
      "We offer Wellness Programs in 2, 3, 7, 14, 21, and 28-night packages.",
    icon: <FlowerIcon />,
    cards: [
      { title: "Detox & Panchakarma Therapy", src: "/wellness/im1.webp" },
      { title: "Weight Management Program", src: "/wellness/im2.webp" },
      { title: "Diabetes Management", src: "/wellness/im3.webp" },
      { title: "Arthritis & Pain Relief", src: "/wellness/im4.webp" },
      { title: "Depression & Stress Management", src: "/wellness/im5.webp" },
      { title: "Anti-Ageing & Skin Rejuvenation", src: "/wellness/im6.webp" },
      { title: "Shakti – Women’s Wellness", src: "/wellness/im7.webp" },
      {
        title: "Geriatric Wellness (Senior Citizen Focused)",
        src: "/wellness/im8.webp",
      },
      { title: "Natural Immunization Boosting", src: "/wellness/im9.webp" },
      { title: "Spine, Neck & Joint Care", src: "/wellness/im10.webp" },
    ],
    links: [{ label: "GET EXCLUSIVE OFFERS", href: "" }],
  },
  accommodation: {
    title: "Accommodation",
    description:
      "Thoughtfully Designed for Deep Rest, Holistic Rejuvenation, and Serenity",
    cards: [
      { title: "Garden View Room with Balcony", src: "/rooms/im1.webp" },
      { title: "Premium Nature View Room", src: "/rooms/im2.webp" },
      { title: "Executive Garden View Suite", src: "/rooms/im3.webp" },
    ],
    links: [{ label: "BOOK NOW", href: "" }],
  },
  testimonials: {
    title: "Testimonials",
    description: "Appreciation From Our Guests!",
    cards: [
      {
        author: "Lorem ipsum",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      },
    ],
  },
};

export const footerLinks = {
  src: "/logo.png",
  link: {
    label: "GET EXCLUSIVE OFFERS",
    href: "tel:" + contact.phoneNumber,
  },
  data: [
    {
      title: "Contact Us",
      links: [
        {
          label: contact.address,
          href: "",
          icon: <OutLineLocation />,
        },
        {
          label: contact.phoneNumber,
          href: "tel:" + contact.phoneNumber,
          label2: contact.phoneNumber2,
          href2: "tel:" + contact.phoneNumber2,
          icon: <OutLineCall />,
        },

        {
          label: contact.email,
          href: "mailto:" + contact.email,
          label2: contact.email2,
          href2: "mailto:" + contact.email2,
          icon: <OutLineAtEmail />,
        },
      ],
    },
    {
      mapUrl: contact.mapUrl,
    },
  ],
};

export const socialLinks = [
  {
    label: "facebook",
    href: "https://www.facebook.com/naturoville",
    icon: <FillFacebookIcon />,
  },
  {
    label: "instagram",
    href: "https://www.instagram.com/naturoville/",
    icon: <OutLineInstagramIcon />,
  },
];
