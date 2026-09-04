/** @type {import('next').NextConfig} */
const nextConfig = {

  outputFileTracingExcludes: {
    '/api/send-email/send-curriculum': ['./public/**/*'],
  },

  // output: 'export', // 👈 this replaces `next export`

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, must-revalidate' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
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
