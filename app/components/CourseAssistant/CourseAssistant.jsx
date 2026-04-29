'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ChevronRight, Sparkles } from 'lucide-react';
import './CourseAssistant.css';

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

  const initialMessages = {
    "MERN Stack Development": [
      { id: 1, type: 'bot', text: `Hi there! I'm your **MERN Stack Guide**. Ready to build modern web apps with MongoDB, Express, React, and Node?` },
      { id: 2, type: 'bot', text: `The MERN stack is the #1 choice for startups and tech giants like Netflix and Airbnb. 🚀` },
      { id: 3, type: 'bot', text: `What would you like to explore first?`, options: ["Market Trends 📈", "Curriculum Details 📚", "Job Placement 💼", "Prerequisites 🛠️"] }
    ],
    "MEAN Stack Development": [
        { id: 1, type: 'bot', text: `Hello! I'm your **MEAN Stack Expert**. Interested in mastering Angular, Node.js, Express, and MongoDB?` },
        { id: 2, type: 'bot', text: `MEAN is perfect for building scalable enterprise-grade applications.` },
        { id: 3, type: 'bot', text: `How can I help you today?`, options: ["Job Opportunities 💼", "Angular vs React ⚔️", "Syllabus 📚"] }
    ],
    "default": [
      { id: 1, type: 'bot', text: `Hello! I'm your learning assistant for **${courseName}**. How can I help you today?` },
      { id: 2, type: 'bot', text: `I can tell you about the curriculum, career paths, or how we help you get hired.` },
      { id: 3, type: 'bot', text: `What's on your mind?`, options: ["Career Growth 🚀", "Course Syllabus 📚", "Ask a Question 💬"] }
    ]
  };

  const knowledgeBase = {
    "Market Trends 📈": "Full-stack developers are highly sought after. In India, a MERN developer can earn anywhere from ₹5LPA to ₹25LPA depending on expertise.",
    "Curriculum Details 📚": "We cover everything from HTML/CSS to advanced React hooks, Node.js server architecture, and MongoDB aggregation.",
    "Job Placement 💼": "Urbancode offers 100% placement assistance. We help you with resume building, mock interviews, and direct referrals.",
    "Prerequisites 🛠️": "Just basic computer knowledge and a logic-driven mindset! We start from absolute zero.",
    "Career Growth 🚀": `${courseName} is a high-growth field in 2026. Experts are seeing a 40% increase in remote job opportunities.`,
    "Course Syllabus 📚": `Our ${courseName} syllabus is industry-aligned, covering the latest tools and best practices.`,
    "Job Opportunities 💼": "Companies are actively hiring for these roles. We've seen a surge in demand for specialized engineers.",
    "Angular vs React ⚔️": "Angular is a full-featured framework (great for enterprise), while React is a library (highly flexible). We teach both depending on the path you choose!",
    "Syllabus 📚": "We dive deep into TypeScript, Angular RxJS, and full-stack integration."
  };

  useEffect(() => {
    if (isOpen) {
      setShowTeaser(false);
      if (messages.length === 0) {
        const courseKey = initialMessages[courseName] ? courseName : "default";
        setMessages(initialMessages[courseKey]);
      }
    }
  }, [isOpen, courseName]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Handle "Ask a Question" redirect
    if (text === "Ask a Question 💬") {
      router.push('/contact-us');
      setIsOpen(false);
      return;
    }

    const userMsg = { id: Date.now(), type: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "That's a great question! Our mentors can give you a more detailed breakdown. Would you like me to book a quick call for you?";
      
      const lowerText = text.toLowerCase().trim();

      if (knowledgeBase[text]) {
        botResponse = knowledgeBase[text];
      } else if (lowerText === 'yes' || lowerText === 'yeah' || lowerText === 'sure') {
        botResponse = "Perfect! Please share your contact number or email, and our career counselor will reach out to you within 24 hours. 😊";
      } else if (lowerText === 'no' || lowerText === 'not now') {
        botResponse = "No problem! Feel free to explore the syllabus above. I'm here if you have any other questions later.";
      } else if (lowerText.includes('price') || lowerText.includes('fee')) {
        botResponse = "Our course fees are very competitive and come with flexible EMI options. Would you like me to connect you with our admissions team for the exact breakdown?";
      }

      const botMsg = { id: Date.now() + 1, type: 'bot', text: botResponse };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
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
        {isOpen ? <X size={24} /> : <Bot size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="assistant-window"
            initial={{ opacity: 0, y: -20, scale: 0.95, transformOrigin: 'top left' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
          >
            {/* Header */}
            <div className="assistant-header">
              <div className="assistant-info">
                <div className="bot-avatar">
                  <Bot size={20} color="#fff" />
                  <span className="status-indicator"></span>
                </div>
                <div>
                  <h3>Urbancode Guide</h3>
                  <p>Course Specialist</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="assistant-body">
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
