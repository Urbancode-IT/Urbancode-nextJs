'use client';

import Image from "next/image";
import "./Mentor.css";
import { useState } from "react";
import { submitMentorApplication} from "../../lib/api/api";
import { motion, AnimatePresence } from "framer-motion";
// Import static images (auto-optimized by Next.js)
import expertise1 from "@/public/images/mentorImages/mentor1.jpg";
import expertise2 from "@/public/images/mentorImages/mentor2.jpg";
import expertise3 from "@/public/images/mentorImages/mentor3.jpg";
import expertise4 from "@/public/images/mentorImages/mentor4.jpg";
import mentorHero from "@/public/images/mentorImages/mentorHero.jpg";

const Mentor = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      mobile: '',
      experience: '',
      interest: '',
    })
  
 const [status, setStatus] = useState("idle"); 
  // "idle" | "sending" | "success" | "error"
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile, experience, interest } = formData;

    if (!name.trim()) return setStatus("error"), setMessage("Please enter your name.");
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setStatus("error"), setMessage("Please enter a valid email address.");
    if (!/^\d{10}$/.test(mobile.trim()))
      return setStatus("error"), setMessage("Please enter your 10-digit mobile number.");
    if (!experience) return setStatus("error"), setMessage("Please select your experience.");
    if (!interest.trim()) return setStatus("error"), setMessage("Please enter your message.");

    setStatus("sending");
    setMessage("Submitting your application...");

    const result = await submitMentorApplication(formData);

    if (result.success) {
      setStatus("success");
      setMessage("✅ Application submitted successfully!");
      setFormData({ name: '', email: '', mobile: '', experience: '', interest: '' });
      setTimeout(() => setStatus("idle"), 2500);
    } else {
      setStatus("error");
      setMessage(`❌ ${result.message || "Something went wrong. Try again later."}`);
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="mentorpage">
      {/* HERO SECTION */}
      <section className="mentorpage-hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mentorpage-hero-content">
              <h1>
                Share Your <span>Expertise.</span> <br/>Shape <span>Careers.</span>
              </h1>
              <p>Share your expertise. Shape tomorrow's professionals.</p>
            </div>
            <div className="col-lg-5 text-center mentorpage-hero-image">
              <Image
                src={mentorHero}
                alt="Business person"
                className="img-fluid rounded-4"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* MENTOR SECTION */}
      <section className="mentorpage-mentor-section">
        <div className="container text-center">
          <h2 className="mentorpage-section-title">Why Become a Mentor?</h2>
          <p className="mentorpage-section-subtitle">
            Mentoring isn't just about giving back—it's about growing your own professional network, enhancing your leadership skills, and creating lasting impact that echoes through generations.
          </p>
          <div className="mentorpage-mentor-grid">
            {[
              {
                icon: "bi bi-bar-chart-line-fill",
                title: "Enhance Your Skills",
                text: "Develop leadership, communication, and teaching abilities while staying current with industry trends.",
              },
              {
                icon: "bi bi-award-fill",
                title: "Recognition & Rewards",
                text: "Receive mentor certifications, speaking opportunities, and exclusive access to industry events.",
              },
              {
                icon: "bi bi-share-fill",
                title: "Share Your Expertise",
                text: "Transform your professional experience into valuable guidance for the next generation of learners.",
              },
              {
                icon: "bi bi-people-fill",
                title: "Build Your Network",
                text: "Connect with industry professionals, fellow mentors, and ambitious students from around the world.",
              },
              {
                icon: "bi bi-clock-fill",
                title: "Flexible Schedule",
                text: "Mentor on your own terms with flexible time commitments that fit your professional schedule.",
              },
              {
                icon: "bi bi-globe",
                title: "Global Impact",
                text: "Make a meaningful difference in students' careers across different countries and cultures.",
              },
            ].map((item, index) => (
              <div className="mentorpage-mentor-card" key={index}>
                <div className="mentorpage-icon-box">
                  <i className={item.icon}></i>
                </div>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="mentorpage-expertise-section">
        <div className="container text-center">
          <h2 className="mentorpage-expertise-title">In-Demand Expertise Areas</h2>
          <p className="mentorpage-expertise-subtitle">
            Leading technologies and skills that shape the future
          </p>
          <div className="mentorpage-expertise-grid">
            {[ 
              { img: expertise1, title: "Web Development" },
              { img: expertise2, title: "UI/UX Designing" },
              { img: expertise3, title: "Data Science" },
              { img: expertise4, title: "Digital Marketing" },
            ].map((item, i) => (
              <div
                key={i}
                className="mentorpage-expertise-card position-relative overflow-hidden rounded-4"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-fit-cover rounded-4"
                />
                <span className="mentorpage-expertise-text">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOOKING FOR SECTION */}
      <section className="mentorpage-looking-section">
        <div className="container text-center">
          <h2 className="mentorpage-section-title">What We're Looking For</h2>
          <p className="mentorpage-section-subtitle">Quality-first thinkers with a growth mindset.</p>
          <div className="mentorpage-cards-grid">
            {[
              {
                icon: "bi bi-briefcase-fill",
                title: "Professional Experience",
                items: [
                  "3+ years of industry experience",
                  "Current or recent role in your field",
                  "Track record of professional growth",
                  "Experience in team leadership or project management",
                ],
              },
              {
                icon: "bi bi-people-fill",
                title: "Communication Skills",
                items: [
                  "Strong verbal and written communication",
                  "Patience and empathy for learners",
                  "Ability to provide constructive feedback",
                  "Cultural sensitivity and inclusiveness",
                ],
              },
              {
                icon: "bi bi-clock-fill",
                title: "Time Commitment",
                items: [
                  "2-4 hours per week minimum",
                  "Regular availability for sessions",
                  "Responsive to student communications",
                  "Commitment for at least 6 months",
                ],
              },
            ].map((card, index) => (
              <div className="mentorpage-card-item" key={index}>
                <div className="mentorpage-card-icon">
                  <i className={card.icon}></i>
                </div>
                <h5 className="mentorpage-card-title">{card.title}</h5>
                <ul className="mentorpage-card-list">
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORM SECTION */}
      <section className="mentorpage-transform-section">
        <div className="container text-center mentorpage-transform-box">
          <h2 className="mentorpage-transform-title">Ready to Transform Lives?</h2>
          <p className="mentorpage-transform-subtitle">
            Share your expertise, mentor real projects, and see learners land offers.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control custom-input"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-6">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control custom-input"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-6">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  className="form-control custom-input"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-6">
                <label htmlFor="experience">Experience</label>
                <select
                  id="experience"
                  className="form-select custom-input"
                  value={formData.experience}
                  onChange={handleInputChange}
                >
                  <option value="">Select experience</option>
                  <option value="Fresher">Fresher</option>
                  <option value="0-1 year">0-1 year</option>
                  <option value="2-3 years">2-3 years</option>
                  <option value="3+ years">3+ years</option>
                </select>
              </div>

              <div className="col-12">
                <label htmlFor="interest">Your Message</label>
                <textarea
                  id="interest"
                  className="form-control custom-input"
                  rows="3"
                  placeholder="Tell us about your goals"
                  value={formData.interest}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="col-12 text-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mentorpage-shine-btn position-relative"
                >
                  {status === "sending" ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Sending...
                    </>
                  ) : (
                    "Start Journey Today"
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* ✅ Animated Status Message */}
          <AnimatePresence>
            {status !== "idle" && message && (
              <motion.div
                key={status}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`mentor-status-message mt-3 ${
                  status === "success"
                    ? "text-success"
                    : status === "error"
                    ? "text-danger"
                    : "text-muted"
                }`}
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Mentor;
