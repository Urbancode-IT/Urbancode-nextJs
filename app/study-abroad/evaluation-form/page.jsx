'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
    FaUser, FaEnvelope, FaMobileAlt, FaCalendarAlt, FaGraduationCap,
    FaHashtag, FaUpload, FaKeyboard, FaCheckCircle
} from 'react-icons/fa';
import { submitIeltsEvaluationForm } from '@/lib/api/api';
import './EvaluationForm.css';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { evaluationFormSchema } from '@/app/schemas/enquirySchema';
import { FormPhoneInput } from '@/app/components/common/FormPhoneInput';
import { Honeypot } from '@/app/components/common/Honeypot';

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
    honeypot: ''
};

function LineInput({ icon: Icon, label, required, hint, className = '', error, ...inputProps }) {
    return (
        <div className={`eval-field ${className}`.trim()}>
            <label className="eval-label">
                {label}{required && <span className="eval-required"> *</span>}
            </label>
            <div className={`eval-input-wrap ${error ? 'is-invalid' : ''}`}>
                {Icon && <Icon className="eval-field-icon" />}
                <input className="eval-input-line" {...inputProps} />
            </div>
            {hint && <p className="eval-hint">{hint}</p>}
            {error && <p className="eval-error-msg text-danger mt-1" style={{fontSize:'0.85rem'}}>{error}</p>}
        </div>
    );
}

function OptionGroup({ label, required, options, value, onChange, name, error }) {
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
                        onClick={() => onChange(opt)}
                    >
                        {opt}
                    </button>
                ))}
            </div>
            {error && <p className="eval-error-msg text-danger mt-1" style={{fontSize:'0.85rem'}}>{error}</p>}
        </div>
    );
}

function MultiSelect({ label, options, selected = [], onChange, error }) {
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
            <div className={`eval-input-wrap ${error ? 'is-invalid' : ''}`}>
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
            {error && <p className="eval-error-msg text-danger mt-1" style={{fontSize:'0.85rem'}}>{error}</p>}
        </div>
    );
}

