'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import './Banner.css';

const Banner = () => {
    const [showEnquiry, setShowEnquiry] = useState(false);

    return (
        <section className="new-year-banner-section">
            <div
                className="banner-image-wrapper"
                onClick={() => setShowEnquiry(true)}
                style={{ cursor: 'pointer' }}
            >
                <Image
                    src="/images/home/newyearbanner.webp"
                    alt="New Year Offer Banner"
                    width={1920}
                    height={600}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className="banner-img"
                    priority
                />
            </div>

            <EnquiryFormModal
                isOpen={showEnquiry}
                onClose={() => setShowEnquiry(false)}
                courseName="New Year Special Offer"
            />
        </section>
    );
};

export default Banner;
