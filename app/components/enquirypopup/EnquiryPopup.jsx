"use client";

import React, { useEffect, useState } from "react";
import "./EnquiryPopup.css";

export default function EnquiryPopup({
  delay = 5000, // shows after 10 seconds
  expiryHours = 24, // don't show again for 24 hours
}) {
  const [visible, setVisible] = useState(false);
  const storageKey = "anniversaryOfferSeenAt";

  useEffect(() => {
    try {
      const ts = localStorage.getItem(storageKey);
      if (ts) {
        const hoursPassed = (Date.now() - parseInt(ts, 10)) / (1000 * 60 * 60);
        if (hoursPassed < expiryHours) return; // don't show again
      }
    } catch {}

    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay, expiryHours]);

  const closePopup = () => {
    setVisible(false);
    try {
      localStorage.setItem(storageKey, Date.now().toString());
    } catch {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);

    const payload = {
      name: f.get("name"),
      email: f.get("email"),
      phone: f.get("phone"),
      message: f.get("message"),
    };

    console.log("Form submitted", payload);

    closePopup();
    // Optional: show toast / success state
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
