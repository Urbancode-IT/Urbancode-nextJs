'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { goToThankYou } from '@/lib/navigation/goToThankYou';
import { submitEnquiryForm } from '../../../../lib/api/api';
import { FormPhoneInput } from '@/app/components/common/FormPhoneInput';
import { getEmailError, getNameError, getPhoneError, validateLeadContact } from '@/app/utils/validationUtils';
import { getLeadSource } from '@/app/utils/leadSource';
import './LeadCaptureModal.css';

const LeadCaptureModal = ({
  isOpen,
  onClose,
  context,
  onSuccess,
}) => {
  const didTriggerSuccessRef = useRef(false);
  const isMountedRef = useRef(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [honeypot, setHoneypot] = useState('');

  const payloadDefaults = useMemo(() => {
    const courseName = context?.courseName || 'Course Enquiry';
    // Backend may validate exact allowed values (from EnquiryFormModal dropdown)
    const mode = context?.mode || 'lets decide later';
    // Some backends validate message presence (even if UI doesn't ask).
    const message = context?.message || 'No message provided';
    // Some backends might require pin/country/etc fields for enquiry flows.
    // We keep it hidden in UI but still send a safe default to satisfy "required fields" validation.
    const pin = context?.pin || '000000';
    return { courseName, mode, message, pin };
  }, [context]);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const validate = () => {
    if (honeypot.trim()) {
      setStatus({ type: 'error', message: 'Unable to submit this form.' });
      return false;
    }

    const nextErrors = {};
    const nameError = getNameError(formData.name);
    const emailError = getEmailError(formData.email);
    const phoneError = getPhoneError(formData.phone);
    const spamError = validateLeadContact({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });
    if (nameError) nextErrors.name = nameError;
    if (emailError) nextErrors.email = emailError;
    if (phoneError) nextErrors.phone = phoneError;
    if (spamError && !nameError && !emailError && !phoneError) {
      nextErrors.name = spamError;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const updateField = (key, value) => {
    setFormData((p) => ({ ...p, [key]: value }));
    setErrors((p) => ({ ...p, [key]: '' }));
    // If user edits after a failed submission, clear the generic status error.
    setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!validate()) return;

    setLoading(true);
    setStatus({ type: 'loading', message: 'Submitting enquiry...' });

    const normalizedPhone = formData.phone.trim();
    const localLeadPayload = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: formData.name.trim(),
      email: formData.email.trim(),
      mobile: normalizedPhone,
      phone: normalizedPhone,
      courseName: payloadDefaults.courseName,
      message: payloadDefaults.message,
      mode: payloadDefaults.mode,
      createdAt: new Date().toISOString(),
      apiSuccess: false,
      apiError: null,
    };

    // Persist lead immediately so Admin can view it even if backend is slow/failed.
    try {
      const key = 'uc_local_leads';
      const prev = JSON.parse(localStorage.getItem(key) || '[]');
      prev.push(localLeadPayload);
      localStorage.setItem(key, JSON.stringify(prev));
    } catch {
      // ignore
    }

    try {
      await fetch('/api/compiler/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(localLeadPayload),
      });
    } catch {
      // Admin can still backfill this browser's local copy later.
    }

    // Trigger parent flow immediately (do not block on backend response).
    if (onSuccess && !didTriggerSuccessRef.current) {
      didTriggerSuccessRef.current = true;
      onSuccess(false);
    }

    // Fire-and-forget backend request (background).
    submitEnquiryForm({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: normalizedPhone,
      // Compatibility: some backends expect `mobile` instead of `phone`.
      mobile: normalizedPhone,
      // Extra aliases (in case backend uses different naming).
      mobileNumber: normalizedPhone,
      phoneNumber: normalizedPhone,
      pin: payloadDefaults.pin,
      course: payloadDefaults.courseName,
      courseName: payloadDefaults.courseName,
      program: payloadDefaults.courseName,
      message: payloadDefaults.message,
      mode: payloadDefaults.mode,
      ...getLeadSource('Compiler page — lead form', `Compiler page — Submit — ${payloadDefaults.courseName}`),
    })
      .then((result) => {
        if (!result?.success) {
          throw new Error(result?.message || 'Failed to submit enquiry.');
        }
        onClose();
        goToThankYou();
        return { ok: true, apiError: null };
      })
      .catch((err) => ({ ok: false, apiError: err?.message || 'Unknown error' }))
      .then(({ ok, apiError }) => {
        try {
          const key = 'uc_local_leads';
          const prev = JSON.parse(localStorage.getItem(key) || '[]');
          const idx = prev.findIndex((x) => x.id === localLeadPayload.id);
          if (idx !== -1) {
            prev[idx] = {
              ...prev[idx],
              apiSuccess: !!ok,
              apiError: apiError || null,
            };
            localStorage.setItem(key, JSON.stringify(prev));
            fetch('/api/compiler/leads', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(prev[idx]),
            }).catch(() => {});
          }
        } catch {
          // ignore
        }
      })
      .finally(() => {
        if (isMountedRef.current) setLoading(false);
      });
  };

  const handleClose = () => {
    if (loading) return;
    setStatus({ type: '', message: '' });
    setErrors({});
    setFormData({ name: '', email: '', phone: '' });
    setHoneypot('');
    if (onClose) onClose();
  };

  useEffect(() => {
    if (!isOpen) return;
    // Reset any previous backend error when the modal opens.
    setStatus({ type: '', message: '' });
    setErrors({});
    setFormData({ name: '', email: '', phone: '' });
    setHoneypot('');
    didTriggerSuccessRef.current = false;
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="lead-modal-overlay" role="dialog" aria-modal="true">
      <div className="lead-modal-content">
        <div className="lead-modal-header">
          <h3>Get Course Details</h3>
          <button type="button" className="lead-modal-close" onClick={handleClose} aria-label="Close">
            ×
          </button>
        </div>

        <form className="lead-modal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', height: 0, width: 0, opacity: 0 }}
          />
          <div className="lead-field">
            <label className="lead-label" htmlFor="lead-name">Name</label>
            <input
              id="lead-name"
              className="lead-input"
              type="text"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="Enter your name"
              disabled={loading}
              autoFocus
            />
            {errors.name && <div className="lead-error">{errors.name}</div>}
          </div>

          <div className="lead-field">
            <label className="lead-label" htmlFor="lead-email">Email</label>
            <input
              id="lead-email"
              className="lead-input"
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="you@example.com"
              disabled={loading}
            />
            {errors.email && <div className="lead-error">{errors.email}</div>}
          </div>

          <FormPhoneInput
            label="Mobile Number"
            name="phone"
            value={formData.phone}
            onChange={(value) => updateField('phone', value || '')}
            error={errors.phone}
            disabled={loading}
            placeholder="Enter mobile number"
          />

          {status.message && status.type !== 'loading' && (
            <div
              className={`lead-status ${
                status.type === 'success' ? 'is-success' : status.type === 'error' ? 'is-error' : ''
              }`}
            >
              {status.message}
            </div>
          )}
          {status.type === 'loading' && (
            <div className="lead-status is-loading">{status.message}</div>
          )}

          <div className="lead-actions">
            <button
              type="button"
              className="lead-btn secondary"
              onClick={handleClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button type="submit" className="lead-btn primary" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadCaptureModal;

