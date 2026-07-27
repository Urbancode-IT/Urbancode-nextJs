'use client';
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { sendContactMessage } from "@/lib/api/api";
import { goToThankYou } from "@/lib/navigation/goToThankYou";
import Swal from 'sweetalert2';
import "./ContactUs.css";
import CinematicLoader from "./CinematicLoader";

import { FormInput, FormSelect, FormTextarea, FormButton, FormCard } from "@/app/components/common/FormUI";

const ContactUs = ({ redirectUrl = '/thankyou' }) => {
  const searchParams = useSearchParams();
  const courseFromUrl = searchParams.get('course');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    countryCode: "+91",
    interest: courseFromUrl ? "Course Enquiry" : "",
    selectedCourse: courseFromUrl || "",
    convenientTime: "",
  });
  const [loading, setLoading] = useState(false);
  const [activeMap, setActiveMap] = useState(0);
  const [showLoader, setShowLoader] = useState(false);

  // alternate maps every 2.5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMap((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // handle input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // validation logic
  const validateForm = () => {
    const { name, email, mobile, countryCode, interest, selectedCourse, convenientTime } = formData;

    if (!name.trim()) return "Name is required.";
    if (name.trim().length < 3) return "Name must be at least 3 characters.";
    
    if (!email.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
    
    if (!mobile.trim()) return "Mobile number is required.";
    
    // Country specific validation
    const cleanMobile = mobile.replace(/\D/g, '');
    if (countryCode === "+91") {
      if (cleanMobile.length !== 10) return "Indian mobile number must be 10 digits.";
      if (!/^[6-9]\d{9}$/.test(cleanMobile)) return "Please enter a valid Indian mobile number.";
    } else if (countryCode === "+1") {
      if (cleanMobile.length !== 10) return "USA/Canada mobile number must be 10 digits.";
    } else if (countryCode === "+971") {
      if (cleanMobile.length !== 9) return "UAE mobile number must be 9 digits.";
    } else {
      if (cleanMobile.length < 7 || cleanMobile.length > 15) return "Please enter a valid mobile number.";
    }
    
    if (!interest.trim()) return "Please select an interest.";
    if (interest === "Course Enquiry" && !selectedCourse) return "Please select a course.";
    if (!convenientTime) return "Please select a convenient time for call.";

    const consonantMashRegex = /[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]{7,}/;
    if (consonantMashRegex.test(name)) return "Invalid input detected in name.";

    return null;
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      Swal.fire({ icon: 'warning', title: 'Validation Error', text: error, confirmButtonColor: '#036c2d' });
      return;
    }

    setLoading(true);
    const submissionData = {
      ...formData,
      mobile: `${formData.countryCode} ${formData.mobile}`,
      message: `Interest: ${formData.interest}${formData.selectedCourse ? ' - ' + formData.selectedCourse : ''} | Convenient Time: ${formData.convenientTime}`
    };
    const response = await sendContactMessage(submissionData);
    setLoading(false);

    if (response.success) {
      Swal.fire({ icon: 'success', title: 'Success!', text: 'Your message has been sent successfully.', confirmButtonColor: '#036c2d' });
      goToThankYou(redirectUrl);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        countryCode: "+91",
        interest: "",
        selectedCourse: "",
        convenientTime: "",
      });
    } else {
      Swal.fire({ icon: 'error', title: 'Oops...', text: response.message || "Failed to send message. Please try again.", confirmButtonColor: '#d33' });
    }
  };

  const interestOptions = [
    "Course Enquiry",
    "Placement Assistance",
    "Internship",
    "Mentorship",
    "Franchise",
    "Corporate Training",
    "School Tie-up",
    "College Tie-up",
    "Partnership",
    "Sponsorship",
    "Bulk Hiring",
    "Career with Urbancode",
    "Other"
  ];

  const courseOptions = [
    "MERN Stack Development",
    "MEAN Stack Development",
    "Python Full Stack Development",
    "Java Full Stack Development",
    "Software Testing (Selenium & Playwright)",
    "UI/UX Design",
    "Data Science & AI",
    "Digital Marketing",
    "AWS & DevOps",
    "CCNA Networking",
    "React Native Development",
    "Cyber Security",
    "Kidspace Coding Courses",
    "Other"
  ];

  const timeSlots = [
    "09:00 AM - 12:00 PM",
    "12:00 PM - 03:00 PM",
    "03:00 PM - 06:00 PM",
    "06:00 PM - 09:00 PM",
    "Any Time"
  ];

  const countryCodes = [
    { label: "IND +91", value: "+91" },
    { label: "USA +1", value: "+1" },
    { label: "UK +44", value: "+44" },
    { label: "UAE +971", value: "+971" },
    { label: "AUS +61", value: "+61" },
    { label: "CAN +1", value: "+1" },
    { label: "SGP +65", value: "+65" },
    { label: "MYS +60", value: "+60" },
  ];

  return (
    <>
      {/* ── Cinematic Video Loader ── */}
      {showLoader && (
        <CinematicLoader onComplete={() => setShowLoader(false)} />
      )}

      <section
        id="contactform"
        className={`contact-section contact-us-page${showLoader ? ' contact-hidden' : ' contact-revealed'}`}
      >
      <div className="contact-header">
        <h2>Contact Us</h2>
        <div className="header-line"></div>
        <p>
          We'd love to hear from you! Whether you have a question about our
          services, need support, or just want to say hello—our team is always
          ready to help.
        </p>
        <Link href="/feedback" className="feedback-form-btn">
          Share Your Feedback <i className="fas fa-comment-dots"></i>
        </Link>
      </div>

      <div className="contact-content">
        {/* Left: Form Area */}
        <div className="contact-form-container" style={{ flex: '1.2' }}>
          <FormCard title="Get in Touch" className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="row g-2">
                <div className="col-md-6">
                  <FormInput
                    // label="Name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="col-md-6">
                  <FormInput
                    // label="Email ID"
                    type="email"
                    name="email"
                    placeholder="Enter mail ID"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="col-12">
                  <div className="row g-2 align-items-end">
                    <div className="col-auto" style={{ minWidth: '120px' }}>
                      <FormSelect
                          // label="Code"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        options={countryCodes}
                        disabled={loading}
                        className="ps-2 pe-4"
                      />
                    </div>
                    <div className="col">
                      <FormInput
                        // label="Mobile Number"
                        type="tel"
                        name="mobile"
                        placeholder="Number"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <FormSelect
                    // label="Interested In"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    options={interestOptions}
                    placeholder="Select interest"
                    required
                    disabled={loading}
                  />
                </div>

                <div className="col-md-6">
                  <FormSelect
                    // label="Convenient Time to Call"
                    name="convenientTime"
                    value={formData.convenientTime}
                    onChange={handleInputChange}
                    options={timeSlots}
                    placeholder="Select time"
                    required
                    disabled={loading}
                  />
                </div>

                {formData.interest === "Course Enquiry" && (
                  <div className="col-12">
                    <FormSelect
                      // label="Select Course"
                      name="selectedCourse"
                      value={formData.selectedCourse}
                      onChange={handleInputChange}
                      options={courseOptions}
                      placeholder="Choose exact course"
                      required
                      disabled={loading}
                    />
                  </div>
                )}



                <div className="col-12 mt-4 text-center">
                  <FormButton type="submit" variant="success" className="px-5 py-2" loading={loading}>
                    {loading ? "Sending Message..." : "Submit"}
                  </FormButton>
                </div>
              </div>
            </form>
          </FormCard>

          {/* Contact Details - below form */}
          <div className="general-details-container">
            <h3 className="branches-title">Contact Details</h3>
            <div className="general-details-grid">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98787 98797</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>admin@urbancode.in</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-building"></i>
                <div>
                  <h4>Company</h4>
                  <p>Urbancode Edutech Solutions Pvt Ltd</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-file-invoice"></i>
                <div>
                  <h4>GST No</h4>
                  <p>33AADCU726Q1ZR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Right: Info + Maps */}
        <div className="contact-info">
          <div className="map-box">
            <div className="map-slider" style={{ transform: `translateX(-${activeMap * (100 / 3)}%)` }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6988594264685!2d80.21742727608103!3d12.991102787326096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52675e83808383%3A0x34ba42591d2df4f1!2sUrbancode%20Training%20and%20Solutions!5e0!3m2!1sen!2sin!4v1759989388834!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Urbancode Pallikaranai"
              ></iframe>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.46718187897!2d80.20756157608038!3d12.941929887370714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4459863a4cda389d%3A0x886df1337be63502!2sUrbancode%20Training%20and%20Solutions!5e0!3m2!1sen!2sin!4v1759989548085!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Urbancode Velachery"
              ></iframe>

             <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.893055021927!2d77.724389!3d8.69871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0413c4ce75c0fd%3A0x4e3fe58c93ab7a34!2sUrbancode%20Training%20and%20Solutions!5e0!3m2!1sen!2sin!4v1759989999999!5m2!1sen!2sin"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Urbancode Tirunelveli"
></iframe>
            </div>
          </div>

          {/* Branches Section */}
          <div className="branches-container">
            <h3 className="branches-title">Our Branches</h3>
            <div className="branch-cards-grid">
              
              {/* Velachery Card */}
              <div className="branch-card">
                <div className="branch-header">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Velachery (Chennai)</h4>
                </div>
                <p className="branch-address">
                  52/159, Velachery Rd, next to Guru Nanak College, near Phoenix Marketcity, Anna Garden, Velachery, Chennai, Tamil Nadu 600042
                </p>
                <a 
                  href="https://www.google.com/maps?cid=9830790481062909186" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="branch-map-link"
                >
                  <i className="fas fa-directions"></i> View on Google Maps
                </a>
              </div>

              {/* Pallikaranai Card */}
              <div className="branch-card">
                <div className="branch-header">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Pallikaranai (Chennai)</h4>
                </div>
                <p className="branch-address">
                  9/29, 5th St, Kamakoti Nagar, Pallikaranai, Chennai, Tamil Nadu, 600100
                </p>
                <a 
                  href="https://www.google.com/maps?cid=3800681766627067121" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="branch-map-link"
                >
                  <i className="fas fa-directions"></i> View on Google Maps
                </a>
              </div>

              {/* Tirunelveli Card - Highlighted as new branch */}
              <div className="branch-card new-branch-card">
                <span className="new-branch-badge"><span className="pulse-dot"></span> NEW BRANCH</span>
                <div className="branch-header">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Tirunelveli Branch</h4>
                </div>
                <p className="branch-address">
                  Fab Sapphire Towers, No.29/5, 4th Floor, South Bye Pass Road, Tirunelveli – 627005
                </p>
                <a href="tel:+919967699674" className="branch-phone-link">
                  <i className="fas fa-phone"></i> +91 99676 99674
                </a>
                <a 
                  href="https://maps.app.goo.gl/6VQpva4Me3jy1QpY6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="branch-map-link"
                >
                  <i className="fas fa-directions"></i> View on Google Maps
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default ContactUs;
