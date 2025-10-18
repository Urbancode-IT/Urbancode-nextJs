/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 this replaces `next export`
  images: {
    unoptimized: true, // needed if you use next/image
  },
};

export default nextConfig;
