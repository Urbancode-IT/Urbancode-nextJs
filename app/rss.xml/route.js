import blogsData from '../components/blogs/blogsData';

// Regenerate the feed hourly so new blog posts appear without a full redeploy.
export const revalidate = 3600;

const SITE_URL = 'https://www.urbancode.in';
const BLOG_URL = `${SITE_URL}/blogs`;
const RSS_URL = `${SITE_URL}/rss.xml`;

const MONTHS = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

function absoluteUrl(path) {
    if (!path) return SITE_URL;
    if (path.startsWith('http')) return path;
    return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function parseBlogDate(dateStr) {
    const parts = String(dateStr || '').trim().split(/\s+/);
    if (parts.length === 3) {
        const day = Number.parseInt(parts[0], 10);
        const month = MONTHS[parts[1].slice(0, 3).toLowerCase()];
        const year = Number.parseInt(parts[2], 10);
        if (!Number.isNaN(day) && month !== undefined && !Number.isNaN(year)) {
            return new Date(Date.UTC(year, month, day, 12, 0, 0));
        }
    }

    const parsed = new Date(dateStr);
    return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function buildContentEncoded(blog) {
    const chunks = [];

    if (blog.image) {
        chunks.push(`<p><img src="${absoluteUrl(blog.image)}" alt="${blog.title}" /></p>`);
    }

    if (blog.excerpt) {
        chunks.push(`<p>${blog.excerpt}</p>`);
    }

    if (Array.isArray(blog.content)) {
        blog.content.slice(0, 5).forEach((block) => {
            if (typeof block !== 'string') return;

            if (block.startsWith('<')) {
                chunks.push(block.replace(/src="\/([^"]+)"/g, `src="${SITE_URL}/$1"`));
            } else {
                chunks.push(`<p>${block}</p>`);
            }
        });
    }

    return chunks.join('\n');
}

function getBlogLink(blog) {
    if (blog.link) {
        return blog.link.startsWith('http') ? blog.link : absoluteUrl(blog.link);
    }
    return `${BLOG_URL}/${blog.slug}`;
}

export async function GET() {
    try {
        const sortedBlogs = [...blogsData].sort(
            (a, b) => parseBlogDate(b.date).getTime() - parseBlogDate(a.date).getTime()
        );

        const rssItems = sortedBlogs
            .map((blog) => {
                const link = getBlogLink(blog);
                const pubDate = parseBlogDate(blog.date).toUTCString();
                const description = blog.description || blog.excerpt || '';
                const contentEncoded = buildContentEncoded(blog);
                const imageUrl = blog.image ? absoluteUrl(blog.image) : '';

                return `
    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${link}</link>
      <description><![CDATA[${description}]]></description>
      <content:encoded><![CDATA[${contentEncoded}]]></content:encoded>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${link}</guid>${imageUrl ? `
      <media:content url="${imageUrl}" medium="image" />` : ''}
    </item>`;
            })
            .join('');

        const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title><![CDATA[UrbanCode Blogs]]></title>
    <link>${SITE_URL}</link>
    <description><![CDATA[Stay updated with the latest insights on technology, career, and education from UrbanCode.]]></description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${RSS_URL}" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

        return new Response(rssFeed, {
            headers: {
                'Content-Type': 'application/xml; charset=utf-8',
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
            },
        });
    } catch (error) {
        console.error('Error generating RSS feed:', error);
        return new Response('Error generating RSS feed', { status: 500 });
    }
}
