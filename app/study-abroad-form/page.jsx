'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { submitEnquiryForm } from "@/lib/api/api";
import { FormInput, FormSelect, FormTextarea, FormButton, FormCard } from "@/app/components/common/FormUI";
import { FormPhoneInput } from "@/app/components/common/FormPhoneInput";
import { Honeypot } from "@/app/components/common/Honeypot";
import { useEnquiryForm } from "@/app/hooks/useEnquiryForm";
import { studyAbroadFormSchema } from "@/app/schemas/enquirySchema";
import { Controller } from "react-hook-form";
import Swal from 'sweetalert2';

export default function StudyAbroadContactPage() {
    const router = useRouter();

    const destinationOptions = [
        "USA", "UK", "Canada", "Australia", "Germany", "Ireland", "Singapore"
    ];

    const educationOptions = [
        "12th Standard", "Undergraduate", "Postgraduate", "PhD"
    ];

    const {
        register,
        control,
        submitHandler,
        isSubmitting,
        formState: { errors }
    } = useEnquiryForm({
        schema: studyAbroadFormSchema,
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            country: "",
            education: "",
            course: "",
            message: "",
            honeypot: ""
        },
        onSubmitCallback: async (data, reset) => {
            const submissionData = {
                name: data.name.trim(),
                email: data.email.trim(),
                phone: data.phone,
                course: `Study Abroad - ${data.country} (${data.course})`,
                message: `Education Level: ${data.education}\nMessage: ${data.message || 'N/A'}`,
                mode: "Online/Offline" // Default for the handler
            };

            const result = await submitEnquiryForm(submissionData);
            if (result.success) {
                // EXCLUSIVE GOOGLE ADS REDIRECT
                router.push('/study-abroad-thankyou');
                reset();
            } else {
                throw new Error(result.message || "Failed to send. Please try again.");
            }
        }
    });

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

                        <form onSubmit={submitHandler} noValidate>
                            <Honeypot register={register} />
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <FormInput 
                                        {...register("name")}
                                        placeholder="Full Name" 
                                        error={errors.name?.message}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormInput 
                                        type="email" 
                                        {...register("email")}
                                        placeholder="Email Address" 
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
                                                error={errors.phone?.message}
                                                disabled={isSubmitting}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormSelect 
                                        {...register("country")}
                                        placeholder="Preferred Destination"
                                        options={destinationOptions}
                                        error={errors.country?.message}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormSelect 
                                        {...register("education")}
                                        placeholder="Highest Qualification"
                                        options={educationOptions}
                                        error={errors.education?.message}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormInput 
                                        {...register("course")}
                                        placeholder="Preferred Course (e.g. MS in CS)" 
                                        error={errors.course?.message}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-12">
                                    <FormTextarea 
                                        {...register("message")}
                                        placeholder="Message (Optional) - Tell us about your goals..." 
                                        rows={3}
                                        error={errors.message?.message}
                                        disabled={isSubmitting}
                                        maxLength={1000}
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
