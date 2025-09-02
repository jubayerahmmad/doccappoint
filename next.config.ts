import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  images: {
    domains: ["i.ibb.co.com"],
  },
};

export default nextConfig;
