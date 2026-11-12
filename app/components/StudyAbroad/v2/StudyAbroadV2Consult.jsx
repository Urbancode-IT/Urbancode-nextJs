"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FiPhone } from "react-icons/fi";
import { FormPhoneInput } from "@/app/components/common/FormPhoneInput";
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal";
import { submitEnquiryForm } from "@/lib/api/api";
import {
  getEmailError,
  getNameError,
  getPhoneError,
} from "@/app/utils/validationUtils";
import { getLeadSource } from "@/app/utils/leadSource";
import "./StudyAbroadV2Consult.css";

const INITIAL = { name: "", email: "", phone: "", interest: "" };

const INTEREST_OPTIONS = [
  "Not sure yet",
  "Study in UK",
  "Study in USA",
  "Study in Canada",
  "Study in Australia",
  "Study in Germany",
  "Study in Ireland",
  "MBBS Abroad",
  "IELTS / PTE / Duolingo",
  "Other",
];

const BULLETS = [
  "Personalised university and country shortlist",
  "Clear guidance on eligibility and documents",
  "Visa, scholarship and loan advice in one place",
];

export default function StudyAbroadV2Consult() {
  const router = useRouter();
  const [formData, setFormData] = useState(INITIAL);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = getNameError(formData.name);
    const emailError = getEmailError(formData.email);
    const phoneError = getPhoneError(formData.phone);

    if (nameError) {
      Swal.fire({ icon: "warning", title: "Validation Error", text: nameError, confirmButtonColor: "#036c2d" });
      return;
    }
    if (emailError) {
      Swal.fire({ icon: "warning", title: "Validation Error", text: emailError, confirmButtonColor: "#036c2d" });
      return;
    }
    if (phoneError) {
      Swal.fire({ icon: "warning", title: "Validation Error", text: phoneError, confirmButtonColor: "#036c2d" });
      return;
    }

    setIsSubmitting(true);

    const buttonLabel = (
      e.nativeEvent?.submitter?.innerText || "Book a Free Consultation"
    ).replace(/\s+/g, " ").trim();

    const submissionData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      course: formData.interest || "Study Abroad - Free Consultation",
      message: `Book a Free Consultation. Interested in: ${formData.interest || "Not specified"}`,
      mode: "Online/Offline",
      ...getLeadSource(
        "Study abroad page — counselling form",
        `Study abroad page — ${buttonLabel}`,
        "Study Abroad V2 consult"
      ),
    };

    try {
      const result = await submitEnquiryForm(submissionData);
      if (result.success) {
        setFormData(INITIAL);
        router.push("/study-abroad-thankyou");
      } else {
        Swal.fire({ icon: "error", title: "Oops...", text: result.message || "Failed to send. Please try again.", confirmButtonColor: "#d33" });
      }
    } catch {
      Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong. Please try again later.", confirmButtonColor: "#d33" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="sa-v2-consult"
      aria-labelledby="sa-v2-consult-title"
      id="consultation"
    >
      <div className="sa-v2-consult-inner">
        <div className="sa-v2-consult-card">

          {/* ── Left copy panel ── */}
          <div className="sa-v2-consult-copy">

            {/* Free 1:1 tag */}
            <span className="sa-v2-consult-tag">Free 1:1 counselling</span>

            <h2 id="sa-v2-consult-title" className="sa-v2-consult-title">
              Your Global Education Journey Starts Here.
            </h2>

            <p className="sa-v2-consult-desc">
              Discuss your goals with an expert counsellor. It&apos;s free,
              with no obligation, and focused on what&apos;s right for you.
            </p>

            {/* Bullet checklist */}
            <ul className="sa-v2-consult-bullets" aria-label="What you get">
              {BULLETS.map((b) => (
                <li key={b} className="sa-v2-consult-bullet">
                  <span className="sa-v2-consult-bullet-icon" aria-hidden="true">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Talk to an Expert button */}
            <button
              type="button"
              className="sa-v2-consult-ghost"
              onClick={() => setModalOpen(true)}
            >
              <span className="sa-v2-consult-ghost-ico" aria-hidden="true">
                <FiPhone size={16} />
              </span>
              Talk to an Expert
            </button>
          </div>

          {/* ── Right: glassmorphic form ── */}
          <div className="sa-v2-consult-form-wrap">
            <form className="sa-v2-consult-form" onSubmit={handleSubmit} noValidate>

              <div className="sa-v2-consult-form-head">
                <p className="sa-v2-consult-form-title">Book a free consultation</p>
                <p className="sa-v2-consult-form-sub">Takes less than a minute.</p>
              </div>

              {/* Full name */}
              <label className="sa-v2-consult-field">
                <span className="sa-v2-consult-label">Full name</span>
                <input
                  className="sa-v2-consult-input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                />
              </label>

              {/* Email + Phone side-by-side */}
              <div className="sa-v2-consult-row">
                <label className="sa-v2-consult-field">
                  <span className="sa-v2-consult-label">Email</span>
                  <input
                    className="sa-v2-consult-input"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </label>

                <div className="sa-v2-consult-field">
                  <span className="sa-v2-consult-label">Phone</span>
                  <FormPhoneInput
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    disabled={isSubmitting}
                    containerClass="sa-v2-consult-phone"
                    className="sa-v2-consult-phone-input"
                    placeholder="+00 000 000 0000"
                  />
                </div>
              </div>

              {/* Interested in dropdown */}
              <label className="sa-v2-consult-field">
                <span className="sa-v2-consult-label">Interested in</span>
                <select
                  className="sa-v2-consult-input sa-v2-consult-select"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  {INTEREST_OPTIONS.map((opt) => (
                    <option key={opt} value={opt === "Not sure yet" ? "" : opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="sa-v2-consult-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Book a Free Consultation"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <EnquiryFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        courseName="Study Abroad - Free Consultation"
        customTitle="Talk to an Expert"
        leadPlace="Study Abroad V2 consult — Talk to an Expert"
      />
    </section>
  );
}
