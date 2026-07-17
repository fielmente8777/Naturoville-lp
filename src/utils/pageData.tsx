import { contact } from "../../Constent";
import {
  AyurvedaIcon,
  FillFacebookIcon,
  FlowerIcon3,
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
    icon: <FlowerIcon3 />,
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
    cards: [
      {
        title: "What Your Stay Includes",
        images: ["/im.jpg"],
        list: [
          // "Welcome drink on arrival",
          // "Comfortable stay (Single/Double occupancy)",
          "Personalized lifestyle and wellness evaluation",
          "Consultation with Ayurveda, Naturopathy, and Yoga experts",
          "Sattvik meals throughout the day (Breakfast, Lunch & Dinner – Vegetarian only)",
        ],
        link: {
          label: "Book Now",
          href: `https://wa.me/${contact.WhatsappNumber.replace(/\s+/g, "")}?text=Hello`,
        },
      },
      {
        title: "Ayurvedic Therapies Daily ",
        subTitle: "(1 before lunch + 1 after)",
        images: ["/fa1.jpg"],
        list: [
          // "Twice-daily Yoga sessions and daily Meditation",
          // "Weekly workshops: Ayurveda Talk, Yoga Talk, Cooking Demo, and Aqua Yoga",
          // "Access to pools, gym, and all recreation areas",
          // "Airport pick-up and drop for stays of one week and above",
          "Two ayurvedic therapies daily",
          "Daily Yoga and meditation classes",
          "Weekly workshops - Cooking classes, Aqua Yoga, Sound healing, Mandala arts etc.",
          "heated swimming pools with private cabanas",
          "Gym, badminton , cycling, walking trails.",
        ],
        link: {
          label: "Book Now",
          href: `https://wa.me/${contact.WhatsappNumber.replace(/\s+/g, "")}?text=Hello`,
        },
      },
      // {
      //   title: "Experiences & Spaces",
      //   images: ["/im.png"],
      //   list: [
      //     "Ayurveda Treatment & Healing Center",
      //     "Yoga and Meditation Pavilions",
      //     "Heated and outdoor swimming pools with private cabanas",
      //     "Wellness library, gym, and gazebo",
      //     "Organic farm, musical garden, and open lawns",
      //     "Cycling, indoor, and outdoor games",
      //   ],
      //   link: {
      //     label: "Book Now",
      //     href: `https://wa.me/${contact.WhatsappNumber.replace(/\s+/g, "")}?text=Hello`,
      //   },
      // },
      {
        title: "Signature Wellness Experiences",
        images: ["/fa2.jpg"],
        list: [
          "Ayurveda Treatment & Healing Center",
          "Yoga and Meditation Pavilions",
          "Heated and outdoor swimming pools with private cabanas",
          "Wellness library, gym, and gazebo",
          "Organic farm, musical garden, and open lawns",
          "Cycling, indoor, and outdoor games",
        ],
        link: {
          label: "Book Now",
          href: `https://wa.me/${contact.WhatsappNumber.replace(/\s+/g, "")}?text=Hello`,
        },
      },
    ],
    src: "/facilities.webp",
    links: [
      {
        label: "Explore Activities Now",
        href: `https://wa.me/${contact.WhatsappNumber.replace(/\s+/g, "")}?text=Hello`,
      },
    ],
  },
  wellnessPrograms: {
    title: "Explore Our Wellness Programs",
    description:
      "We offer Wellness Programs in 2, 3, 7, 14, 21, and 28-night packages.",
    icon: <FlowerIcon3 />,
    cards: [
      {
        title: "Detox & Panchakarma Therapy",
        desc: "A refined Ayurvedic cleansing ritual that removes deep-rooted toxins, rebalances the body’s natural energies, and restores clarity, vitality, and lightness from within preparing you for deeper healing and renewal.",
        src: "/wellness/Detox-Panchakarma-Therapy.png",
      },
      {
        title: "Weight Management Program",
        desc: "A premium, holistic approach to achieving a balanced and sustainable body composition. With diagnostic insights, therapeutic treatments, mindful movement, and nourishing cuisine, this program encourages transformation that feels natural and lasting.",
        src: "/wellness/Weight-Management-Program.png",
      },
      {
        title: "Diabetes Management",
        desc: "A curated wellness program designed to elevate metabolic health. Through therapeutic Ayurveda, tailored nutrition, yoga, and lifestyle refinement, this treatment supports stable blood sugar levels while restoring overall strength and vitality.",
        src: "/wellness/Diabetes-Management.png",
      },
      {
        title: "Arthritis & Pain Relief",
        desc: "Thoughtfully designed to ease chronic pain and restore effortless movement. Using healing oils, specialized therapies, and supportive strengthening practices, this program nurtures the joints and brings comfort back into everyday life.",
        src: "/wellness/Arthritis-Pain-Relief.png",
      },
      {
        title: "Depression & Stress Management",
        desc: "A serene, deeply restorative healing journey. Ayurveda, breathwork, yoga, and reflective practices come together to calm the mind, uplift the spirit, and re-establish inner balance and peace.",
        src: "/wellness/Depression-Stress-Management.png",
      },
      {
        title: "Anti-Ageing & Skin Rejuvenation",
        desc: "A luxurious rejuvenation experience that softens signs of ageing, enhances skin tone, and elevates natural glow. This program revitalizes both appearance and inner vitality for timeless, graceful beauty.",
        src: "/wellness/Anti-Ageing-Skin-Rejuvenation.png",
      },
      {
        title: "Shakti – Women’s Wellness",
        desc: "A transformative journey designed exclusively for women. This program harmonizes hormonal balance, nurtures emotional well-being, rejuvenates the skin, and reconnects each guest with her innate feminine power, grace, and radiance.",
        src: "/wellness/Shakti–Women-Wellness.png",
      },
      {
        title: "Geriatric Wellness (Senior Citizen Focused)",
        desc: "A personalized wellness journey for graceful ageing. With gentle therapies, balanced nutrition, and supportive practices, this program enhances mobility, digestion, sleep, and emotional ease for renewed daily comfort.",
        src: "/wellness/im8.webp",
      },
      {
        title: "Natural Immunization Boosting",
        desc: "An elegant wellness program that fortifies the body’s inherent defense system. Through detoxification, herbal medicine, and restorative daily routines, the body is strengthened, energized, and made resilient from within.",
        src: "/wellness/im9.webp",
      },
      {
        title: "Spine, Neck & Joint Care",
        desc: "A specialized therapeutic program designed to release deep-seated tension, correct postural strain, and restore natural alignment. Through targeted Ayurvedic therapies, neuromuscular relaxation, and supportive strengthening techniques, this treatment relieves chronic back, neck, and spine discomfort while rebuilding stability and ease of movement.",
        src: "/wellness/Spine-Neck-Joint-Care.png",
      },
    ],
    links: [
      {
        label: "DOWNLOAD BROCHURE",
        href: `/Naturoville-Wellness-Resort-Brochure.pdf`,
      },
    ],
  },
  accommodation: {
    title: "Accommodation",
    description:
      "Thoughtfully Designed for Deep Rest, Holistic Rejuvenation, and Serenity",
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
  testimonials: {
    title: "Real Stays. Real Stories. Real Reviews",
    review: [
      {
        videoSrc:
          "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/naturoville/With-warmth-and-gratitude.mp4",
        thumbnail: "/With-warmth-and-gratitude.png",
      },
      {
        videoSrc:
          "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/naturoville/NV.mp4",
        thumbnail: "/NV.png",
      },
    ],
    // description: "Appreciation From Our Guests!",
    // cards: [
    //   {
    //     author: "Diwan Chand",
    //     review:
    //       "A Serene Escape at Naturoville Wellness, Rishikesh. We’ve been regular visitors to Naturoville Wellness, and every single visit feels like a rejuvenating retreat. This place is not just about wellness—it’s about an experience of their F&b. A huge part of why we keep coming back is because of Vipin Rawat ji. He’s truly the heart of the property. His warmth, deep understanding of hospitality, and personal attention to every detail make all the difference. You can immediately tell that service excellence is not just a goal here—it’s a culture, and much of that credit goes to him. The staff are equally courteous and professional, always ensuring guests feel at ease and well cared for. The food here is another highlight—fresh, wholesome, and thoughtfully prepared, aligning beautifully with the wellness philosophy of the resort. Whether it’s the herbal teas, balanced meals, or nourishing snacks, everything reflects care and quality. And let’s not forget their drinks which they recently introduced. The swimming pool area is absolutely lovely calm, scenic, and perfect for relaxation. The overall property is beautifully maintained with tranquil surroundings, ideal for anyone looking to unwind and recharge. Highly recommend Naturoville Wellness to anyone looking for a holistic getaway, and don’t forget to meet Vipin Rawat ji—his presence alone makes the stay memorable.",
    //   },
    //   {
    //     author: "Jasleen Anand",
    //     review:
    //       "I recently had the pleasure of dining at Naturoville Wellness, and it was truly a delightful experience. The serene ambiance surrounded by lush greenery creates a tranquil setting, making it a perfect escape from the hustle and bustle. The lunch menu offered a delectable array of dishes, showcasing a harmonious blend of flavors and fresh, locally sourced ingredients. The chefs at Naturoville Wellness have a commendable skill in crafting dishes that not only satisfy the taste buds but also align with a wellness-focused approach. The attentive and courteous staff added to the overall positive experience, ensuring our needs were met with a genuine warmth. The attention to detail, from presentation to service, was impressive. I would highly recommend Naturoville Wellness for a dining experience that goes beyond just a meal—it's a journey of culinary delight in a rejuvenating natural environment.",
    //   },
    //   {
    //     author: "Krishna Murthy",
    //     review:
    //       "A few months ago I got diagnosed with Type 2 Diabetes. It took me some time to accept it. I finally opted for diabetes management program at Naturoville Wellness. On Diwali morning this year my Fasting Blood Glucose was 250! And HbA1c was over 11. Dr. Archana first explained to me the progression of the disease and how we are planning to tackle it using Ayurveda, healthy diet and exercise. With consistent efforts and continued guidance I managed to achieve fasting blood glucose of 97 and HbA1c of 7.4. So that's a reduction of almost 4 percent in a span of just two months! Besides this therapeutic yoga also helped me heal years of chronic lower back pain. PS - Added bonus of healthy weight loss was remarkable as well. I entered the new year down 10kgs from Diwali. Thank you to the entire team at Naturoville Wellness. Can't wait to be back soon☺️",
    //   },
    //   {
    //     author: "Pragya Mittal",
    //     review:
    //       "This is so far the best place to rejuvenate and relax. The therapists are all experts and are professional in what they do. Here you will find the true essence of Ayurveda. The doctor gives you the best advice and prepares customised plan according to your needs. The food is extremely delectable and there is proper management in the kitchen. Special shout out to mr. Pushkar and Sumit for fulfilling all our dietary needs. The rooms are well maintained and there is proper cleanliness which gives a great ambience to relax and refresh. Mr. Kartik ( GM ) is very polite and responsible, he gives quick solutions to any problems that the guest might face. I would highly recommend this place for all those who want to unwind and experience life away from the mundane. The Yoga and meditation sessions are very powerful. Will definitely visit again.",
    //   },
    //   {
    //     author: "Sonam Wangmo",
    //     review:
    //       "I'm thrilled to be visiting for the third time, and I'm still blown away by the exceptional service and quality ! The consistency is impressive and has never been disappointed. The staff/team are friendly, knowledgeable, and go above and beyond to ensure a fantastic experience. The services are top-notch, and I appreciate the attention to detail. I've already recommended service to friends and family, and I'll continue to do so. Keep up the outstanding work!",
    //   },
    // ],
  },
  vacationData: {
    title: "A Safe & Hassle-Free Monsoon Escape",
    description: [
      "The monsoon season is regarded as the ideal time for Ayurveda, Panchakarma, and holistic therapies, allowing the body to cleanse, heal, and restore naturally. Enjoy exclusive monsoon wellness offers and experience nature at its most refreshing.",

      "Conveniently located on the highway, Naturoville remains easily accessible during the season, ensuring a comfortable, worry-free journey for every guest",
    ],
    link: {
      label: "Book Now",
      href: `tel:${contact.phoneNumber}`,
    },
  },
slidingTitle: {
    items: [
      "Enjoy Exclusive Monsoon Wellness Offers & Escape into Nature",
    ],
  },
  

};

export const footerLinks = {
  src: "/LOGO 1.png",
  link: {
    label: "GET EXCLUSIVE OFFERS",
    href: "tel:" + "+919520890995",
  },
  data: [
    {
      title: "Contact Us",
      links: [
        {
          label: contact.address,
          href: contact.addressUrl,
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
    href: contact.socialLinks.facebook,
    icon: <FillFacebookIcon />,
  },
  {
    label: "instagram",
    href: contact.socialLinks.instagram,
    icon: <OutLineInstagramIcon />,
  },
];
