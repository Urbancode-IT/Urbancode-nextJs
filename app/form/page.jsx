'use client';
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { goToThankYou } from "@/lib/navigation/goToThankYou";
import Swal from 'sweetalert2';
import { Send, User, Mail, Phone, MapPin, BookOpen, Clock } from "lucide-react";
import "./FormPage.css";

import { FormInput, FormSelect, FormTextarea, FormButton, FormCard } from "@/app/components/common/FormUI";

const EnquiryFormContent = () => {
  const searchParams = useSearchParams();
  const courseFromUrl = searchParams.get('course');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    interest: "Course Enquiry",
    selectedCourse: courseFromUrl || "",
    convenientTime: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (courseFromUrl) {
      setFormData(prev => ({ ...prev, selectedCourse: courseFromUrl }));
    }
  }, [courseFromUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setStatus({ type: "", message: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email.";
    
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 7 || cleanPhone.length > 15) {
      newErrors.phone = "Invalid number (7-15 digits required).";
    }
    
    if (!formData.interest) newErrors.interest = "Required.";
    if (formData.interest === "Course Enquiry" && !formData.selectedCourse) newErrors.selectedCourse = "Select a course.";
    if (!formData.convenientTime) newErrors.convenientTime = "Select time.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: "loading", message: "Sending your enquiry..." });

    const scriptURL = "https://script.google.com/macros/s/AKfycbyqhIsaZZb1mvkcRtxrquaDboujLLpts-q5s1ed1JIRiuzt5l76OHeFxuTZPzRWxqh_/exec";

    try {
      const payload = {
        name: formData.name,
        phone: `${formData.countryCode} ${formData.phone}`,
        email: formData.email,
        interest: formData.interest,
        course: formData.interest === "Course Enquiry" ? formData.selectedCourse : formData.interest,
        time: formData.convenientTime,
        message: "Website Enquiry Form",
      };

      await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });

      Swal.fire({
        title: 'Success!',
        text: 'Your enquiry has been submitted successfully.',
        icon: 'success',
        confirmButtonColor: '#036c2d'
      });
      setStatus({ type: "success", message: "Success! Redirecting..." });
      
      setTimeout(() => {
        goToThankYou();
      }, 1000);

    } catch (error) {
      console.error("Form Submission Error:", error);
      Swal.fire({ icon: 'error', title: 'Oops...', text: "Something went wrong. Please try again.", confirmButtonColor: '#d33' });
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const interestOptions = [
    "Course Enquiry",
    "Placement Assistance",
    "Internship",
    "Mentorship",
    "Franchise",
    "Corporate Training",
    "Other"
  ];

  const courseOptions = [
    "AI Powered Fullstack Development",
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
  ];

  return (
    <div className="form-page-wrapper">
      <div className="container" style={{maxWidth: '700px'}}>
        <FormCard className="p-0 overflow-hidden" style={{ background: 'linear-gradient(180deg, #e3f0eb 0%, #f3f5f3 100%)', border: 'none' }}>
          {/* Form Side */}
          <div className="form-input-side p-4 p-md-5">
            <div className="text-center mb-4">
              <Image 
                src="/images/home/logo.png" 
                alt="Urban Code Logo" 
                width={150} 
                height={35}
                priority
              />
              <h1 className="h3 fw-bold mt-3 mb-2 text-dark">Enquire Today</h1>
              <p className="small text-muted">Fill out the form and our experts will reach out to you.</p>
            </div>

            {status.message && (
              <div className={`alert alert-${status.type === 'error' ? 'danger' : 'success'} mb-4 text-center`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <FormInput
                    label="Full Name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    disabled={loading}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <FormInput
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    disabled={loading}
                    required
                  />
                </div>

                <div className="col-12">
                  <div className="row g-2 align-items-end">
                    <div className="col-auto" style={{ minWidth: '120px' }}>
                      <FormSelect
                        label="Code"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        options={countryCodes}
                        disabled={loading}
                        className="ps-2 pe-4"
                      />
                    </div>
                    <div className="col">
                      <FormInput
                        label="Mobile Number"
                        type="tel"
                        name="phone"
                        placeholder="Number"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        disabled={loading}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <FormSelect
                    label="Interested In"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    options={interestOptions}
                    error={errors.interest}
                    disabled={loading}
                    required
                  />
                </div>

                {formData.interest === "Course Enquiry" && (
                  <div className="col-md-6">
                    <FormSelect
                      label="Select Course"
                      name="selectedCourse"
                      placeholder="Choose Course"
                      options={courseOptions}
                      value={formData.selectedCourse}
                      onChange={handleChange}
                      error={errors.selectedCourse}
                      disabled={loading}
                      required
                    />
                  </div>
                )}

                <div className={formData.interest === "Course Enquiry" ? "col-md-6" : "col-md-12"}>
                  <FormSelect
                    label="Convenient Time to Call"
                    name="convenientTime"
                    placeholder="Select Time"
                    options={timeSlots}
                    value={formData.convenientTime}
                    onChange={handleChange}
                    error={errors.convenientTime}
                    disabled={loading}
                    required
                  />
                </div>

                <div className="col-12 mt-4 text-center">
                  <FormButton 
                    type="submit" 
                    variant="success" 
                    className="px-4 py-2 rounded-pill"
                    loading={loading}
                    style={{ minWidth: '160px', backgroundColor: '#444444', border: 'none' }}
                  >
                    {loading ? "Sending..." : "Submit Enquiry"}
                    {!loading && <Send size={18} className="ms-2" />}
                  </FormButton>
                </div>
              </div>
            </form>
          </div>
        </FormCard>
      </div>
    </div>
  );
};

export default function EnquiryPage() {
  return (
    <Suspense fallback={
      <div className="form-page-wrapper" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="status-alert loading">Loading form...</div>
      </div>
    }>
      <EnquiryFormContent />
    </Suspense>
  );
}
