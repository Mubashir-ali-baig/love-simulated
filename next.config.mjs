/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force deployment - UI updates for rating badge and navigation colors
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
