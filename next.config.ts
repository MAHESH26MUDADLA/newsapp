import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nbcsports.brightspotcdn.com",
      },
      {
        protocol: "https",
        hostname: "media-cldnry.s-nbcnews.com",
      },
      {
        protocol: "https",
        hostname: "platform.theverge.com",
      },
      {
        protocol: "https",
        hostname: "techcrunch.com",
      },
      {
        protocol: "https",
        hostname: "cdn.mos.cms.futurecdn.net",
      },
      {
        protocol: "https",
        hostname: "dims.apnews.com",
      },
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
      },
    ],
  },

  // ✅ Skip ESLint during builds (temporary)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
