import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "./Courses.css";

const TOOLS_DATA = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
];

// Stagger variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// "Boom" pop variants for each tool (Thuli Pop & Explosive Boom)
const itemVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    y: 300, // Start far below for a big jump
    rotate: -30
  },
  visible: {
    opacity: 1,
    scale: [0, 1.6, 0.9, 1.1, 1], // Big boom scaling
    y: [300, -100, 20, -10, 0], // Big thuli jump
    rotate: [ -30, 15, -10, 5, 0],
    transition: { 
      duration: 0.9,
      times: [0, 0.4, 0.6, 0.8, 1],
      ease: "easeOut"
    }
  }
};

function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="courses" className="courses-page">
      <div className="courses-container featured-single">
        
        {/* Left Side: Specialized Content Layout */}
        <div className="courses-featured-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h2 className="courses-featured-title">
              Build <br />
              <span className="text-neon">Full Stack</span>
            </h2>
            <p className="courses-featured-desc">
              Master the art of building complete, scalable web applications from 
              Frontend to Backend. Learn modern technologies like React, Node.js, 
              and Databases with our specialized full-stack program.
            </p>
            
            <div className="courses-cta-group">
              <button 
                className="btn-enroll-unique"
                onClick={() => setIsModalOpen(true)}
              >
                Explore Tools
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Layered Laptop Mockups (Matching User Image) */}
        <div className="courses-featured-right">
           <motion.div 
             className="layered-laptops-wrapper"
             initial={{ opacity: 0, x: 150 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: "easeOut" }}
           >
             {/* Background Laptop (The layered one behind) */}
             <div 
               className="laptop-mockup-container laptop-bg"
             >
               <div className="laptop-screen">
                 <img 
                   src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                   alt="Full Stack Development" 
                   className="screen-img-overlay"
                 />
                 <div className="screen-content">
                    <div className="screen-main">
                       <h3 className="screen-title" style={{ fontSize: '16px', opacity: 0.5 }}>Server Architecture</h3>
                    </div>
                 </div>
               </div>
             </div>

             {/* Foreground Laptop (The main one) */}
             <div 
               className="laptop-mockup-container laptop-fg"
             >
               <div className="laptop-aura"></div>
               <div className="laptop-screen">
                 <img 
                   src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                   alt="React Development" 
                   className="screen-img-overlay"
                 />
                 <div className="screen-content">
                   <div className="screen-header">
                     <div className="screen-logo">
                       <div className="premium-dot" style={{ width: '10px', height: '10px' }}></div>
                       FullStack.JS
                     </div>
                     <div className="screen-nav">
                       <div className="nav-dot"></div>
                       <div className="nav-dot"></div>
                       <div className="nav-dot"></div>
                     </div>
                   </div>
                   
                   <div className="screen-main">
                      <motion.h3 
                        className="screen-title"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{ fontSize: '24px' }}
                      >
                        React & Node.js
                      </motion.h3>
                      
                      <div className="screen-code-preview">
                        <div className="code-line"><span>const</span> app = express();</div>
                        <div className="code-line">app.<span>use</span>(cors());</div>
                      </div>
                   </div>
                 </div>
               </div>
             </div>
           </motion.div>
        </div>

      </div>

      {/* TOOLS MODAL OVERLAY */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="tools-modal-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          >
            <motion.div 
              className="tools-modal-box"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button className="tools-modal-close" onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
              
              <h3 className="tools-modal-title">Our Tech Stack</h3>
              
              <motion.div 
                className="tools-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {TOOLS_DATA.map((tool, idx) => (
                  <motion.div key={idx} className="tool-card" variants={itemVariants}>
                    <div className="tool-icon">
                      <img src={tool.icon} alt={tool.name} style={{ width: '32px', height: '32px' }} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Courses;
