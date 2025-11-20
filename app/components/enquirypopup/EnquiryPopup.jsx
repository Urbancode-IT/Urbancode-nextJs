"use client";

import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./EnquiryPopup.css";

export default function EnquiryPopup({
  delay = 7000, // shows after 7 seconds
}) {
  const [visible, setVisible] = useState(false);
  const storageKey = "anniversaryOfferSubmitted";

  useEffect(() => {
    try {
      const hasSubmitted = localStorage.getItem(storageKey);
      if (hasSubmitted) return; // prevent showing again
    } catch {}

    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const closePopup = () => {
    setVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);

    const payload = {
      name: f.get("name"),
      email: f.get("email"),
      phone: f.get("phone"),
      message: f.get("message") || "No message provided",
      date: new Date().toLocaleString(),
    };

    // Send via EmailJS
    emailjs
      .send(
        "service_yr2oo2h",       // ✅ Your Service ID
        "template_vr68058",     // ✅ Your Template ID
        payload,
        "Hc5Ps23TXZCn7mO0B"     // ✅ Your Public Key
      )
      .then(() => {
        alert("Your enquiry has been submitted successfully!");
        try {
          localStorage.setItem(storageKey, "true"); // stop showing popup
        } catch {}
        closePopup();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Something went wrong while sending your enquiry. Please try again.");
      });
  };

  if (!visible) return null;

  return (
    <div className="ann-overlay" role="dialog" aria-modal="true" aria-label="Enquiry popup">
      <div className="ann-popup">
        <button className="ann-close" onClick={closePopup} aria-label="Close popup">✕</button>

        <div className="ann-header">
          <div className="ann-badge">2nd Anniversary</div>

          <h2>Anniversary Flash Sale — Offer Ends Soon!</h2>
          <p className="ann-sub">
            Limited-time discounts across all courses. Enquire now to claim your offer.
          </p>
        </div>

        <form className="ann-form" onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="enq-name">Name</label>
          <input id="enq-name" name="name" type="text" placeholder="Your Name" required />

          <label className="visually-hidden" htmlFor="enq-email">Email</label>
          <input id="enq-email" name="email" type="email" placeholder="Email Address" required />

          <label className="visually-hidden" htmlFor="enq-phone">Phone</label>
          <input id="enq-phone" name="phone" type="tel" placeholder="Phone Number" />

          <label className="visually-hidden" htmlFor="enq-message">Message</label>
          <textarea id="enq-message" name="message" placeholder="Your Message (optional)"></textarea>

          <button type="submit" className="ann-cta">Enquire Now</button>

          <div className="ann-small">
            Offer valid for new enrollments only. Terms apply.
          </div>
        </form>
      </div>
    </div>
  );
}
