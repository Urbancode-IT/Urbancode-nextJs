"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./FloatingWidget.css";

const FloatingWidgets = () => {
  const [hovered, setHovered] = useState(null);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919429694123", "_blank"); 
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919878798797";
  };

  return (
    <div className="floating-widgets">
      {/* WhatsApp */}
      <div
        className="floating-btn whatsapp animate-float"
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setHovered("whatsapp")}
        onMouseLeave={() => setHovered(null)}
      >
        <FaWhatsapp size={24} />
        {hovered === "whatsapp" && (
          <span className="bubble-message">Chat with us</span>
        )}
      </div>

      {/* Call */}
      <div
        className="floating-btn call animate-float"
        onClick={handleCallClick}
        onMouseEnter={() => setHovered("call")}
        onMouseLeave={() => setHovered(null)}
      >
        <FaPhoneAlt size={22} />
        {hovered === "call" && (
          <span className="bubble-message">Call support</span>
        )}
      </div>
    </div>
  );
};

export default FloatingWidgets;
