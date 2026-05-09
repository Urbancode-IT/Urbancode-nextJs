"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import "./FloatingWidget.css";

const FloatingWidgets = () => {
  const [hovered, setHovered] = useState(null);
  const pathname = usePathname();

  // Hide on feedback and its admin pages
  if (pathname.startsWith('/feedback')) {
    return null;
  }

  const handleWhatsAppClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whatsapp_click",
      button_location: "floating_widget"
    });

    window.location.href = "/whatsapp";
  };


  const handleCallClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'phone_click',
      'gtm_label': 'floating_widget_phone'
    });
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
