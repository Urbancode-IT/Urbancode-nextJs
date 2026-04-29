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
import './Milestones.css';

const Milestones = () => {
  const milestones = [
    { 
      number: "100+", 
      label: "Happy Clients", 
      subtitle: "Businesses transformed globally",
      icon: <Users size={24} />
    },
    { 
      number: "150+", 
      label: "Projects Completed", 
      subtitle: "Web, Mobile & Software",
      icon: <Briefcase size={24} />
    },
    { 
      number: "12+", 
      label: "Industries Served", 
      subtitle: "FinTech, EdTech, E-com & more",
      icon: <Building2 size={24} />
    },
    { 
      number: "50+", 
      label: "Expert Engineers", 
      subtitle: "Full-stack & DevOps specialists",
      icon: <Code size={24} />
    },
    { 
      number: "24/7", 
      label: "Premium Support", 
      subtitle: "Dedicated account management",
      icon: <Headset size={24} />
    },
    { 
      number: "99%", 
      label: "Client Retention", 
      subtitle: "Built on trust and results",
      icon: <Heart size={24} />
    },
    { 
      number: "2+", 
      label: "Years Experience", 
      subtitle: "Established in Chennai, TN",
      icon: <Award size={24} />
    },
    { 
      number: "Global", 
      label: "Project Reach", 
      subtitle: "Solutions delivered worldwide",
      icon: <Globe size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
    <section id="achievements" className="milestones-section">
      <div className="milestones-container">
        {/* Background Blobs */}
        <div className="milestones-bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        <div className="content-wrapper">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="milestones-header"
          >
            <h2 className="milestones-title">
              Our <span className="text-green">Milestones</span>
            </h2>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="stats-grid"
          >
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="stat-card"
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="stat-card-inner">
                  <div className="stat-icon-wrapper">
                    {milestone.icon}
                  </div>
                  <div className="stat-number">
                    {milestone.number}
                  </div>
                  <div className="stat-label">{milestone.label}</div>
                  <p className="stat-subtitle">{milestone.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;