import React, { useState } from "react";
import { MapPin, Navigation, Building2, ReceiptText } from "lucide-react";
import { motion } from "framer-motion";
import "./ContactSection.css";

const BRANCHES = {
  velachery: {
    name: "Velachery Branch",
    address: "Velachery, Chennai, Tamil Nadu",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.346582143411!2d80.21111111111111!3d12.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8d8d8d8d8d%3A0x8d8d8d8d8d8d8d8d!2sUrbancode%20Edutech!5e0!3m2!1sen!2sin!4v1711888888888!5m2!1sen!2sin"
  },
  pallikaranai: {
    name: "Pallikaranai Branch",
    address: "Pallikaranai, Chennai, Tamil Nadu",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.75!2d80.2166666!3d12.9333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d0000000000%3A0x0000000000000000!2sUrbancode%20Edutech%20Pallikaranai!5e0!3m2!1sen!2sin!4v1711999999999!5m2!1sen!2sin"
  }
};

const ContactSection = () => {
  const [activeBranch, setActiveBranch] = useState("velachery");

  return (
    <section className="contact" id="contact">
      {/* Background Orbs */}
      <div className="contact__orb orb-1"></div>
      <div className="contact__orb orb-2"></div>
      
      <div className="contact__container">
        {/* Left: Chat/Email/Phone | Right: Enquiry Form */}
                {/* Visual Contact Form Card */}
        <div className="visual-contact-card">
          <div className="visual-contact-header">
            <h2>Get In <span className="text-highlight">Touch</span></h2>
            <p>Let's discuss your project</p>
          </div>
          
          <div className="visual-contact-body">
            <div className="visual-contact-image">
              <motion.img 
                src="/contact_envelope_graphic.png" 
                alt="Get in Touch Graphic" 
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ width: "100%", maxWidth: "450px", objectFit: "contain" }}
              />
            </div>
            
            <div className="visual-contact-form">
              <form>
                <div className="form-row-double">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Mail ID" />
                </div>
                <div className="form-row-double">
                  <input type="tel" placeholder="Mobile No" />
                  <select required defaultValue="">
                    <option value="" disabled>Interested In</option>
                    <option value="mern">MERN Full Stack Course</option>
                    <option value="python">Python Full Stack</option>
                    <option value="corp">Corporate Training</option>
                    <option value="soft">Software Development</option>
                  </select>
                </div>
                <div className="form-row-single">
                  <textarea placeholder="Message" rows="4"></textarea>
                </div>
                <button type="submit" className="visual-submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Existing Info Grid - Moved Below the new Visual Form */}
        <div className="contact__info-row contact-info-bottom">
          <div className="info-card info-card--green float-1">
            <div className="info-card__icon-wrap-3d">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                width="32" 
                height="32" 
                className="info-card__icon-svg" 
              />
            </div>
            <div className="info-card__text">
              <span className="info-card__label white-text">LET'S TALK!</span>
              <h3 className="info-card__value white-text">WhatsApp Chat</h3>
            </div>
          </div>

          <div className="info-card info-card--white float-2">
            <div className="info-card__icon-wrap-3d">
              <span role="img" aria-label="email" className="info-card__icon-3d">✉️</span>
            </div>
            <div className="info-card__text">
              <span className="info-card__label green-text">EMAIL</span>
              <h3 className="info-card__value green-text">admin@urbancode.in</h3>
            </div>
          </div>

          <div className="info-card info-card--white float-3">
            <div className="info-card__icon-wrap-3d">
              <span role="img" aria-label="phone" className="info-card__icon-3d">📞</span>
            </div>
            <div className="info-card__text">
              <span className="info-card__label green-text">PHONE</span>
              <h3 className="info-card__value dark-text">+91 98787 98797</h3>
            </div>
          </div>

          <div className="info-card info-card--white float-2 info-card--details">
            <div className="info-card__icon-wrap-3d">
              <Building2 size={20} className="info-card__icon-lucide" aria-hidden="true" />
            </div>
            <div className="info-card__text">
              <span className="info-card__label green-text">COMPANY</span>
              <h3 className="info-card__value dark-text info-card__value--wrap">
                Urbancode Edutech <br /> Solutions Pvt Ltd
              </h3>
            </div>
          </div>
        </div>

        {/* Location Section with Dual Branch Support (moved below like before) */}
        <div className="location-section">
          <div className="branch-selector">
            <button 
              className={`branch-btn ${activeBranch === "velachery" ? "active" : ""}`}
              onClick={() => setActiveBranch("velachery")}
            >
              <MapPin size={18} /> Velachery Branch
            </button>
            <button 
              className={`branch-btn ${activeBranch === "pallikaranai" ? "active" : ""}`}
              onClick={() => setActiveBranch("pallikaranai")}
            >
              <MapPin size={18} /> Pallikaranai Branch
            </button>
          </div>

          <div className="location-card">
            <div className="location-icon-container">
              <div className="location-pin-wrap">
                <MapPin color="#FF0000" size={40} className="location-pin-icon" />
              </div>
            </div>
            <div className="location-details">
              <span className="location-tag">LOCATIONS</span>
              <h3 className="location-title">{BRANCHES[activeBranch].name}</h3>
              <p className="location-info">{BRANCHES[activeBranch].address} • Mon–Sat, 9AM–7PM IST</p>
            </div>
          </div>
        </div>

        {/* Map / branch details */}
        <div className="form-section-header">
          <h2 className="form-heading">Let's get you more info</h2>
          <p className="form-subheading">Visit our {BRANCHES[activeBranch].name}</p>
          
          <div className="interactive-map-container">
            <div className="map-wrapper">
              <div className="map-live">
                <iframe 
                  src={BRANCHES[activeBranch].mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={BRANCHES[activeBranch].name}
                  key={activeBranch}
                ></iframe>
              </div>
            </div>
          </div>

          <div className="form-dots">
            <span></span><span className="active"></span><span></span>
          </div>
        </div>

        {/* External Links Buttons */}
        <div className="contact__external-links">
          <a href="https://www.urbancode.in/" target="_blank" rel="noopener noreferrer" className="external-link__btn website">
            Visit Our Website →
          </a>
          <a href="https://wa.me/919878798797" target="_blank" rel="noopener noreferrer" className="external-link__btn whatsapp">
            <span role="img" aria-label="whatsapp-bubble" className="whatsapp-icon">💬</span> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;