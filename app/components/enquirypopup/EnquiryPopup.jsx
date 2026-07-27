"use client";

import React, { useEffect, useState } from "react";
import { goToThankYou } from "@/lib/navigation/goToThankYou";
import "./EnquiryPopup.css";
import { submitEnquiryForm } from "@/lib/api/api";
import Swal from 'sweetalert2';
import { FormInput, FormTextarea, FormButton } from "@/app/components/common/FormUI";

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

  const validateForm = (formDataObj) => {
    const errors = {};
    
    // Name validation
    if (!formDataObj.name || !formDataObj.name.trim()) {
      errors.name = "Name is required.";
    } else if (formDataObj.name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters.";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formDataObj.name.trim())) {
      errors.name = "Name can only contain letters, spaces, hyphens, and apostrophes.";
    }
    
    // Email validation
    if (!formDataObj.email || !formDataObj.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formDataObj.email.trim())) {
      errors.email = "Please enter a valid email address.";
    } else if (formDataObj.email.trim().length > 255) {
      errors.email = "Email is too long.";
    }
    
    // Phone validation
    if (!formDataObj.phone || !formDataObj.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else {
      const cleanPhone = formDataObj.phone.replace(/\D/g, '');
      if (cleanPhone.length < 7 || cleanPhone.length > 15) {
        errors.phone = "Please enter a valid 7 to 15 digit mobile number.";
      }
    }
    // Gibberish validation
    const consonantMashRegex = /[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]{7,}/;
    if (consonantMashRegex.test(formDataObj.name)) {
      errors.name = "Invalid input detected.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const f = new FormData(e.target);

    const formData = {
      name: f.get("name"),
      email: f.get("email"),
      phone: f.get("phone"),
      message: f.get("message") || "No message provided",
      course: "Anniversary Flash Sale",
      mode: "Not specified"
    };

    // Validate form
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      Swal.fire({ icon: 'warning', title: 'Validation Error', text: Object.values(errors).join("\n"), confirmButtonColor: '#036c2d' });
      return;
    }

    setIsSubmitting(true);




    try {
      const result = await submitEnquiryForm(formData);

      if (result.success) {
        try {
          localStorage.setItem(storageKey, "true");
        } catch { }
        closePopup();
        goToThankYou();
      } else {
        throw new Error(result.message);
      }

    } catch (err) {
      console.error("API Error:", err);
      Swal.fire({ icon: 'error', title: 'Oops...', text: err.message || "Something went wrong while sending your enquiry. Please try again.", confirmButtonColor: '#d33' });
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
          <FormInput
            name="name"
            placeholder="Your name"
            required
            disabled={isSubmitting}
            className="mb-2"
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Email address"
            required
            disabled={isSubmitting}
            className="mb-2"
          />
          <FormInput
            name="phone"
            type="tel"
            placeholder="Phone number (10 digits)"
            required
            disabled={isSubmitting}
            className="mb-2"
          />
          <FormTextarea
            name="message"
            placeholder="Your message (optional)"
            disabled={isSubmitting}
            rows="2"
            className="mb-3"
          />

          <FormButton
            type="submit"
            variant="success"
            className="w-100 py-2 enq-btn"
            loading={isSubmitting}
          >
            Enroll now
          </FormButton>
        </form>

        {/* Enhanced Celebration container */}
        <div id="celebration-container"></div>
      </div>
    </div>
  );
}