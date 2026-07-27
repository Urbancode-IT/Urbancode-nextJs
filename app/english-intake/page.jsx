"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { submitEnglishIntakeForm } from "@/lib/api/api";
import Link from "next/link";

const occupationOptions = ["Student", "Working Professional", "Home maker", "Other"];
const englishLevelOptions = ["Beginner", "Intermediate", "Advanced", "Not sure"];
const reasonOptions = ["Speaking confidently", "Workplace communication", "Academic purposes", "Interviews", "Public speaking", "Travel", "General fluency", "Other"];
const focusOptions = ["Speaking", "Listening", "Reading", "Writing", "Grammar", "Vocabulary", "Pronunciation"];
const comfortOptions = ["Very comfortable", "Somewhat comfortable", "A little comfortable", "Not comfortable at all"];
const hoursOptions = ["2-3 hours", "4-6 hours", "More than 6 hours"];
const modeOptions = ["Online", "Offline", "Either"];
const BLANK = { fullName: "", age: "", email: "", phone: "", occupation: "", occupationOther: "", englishLevel: "", reasons: [], focusArea: "", attendedBefore: "", comfortLevel: "", hoursPerWeek: "", learningMode: "", goals: "" };
const consonantMashRegex = /[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]{7,}/;

function SectionCard({ number, title, children }) {
  return (
    <div style={{ background: "#fff", borderRadius: "12px", padding: "24px 28px", marginBottom: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#036c2d", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px", flexShrink: 0 }}>{number}</div>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "700", color: "#1a1a1a" }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

function RadioGroup({ name, options, value, onChange }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
      {options.map((opt) => (
        <label key={opt} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", border: value === opt ? "2px solid #036c2d" : "2px solid #e0e0e0", background: value === opt ? "#f0fff4" : "#fafafa", fontWeight: value === opt ? "600" : "400", color: value === opt ? "#036c2d" : "#444", fontSize: "14px" }}>
          <input type="radio" name={name} value={opt} checked={value === opt} onChange={onChange} style={{ display: "none" }} />
          {opt}
        </label>
      ))}
    </div>
  );
}

function CheckGroup({ name, options, values, onChange }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
      {options.map((opt) => (
        <label key={opt} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", border: values.includes(opt) ? "2px solid #036c2d" : "2px solid #e0e0e0", background: values.includes(opt) ? "#f0fff4" : "#fafafa", fontWeight: values.includes(opt) ? "600" : "400", color: values.includes(opt) ? "#036c2d" : "#444", fontSize: "14px" }}>
          <input type="checkbox" name={name} value={opt} checked={values.includes(opt)} onChange={onChange} style={{ display: "none" }} />
          {opt}
        </label>
      ))}
    </div>
  );
}

function StepIndicator({ step }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px" }}>
      {[1, 2].map((s, i) => (
        <React.Fragment key={s}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: s <= step ? "#fff" : "rgba(255,255,255,0.25)", border: "3px solid " + (s <= step ? "#fff" : "rgba(255,255,255,0.4)"), color: s <= step ? "#036c2d" : "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "15px" }}>{s < step ? "v" : s}</div>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.9)", fontWeight: "600" }}>{s === 1 ? "Personal Info" : "Course Details"}</span>
          </div>
          {i < 1 && (<div style={{ flex: 1, height: "3px", margin: "0 16px", marginBottom: "22px", background: step === 2 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)", borderRadius: "2px" }} />)}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function EnglishIntakeFormPage() {
  const [formData, setFormData] = useState(BLANK);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, reasons: checked ? [...prev.reasons, value] : prev.reasons.filter((r) => r !== value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateStep1 = () => {
    if (!formData.fullName.trim()) return "Full Name is required.";
    if (consonantMashRegex.test(formData.fullName)) return "Invalid input in Full Name.";
    if (!formData.age) return "Age is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Invalid email address.";
    const ph = formData.phone.replace(/\D/g, "");
    if (ph.length < 7 || ph.length > 15) return "Please enter a valid 7 to 15 digit mobile number.";
    return null;
  };

  const validateStep2 = () => {
    if (!formData.occupation) return "Occupation is required.";
    if (!formData.englishLevel) return "English level is required.";
    if (formData.reasons.length === 0) return "Select at least one reason.";
    if (!formData.focusArea) return "Focus area is required.";
    if (!formData.attendedBefore) return "Please answer if you attended a course before.";
    if (!formData.comfortLevel) return "Comfort level is required.";
    if (!formData.hoursPerWeek) return "Select weekly learning hours.";
    if (!formData.learningMode) return "Preferred mode of learning is required.";
    if (formData.goals && consonantMashRegex.test(formData.goals)) return "Invalid input in goals.";
    return null;
  };

  const handleNext = () => {
    const err = validateStep1();
    if (err) { Swal.fire({ icon: "warning", title: "Validation Error", text: err, confirmButtonColor: "#036c2d" }); return; }
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validateStep2();
    if (err) { Swal.fire({ icon: "warning", title: "Validation Error", text: err, confirmButtonColor: "#036c2d" }); return; }
    setLoading(true);
    const payload = { name: formData.fullName.trim(), age: formData.age, email: formData.email.trim(), phone: formData.phone.replace(/\D/g, ""), occupation: formData.occupation === "Other" ? "Other: " + formData.occupationOther : formData.occupation, englishLevel: formData.englishLevel, reasons: formData.reasons.join(", "), focusArea: formData.focusArea, attendedBefore: formData.attendedBefore, comfortLevel: formData.comfortLevel, hoursPerWeek: formData.hoursPerWeek, learningMode: formData.learningMode, goals: formData.goals.trim() };
    try {
      const result = await submitEnglishIntakeForm(payload);
      if (result.success) {
        Swal.fire({ icon: "success", title: "Thank you!", text: "Intake form submitted successfully.", confirmButtonColor: "#036c2d" });
        setFormData(BLANK); setStep(1);
      } else {
        Swal.fire({ icon: "error", title: "Oops...", text: result.message || "Failed to submit.", confirmButtonColor: "#d33" });
      }
    } catch (ex) {
      Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong. Please try again.", confirmButtonColor: "#d33" });
    } finally { setLoading(false); }
  };

  const inp = { width: "100%", padding: "10px 14px", fontSize: "14px", border: "2px solid #e0e0e0", borderRadius: "8px", outline: "none", fontFamily: "inherit", color: "#1a1a1a", background: "#fff", boxSizing: "border-box" };
  const lbl = { display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "14px", color: "#333" };

  return (
    <div style={{ minHeight: "100vh", padding: "40px 16px 60px" }}>
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 30px)", fontWeight: "800", margin: "0 0 8px" }}>English Language Course</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", margin: 0 }}>Student Intake Form - Please fill in all sections carefully</p>
      </div>
      <div style={{ maxWidth: "500px", margin: "0 auto 12px" }}>
        <StepIndicator step={step} />
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          {step === 1 && (
            <>
              <SectionCard number="1" title="Personal Information">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div><label style={lbl}>Full Name *</label><input type="text" name="fullName" style={inp} value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" required /></div>
                  <div><label style={lbl}>Age *</label><input type="number" name="age" style={inp} value={formData.age} onChange={handleChange} min="1" max="99" placeholder="e.g., 22" required /></div>
                  <div><label style={lbl}>Email Address *</label><input type="email" name="email" style={inp} value={formData.email} onChange={handleChange} placeholder="you@email.com" required /></div>
                  <div><label style={lbl}>Phone Number *</label><input type="tel" name="phone" style={inp} value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required /></div>
                </div>
              </SectionCard>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button type="button" onClick={handleNext} style={{ padding: "12px 44px", background: "#fff", color: "#036c2d", border: "none", borderRadius: "10px", fontSize: "16px", fontWeight: "700", cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}>Next Step</button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <SectionCard number="2" title="Current Occupation *">
                <RadioGroup name="occupation" options={occupationOptions} value={formData.occupation} onChange={handleChange} />
                {formData.occupation === "Other" && (<input type="text" name="occupationOther" style={{ ...inp, marginTop: "12px", maxWidth: "280px" }} value={formData.occupationOther} onChange={handleChange} placeholder="Please specify..." />)}
              </SectionCard>
              <SectionCard number="3" title="Current Level of English *">
                <RadioGroup name="englishLevel" options={englishLevelOptions} value={formData.englishLevel} onChange={handleChange} />
              </SectionCard>
              <SectionCard number="4" title="Why do you want to improve your English? *">
                <p style={{ margin: "0 0 4px", fontSize: "13px", color: "#777" }}>Select all that apply</p>
                <CheckGroup name="reasons" options={reasonOptions} values={formData.reasons} onChange={handleChange} />
              </SectionCard>
              <SectionCard number="5" title="Which area would you like to focus on the most? *">
                <RadioGroup name="focusArea" options={focusOptions} value={formData.focusArea} onChange={handleChange} />
              </SectionCard>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <SectionCard number="6" title="Attended an English course before? *">
                  <RadioGroup name="attendedBefore" options={["Yes", "No"]} value={formData.attendedBefore} onChange={handleChange} />
                </SectionCard>
                <SectionCard number="7" title="Comfort level speaking English *">
                  <RadioGroup name="comfortLevel" options={comfortOptions} value={formData.comfortLevel} onChange={handleChange} />
                </SectionCard>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <SectionCard number="8" title="Hours per week for learning *">
                  <RadioGroup name="hoursPerWeek" options={hoursOptions} value={formData.hoursPerWeek} onChange={handleChange} />
                </SectionCard>
                <SectionCard number="9" title="Preferred mode of learning *">
                  <RadioGroup name="learningMode" options={modeOptions} value={formData.learningMode} onChange={handleChange} />
                </SectionCard>
              </div>
              <SectionCard number="10" title="Learning Goals (Optional)">
                <textarea name="goals" rows={3} style={{ ...inp, resize: "vertical" }} value={formData.goals} onChange={handleChange} placeholder="Share any specific goals or expectations from this course..." />
              </SectionCard>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button type="button" onClick={() => { setStep(1); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ padding: "12px 32px", background: "rgba(255,255,255,0.2)", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", borderRadius: "10px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>Back</button>
                <button type="submit" disabled={loading} style={{ padding: "12px 48px", background: "#fff", color: "#036c2d", border: "none", borderRadius: "10px", fontSize: "16px", fontWeight: "700", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}>{loading ? "Submitting..." : "Submit Form"}</button>
              </div>
            </>
          )}
        </div>
      </form>
      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <Link href="/" style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", textDecoration: "underline" }}>Back to Home</Link>
      </div>
    </div>
  );
}
