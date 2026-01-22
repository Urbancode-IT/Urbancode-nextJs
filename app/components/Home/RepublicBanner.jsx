"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import './RepublicBanner.css';

const RepublicBanner = () => {
    const [showEnquiry, setShowEnquiry] = useState(false);

    return (
        <section className="republic-banner-section">
            <div
                className="banner-image-wrapper"
                onClick={() => setShowEnquiry(true)}
            >
                <Image
                    src="/images/home/republicnew.png"
                    alt="Republic Day Special Offer Banner"
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
                courseName="Republic Day Special Offer"
            />
        </section>
    );
};

export default RepublicBanner;
