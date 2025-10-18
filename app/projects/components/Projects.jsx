'use client';
import React from 'react';
import './projects.css';
import { useState } from 'react';
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
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
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
    <div className="projects-page pt-5">
      {/* HERO SECTION */}
      <section className="ph-hero-section ">
        <div className="container ph-hero-container">
          <div className="ph-left-content">
            <h2>
              <span className="large-text">Premium <span className="text-shine">Web Development</span></span><br />
              Building Digital Excellence<br />
              With Innovation
            </h2>
            <p>Crafting cutting-edge web solutions for modern businesses</p>
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
      <h2 className="projects-title text-shine">Our Featured Projects</h2>
      <p className="projects-desc">Transform businesses and create exceptional digital experiences</p>
    </div>

    <div className="row g-4 justify-content-center">
      {projectsData.map((project, index) => (
        <div key={index} className="col-md-4">
          <div className="project-card">
            <div className="img-wrap">
              <img src={project.image} alt={project.title} />
              <div className="overlay"></div>
              <div className="icons"><a href="#">View Site</a></div>
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
            <div className="about-subtitle">
              <div className="dot"></div>
              <span>About Us</span>
              <div className="dot"></div>
            </div>
            <h2>Crafting Digital <span className="gradient-text">Excellence</span></h2>
            <p>Our team combines creativity with technical expertise to deliver solutions that drive business growth.</p>
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
        <div className="container text-center">
          <h2 className="client-heading">
            Trusted by <span className="client-accent-text">Leading Companies</span>
          </h2>
          <p className="client-subheading mb-5">
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

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-5">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="d-flex justify-content-center align-items-center gap-2 text-success mb-2">
              <div className="rounded-circle bg-success" style={{width: '8px', height: '8px'}}></div>
              <small className="fw-bold text-uppercase">Testimonials</small>
              <div className="rounded-circle bg-success" style={{width: '8px', height: '8px'}}></div>
            </div>
            <h2 className="fw-bold" style={{fontSize: '2.5rem'}}>
              What Our <span className="text-success">Clients Say</span>
            </h2>
            <p className="text-muted mt-3" style={{maxWidth: '700px', margin: 'auto'}}>
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="row g-4">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="testimonial-card card h-100 border-0 shadow-sm position-relative">
                  <i className="bi bi-quote"></i>
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <img src={testimonial.avatar} alt={testimonial.name} className="me-3" />
                      <div>
                        <h5 className="mb-0 fw-bold">{testimonial.name}</h5>
                        <small>{testimonial.position}</small>
                      </div>
                    </div>
                    <div className="mb-2">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p className="flex-grow-1">{testimonial.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="row text-center mt-5 g-3">
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

      {/* CONTACT SECTION */}
      <section id="projectform" className="projectform-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-flex justify-content-center align-items-center gap-2 text-success mb-2">
              <div className="rounded-circle bg-success" style={{width: '8px', height: '8px'}}></div>
              <small className="fw-bold text-uppercase">Contact Us</small>
              <div className="rounded-circle bg-success" style={{width: '8px', height: '8px'}}></div>
            </div>
            <h2 className="fw-bold" style={{fontSize: '2.5rem'}}>
              Let's Build Something <span className="text-success" style={{background: 'linear-gradient(to right, #10b981, #059669)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>Amazing</span>
            </h2>
            <p className="text-muted mt-3" style={{maxWidth: '700px', margin: 'auto'}}>
              Ready to transform your digital presence? We'd love to hear from you.
            </p>
          </div>

          <div className="row g-4 align-items-center" id="contact">
            {/* Left Info */}
            <div className="col-lg-5">
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
                className={`mt-3 text-center fw-semibold ${
                  status.type === "success" ? "text-success" : "text-danger"
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
    </div>
  );
};

const projectsData = [
  {
    title: "PETROKENS",
    description: "Engineering & consultancy delivering innovative solutions across oil & gas, infrastructure, and industrial projects.",
    image: "/images/ProjectPageImages/Petrokens.png" // <-- notice the leading slash
  },
  {
    title: "TECHTRENDZ",
    description: "IT consulting services dedicated to helping businesses reach their full potential through technology.",
    image: "/images/ProjectPageImages/Techtrendz.png"
  },
  {
    title: "SYNERGY",
    description: "Tax consulting, GST filing, and financial training services to empower clients with expert tax education.",
    image: "/images/ProjectPageImages/Synergy.png"
  },
  {
    title: "BODHISHIKSHAK",
    description: "High-quality online education in Mathematics, Science, and English with personalized learning approach.",
    image: "/images/ProjectPageImages/Bodhishikshak.png"
  },
  {
    title: "JOBZENTER",
    description: "Software training and placements specializing in Full Stack Development, Software Testing, and Business Intelligence.",
    image: "/images/ProjectPageImages/Jobzenter.png"
  },
  {
    title: "CRAFTLOGICALLYME",
    description: "Natural stone jewelry featuring authentic stones like turquoise, amethyst, and jade, handcrafted to perfection.",
    image: "/images/ProjectPageImages/Craftlogicallyme.png"
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
    name: "Sarah Johnson",
    position: "CEO at Petrokens",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    quote: "From concept to completion, Urbancode’s web development team exceeded our expectations. They created a robust, visually appealing website that aligns perfectly with our industrial brand. The attention to technical detail and responsiveness made the entire experience smooth and efficient."
  },
  {
    name: "Michael Chen",
    position: "Founder of Synergy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    quote: "Urbancode Edutech gave our firm the digital presence it truly deserved. The website they built is sleek, professional, and perfectly aligned with our financial services. Their team understood our goals, delivered on time, and supported us even after launch — truly a reliable tech partner!"
  },
  {
    name: "Emma Rodriguez",
    position: "CEO at TechTrendz",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    quote: "The Urbancode team did a phenomenal job building our tech services website. They combined creativity with technical precision to deliver a modern, responsive site that perfectly reflects our brand identity. Communication and delivery timelines were spot on!"
  },
  {
    name: "David Park",
    position: "Director at Bodhi Shikshak",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    quote: "Working with Urbancode was a great decision. Their team patiently worked with us through every stage — from content planning to launch. The final website looks elegant, loads fast, and has received wonderful feedback from our learners and educators alike."
  },
  {
    name: "Lisa Thompson",
    position: "Founder at Craftlogically Me",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&h=80&fit=crop&crop=face",
    quote: "Collaborating with Urbancode Edutech to build our website was a fantastic experience. They understood the essence of Craftlogically Me — our handmade jewelry, resin art, and home décor — and translated it into a beautiful, user-friendly digital space. The team was professional, creative, and always responsive. Our online presence now truly reflects the passion and craftsmanship behind every piece we create. — Ramaa, Founder, Craftlogically Me"
  },
  {
    name: "James Wilson",
    position: "Founder of We Penit",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    quote: "Working with Urbancode Edutech has been an incredible experience. They understood our vision for We Pen It and crafted a website that perfectly reflects our creative writing and content services. The team was attentive, professional, and ensured the final product was both visually appealing and highly functional. Our online presence has never looked better"
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