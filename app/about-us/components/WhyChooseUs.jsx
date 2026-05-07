'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const comparisonPoints = [
    {
      us: "100% Job Guaranteed Courses with commitment",
      others: "Generic certificates with zero job guarantee"
    },
    {
      us: "One-on-One Mentorship from industry veterans",
      others: "Recorded lectures with no personal interaction"
    },
    {
      us: "Real-world Live Projects with startup exposure",
      others: "Simple theoretical assignments & dummy projects"
    },
    {
      us: "500+ Active Hiring Partners for direct placements",
      others: "Random job alerts or just referral links"
    },
    {
      us: "No-Cost EMI Options with transparent pricing",
      others: "Hidden charges or complex upfront payments"
    },
    {
      us: "Elite Resume & Interview Bootcamp (Mocks)",
      others: "Standard resume templates with no guidance"
    },
    {
      us: "Lifetime Career Support & Alumni Network",
      others: "No assistance once the course duration ends"
    },
    {
      us: "Flexible Hybrid Learning (Offline & Online)",
      others: "Rigid schedules with limited learning modes"
    }
  ];

  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % comparisonPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, comparisonPoints.length]);

  return (
    <section className="why-choose-us-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-main-title">
            Why Choose <span className="text-shine">Us</span>
          </h2>
          <p className="comparison-subtitle">
            A transparent side-by-side look at what makes Urbancode different from typical training providers.
          </p>
        </div>

        <div className="comparison-container" 
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
          <div className="comparison-row header-row d-none d-md-flex">
            <div className="comparison-col us-header">What We Give</div>
            <div className="comparison-col others-header">Others</div>
          </div>

          <div className="comparison-body">
            {comparisonPoints.map((point, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.div 
                  key={index} 
                  className={`comparison-row ${isActive ? 'active-highlight' : ''}`}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  animate={isActive ? { 
                    backgroundColor: "rgba(25, 135, 84, 0.04)",
                    scale: 1.01,
                    x: 10
                  } : { 
                    backgroundColor: "rgba(25, 135, 84, 0)",
                    scale: 1,
                    x: 0
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeInOut",
                    // Initial animation still uses delay
                    delay: isActive ? 0 : (index * 0.1) 
                  }}
                >
                  <div className="comparison-col us-col">
                    <div className="mobile-label d-md-none">What We Give</div>
                    <motion.div 
                      className="point-content"
                      animate={isActive ? { x: 5 } : { x: 0 }}
                    >
                      <motion.div
                        animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                        transition={{ repeat: isActive ? Infinity : 0, duration: 2 }}
                      >
                        <FaCheckCircle className="icon-check" />
                      </motion.div>
                      <span style={{ color: isActive ? 'var(--color-brand)' : 'inherit' }}>
                        {point.us}
                      </span>
                    </motion.div>
                  </div>
                  <div className="comparison-col others-col">
                    <div className="mobile-label d-md-none">Others</div>
                    <div className="point-content">
                      <FaTimesCircle className="icon-cross" />
                      <span>{point.others}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
