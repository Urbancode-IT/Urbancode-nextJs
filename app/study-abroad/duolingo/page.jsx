'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FormPhoneInput } from '@/app/components/common/FormPhoneInput';
import { getNameError, getEmailError, getPhoneError } from '@/app/utils/validationUtils';
import { submitEnquiryForm } from '@/lib/api/api';
import { getLeadSource } from '@/app/utils/leadSource';
import { goToThankYou } from '@/lib/navigation/goToThankYou';
import './DuolingoPage.css';

const BG = 'linear-gradient(135deg,#FBE3CF 0%,#FAE0CB 7.69%,#FADDC6 15.38%,#F9DBC2 23.08%,#F8D8BD 30.77%,#F8D5B9 38.46%,#F7D2B4 46.15%,#F6D0B0 53.85%,#F6CDAB 61.54%,#F5CAA7 69.23%,#F4C7A3 76.92%,#F4C59E 84.62%,#F3C29A 92.31%,#F2BF95 100%)';
const ACCENT = '#8A4310';
const SIDEBAR_BORDER = '#F4C59E';
const SIDEBAR_CARD_BG = '#FFFDFB';
const ACTIVE_CARD_BG = 'linear-gradient(180deg,rgba(251,227,207,0.54) 0%,rgba(242,191,149,0.54) 100%)';
const ECI_BG = '#FDF3EA';

const MODULES = [
  { num: '01', name: 'Adaptive questions', desc: 'Difficulty adjusts to your answers as you go.' },
  { num: '02', name: 'Integrated skills', desc: 'Tasks combine reading, writing, listening and speaking.' },
  { num: '03', name: 'Video interview', desc: 'A short recorded speaking and writing sample.' },
];

// Content from Legacy Study Abroad Page (lines 1264-1363)
const PLANS = [
  {
    label: 'Complete Duolingo',
    hours: '30',
    desc: 'A comprehensive 30-hour program designed for learners seeking end-to-end Duolingo preparation.',
    features: [
      'Covers all four modules – Listening, Reading, Writing, and Speaking',
      'Language development, grammar, vocabulary enhancement',
      'Test strategies and extensive practice',
      'Personalised feedback for continuous improvement',
    ],
    active: true,
  },
  {
    label: 'Focused Training',
    hours: '20',
    desc: 'A structured 20-hour program tailored for candidates who already possess a good command of English but require targeted training in specific Duolingo modules or skill areas.',
    features: [
      'Focused training on specific modules or skills',
      'Emphasis on exam techniques and accuracy',
      'Time management strategies',
      'Guided practice to improve band scores',
    ],
    active: false,
  },
  {
    label: 'Crash Course',
    hours: '12',
    desc: 'A fast-paced 12-hour revision program ideal for candidates appearing for the Duolingo exam in the near future.',
    features: [
      'Key test strategies and high-impact tips',
      'Common question types across all modules',
      'Mock practice for real exam experience',
      'Maximise performance in a limited timeframe',
    ],
    active: false,
  },
];

const ECI_ITEMS = [
  { num: '01', title: 'Customised Study Plan', desc: 'A personalised plan tailored to your goals, strengths, and target band.' },
  { num: '02', title: 'Hands-on Learning', desc: 'Interactive sessions, practical strategies, and real exam simulations.' },
  { num: '03', title: 'Regular Assignments', desc: 'Carefully designed assignments to reinforce learning and track progress.' },
  { num: '04', title: 'Mock Tests with Feedback', desc: 'Regular mock tests will be corrected in detail and personalised feedback will be provided.' },
];

const LEARNING_MODES = [
  {
    id: 'classroom',
    iconKey: 'home',
    name: 'Classroom',
    desc: 'Small in-person batches with direct trainer support.',
    bullets: ['Small batch sizes', 'Peer practice', 'Printed materials'],
    btnText: 'Choose classroom',
    popular: false,
  },
  {
    id: 'live-online',
    iconKey: 'monitor',
    name: 'Live online',
    desc: 'Interactive live classes you can join from anywhere.',
    bullets: ['Join from home', 'Session recordings', 'Digital resources'],
    btnText: 'Choose live online',
    popular: true,
  },
  {
    id: 'one-to-one',
    iconKey: 'user',
    name: 'One-to-one',
    desc: 'Personalised coaching built around your schedule.',
    bullets: ['Flexible timing', 'Fully personalised', 'Faster progress'],
    btnText: 'Choose one-to-one',
    popular: false,
  },
];

