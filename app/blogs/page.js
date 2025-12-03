'use client';

import React from 'react';
import Link from 'next/link';
import BlogHero from '../components/blog/BlogHero';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogCard from '../components/blog/BlogCard';
import '../components/blog/blog.css';
import blogsData from '../../lib/data/blogsData.json';

export default function BlogsPage() {
    // Get featured blog (first one marked as featured or the first blog)
    const featuredBlog = blogsData.find(blog => blog.featured) || blogsData[0];

    // Get 3 recent blogs for the blog cards section (skip the featured one)
    const recentBlogs = blogsData
        .filter(blog => blog.id !== featuredBlog.id)
        .slice(0, 3);

    // Get 6 popular posts (can be the next 6 blogs)
    const popularBlogs = blogsData.slice(1, 7);

    return (
        <div>
            {/* Hero Section */}
            <BlogHero />

            {/* Featured/Recent Post */}
            <FeaturedPost blog={featuredBlog} />

            {/* Recent Blog Cards */}
            <section className="blog-section py-5 fade-soft delay-3">
                <div className="container">
                    <div className="row g-4">
                        {recentBlogs.map((blog, index) => (
                            <div key={blog.id} className="col-md-4">
                                <BlogCard blog={blog} delay={`delay-${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Posts Section */}
            <section className="popular-post-section py-5 fade-soft delay-4">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="section-title">Popular Post</h2>
                        <Link href="/blogs/all">
                            <button className="view-all-btn">View All</button>
                        </Link>
                    </div>

                    <div className="row g-4">
                        {popularBlogs.map((blog, index) => (
                            <div key={blog.id} className="col-md-4">
                                <BlogCard blog={blog} delay={`delay-${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
