'use client';

import React from 'react';
import Link from 'next/link';

export default function BlogCard({ blog, delay = '' }) {
    return (
        <div className={`blog-card fade-soft ${delay}`}>
            <img src={blog.image} className="img-fluid blog-img" alt={blog.title} />
            <div className="blog-meta">
                <span className="category">{blog.category}</span>
                <span className="date">{blog.date}</span>
            </div>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-desc">{blog.excerpt}</p>
            <Link href={`/blogs/${blog.slug}`} className="read-more">
                Read More...
            </Link>
        </div>
    );
}
