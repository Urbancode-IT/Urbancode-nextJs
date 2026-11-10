import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import '../../components/blog/blog.css';
import BlogFaq from '../../components/blog/BlogFaq';
import blogsData from '../../../lib/data/blogsData.json';

// Generate static params for dynamic routes (required for output: export)
export async function generateStaticParams() {
    return blogsData.map((blog) => ({
        slug: blog.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: 'Blog Not Found',
        };
    }

    const title = blog.metaTitle || `${blog.title} | UrbanCode Blogs`;
    const description = blog.metaDescription || blog.excerpt;
    const image = blog.image
        ? `https://www.urbancode.in${blog.image}`
        : 'https://www.urbancode.in/images/home/og-image.jpg';
    const url = `https://www.urbancode.in/blogs/${blog.slug}`;

    return {
        title,
        description,
        keywords: blog.keywords,
        authors: [{ name: 'UrbanCode Edutech' }],
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
                'max-video-preview': -1,
            },
        },
        openGraph: {
            title: blog.metaTitle || blog.title,
            description,
            url,
            siteName: 'Urbancode Edutech',
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
            type: 'article',
            locale: 'en_IN',
            publishedTime: blog.date,
            tags: Array.isArray(blog.keywords) ? blog.keywords.slice(0, 10) : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.metaTitle || blog.title,
            description,
            images: [image],
        },
        alternates: {
            canonical: url,
        },
    };
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params;
    // Find the blog by slug
    const blog = blogsData.find(b => b.slug === slug);

    // If blog not found, show 404
    if (!blog) {
        notFound();
    }

    // Get 3 random/related blogs for "More blogs" section (exclude current blog)
    const moreBlogs = blogsData
        .filter(b => b.id !== blog.id)
        .slice(0, 3);

    // Helper function to render text with clickable keyword links
    const renderParagraphWithLinks = (text) => {
        if (!text) return null;

        const keywordMap = [
            { name: "webMethods training", link: "/courses/cloud-and-devops/software-ag-webmethods" },
            { name: "webMethods", link: "/courses/cloud-and-devops/software-ag-webmethods" },
            { name: "React Native", link: "/courses/fullstack-development/react-native" },
            { name: "Flutter", link: "/courses" },
            { name: "Fullstack Development", link: "/courses/fullstack-development" },
            { name: "MERN Stack", link: "/courses/fullstack-development/mern-stack" },
            { name: "MEAN Stack", link: "/courses/fullstack-development/mean-stack" },
            { name: "Next.js", link: "/courses/fullstack-development/next.js-development" },
            { name: "Nextjs", link: "/courses/fullstack-development/next.js-development" },
            { name: "Data Analytics", link: "/courses/data-analytics" },
            { name: "Data Science", link: "/courses/data-science" },
            { name: "UI/UX design", link: "/courses/ui-ux-designing" },
            { name: "Software Testing", link: "/courses/software-testing" },
            { name: "Cloud and DevOps", link: "/courses/cloud-and-devops" }
        ];

        // Sort keywords from longest to shortest to avoid partial matches
        const sortedKeywords = [...keywordMap].sort((a, b) => b.name.length - a.name.length);
        const pattern = new RegExp(`(${sortedKeywords.map(kw => kw.name.replace(/[.*+?^${}()|[\]\\]/g, '\\\\$&')).join('|')})`, 'gi');

        const parts = text.split(pattern);

        return parts.map((part, i) => {
            const match = keywordMap.find(kw => kw.name.toLowerCase() === part.toLowerCase());
            if (match) {
                return (
                    <Link key={i} href={match.link} className="keyword-link">
                        {part}
                    </Link>
                );
            }
            return part;
        });
    };

    const pageUrl = `https://www.urbancode.in/blogs/${blog.slug}`;
    const pageImage = blog.image
        ? `https://www.urbancode.in${blog.image}`
        : 'https://www.urbancode.in/images/home/og-image.jpg';

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.metaDescription || blog.excerpt,
        image: [pageImage],
        datePublished: blog.date,
        dateModified: blog.date,
        author: {
            '@type': 'Organization',
            name: 'UrbanCode Edutech',
            url: 'https://www.urbancode.in',
        },
        publisher: {
            '@type': 'Organization',
            name: 'UrbanCode Edutech',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.urbancode.in/images/home/logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': pageUrl,
        },
        keywords: Array.isArray(blog.keywords) ? blog.keywords.join(', ') : undefined,
        articleSection: blog.category,
    };

    const faqSchema = blog.faqs?.length
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: blog.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: String(faq.answer || '').replace(/<[^>]*>/g, ' '),
                },
            })),
        }
        : null;

    return (
        <div className="blog-detail-container">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            {/* Category + Date */}
            <div className="category-date">
                <span className="category">{blog.category}</span>
                <span className="date">{blog.date}</span>
            </div>

            {/* Title */}
            <h1 className="blog-detail-title">{blog.title}</h1>

            {/* Main Header Image */}
            <div
                className="header-image"
                style={{ backgroundImage: `url('${blog.image}')` }}
            ></div>

            {/* Blog Content */}
            {blog.content && blog.content.map((paragraph, index) => {
                // If the paragraph contains HTML tags, render it as HTML
                const hasHtml = /<[a-z][\s\S]*>/i.test(paragraph);
                if (hasHtml) {
                    return (
                        <div key={index} className="content-text" dangerouslySetInnerHTML={{ __html: paragraph }} />
                    );
                }
                return (
                    <p key={index} className="content-text">
                        {renderParagraphWithLinks(paragraph)}
                    </p>
                );
            })}

            {blog.faqs && <BlogFaq faqs={blog.faqs} />}

            {/* Divider */}
            <div className="divider"></div>

            {/* More Blogs Section */}
            <h2 className="more-blogs-title">More blogs</h2>

            <div className="blog-grid">
                {moreBlogs.map(moreBlog => (
                    <Link
                        key={moreBlog.id}
                        href={`/blogs/${moreBlog.slug}`}
                        className="blog-card-small"
                    >
                        <div
                            className="blog-image"
                            style={{ backgroundImage: `url('${moreBlog.image}')` }}
                        ></div>
                        <div className="blog-info">
                            <div className="blog-cat-date">
                                <span className="category">{moreBlog.category}</span>
                                <span className="date">{moreBlog.date}</span>
                            </div>
                            <div className="blog-small-title">{moreBlog.title}</div>
                            <div className="blog-small-desc">{moreBlog.excerpt}</div>
                            <div className="read-more">Read More...</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
