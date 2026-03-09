/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed to enable dynamic API routes
  images: {
    unoptimized: true, // needed if you use next/image
  },
};

export default nextConfig;
