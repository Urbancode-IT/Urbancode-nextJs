'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { sendContactMessage } from "@/lib/api/api";
import { goToThankYou } from "@/lib/navigation/goToThankYou";
import Swal from 'sweetalert2';
import "./ContactUs.css";
import CinematicLoader from "./CinematicLoader";

import { FormInput, FormSelect, FormTextarea, FormButton, FormCard } from "@/app/components/common/FormUI";
import { FormPhoneInput } from "@/app/components/common/FormPhoneInput";
import { Honeypot } from "@/app/components/common/Honeypot";
import { useEnquiryForm } from "@/app/hooks/useEnquiryForm";
import { contactUsSchema } from "@/app/schemas/enquirySchema";
import { Controller } from "react-hook-form";

const ContactUs = ({ redirectUrl = '/thankyou' }) => {
  const searchParams = useSearchParams();
  const courseFromUrl = searchParams.get('course');

  const [activeMap, setActiveMap] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [courseOptions, setCourseOptions] = useState(["Loading courses..."]);

  // alternate maps every 2.5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMap((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Fetch courses dynamically
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/courses');
        const data = await res.json();
        if (data.courses && Array.isArray(data.courses)) {
          const mappedCourses = data.courses.map(c => typeof c === 'object' ? c.name || c.course_name || c.course : c);
          if (mappedCourses.length > 0) {
            setCourseOptions(mappedCourses);
          }
        }
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    };
    fetchCourses();
  }, []);

  const {
    register,
    control,
    submitHandler,
    isSubmitting,
    watch,
    formState: { errors }
  } = useEnquiryForm({
    schema: contactUsSchema,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: courseFromUrl ? "Course Enquiry" : "",
      selectedCourse: courseFromUrl || "",
      convenientTime: "",
      honeypot: ""
    },
    onSubmitCallback: async (data, reset) => {
      const submissionData = {
        name: data.name.trim(),
        email: data.email.trim(),
        mobile: data.phone,
        interest: data.interest,
        selectedCourse: data.interest === 'Course Enquiry' ? data.selectedCourse : '',
        convenientTime: data.convenientTime,
        message: `Interest: ${data.interest}${data.selectedCourse ? ' - ' + data.selectedCourse : ''} | Convenient Time: ${data.convenientTime}`
      };
      
      const response = await sendContactMessage(submissionData);

      if (response.success) {
        Swal.fire({ icon: 'success', title: 'Success!', text: 'Your message has been sent successfully.', confirmButtonColor: '#036c2d' });
        goToThankYou(redirectUrl);
        reset();
      } else {
        throw new Error(response.message || "Failed to send message. Please try again.");
      }
    }
  });

  const watchInterest = watch("interest");

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

  const timeSlots = [
    "09:00 AM - 12:00 PM",
    "12:00 PM - 03:00 PM",
    "03:00 PM - 06:00 PM",
    "06:00 PM - 09:00 PM",
    "Any Time"
  ];

  return (
    <>
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
        <div className="contact-form-container" style={{ flex: '1.2' }}>
          <div className="contact-form-card">
            <h3 className="form-card-title">Get in Touch</h3>
            <form onSubmit={submitHandler} noValidate>
              <Honeypot register={register} />
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="modern-input-group">
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Enter your full name"
                      className={`modern-input ${errors.name ? "is-invalid" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.name && <span className="form-error">{errors.name.message}</span>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="modern-input-group">
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="Enter mail ID"
                      className={`modern-input ${errors.email ? "is-invalid" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.email && <span className="form-error">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="col-12">
                  <div className="modern-input-group">
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <div className={`phone-input-glass-wrapper ${errors.phone ? 'is-invalid' : ''}`}>
                          <FormPhoneInput
                            {...field}
                            disabled={isSubmitting}
                          />
                        </div>
                      )}
                    />
                    {errors.phone && <span className="form-error">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="modern-input-group">
                    <select
                      {...register("interest")}
                      className={`modern-select ${errors.interest ? "is-invalid" : ""}`}
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>Select interest</option>
                      {interestOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {errors.interest && <span className="form-error">{errors.interest.message}</span>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="modern-input-group">
                    <select
                      {...register("convenientTime")}
                      className={`modern-select ${errors.convenientTime ? "is-invalid" : ""}`}
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>Select time</option>
                      {timeSlots.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {errors.convenientTime && <span className="form-error">{errors.convenientTime.message}</span>}
                  </div>
                </div>

                {watchInterest === "Course Enquiry" && (
                  <div className="col-12">
                    <div className="modern-input-group">
                      <select
                        {...register("selectedCourse")}
                        className={`modern-select ${errors.selectedCourse ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                      >
                        <option value="" disabled>Choose exact course</option>
                        {courseOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      {errors.selectedCourse && <span className="form-error">{errors.selectedCourse.message}</span>}
                    </div>
                  </div>
                )}

                <div className="col-12 mt-2 text-center">
                  <button type="submit" className="btn-modern-submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending Message..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>

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

        <div className="divider"></div>

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

          <div className="branches-container">
            <h3 className="branches-title">Our Branches</h3>
            <div className="branch-cards-grid">
              
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
