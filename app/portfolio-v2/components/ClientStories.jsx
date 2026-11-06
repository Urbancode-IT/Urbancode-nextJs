"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaPlay, FaPause } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { submitProjectEnquiryForm } from "@/lib/api/api";
import { getLeadSource } from "@/app/utils/leadSource";
import {
  getEmailError,
  getNameError,
  getPhoneError,
  isGibberish,
  validateLeadContact,
} from "@/app/utils/validationUtils";
import { FormPhoneInput } from "@/app/components/common/FormPhoneInput";
import "@/app/components/common/FormPhoneInput.css";
import "./ClientStories.css";

const VIDEO_SRC =
  "/portfolio/client-testimonial-video/lockzie%20testimonial%20final.mp4";

const STORY = {
  eyebrow: "Client Stories",
  title: "How Lockzie grew bookings with a clearer online presence.",
  quote:
    "Customers used to message us for photos of every style, and many stopped replying before they booked. Once our collections were on the website, people could look through the work on their own. Bookings started coming from visitors who had already chosen a style, and we stopped losing them in that back-and-forth.",
};

const HIGHLIGHTS = [
  "Clear product pages visitors can browse on their own",
  "Fewer back-and-forth messages before a booking",
  "A site that matches how your business actually sells",
];

const PROJECT_TYPES = ["Website", "Web App", "Mobile App", "E-commerce"];

const BUSINESS_TYPES = [
  "Salon / beauty",
  "Education / institute",
  "Retail / e-commerce",
  "Healthcare",
  "Finance / tax",
  "Startup / SaaS",
  "Real estate",
  "Other",
];

const BUDGETS = [
  "Under ₹50,000",
  "₹50,000 – ₹1.5 Lakh",
  "₹1.5 – ₹3 Lakh",
  "₹3 Lakh+",
  "Not sure yet",
];

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

