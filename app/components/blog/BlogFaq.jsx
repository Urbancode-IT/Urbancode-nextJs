'use client';

import React, { useState } from 'react';

export default function BlogFaq({ faqs, title = 'Frequently Asked Questions (FAQs)' }) {
    const [openIndex, setOpenIndex] = useState(0);

    if (!faqs?.length) return null;

    return (
        <section className="blog-faq-section">
            <h2 className="blog-faq-heading">{title}</h2>
            <div className="blog-faq-list">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className={`blog-faq-item${isOpen ? ' is-open' : ''}`}
                        >
                            <button
                                type="button"
                                className="blog-faq-question"
                                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                aria-expanded={isOpen}
                            >
                                <span className="blog-faq-number">{index + 1}</span>
                                <span className="blog-faq-question-text">{faq.question}</span>
                                <span className="blog-faq-icon" aria-hidden="true">
                                    {isOpen ? '−' : '+'}
                                </span>
                            </button>
                            {isOpen && (
                                <div
                                    className="blog-faq-answer content-text"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
