'use client';
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { submitEnquiryForm } from "@/lib/api/api";
import { Send, User, Mail, Phone, MapPin, BookOpen, Clock } from "lucide-react";
import "./FormPage.css";

const EnquiryPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseFromUrl = searchParams.get('course');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pin: "",
    course: courseFromUrl || "",
    message: "",
    mode: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (courseFromUrl) {
      setFormData(prev => ({ ...prev, course: courseFromUrl }));
    }
  }, [courseFromUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setStatus({ type: "", message: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email.";
    
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) newErrors.phone = "10-digit phone required.";
    
    if (!formData.course) newErrors.course = "Please select a course.";
    if (!formData.mode) newErrors.mode = "Please select a mode.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: "loading", message: "Sending your enquiry..." });

    try {
      const result = await submitEnquiryForm(formData);
      if (result.success) {
        setStatus({ type: "success", message: "Success! Redirecting..." });
        setTimeout(() => {
          router.push('/thankyou');
        }, 800);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page-wrapper">
      <div className="form-container-card">
        {/* Left Side: Info */}
        <div className="form-info-side">
          <h1>Get in Touch with Our Experts</h1>
          <p>
            Ready to transform your career? Fill out the form and our counselors 
            will reach out to you within 24 hours.
          </p>
          
          <div className="info-items">
            <div className="info-item">
              <i><BookOpen size={20} /></i>
              <div>
                <strong>Expert Mentorship</strong>
                <div style={{fontSize: '0.85rem', opacity: 0.8}}>Learn from industry professionals</div>
              </div>
            </div>
            <div className="info-item">
              <i><Clock size={20} /></i>
              <div>
                <strong>Flexible Learning</strong>
                <div style={{fontSize: '0.85rem', opacity: 0.8}}>Online and Offline batches available</div>
              </div>
            </div>
            <div className="info-item">
              <i><MapPin size={20} /></i>
              <div>
                <strong>Placement Support</strong>
                <div style={{fontSize: '0.85rem', opacity: 0.8}}>100% assistance for your dream job</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="form-input-side">
          {status.message && (
            <div className={`status-alert ${status.type}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control-custom"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.name && <div className="error-text">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control-custom"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.email && <div className="error-text">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                name="phone"
                className="form-control-custom"
                placeholder="9876543210"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.phone && <div className="error-text">{errors.phone}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">PIN Code</label>
              <input
                type="text"
                name="pin"
                className="form-control-custom"
                placeholder="600001"
                value={formData.pin}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Select Course</label>
              <select
                name="course"
                className="form-control-custom"
                value={formData.course}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="">Choose Course</option>
                <option value="Python with AI">Python with AI</option>
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="Data Science">Data Science</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Software Testing">Software Testing</option>
                <option value="Cloud/DevOps">Cloud/DevOps</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Other">Other</option>
              </select>
              {errors.course && <div className="error-text">{errors.course}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Preferred Mode</label>
              <select
                name="mode"
                className="form-control-custom"
                value={formData.mode}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="">Select Mode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Hybrid">Hybrid</option>
              </select>
              {errors.mode && <div className="error-text">{errors.mode}</div>}
            </div>

            <div className="form-group full-width">
              <label className="form-label">Your Message</label>
              <textarea
                name="message"
                className="form-control-custom"
                rows="3"
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
              ></textarea>
            </div>

            <div className="form-group full-width">
              <button 
                type="submit" 
                className="form-submit-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Enquiry"}
                {!loading && <Send size={18} />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPage;
