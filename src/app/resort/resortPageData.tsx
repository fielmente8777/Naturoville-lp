import {
  BathTubIcon,
  ComplimentaryBreakfastIcon,
  EarlyCheckInIcon,
  FreeWifiIcon,
  GardenViewIcon,
  LoungeIcon,
  TrulyPurifiedAirIcon,
} from "@/utils/amenityIcons";
import { contact } from "../../../Constent";
import { SpaciousIcon } from "../../utils/amenityIcons";
import { link } from "fs";

export const resortPageData = {
  bannerData: {
    title: "Welcome to Our Wellness Center",
    videoSrc:
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/naturoville/Natureovilla-propertyvideo.mp4",
    src: "/core/im3.webp",
  },
  vacationData:{
    title:"A Safe & Hassle-Free Monsoon Escape",
    description:"Enjoy complete peace of mind this monsoon. Strategically located on the highway, Naturoville Wellness Resort remains easily accessible even during heavy rainfall. Our location offers a smooth and comfortable journey, so you can focus on relaxation and wellness from the moment you arrive.",
    link: {
          label: "Book Now",
          href: `tel:${contact.phoneNumber}`,
        },

  },
  signatureTherapies: {
    title: "Experience Serenity at Naturoville Wellness Resort!",
    // description: "Experience Serenity at Naturoville Wellness Resort!",
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
        label: "GET EXCLUSIVE OFFERS",
        href: `https://wa.me/${contact.WhatsappNumber.replace(/\s+/g, "")}?text=Hello`,
      },
    ],
  },
  luxurySuites: {
    title: "Our Luxury Suites & Rooms",
    subTitle: "DESIGNED FOR LUXURY STAYS & HOLISTIC SERENITY",
    cards: [
      {
        title: "Luxury Suites",
        roomType: ["2 Pax", "1 King Bed"],
        description:
          "Our Luxury Suites redefine indulgence with expansive layouts and elevated design, crafted for guests who seek more space, privacy, and a truly immersive stay experience.",
        amities: [
          {
            icon: <EarlyCheckInIcon />,
            title: "Early Check-in *",
          },
          {
            icon: <ComplimentaryBreakfastIcon />,
            title: "Complimentary Breakfast",
          },
          {
            icon: <FreeWifiIcon />,
            title: "Free, Fast, & Reliable Wi-Fi",
          },
          {
            icon: <BathTubIcon />,
            title: "Bathtub & Powder Area",
          },
          {
            icon: <GardenViewIcon />,
            title: "Garden View",
          },
          {
            icon: <LoungeIcon />,
            title: "Lounge",
          },
        ],
        popUpAmities: [
          {
            title: "Additional amenities",
            amities: [
              { title: "Separate Badroom and Lounge area" },
              {
                title: "Sofa cum bed in Lounge, to complete the two bed setup",
              },
              { title: "TVs in both bedroom and Lounge" },
              { title: "Separately dressing area with Dressing units" },
              { title: "Separate powder washroom" },
              { title: "Bathtub and shower cabins" },
            ],
          },
          {
            title: "Technology & Connectivity",
            amities: [
              { title: "Free, fast, and reliable Wi-Fi" },
              { title: "Modern charging sockets" },
              { title: "Smart TV with streaming capabilities" },
              { title: "Digital room keys" },
            ],
          },
          {
            title: "Comfort & Sleep Experience",
            amities: [
              { title: "High-quality bedding, linens, and pillows" },
              { title: "Quiet, restful environment" },
              {
                title:
                  "VRV system integrated with TFA for enhanced indoor air quality",
              },
            ],
          },
          {
            title: "Essential Amenities",
            amities: [
              { title: "A well-stocked coffee/tea bar" },
              { title: "Mini-fridge" },
              { title: "Iron/ironing board" },
              { title: "Safe box" },
              { title: "Intercom system" },
            ],
          },
          {
            title: "Bathroom & Personal Care",
            amities: [
              { title: "Luxury toiletries" },
              { title: "Hairdryers" },
              { title: "Bathrobes" },
              { title: "Slippers" },
            ],
          },
          {
            title: "Design & Functionality",
            amities: [
              { title: "Functional and ergonomic furniture" },
              { title: "Dedicated workspace" },
              { title: "Adequate lighting" },
              { title: "Ample, accessible storage for luggage" },
            ],
          },
          {
            title: "Safety & Security",
            amities: [
              { title: "Double-locking systems" },
              { title: "Peepholes" },
              { title: "Fire safety systems and clear exit routes" },
              { title: "High quality lockable balcony windows" },
            ],
          },
        ],
        cta: {
          label: "Book Now",
          href: `tel:${contact.phoneNumber}`,
        },
        images: [
          "/Luxury-Suite/DSC02870-HDR.webp",
          "/Luxury-Suite/DSC02873-HDR.webp",
          "/Luxury-Suite/DSC02876-HDR.webp",
          "/Luxury-Suite/DSC02892-HDR.webp",
          "/Luxury-Suite/DSC02901-HDR.webp",
          "/Luxury-Suite/DSC02907-HDR.webp",
          "/Luxury-Suite/DSC02807-HDR.webp",
          "/Luxury-Suite/DSC02846-HDR.webp",
          "/Luxury-Suite/DSC02855-HDR.webp",
          "/Luxury-Suite/DSC02858-HDR.webp",
          "/Luxury-Suite/DSC02913-HDR.webp",
          "/Luxury-Suite/Luxury-Room-4-balcony.webp",
          "/Luxury-Suite/DSC02813-HDR.webp",
          "/Luxury-Suite/DSC02822-HDR.webp",
          "/Luxury-Suite/DSC02825-HDR.webp",
        ],
      },
      {
        title: "Luxury Rooms",
        roomType: ["2 Pax", "1 King Bed"],
        description:
          "Our Luxury Rooms are thoughtfully designed to offer a seamless blend of comfort, functionality, and modern elegance ideal for guests who value both relaxation and efficiency.",
        amities: [
          {
            icon: <EarlyCheckInIcon />,
            title: "Early Check-in *",
          },
          {
            icon: <ComplimentaryBreakfastIcon />,
            title: "Complimentary Breakfast",
          },
          {
            icon: <FreeWifiIcon />,
            title: "Free, Fast, & Reliable Wi-Fi",
          },
          {
            icon: <SpaciousIcon />,
            title: "Spacious Balcony",
          },
          {
            icon: <GardenViewIcon />,
            title: "Garden View",
          },
          {
            icon: <TrulyPurifiedAirIcon />,
            title: "Truly Purified Air",
          },
        ],
        popUpAmities: [
          {
            title: "Technology & Connectivity",
            amities: [
              { title: "Free, fast, and reliable Wi-Fi" },
              { title: "Modern charging sockets" },
              { title: "Smart TV with streaming capabilities" },
              { title: "Digital room keys" },
            ],
          },
          {
            title: "Comfort & Sleep Experience",
            amities: [
              { title: "High-quality bedding, linens, and pillows" },
              { title: "Quiet, restful environment" },
              {
                title:
                  "VRV system integrated with TFA for enhanced indoor air quality",
              },
            ],
          },
          {
            title: "Essential Amenities",
            amities: [
              { title: "A well-stocked coffee/tea bar" },
              { title: "Mini-fridge" },
              { title: "Iron/ironing board" },
              { title: "Safe box" },
              { title: "Intercom system" },
            ],
          },
          {
            title: "Bathroom & Personal Care",
            amities: [
              { title: "Luxury toiletries" },
              { title: "Hairdryers" },
              { title: "Bathrobes" },
              { title: "Slippers" },
            ],
          },
          {
            title: "Design & Functionality",
            amities: [
              { title: "Functional and ergonomic furniture" },
              { title: "Dedicated workspace" },
              { title: "Adequate lighting" },
              { title: "Ample, accessible storage for luggage" },
            ],
          },
          {
            title: "Safety & Security",
            amities: [
              { title: "Double-locking systems" },
              { title: "Peepholes" },
              { title: "Fire safety systems and clear exit routes" },
              { title: "High quality lockable balcony windows" },
            ],
          },
        ],
        cta: {
          label: "Book Now",
          href: `tel:${contact.phoneNumber}`,
        },
        images: [
          "/Luxury-Room/DSC02732-HDR.webp",
          "/Luxury-Room/DSC02750-HDR.webp",
          "/Luxury-Room/DSC02744-HDR-2.webp",
          "/Luxury-Room/DSC02756-HDR.webp",
          "/Luxury-Room/DSC02759-HDR.webp",
          "/Luxury-Room/DSC02777-HDR.webp",
          "/Luxury-Room/DSC02783-HDR.webp",
          "/Luxury-Room/DSC02804-HDR.webp",
          "/Luxury-Room/DSC02792-HDR.webp",
          "/Luxury-Room/DSC02801-HDR.webp",
          "/Luxury-Room/DSC02765-HDR.webp",
          "/Luxury-Room/DSC02771-HDR.webp",
        ],
      },
    ],
  },
  accommodation: {
    title: "Explore Our Luxury Accommodations",
    description: "DESIGNED FOR LUXURY STAYS & HOLISTIC SERENITY",
    cards: [
      {
        title: "Garden View Room with Balcony",
        src: "/rooms/im1.webp",
        images: [
          "/garden-view-room/Garden view room with Balcony 1.jpg",
          "/garden-view-room/Garden view room with Balcony 2.jpg",
          "/garden-view-room/Garden view room with Balcony 3.jpg",
          "/garden-view-room/Garden view room with Balcony 4.jpg",
          "/garden-view-room/deluxe garden room washroom 2.jpg",
          "/garden-view-room/deluxe garden room washroom.jpg",
        ],
      },
      {
        title: "Premium Nature View Room",
        src: "/rooms/Premium-Nature-view-Room.jpg",
        images: [
          "/premium-nature/Premium Nature view Room 1.jpg",
          "/premium-nature/Premium Nature view Room 2.jpg",
          "/premium-nature/Premium Nature view Room 3.jpg",
          "/premium-nature/Premium Nature view Room 4.jpg",
          "/premium-nature/Premium Nature view Room 5 bathroom.jpg",
          "/premium-nature/Premium Nature view Room 6.jpg",
        ],
      },
      {
        title: "Executive Garden View Suite",
        src: "/rooms/im3.webp",
        images: [
          "/Executive-Garden/Executive Garden view Suite 1.jpg",
          "/Executive-Garden/Executive Garden view Suite 2.jpg",
          "/Executive-Garden/Executive Garden view Suite 3.jpg",
          "/Executive-Garden/Executive Garden view Suite 4.jpg",
          "/Executive-Garden/executive suite washroom 1.jpg",
          "/Executive-Garden/executive suite washroom 2.jpg",
        ],
      },
      {
        title: "New Luxury Suites",
        src: "/rooms/im1.webp",
        images: [
          "/popimg/popimg7.jpg",
          "/popimg/popimg1.jpg",
          "/popimg/popimg5.jpg",
          "/popimg/popimg3.jpg",
          "/popimg/popimg6.jpg",
          "/popimg/popimg4.jpg",
          "/popimg/popimg2.jpg",
        ],
      },
    ],
    links: [
      {
        label: "BOOK NOW",
        href: `https://wa.me/${contact.WhatsappNumber.replace(/\s+/g, "")}?text=Hello`,
      },
    ],
  },

  experienceData: {
    title: "Exclusive Experiences for Naturoville Guests!",
    subTitle: "WHERE WELLNESS, LUXURY AND NATURE COME TOGETHER",

    cards: [
      {
        title: "MORNING TRIP TO TRIVENI GHAT",
        src: "/Experience1.jpg",
      },
      {
        title: "TRIP TO RAJAJI NATIONAL PARK",
        src: "/Experience2.jpg",
      },
      {
        title: "MORNING TRIP AND MEDITATION AT KUNJAPURI TEMPLE, RISHIKESH",
        src: "/Experience3.jpg",
      },
      {
        title: "PARMARTH NIKETAN AARTI",
        src: "/Experience4.jpg",
      },
      {
        title: "MORNING TRIP TO TRIVENI GHAT",
        src: "/Experience1.jpg",
      },
      {
        title: "TRIP TO RAJAJI NATIONAL PARK",
        src: "/Experience2.jpg",
      },
      {
        title: "MORNING TRIP AND MEDITATION AT KUNJAPURI TEMPLE, RISHIKESH",
        src: "/Experience3.jpg",
      },
      {
        title: "PARMARTH NIKETAN AARTI",
        src: "/Experience4.jpg",
      },
    ],
  },

  restaurantPageData: {
    title: "Your Choice of Two Distinct Restaurants",
    subTitle: "EXCLUSIVE AT NATUROVILLE WELLNESS",
    cards: [
      {
        title: "Prana",
        description:
          "Our indoor multicuisine restaurant offers Indian, Asian, Continental, and organic wellness cuisine. Surrounded by lush gardens, it’s the perfect place to enjoy wholesome meals in a beautiful natural setting.",
        src: ["/Frame-1707.png"],
        link: {
          label: "BOOK NOW",
          href: `tel:${contact.phoneNumber}`,
        },
      },
      {
        title: "Cabanas by the Pool",
        subtitle:"20% OFF ON CABANAS",
        description:
          "Relax in our luxurious poolside cabanas by the heated swimming pool, complete with a poolside bar. With tropical vibes, great food, and space for group bookings or celebrations, it feels like a mini vacation within your vacation.",
        src: ["/Restaurant2.jpg"],
        link: {
          label: "BOOK NOW",
          href: `tel:${contact.phoneNumber}`,
        },
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
  newCelebrateData: {
    title: "Weddings & Celebrations",
    description: [
      "Celebrate your dream wedding in a luxurious resort surrounded by nature, where elegant accommodations, breathtaking outdoor venues, and warm hospitality come together to create unforgettable memories. With space for up to 200 guests and dedicated support for every celebration, we provide the perfect setting for a seamless destination wedding experience.",
    ],
    points: [
      "25 Guest Rooms & Exclusive Bridal Suite",
      "Wedding Celebrations for Up to 200 Guests",
      "Scenic Outdoor Lawns, Mandap & Poolside Venues",
      "Customized Catering & Live Food Counters",
      "Mehendi, Haldi, Sangeet & Entertainment Arrangements",
      "Complete Wedding Support, Décor & Travel Assistance",
    ],
    cta: {
      label: "ENQUIRE VIA WHATSAPP",
      href: `tel:${contact.phoneNumber}`,
    },
    images: [
      ["/new-Celebrate/DSC00130.webp", "/new-Celebrate/DSC00145.webp"],
      ["/new-Celebrate/DSC00154.webp", "/new-Celebrate/DSC00152.webp"],
      ["/new-Celebrate/DSC00163.webp", "/new-Celebrate/DSC00176.webp"],
      ["/new-Celebrate/DSC00169.webp", "/new-Celebrate/DSC00150.webp"],
      ["/new-Celebrate/DSC04564.webp", "/new-Celebrate/DSC04573.webp"],
      ["/new-Celebrate/DSC04583.webp", "/new-Celebrate/DSC04572.webp"],
      ["/new-Celebrate/DSC04570.webp", "/new-Celebrate/DSC00141.webp"],
    ],
  },
};
