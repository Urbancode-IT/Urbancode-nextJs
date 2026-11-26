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

    const DE_COURSE =
        "/courses/data-engineering/data-engineering-with-microsoft-azure";

    const keywordMap = [
        { name: "Data Engineering with Microsoft Azure", link: DE_COURSE },
        { name: "Azure Data Engineering Course", link: DE_COURSE },
        { name: "Azure Data Factory Training", link: DE_COURSE },
        { name: "Data Engineering Course", link: DE_COURSE },
        { name: "Data Engineering Training", link: DE_COURSE },
        { name: "Data Engineer Course", link: DE_COURSE },
        { name: "Cloud Data Engineering", link: DE_COURSE },
        { name: "Python for Data Engineering", link: DE_COURSE },
        { name: "Data Engineering with Azure", link: DE_COURSE },
        { name: "SQL and Python Training", link: DE_COURSE },
        { name: "Azure Synapse Analytics", link: DE_COURSE },
        { name: "Azure Data Factory", link: DE_COURSE },
        { name: "Apache Spark Training", link: DE_COURSE },
        { name: "Databricks Training", link: DE_COURSE },
        { name: "PySpark Training", link: DE_COURSE },
        { name: "Data Engineering", link: DE_COURSE },
        { name: "Apache Spark", link: DE_COURSE },
        { name: "Databricks", link: DE_COURSE },
        { name: "PySpark", link: DE_COURSE },
        { name: "Microsoft Azure", link: DE_COURSE },
        { name: "webMethods training", link: "/courses/cloud-and-devops/software-ag-webmethods" },
        { name: "webMethods", link: "/courses/cloud-and-devops/software-ag-webmethods" },
        { name: "React Native", link: "/courses/fullstack-development/react-native" },
        { name: "Fullstack Development", link: "/courses/fullstack-development" },
        { name: "Full Stack Development", link: "/courses/fullstack-development" },
        { name: "Java Full Stack", link: "/courses/fullstack-development/java-full-stack-development" },
        { name: "MERN Stack", link: "/courses/fullstack-development/mern-stack" },
        { name: "MEAN Stack", link: "/courses/fullstack-development/mean-stack" },
        { name: "Next.js", link: "/courses/fullstack-development/next.js-development" },
        { name: "Nextjs", link: "/courses/fullstack-development/next.js-development" },
        { name: "AI Software Engineering", link: "/courses/ai-and-data-science/ai-software-engineering" },
        { name: "Data Analytics", link: "/courses/ai-and-data-science/data-analytics" },
        { name: "Data Science", link: "/courses/ai-and-data-science/ai-and-ml" },
        { name: "Machine Learning", link: "/courses/ai-and-data-science/ai-and-ml" },
        { name: "Generative AI", link: "/courses/ai-and-data-science/gen-ai" },
        { name: "Artificial Intelligence", link: "/courses/ai-and-data-science" },
        { name: "Cloud and DevOps", link: "/courses/cloud-and-devops" },
        { name: "Core Python", link: "/courses/programming-languages/core-python" },
        { name: "MySQL Database", link: "/courses/database/mysql-database" },
        { name: "Power BI", link: "/courses/ai-and-data-science/power-bi" },
        { name: "Kubernetes", link: "/courses/cloud-and-devops/kubernetes" },
        { name: "Jenkins", link: "/courses/cloud-and-devops/jenkins" },
        { name: "AWS", link: "/courses/cloud-and-devops/aws" },
        { name: "Python", link: "/courses/programming-languages/core-python" },
        { name: "MySQL", link: "/courses/database/mysql-database" },
        { name: "SQL", link: "/courses/database/mysql-database" },
        { name: "UI/UX design", link: "/courses/ui-ux-designing" },
        { name: "Software Testing", link: "/courses/software-testing" },
        { name: "Selenium", link: "/courses/software-testing/selenium" },
        { name: "Playwright", link: "/courses/software-testing/playwright" },
        { name: "UrbanCode Edutech", link: "/" },
    ];

    const sortedKeywords = [...keywordMap].sort(
        (a, b) => b.name.length - a.name.length
    );
    const keywordSource = `(${sortedKeywords
        .map((kw) => kw.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|")})`;
    const makeKeywordPattern = () => new RegExp(keywordSource, "gi");

    const findKeywordLink = (part) =>
        keywordMap.find((kw) => kw.name.toLowerCase() === part.toLowerCase());

    // Helper function to render text with clickable keyword links
    const renderParagraphWithLinks = (text) => {
        if (!text) return null;

        const parts = text.split(makeKeywordPattern());

        return parts.map((part, i) => {
            const match = findKeywordLink(part);
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

    // Linkify course keywords inside HTML blocks (skip existing <a> tags)
    const linkifyHtmlContent = (html) => {
        if (!html) return html;
        const pattern = makeKeywordPattern();
        const segments = html.split(/(<a\b[^>]*>[\s\S]*?<\/a>)/gi);
        return segments
            .map((segment) => {
                if (/^<a\b/i.test(segment)) return segment;
                return segment.replace(pattern, (matched) => {
                    const link = findKeywordLink(matched)?.link;
                    if (!link) return matched;
                    return `<a href="${link}" class="keyword-link">${matched}</a>`;
                });
            })
            .join("");
    };

    const faqsWithLinks = blog.faqs?.map((faq) => ({
        ...faq,
        answer: linkifyHtmlContent(faq.answer),
    }));

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
                        <div
                            key={index}
                            className="content-text"
                            dangerouslySetInnerHTML={{
                                __html: linkifyHtmlContent(paragraph),
                            }}
                        />
                    );
                }
                return (
                    <p key={index} className="content-text">
                        {renderParagraphWithLinks(paragraph)}
                    </p>
                );
            })}

            {faqsWithLinks && <BlogFaq faqs={faqsWithLinks} />}

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
