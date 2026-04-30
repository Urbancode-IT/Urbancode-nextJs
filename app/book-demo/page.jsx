'use client';
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  BookOpen, 
  Monitor, 
  Sparkles,
  CheckCircle2,
  Video
} from "lucide-react";
import "./BookDemoPage.css";

import { FormInput, FormSelect, FormTextarea, FormButton, FormCard } from "@/app/components/common/FormUI";

const BookDemoContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseFromUrl = searchParams.get('course');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: courseFromUrl || "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (courseFromUrl) {
      setFormData(prev => ({ ...prev, course: courseFromUrl }));
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
    else if (formData.name.trim().length < 3) newErrors.name = "Name must be at least 3 characters.";
    
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email.";
    
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) newErrors.phone = "10-digit phone required.";
    else if (!/^[6-9]\d{9}$/.test(cleanPhone)) newErrors.phone = "Invalid Indian mobile number.";
    
    if (!formData.course) newErrors.course = "Please select a course.";
    if (!formData.preferredDate) newErrors.preferredDate = "Please select a date.";
    if (!formData.preferredTime) newErrors.preferredTime = "Please select a time slot.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: "loading", message: "Scheduling your demo session..." });

    const scriptURL = "https://script.google.com/macros/s/AKfycbyqhIsaZZb1mvkcRtxrquaDboujLLpts-q5s1ed1JIRiuzt5l76OHeFxuTZPzRWxqh_/exec";

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        course: formData.course,
        message: `[DEMO REQUEST] Date: ${formData.preferredDate}, Time: ${formData.preferredTime}. Msg: ${formData.message || 'N/A'}`,
      };

      await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });

      setStatus({ type: "success", message: "Demo Scheduled! Redirecting..." });
      
      setTimeout(() => {
        router.push('/thankyou');
      }, 1000);

    } catch (error) {
      console.error("Demo Submission Error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const courseOptions = [
    "Python with AI",
    "Full Stack Development",
    "Data Science",
    "UI/UX Design",
    "Software Testing",
    "Cloud/DevOps",
    "Digital Marketing",
    "Other"
  ];

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

                <div className="col-md-6">
                  <FormInput
                    label="Mobile Number"
                    type="tel"
                    name="phone"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    disabled={loading}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <FormSelect
                    label="Select Course"
                    name="course"
                    placeholder="Choose Course"
                    options={courseOptions}
                    value={formData.course}
                    onChange={handleChange}
                    error={errors.course}
                    disabled={loading}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <FormInput
                    label="Preferred Date"
                    type="date"
                    name="preferredDate"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    error={errors.preferredDate}
                    disabled={loading}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <FormSelect
                    label="Preferred Time"
                    name="preferredTime"
                    placeholder="Select Time"
                    options={timeOptions}
                    value={formData.preferredTime}
                    onChange={handleChange}
                    error={errors.preferredTime}
                    disabled={loading}
                    required
                  />
                </div>

                <div className="col-12 text-center mt-4">
                  <FormButton 
                    type="submit" 
                    variant="success" 
                    className="px-4 py-2 rounded-pill"
                    loading={loading}
                    style={{ minWidth: '160px', backgroundColor: '#444444', border: 'none' }}
                  >
                    {loading ? "Scheduling..." : "Book My Free Demo"}
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
