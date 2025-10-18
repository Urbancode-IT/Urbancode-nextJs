'use client';
import React, { useRef, useState, useEffect } from "react";
import { sendContactMessage } from "@/lib/api/api";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    interest: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [activeMap, setActiveMap] = useState(0);

  // alternate maps every 2 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMap((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // handle input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // validation logic
  const validateForm = () => {
    const { name, email, mobile, interest, message } = formData;

    if (!name.trim()) return "Please enter your name.";
    if (!email.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email address.";
    if (!mobile.trim()) return "Please enter your mobile number.";
    if (!/^\d{10}$/.test(mobile.trim()))
      return "Please enter a valid 10-digit mobile number.";
    if (!interest.trim()) return "Please select an interest.";
    if (!message.trim()) return "Please enter a message.";

    return null; // valid
  };

  // form submit
 const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }

    setLoading(true);
    const response = await sendContactMessage(formData);
    setLoading(false);

    if (response.success) {
      setSubmittedName(formData.name);
      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        interest: "",
        message: "",
      });
    } else {
      alert(response.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <section className="contact-section contact-us-page">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <div className="header-line"></div>
        <p>
          We'd love to hear from you! Whether you have a question about our
          services, need support, or just want to say hello—our team is always
          ready to help.
        </p>
      </div>

      <div className="contact-content">
        {/* Left: Form */}
        <div className="contact-form">
          <h3>Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter mail ID"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile No"
              value={formData.mobile}
              onChange={handleInputChange}
            />
            <div className="select-wrapper">
              <select
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
              >
                <option value="">Interested In</option>
                <option value="Course Enquiry">Course Enquiry</option>
                <option value="Placement Assistance">Placement Assistance</option>
                <option value="Internship">Internship</option>
                <option value="Mentorship">Mentorship</option>
                <option value="Franchise">Franchise</option>
                <option value="Corporate Training">Corporate Training</option>
                <option value="School Tie-up">School Tie-up</option>
                <option value="College Tie-up">College Tie-up</option>
                <option value="Partnership">Partnership</option>
                <option value="Sponsorship">Sponsorship</option>
                <option value="Bulk Hiring">Bulk Hiring</option>
                <option value="Career with Urbancode">Career with Urbancode</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="message-submit">
              <textarea
                name="message"
                placeholder="Message Box"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Submit"}{" "}
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </form>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Right: Info + Maps */}
        <div className="contact-info">
          <div className="map-box">
  <div className={`map-slider ${activeMap === 1 ? "shift" : ""}`}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6988594264685!2d80.21742727608103!3d12.991102787326096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52675e83808383%3A0x34ba42591d2df4f1!2sUrbancode%20Training%20and%20Solutions!5e0!3m2!1sen!2sin!4v1759989388834!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Urbancode Pallikaranai"
    ></iframe>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.46718187897!2d80.20756157608038!3d12.941929887370714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4459863a4cda389d%3A0x886df1337be63502!2sUrbancode%20Training%20and%20Solutions!5e0!3m2!1sen!2sin!4v1759989548085!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Urbancode Velachery"
    ></iframe>
  </div>
</div>

          <div className="contact-grid">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Pallikaranai</h4>
                <p>9/29, 5th St, Kamakoti Nagar, Pallikaranai, Chennai, Tamil Nadu, 600100</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Velachery</h4>
                <p>52/159, Velachery Rd, next to Guru Nanak College, near Phoenix Marketcity, Anna Garden, Velachery, Chennai, Tamil Nadu 600042</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+91 98787 98797</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-building"></i>
              <div>
                <h4>Company</h4>
                <p>Urbancode Edutech Solutions Pvt Ltd</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>admin@urbancode.in</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-file-invoice"></i>
              <div>
                <h4>GST No</h4>
                <p>33AADCU726Q1ZR</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="thankyou-popup">
          <div className="popup-content">
            <h3>Thank you, {submittedName}!</h3>
            <p>Your response has been received. We will get back to you soon.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};


export default ContactUs;
