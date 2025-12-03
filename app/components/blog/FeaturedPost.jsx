'use client';

import React from 'react';
import Link from 'next/link';

export default function FeaturedPost({ blog }) {
    return (
        <section className="recent-featured fade-soft delay-2">
            <div className="container">
                <h2 className="recent-title">Our Recent Post</h2>

                <div className="row g-5">
                    <div className="col-lg-6">
                        <div
                            className="featured-img"
                            style={{ backgroundImage: `url('${blog.image}')` }}
                        ></div>
                    </div>

                    <div className="col-lg-6">
                        <div className="meta">
                            <span className="category">{blog.category}</span>
                            <span className="date">{blog.date}</span>
                        </div>

                        <h3 className="featured-title">{blog.title}</h3>

                        <p className="featured-text">{blog.excerpt}</p>

                        <Link href={`/blogs/${blog.slug}`}>
                            <button className="btn-read">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
