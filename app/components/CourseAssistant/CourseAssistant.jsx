'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ChevronRight, Sparkles, Phone, Mail } from 'lucide-react';
import './CourseAssistant.css';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CourseAssistant = ({ courseName }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show teaser after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTeaser(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const FAQ_DATA = {
    "MERN Stack Development": {
      "Fundamental Overview": "MERN stands for MongoDB, Express, React, and Node.js. It's a powerful JavaScript stack used to build high-performance full-stack web applications.",
      "Market Trends": "MERN is currently the most popular stack for startups. React has over 40% market share in frontend libraries, and Node.js is the preferred choice for scalable backend systems.",
      "Fresher Salaries": "Freshers in MERN Stack typically earn between ₹4LPA to ₹7LPA in India, depending on their project portfolio.",
      "Professional Salaries": "Experienced MERN developers (3+ years) can easily earn between ₹12LPA to ₹25LPA.",
      "Course Duration": "The comprehensive program lasts 5 months, with 3 months of intensive training and 2 months of project-based internship.",
      "Placement Support": "We provide 100% placement support, including resume optimization, LinkedIn branding, and direct referrals to our 200+ hiring partners.",
      "Hands-on Projects": "You will build 3 major projects: An E-commerce platform, a real-time Chat application, and a Video Streaming service.",
      "Certifications": "You'll receive an Industry-Recognized Course Completion Certificate and an Internship Experience Certificate.",
      "Technology Stack": "HTML5, CSS3, JavaScript ES6+, React, Redux, Node.js, Express, MongoDB, Git, and AWS deployment.",
      "Eligibility": "Students, working professionals, or anyone with a passion for coding. No prior degree in CS is mandatory!"
    },
    "MEAN Stack Development": {
      "Fundamental Overview": "MEAN stands for MongoDB, Express, Angular, and Node.js. It's an all-JavaScript stack ideal for building robust, enterprise-level web applications.",
      "Market Trends": "MEAN is highly preferred by large-scale enterprises for its structured approach and Angular's powerful frontend capabilities.",
      "Fresher Salaries": "Freshers in MEAN Stack usually start at ₹3.5LPA to ₹6LPA.",
      "Professional Salaries": "Senior MEAN developers earn between ₹15LPA to ₹30LPA in top MNCs.",
      "Course Duration": "The program is 5 months long, covering everything from frontend to backend and database management.",
      "Placement Support": "Yes! We offer lifetime placement support and unlimited mock interviews.",
      "Hands-on Projects": "Projects include an Enterprise Resource Planning (ERP) tool, a Healthcare Portal, and a Banking dashboard.",
      "Certifications": "Global certification preparation and an Urban Code professional certificate.",
      "Technology Stack": "TypeScript, Angular, RxJS, Node, Express, MongoDB, and Firebase.",
      "Eligibility": "Best for those who prefer structured frameworks and want to work in large corporate environments."
    }
  };

  const CATEGORIES = [
    "Fundamental Overview",
    "Market Trends",
    "Fresher Salaries",
    "Professional Salaries",
    "Course Duration",
    "Hands-on Projects",
    "Placement Support",
    "Certifications",
    "Technology Stack",
    "Eligibility"
  ];

  const getInitialMessages = (course) => {
    return [
      { id: 1, type: 'bot', text: `Hi! I'm your **${course}** owl assistant. I'm here to help you understand this course better.` },
      { id: 2, type: 'bot', text: `Please select what you'd like to know:`, 
        options: CATEGORIES 
      }
    ];
  };

  useEffect(() => {
    if (isOpen) {
      setShowTeaser(false);
      if (messages.length === 0) {
        setMessages(getInitialMessages(courseName));
      }
    }
  }, [isOpen, courseName]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMsg = { id: Date.now(), type: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "";
      let foundMatch = false;

      const courseData = FAQ_DATA[courseName] || FAQ_DATA["MERN Stack Development"]; // Fallback to MERN if not found
      const lowerInput = text.toLowerCase().trim();

      // Check if it's one of the buttons
      if (courseData[text]) {
        botResponse = courseData[text];
        foundMatch = true;
      } else {
        // Semantic check
        for (const [key, value] of Object.entries(courseData)) {
          const lowerKey = key.toLowerCase();
          if (lowerInput.includes(lowerKey) || lowerKey.includes(lowerInput)) {
            botResponse = value;
            foundMatch = true;
            break;
          }
        }
      }

      if (!foundMatch) {
        botResponse = "I'm sorry, I don't have a specific answer for that. For more details, please contact us at **info@urbancode.in** or call **+91 94296 94123**. Our trainers will reach out to you within 24 hours!";
      }

      const botMsg = { 
        id: Date.now() + 1, 
        type: 'bot', 
        text: botResponse,
        options: foundMatch ? CATEGORIES.filter(c => c !== text).slice(0, 3) : CATEGORIES.slice(0, 3) // Suggest more
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="course-assistant-wrapper">
      {/* Floating Button */}
      <motion.button
        className={`assistant-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <Image
            src="/images/owl-mascot.png"
            width={55}
            height={55}
            alt="Owl Assistant"
            className="rounded-circle mascot-img"
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="assistant-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            {/* Header - Matching screenshot */}
            <div className="assistant-header-new">
              <div className="header-info">
                <div className="header-logo-circle">
                   <Image 
                    src="/images/home/logo.png" 
                    width={40} 
                    height={40} 
                    alt="Logo" 
                    className="logo-img"
                  />
                </div>
                <div className="header-text-new">
                  <h3>Course Assistant</h3>
                  <p>Online</p>
                </div>
              </div>
              <button className="close-btn-new" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="assistant-body">
              {/* Welcome Card - Matching screenshot */}
              <div className="welcome-card">
                <h3>Welcome to Urbancode!</h3>
                <p>How can I assist you today?</p>
              </div>

              {messages.map((msg) => (
                <div key={msg.id} className={`message-container ${msg.type}`}>
                  <div className="message-bubble">
                    <p dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    {msg.options && (
                      <div className="message-options">
                        {msg.options.map((opt) => (
                          <button key={opt} onClick={() => handleSend(opt)} className="option-btn">
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message-container bot">
                  <div className="typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="assistant-footer">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}>
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" disabled={!inputValue.trim()}>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CourseAssistant;
