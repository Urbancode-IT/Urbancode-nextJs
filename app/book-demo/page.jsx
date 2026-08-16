'use client';
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { goToThankYou } from "@/lib/navigation/goToThankYou";
import Swal from 'sweetalert2';
import { Send } from "lucide-react";
import "./BookDemoPage.css";

import { FormInput, FormSelect, FormTextarea, FormButton, FormCard } from "@/app/components/common/FormUI";
import { FormPhoneInput } from "@/app/components/common/FormPhoneInput";
import { Honeypot } from "@/app/components/common/Honeypot";
import { useEnquiryForm } from "@/app/hooks/useEnquiryForm";
import { bookDemoSchema } from "@/app/schemas/enquirySchema";
import { Controller } from "react-hook-form";

const BookDemoContent = () => {
  const searchParams = useSearchParams();
  const courseFromUrl = searchParams.get('course');

  const {
    register,
    control,
    submitHandler,
    isSubmitting,
    formState: { errors }
  } = useEnquiryForm({
    schema: bookDemoSchema,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: courseFromUrl || "",
      preferredDate: "",
      preferredTime: "",
      honeypot: ""
    },
    onSubmitCallback: async (data, reset) => {
      const scriptURL = "https://script.google.com/macros/s/AKfycbyqhIsaZZb1mvkcRtxrquaDboujLLpts-q5s1ed1JIRiuzt5l76OHeFxuTZPzRWxqh_/exec";

      const payload = {
        name: data.name.trim(),
        phone: data.phone,
        email: data.email.trim(),
        course: data.course,
        message: `[DEMO REQUEST] Date: ${data.preferredDate}, Time: ${data.preferredTime}.`,
      };

      await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });

      // Notify admin and send to external CRM
      fetch("/api/send-email/course-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim(),
          phone: data.phone,
          course: data.course,
          mode: "Not specified",
          pin: "N/A",
          message: `[DEMO REQUEST] Date: ${data.preferredDate}, Time: ${data.preferredTime}.`,
        }),
      }).catch(() => {});

      Swal.fire({
        title: 'Success!',
        text: 'Your demo session has been scheduled successfully.',
        icon: 'success',
        confirmButtonColor: '#036c2d'
      });
      
      setTimeout(() => {
        goToThankYou();
        reset();
      }, 1000);
    }
  });

  const [courseOptions, setCourseOptions] = useState(["Loading courses..."]);

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

  const timeOptions = [
    "Morning (10 AM - 1 PM)",
    "Afternoon (2 PM - 5 PM)",
    "Evening (6 PM - 9 PM)"
  ];

  return (
    <div className="book-demo-page-wrapper">
      <div className="container" style={{maxWidth: '700px'}}>
        <FormCard className="p-0 overflow-hidden" style={{ background: 'linear-gradient(180deg, #e3f0eb 0%, #f3f5f3 100%)', border: 'none' }}>
          {/* Form Side */}
          <div className="demo-form-side p-4 p-md-5">
            <div className="text-center mb-4">
              <Image 
                src="/images/home/logo.png" 
                alt="Urban Code Logo" 
                width={150} 
                height={35}
                priority
              />
              <h1 className="h3 fw-bold mt-3 mb-2 text-dark">Book a Demo Session</h1>
              <p className="small text-muted">Experience our expert-led training with a free personalized demo.</p>
            </div>

            <form onSubmit={submitHandler} noValidate>
              <Honeypot register={register} />
              <div className="row g-3">
                <div className="col-md-6">
                  <FormInput
                    label="Full Name"
                    {...register("name")}
                    placeholder="John Doe"
                    error={errors.name?.message}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="col-md-6">
                  <FormInput
                    label="Email Address"
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    error={errors.email?.message}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="col-md-6">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <FormPhoneInput
                        {...field}
                        label="Mobile Number"
                        error={errors.phone?.message}
                        disabled={isSubmitting}
                      />
                    )}
                  />
                </div>

                <div className="col-md-6">
                  <FormSelect
                    label="Select Course"
                    {...register("course")}
                    placeholder="Choose Course"
                    options={courseOptions}
                    error={errors.course?.message}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="col-md-6">
                  <FormInput
                    label="Preferred Date"
                    type="date"
                    {...register("preferredDate")}
                    min={new Date().toISOString().split('T')[0]}
                    error={errors.preferredDate?.message}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="col-md-6">
                  <FormSelect
                    label="Preferred Time"
                    {...register("preferredTime")}
                    placeholder="Select Time"
                    options={timeOptions}
                    error={errors.preferredTime?.message}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="col-12 text-center mt-4">
                  <FormButton 
                    type="submit" 
                    variant="success" 
                    className="px-4 py-2 rounded-pill"
                    loading={isSubmitting}
                    style={{ minWidth: '160px', backgroundColor: '#444444', border: 'none' }}
                  >
                    {isSubmitting ? "Scheduling..." : "Book My Free Demo"}
                    {!isSubmitting && <Send size={18} className="ms-2" />}
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

export default function BookDemoPage() {
  return (
    <Suspense fallback={
      <div className="book-demo-page-wrapper" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="demo-status-alert loading">Loading Demo Form...</div>
      </div>
    }>
      <BookDemoContent />
    </Suspense>
  );
}
