import React, { useState } from "react";
import { motion } from "framer-motion";
import { submitProjectEnquiryForm } from "@/lib/api/api";
import { goToThankYou } from "@/lib/navigation/goToThankYou";
import Swal from 'sweetalert2';
import "./ContactSection.css";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedIn: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.interestedIn) {
      Swal.fire({ icon: 'warning', title: 'Validation Error', text: 'Please fill all required fields.', confirmButtonColor: '#036c2d' });
      return;
    }
    
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 7 || cleanPhone.length > 15) {
      Swal.fire({ icon: 'warning', title: 'Validation Error', text: 'Please enter a valid 7 to 15 digit mobile number.', confirmButtonColor: '#036c2d' });
      return;
    }

    const consonantMashRegex = /[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]{7,}/;
    if ((formData.name && consonantMashRegex.test(formData.name)) || (formData.message && consonantMashRegex.test(formData.message))) {
      Swal.fire({ icon: 'warning', title: 'Invalid Input', text: 'Invalid input detected in name or message.', confirmButtonColor: '#036c2d' });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.interestedIn, // Mapping to backend expected field
        message: formData.message || "No message provided",
        course: "Portfolio Project Inquiry"
      };

      const result = await submitProjectEnquiryForm(payload);
      if (result.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Your enquiry has been submitted successfully.',
          icon: 'success',
          confirmButtonColor: '#036c2d'
        });
        goToThankYou();
        setFormData({ name: "", email: "", phone: "", interestedIn: "", message: "" });
      } else {
        Swal.fire({ icon: 'error', title: 'Oops...', text: result.message || "Failed to send message.", confirmButtonColor: '#d33' });
      }
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire({ icon: 'error', title: 'Oops...', text: "Something went wrong. Please try again.", confirmButtonColor: '#d33' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      {/* Background Orbs */}
      <div className="contact__orb orb-1"></div>
      <div className="contact__orb orb-2"></div>
      
      <div className="contact__container">
        {/* Visual Contact Form Card */}
        <div className="visual-contact-card">
          <div className="visual-contact-header">
            <h2>Get In <span className="text-green">Touch</span></h2>
            <p>Let's discuss your project</p>
          </div>
          
          <div className="visual-contact-body">
            <div className="visual-contact-image">
              <motion.img 
                src="/portfolio/contact_envelope_graphic.png" 
                alt="Get in Touch Graphic" 
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ width: "100%", maxWidth: "450px", objectFit: "contain" }}
              />
            </div>
            
            <div className="visual-contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-row-double">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Mail ID" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-row-double">
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Mobile No" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <select 
                    name="interestedIn"
                    required 
                    value={formData.interestedIn}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Interested In</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Cloud Services">Cloud Services</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="Corporate Training">Corporate Training</option>
                  </select>
                </div>
                <div className="form-row-single">
                  <textarea 
                    name="message"
                    placeholder="Message" 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="visual-submit-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;