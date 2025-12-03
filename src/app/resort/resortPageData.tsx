import { contact } from "../../../Constent";

export const resortPageData = {
  bannerData: {
    title: "Welcome to Our Wellness Center",
    videoSrc:
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/naturoville/Natureovilla-propertyvideo.mp4",
    src: "/core/im3.webp",
  },

  signatureTherapies: {
    title: "Experience Serenity at Naturoville Wellness Resort!",
    // description: "Experience Serenity at Naturoville Wellness Resort!",
    description2: [
      "Escape to Naturoville, Rishikesh a luxurious resort surrounded by lush greenery and the calm of the Himalayan foothills. Enjoy expansive lawns, premium rooms, and modern amenities in a nature-inspired setting. Whether it’s a getaway, family vacation, wedding, or corporate event, we ensure warm, seamless hospitality.",
      "Rejuvenate at our Ayurvedic wellness centre, breathe in clean mountain air, and experience a space designed for complete relaxation.",
    ],
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
        description: "Soothing therapy to rejuvenate and heal tired eyes",
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
    links: [
      {
        label: "GET EXCLUSIVE OFFERS",
        href: `https://wa.me/${contact.WhatsappNumber.replace(/\s+/g, "")}?text=Hello`,
      },
    ],
  },

  experienceData: {
    title: "Exclusive Experiences for Naturoville Guests!",
    subTitle: "WHERE WELLNESS, LUXURY AND NATURE COME TOGETHER",

    cards: [
      {
        title: "BONFIRE",
        src: "/Experience1.jpg",
      },
      {
        title: "BONFIRE",
        src: "/Experience2.jpg",
      },
      {
        title: "BONFIRE",
        src: "/Experience1.jpg",
      },
      {
        title: "BONFIRE",
        src: "/Experience1.jpg",
      },
      {
        title: "BONFIRE",
        src: "/Experience1.jpg",
      },
      {
        title: "BONFIRE",
        src: "/Experience1.jpg",
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
        src: ["/Restaurant1.jpg", "/Restaurnat1.jpg", "/Restaurnat1.jpg"],
        link: {
          label: "BOOK NOW",
          href: `tel:${contact.phoneNumber}`,
        },
      },
      {
        title: "Prana",
        description:
          "Our indoor multicuisine restaurant offers Indian, Asian, Continental, and organic wellness cuisine. Surrounded by lush gardens, it’s the perfect place to enjoy wholesome meals in a beautiful natural setting.",
        src: ["/Restaurant1.jpg", "/Restaurnat1.jpg", "/Restaurnat1.jpg"],
        link: {
          label: "BOOK NOW",
          href: `tel:${contact.phoneNumber}`,
        },
      },
    ],
  },
};
