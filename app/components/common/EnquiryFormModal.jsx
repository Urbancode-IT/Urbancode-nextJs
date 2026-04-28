'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';
import "./EnquiryForm.css";

const EnquiryFormModal = ({ isOpen, onClose, courseName, onSuccess, downloadUrls, dynamicDownloads, extraOptions = [], isSelectMode = false, isDemoMode = false, isBrochureMode = false }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pin: "",
    course: courseName || "",
    message: "",
    mode: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const triggerDownload = (url, index = 0) => {
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = url;
      link.download = url.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, index * 500);
  };

  // Update course when prop changes
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, course: courseName || "" }));
  }, [courseName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setStatus({ type: "", message: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters, spaces, hyphens, and apostrophes.";
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    } else if (formData.email.length > 255) {
      newErrors.email = "Email is too long.";
    }
    
    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else {
      const cleanPhone = formData.phone.replace(/\D/g, '');
      if (cleanPhone.length !== 10) {
        newErrors.phone = "Phone must be exactly 10 digits.";
      } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        newErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
      }
    }
    
    // PIN validation
    if (formData.pin && !/^\d{6}$/.test(formData.pin.trim())) {
      newErrors.pin = "PIN must be 6 digits.";
    }
    
    // Course validation
    if (!formData.course) {
      newErrors.course = "Please select a course.";
    }
    
    // Mode validation
    if (!formData.mode) {
      newErrors.mode = "Please select a mode.";
    }
    
    // Demo mode specific validations
    if (isDemoMode) {
      if (!formData.preferredDate) {
        newErrors.preferredDate = "Date is required.";
      }
      if (!formData.preferredTime) {
        newErrors.preferredTime = "Time is required.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: "loading", message: "Sending your enquiry..." });

    const scriptURL = "https://script.google.com/macros/s/AKfycbyqhIsaZZb1mvkcRtxrquaDboujLLpts-q5s1ed1JIRiuzt5l76OHeFxuTZPzRWxqh_/exec";

    try {
      // Prepare payload with requested fields
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        course: formData.course,
        message: isDemoMode 
          ? `[DEMO REQUEST] Date: ${formData.preferredDate}, Time: ${formData.preferredTime}. Msg: ${formData.message}` 
          : formData.message,
      };

      // Using fetch with 'text/plain' to avoid CORS preflight issues common with Google Apps Script
      // while still sending a JSON string in the body.
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });

      if (!response.ok && response.type !== 'opaque') {
        throw new Error("Failed to submit form");
      }

      // Handle Success
      setStatus({ type: "success", message: "Success! Redirecting..." });
      
      if (onSuccess) onSuccess();

      // Close modal and redirect to thank you page
      setTimeout(() => {
        onClose();
        router.push('/thankyou');
      }, 1000);

    } catch (error) {
      console.error("Enquiry Form Error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="enquiry-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="enquiry-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="enquiry-header">
              <h3>
                {isBrochureMode 
                  ? "Get Course Brochure" 
                  : (isDemoMode ? "Book a Demo Session" : "Enquire Today")
                }
              </h3>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>

            <AnimatePresence mode="wait">
                <motion.form 
                  key="enquiry-form"
                  onSubmit={handleSubmit} 
                  className="container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="row g-3">
                    {/* Inputs */}
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength="3"
                        maxLength="100"
                        pattern="^[a-zA-Z\s'-]+$"
                        disabled={loading}
                      />
                      {errors.name && <small className="text-danger">{errors.name}</small>}
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength="255"
                        disabled={loading}
                      />
                      {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>

                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="Enter your phone number (10 digits)"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        inputMode="numeric"
                        maxLength="10"
                        pattern="^\d{10}$"
                        disabled={loading}
                      />
                      {errors.phone && <small className="text-danger">{errors.phone}</small>}
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="pin"
                        placeholder="Enter your pin code (6 digits)"
                        value={formData.pin}
                        onChange={handleChange}
                        inputMode="numeric"
                        maxLength="6"
                        pattern="^\d{6}$"
                        disabled={loading}
                      />
                      {errors.pin && <small className="text-danger">{errors.pin}</small>}
                    </div>

                    <div className="col-md-6">
                      {isSelectMode && extraOptions.length > 0 ? (
                        <select
                          className="form-select"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                        >
                          <option value="">Choose Course</option>
                          {extraOptions.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <>
                          <input
                            list="courses"
                            className="form-control"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            placeholder="Select or type your course"
                          />
                          <datalist id="courses">
                            {extraOptions.map((opt, i) => <option key={i} value={opt} />)}
                            <option value="Python with AI" />
                            <option value="webdevelopment" />
                            <option value="Full Stack Development" />
                            <option value="Data Science" />
                            <option value="UI/UX Design" />
                            <option value="Digital Marketing" />
                            <option value="Cybersecurity" />
                            <option value="Cloud Computing" />
                            <option value="Help me choose my course" />
                            <option value="Other" />
                          </datalist>
                        </>
                      )}
                      {errors.course && <small className="text-danger">{errors.course}</small>}
                    </div>

                    <div className="col-md-6">
                      <select
                        className="form-select"
                        name="mode"
                        value={formData.mode}
                        onChange={handleChange}
                      >
                        <option value="">Mode</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                        <option value="lets decide later">Let's decide later</option>
                      </select>
                      {errors.mode && <small className="text-danger">{errors.mode}</small>}
                    </div>

                    {isDemoMode && (
                      <>
                        <div className="col-md-6">
                          <label className="form-label small text-muted mb-1">Preferred Date</label>
                          <input
                            type="date"
                            className="form-control"
                            name="preferredDate"
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.preferredDate}
                            onChange={handleChange}
                          />
                          {errors.preferredDate && <small className="text-danger">{errors.preferredDate}</small>}
                        </div>
                        <div className="col-md-6">
                        <label className="form-label small text-muted mb-1">Preferred Time</label>
                          <select
                            className="form-select"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                          >
                            <option value="">Choose Time Slot</option>
                            <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                            <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                            <option value="Evening (6 PM - 9 PM)">Evening (6 PM - 9 PM)</option>
                          </select>
                          {errors.preferredTime && <small className="text-danger">{errors.preferredTime}</small>}
                        </div>
                      </>
                    )}

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="4"
                        placeholder="Any specific requirements?"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    {/* ✅ Status Message (only for non-success states) */}
                    {status.message && status.type !== "success" && (
                      <div className={`status-message ${status.type}`}>
                        {status.message}
                      </div>
                    )}

                    <div className="col-12 text-center mt-3">
                      <button
                        type="submit"
                        className="btn btn-success px-5 py-2 rounded-pill submit-btn"
                        disabled={loading}
                      >
                        {loading ? (
                          <span className="spinner-border spinner-border-sm me-2"></span>
                        ) : null}
                        {loading ? "Sending..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </motion.form>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryFormModal;
