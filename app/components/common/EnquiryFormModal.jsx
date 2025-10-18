'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./EnquiryForm.css";
import { submitEnquiryForm } from "@/lib/api/api";

const EnquiryFormModal = ({ isOpen, onClose, courseName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pin: "",
    course: courseName || "",
    message: "",
    mode: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" }); // ✅ new

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setStatus({ type: "", message: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits.";
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
      const response = await submitEnquiryForm(formData);
      setStatus({ type: "success", message: response.message || "Enquiry submitted successfully!" });

      setFormData({
        name: "",
        email: "",
        phone: "",
        pin: "",
        course: courseName || "",
        message: "",
        mode: "",
      });

      setTimeout(() => {
        setStatus({ type: "", message: "" });
        onClose();
      }, 1500);
    } catch (error) {
      console.error("Enquiry Form Error:", error);
      setStatus({
        type: "error",
        message: "Failed to submit enquiry. Please try again later.",
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
              <h3>Enquire Today</h3>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>

            <form onSubmit={handleSubmit} className="container">
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
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <small className="text-danger">{errors.phone}</small>}
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="pin"
                    placeholder="Enter your pin code"
                    value={formData.pin}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    list="courses"
                    className="form-control"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    placeholder="Select or type your course"
                  />
                  <datalist id="courses">
                    <option value="Full Stack Development" />
                    <option value="Data Science" />
                    <option value="UI/UX Design" />
                    <option value="Digital Marketing" />
                    <option value="Cybersecurity" />
                    <option value="Cloud Computing" />
                    <option value="Help me choose my course" />
                    <option value="Other" />
                  </datalist>
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

                {/* ✅ Status Message */}
                {status.message && (
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
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryFormModal;
