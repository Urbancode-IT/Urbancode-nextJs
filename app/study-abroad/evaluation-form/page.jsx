'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
    FaUser, FaEnvelope, FaMobileAlt, FaCalendarAlt, FaGraduationCap,
    FaHashtag, FaUpload, FaKeyboard, FaCheckCircle
} from 'react-icons/fa';
import { submitIeltsEvaluationForm } from '@/lib/api/api';
import './EvaluationForm.css';

const TOTAL_PAGES = 5;

const SECTIONS = [
    'STUDENT DETAILS',
    'IELTS GOAL & BACKGROUND',
    'ENGLISH LANGUAGE PROFILE',
    'LEARNING REQUIREMENTS',
    'DIAGNOSTICS QUESTIONS',
];

const CHALLENGE_OPTIONS = ['Listening', 'Reading', 'Writing', 'Speaking', 'Grammar'];

const INITIAL_FORM = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    qualification: '',
    ieltsTestType: '',
    ieltsPurpose: '',
    takenIeltsBefore: '',
    previousAttemptDate: '',
    overallBandScore: '',
    listeningScore: '',
    readingScore: '',
    writingScore: '',
    speakingScore: '',
    targetBandScore: '',
    preferredTestDate: '',
    englishProficiency: '',
    challengingAreas: [],
    englishStrengths: '',
    formalEnglishStudy: '',
    englishUsageFrequency: '',
    trainingType: '',
    attendedCoachingBefore: '',
    previousTrainingFeedback: '',
    trainingExpectations: '',
    hoursPerWeek: '',
    preferredTiming: '',
    preferredTimingOther: '',
    preferredFormat: '',
    aboutParagraph: '',
    writingResponse: '',
};

function LineInput({ icon: Icon, label, required, hint, className = '', ...inputProps }) {
    return (
        <div className={`eval-field ${className}`.trim()}>
            <label className="eval-label">
                {label}{required && <span className="eval-required"> *</span>}
            </label>
            <div className="eval-input-wrap">
                {Icon && <Icon className="eval-field-icon" />}
                <input className="eval-input-line" {...inputProps} />
            </div>
            {hint && <p className="eval-hint">{hint}</p>}
        </div>
    );
}

