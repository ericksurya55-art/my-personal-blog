import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Tambahkan base path jika diperlukan, 
  // tapi untuk sekarang coba tanpa ini dulu
};

export default nextConfig;