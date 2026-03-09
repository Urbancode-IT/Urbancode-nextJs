import blogsData from '../components/blogs/blogsData';

export const dynamic = 'force-static';

const SITE_URL = 'https://www.urbancode.in/';
const BLOG_URL = `${SITE_URL}/blogs`;

export async function GET() {
    try {
        const rssItems = blogsData
            .map((blog) => {
                // Handle both 'slug' from JSON and potential 'link' from user's example
                const link = blog.link
                    ? (blog.link.startsWith('http') ? blog.link : `${SITE_URL}${blog.link}`)
                    : `${BLOG_URL}/${blog.slug}`;

                const pubDate = new Date(blog.date).toUTCString();
                const description = blog.description || blog.excerpt || '';

                return `
    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${link}</link>
      <description><![CDATA[${description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${link}</guid>
    </item>`;
            })
            .join('');

        const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[UrbanCode Blogs]]></title>
    <link>${SITE_URL}</link>
    <description><![CDATA[Stay updated with the latest insights on technology, career, and education from UrbanCode.]]></description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

        return new Response(rssFeed, {
            headers: {
                'Content-Type': 'application/xml; charset=utf-8',
                'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
            },
        });
    } catch (error) {
        console.error('Error generating RSS feed:', error);
        return new Response('Error generating RSS feed', { status: 500 });
    }
}
