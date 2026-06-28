import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // INI BAGIAN PALING PENTING:
  basePath: '/my-personal-blog', 
  assetPrefix: '/my-personal-blog/', 
};

export default nextConfig;