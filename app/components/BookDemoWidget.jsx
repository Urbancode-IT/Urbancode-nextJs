'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlinePlayCircle } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import EnquiryFormModal from './common/EnquiryFormModal';
import './BookDemoWidget.css';

const BookDemoWidget = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (pathname && pathname.startsWith('/study-abroad')) {
        return null;
    }

    return (
        <>
            <motion.div 
                className="book-demo-widget"
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
            >
                <div 
                    className="book-demo-trigger"
                    onClick={() => setIsOpen(true)}
                >
                    <div className="demo-icon-wrapper">
                        <MdOutlinePlayCircle className="demo-icon" />
                        <div className="demo-glow"></div>
                    </div>
                    
                    <span className="demo-text">
                        Book a Demo
                    </span>
                </div>
            </motion.div>

            <EnquiryFormModal 
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                isDemoMode={true}
                isSelectMode={true}
                extraOptions={[
                    "Python with AI",
                    "Full Stack Development",
                    "Data Science",
                    "Software Testing",
                    "Cloud/DevOps",
                    "UI/UX Design",
                    "Automation",
                    "Digital Marketing",
                    "Help me choose"
                ]}
            />
        </>
    );
};

export default BookDemoWidget;
