export default function sitemap() {
  const baseUrl = 'https://urbancode.in';
  
  // Base routes
  const routes = [
    '',
    '/courses-categories',
    '/study-abroad',
    '/kids-courses',
    '/compiler',
    '/projects',
    '/contact-us',
    '/about-us',
    '/blogs',
    '/book-demo',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
