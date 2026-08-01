"use client";

import React, { useEffect, useState } from "react";
import { goToThankYou } from "@/lib/navigation/goToThankYou";
import "./EnquiryPopup.css";
import { submitEnquiryForm } from "@/lib/api/api";
import Swal from 'sweetalert2';
import { FormInput, FormTextarea, FormButton } from "@/app/components/common/FormUI";
import { FormPhoneInput } from "@/app/components/common/FormPhoneInput";
import { Honeypot } from "@/app/components/common/Honeypot";
import { useEnquiryForm } from "@/app/hooks/useEnquiryForm";
import { popupSchema } from "@/app/schemas/enquirySchema";
import { Controller } from "react-hook-form";

export default function EnquiryPopup({ delay = 3000 }) {
  const [visible, setVisible] = useState(false);
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

  const {
    register,
    control,
    submitHandler,
    isSubmitting,
    formState: { errors }
  } = useEnquiryForm({
    schema: popupSchema,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      honeypot: ""
    },
    onSubmitCallback: async (data, reset) => {
      const formData = {
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone,
        message: data.message ? data.message.trim() : "No message provided",
        course: "Anniversary Flash Sale",
        mode: "Not specified"
      };

      const result = await submitEnquiryForm(formData);

      if (result.success) {
        try {
          localStorage.setItem(storageKey, "true");
        } catch { }
        triggerCelebration(); // Optional: Trigger some animation if needed
        closePopup();
        goToThankYou();
        reset();
      } else {
        throw new Error(result.message);
      }
    }
  });


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

        <form className="enq-form" onSubmit={submitHandler} noValidate>
          <Honeypot register={register} />
          
          <FormInput
            {...register("name")}
            placeholder="Your name"
            error={errors.name?.message}
            disabled={isSubmitting}
            className="mb-2"
          />
          <FormInput
            {...register("email")}
            type="email"
            placeholder="Email address"
            error={errors.email?.message}
            disabled={isSubmitting}
            className="mb-2"
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <FormPhoneInput
                {...field}
                error={errors.phone?.message}
                disabled={isSubmitting}
                className="mb-2"
              />
            )}
          />
          <FormTextarea
            {...register("message")}
            placeholder="Your message (optional)"
            error={errors.message?.message}
            disabled={isSubmitting}
            rows="2"
            className="mb-3"
            maxLength={1000}
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