import React from 'react';
import Swal from 'sweetalert2';
import { submitProjectEnquiryForm } from '@/lib/api/api';
import { useEnquiryForm } from '@/app/hooks/useEnquiryForm';
import { englishLanguageIntakeSchema } from '@/app/schemas/enquirySchema';
import { Controller } from 'react-hook-form';
import { FormPhoneInput } from '@/app/components/common/FormPhoneInput';
import { Honeypot } from '@/app/components/common/Honeypot';

const EnglishLanguageIntakeForm = () => {
  const occupationOptions = ['Student', 'Working Professional', 'Home maker'];
  const englishLevelOptions = ['Beginner', 'Intermediate', 'Advanced', 'Not sure'];
  const reasonOptions = [
    'Speaking confidently',
    'Workplace communication',
    'Academic purposes',
    'Interviews',
    'Public speaking',
    'Travel',
    'General fluency',
    'Other'
  ];
  const focusOptions = ['Speaking', 'Listening', 'Reading', 'Writing', 'Grammar', 'Vocabulary', 'Pronunciation'];
  const comfortOptions = ['Very comfortable', 'Somewhat comfortable', 'A little comfortable', 'Not comfortable at all'];
  const hoursOptions = ['2–3 hours', '4–6 hours', 'More than 6 hours'];
  const modeOptions = ['Online', 'Offline', 'Either'];

  const {
    register,
    control,
    submitHandler,
    isSubmitting,
    watch,
    formState: { errors }
  } = useEnquiryForm({
    schema: englishLanguageIntakeSchema,
    defaultValues: {
      fullName: '',
      age: '',
      email: '',
      phone: '',
      occupation: '',
      englishLevel: '',
      reasons: [],
      focusArea: '',
      attendedBefore: '',
      comfortLevel: '',
      hoursPerWeek: '',
      learningMode: '',
      goals: '',
      honeypot: ''
    },
    onSubmitCallback: async (data, reset) => {
      const payload = {
        name: data.fullName.trim(),
        age: data.age,
        email: data.email.trim(),
        phone: data.phone,
        occupation: data.occupation,
        englishLevel: data.englishLevel,
        reasons: data.reasons.join(', '),
        focusArea: data.focusArea,
        attendedBefore: data.attendedBefore,
        comfortLevel: data.comfortLevel,
        hoursPerWeek: data.hoursPerWeek,
        learningMode: data.learningMode,
        goals: data.goals ? data.goals.trim() : ""
      };
      const result = await submitProjectEnquiryForm(payload);
      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Thank you!',
          text: 'Your intake form has been submitted successfully.',
          confirmButtonColor: '#036c2d'
        });
        reset();
      } else {
        throw new Error(result.message || 'Failed to submit form.');
      }
    }
  });

  const selectedOccupation = watch('occupation');

  return (
    <div className="english-intake-form-wrapper" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', borderRadius: '12px' }}>
      <h2 className="text-center mb-4" style={{ color: '#036c2d' }}>English Language Course – Student Intake Form</h2>
      <form onSubmit={submitHandler} noValidate>
        <Honeypot register={register} />
        
        {/* Full Name */}
        <div className="form-group mb-3">
          <label>Full Name *</label>
          <input type="text" {...register('fullName')} className={`form-control ${errors.fullName ? 'is-invalid' : ''}`} disabled={isSubmitting} />
          {errors.fullName && <div className="invalid-feedback d-block">{errors.fullName.message}</div>}
        </div>
        
        {/* Age */}
        <div className="form-group mb-3">
          <label>Age *</label>
          <input type="number" {...register('age')} className={`form-control ${errors.age ? 'is-invalid' : ''}`} min="1" disabled={isSubmitting} />
          {errors.age && <div className="invalid-feedback d-block">{errors.age.message}</div>}
        </div>
        
        {/* Email */}
        <div className="form-group mb-3">
          <label>Email Address *</label>
          <input type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} disabled={isSubmitting} />
          {errors.email && <div className="invalid-feedback d-block">{errors.email.message}</div>}
        </div>
        
        {/* Phone */}
        <div className="form-group mb-3">
          <label>Phone Number *</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <FormPhoneInput
                {...field}
                error={errors.phone?.message}
                disabled={isSubmitting}
                className="mb-0"
              />
            )}
          />
        </div>
        
        {/* Occupation */}
        <div className="form-group mb-3">
          <label>Current Occupation *</label>
          <div>
            {occupationOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" {...register('occupation')} value={opt} disabled={isSubmitting} />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" {...register('occupation')} value="Other" disabled={isSubmitting} />
              <label className="form-check-label">Other:</label>
              {selectedOccupation === 'Other' && (
                <input type="text" {...register('occupation')} className="form-control d-inline-block ms-2" style={{ width: '150px' }} disabled={isSubmitting} />
              )}
            </div>
            {errors.occupation && <div className="invalid-feedback d-block">{errors.occupation.message}</div>}
          </div>
        </div>
        
        {/* English Level */}
        <div className="form-group mb-3">
          <label>Current level of English *</label>
          <div>
            {englishLevelOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" {...register('englishLevel')} value={opt} disabled={isSubmitting} />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
            {errors.englishLevel && <div className="invalid-feedback d-block">{errors.englishLevel.message}</div>}
          </div>
        </div>
        
        {/* Reasons */}
        <div className="form-group mb-3">
          <label>Why do you want to improve your English? (Select all that apply) *</label>
          <div>
            {reasonOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="checkbox" {...register('reasons')} value={opt} disabled={isSubmitting} />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
            {errors.reasons && <div className="invalid-feedback d-block">{errors.reasons.message}</div>}
          </div>
        </div>
        
        {/* Focus Area */}
        <div className="form-group mb-3">
          <label>Which area would you like to focus on the most? *</label>
          <div>
            {focusOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" {...register('focusArea')} value={opt} disabled={isSubmitting} />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
            {errors.focusArea && <div className="invalid-feedback d-block">{errors.focusArea.message}</div>}
          </div>
        </div>
        
        {/* Attended before */}
        <div className="form-group mb-3">
          <label>Have you attended any English language course before? *</label>
          <div>
            {['Yes', 'No'].map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" {...register('attendedBefore')} value={opt} disabled={isSubmitting} />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
            {errors.attendedBefore && <div className="invalid-feedback d-block">{errors.attendedBefore.message}</div>}
          </div>
        </div>
        
        {/* Comfort Level */}
        <div className="form-group mb-3">
          <label>How comfortable are you to speak in English? *</label>
          <div>
            {comfortOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" {...register('comfortLevel')} value={opt} disabled={isSubmitting} />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
            {errors.comfortLevel && <div className="invalid-feedback d-block">{errors.comfortLevel.message}</div>}
          </div>
        </div>
        
        {/* Hours per week */}
        <div className="form-group mb-3">
          <label>How many hours per week can you dedicate to learning? *</label>
          <div>
            {hoursOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" {...register('hoursPerWeek')} value={opt} disabled={isSubmitting} />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
            {errors.hoursPerWeek && <div className="invalid-feedback d-block">{errors.hoursPerWeek.message}</div>}
          </div>
        </div>
        
        {/* Learning Mode */}
        <div className="form-group mb-3">
          <label>Preferred Mode of Learning *</label>
          <div>
            {modeOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" {...register('learningMode')} value={opt} disabled={isSubmitting} />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
            {errors.learningMode && <div className="invalid-feedback d-block">{errors.learningMode.message}</div>}
          </div>
        </div>
        
        {/* Goals */}
        <div className="form-group mb-4">
          <label>Any specific learning goals or expectations? (Short answer)</label>
          <textarea {...register('goals')} className={`form-control ${errors.goals ? 'is-invalid' : ''}`} rows="3" placeholder="Your goals..." disabled={isSubmitting} />
          {errors.goals && <div className="invalid-feedback d-block">{errors.goals.message}</div>}
        </div>
        
        <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#036c2d', borderColor: '#036c2d' }} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default EnglishLanguageIntakeForm;
