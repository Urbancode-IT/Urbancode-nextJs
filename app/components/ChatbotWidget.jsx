"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./Chatbot.css";
import EnquiryFormModal from "./common/EnquiryFormModal";
import UrbancodeChatbot from "./Chatbot/UrbancodeChatbot";

const ChatbotWidget = () => {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const soundPlayedRef = useRef(false);

  useEffect(() => {
    if (pathname && pathname.startsWith('/study-abroad')) {
      return;
    }
    const timer = setTimeout(() => {
      setShowPopup(true);

      if (!soundPlayedRef.current) {
        const audio = new Audio("/sounds/notification.mp3");
        audio.volume = 0.4;
        audio.play().catch(() => {});
        soundPlayedRef.current = true;
      }
    }, 2000); // 5 sec delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const chatbotTrigger = document.getElementById("chatbot-trigger");
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatbotClose = document.querySelector(".chatbot-close");
    


    if (!chatbotTrigger || !chatbotContainer || !chatbotClose) return;

    const toggleChat = () => chatbotContainer.classList.toggle("active");
    const closeChat = () => chatbotContainer.classList.remove("active");

    chatbotTrigger.addEventListener("click", toggleChat);
    chatbotClose.addEventListener("click", closeChat);
    
    document.addEventListener("click", (event) => {
      if (
        chatbotContainer.classList.contains("active") &&
        !chatbotContainer.contains(event.target) &&
        !chatbotTrigger.contains(event.target)
      ) {
        closeChat();
      }
    });

    return () => {
      chatbotTrigger.removeEventListener("click", toggleChat);
      chatbotClose.removeEventListener("click", closeChat);
    };
  }, []);

  if (pathname && pathname.startsWith('/study-abroad')) {
    return null;
  }

  return (
    <>
      {/* Chatbot Trigger */}
      <div id="chatbot-trigger" className="chatbot-trigger">
        <div className="chatbot-icon">
          <Image
            src="/images/get.png"
            width={60}
            height={60}
            alt="Chat with us"
            className="rounded-circle"
          />
          <span className="chatbot-pulse"></span>
        </div>
        {showPopup && (
          <div
            className="premium-notification"
            onClick={(e) => {
              e.stopPropagation();
              setShowPopup(false);
              setIsDemoModalOpen(true);
            }}
          >
            {/* <div className="notification-icon">🎁</div> */}
            <div className="notification-content">
              <p className="notif-title">How may I assist you today?</p>
              <p className="notif-link">Book a demo now →</p>
            </div>
            <div className="notif-close" onClick={(e) => {
              e.stopPropagation();
              setShowPopup(false);
            }}>×</div>
          </div>
        )}
      </div>

      {/* Chatbot Container */}
      <div id="chatbot-container" className="chatbot-container">
        <div className="chatbot-close">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="chatbot-iframe chatbot-local-shell">
          <UrbancodeChatbot />
        </div>
      </div>

      <EnquiryFormModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        isDemoMode={true}
        courseName=""
      />
    </>
  );
};

export default ChatbotWidget;
