import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  trailingSlash: true,

  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/resort",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
