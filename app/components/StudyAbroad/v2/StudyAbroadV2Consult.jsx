"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
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

const INITIAL = { name: "", email: "", phone: "" };

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
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: nameError,
        confirmButtonColor: "#036c2d",
      });
      return;
    }
    if (emailError) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: emailError,
        confirmButtonColor: "#036c2d",
      });
      return;
    }
    if (phoneError) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: phoneError,
        confirmButtonColor: "#036c2d",
      });
      return;
    }

    setIsSubmitting(true);

    const buttonLabel = (
      e.nativeEvent?.submitter?.innerText || "Book a Free Consultation"
    )
      .replace(/\s+/g, " ")
      .trim();

    const submissionData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      course: "Study Abroad - Free Consultation",
      message: "Book a Free Consultation request from Study Abroad V2 page.",
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
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.message || "Failed to send. Please try again.",
          confirmButtonColor: "#d33",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#d33",
      });
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
          <div className="sa-v2-consult-copy">
            <h2 id="sa-v2-consult-title" className="sa-v2-consult-title">
              Your Global Education Journey Starts Here.
            </h2>
            <p className="sa-v2-consult-desc">
              Discuss your goals with an expert counsellor — free, with no
              obligation.
            </p>
            <button
              type="button"
              className="sa-v2-consult-ghost"
              onClick={() => setModalOpen(true)}
            >
              Talk to an Expert
            </button>
          </div>

          <form className="sa-v2-consult-form" onSubmit={handleSubmit} noValidate>
            <label className="sa-v2-consult-field">
              <span className="sa-v2-consult-label">Full name</span>
              <input
                className="sa-v2-consult-input"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </label>

            <label className="sa-v2-consult-field">
              <span className="sa-v2-consult-label">Email</span>
              <input
                className="sa-v2-consult-input"
                type="email"
                name="email"
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
                placeholder=""
              />
            </div>

            <button
              type="submit"
              className="sa-v2-consult-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Book a Free Consultation"}
            </button>
          </form>
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
