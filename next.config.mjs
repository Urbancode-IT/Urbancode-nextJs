/** @type {import('next').NextConfig} */
const nextConfig = {

  // output: 'export', // 👈 this replaces `next export`

  images: {
    unoptimized: true, // needed if you use next/image
  },

  async redirects() {
    return [
      { source: '/thank-you', destination: '/thankyou', permanent: true },
    ];
  },

  // Proxy compiler backend through same origin in dev — avoids browser CORS to onrender.com
  async rewrites() {
    return [
      {
        source: '/compiler-remote-api/:path*',
        destination: 'https://urbancode-nextjs.onrender.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
