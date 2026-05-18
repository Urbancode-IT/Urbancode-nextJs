'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitEnquiryForm } from "@/lib/api/api";
import { FormInput, FormSelect, FormTextarea, FormButton, FormCard } from "@/app/components/common/FormUI";

export default function StudyAbroadContactPage() {
    const router = useRouter();
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

    const destinationOptions = [
        "USA", "UK", "Canada", "Australia", "Germany", "Ireland", "Singapore"
    ];

    const educationOptions = [
        "12th Standard", "Undergraduate", "Postgraduate", "PhD"
    ];

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ type: "", message: "" });

        // Basic Validation
        const { name, email, phone, country, education, course } = formData;
        
        if (!name.trim() || name.trim().length < 3) {
            setFormStatus({ type: "error", message: "Please enter a valid name (min 3 characters)." });
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setFormStatus({ type: "error", message: "Please enter a valid email address." });
            return;
        }
        const cleanPhone = phone.replace(/\D/g, '');
        if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
            setFormStatus({ type: "error", message: "Please enter a valid 10-digit mobile number." });
            return;
        }
        if (!country) {
            setFormStatus({ type: "error", message: "Please select a preferred destination." });
            return;
        }
        if (!education) {
            setFormStatus({ type: "error", message: "Please select your highest qualification." });
            return;
        }
        if (!course.trim()) {
            setFormStatus({ type: "error", message: "Please enter your preferred course." });
            return;
        }

        setIsSubmitting(true);

        const submissionData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: cleanPhone,
            course: `Study Abroad - ${formData.country} (${formData.course})`,
            message: `Education Level: ${formData.education}\nMessage: ${formData.message}`,
            mode: "Online/Offline" // Default for the handler
        };

        try {
            const result = await submitEnquiryForm(submissionData);
            if (result.success) {
                // EXCLUSIVE GOOGLE ADS REDIRECT
                router.push('/study-abroad-thankyou');
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
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            padding: '40px 20px'
        }}>
            <div style={{ maxWidth: '800px', width: '100%' }}>
                <FormCard className="p-0 overflow-hidden" style={{ background: '#ffffff', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                    <div className="p-4 p-md-5">
                        <div className="text-center mb-4">
                            <h1 className="h2 fw-bold mb-2 text-dark">Book Your Free Consultation</h1>
                            <p className="text-muted">Get personalized guidance for your international academic journey.</p>
                        </div>

                        {formStatus.message && (
                            <div className={`alert alert-${formStatus.type === 'error' ? 'danger' : 'success'} mb-4 text-center`}>
                                {formStatus.message}
                            </div>
                        )}

                        <form onSubmit={handleFormSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <FormInput 
                                        name="name" 
                                        placeholder="Full Name" 
                                        required 
                                        value={formData.name} 
                                        onChange={handleFormChange} 
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormInput 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email Address" 
                                        required 
                                        value={formData.email} 
                                        onChange={handleFormChange} 
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormInput 
                                        type="tel" 
                                        name="phone" 
                                        placeholder="Phone Number (10 digits)" 
                                        required 
                                        value={formData.phone} 
                                        onChange={handleFormChange} 
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormSelect 
                                        name="country" 
                                        placeholder="Preferred Destination"
                                        options={destinationOptions}
                                        required
                                        value={formData.country}
                                        onChange={handleFormChange}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormSelect 
                                        name="education" 
                                        placeholder="Highest Qualification"
                                        options={educationOptions}
                                        required
                                        value={formData.education}
                                        onChange={handleFormChange}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormInput 
                                        name="course" 
                                        placeholder="Preferred Course (e.g. MS in CS)" 
                                        required 
                                        value={formData.course} 
                                        onChange={handleFormChange} 
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-12">
                                    <FormTextarea 
                                        name="message" 
                                        placeholder="Message (Optional) - Tell us about your goals..." 
                                        rows={3}
                                        value={formData.message} 
                                        onChange={handleFormChange}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-12 mt-4 text-center">
                                    <FormButton 
                                        type="submit" 
                                        variant="success" 
                                        className="px-5 py-3 rounded-pill fw-bold"
                                        loading={isSubmitting}
                                        style={{ minWidth: '200px', fontSize: '1.1rem' }}
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit Request"}
                                    </FormButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </FormCard>
            </div>
        </div>
    );
}
