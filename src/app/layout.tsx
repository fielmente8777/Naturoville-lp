import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// local font import
import { Footer, Navbar } from "@/components";
import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import OfferPopup from "@/components/pop-up/OfferPopup";
import PopForm from "@/components/pop-up/PopForm";
import { DataProvider } from "@/contextApi/DataContext";
import localFont from "next/font/local";
import Script from "next/script";
import { contact } from "../../Constent";
import "./globals.css";
import "./style.scss";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const myFont = localFont({
  src: [
    {
      path: "./font/AbhayaLibre-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/AbhayaLibre-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/AbhayaLibre-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./font/AbhayaLibre-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/AbhayaLibre-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--abhaya-libre",
  display: "swap",
  fallback: ["sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title:
    "Best Ayurveda Wellness & Panchkarma Center in Rishikesh | Naturoville",
  description:
    "Explore Naturoville, Rishikesh's premier Ayurvedic & Retreat. Rejuvenate your mind and body at the best wellness center in Rishikesh.",
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
    title:
      "Best Ayurveda Wellness & Panchkarma Center in Rishikesh | Naturoville",
    description:
      "Explore Naturoville, Rishikesh's premier Ayurvedic & Retreat. Rejuvenate your mind and body at the best wellness center in Rishikesh.",
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
    title:
      "Best Ayurveda Wellness & Panchkarma Center in Rishikesh | Naturoville",
    description:
      "Explore Naturoville, Rishikesh's premier Ayurvedic & Retreat. Rejuvenate your mind and body at the best wellness center in Rishikesh.",
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

// const discount = {
//   contact: {
//     href: "tel:" + contact.phoneNumber,
//     label: "Call Us",
//     bgColor: "#004C5B",
//     textColor: "#fff",
//   },
//   content: {
//     // discount: 10,
//     _html: `<p class="content-para">On same day <span class="purple-purse">booking</span></p>`,
//     // subTitle: "On same day booking",
//     title: "RESERVE TODAY",
//     borderColor: "#fff",
//   },
//   logo: {
//     alt: "Naturoville wellness",
//     src: "/logo.png",
//   },
//   image: {
//     alt: "Naturoville wellness",
//     src: "/cabanas.webp",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* ms Clarity Script */}
        <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: ` (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "smlqror8t3");`,
          }}
        />
        {/* ms Clarity Script */}

        {/* Facebook Pixel Script */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '753380013733451');
              fbq('track', 'PageView');
              `,
          }}
        />
        <Script
          id="fb-pixel-noscript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `<noscript><img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=753380013733451&ev=PageView&noscript=1"
                /></noscript>`,
          }}
        />

        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PKZRDHZL');`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body
        className={`${poppins.variable}${myFont.className}  antialiased`}
        suppressHydrationWarning={true}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKZRDHZL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <DataProvider>
          <Navbar />
          {children}
          <Footer />
          <Call callNumber={contact.phoneNumber} />
          <Whatsapp whatsAppNumber={contact.WhatsappNumber} />
          <PopForm />
          <OfferPopup />
          {/* <ImageGalleryPopup /> */}
        </DataProvider>

        <Script
          id="eazbot-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.eazbotConfig = {
              ndid: "030384e0-2390-493f-996b-2fa116a6ae97",
              hid: "35871148",
              interval: "40000"
            };`,
          }}
        />
        <Script src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js" />
      </body>
    </html>
  );
}
