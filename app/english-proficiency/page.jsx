"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { submitEnrollNowForm } from "@/lib/api/api";
import { FormPhoneInput } from "@/app/components/common/FormPhoneInput";
import Link from "next/link";

const courseOptions = [
  "Study Abroad - IELTS",
  "Study Abroad - PTE",
  "Study Abroad - Duolingo"
];
const modeOptions = ["Online", "Offline", "Either"];

const BLANK = { 
  fullName: "", 
  email: "", 
  phone: "", 
  pinCode: "", 
  course: "Study Abroad - IELTS", 
  mode: "Online", 
  requirements: "" 
};
const consonantMashRegex = /[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]{7,}/;

export default function EnrollNowPage() {
  const [formData, setFormData] = useState(BLANK);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
  };

  const validate = () => {
    if (!formData.fullName.trim()) return "Name is required.";
    if (consonantMashRegex.test(formData.fullName)) return "Invalid input in Name.";
    if (!formData.email.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Invalid email address.";
    if (!formData.phone || formData.phone.replace(/\D/g, "").length < 7) return "Please enter a valid phone number.";
    if (!formData.pinCode.trim() || !/^\d{6}$/.test(formData.pinCode)) return "Please enter a valid 6-digit pin code.";
    if (!formData.course) return "Please select a course.";
    if (!formData.mode) return "Please select a mode.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { 
      Swal.fire({ icon: "warning", title: "Validation Error", text: err, confirmButtonColor: "#036c2d" }); 
      return; 
    }
    setLoading(true);
    
    const payload = {
      name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone || "",
      pinCode: formData.pinCode.trim(),
      course: formData.course,
      mode: formData.mode,
      requirements: formData.requirements.trim()
    };

    try {
      const result = await submitEnrollNowForm(payload);
      if (result.success) {
        Swal.fire({ icon: "success", title: "Thank you!", text: "Enrollment form submitted successfully.", confirmButtonColor: "#036c2d" });
        setFormData(BLANK);
      } else {
        Swal.fire({ icon: "error", title: "Oops...", text: result.message || "Failed to submit.", confirmButtonColor: "#d33" });
      }
    } catch (ex) {
      Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong. Please try again.", confirmButtonColor: "#d33" });
    } finally {
      setLoading(false);
    }
  };

  const inp = { 
    width: "100%", 
    padding: "12px 14px", 
    fontSize: "14px", 
    border: "1px solid #e0e0e0", 
    borderRadius: "8px", 
    outline: "none", 
    fontFamily: "inherit", 
    color: "#1a1a1a", 
    background: "#fff", 
    boxSizing: "border-box" 
  };

  return (
    <div style={{ minHeight: "100vh", padding: "40px 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "650px", background: "#edf5f0", borderRadius: "20px", padding: "32px", boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
           <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: "#1a1a1a" }}>English Proficiency</h2>
           <Link href="/" style={{ fontSize: "24px", color: "#666", textDecoration: "none", cursor: "pointer", lineHeight: "1" }}>&times;</Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <input type="text" name="fullName" style={inp} value={formData.fullName} onChange={handleChange} placeholder="Enter your name" required />
            <input type="email" name="email" style={inp} value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <FormPhoneInput
               value={formData.phone}
               onChange={handlePhoneChange}
               name="phone"
            />
            <input type="text" name="pinCode" style={inp} value={formData.pinCode} onChange={handleChange} placeholder="Enter your pin code (6 digits)" maxLength={6} required />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <select name="course" style={inp} value={formData.course} onChange={handleChange} required>
               <option value="" disabled>Select Course</option>
               {courseOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <select name="mode" style={inp} value={formData.mode} onChange={handleChange} required>
               <option value="" disabled>Mode</option>
               {modeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

          <div style={{ marginBottom: "28px" }}>
             <textarea name="requirements" rows={4} style={{ ...inp, resize: "vertical" }} value={formData.requirements} onChange={handleChange} placeholder="Any specific requirements?" />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
             <button type="submit" disabled={loading} style={{ padding: "14px 48px", background: "#4a4a4a", color: "#fff", border: "none", borderRadius: "30px", fontSize: "16px", fontWeight: "600", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.8 : 1, transition: "background 0.3s" }}>
                {loading ? "Submitting..." : "Submit"}
             </button>
          </div>
        </form>
      </div>
    </div>
  );
}
