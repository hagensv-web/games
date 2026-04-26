import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '', // Replace with your GitHub repo name
  assetPrefix: '',
  distDir: 'out',
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mui/material", "@mui/icons-material"],
    optimizeCss: true,
    useLightningcss: true
  },
  compiler: {
    emotion: true
  }
};

export default nextConfig;
