import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { submitProjectEnquiryForm } from '@/lib/api/api';

const EnglishLanguageIntakeForm = () => {
  const [formData, setFormData] = useState({
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
    goals: ''
  });

  const occupationOptions = ['Student', 'Working Professional', 'Home maker', 'Other'];
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

  const consonantMashRegex = /[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]{7,}/;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => {
        const newReasons = checked
          ? [...prev.reasons, value]
          : prev.reasons.filter((r) => r !== value);
        return { ...prev, reasons: newReasons };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    if (!formData.fullName.trim()) return 'Full Name is required.';
    if (consonantMashRegex.test(formData.fullName)) return 'Invalid input detected in Full Name.';
    if (!formData.age) return 'Age is required.';
    if (!formData.email.trim()) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Invalid email address.';
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 7 || cleanPhone.length > 15) return 'Please enter a valid 7 to 15 digit mobile number.';
    if (!formData.occupation) return 'Occupation is required.';
    if (!formData.englishLevel) return 'Current English level is required.';
    if (formData.reasons.length === 0) return 'Select at least one reason for improvement.';
    if (!formData.focusArea) return 'Focus area is required.';
    if (!formData.attendedBefore) return 'Please indicate if you have attended a course before.';
    if (!formData.comfortLevel) return 'Comfort level in speaking is required.';
    if (!formData.hoursPerWeek) return 'Select weekly learning hours.';
    if (!formData.learningMode) return 'Preferred mode of learning is required.';
    if (formData.goals && consonantMashRegex.test(formData.goals)) return 'Invalid input detected in goals.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      Swal.fire({ icon: 'warning', title: 'Validation Error', text: error, confirmButtonColor: '#036c2d' });
      return;
    }
    const payload = {
      name: formData.fullName.trim(),
      age: formData.age,
      email: formData.email.trim(),
      phone: formData.phone.replace(/\D/g, ''),
      occupation: formData.occupation,
      englishLevel: formData.englishLevel,
      reasons: formData.reasons.join(', '),
      focusArea: formData.focusArea,
      attendedBefore: formData.attendedBefore,
      comfortLevel: formData.comfortLevel,
      hoursPerWeek: formData.hoursPerWeek,
      learningMode: formData.learningMode,
      goals: formData.goals.trim()
    };
    try {
      const result = await submitProjectEnquiryForm(payload);
      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Thank you!',
          text: 'Your intake form has been submitted successfully.',
          confirmButtonColor: '#036c2d'
        });
        setFormData({
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
          goals: ''
        });
      } else {
        Swal.fire({ icon: 'error', title: 'Oops...', text: result.message || 'Failed to submit form.', confirmButtonColor: '#d33' });
      }
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong. Please try again later.', confirmButtonColor: '#d33' });
    }
  };

  return (
    <div className="english-intake-form-wrapper" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', borderRadius: '12px' }}>
      <h2 className="text-center mb-4" style={{ color: '#036c2d' }}>English Language Course – Student Intake Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="form-group mb-3">
          <label>Full Name *</label>
          <input type="text" name="fullName" className="form-control" value={formData.fullName} onChange={handleChange} required />
        </div>
        {/* Age */}
        <div className="form-group mb-3">
          <label>Age *</label>
          <input type="number" name="age" className="form-control" value={formData.age} onChange={handleChange} min="1" required />
        </div>
        {/* Email */}
        <div className="form-group mb-3">
          <label>Email Address *</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        {/* Phone */}
        <div className="form-group mb-3">
          <label>Phone Number *</label>
          <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required placeholder="e.g., +1 555 1234567" />
        </div>
        {/* Occupation */}
        <div className="form-group mb-3">
          <label>Current Occupation *</label>
          <div>
            {occupationOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" name="occupation" value={opt} checked={formData.occupation === opt} onChange={handleChange} required />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="occupation" value="Other" checked={formData.occupation === 'Other'} onChange={handleChange} />
              <label className="form-check-label">Other:</label>
              {formData.occupation === 'Other' && (
                <input type="text" name="occupation" className="form-control d-inline-block ms-2" style={{ width: '150px' }} value={formData.occupation} onChange={handleChange} />
              )}
            </div>
          </div>
        </div>
        {/* English Level */}
        <div className="form-group mb-3">
          <label>Current level of English *</label>
          <div>
            {englishLevelOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" name="englishLevel" value={opt} checked={formData.englishLevel === opt} onChange={handleChange} required />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Reasons */}
        <div className="form-group mb-3">
          <label>Why do you want to improve your English? (Select all that apply) *</label>
          <div>
            {reasonOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="checkbox" name="reasons" value={opt} checked={formData.reasons.includes(opt)} onChange={handleChange} />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Focus Area */}
        <div className="form-group mb-3">
          <label>Which area would you like to focus on the most? *</label>
          <div>
            {focusOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" name="focusArea" value={opt} checked={formData.focusArea === opt} onChange={handleChange} required />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Attended before */}
        <div className="form-group mb-3">
          <label>Have you attended any English language course before? *</label>
          <div>
            {['Yes', 'No'].map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" name="attendedBefore" value={opt} checked={formData.attendedBefore === opt} onChange={handleChange} required />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Comfort Level */}
        <div className="form-group mb-3">
          <label>How comfortable are you to speak in English? *</label>
          <div>
            {comfortOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" name="comfortLevel" value={opt} checked={formData.comfortLevel === opt} onChange={handleChange} required />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Hours per week */}
        <div className="form-group mb-3">
          <label>How many hours per week can you dedicate to learning? *</label>
          <div>
            {hoursOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" name="hoursPerWeek" value={opt} checked={formData.hoursPerWeek === opt} onChange={handleChange} required />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Learning Mode */}
        <div className="form-group mb-3">
          <label>Preferred Mode of Learning *</label>
          <div>
            {modeOptions.map((opt) => (
              <div className="form-check form-check-inline" key={opt}>
                <input className="form-check-input" type="radio" name="learningMode" value={opt} checked={formData.learningMode === opt} onChange={handleChange} required />
                <label className="form-check-label">{opt}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Goals */}
        <div className="form-group mb-4">
          <label>Any specific learning goals or expectations? (Short answer)</label>
          <textarea name="goals" className="form-control" rows="3" value={formData.goals} onChange={handleChange} placeholder="Your goals..." />
        </div>
        <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#036c2d', borderColor: '#036c2d' }}>Submit</button>
      </form>
    </div>
  );
};

export default EnglishLanguageIntakeForm;
