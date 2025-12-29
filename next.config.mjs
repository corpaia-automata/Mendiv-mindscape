/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Disable source maps in production to reduce build output size
  productionBrowserSourceMaps: false,
};

export default nextConfig;
