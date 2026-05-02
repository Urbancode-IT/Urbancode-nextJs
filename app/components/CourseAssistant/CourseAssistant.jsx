'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ChevronRight, Sparkles, Phone, Mail } from 'lucide-react';
import './CourseAssistant.css';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FAQ_DATA from './courseFaqData.json';

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

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMsg = { id: Date.now(), type: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    let courseData = FAQ_DATA[courseName];
    if (!courseData) {
      const cName = courseName || "this course";
      courseData = {
        "Fundamental Overview": `The **${cName}** program is a comprehensive course designed to equip you with industry-relevant skills and hands-on experience.`,
        "Market Trends": `The demand for **${cName}** professionals is growing rapidly. Top companies are actively hiring candidates with these specialized skills.`,
        "Fresher Salaries": `Freshers starting in **${cName}** typically earn highly competitive salaries, ranging from ₹3.5LPA to ₹7LPA depending on interview performance.`,
        "Professional Salaries": `Experienced professionals in **${cName}** can command premium salaries, often exceeding ₹15LPA to ₹25LPA based on expertise.`,
        "Course Duration": "The course is structured over 3 to 5 months, including in-depth training and an intensive project-based internship.",
        "Placement Support": "We offer 100% placement support! This includes resume building, mock interviews, and direct interviews with our hiring partners.",
        "Hands-on Projects": `You will build real-world, industry-standard projects specific to **${cName}** to showcase in your portfolio.`,
        "Certifications": "Yes, you will receive a verified Course Completion Certificate and an Internship Experience Certificate from Urbancode.",
        "Technology Stack": `The curriculum covers the complete, modern technology stack required to master **${cName}** from scratch.`,
        "Eligibility": "Anyone with a passion for learning can join! It is perfect for college students, freshers, and working professionals. No prior coding experience required."
      };
    }

    try {
      // Prepare history for API (exclude initial boilerplate to save tokens)
      const chatHistory = messages
        .filter(m => m.id !== 1 && m.id !== 2) 
        .map(m => ({ type: m.type, text: m.text }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: chatHistory,
          courseName: courseName,
          courseFaq: courseData
        })
      });

      const data = await response.json();

      if (response.ok && data.reply) {
        // AI returned a response
        // Use marked or standard react html render - the API returns basic markdown 
        // which our dangerouslySetInnerHTML handles for **bold** tags.
        let formattedText = data.reply.replace(/\n/g, '<br/>');
        const botMsg = { 
          id: Date.now() + 1, 
          type: 'bot', 
          text: formattedText
        };
        setMessages(prev => [...prev, botMsg]);
      } else {
        throw new Error(data.error || "API Error");
      }
    } catch (error) {
      console.error(error);
      const isGeminiMissing = error.message.includes("GEMINI_API_KEY");
      
      const botMsg = { 
        id: Date.now() + 1, 
        type: 'bot', 
        text: isGeminiMissing 
          ? "⚠️ **AI Offline!** Please add your `GEMINI_API_KEY` to your `.env.local` file to unlock my AI brain."
          : "I'm having trouble connecting to my AI brain right now. For detailed queries, contact **admin@urbancode.in** or call **+91 9878798797**!"
      };
      setMessages(prev => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
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
