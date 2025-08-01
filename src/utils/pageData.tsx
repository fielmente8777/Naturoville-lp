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
    links: [{ label: "GET EXCLUSIVE OFFERS", href: `https://wa.me/${contact.phoneNumber.replace(/\s+/g, "")}?text=Hello` }],
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
    links: [{ label: "GET EXCLUSIVE OFFERS", href: `https://wa.me/${contact.phoneNumber.replace(/\s+/g, "")}?text=Hello` }],
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
    links: [{ label: "GET EXCLUSIVE OFFERS", href: `https://wa.me/${contact.phoneNumber.replace(/\s+/g, "")}?text=Hello` }],
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
    links: [{ label: "BOOK NOW", href: `https://wa.me/${contact.phoneNumber.replace(/\s+/g, "")}?text=Hello` }],
  },
  testimonials: {
    title: "Testimonials",
    description: "Appreciation From Our Guests!",
    cards: [
      {
        author: "Diwan Chand",
        review:
          "A Serene Escape at Naturoville Wellness, Rishikesh. We’ve been regular visitors to Naturoville Wellness, and every single visit feels like a rejuvenating retreat. This place is not just about wellness—it’s about an experience of their F&b. A huge part of why we keep coming back is because of Vipin Rawat ji. He’s truly the heart of the property. His warmth, deep understanding of hospitality, and personal attention to every detail make all the difference. You can immediately tell that service excellence is not just a goal here—it’s a culture, and much of that credit goes to him. The staff are equally courteous and professional, always ensuring guests feel at ease and well cared for. The food here is another highlight—fresh, wholesome, and thoughtfully prepared, aligning beautifully with the wellness philosophy of the resort. Whether it’s the herbal teas, balanced meals, or nourishing snacks, everything reflects care and quality. And let’s not forget their drinks which they recently introduced. The swimming pool area is absolutely lovely calm, scenic, and perfect for relaxation. The overall property is beautifully maintained with tranquil surroundings, ideal for anyone looking to unwind and recharge. Highly recommend Naturoville Wellness to anyone looking for a holistic getaway, and don’t forget to meet Vipin Rawat ji—his presence alone makes the stay memorable.",
      },
      {
        author: "Jasleen Anand",
        review:
          "I recently had the pleasure of dining at Naturoville Wellness, and it was truly a delightful experience. The serene ambiance surrounded by lush greenery creates a tranquil setting, making it a perfect escape from the hustle and bustle. The lunch menu offered a delectable array of dishes, showcasing a harmonious blend of flavors and fresh, locally sourced ingredients. The chefs at Naturoville Wellness have a commendable skill in crafting dishes that not only satisfy the taste buds but also align with a wellness-focused approach. The attentive and courteous staff added to the overall positive experience, ensuring our needs were met with a genuine warmth. The attention to detail, from presentation to service, was impressive. I would highly recommend Naturoville Wellness for a dining experience that goes beyond just a meal—it's a journey of culinary delight in a rejuvenating natural environment.",
      },
      {
        author: "Krishna Murthy",
        review:
          "A few months ago I got diagnosed with Type 2 Diabetes. It took me some time to accept it. I finally opted for diabetes management program at Naturoville Wellness. On Diwali morning this year my Fasting Blood Glucose was 250! And HbA1c was over 11. Dr. Archana first explained to me the progression of the disease and how we are planning to tackle it using Ayurveda, healthy diet and exercise. With consistent efforts and continued guidance I managed to achieve fasting blood glucose of 97 and HbA1c of 7.4. So that's a reduction of almost 4 percent in a span of just two months! Besides this therapeutic yoga also helped me heal years of chronic lower back pain. PS - Added bonus of healthy weight loss was remarkable as well. I entered the new year down 10kgs from Diwali. Thank you to the entire team at Naturoville Wellness. Can't wait to be back soon☺️",
      },
      {
        author: "Pragya Mittal",
        review:
          "This is so far the best place to rejuvenate and relax. The therapists are all experts and are professional in what they do. Here you will find the true essence of Ayurveda. The doctor gives you the best advice and prepares customised plan according to your needs. The food is extremely delectable and there is proper management in the kitchen. Special shout out to mr. Pushkar and Sumit for fulfilling all our dietary needs. The rooms are well maintained and there is proper cleanliness which gives a great ambience to relax and refresh. Mr. Kartik ( GM ) is very polite and responsible, he gives quick solutions to any problems that the guest might face. I would highly recommend this place for all those who want to unwind and experience life away from the mundane. The Yoga and meditation sessions are very powerful. Will definitely visit again.",
      },
      {
        author: "Sonam Wangmo",
        review:
          "I'm thrilled to be visiting for the third time, and I'm still blown away by the exceptional service and quality ! The consistency is impressive and has never been disappointed. The staff/team are friendly, knowledgeable, and go above and beyond to ensure a fantastic experience. The services are top-notch, and I appreciate the attention to detail. I've already recommended service to friends and family, and I'll continue to do so. Keep up the outstanding work!",
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
    href: contact.socialLinks.facebook,
    icon: <FillFacebookIcon />,
  },
  {
    label: "instagram",
    href: contact.socialLinks.instagram,
    icon: <OutLineInstagramIcon />,
  },
];
