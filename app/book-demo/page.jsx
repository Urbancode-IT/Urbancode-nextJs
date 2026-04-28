'use client';
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { submitEnquiryForm } from "@/lib/api/api";
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

    try {
      // Constructing message with demo details for backend compatibility
      const demoMessage = `[DEMO REQUEST] Preferred Date: ${formData.preferredDate}, Time: ${formData.preferredTime}. User Message: ${formData.message}`;
      
      const apiPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.course,
        message: demoMessage,
      };

      const result = await submitEnquiryForm(apiPayload);
      if (result.success) {
        setStatus({ type: "success", message: "Demo Scheduled! Redirecting..." });
        setTimeout(() => {
          router.push('/thankyou');
        }, 1000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-demo-page-wrapper">
      <div className="book-demo-container">
        {/* Left Side: Info */}
        <div className="demo-info-side">
          <div className="demo-info-content">
            <h1>Experience the Future of Learning</h1>
            <p>
              Book a personalized 1-on-1 demo session with our industry experts. 
              Discover our curriculum, platform, and placement strategy.
            </p>
            
            <div className="demo-features">
              <div className="demo-feature-item">
                <div className="demo-feature-icon">
                  <Video size={20} />
                </div>
                <div className="demo-feature-text">
                  <strong>Live Interaction</strong>
                  <span>Directly speak with our technical mentors</span>
                </div>
              </div>
              <div className="demo-feature-item">
                <div className="demo-feature-icon">
                  <Sparkles size={20} />
                </div>
                <div className="demo-feature-text">
                  <strong>Career Counseling</strong>
                  <span>Get a roadmap tailored to your goals</span>
                </div>
              </div>
              <div className="demo-feature-item">
                <div className="demo-feature-icon">
                  <Monitor size={20} />
                </div>
                <div className="demo-feature-text">
                  <strong>Platform Walkthrough</strong>
                  <span>Explore our hands-on coding environment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="demo-form-side">
          {status.message && (
            <div className={`demo-status-alert ${status.type}`}>
              {status.type === 'loading' ? <Clock size={18} /> : <CheckCircle2 size={18} />}
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="demo-form-grid">
            <div className="demo-form-group">
              <label className="demo-label"><User size={14} /> Full Name</label>
              <div className="demo-input-wrapper">
                <input
                  type="text"
                  name="name"
                  className="demo-control"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                />
                <i><User size={18} /></i>
              </div>
              {errors.name && <div className="demo-error">{errors.name}</div>}
            </div>

            <div className="demo-form-group">
              <label className="demo-label"><Mail size={14} /> Email Address</label>
              <div className="demo-input-wrapper">
                <input
                  type="email"
                  name="email"
                  className="demo-control"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                />
                <i><Mail size={18} /></i>
              </div>
              {errors.email && <div className="demo-error">{errors.email}</div>}
            </div>

            <div className="demo-form-group">
              <label className="demo-label"><Phone size={14} /> Mobile Number</label>
              <div className="demo-input-wrapper">
                <input
                  type="tel"
                  name="phone"
                  className="demo-control"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                />
                <i><Phone size={18} /></i>
              </div>
              {errors.phone && <div className="demo-error">{errors.phone}</div>}
            </div>

            <div className="demo-form-group">
              <label className="demo-label"><BookOpen size={14} /> Select Course</label>
              <div className="demo-input-wrapper">
                <select
                  name="course"
                  className="demo-control"
                  value={formData.course}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="">Choose Course</option>
                  <option value="Python with AI">Python with AI</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Software Testing">Software Testing</option>
                  <option value="Cloud/DevOps">Cloud/DevOps</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Other">Other</option>
                </select>
                <i><BookOpen size={18} /></i>
              </div>
              {errors.course && <div className="demo-error">{errors.course}</div>}
            </div>

            <div className="demo-form-group">
              <label className="demo-label"><Calendar size={14} /> Preferred Date</label>
              <div className="demo-input-wrapper">
                <input
                  type="date"
                  name="preferredDate"
                  className="demo-control"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  disabled={loading}
                />
                <i><Calendar size={18} /></i>
              </div>
              {errors.preferredDate && <div className="demo-error">{errors.preferredDate}</div>}
            </div>

            <div className="demo-form-group">
              <label className="demo-label"><Clock size={14} /> Preferred Time</label>
              <div className="demo-input-wrapper">
                <select
                  name="preferredTime"
                  className="demo-control"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="">Select Time</option>
                  <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                  <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                  <option value="Evening (6 PM - 9 PM)">Evening (6 PM - 9 PM)</option>
                </select>
                <i><Clock size={18} /></i>
              </div>
              {errors.preferredTime && <div className="demo-error">{errors.preferredTime}</div>}
            </div>

            <div className="demo-form-group full-width">
              <label className="demo-label">Message (Optional)</label>
              <textarea
                name="message"
                className="demo-control"
                rows="2"
                style={{paddingLeft: '16px'}}
                placeholder="Anything else you'd like to share?"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
              ></textarea>
            </div>

            <div className="demo-form-group full-width">
              <button 
                type="submit" 
                className="demo-submit-btn"
                disabled={loading}
              >
                {loading ? "Scheduling..." : "Book My Free Demo"}
                {!loading && <Send size={18} />}
              </button>
            </div>
          </form>
        </div>
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
