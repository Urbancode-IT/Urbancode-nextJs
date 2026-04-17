'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaCheckCircle, FaAward, FaUniversity, FaSearch } from 'react-icons/fa';
import { submitEnquiryForm } from "@/lib/api/api";
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import { destinations, services, testimonials } from './data';
import './StudyAbroad.css';

const StudyAbroadPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState({ type: "", message: "" });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        education: "",
        course: "",
        message: ""
    });

    const handleEnquireClick = (country) => {
        setSelectedCountry(country);
        setIsModalOpen(true);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus({ type: "", message: "" });

        // Prepare data for existing handler
        const submissionData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            course: `Study Abroad - ${formData.country} (${formData.course})`,
            message: `Education Level: ${formData.education}\nMessage: ${formData.message}`,
            mode: "Online/Offline" // Default for the handler
        };

        try {
            const result = await submitEnquiryForm(submissionData);
            if (result.success) {
                setFormStatus({ type: "success", message: "Thank you! Your consultation request has been sent." });
                setFormData({ name: "", email: "", phone: "", country: "", education: "", course: "", message: "" });
            } else {
                setFormStatus({ type: "error", message: result.message || "Failed to send. Please try again." });
            }
        } catch (error) {
            setFormStatus({ type: "error", message: "Something went wrong. Please try again later." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="study-abroad-container">
            {/* Hero Section */}
            <section className="study-hero">
                <div className="container">
                    <div className="row justify-content-center text-center position-relative py-5">
                        
                        {/* Interactive Floating Milestone Badges */}
                        <div className="floating-container d-none d-lg-block">
                            <motion.div 
                                className="milestone-badge badge-left"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ 
                                    opacity: 1, 
                                    x: 0,
                                    y: [0, -12, 0] 
                                }}
                                transition={{ 
                                    opacity: { duration: 0.5 },
                                    x: { duration: 0.5 },
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                whileHover={{ scale: 1.1, rotate: 2 }}
                            >
                                <div className="badge-icon icon-green"><FaCheckCircle /></div>
                                <div className="badge-content">
                                    <span className="badge-val">98%</span>
                                    <span className="badge-txt">Visa Success</span>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="milestone-badge badge-top-right"
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ 
                                    opacity: 1, 
                                    y: [0, 15, 0] 
                                }}
                                transition={{ 
                                    opacity: { duration: 0.7 },
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                whileHover={{ scale: 1.1, rotate: -2 }}
                            >
                                <div className="badge-icon icon-gold"><FaAward /></div>
                                <div className="badge-content">
                                    <span className="badge-val">100+</span>
                                    <span className="badge-txt">Scholarship Partners</span>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="milestone-badge badge-bottom-right"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ 
                                    opacity: 1, 
                                    x: 0,
                                    y: [0, -18, 0] 
                                }}
                                transition={{ 
                                    opacity: { duration: 0.9 },
                                    x: { duration: 0.9 },
                                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                whileHover={{ scale: 1.1, rotate: 3 }}
                            >
                                <div className="badge-icon icon-blue"><FaUniversity /></div>
                                <div className="badge-content">
                                    <span className="badge-val">Top 1%</span>
                                    <span className="badge-txt">Global University Admits</span>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-lg-9 study-hero-main py-5">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="hero-title-main fw-bold">
                                    Design Your <span className="highlight-box text-shine">International</span><br className="d-none d-sm-block" /> 
                                    Academic Future Today
                                </h1>
                                <p className="hero-subtitle-new mt-3">
                                    Launch your career on the global stage. Urbancode offers strategic guidance for admissions into leading universities in the US, UK, Canada, and beyond with complete scholarship support.
                                </p>

                                <div className="trusted-students-row d-flex align-items-center justify-content-center mt-4">
                                    <div className="student-avatars d-flex">
                                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="student1" className="mini-avatar" />
                                        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="student2" className="mini-avatar ms-n2" />
                                        <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="student3" className="mini-avatar ms-n2" />
                                    </div>
                                    <div className="trusted-plus ms-3">+2k</div>
                                    <span className="trusted-text ms-2">Joined by 1,000+ aspiring global leaders</span>
                                </div>
                                
                                <div className="mt-4">
                                    <motion.button 
                                        onClick={() => document.getElementById('consultation').scrollIntoView({behavior: 'smooth'})} 
                                        className="request-callback-btn"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        Start Your Application
                                    </motion.button>
                                </div>

                                <div className="stats-divider-line mt-5"></div>

                                <div className="hero-trust-row mt-4">
                                    <div className="trust-item">
                                        <span className="trust-val">200+</span> 
                                        <span className="trust-txt">University Tie-ups</span>
                                    </div>
                                    <div className="trust-item">
                                        <span className="trust-val">5000+</span> 
                                        <span className="trust-txt">Success Stories</span>
                                    </div>
                                    <div className="trust-item">
                                        <span className="trust-val">50+</span> 
                                        <span className="trust-txt">Study Abroad Experts</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Destinations Section */}
            <section className="section-padding section-bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-main-title text-shine">Top Study Destinations</h2>
                        <p>Choose your pathway to global excellence. We represent top universities across 8+ major educational hubs worldwide.</p>
                    </div>
                    <div className="row g-4">
                        {destinations.map((dest, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <motion.div 
                                    className="destination-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="destination-img-box">
                                        <img src={dest.image} alt={dest.country} />
                                    </div>
                                    <div className="destination-info">
                                        <h3>{dest.country}</h3>
                                        <p>{dest.description}</p>
                                        <span className="uni-count"><FaUniversity className="me-2" />{dest.universities}</span>
                                        <button className="enquire-btn-mini" onClick={() => handleEnquireClick(dest.country)}>Enquire Now</button>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-main-title text-shine">Our Expert Services</h2>
                        <p>Comprehensive support from planning to your first day on campus. We handle the complexity so you can focus on your future.</p>
                    </div>
                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <motion.div 
                                    className="service-box"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
                                    <h4>{service.title}</h4>
                                    <p className="text-muted">{service.description}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consultation Section */}
            <section id="consultation" className="section-padding consultation-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <motion.div 
                                className="consultation-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3>Book Your Free Expert Consultation</h3>
                                <form onSubmit={handleFormSubmit}>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input type="text" name="name" className="form-control" placeholder="John Doe" required value={formData.name} onChange={handleFormChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Email Address</label>
                                                <input type="email" name="email" className="form-control" placeholder="john@example.com" required value={formData.email} onChange={handleFormChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Phone Number</label>
                                                <input type="tel" name="phone" className="form-control" placeholder="9876543210" required value={formData.phone} onChange={handleFormChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Preferred Destination</label>
                                                <select name="country" className="form-select" required value={formData.country} onChange={handleFormChange}>
                                                    <option value="">Select Country</option>
                                                    <option value="USA">USA</option>
                                                    <option value="UK">UK</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="Ireland">Ireland</option>
                                                    <option value="Singapore">Singapore</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Highest Qualification</label>
                                                <select name="education" className="form-select" required value={formData.education} onChange={handleFormChange}>
                                                    <option value="">Select Level</option>
                                                    <option value="12th Standard">12th Standard</option>
                                                    <option value="Undergraduate">Undergraduate</option>
                                                    <option value="Postgraduate">Postgraduate</option>
                                                    <option value="PhD">PhD</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Preferred Course</label>
                                                <input type="text" name="course" className="form-control" placeholder="MS in Computer Science" required value={formData.course} onChange={handleFormChange} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Message (Optional)</label>
                                                <textarea name="message" className="form-control" rows="4" placeholder="Tell us about your goals..." value={formData.message} onChange={handleFormChange}></textarea>
                                            </div>
                                        </div>
                                        
                                        {/* Status Message */}
                                        {formStatus.message && (
                                            <div className={`col-12 alert alert-${formStatus.type === 'success' ? 'success' : 'danger'}`}>
                                                {formStatus.message}
                                            </div>
                                        )}

                                        <div className="col-12">
                                            <button type="submit" className="submit-btn-lg" disabled={isSubmitting}>
                                                {isSubmitting ? (
                                                    <><span className="spinner-border spinner-border-sm me-2"></span> Sending Request...</>
                                                ) : "Schedule My Free Consultation"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-main-title text-shine">Success Stories</h2>
                        <p>Join hundreds of students who realized their dreams through our expert guidance and support.</p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {testimonials.map((test, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <motion.div 
                                    className="test-card"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="test-header">
                                        <img src={test.image} alt={test.name} className="test-avatar" />
                                        <div className="test-user">
                                            <h5>{test.name}</h5>
                                            <span>{test.university}</span>
                                        </div>
                                    </div>
                                    <div className="rating-stars">
                                        {[...Array(test.rating)].map((_, i) => <FaStar key={i} />)}
                                    </div>
                                    <p className="test-text">
                                        <FaQuoteLeft className="me-2 opacity-25" />
                                        {test.review}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enquiry Modal */}
            <EnquiryFormModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                courseName={`Study Abroad - ${selectedCountry}`} 
            />
        </div>
    );
};

export default StudyAbroadPage;
