'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlinePlayCircle } from 'react-icons/md';
import EnquiryFormModal from './common/EnquiryFormModal';
import './BookDemoWidget.css';

const BookDemoWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <motion.div 
                className="book-demo-widget"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div 
                    className="book-demo-trigger"
                    onClick={() => setIsOpen(true)}
                >
                    <div className="demo-icon-wrapper">
                        <MdOutlinePlayCircle className="demo-icon" />
                        <div className="demo-pulse"></div>
                    </div>
                    
                    <AnimatePresence>
                        {isHovered && (
                            <motion.span 
                                className="demo-text"
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: 'auto' }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                Book a Demo
                            </motion.span>
                        )}
                    </AnimatePresence>
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
