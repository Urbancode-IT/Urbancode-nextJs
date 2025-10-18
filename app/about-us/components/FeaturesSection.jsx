'use client';

import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaBookOpen, FaUserGraduate } from "react-icons/fa";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "Expert Trainers",
      text: "Learn from industry professionals who bring real-world knowledge and hands-on experience to every session.",
    },
    {
      icon: <FaBookOpen size={40} />,
      title: "Flexible Online Learning",
      text: "Learn anytime, anywhere with courses designed to fit your schedule and pace.",
    },
    {
      icon: <FaUserGraduate size={40} />,
      title: "Career-Focused Training with Placement Assistance",
      text: "Gain hands-on skills tailored to industry needs and step confidently into your dream career with our dedicated placement assistance.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <section className="featureSection_main_container py-5">
      <div className="container position-relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="d-flex justify-content-end feature-row"
              variants={cardVariants}
            >
              <div className={`feature-card feature-${index} rounded-start-pill shadow-sm p-4`}>
                <div className="feature-icon text-success mb-3">{item.icon}</div>
                <div className="feature-content">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="mb-0 text-muted">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
