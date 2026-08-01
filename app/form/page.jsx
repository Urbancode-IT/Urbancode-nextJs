'use client';
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { goToThankYou } from "@/lib/navigation/goToThankYou";
import Swal from 'sweetalert2';
import { Send } from "lucide-react";
import "./FormPage.css";

import { FormInput, FormSelect, FormTextarea, FormButton, FormCard } from "@/app/components/common/FormUI";
import { FormPhoneInput } from "@/app/components/common/FormPhoneInput";
import { Honeypot } from "@/app/components/common/Honeypot";
import { useEnquiryForm } from "@/app/hooks/useEnquiryForm";
import { contactUsSchema } from "@/app/schemas/enquirySchema";
import { Controller } from "react-hook-form";

const EnquiryFormContent = () => {
  const searchParams = useSearchParams();
  const courseFromUrl = searchParams.get('course');

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
      interest: "Course Enquiry",
      selectedCourse: courseFromUrl || "",
      convenientTime: "",
      honeypot: ""
    },
    onSubmitCallback: async (data, reset) => {
      const scriptURL = "https://script.google.com/macros/s/AKfycbyqhIsaZZb1mvkcRtxrquaDboujLLpts-q5s1ed1JIRiuzt5l76OHeFxuTZPzRWxqh_/exec";

      const payload = {
        name: data.name.trim(),
        phone: data.phone,
        email: data.email.trim(),
        interest: data.interest,
        course: data.interest === "Course Enquiry" ? data.selectedCourse : data.interest,
        time: data.convenientTime,
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
      
      setTimeout(() => {
        goToThankYou();
        reset();
      }, 1000);
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

  return (
    <div className="form-page-wrapper">
      <div className="container" style={{maxWidth: '700px'}}>
        <div className="glass-form-card">
          <div className="text-center mb-4">
            <Image 
              src="/images/home/logo.png" 
              alt="Urban Code Logo" 
              width={160} 
              height={38}
              priority
              className="mb-3"
            />
            <h1 className="form-title">Enquire Today</h1>
            <p className="form-subtitle">Fill out the form and our experts will reach out to you within 24 hours.</p>
          </div>

          <form onSubmit={submitHandler} noValidate>
            <Honeypot register={register} />
            <div className="row g-3">
              <div className="col-md-6">
                <div className="modern-input-group">
                  <label className="modern-label">Full Name</label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="John Doe"
                    className={`modern-input ${errors.name ? "is-invalid" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="form-error">{errors.name.message}</span>}
                </div>
              </div>

              <div className="col-md-6">
                <div className="modern-input-group">
                  <label className="modern-label">Email Address</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    className={`modern-input ${errors.email ? "is-invalid" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="form-error">{errors.email.message}</span>}
                </div>
              </div>

              <div className="col-12">
                <div className="modern-input-group">
                  <label className="modern-label">Mobile Number</label>
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
                  <label className="modern-label">Interested In</label>
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

              {watchInterest === "Course Enquiry" && (
                <div className="col-md-6">
                  <div className="modern-input-group">
                    <label className="modern-label">Select Course</label>
                    <select
                      {...register("selectedCourse")}
                      className={`modern-select ${errors.selectedCourse ? "is-invalid" : ""}`}
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>Choose Course</option>
                      {courseOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {errors.selectedCourse && <span className="form-error">{errors.selectedCourse.message}</span>}
                  </div>
                </div>
              )}

              <div className={watchInterest === "Course Enquiry" ? "col-md-12" : "col-md-6"}>
                <div className="modern-input-group">
                  <label className="modern-label">Convenient Time to Call</label>
                  <select
                    {...register("convenientTime")}
                    className={`modern-select ${errors.convenientTime ? "is-invalid" : ""}`}
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>Select Time</option>
                    {timeSlots.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.convenientTime && <span className="form-error">{errors.convenientTime.message}</span>}
                </div>
              </div>

              <div className="col-12 mt-2 text-center">
                <button 
                  type="submit" 
                  className="btn-modern-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  {!isSubmitting && <Send size={20} />}
                </button>
              </div>
            </div>
          </form>
        </div>
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