const EMPTY_FORM = {
  projectType: "",
  businessType: "",
  businessOther: "",
  budget: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ClientStories() {
  const titleId = useId();
  const videoRef = useRef(null);
  const dialogRef = useRef(null);
  const closeTimerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [ratio, setRatio] = useState(9 / 16);
  const [mounted, setMounted] = useState(false);
  const [formMounted, setFormMounted] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = () => setCurrent(video.currentTime || 0);
    const onMeta = () => {
      setDuration(video.duration || 0);
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        // Use the video’s real aspect ratio so nothing is cropped.
        setRatio(video.videoWidth / video.videoHeight);
      }
    };
    const onEnded = () => {
      setPlaying(false);
      setCurrent(0);
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  useEffect(() => {
    if (!formMounted) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape" && !sending) {
        setFormOpen(false);
        closeTimerRef.current = window.setTimeout(() => setFormMounted(false), 320);
      }
    };
    document.addEventListener("keydown", onKey);
    const focusTimer = window.setTimeout(() => {
      dialogRef.current?.querySelector("input, select, textarea, button")?.focus?.();
    }, 40);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
    };
  }, [formMounted, sending]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    },
    []
  );

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const updateField = (key) => (e) => {
    const value = e.target.value;
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "businessType" && value !== "Other") {
        next.businessOther = "";
      }
      return next;
    });
    setErrors((prev) => ({
      ...prev,
      [key]: "",
      ...(key === "businessType" && value !== "Other" ? { businessOther: "" } : {}),
    }));
    setStatus({ type: "", text: "" });
  };

  const handlePhoneChange = (phoneValue) => {
    setForm((prev) => ({ ...prev, phone: phoneValue || "" }));
    setErrors((prev) => ({ ...prev, phone: "" }));
    setStatus({ type: "", text: "" });
  };

  const openForm = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    setStatus({ type: "", text: "" });
    setErrors({});
    setFormMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setFormOpen(true));
    });
  };

  const closeForm = () => {
    if (sending) return;
    setFormOpen(false);
    closeTimerRef.current = window.setTimeout(() => {
      setFormMounted(false);
    }, 320);
  };

  const validateForm = () => {
    if (honeypot.trim()) {
      setStatus({ type: "err", text: "Unable to submit this form." });
      return false;
    }

    const nextErrors = {};
    const nameError = getNameError(form.name);
    const emailError = getEmailError(form.email);
    const phoneError = getPhoneError(form.phone);

    if (nameError) nextErrors.name = nameError;
    if (emailError) nextErrors.email = emailError;
    if (phoneError) nextErrors.phone = phoneError;

    if (!form.projectType) nextErrors.projectType = "Please select a project type.";
    if (!form.businessType) nextErrors.businessType = "Please select your business type.";
    if (form.businessType === "Other") {
      const other = form.businessOther.trim();
      if (!other) {
        nextErrors.businessOther = "Please tell us about your business.";
      } else if (other.length < 2) {
        nextErrors.businessOther = "Please enter at least 2 characters.";
      } else if (isGibberish(other)) {
        nextErrors.businessOther = "Please enter a valid business description.";
      }
    }
    if (!form.budget) nextErrors.budget = "Please select a budget.";

    if (form.message && isGibberish(form.message)) {
      nextErrors.message = "Please enter a valid message.";
    }

    const spamError = validateLeadContact({
      name: form.name,
      email: form.email,
      phone: form.phone,
    });
    if (spamError && !nextErrors.name && !nextErrors.email && !nextErrors.phone) {
      nextErrors.name = spamError;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    if (!validateForm()) return;

    setSending(true);
    setStatus({ type: "", text: "" });

    const businessLabel =
      form.businessType === "Other"
        ? `Other — ${form.businessOther.trim()}`
        : form.businessType;

    const message = [
      `Project type: ${form.projectType}`,
      `Business: ${businessLabel}`,
      `Budget: ${form.budget}`,
      form.message.trim() ? `Notes: ${form.message.trim()}` : null,
      "Source: Client Stories — Build yours now popup",
    ]
      .filter(Boolean)
      .join("\n");

    const response = await submitProjectEnquiryForm({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: String(form.phone || "").trim(),
      subject: `Build yours — ${form.projectType}`,
      message,
      ...getLeadSource(
        "Portfolio page — Client Stories build popup",
        "Build yours now — Submit"
      ),
    });

    setSending(false);
    if (response.success) {
      setForm(EMPTY_FORM);
      setErrors({});
      setHoneypot("");
      setStatus({
        type: "ok",
        text: "Thanks! We’ll reach out shortly with next steps.",
      });
    } else {
      setStatus({
        type: "err",
        text: response.message || "Could not send. Please try again.",
      });
    }
  };

  const progress = duration > 0 ? (current / duration) * 100 : 0;

  const modal =
    mounted &&
    formMounted &&
    createPortal(
      <div
        className={`np-cs-modal${formOpen ? " is-open" : ""}`}
        role="presentation"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) closeForm();
        }}
      >
        <div
          ref={dialogRef}
          className="np-cs-modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="np-cs-modal-close"
            onClick={closeForm}
            aria-label="Close form"
            disabled={sending}
          >
            ×
          </button>
          <header className="np-cs-modal-head">
            <h3 id={titleId}>Build yours</h3>
            <p>Tell us what you need — we’ll map scope, timeline, and the right build.</p>
          </header>
          <form className="np-cs-form" onSubmit={handleSubmit} noValidate>
            <div className="np-cs-honeypot" aria-hidden="true">
              <label htmlFor="np-cs-company">Company</label>
              <input
                id="np-cs-company"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="np-cs-grid">
              <label className="np-cs-field">
                <span>Project type</span>
                <select
                  value={form.projectType}
                  onChange={updateField("projectType")}
                  aria-invalid={Boolean(errors.projectType)}
                >
                  <option value="">Select</option>
                  {PROJECT_TYPES.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.projectType ? <em>{errors.projectType}</em> : null}
              </label>

              <label className="np-cs-field">
                <span>Business type</span>
                <select
                  value={form.businessType}
                  onChange={updateField("businessType")}
                  aria-invalid={Boolean(errors.businessType)}
                >
                  <option value="">Select</option>
                  {BUSINESS_TYPES.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.businessType ? <em>{errors.businessType}</em> : null}
              </label>

              {form.businessType === "Other" ? (
                <label className="np-cs-field np-cs-field--full">
                  <span>Tell us about your business</span>
                  <input
                    type="text"
                    value={form.businessOther}
                    onChange={updateField("businessOther")}
                    placeholder="e.g. Interior design studio"
                    aria-invalid={Boolean(errors.businessOther)}
                  />
                  {errors.businessOther ? <em>{errors.businessOther}</em> : null}
                </label>
              ) : null}

              <label className="np-cs-field">
                <span>Budget</span>
                <select
                  value={form.budget}
                  onChange={updateField("budget")}
                  aria-invalid={Boolean(errors.budget)}
                >
                  <option value="">Select</option>
                  {BUDGETS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.budget ? <em>{errors.budget}</em> : null}
              </label>

              <label className="np-cs-field">
                <span>Name</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={updateField("name")}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? <em>{errors.name}</em> : null}
              </label>

              <label className="np-cs-field">
                <span>Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={updateField("email")}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? <em>{errors.email}</em> : null}
              </label>

              <div className="np-cs-field np-cs-field--full">
                <span>Phone</span>
                <FormPhoneInput
                  value={form.phone}
                  onChange={handlePhoneChange}
                  error={errors.phone}
                  placeholder="Phone number"
                />
              </div>

              <label className="np-cs-field np-cs-field--full">
                <span>Notes (optional)</span>
                <textarea
                  rows={2}
                  value={form.message}
                  onChange={updateField("message")}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? <em>{errors.message}</em> : null}
              </label>
            </div>

            <button type="submit" className="np-cs-submit" disabled={sending}>
              {sending ? "Sending…" : "Submit"}
              {!sending ? <FiArrowRight aria-hidden /> : null}
            </button>

            {status.text ? (
              <p className={`np-cs-status is-${status.type}`}>{status.text}</p>
            ) : null}
          </form>
        </div>
      </div>,
      document.body
    );

  return (
    <section
      className="np-client-stories"
      id="client-stories"
      aria-labelledby="np-client-stories-title"
    >
      <div className="np-container">
        <div className="np-badge-wrap" style={{ justifyContent: "flex-start" }}>
          <span className="np-pill-badge">{STORY.eyebrow}</span>
        </div>

        <h2 id="np-client-stories-title" className="np-client-stories-title">
          {STORY.title}
        </h2>

        <div className="np-client-stories-grid">
          <div className="np-client-stories-media">
            <div
              className={`np-client-stories-frame${playing ? " is-playing" : ""}`}
              style={{ "--video-ratio": ratio }}
            >
              <span className="np-client-stories-frame-glow" aria-hidden />
              <span className="np-client-stories-frame-spin" aria-hidden />
              <div className="np-client-stories-player">
                <video
                  ref={videoRef}
                  className="np-client-stories-video"
                  src={VIDEO_SRC}
                  playsInline
                  preload="metadata"
                  onClick={togglePlay}
                  aria-label="Lockzie client testimonial video"
                />

                <button
                  type="button"
                  className="np-client-stories-play"
                  onClick={togglePlay}
                  aria-label={playing ? "Pause testimonial video" : "Play testimonial video"}
                >
                  {playing ? <FaPause /> : <FaPlay />}
                </button>

                <div className="np-client-stories-chrome" aria-hidden={!playing}>
                  <span className="np-client-stories-time">
                    {formatTime(current)}
                    {duration > 0 ? ` / ${formatTime(duration)}` : ""}
                  </span>
                  <div className="np-client-stories-bar">
                    <span style={{ width: `${progress}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="np-client-stories-copy">
            <blockquote className="np-client-stories-quote">
              “{STORY.quote.replace(/^“|”$/g, "")}”
            </blockquote>

            <ul className="np-client-stories-points">
              {HIGHLIGHTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="np-client-stories-cta-card">
              <span className="np-client-stories-cta-mark" aria-hidden>
                Build
              </span>
              <div className="np-client-stories-cta-content">
                <div className="np-client-stories-cta-copy">
                  <h3 className="np-client-stories-cta-title">
                    Get a product that wins customers
                  </h3>
                  <p className="np-client-stories-cta-desc">
                    Share your project type, business, and budget — we’ll map scope, timeline, and
                    the right build for growth.
                  </p>
                </div>
                <button
                  type="button"
                  className="np-client-stories-cta-btn"
                  onClick={openForm}
                >
                  Build yours
                  <FiArrowRight aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal}
    </section>
  );
}
