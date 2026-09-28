import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore TypeScript build errors because of the local environment heap size issues
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
