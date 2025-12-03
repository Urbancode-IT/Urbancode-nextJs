'use client';

import React from 'react';
import BlogHero from '../../components/blog/BlogHero';
import BlogCard from '../../components/blog/BlogCard';
import '../../components/blog/blog.css';
import blogsData from '../../../lib/data/blogsData.json';

export default function AllBlogsPage() {
    return (
        <div>
            {/* Hero Section */}
            <BlogHero />

            {/* Page Title */}
            <div className="page-title-wrap">
                <div className="container">
                    <h2 className="page-title">All Blogs</h2>
                </div>
            </div>

            {/* All Blogs Grid */}
            <section className="cards-container">
                <div className="container">
                    <div className="row g-4">
                        {blogsData.map((blog, index) => (
                            <div key={blog.id} className="col-md-4 d-flex">
                                <article className={`blog-card fade-soft delay-${Math.min(index + 1, 9)} w-100`}>
                                    <img src={blog.image} className="blog-img" alt={blog.title} />
                                    <div className="card-body-custom" style={{ padding: '14px 6px 6px' }}>
                                        <div className="blog-meta">
                                            <span className="category">{blog.category}</span>
                                            <span className="date">{blog.date}</span>
                                        </div>
                                        <h3 className="blog-title">{blog.title}</h3>
                                        <p className="blog-desc">{blog.excerpt}</p>
                                        <a href={`/blogs/${blog.slug}`} className="read-more">Read More...</a>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
