import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // turbo: {
  //   loaders: {
  //     ".html": "ignore", // Ignore HTML files in node_modules
  //   },
  // },
};

export default nextConfig;
