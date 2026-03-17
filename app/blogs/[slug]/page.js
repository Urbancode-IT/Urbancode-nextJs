import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import '../../components/blog/blog.css';
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

    return {
        title: `${blog.title} | UrbanCode Blogs`,
        description: blog.excerpt,
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

    return (
        <div className="blog-detail-container">
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
            {blog.content && blog.content.map((paragraph, index) => (
                <p key={index} className="content-text">
                    {paragraph}
                </p>
            ))}

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
