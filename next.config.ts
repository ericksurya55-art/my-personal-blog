import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Tambahkan baris ini agar semua aset otomatis tahu mereka ada di dalam sub-folder GitHub
  basePath: '/my-personal-blog', 
};

export default nextConfig;