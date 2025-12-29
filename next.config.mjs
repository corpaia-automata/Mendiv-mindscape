/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Disable source maps in production to reduce build output size
  productionBrowserSourceMaps: false,
  // Disable server-side source maps
  serverSourceMaps: false,
};

export default nextConfig;
