"use client";

import React, { useEffect, useState } from "react";
import "./EnquiryPopup.css";
import { submitEnquiryForm } from "@/lib/api/api";

export default function EnquiryPopup({ delay = 3000 }) {
  const [visible, setVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const storageKey = "anniversaryOfferSubmitted";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shouldOpen = params.get("open") === "enquiry";

    if (shouldOpen) {
      setVisible(true);
      return;
    }

    try {
      const hasSubmitted = localStorage.getItem(storageKey);
      if (hasSubmitted) return;
    } catch { }

    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const closePopup = () => {
    setVisible(false);
  };

  // Enhanced celebration animation
  function triggerCelebration() {
    const container = document.getElementById("celebration-container");
    if (!container) return;

    // Clear any existing particles
    container.innerHTML = '';

    // Create main burst particles
    for (let i = 0; i < 35; i++) {
      const particle = document.createElement("div");
      particle.className = "cele-particle";
      container.appendChild(particle);

      const angle = (i / 35) * 360;
      const distance = 80 + Math.random() * 120;
      const delay = Math.random() * 0.3;

      particle.style.setProperty("--tx", `${Math.cos(angle * Math.PI / 180) * distance}px`);
      particle.style.setProperty("--ty", `${Math.sin(angle * Math.PI / 180) * distance}px`);

      // Green theme colors with variations
      const colors = [
        "#12d46c", "#0c9246", "#079e4f", "#0b6d2e",
        "#16f47d", "#0daa54", "#068945", "#095a26"
      ];
      particle.style.background = colors[i % colors.length];
      particle.style.animationDelay = `${delay}s`;

      setTimeout(() => {
        if (particle.parentNode === container) {
          particle.remove();
        }
      }, 1000 + delay * 1000);
    }

    // Add sparkle effects
    for (let i = 0; i < 15; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      container.appendChild(sparkle);

      const angle = Math.random() * 360;
      const distance = 40 + Math.random() * 60;
      const delay = 0.1 + Math.random() * 0.4;

      sparkle.style.left = `calc(50% + ${Math.cos(angle * Math.PI / 180) * distance}px)`;
      sparkle.style.top = `calc(50% + ${Math.sin(angle * Math.PI / 180) * distance}px)`;
      sparkle.style.animationDelay = `${delay}s`;

      setTimeout(() => {
        if (sparkle.parentNode === container) {
          sparkle.remove();
        }
      }, 800 + delay * 1000);
    }

    // Add pulse effect to button
    const button = document.querySelector('.enq-btn');
    if (button) {
      button.classList.add('success-pulse');
      setTimeout(() => {
        button.classList.remove('success-pulse');
      }, 1000);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const f = new FormData(e.target);

    const formData = {
      name: f.get("name"),
      email: f.get("email"),
      phone: f.get("phone"),
      message: f.get("message") || "No message provided",
      course: "Anniversary Flash Sale",
      mode: "Not specified"
    };

    // Trigger celebration immediately on click
    triggerCelebration();

    try {
      const result = await submitEnquiryForm(formData);

      if (result.success) {
        // Small delay to let animation complete
        setTimeout(() => {
          alert("Your enquiry has been submitted successfully!");
          try {
            localStorage.setItem(storageKey, "true");
          } catch { }
          closePopup();
        }, 800);
      } else {
        throw new Error(result.message);
      }

    } catch (err) {
      console.error("API Error:", err);
      alert(err.message || "Something went wrong while sending your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="enq-overlay">
      <div className="enq-card">
        <button className="enq-close" onClick={closePopup} aria-label="Close">✕</button>

        {/* Ribbon */}
        <div className="enq-ribbon">
          <span>2nd Anniversary</span>
        </div>

        <h2 className="enq-title">Anniversary Flash Sale — Offer Ends Soon!</h2>

        <p className="enq-sub">
          Limited-time discounts across all courses. Enquire now to claim your offer.
        </p>

        <form className="enq-form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            required
            disabled={isSubmitting}
          />
          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
            disabled={isSubmitting}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone number"
            disabled={isSubmitting}
          />
          <textarea
            name="message"
            placeholder="Your message (optional)"
            disabled={isSubmitting}
          />

          <button
            type="submit"
            className="enq-btn"
            disabled={isSubmitting}
          >
            <img src="/icons/ticket-white.svg" alt="" />
            {isSubmitting ? "Submitting..." : "Enroll now"}
          </button>
        </form>

        {/* Enhanced Celebration container */}
        <div id="celebration-container"></div>
      </div>
    </div>
  );
}