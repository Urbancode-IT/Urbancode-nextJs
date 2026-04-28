export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/feedback/admin',
          '/thankyou',
        ],
      },
    ],
    sitemap: 'https://urbancode.in/sitemap.xml',
  };
}
