import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Building2, 
  Code, 
  Headset, 
  Heart, 
  Award, 
  Globe 
} from 'lucide-react';
import MobileAutoSlider from '../MobileAutoSlider';
import './Milestones.css';

const Milestones = () => {
  const milestones = [
    {
      number: "20+",
      label: "Projects Delivered",
      subtitle: "Web, mobile & custom software",
      icon: <Briefcase size={24} />,
    },
    {
      number: "6",
      label: "Industries Served",
      subtitle: "FinTech, EdTech, E-com & more",
      icon: <Building2 size={24} />,
    },
    {
      number: "Global",
      label: "Client Reach",
      subtitle: "Solutions delivered worldwide",
      icon: <Globe size={24} />,
    },
    {
      number: "24/7",
      label: "Premium Support",
      subtitle: "Dedicated account management",
      icon: <Headset size={24} />,
    },
    {
      number: "99%",
      label: "Client Retention",
      subtitle: "Built on trust and results",
      icon: <Heart size={24} />,
    },
    {
      number: "2+",
      label: "Years Experience",
      subtitle: "Established in Chennai, TN",
      icon: <Award size={24} />,
    },
    {
      number: "Full",
      label: "Stack Expertise",
      subtitle: "React, Node, cloud & mobile",
      icon: <Code size={24} />,
    },
    {
      number: "50+",
      label: "Happy Clients",
      subtitle: "Businesses transformed globally",
      icon: <Users size={24} />,
    },
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="achievements" className="milestones-section pf-section">
      <div className="milestones-container">
        {/* Background Blobs */}
        <div className="milestones-bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="milestones-header pf-section-head"
          >
            <h2 className="milestones-title">
              Our <span className="text-green">Milestones</span>
            </h2>
          </motion.div>
          
          <MobileAutoSlider className="stats-grid" ariaLabel="Milestones">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="stat-card pf-shine-card"
              >
                <div className="stat-icon-wrapper">
                  {milestone.icon}
                </div>
                <div className="stat-info">
                  <div className="stat-number">
                    {milestone.number}
                  </div>
                  <div className="stat-label">{milestone.label}</div>
                  <p className="stat-subtitle">{milestone.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </MobileAutoSlider>
        </div>
      </div>
    </section>
  );
};

export default Milestones;