const FORMAT_OPTIONS = ['Classroom', 'Live online', 'One-to-one'];

function ModeIcon({ iconKey }) {
  if (iconKey === 'home') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
  if (iconKey === 'monitor') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

export default function DuolingoPage() {
  // Sidebar Form State
  const [form, setForm] = useState({ name: '', email: '', phone: '', format: 'Classroom' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Dedicated Popup Modal Form State (Website Green Theme)
  const [modalData, setModalData] = useState(null);
  const [modalForm, setModalForm] = useState({ name: '', email: '', phone: '', format: 'Classroom' });
  const [modalErrors, setModalErrors] = useState({});
  const [modalLoading, setModalLoading] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  // Rock-solid sticky sidebar pinning for desktop/laptop/monitor
  const contentWrapRef = useRef(null);
  const sidebarRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const container = contentWrapRef.current;
    const sidebar = sidebarRef.current;
    const card = cardRef.current;
    if (!container || !sidebar || !card) return;

    let rafId = 0;
    const TOP_OFFSET = 96;

    const updateSticky = () => {
      rafId = 0;
      if (window.innerWidth < 992) {
        card.style.position = '';
        card.style.top = '';
        card.style.left = '';
        card.style.width = '';
        card.style.bottom = '';
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const sidebarRect = sidebar.getBoundingClientRect();
      const cardHeight = card.offsetHeight;

      // 1. Above sticky zone
      if (containerRect.top > TOP_OFFSET) {
        card.style.position = '';
        card.style.top = '';
        card.style.left = '';
        card.style.width = '';
        card.style.bottom = '';
        return;
      }

      // 2. Reached bottom of content column
      const stopPosition = containerRect.bottom - cardHeight - TOP_OFFSET;
      if (stopPosition <= 0) {
        card.style.position = 'absolute';
        card.style.top = 'auto';
        card.style.bottom = '0';
        card.style.left = '0';
        card.style.width = '100%';
        return;
      }

      // 3. Fixed while scrolling throughout content
      card.style.position = 'fixed';
      card.style.top = `${TOP_OFFSET}px`;
      card.style.left = `${sidebarRect.left}px`;
      card.style.width = `${sidebarRect.width}px`;
      card.style.bottom = '';
    };

    const onScrollOrResize = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateSticky);
      }
    };

    updateSticky();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (card) {
        card.style.position = '';
        card.style.top = '';
        card.style.left = '';
        card.style.width = '';
        card.style.bottom = '';
      }
    };
  }, []);

  const setField = (key, val) => {
    setForm(f => ({ ...f, [key]: val }));
    setErrors(e => ({ ...e, [key]: '' }));
  };

  const setModalField = (key, val) => {
    setModalForm(f => ({ ...f, [key]: val }));
    setModalErrors(e => ({ ...e, [key]: '' }));
  };

  const validate = (f) => {
    const errs = {};
    const nameErr = getNameError(f.name);
    const emailErr = getEmailError(f.email);
    const phoneErr = getPhoneError(f.phone);
    if (nameErr) errs.name = nameErr;
    if (emailErr) errs.email = emailErr;
    if (phoneErr) errs.phone = phoneErr;
    return errs;
  };

  const handleSidebarSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      await submitEnquiryForm({
        name: form.name,
        email: form.email,
        phone: form.phone,
        course: 'Duolingo Preparation',
        mode: form.format,
        leadSource: getLeadSource(),
        leadPlace: 'Duolingo Internal Page — Sidebar Book Free Demo',
      });
      setSubmitted(true);
      goToThankYou();
    } catch {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(modalForm);
    if (Object.keys(errs).length) { setModalErrors(errs); return; }
    setModalLoading(true);
    try {
      await submitEnquiryForm({
        name: modalForm.name,
        email: modalForm.email,
        phone: modalForm.phone,
        course: modalData?.course || 'Duolingo Preparation',
        mode: modalForm.format,
        leadSource: getLeadSource(),
        leadPlace: modalData?.leadPlace || 'Duolingo Internal Page — Popup Form',
      });
      setModalSubmitted(true);
      goToThankYou();
    } catch {
      setModalErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setModalLoading(false);
    }
  };

  const openHeroPrepModal = () => {
    setModalData({
      title: 'Start Your Preparation — Duolingo',
      sub: 'Get expert counseling and a tailored study plan',
      course: 'Duolingo Preparation',
      leadPlace: 'Duolingo Internal Page — Hero Start Preparation',
    });
    setModalForm({ name: '', email: '', phone: '', format: 'Classroom' });
    setModalErrors({});
    setModalSubmitted(false);
  };

  const openPlanModal = (plan) => {
    setModalData({
      title: `Enroll — ${plan.label}`,
      sub: `${plan.hours} Hours · Comprehensive Duolingo coaching`,
      course: `Duolingo — ${plan.label}`,
      leadPlace: `Duolingo Internal Page — Plan Enroll (${plan.label})`,
    });
    setModalForm({ name: '', email: '', phone: '', format: 'Classroom' });
    setModalErrors({});
    setModalSubmitted(false);
  };

  const openFormatModal = (mode) => {
    setModalData({
      title: `Enroll — ${mode.name} Format`,
      sub: mode.desc,
      course: `Duolingo — ${mode.name} Format`,
      leadPlace: `Duolingo Internal Page — Format Choose (${mode.name})`,
    });
    setModalForm({ name: '', email: '', phone: '', format: mode.name });
    setModalErrors({});
    setModalSubmitted(false);
  };

  const closeModal = () => {
    setModalData(null);
    setModalForm({ name: '', email: '', phone: '', format: 'Classroom' });
    setModalErrors({});
    setModalSubmitted(false);
  };

  return (
    <main
      className="ep-int-root"
      style={{
        '--ep-accent': ACCENT,
        '--ep-sidebar-border': SIDEBAR_BORDER,
        '--ep-sidebar-card-bg': SIDEBAR_CARD_BG,
      }}
    >

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="ep-int-hero-wrap">
        <div className="ep-int-hero-card" style={{ background: BG }}>
          <div className="ep-int-hero-content">
            <nav className="ep-int-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="ep-int-breadcrumb-sep">/</span>
              <Link href="/study-abroad#english-proficiency">Test Prep</Link>
              <span className="ep-int-breadcrumb-sep">/</span>
              <span>Duolingo</span>
            </nav>
            <div className="ep-int-tag">
              <span className="ep-int-tag-text" style={{ color: ACCENT }}>Duolingo</span>
            </div>
            <h1 className="ep-int-hero-title">Prepare for the Duolingo English Test</h1>
            <p className="ep-int-hero-desc">A convenient online English test with flexible access. We help you prepare for every question type.</p>
            <div className="ep-int-cta-row">
              <button
                type="button"
                className="ep-int-btn-primary"
                onClick={openHeroPrepModal}
              >
                Start Your Preparation
              </button>
              <button
                type="button"
                className="ep-int-btn-secondary"
                onClick={() => document.getElementById('duolingo-sidebar-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              >
                Book a Free Demo Class
              </button>
            </div>
          </div>
          <div className="ep-int-hero-img-wrap">
            <Image
              src="/images/study-abroad/study-abroadv2/english-proficiency/internal-pages/internal-Dualingo-image.webp"
              alt="Student taking Duolingo English Test online"
              fill
              priority
              sizes="(max-width:991px) 90vw, 572px"
              className="ep-int-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── CONTENT + SIDEBAR (Course Structures, ECI, Learning Modes in Left Col) ── */}
      <div className="ep-int-content-wrap" ref={contentWrapRef}>

        {/* LEFT COLUMN: Max-width 812px matching title width */}
        <div className="ep-int-main-col">

          {/* 1. About the test */}
          <div>
            <p className="ep-int-about-label">About the test</p>
            <h2 className="ep-int-about-title">What is Duolingo?</h2>
            <p className="ep-int-about-desc">
              The Duolingo English Test is an adaptive online test taken from home. It is accepted by a growing
              number of institutions. Confirm acceptance with each university before booking.
            </p>

            <p className="ep-int-format-label">Test Format</p>
            <h3 className="ep-int-format-title">Sections at a glance</h3>
            <div className="ep-int-modules-grid">
              {MODULES.map(m => (
                <div key={m.num} className="ep-int-module-card">
                  <span className="ep-int-module-num">{m.num}</span>
                  <h4 className="ep-int-module-name">{m.name}</h4>
                  <p className="ep-int-module-desc">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Course Structure (from Legacy Study Abroad Page) */}
          <section className="ep-int-cs-wrap">
            <p className="ep-int-cs-label">Duolingo course structures</p>
            <h2 className="ep-int-cs-title">Flexible options. Expert guidance. Your success, our mission.</h2>
            <div className="ep-int-cs-grid">
              {PLANS.map((plan) => (
                <div
                  key={plan.label}
                  className={`ep-int-cs-card${plan.active ? ' ep-int-cs-card--active' : ''}`}
                  style={plan.active ? { background: ACTIVE_CARD_BG } : {}}
                >
                  <p className="ep-int-cs-card-label">{plan.label}</p>
                  <div className="ep-int-cs-hours-row">
                    <span className="ep-int-cs-hours-num">{plan.hours}</span>
                    <span className="ep-int-cs-hours-text">Hours</span>
                  </div>
                  <p className="ep-int-cs-card-desc">{plan.desc}</p>
                  <div className="ep-int-cs-divider" />
                  <ul className="ep-int-cs-list">
                    {plan.features.map((f, i) => (
                      <li key={i} className="ep-int-cs-list-item">
                        <span className="ep-int-cs-bullet" style={{ background: ACCENT }}>✓</span>
                        <span className="ep-int-cs-list-text">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="ep-int-cs-enroll-btn"
                    onClick={() => openPlanModal(plan)}
                  >
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Every Course Includes */}
          <section className="ep-int-eci-wrap">
            <div className="ep-int-eci-box" style={{ background: ECI_BG }}>
              <p className="ep-int-eci-label">Every course includes</p>
              <div className="ep-int-eci-grid">
                {ECI_ITEMS.map(item => (
                  <div key={item.num} className="ep-int-eci-card">
                    <div className="ep-int-eci-icon" style={{ background: ACCENT }}>{item.num}</div>
                    <div className="ep-int-eci-text">
                      <p className="ep-int-eci-title">{item.title}</p>
                      <p className="ep-int-eci-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Learning Modes */}
          <section className="ep-int-lm-wrap">
            <p className="ep-int-lm-label">Learning Modes</p>
            <h2 className="ep-int-lm-title">Choose your format</h2>
            <div className="ep-int-lm-grid">
              {LEARNING_MODES.map(mode => (
                <div
                  key={mode.name}
                  className={`ep-int-lm-card${mode.popular ? ' ep-int-lm-card--popular' : ''}`}
                >
                  {mode.popular && <span className="ep-int-lm-popular-badge">Most popular</span>}
                  <div className="ep-int-lm-icon" style={{ background: ACCENT }}>
                    <ModeIcon iconKey={mode.iconKey} />
                  </div>
                  <div className="ep-int-lm-body">
                    <p className="ep-int-lm-name">{mode.name}</p>
                    <p className="ep-int-lm-desc">{mode.desc}</p>
                    <ul className="ep-int-lm-bullets">
                      {mode.bullets.map((b, i) => (
                        <li key={i} className="ep-int-lm-bullet-item">
                          <span className="ep-int-lm-dot" style={{ background: ACCENT }} />
                          <span className="ep-int-lm-bullet-text">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className="ep-int-lm-choose-btn"
                      onClick={() => openFormatModal(mode)}
                    >
                      <span className="ep-int-lm-choose-text">{mode.btnText}</span>
                      <span className="ep-int-lm-choose-icon">↗</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN: Sidebar Form (styled like user image media_1794574039722_4f38c3dd.png) */}
        <aside className="ep-int-sidebar" id="duolingo-sidebar-form" ref={sidebarRef}>
          <div className="ep-int-sidebar-card" ref={cardRef}>
            <div className="ep-int-sidebar-inner">
              {submitted ? (
                <div className="ep-int-form-success">
                  <p className="ep-int-form-success-title">🎉 You&apos;re registered!</p>
                  <p className="ep-int-form-success-sub">Our team will contact you shortly with your demo class details.</p>
                </div>
              ) : (
                <form onSubmit={handleSidebarSubmit} noValidate>
                  <p className="ep-int-form-heading">Start Duolingo preparation</p>
                  <p className="ep-int-form-subheading">Get a free demo class and study plan.</p>
                  <div className="ep-int-field">
                    <label className="ep-int-label" htmlFor="duo-name">Full name</label>
                    <input
                      id="duo-name"
                      type="text"
                      className={`ep-int-input${errors.name ? ' error' : ''}`}
                      value={form.name}
                      onChange={e => setField('name', e.target.value)}
                      placeholder="Enter your name"
                    />
                    {errors.name && <span className="ep-int-field-error">{errors.name}</span>}
                  </div>
                  <div className="ep-int-field">
                    <label className="ep-int-label" htmlFor="duo-email">Email</label>
                    <input
                      id="duo-email"
                      type="email"
                      className={`ep-int-input${errors.email ? ' error' : ''}`}
                      value={form.email}
                      onChange={e => setField('email', e.target.value)}
                      placeholder="Enter your email"
                    />
                    {errors.email && <span className="ep-int-field-error">{errors.email}</span>}
                  </div>
                  <div className="ep-int-field">
                    <label className="ep-int-label" htmlFor="duo-phone">Phone</label>
                    <div className={`ep-int-phone-wrap${errors.phone ? ' error' : ''}`}>
                      <FormPhoneInput
                        name="phone"
                        value={form.phone}
                        onChange={val => setField('phone', val || '')}
                        defaultCountry="IN"
                        international={false}
                        withCountryCallingCode={false}
                        placeholder="Enter phone number"
                      />
                    </div>
                    {errors.phone && <span className="ep-int-field-error">{errors.phone}</span>}
                  </div>
                  <div className="ep-int-field">
                    <label className="ep-int-label" htmlFor="duo-format">Preferred format</label>
                    <div className="ep-int-select-wrap">
                      <select
                        id="duo-format"
                        className="ep-int-select"
                        value={form.format}
                        onChange={e => setField('format', e.target.value)}
                      >
                        {FORMAT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  {errors.submit && <span className="ep-int-field-error">{errors.submit}</span>}
                  <button type="submit" className="ep-int-submit-btn" disabled={loading}>
                    {loading ? 'Sending…' : 'Book Free Demo'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </aside>

      </div>

      {/* ── POPUP MODAL FORM (Website Green Theme) ── */}
      {modalData && (
        <div className="ep-int-plan-modal-overlay" onClick={e => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="ep-int-plan-modal">
            <div className="ep-int-plan-modal-header">
              <div>
                <h3 className="ep-int-plan-modal-title">{modalData.title}</h3>
                <p className="ep-int-plan-modal-sub">{modalData.sub}</p>
              </div>
              <button type="button" className="ep-int-plan-modal-close" onClick={closeModal} aria-label="Close modal">×</button>
            </div>

            {modalSubmitted ? (
              <div className="ep-int-form-success">
                <p className="ep-int-form-success-title">🎉 You&apos;re registered!</p>
                <p className="ep-int-form-success-sub">Our counseling team will contact you shortly with your details.</p>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} noValidate className="ep-int-modal-form">
                <div className="ep-int-modal-field">
                  <label className="ep-int-modal-label" htmlFor="m-duo-name">Full name</label>
                  <input
                    id="m-duo-name"
                    type="text"
                    className={`ep-int-modal-input${modalErrors.name ? ' error' : ''}`}
                    value={modalForm.name}
                    onChange={e => setModalField('name', e.target.value)}
                    placeholder="Enter your name"
                  />
                  {modalErrors.name && <span className="ep-int-field-error">{modalErrors.name}</span>}
                </div>

                <div className="ep-int-modal-field">
                  <label className="ep-int-modal-label" htmlFor="m-duo-email">Email</label>
                  <input
                    id="m-duo-email"
                    type="email"
                    className={`ep-int-modal-input${modalErrors.email ? ' error' : ''}`}
                    value={modalForm.email}
                    onChange={e => setModalField('email', e.target.value)}
                    placeholder="Enter your email"
                  />
                  {modalErrors.email && <span className="ep-int-field-error">{modalErrors.email}</span>}
                </div>

                <div className="ep-int-modal-field">
                  <label className="ep-int-modal-label" htmlFor="m-duo-phone">Phone</label>
                  <div className={`ep-int-modal-phone${modalErrors.phone ? ' error' : ''}`}>
                    <FormPhoneInput
                      name="m-phone"
                      value={modalForm.phone}
                      onChange={val => setModalField('phone', val || '')}
                      defaultCountry="IN"
                      international={false}
                      withCountryCallingCode={false}
                      placeholder="Enter phone number"
                    />
                  </div>
                  {modalErrors.phone && <span className="ep-int-field-error">{modalErrors.phone}</span>}
                </div>

                <div className="ep-int-modal-field">
                  <label className="ep-int-modal-label" htmlFor="m-duo-format">Preferred format</label>
                  <div className="ep-int-modal-select-wrap">
                    <select
                      id="m-duo-format"
                      className="ep-int-modal-select"
                      value={modalForm.format}
                      onChange={e => setModalField('format', e.target.value)}
                    >
                      {FORMAT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                {modalErrors.submit && <span className="ep-int-field-error">{modalErrors.submit}</span>}

                <button type="submit" className="ep-int-modal-submit" disabled={modalLoading}>
                  {modalLoading ? 'Sending…' : 'Enroll Now'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
