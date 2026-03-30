'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { submitEnquiryForm } from '../../../../lib/api/api';
import './LeadCaptureModal.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const normalizePhone = (value) => {
    const digits = (value || '').replace(/\D/g, '');
    // Handle inputs like "+91 9876543210" => "9876543210"
    if (digits.startsWith('91') && digits.length === 12) return digits.slice(2);
    return digits;
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!formData.email.trim()) nextErrors.email = 'Email is required.';
    else if (!EMAIL_REGEX.test(formData.email.trim())) nextErrors.email = 'Invalid email format.';

    const normalized = normalizePhone(formData.phone);
    if (!normalized) nextErrors.phone = 'Mobile number is required.';
    else if (normalized.length !== 10) nextErrors.phone = 'Enter a valid 10-digit mobile number.';

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

    const normalizedPhone = normalizePhone(formData.phone);
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
    })
      .then((result) => {
        if (!result?.success) {
          throw new Error(result?.message || 'Failed to submit enquiry.');
        }
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
    if (onClose) onClose();
  };

  useEffect(() => {
    if (!isOpen) return;
    // Reset any previous backend error when the modal opens.
    setStatus({ type: '', message: '' });
    setErrors({});
    setFormData({ name: '', email: '', phone: '' });
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

          <div className="lead-field">
            <label className="lead-label" htmlFor="lead-phone">Mobile Number</label>
            <input
              id="lead-phone"
              className="lead-input"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              placeholder="9876543210"
              disabled={loading}
            />
            {errors.phone && <div className="lead-error">{errors.phone}</div>}
          </div>

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

