import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// local font import
import localFont from 'next/font/local';
import "./globals.css";
import "./style.scss";
import { Footer } from "@/components";
import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import { contact } from "../../Constent";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const myFont = localFont({
  src: [
    {
      path: './font/AbhayaLibre-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/AbhayaLibre-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/AbhayaLibre-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './font/AbhayaLibre-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/AbhayaLibre-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--abhaya-libre',
  display: 'swap',
  fallback: ['sans-serif'],
  preload: true,
});

export const metadata: Metadata = {
  title: "Best Ayurveda Wellness & Panchkarma Center in Rishikesh | Naturoville",
  description: "Explore Naturoville, Rishikesh's premier Ayurvedic & Retreat. Rejuvenate your mind and body at the best wellness center in Rishikesh.",
  keywords: [
    "wellness",
    "spa",
    "ayurveda",
    "naturopathy",
    "holistic healing",
    "retreat",
    "wellness center",
    "luxury wellness",
  ],
  alternates: {
    canonical: "https://naturoville.com",
  },

  openGraph: {
    title: "Best Ayurveda Wellness & Panchkarma Center in Rishikesh | Naturoville",
    description: "Explore Naturoville, Rishikesh's premier Ayurvedic & Retreat. Rejuvenate your mind and body at the best wellness center in Rishikesh.",
    url: "https://naturoville.com",
    siteName: "Naturoville",
    images: [
      {
        url: "https://naturoville.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naturoville - Holistic Wellness Retreat",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Ayurveda Wellness & Panchkarma Center in Rishikesh | Naturoville",
    description: "Explore Naturoville, Rishikesh's premier Ayurvedic & Retreat. Rejuvenate your mind and body at the best wellness center in Rishikesh.",
    images: ["https://naturoville.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}${myFont.className}  antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        <Footer />
        <Call callNumber={contact.phoneNumber} />
        <Whatsapp whatsAppNumber={contact.phoneNumber} />

        <Script
          id="eazbot-config"
          dangerouslySetInnerHTML={{
            __html: `
      window.eazbotConfig = {
        ndid: "030384e0-2390-493f-996b-2fa116a6ae97",
        hid: "35871148",
        interval: "40000"
      };
    `,
          }}
        />
        <Script src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js" />
      </body>
    </html>
  );
}
