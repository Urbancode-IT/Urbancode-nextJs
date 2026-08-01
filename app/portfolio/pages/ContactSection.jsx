import React from "react";
import { motion } from "framer-motion";
import { submitProjectEnquiryForm } from "@/lib/api/api";
import { goToThankYou } from "@/lib/navigation/goToThankYou";
import Swal from 'sweetalert2';
import { useEnquiryForm } from "@/app/hooks/useEnquiryForm";
import { portfolioProjectFormSchema } from "@/app/schemas/enquirySchema";
import { Controller } from "react-hook-form";
import { Honeypot } from "@/app/components/common/Honeypot";
import { FormPhoneInput } from "@/app/components/common/FormPhoneInput";
import "./ContactSection.css";

const ContactSection = () => {
  const {
    register,
    control,
    submitHandler,
    isSubmitting,
    formState: { errors }
  } = useEnquiryForm({
    schema: portfolioProjectFormSchema,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interestedIn: "",
      message: "",
      honeypot: ""
    },
    onSubmitCallback: async (data, reset) => {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.interestedIn, // Mapping to backend expected field
        message: data.message || "No message provided",
        course: "Portfolio Project Inquiry"
      };

      const result = await submitProjectEnquiryForm(payload);
      if (result.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Your enquiry has been submitted successfully.',
          icon: 'success',
          confirmButtonColor: '#036c2d'
        });
        goToThankYou();
        reset();
      } else {
        Swal.fire({ icon: 'error', title: 'Oops...', text: result.message || "Failed to send message.", confirmButtonColor: '#d33' });
      }
    }
  });

  return (
    <section className="contact" id="contact">
      {/* Background Orbs */}
      <div className="contact__orb orb-1"></div>
      <div className="contact__orb orb-2"></div>
      
      <div className="contact__container">
        {/* Visual Contact Form Card */}
        <div className="visual-contact-card">
          <div className="visual-contact-header">
            <h2>Get In <span className="text-green">Touch</span></h2>
            <p>Let's discuss your project</p>
          </div>
          
          <div className="visual-contact-body">
            <div className="visual-contact-image">
              <motion.img 
                src="/portfolio/contact_envelope_graphic.png" 
                alt="Get in Touch Graphic" 
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ width: "100%", maxWidth: "450px", objectFit: "contain" }}
              />
            </div>
            
            <div className="visual-contact-form">
              <form onSubmit={submitHandler} noValidate>
                <Honeypot register={register} />
                <div className="form-row-double">
                  <div className="w-100">
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className={errors.name ? "is-invalid" : ""}
                      {...register("name")}
                      disabled={isSubmitting}
                    />
                    {errors.name && <span className="contact-field-error">{errors.name.message}</span>}
                  </div>
                  <div className="w-100">
                    <input 
                      type="email" 
                      placeholder="Mail ID" 
                      className={errors.email ? "is-invalid" : ""}
                      {...register("email")}
                      disabled={isSubmitting}
                    />
                    {errors.email && <span className="contact-field-error">{errors.email.message}</span>}
                  </div>
                </div>
                <div className="form-row-single">
                  <div className="w-100">
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <FormPhoneInput
                          {...field}
                          placeholder="Mobile No"
                          error={errors.phone?.message}
                          disabled={isSubmitting}
                          containerClass="mb-0"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="form-row-single">
                  <div className="w-100">
                    <select 
                      className={errors.interestedIn ? "is-invalid" : ""}
                      {...register("interestedIn")}
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>Interested In</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App">Mobile App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Cloud Services">Cloud Services</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Corporate Training">Corporate Training</option>
                    </select>
                    {errors.interestedIn && <span className="contact-field-error">{errors.interestedIn.message}</span>}
                  </div>
                </div>
                <div className="form-row-single">
                  <div className="w-100">
                    <textarea 
                      placeholder="Message" 
                      rows="4"
                      className={errors.message ? "is-invalid" : ""}
                      {...register("message")}
                      disabled={isSubmitting}
                    ></textarea>
                    {errors.message && <span className="contact-field-error">{errors.message.message}</span>}
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="visual-submit-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;