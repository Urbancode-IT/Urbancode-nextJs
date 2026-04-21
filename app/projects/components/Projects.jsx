'use client';
import React from 'react';
import './projects.css';
import { useState } from 'react';
import axios from 'axios';
import { submitProjectEnquiryForm } from '@/lib/api/api';
const Projects = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // basic frontend validation
  const validate = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters, spaces, hyphens, and apostrophes";
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    } else if (formData.email.length > 255) {
      newErrors.email = "Email is too long";
    }
    
    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else {
      const cleanPhone = formData.phone.replace(/\D/g, '');
      if (cleanPhone.length !== 10) {
        newErrors.phone = "Phone must be exactly 10 digits";
      } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        newErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
      }
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message is too long (max 1000 characters)";
    }
    
    return newErrors;
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // call your backend API endpoint
      const res = await axios.post(
        "https://uc-backend-tpje.onrender.com/api/send-email/contact",
        formData
      );

      if (res.status === 200) {
        setStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="projects-page">
      {/* HERO SECTION */}
      <section className="ph-hero-section ">
        <div className="container ph-hero-container">
          <div className="ph-left-content">
            <span className="ph-hero-badge section-eyebrow">Premium</span>
            <h1 className="ph-main-title">
              Web and App <span className="text-shine">Development</span>
            </h1>
            <h2 className="ph-sub-heading">
              Building digital excellence with innovation
            </h2>
            <p className="ph-hero-desc">Crafting cutting-edge web solutions for modern businesses</p>
            <div className="ph-btn-group">
              <a href="#projects" className="ph-btn-explore">Explore Our Work</a>
              <a href="#contact" className="ph-btn-contact">Get in Touch</a>
            </div>
          </div>
          <div className="ph-right-image"></div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <div className="container text-center">
          <div className="projects-header mb-5">
            <p className="section-eyebrow">Our Work</p>
            <h2 className="section-main-title">Our Featured <span className="text-shine">Projects</span></h2>
            <p className="section-subtitle">Transform businesses and create exceptional digital experiences</p>
          </div>

          <div className="row g-4 justify-content-center">
            {projectsData.map((project, index) => (
              <div key={index} className="col-md-4">
                <div className="project-card h-100">
                  <div className="img-wrap">
                    <img src={project.image} alt={project.title} />
                    <div className="overlay"></div>
                    <div className="icons"><a href={project.url}>View Site</a></div>
                  </div>
                  <div className="card-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ABOUT US SECTION */}
      <section id="about-section" className="about-section">
        <div className="about-container">
          <div className="about-header">
            <p className="section-eyebrow">About Us</p>
            <h2 className="section-main-title">Crafting Digital <span className="text-shine">Excellence</span></h2>
            <p className="section-subtitle">Our team combines creativity with technical expertise to deliver solutions that drive business growth.</p>
          </div>

          <div className="about-stats">
            {statsData.map((stat, index) => (
              <div key={index} className="about-stat">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="about-values">
            {valuesData.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT SECTION */}
      <section className="client-section py-5">
        <div className="text-center">
          <p className="section-eyebrow">Our Clients</p>
          <h2 className="section-main-title">
            Trusted by <span className="text-shine">Leading Companies</span>
          </h2>
          <p className="section-subtitle mb-5">
            We've had the privilege of working with amazing companies across various industries.
          </p>

          <div className="client-marquee-wrapper">
            {/* Row 1 */}
            <div className="client-marquee-row client-marquee-left">
              {clientLogos.map((logo, index) => (
                <div key={index} className="client-logo">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="client-marquee-row client-marquee-right">
              {[...clientLogos].reverse().map((logo, index) => (
                <div key={index} className="client-logo">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CONTACT SECTION */}
      <section id="projectform" className="projectform-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-eyebrow">Contact Us</p>
            <h2 className="section-main-title">
              Let's Build Something <span className="text-shine">Amazing</span>
            </h2>
            <p className="section-subtitle mt-3">
              Ready to transform your digital presence? We'd love to hear from you.
            </p>
          </div>

          <div className="row g-4 align-items-center" id="contact">
            {/* Left Info */}
            <div className="col-lg-5" style={{ height: '445px' }}>
              <div className="p-4 rounded-4 shadow-sm bg-white h-100">
                <h4 className="fw-bold mb-4">Get in Touch</h4>
                <p className="text-muted mb-4">
                  Whether you have a specific project in mind or just want to explore possibilities, our team is ready to collaborate.
                </p>

                {contactInfo.map((info, index) => (
                  <div key={index} className="d-flex align-items-center mb-4">
                    <div className="me-3 text-success fs-4">
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">{info.title}</h6>
                      <p className="text-muted mb-0">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="col-lg-7">
              <div className="p-4 rounded-4 shadow-lg bg-light">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        minLength="3"
                        maxLength="100"
                        pattern="^[a-zA-Z\s'-]+$"
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        maxLength="255"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label fw-semibold">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        required
                        inputMode="numeric"
                        maxLength="10"
                        pattern="^\d{10}$"
                        disabled={isSubmitting}
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">{errors.phone}</div>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="col-md-6">
                      <label htmlFor="subject" className="form-label fw-semibold">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project inquiry"
                        required
                        minLength="5"
                        maxLength="200"
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <div className="invalid-feedback">{errors.subject}</div>
                      )}
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-semibold">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className={`form-control ${errors.message ? "is-invalid" : ""}`}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                        minLength="10"
                        maxLength="1000"
                        disabled={isSubmitting}
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                    </div>

                    {/* Submit button */}
                    <div className="col-12 text-end">
                      <button
                        type="submit"
                        className="btn btn-success px-5 py-2 fw-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}{" "}
                        <i className="bi bi-send ms-2"></i>
                      </button>
                    </div>

                    {/* Status message */}
                    {status.message && (
                      <div
                        className={`mt-3 text-center fw-semibold ${status.type === "success" ? "text-success" : "text-danger"
                          }`}
                      >
                        {status.message}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Auto Scrolling */}
      <section id="testimonials" className="testimonials-section py-5">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-eyebrow">Testimonials</p>
            <h2 className="section-main-title">What Our <span className="text-shine">Clients Say</span></h2>
          </div>
        </div>

        <div className="testimonials-marquee-wrapper">
          <div className="testimonials-marquee">
            {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
              <div key={index} className="testimonial-scroll-card">
                <div className="testimonial-scroll-content">
                  <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <small className="text-muted">{testimonial.position}</small>
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-4">
          <div className="row text-center g-3">
            {trustData.map((trust, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="trust-card">
                  <h3 className="fw-bold">{trust.value}</h3>
                  <small>{trust.label}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const projectsData = [
  {
    title: "PETROKENS",
    description: "Engineering & consultancy delivering innovative solutions across oil & gas, infrastructure, and industrial projects.",
    image: "/images/ProjectPageImages/Petrokens.png", // <-- notice the leading slash
    url: "https://www.petrokens.com/"
  },
  {
    title: "TECHTRENDZ",
    description: "IT consulting services dedicated to helping businesses reach their full potential through technology.",
    image: "/images/ProjectPageImages/Techtrendz.png",
    url: "https://tech-trendz.be/"
  },
  {
    title: "SYNERGY",
    description: "Tax consulting, GST filing, and financial training services to empower clients with expert tax education.",
    image: "/images/ProjectPageImages/Synergy.png",
    url: "https://www.synergytaxed.com/"
  },
  {
    title: "BODHISHIKSHAK",
    description: "High-quality online education in Mathematics, Science, and English with personalized learning approach.",
    image: "/images/ProjectPageImages/Bodhishikshak.png",
    url: "https://bodhishikshak.com/about.html"
  },
  {
    title: "JOBZENTER",
    description: "Software training and placements specializing in Full Stack Development, Software Testing, and Business Intelligence.",
    image: "/images/ProjectPageImages/Jobzenter.png",
    url: "https://jobzenter.in/"
  },
  {
    title: "CRAFTLOGICALLYME",
    description: "Natural stone jewelry featuring authentic stones like turquoise, amethyst, and jade, handcrafted to perfection.",
    image: "/images/ProjectPageImages/Craftlogicallyme.png",
    url: "https://www.craftlogicallyme.com/home-decor"
  }
];


const statsData = [
  { icon: "bi bi-award", value: "5+", label: "Years Experience" },
  { icon: "bi bi-people", value: "25+", label: "Happy Clients" },
  { icon: "bi bi-lightning", value: "50+", label: "Projects Completed" },
  { icon: "bi bi-bullseye", value: "98%", label: "Success Rate" }
];

const valuesData = [
  { icon: "bi bi-lightning", title: "Innovation First", description: "We leverage modern technologies to create solutions that push boundaries." },
  { icon: "bi bi-people", title: "Client-Centric", description: "Your vision drives our mission. We collaborate closely to exceed expectations." },
  { icon: "bi bi-award", title: "Quality Assured", description: "Rigorous testing and attention to detail ensure flawless user experiences." },
  { icon: "bi bi-bullseye", title: "Results Driven", description: "We measure success by your growth and the impact we create together." }
];

const clientLogos = [
  { src: "/images/ProjectPageImages/logo1.png", alt: "Client 1" },
  { src: "/images/ProjectPageImages/logo2.png", alt: "Client 2" },
  { src: "/images/ProjectPageImages/logo3.png", alt: "Client 3" },
  { src: "/images/ProjectPageImages/logo4.webp", alt: "Client 4" },
  { src: "/images/ProjectPageImages/logo5.png", alt: "Client 5" },
  { src: "/images/ProjectPageImages/logo6.webp", alt: "Client 6" },
  { src: "/images/ProjectPageImages/logo7.png", alt: "Client 7" },
  { src: "/images/ProjectPageImages/logo8.png", alt: "Client 8" },
  { src: "/images/ProjectPageImages/logo9.png", alt: "Client 9" },
  { src: "/images/ProjectPageImages/logo10.png", alt: "Client 10" }
];

const testimonialsData = [
  {
    name: "Govindaraj Murali",
    position: "CEO at Petrokens",
    avatar: "/images/ProjectPageImages/petrologo.png",
    quote: "Robust website that aligns perfectly with our brand."
  },
  {
    name: "Uma",
    position: "Founder of Synergy",
    avatar: "/images/ProjectPageImages/synlogo.png",
    quote: "Sleek, professional digital presence on time."
  },
  {
    name: "Iswarya Balasubramani",
    position: "Founder & Director at TechTrendz",
    avatar: "/images/ProjectPageImages/techilogo.jpg",
    quote: "Modern, responsive site with creative precision."
  },
  {
    name: "Anu Revathi E",
    position: "Founder at Bodhi Shikshak",
    avatar: "/images/ProjectPageImages/logo5.png",
    quote: "Elegant website with wonderful user feedback."
  },
  {
    name: "Ramaa Ayyappan",
    position: "Founder at Craftlogically Me",
    avatar: "/images/ProjectPageImages/logo4.webp",
    quote: "Beautiful, user-friendly digital space created."
  },
  {
    name: "Krithika Varshini",
    position: "Founder of We Penit",
    avatar: "/images/ProjectPageImages/wepenitlogo.jpg",
    quote: "Website perfectly reflects our creative services."
  }
];

const trustData = [
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "30+", label: "Five Star Reviews" },
  { value: "90%", label: "Repeat Clients" }
];

const contactInfo = [
  { icon: "bi bi-envelope", title: "Email", value: "admin@urbancode.in" },
  { icon: "bi bi-telephone", title: "Phone", value: "+91 987 87 987 97" },
  { icon: "bi bi-geo-alt", title: "Location", value: "Velachery | Pallikaranai | Chennai" }
];

export default Projects;
