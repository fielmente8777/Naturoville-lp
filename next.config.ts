import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eazotel-client-webp-image.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
    ],
    formats: ["image/avif", "image/webp"],

    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    minimumCacheTTL: 2678400,

    dangerouslyAllowSVG: true,

    contentDispositionType: "attachment",
  },

  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "swiper"],

    optimizeCss: true,

    scrollRestoration: true,
  },
};

export default nextConfig;
