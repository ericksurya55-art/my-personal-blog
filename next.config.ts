import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <--- Tambahkan baris ini untuk export HTML statis
  images: {
    unoptimized: true, // <--- Tambahkan ini agar sistem Image Next.js aman di GitHub
  },
};

export default nextConfig;