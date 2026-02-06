import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/games', // Replace with your GitHub repo name
  assetPrefix: '/games',
  distDir: 'out'
};

export default nextConfig;
