'use client';
import React, { Suspense, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { goToThankYou } from "@/lib/navigation/goToThankYou";
import Swal from 'sweetalert2';
import { Send } from "lucide-react";
import "./FormPage.css";

import { FormPhoneInput } from "@/app/components/common/FormPhoneInput";
import { Honeypot } from "@/app/components/common/Honeypot";
import { useEnquiryForm } from "@/app/hooks/useEnquiryForm";
import { enquiryFormSchema } from "@/app/schemas/enquirySchema";
import { Controller } from "react-hook-form";
import { courseOptionLabel, matchZenCourseFromUrl, resolveZenCourseSelection, isZenCourseId } from "@/lib/api/externalCourses";
import { fetchClientCourses } from "@/lib/api/fetchClientCourses";

const TIME_SLOTS = [
  "09:00 AM - 12:00 PM",
  "12:00 PM - 03:00 PM",
  "03:00 PM - 06:00 PM",
  "06:00 PM - 09:00 PM",
  "Any Time",
];

const EnquiryFormContent = () => {
  const searchParams = useSearchParams();
  const courseFromUrl = searchParams.get('course');

  const [courseOptions, setCourseOptions] = useState([]);
  const [coursesReady, setCoursesReady] = useState(false);
  const courseOptionsRef = useRef([]);

  useEffect(() => {
    courseOptionsRef.current = courseOptions;
  }, [courseOptions]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const mappedCourses = await fetchClientCourses();
        if (mappedCourses.length > 0) {
          setCourseOptions(mappedCourses);
        }
      } catch (err) {
        console.error("Failed to fetch courses for form:", err);
      } finally {
        setCoursesReady(true);
      }
    };
    fetchCourses();
  }, []);

  const {
    register,
    control,
    submitHandler,
    isSubmitting,
    setValue,
    formState: { errors }
  } = useEnquiryForm({
    schema: enquiryFormSchema,
    shouldUnregister: false,
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
      const enrollment = resolveZenCourseSelection(data.selectedCourse, courseOptionsRef.current);
      const courseId = enrollment.course_id
        || (isZenCourseId(data.selectedCourse) ? data.selectedCourse : "");

      fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: data.name.trim(),
          phone: data.phone,
          email: data.email.trim(),
          interest: "Course Enquiry",
          course: enrollment.course_name,
          time: data.convenientTime,
          message: "Website Enquiry Form (/form)",
        }),
        mode: "no-cors",
      }).catch(() => {});

      await fetch("/api/send-email/course-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim(),
          phone: data.phone,
          course: enrollment.course_name || data.selectedCourse,
          ...(courseId ? { course_id: courseId } : {}),
          mode: "Not specified",
          pin: "N/A",
          message: `Course Enquiry via /form | Time: ${data.convenientTime}`,
        }),
      });

      Swal.fire({
        title: 'Enquiry Submitted!',
        text: `We've received your enquiry for ${enrollment.label || enrollment.course_name}. Our team will contact you within 24 hours.`,
        icon: 'success',
        confirmButtonColor: '#036c2d'
      });

      setTimeout(() => {
        goToThankYou();
        reset();
      }, 1000);
    }
  });

  useEffect(() => {
    if (!courseFromUrl || !courseOptions.length) return;
    setValue("selectedCourse", matchZenCourseFromUrl(courseFromUrl, courseOptions));
  }, [courseFromUrl, courseOptions, setValue]);

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
            {/* Hidden field: interest is always "Course Enquiry" for this page */}
            <input type="hidden" {...register("interest")} value="Course Enquiry" />

            <div className="row g-3">
              {/* Full Name */}
              <div className="col-md-6">
                <div className="modern-input-group">
                  <label className="modern-label">Full Name <span style={{color:'#e53e3e'}}>*</span></label>
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

              {/* Email */}
              <div className="col-md-6">
                <div className="modern-input-group">
                  <label className="modern-label">Email Address <span style={{color:'#e53e3e'}}>*</span></label>
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

              {/* Mobile Number */}
              <div className="col-12">
                <div className="modern-input-group">
                  <label className="modern-label">Mobile Number <span style={{color:'#e53e3e'}}>*</span></label>
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

              {/* Course — always visible, always required */}
              <div className="col-md-6">
                <div className="modern-input-group">
                  <label className="modern-label">Select Course <span style={{color:'#e53e3e'}}>*</span></label>
                  <select
                    {...register("selectedCourse")}
                    className={`modern-select ${errors.selectedCourse ? "is-invalid" : ""}`}
                    disabled={isSubmitting || !coursesReady}
                  >
                    <option value="" disabled>
                      {coursesReady ? "Choose a Course" : "Loading courses..."}
                    </option>
                    {courseOptions.map((opt) => (
                      <option key={opt.course_id} value={opt.course_id}>
                        {courseOptionLabel(opt)}
                      </option>
                    ))}
                  </select>
                  {errors.selectedCourse && <span className="form-error">{errors.selectedCourse.message}</span>}
                </div>
              </div>

              {/* Convenient Time */}
              <div className="col-md-6">
                <div className="modern-input-group">
                  <label className="modern-label">Convenient Time to Call <span style={{color:'#e53e3e'}}>*</span></label>
                  <select
                    {...register("convenientTime")}
                    className={`modern-select ${errors.convenientTime ? "is-invalid" : ""}`}
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>Select Time</option>
                    {TIME_SLOTS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.convenientTime && <span className="form-error">{errors.convenientTime.message}</span>}
                </div>
              </div>

              {/* Submit */}
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

