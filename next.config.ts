import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.brightspotcdn.com",
      },
      {
        protocol: "https",
        hostname: "**.nbcnews.com",
      },
      {
        protocol: "https",
        hostname: "**.theverge.com",
      },
      {
        protocol: "https",
        hostname: "**.techcrunch.com",
      },
      {
        protocol: "https",
        hostname: "**.futurecdn.net",
      },
      {
        protocol: "https",
        hostname: "**.apnews.com",
      },
      {
        protocol: "https",
        hostname: "**.bbci.co.uk",
      },
      {
        protocol: "https",
        hostname: "**.nintendo.com", // ✅ Added to support assets.nintendo.com
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