export default function EvaluationFormPage() {
    const [page, setPage] = useState(0);
    const [loadTime, setLoadTime] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    useEffect(() => {
        setLoadTime(Date.now());
    }, []);

    const {
        register,
        control,
        handleSubmit,
        trigger,
        watch,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(evaluationFormSchema),
        defaultValues: INITIAL_FORM,
        mode: 'onChange'
    });

    const watchTakenIeltsBefore = watch('takenIeltsBefore');
    const watchPreferredTiming = watch('preferredTiming');

    const handleNext = async () => {
        // Define fields to validate for each step
        let fieldsToValidate = [];
        switch (page) {
            case 0:
                fieldsToValidate = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'qualification'];
                break;
            case 1:
                fieldsToValidate = ['ieltsTestType', 'ieltsPurpose', 'takenIeltsBefore'];
                if (watchTakenIeltsBefore === 'Yes') {
                    fieldsToValidate.push('overallBandScore', 'targetBandScore', 'previousAttemptDate', 'listeningScore', 'readingScore', 'writingScore', 'speakingScore', 'preferredTestDate');
                }
                break;
            case 2:
                fieldsToValidate = ['englishProficiency', 'challengingAreas', 'englishStrengths', 'formalEnglishStudy', 'englishUsageFrequency'];
                break;
            case 3:
                fieldsToValidate = ['trainingType', 'attendedCoachingBefore', 'previousTrainingFeedback', 'trainingExpectations', 'hoursPerWeek', 'preferredTiming', 'preferredTimingOther', 'preferredFormat'];
                break;
        }

        const isStepValid = await trigger(fieldsToValidate);
        
        if (isStepValid) {
            setPage((p) => Math.min(p + 1, TOTAL_PAGES - 1));
            setSubmitError('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        setSubmitError('');
        setPage((p) => Math.max(p - 1, 0));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const onSubmit = async (data) => {
        if (data.honeypot) {
            return; // Silent fail
        }

        const timeToSubmit = Date.now() - loadTime;
        if (timeToSubmit < 3000) {
            setSubmitError("Please complete the form properly.");
            return;
        }

        setSubmitError('');

        try {
            const result = await submitIeltsEvaluationForm(data);
            if (result.success) {
                setSubmitted(true);
            } else {
                setSubmitError(result.message || 'Failed to submit. Please try again.');
            }
        } catch {
            setSubmitError('Something went wrong. Please try again later.');
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
                                    <input className={`eval-input-line ${errors.firstName ? 'is-invalid' : ''}`} placeholder="First" {...register('firstName')} />
                                </div>
                                <div className="eval-input-wrap">
                                    <input className={`eval-input-line ${errors.lastName ? 'is-invalid' : ''}`} placeholder="Last" {...register('lastName')} style={{ paddingLeft: 0 }} />
                                </div>
                            </div>
                            {(errors.firstName || errors.lastName) && (
                                <p className="eval-error-msg text-danger mt-1" style={{fontSize:'0.85rem'}}>
                                    {errors.firstName?.message || errors.lastName?.message}
                                </p>
                            )}
                        </div>
                        <LineInput className="eval-field-half" icon={FaEnvelope} label="Email" required type="email" {...register('email')} error={errors.email?.message} />
                        
                        <div className="eval-field eval-field-half">
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => (
                                    <FormPhoneInput
                                        {...field}
                                        label="Phone number"
                                        error={errors.phone?.message}
                                    />
                                )}
                            />
                        </div>

                        <LineInput className="eval-field-half" icon={FaCalendarAlt} label="Date of Birth" required type="date" {...register('dateOfBirth')} hint="dd-MMM-yyyy" error={errors.dateOfBirth?.message} />
                        <LineInput className="eval-field-half" icon={FaGraduationCap} label="What is your educational qualification?" required {...register('qualification')} error={errors.qualification?.message} />
                    </>
                );

            case 1:
                return (
                    <>
                        <Controller name="ieltsTestType" control={control} render={({ field: { value, onChange } }) => (
                            <OptionGroup label="Which IELTS test are you planning to take?" required name="ieltsTestType" value={value} onChange={onChange}
                                options={['IELTS Academic', 'IELTS General', 'Not sure yet']} error={errors.ieltsTestType?.message} />
                        )} />
                        
                        <Controller name="ieltsPurpose" control={control} render={({ field: { value, onChange } }) => (
                            <OptionGroup label="Why are you planning to take IELTS?" required name="ieltsPurpose" value={value} onChange={onChange}
                                options={['Higher Education', 'Immigration', 'Work purpose', 'Personal goal']} error={errors.ieltsPurpose?.message} />
                        )} />
                        
                        <Controller name="takenIeltsBefore" control={control} render={({ field: { value, onChange } }) => (
                            <OptionGroup label="Have you taken IELTS before?" required name="takenIeltsBefore" value={value} onChange={onChange}
                                options={['Yes', 'No']} error={errors.takenIeltsBefore?.message} />
                        )} />

                        {watchTakenIeltsBefore === 'Yes' && (
                            <>
                                <LineInput icon={FaCalendarAlt} label="Date of previous attempt" type="date" {...register('previousAttemptDate')} hint="dd-MMM-yyyy" error={errors.previousAttemptDate?.message} />
                                <LineInput icon={FaHashtag} label="Overall Band Score" required type="text" {...register('overallBandScore')} error={errors.overallBandScore?.message} />
                                <label className="eval-label">Score of each Modules</label>
                                <div className="eval-modules-grid">
                                    <LineInput icon={FaHashtag} label="Listening" type="text" {...register('listeningScore')} />
                                    <LineInput icon={FaHashtag} label="Reading" type="text" {...register('readingScore')} />
                                    <LineInput icon={FaHashtag} label="Writing" type="text" {...register('writingScore')} />
                                    <LineInput icon={FaHashtag} label="Speaking" type="text" {...register('speakingScore')} />
                                </div>
                                <LineInput icon={FaHashtag} label="What is your target IELTS band score?" required type="text" {...register('targetBandScore')} error={errors.targetBandScore?.message} />
                                <LineInput icon={FaCalendarAlt} label="Do you have a preferred test date or deadline?" type="date" {...register('preferredTestDate')} hint="dd-MMM-yyyy" />
                            </>
                        )}
                    </>
                );

            case 2:
                return (
                    <>
                        <Controller name="englishProficiency" control={control} render={({ field: { value, onChange } }) => (
                            <OptionGroup label="How would you describe your current English proficiency?" required name="englishProficiency" value={value} onChange={onChange}
                                options={['Beginner', 'Intermediate', 'Advanced']} error={errors.englishProficiency?.message} />
                        )} />
                        
                        <Controller name="challengingAreas" control={control} render={({ field: { value, onChange } }) => (
                            <MultiSelect label="Which area of English do you find most challenging?" options={CHALLENGE_OPTIONS} selected={value || []} onChange={onChange} error={errors.challengingAreas?.message} />
                        )} />
                        
                        <div className="eval-field">
                            <label className="eval-label">What are your strengths in English?</label>
                            <textarea className="eval-textarea eval-textarea-short" {...register('englishStrengths')} rows={2} />
                        </div>
                        <div className="eval-field">
                            <label className="eval-label">Have you studied English formally before? If yes, please mention details.</label>
                            <textarea className="eval-textarea eval-textarea-short" {...register('formalEnglishStudy')} rows={2} />
                        </div>
                        
                        <Controller name="englishUsageFrequency" control={control} render={({ field: { value, onChange } }) => (
                            <OptionGroup label="How often do you currently use English in daily life?" required name="englishUsageFrequency" value={value} onChange={onChange}
                                options={['Rarely', 'Occasionally', 'Daily', 'Very frequently']} error={errors.englishUsageFrequency?.message} />
                        )} />
                    </>
                );

            case 3:
                return (
                    <>
                        <Controller name="trainingType" control={control} render={({ field: { value, onChange } }) => (
                            <OptionGroup label="What type of training are you looking for?" required name="trainingType" value={value} onChange={onChange}
                                options={['Complete IELTS preparation', 'Focus on specific modules', 'Writing correction', 'Speaking practice', 'Mock tests', 'Crash course']} error={errors.trainingType?.message} />
                        )} />
                        
                        <Controller name="attendedCoachingBefore" control={control} render={({ field: { value, onChange } }) => (
                            <OptionGroup label="Have you attended IELTS coaching before?" required name="attendedCoachingBefore" value={value} onChange={onChange}
                                options={['Yes', 'No']} error={errors.attendedCoachingBefore?.message} />
                        )} />
                        
                        <div className="eval-field">
                            <label className="eval-label">If yes, what did you find helpful or unhelpful about the previous training?</label>
                            <div className="eval-input-wrap">
                                <FaKeyboard className="eval-field-icon" />
                                <input className="eval-input-line" {...register('previousTrainingFeedback')} />
                            </div>
                        </div>
                        <div className="eval-field">
                            <label className="eval-label">What are your expectations from this IELTS training?</label>
                            <div className="eval-input-wrap">
                                <FaKeyboard className="eval-field-icon" />
                                <input className="eval-input-line" {...register('trainingExpectations')} />
                            </div>
                        </div>
                        <div className="eval-field">
                            <label className="eval-label">How many hours per week can you dedicate to IELTS preparation?</label>
                            <div className="eval-input-wrap">
                                <FaHashtag className="eval-field-icon" />
                                <input className="eval-input-line" type="text" {...register('hoursPerWeek')} />
                            </div>
                        </div>
                        
                        <Controller name="preferredTiming" control={control} render={({ field: { value, onChange } }) => (
                            <OptionGroup label="Preferred class timing" name="preferredTiming" value={value} onChange={onChange}
                                options={['Morning', 'Afternoon', 'Evening', 'Flexible', 'Other']} />
                        )} />
                        
                        {watchPreferredTiming === 'Other' && (
                            <div className="eval-field">
                                <div className="eval-input-wrap">
                                    <FaKeyboard className="eval-field-icon" />
                                    <input className="eval-input-line" placeholder="Please specify your preferred timing" {...register('preferredTimingOther')} />
                                </div>
                            </div>
                        )}
                        
                        <Controller name="preferredFormat" control={control} render={({ field: { value, onChange } }) => (
                            <OptionGroup label="Preferred class format" required name="preferredFormat" value={value} onChange={onChange}
                                options={['Online', 'Offline', 'Hybrid']} error={errors.preferredFormat?.message} />
                        )} />
                    </>
                );

            case 4:
                return (
                    <>
                        <div className="eval-field">
                            <label className="eval-label">Write a short paragraph (max 250 words) about yourself <span className="eval-required">*</span></label>
                            <textarea className={`eval-textarea eval-textarea-long ${errors.aboutParagraph ? 'is-invalid' : ''}`} rows={4} {...register('aboutParagraph')} placeholder="Tell us about yourself..." />
                            {errors.aboutParagraph && <p className="text-danger mt-1" style={{fontSize:'0.85rem'}}>{errors.aboutParagraph.message}</p>}
                        </div>
                        <div className="eval-field">
                            <label className="eval-label">
                                &ldquo;Many people believe that social media has had a negative impact on individuals and society. To what extent do you agree or disagree?&rdquo; <span className="eval-required">*</span>
                            </label>
                            <p className="eval-prompt-text">Organize and write a passage of 400 words.</p>
                            <textarea className={`eval-textarea eval-textarea-long ${errors.writingResponse ? 'is-invalid' : ''}`} rows={6} {...register('writingResponse')} placeholder="Write your response here..." />
                            {errors.writingResponse && <p className="text-danger mt-1" style={{fontSize:'0.85rem'}}>{errors.writingResponse.message}</p>}
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

                <form onSubmit={page === TOTAL_PAGES - 1 ? handleSubmit(onSubmit) : (e) => { e.preventDefault(); handleNext(); }} noValidate>
                    <Honeypot register={register} />
                    <p className="eval-section-title">Section {page + 1}: {SECTIONS[page]}</p>
                    <div className="eval-section-divider" />

                    {submitError && <div className="eval-error">{submitError}</div>}

                    <div className="eval-form-fields">
                        {renderPage()}
                    </div>

                    <div className="eval-nav">
                        {page > 0 && (
                            <button type="button" className="eval-nav-btn back" onClick={handleBack} disabled={isSubmitting}>Back</button>
                        )}
                        {page < TOTAL_PAGES - 1 ? (
                            <button type="button" className="eval-nav-btn next" onClick={handleNext}>Next</button>
                        ) : (
                            <button type="submit" className="eval-nav-btn submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
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
