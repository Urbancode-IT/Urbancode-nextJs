"use client";
import { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./Chatbot.css";

function killAssistBubble() {
  document.querySelectorAll(".premium-notification").forEach((el) => el.remove());

  // Only remove the white assist bubble (both lines together in a small box)
  document.querySelectorAll("div, aside, section").forEach((el) => {
    if (el === document.body || el.id === "chatbot-trigger" || el.id === "chatbot-container") {
      return;
    }
    const text = (el.textContent || "").replace(/\s+/g, " ").trim();
    if (
      text.includes("How may I assist you today") &&
      text.includes("Book a demo now") &&
      text.length < 120
    ) {
      el.remove();
    }
  });
}

const ChatbotWidget = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Inject hard-hide style once
    const styleId = "uc-hide-assist-bubble";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .premium-notification,
        .premium-notification * {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
          width: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
        }
      `;
      document.head.appendChild(style);
    }

    killAssistBubble();
    const observer = new MutationObserver(() => killAssistBubble());
    observer.observe(document.body, { childList: true, subtree: true });
    const poll = window.setInterval(killAssistBubble, 1500);

    return () => {
      observer.disconnect();
      window.clearInterval(poll);
    };
  }, []);

  useEffect(() => {
    if (pathname && pathname.startsWith("/study-abroad")) {
      return;
    }

    const chatbotTrigger = document.getElementById("chatbot-trigger");
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatbotClose = document.querySelector(".chatbot-close");

    if (!chatbotTrigger || !chatbotContainer || !chatbotClose) return;

    const toggleChat = () => chatbotContainer.classList.toggle("active");
    const closeChat = () => chatbotContainer.classList.remove("active");

    chatbotTrigger.addEventListener("click", toggleChat);
    chatbotClose.addEventListener("click", closeChat);

    const onDocClick = (event) => {
      if (
        chatbotContainer.classList.contains("active") &&
        !chatbotContainer.contains(event.target) &&
        !chatbotTrigger.contains(event.target)
      ) {
        closeChat();
      }
    };
    document.addEventListener("click", onDocClick);

    return () => {
      chatbotTrigger.removeEventListener("click", toggleChat);
      chatbotClose.removeEventListener("click", closeChat);
      document.removeEventListener("click", onDocClick);
    };
  }, [pathname]);

  if (pathname && pathname.startsWith("/study-abroad")) {
    return null;
  }

  return (
    <>
      <div
        id="chatbot-trigger"
        className="chatbot-trigger"
        role="button"
        tabIndex={0}
        aria-label="Open chat assistant"
      >
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
      </div>

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
        <iframe
          src="https://uc-chatbot.netlify.app"
          title="UrbanCode chat assistant"
          frameBorder="0"
          className="chatbot-iframe"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default ChatbotWidget;
