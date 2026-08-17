'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './UrbancodeChatbot.css';

const COURSE_OPTIONS = [
  'Full Stack Development',
  'Data Science',
  'Digital Marketing',
  'Database',
  'Data Analytics',
  'Cloud & DevOps',
  'Data Analysis',
  'Programming Languages',
  'Software Testing',
  'Kids',
  'Internship',
  'Other',
];

const formatTimestamp = (date) => {
  const hours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
  if (hours < 1) return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  return date.toLocaleDateString();
};

const validateEmail = (value) => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
    return 'Please enter a valid email address.';
  }
  return '';
};

const validatePhone = (value) => {
  const digits = value.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) {
    return 'Please enter a valid contact number.';
  }
  return '';
};

const normalizePhone = (value) => {
  const digits = value.replace(/\D/g, '');
  return digits.length > 10 ? digits.slice(-10) : digits;
};

export default function UrbancodeChatbot() {
  const messagesEndRef = useRef(null);
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', content: "Greetings from Urbancode! I'm your personal assistant.", timestamp: new Date() },
    { role: 'bot', content: 'Please enter your name....', timestamp: new Date() },
  ]);
  const [completed, setCompleted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, completed, sending, error]);

  const appendMessage = (role, content) => {
    setMessages((prev) => [...prev, { role, content, timestamp: new Date() }]);
  };

  const submitDetails = async (payload) => {
    setSending(true);
    setError('');
    try {
      const response = await fetch('/api/chatbot/submit-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send details.');
      }
    } catch (err) {
      setError('Failed to send details, but your information has been saved. We will contact you soon.');
      console.error('Chatbot submission error:', err);
    } finally {
      setSending(false);
    }
  };

  const handleCourseSelect = async (selectedCourse) => {
    setCourse(selectedCourse);
    appendMessage('user', selectedCourse);
    appendMessage('bot', 'Please share your contact number to get call from our Course coordinators.');
    setStep(3);
    setInput('');
  };

  const handleSend = async () => {
    const value = input.trim();
    if (!value && step !== 2) return;

    if (step === 0) {
      setName(value);
      appendMessage('user', value);
      appendMessage('bot', 'Please enter your email address..');
      setStep(1);
      setInput('');
      return;
    }

    if (step === 1) {
      const emailError = validateEmail(value);
      if (emailError) {
        appendMessage('user', value);
        appendMessage('bot', emailError);
        setInput('');
        return;
      }
      setEmail(value);
      appendMessage('user', value);
      appendMessage('bot', 'Please Select your course');
      setStep(2);
      setInput('');
      return;
    }

    if (step === 3) {
      const phoneError = validatePhone(value);
      if (phoneError) {
        appendMessage('user', value);
        appendMessage('bot', phoneError);
        setInput('');
        return;
      }

      const phone = normalizePhone(value);
      appendMessage('user', value);
      setCompleted(true);
      setStep(4);
      setInput('');

      await submitDetails({
        name: name.trim(),
        email: email.trim(),
        course,
        phone,
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && step !== 2) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot-window-modern chatbot-window-embedded">
      <div className="chatbot-header-modern">
        <div className="chatbot-header-left">
          <div className="chatbot-avatar-modern">
            <Image src="/images/home/logo.png" alt="Urbancode" width={40} height={40} />
          </div>
          <div className="chatbot-title-container">
            <div className="chatbot-title-modern">Urbancode Assistant</div>
            <div className="chatbot-status">Online</div>
          </div>
        </div>
      </div>

      <div className="chatbot-messages-modern">
        <div className="welcome-banner">
          <h3>Welcome to Urbancode!</h3>
          <p>How can I assist you today?</p>
        </div>

        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} className={`chatbot-msg-modern ${message.role}`}>
            {message.role === 'bot' && (
              <div className="chatbot-avatar-small">
                <Image src="/images/get.png" alt="Assistant" width={28} height={28} />
              </div>
            )}
            <div className="chatbot-msg-content">
              <div className="chatbot-msg-bubble">{message.content}</div>
              <div className="chatbot-msg-timestamp">{formatTimestamp(message.timestamp)}</div>
            </div>
          </div>
        ))}

        {completed && (
          <div className="thankyou-message-modern">
            <div className="thankyou-icon">✓</div>
            <h3>Thank you for your inquiry!</h3>
            <p>We have sent course details to your email. Our team will also connect with you on WhatsApp shortly.</p>
            <div className="signature">
              <p className="tagline">Dream big, Achieve bigger.</p>
              <Image
                src="/images/home/logo.png"
                alt="Urbancode Logo"
                width={80}
                height={80}
                className="logo"
              />
              <p className="mission">From skills to success — delivering real-world learning that drives results</p>
            </div>
            {sending && <div className="sending-indicator">Sending details...</div>}
            {error && <div className="error-message">{error}</div>}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {!completed && (
        <div className="chatbot-input-container">
          {step === 2 ? (
            <div className="course-selection">
              <p className="instruction">Choose a course:</p>
              <div className="course-options">
                {COURSE_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`course-option ${course === option ? 'selected' : ''}`}
                    onClick={() => handleCourseSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="input-group">
              <input
                type={step === 1 ? 'email' : step === 3 ? 'tel' : 'text'}
                className="chat-input"
                placeholder={
                  step === 0
                    ? 'Enter your name'
                    : step === 1
                      ? 'Enter your email'
                      : 'Enter your contact number'
                }
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button type="button" className="send-button" onClick={handleSend} disabled={!input.trim()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
