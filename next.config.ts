import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/kebijakan-privasi',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/kebijakan-privasi',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/syarat-ketentuan',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/syarat-ketentuan',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