function OptionGroup({ label, required, options, value, onChange, name }) {
    return (
        <div className="eval-field">
            <label className="eval-label">
                {label}{required && <span className="eval-required"> *</span>}
            </label>
            <div className="eval-options">
                {options.map((opt) => (
                    <button
                        key={opt}
                        type="button"
                        className={`eval-option-btn ${value === opt ? 'selected' : ''}`}
                        onClick={() => onChange(name, opt)}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
}

function MultiSelect({ label, options, selected, onChange }) {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const toggle = (opt) => {
        if (selected.includes(opt)) {
            onChange(selected.filter((s) => s !== opt));
        } else {
            onChange([...selected, opt]);
        }
    };

    return (
        <div className="eval-field eval-multiselect-wrap" ref={wrapRef}>
            <label className="eval-label">{label}</label>
            {selected.length > 0 && (
                <div className="eval-multiselect-tags">
                    {selected.map((tag) => (
                        <span key={tag} className="eval-tag">
                            {tag}
                            <button type="button" className="eval-tag-remove" onClick={() => toggle(tag)} aria-label={`Remove ${tag}`}>×</button>
                        </span>
                    ))}
                </div>
            )}
            <div className="eval-input-wrap">
                <input
                    className="eval-input-line"
                    placeholder="-Select-"
                    readOnly
                    onFocus={() => setOpen(true)}
                    onClick={() => setOpen(true)}
                    style={{ paddingLeft: 0, cursor: 'pointer' }}
                />
            </div>
            {open && (
                <div className="eval-multiselect-dropdown">
                    {options.map((opt) => (
                        <label key={opt} className="eval-multiselect-item">
                            <input
                                type="checkbox"
                                checked={selected.includes(opt)}
                                onChange={() => toggle(opt)}
                            />
                            {opt}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function EvaluationFormPage() {
    const [page, setPage] = useState(0);
    const [form, setForm] = useState(INITIAL_FORM);
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const setField = (name, value) => setForm((prev) => ({ ...prev, [name]: value }));

    const validatePage = () => {
        setError('');
        switch (page) {
            case 0:
                if (!form.firstName.trim() || !form.lastName.trim()) return 'Please enter your first and last name.';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.';
                if (!form.phone.trim()) return 'Please enter your phone number.';
                if (!form.dateOfBirth) return 'Please enter your date of birth.';
                if (!form.qualification.trim()) return 'Please enter your educational qualification.';
                break;
            case 1:
                if (!form.ieltsTestType) return 'Please select which IELTS test you are planning to take.';
                if (!form.ieltsPurpose) return 'Please select why you are planning to take IELTS.';
                if (!form.takenIeltsBefore) return 'Please indicate if you have taken IELTS before.';
                if (form.takenIeltsBefore === 'Yes') {
                    if (!form.overallBandScore.trim()) return 'Please enter your overall band score.';
                    if (!form.targetBandScore.trim()) return 'Please enter your target IELTS band score.';
                }
                break;
            case 2:
                if (!form.englishProficiency) return 'Please select your current English proficiency level.';
                if (!form.englishUsageFrequency) return 'Please select how often you use English.';
                break;
            case 3:
                if (!form.trainingType) return 'Please select the type of training you are looking for.';
                if (!form.attendedCoachingBefore) return 'Please indicate if you have attended IELTS coaching before.';
                if (!form.preferredFormat) return 'Please select your preferred class format.';
                break;
            case 4:
                if (!form.aboutParagraph.trim()) return 'Please write a short paragraph about yourself (max 250 words).';
                if (!form.writingResponse.trim()) return 'Please write your response to the writing prompt.';
                break;
            default:
                break;
        }
        return '';
    };

    const handleNext = () => {
        const msg = validatePage();
        if (msg) { setError(msg); return; }
        setPage((p) => Math.min(p + 1, TOTAL_PAGES - 1));
    };

    const handleBack = () => {
        setError('');
        setPage((p) => Math.max(p - 1, 0));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const msg = validatePage();
        if (msg) { setError(msg); return; }

        setSubmitting(true);
        setError('');

        try {
            const result = await submitIeltsEvaluationForm(form);

            if (result.success) {
                setSubmitted(true);
            } else {
                setError(result.message || 'Failed to submit. Please try again.');
            }
        } catch {
            setError('Something went wrong. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="eval-success-overlay">
                <div className="eval-success-card">
                    <FaCheckCircle size={48} color="#00B56F" className="mb-3" />
                    <h2 className="h4 fw-bold mb-2">Evaluation Submitted!</h2>
                    <p className="text-muted mb-4">Thank you for completing the IELTS/PTE evaluation form. Our team will review your responses and contact you shortly.</p>
                    <Link href="/study-abroad" className="btn btn-success rounded-pill px-4">Back to Study Abroad</Link>
                </div>
            </div>
        );
    }

    const renderPage = () => {
        switch (page) {
            case 0:
                return (
                    <>
                        <div className="eval-field eval-field-full">
                            <label className="eval-label">Name <span className="eval-required">*</span></label>
                            <div className="eval-name-row">
                                <div className="eval-input-wrap">
                                    <FaUser className="eval-field-icon" />
                                    <input className="eval-input-line" placeholder="First" value={form.firstName} onChange={(e) => setField('firstName', e.target.value)} />
                                </div>
                                <div className="eval-input-wrap">
                                    <input className="eval-input-line" placeholder="Last" value={form.lastName} onChange={(e) => setField('lastName', e.target.value)} style={{ paddingLeft: 0 }} />
                                </div>
                            </div>
                        </div>
                        <LineInput className="eval-field-half" icon={FaEnvelope} label="Email" required type="email" value={form.email} onChange={(e) => setField('email', e.target.value)} />
                        <LineInput className="eval-field-half" icon={FaMobileAlt} label="Phone number" required type="tel" value={form.phone} onChange={(e) => setField('phone', e.target.value)} />
                        <LineInput className="eval-field-half" icon={FaCalendarAlt} label="Date of Birth" required type="date" value={form.dateOfBirth} onChange={(e) => setField('dateOfBirth', e.target.value)} hint="dd-MMM-yyyy" />
                        <LineInput className="eval-field-half" icon={FaGraduationCap} label="What is your educational qualification?" required value={form.qualification} onChange={(e) => setField('qualification', e.target.value)} />
                    </>
                );

            case 1:
                return (
                    <>
                        <OptionGroup label="Which IELTS test are you planning to take?" required name="ieltsTestType" value={form.ieltsTestType} onChange={setField}
                            options={['IELTS Academic', 'IELTS General', 'Not sure yet']} />
                        <OptionGroup label="Why are you planning to take IELTS?" required name="ieltsPurpose" value={form.ieltsPurpose} onChange={setField}
                            options={['Higher Education', 'Immigration', 'Work purpose', 'Personal goal']} />
                        <OptionGroup label="Have you taken IELTS before?" name="takenIeltsBefore" value={form.takenIeltsBefore} onChange={setField}
                            options={['Yes', 'No']} />

                        {form.takenIeltsBefore === 'Yes' && (
                            <>
                                <LineInput icon={FaCalendarAlt} label="Date of previous attempt" type="date" value={form.previousAttemptDate} onChange={(e) => setField('previousAttemptDate', e.target.value)} hint="dd-MMM-yyyy" />
                                <LineInput icon={FaHashtag} label="Overall Band Score" required type="text" value={form.overallBandScore} onChange={(e) => setField('overallBandScore', e.target.value)} />
                                <label className="eval-label">Score of each Modules</label>
                                <div className="eval-modules-grid">
                                    <LineInput icon={FaHashtag} label="Listening" type="text" value={form.listeningScore} onChange={(e) => setField('listeningScore', e.target.value)} />
                                    <LineInput icon={FaHashtag} label="Reading" type="text" value={form.readingScore} onChange={(e) => setField('readingScore', e.target.value)} />
                                    <LineInput icon={FaHashtag} label="Writing" type="text" value={form.writingScore} onChange={(e) => setField('writingScore', e.target.value)} />
                                    <LineInput icon={FaHashtag} label="Speaking" type="text" value={form.speakingScore} onChange={(e) => setField('speakingScore', e.target.value)} />
                                </div>
                                <LineInput icon={FaHashtag} label="What is your target IELTS band score?" required type="text" value={form.targetBandScore} onChange={(e) => setField('targetBandScore', e.target.value)} />
                                <LineInput icon={FaCalendarAlt} label="Do you have a preferred test date or deadline?" type="date" value={form.preferredTestDate} onChange={(e) => setField('preferredTestDate', e.target.value)} hint="dd-MMM-yyyy" />
                            </>
                        )}
                    </>
                );

            case 2:
                return (
                    <>
                        <OptionGroup label="How would you describe your current English proficiency?" required name="englishProficiency" value={form.englishProficiency} onChange={setField}
                            options={['Beginner', 'Intermediate', 'Advanced']} />
                        <MultiSelect label="Which area of English do you find most challenging?" options={CHALLENGE_OPTIONS} selected={form.challengingAreas} onChange={(v) => setField('challengingAreas', v)} />
                        <div className="eval-field">
                            <label className="eval-label">What are your strengths in English?</label>
                            <textarea className="eval-textarea eval-textarea-short" value={form.englishStrengths} onChange={(e) => setField('englishStrengths', e.target.value)} rows={2} />
                        </div>
                        <div className="eval-field">
                            <label className="eval-label">Have you studied English formally before? If yes, please mention details.</label>
                            <textarea className="eval-textarea eval-textarea-short" value={form.formalEnglishStudy} onChange={(e) => setField('formalEnglishStudy', e.target.value)} rows={2} />
                        </div>
                        <OptionGroup label="How often do you currently use English in daily life?" required name="englishUsageFrequency" value={form.englishUsageFrequency} onChange={setField}
                            options={['Rarely', 'Occasionally', 'Daily', 'Very frequently']} />
                    </>
                );

            case 3:
                return (
                    <>
                        <OptionGroup label="What type of training are you looking for?" required name="trainingType" value={form.trainingType} onChange={setField}
                            options={['Complete IELTS preparation', 'Focus on specific modules', 'Writing correction', 'Speaking practice', 'Mock tests', 'Crash course']} />
                        <OptionGroup label="Have you attended IELTS coaching before?" required name="attendedCoachingBefore" value={form.attendedCoachingBefore} onChange={setField}
                            options={['Yes', 'No']} />
                        <div className="eval-field">
                            <label className="eval-label">If yes, what did you find helpful or unhelpful about the previous training?</label>
                            <div className="eval-input-wrap">
                                <FaKeyboard className="eval-field-icon" />
                                <input className="eval-input-line" value={form.previousTrainingFeedback} onChange={(e) => setField('previousTrainingFeedback', e.target.value)} />
                            </div>
                        </div>
                        <div className="eval-field">
                            <label className="eval-label">What are your expectations from this IELTS training?</label>
                            <div className="eval-input-wrap">
                                <FaKeyboard className="eval-field-icon" />
                                <input className="eval-input-line" value={form.trainingExpectations} onChange={(e) => setField('trainingExpectations', e.target.value)} />
                            </div>
                        </div>
                        <div className="eval-field">
                            <label className="eval-label">How many hours per week can you dedicate to IELTS preparation?</label>
                            <div className="eval-input-wrap">
                                <FaHashtag className="eval-field-icon" />
                                <input className="eval-input-line" type="text" value={form.hoursPerWeek} onChange={(e) => setField('hoursPerWeek', e.target.value)} />
                            </div>
                        </div>
                        <OptionGroup label="Preferred class timing" name="preferredTiming" value={form.preferredTiming} onChange={setField}
                            options={['Morning', 'Afternoon', 'Evening', 'Flexible', 'Other']} />
                        {form.preferredTiming === 'Other' && (
                            <div className="eval-field">
                                <div className="eval-input-wrap">
                                    <FaKeyboard className="eval-field-icon" />
                                    <input className="eval-input-line" placeholder="Please specify your preferred timing" value={form.preferredTimingOther || ''} onChange={(e) => setField('preferredTimingOther', e.target.value)} />
                                </div>
                            </div>
                        )}
                        <OptionGroup label="Preferred class format" required name="preferredFormat" value={form.preferredFormat} onChange={setField}
                            options={['Online', 'Offline', 'Hybrid']} />
                    </>
                );

            case 4:
                return (
                    <>
                        <div className="eval-field">
                            <label className="eval-label">Write a short paragraph (max 250 words) about yourself <span className="eval-required">*</span></label>
                            <textarea className="eval-textarea eval-textarea-long" rows={4} value={form.aboutParagraph} onChange={(e) => setField('aboutParagraph', e.target.value)} placeholder="Tell us about yourself..." />
                        </div>
                        <div className="eval-field">
                            <label className="eval-label">
                                &ldquo;Many people believe that social media has had a negative impact on individuals and society. To what extent do you agree or disagree?&rdquo; <span className="eval-required">*</span>
                            </label>
                            <p className="eval-prompt-text">Organize and write a passage of 400 words.</p>
                            <textarea className="eval-textarea eval-textarea-long" rows={6} value={form.writingResponse} onChange={(e) => setField('writingResponse', e.target.value)} placeholder="Write your response here..." />
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <div className="eval-form-page">
            <div className="eval-form-header">IELTS/PTE EVALUATION FORM</div>

            <div className="eval-form-container">
                <div className="eval-form-card">
                <div className="eval-stepper">
                    {Array.from({ length: TOTAL_PAGES }, (_, i) => (
                        <div
                            key={i}
                            className={`eval-step ${i === page ? 'active' : ''} ${i < page ? 'completed' : ''}`}
                        >
                            {i + 1}
                        </div>
                    ))}
                </div>

                <form onSubmit={page === TOTAL_PAGES - 1 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
                    <p className="eval-section-title">Section {page + 1}: {SECTIONS[page]}</p>
                    <div className="eval-section-divider" />

                    {error && <div className="eval-error">{error}</div>}

                    <div className="eval-form-fields">
                        {renderPage()}
                    </div>

                    <div className="eval-nav">
                        {page > 0 && (
                            <button type="button" className="eval-nav-btn back" onClick={handleBack}>Back</button>
                        )}
                        {page < TOTAL_PAGES - 1 ? (
                            <button type="submit" className="eval-nav-btn next">Next</button>
                        ) : (
                            <button type="submit" className="eval-nav-btn submit" disabled={submitting}>
                                {submitting ? 'Submitting...' : 'Submit'}
                            </button>
                        )}
                    </div>

                    <p className="eval-page-indicator">{page + 1}/{TOTAL_PAGES}</p>
                </form>
                </div>
            </div>
        </div>
    );
}
