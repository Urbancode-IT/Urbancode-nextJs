'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import EnquiryFormModal from './common/EnquiryFormModal';
import './OneOnOneWidget.css';

const OneOnOneWidget = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!pathname || !pathname.startsWith('/study-abroad')) {
        return null;
    }

    return (
        <>
            <motion.div 
                className="one-on-one-widget"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
                drag
                dragConstraints={isMounted ? { 
                    left: -window.innerWidth + 180, 
                    right: 0, 
                    top: -window.innerHeight * 0.2, 
                    bottom: window.innerHeight * 0.6 
                } : false}
                whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setTimeout(() => setIsDragging(false), 150)}
            >
                <div 
                    className="one-on-one-trigger"
                    onClick={(e) => {
                        if (!isDragging) setIsOpen(true);
                    }}
                >
                    <div className="one-on-one-icon-wrapper">
                        <FaUserTie className="one-on-one-icon" />
                        <div className="one-on-one-glow"></div>
                    </div>
                    
                    <span className="one-on-one-text">
                       Free Consultation
                    </span>
                </div>
            </motion.div>

            <EnquiryFormModal 
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                isDemoMode={true}
                isSelectMode={true}
                customTitle="Book a One on One Session"
                useExternalCourses={false}
                extraOptions={[
                    "Study in UK",
                    "Study in USA",
                    "Study in Canada",
                    "Study in Australia",
                    "Study in Germany",
                    "Study in Ireland",
                    "Study in New Zealand",
                    "Study in Dubai",
                    "Help me choose"
                ]}
            />
        </>
    );
};

export default OneOnOneWidget;
