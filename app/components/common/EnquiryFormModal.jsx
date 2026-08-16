'use client';
import React, { useState } from "react";
import { goToThankYou } from "@/lib/navigation/goToThankYou";
import { FormPhoneInput } from "@/app/components/common/FormPhoneInput";
import { motion, AnimatePresence } from "framer-motion";
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';
import "./EnquiryForm.css";

const EnquiryFormModal = ({ 
  isOpen, 
  onClose, 
  courseName, 
  onSuccess, 
  downloadUrls, 
  dynamicDownloads, 
  extraOptions = [], 
  isSelectMode = false, 
  isDemoMode = false, 
  isBrochureMode = false,
  isJoinMode = false,
  batchInfo = null,
  customTitle = null
}) => {
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
  const [dynamicCourseOptions, setDynamicCourseOptions] = useState([]);

  // Fetch courses dynamically
  React.useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/courses');
        const data = await res.json();
        if (data.courses && Array.isArray(data.courses)) {
          const mappedCourses = data.courses.map(c => typeof c === 'object' ? c.name || c.course_name || c.course : c);
          if (mappedCourses.length > 0) {
            setDynamicCourseOptions(mappedCourses);
          }
        }
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    };
    fetchCourses();
  }, []);

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
    // Restrict pin to digits only
    if (name === "pin") {
      const digitsOnly = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: digitsOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors({ ...errors, [name]: "" });
    setStatus({ type: "", message: "" });
  };

  const handlePhoneChange = (phoneValue) => {
    setFormData({ ...formData, phone: phoneValue || "" });
    setErrors({ ...errors, phone: "" });
    setStatus({ type: "", message: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = "Name is required.";
    } else if (trimmedName.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    } else if (!/^[a-zA-Z\s'-]+$/.test(trimmedName)) {
      newErrors.name = "Name can only contain letters, spaces, hyphens, and apostrophes.";
    } else if (/(.)(\1{3,})/.test(trimmedName)) {
      // Reject repeated characters like "aaaa" or "bbbbb"
      newErrors.name = "Please enter a valid name.";
    } else if (!/[aeiouAEIOU]/.test(trimmedName.replace(/\s/g, ''))) {
      // Name without any vowels is likely gibberish
      newErrors.name = "Please enter a valid name.";
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
      if (cleanPhone.length < 7 || cleanPhone.length > 15) {
        newErrors.phone = "Please enter a valid 7 to 15 digit mobile number.";
      }
    }
    
    // PIN validation
    if (formData.pin && !/^\d{6}$/.test(formData.pin.trim())) {
      newErrors.pin = "PIN must be 6 digits.";
    }
    
    // Course validation
    if (!isJoinMode && !formData.course) {
      newErrors.course = "Please select a course.";
    }
    
    // Mode validation
    if (!isJoinMode && !formData.mode) {
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

    // Gibberish validation
    const consonantMashRegex = /[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]{7,}/;
    if (consonantMashRegex.test(formData.name)) {
      newErrors.name = "Invalid input detected.";
    }
    if (consonantMashRegex.test(formData.message)) {
      newErrors.message = "Invalid input detected.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: "loading", message: isJoinMode ? "Sending your request..." : "Sending your enquiry..." });

    const scriptURL = "https://script.google.com/macros/s/AKfycbyqhIsaZZb1mvkcRtxrquaDboujLLpts-q5s1ed1JIRiuzt5l76OHeFxuTZPzRWxqh_/exec";

    try {
      // Prepare payload with requested fields
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        course: formData.course,
        message: isJoinMode
          ? `[JOIN REQUEST] Request to join ${courseName} ${batchInfo ? `(${batchInfo.name} - ${batchInfo.schedule})` : ""} batch.`
          : (isDemoMode 
            ? `[DEMO REQUEST] Date: ${formData.preferredDate}, Time: ${formData.preferredTime}. Msg: ${formData.message}` 
            : formData.message),
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
      if (isJoinMode) {
        // Notify admin@urbancode.in about the join request
        fetch("/api/send-email/course-enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            course: formData.course || courseName,
            mode: "Not specified",
            pin: formData.pin || "N/A",
            message: `[JOIN REQUEST] ${formData.name} wants to join the ${courseName} class.${batchInfo ? ` Batch: ${batchInfo.name} — ${batchInfo.schedule}` : ""}`,
          }),
        }).catch((err) => console.warn("Admin join notification failed:", err));

        Swal.fire({
          title: 'Request Sent!',
          text: 'Your request has been sent to the trainer. You will be able to join the class once the trainer approves it.',
          icon: 'success',
          confirmButtonColor: '#28a745'
        });
      } else if (isBrochureMode) {
        const brochureUrl = downloadUrls && downloadUrls.length > 0 ? downloadUrls[0] : "";
        const emailResponse = await fetch("/api/send-email/send-curriculum", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            course: formData.course,
            brochureUrl: brochureUrl
          })
        });

        if (!emailResponse.ok) {
          const errRes = await emailResponse.json();
          throw new Error(errRes.message || "Failed to send curriculum email.");
        }

        // Notify admin@urbancode.in about this brochure download
        fetch("/api/send-email/course-enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            course: formData.course,
            mode: formData.mode || "Not specified",
            pin: formData.pin || "N/A",
            message: `[BROCHURE DOWNLOAD] Student downloaded the ${formData.course} curriculum/brochure.`,
          }),
        }).catch((err) => console.warn("Admin brochure notification failed:", err));

        Swal.fire({
          title: 'Curriculum Sent!',
          text: `The curriculum for ${formData.course} has been successfully sent to ${formData.email}. Please check your inbox (and spam folder)!`,
          icon: 'success',
          confirmButtonColor: '#036c2d',
          background: '#ffffff',
          color: '#2C3E50',
          iconColor: '#17944d'
        });

        setStatus({ type: "success", message: "Curriculum sent to your email!" });
      } else {
        // Send branded enquiry notification to admin@urbancode.in
        fetch("/api/send-email/course-enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            course: formData.course,
            mode: formData.mode,
            pin: formData.pin,
            message: isDemoMode
              ? `[DEMO REQUEST] Date: ${formData.preferredDate}, Time: ${formData.preferredTime}. Msg: ${formData.message}`
              : formData.message,
          }),
        }).catch((err) => console.warn("Admin email notification failed:", err));

        Swal.fire({
          title: 'Success!',
          text: 'Your enquiry has been submitted successfully.',
          icon: 'success',
          confirmButtonColor: '#036c2d'
        });
        setStatus({ type: "success", message: "Success! Redirecting..." });
      }
      
      if (onSuccess) onSuccess();

      // Close modal; redirect to thank-you only for non-brochure modes
      setTimeout(() => {
        onClose();
        if (!isBrochureMode && !isJoinMode) {
          goToThankYou();
        }
      }, 1200);

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
                {customTitle 
                  ? customTitle
                  : (isJoinMode 
                    ? "Join Class" 
                    : (isBrochureMode ? "Get Course Brochure" : (isDemoMode ? "Book a Demo Session" : "Enquire Today"))
                  )
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
                        <FormPhoneInput
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          error={errors.phone}
                          disabled={loading}
                          name="phone"
                        />
                    </div>

                    {!isJoinMode && (
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
                    )}

                    {!isJoinMode && (
                      <>
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
                                {dynamicCourseOptions.map((opt, i) => <option key={`dyn-${i}`} value={opt} />)}
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
                      </>
                    )}

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

                    {!isJoinMode && (
                      <div className="col-12">
                        <textarea
                          className={`form-control ${errors.message ? "is-invalid" : ""}`}
                          name="message"
                          rows="4"
                          placeholder="Any specific requirements?"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        {errors.message && <small className="text-danger">{errors.message}</small>}
                      </div>
                    )}

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
                        {loading ? "Sending..." : (isJoinMode ? "Join Class" : "Submit")}
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
