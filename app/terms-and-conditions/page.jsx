import React from 'react';
import PolicyLayout from '../components/policies/PolicyLayout';
import PolicySection from '../components/policies/PolicySection';

export const metadata = {
  title: 'Terms & Conditions | Urbancode Edutech Solutions',
  description: 'Read the terms and conditions for using Urbancode Edutech Solutions services, courses, and platform.',
  openGraph: {
    title: 'Terms & Conditions | Urbancode Edutech Solutions',
    description: 'Guidelines and rules for using our services.',
    type: 'website',
  }
};

const TermsConditionsPage = () => {
  const sections = [
    { title: '1. Introduction', id: 'introduction' },
    { title: '2. Services Offered', id: 'services' },
    { title: '3. User Eligibility', id: 'eligibility' },
    { title: '4. Fees & Payment Terms', id: 'payment' },
    { title: '5. Refund & Cancellation', id: 'refund' },
    { title: '6. Use of Services', id: 'use' },
    { title: '7. Intellectual Property', id: 'ip' },
    { title: '8. Placement Disclaimer', id: 'placement' },
    { title: '9. LMS Access', id: 'lms' },
    { title: '10. Privacy & Data Protection', id: 'privacy' },
    { title: '11. Limitation of Liability', id: 'liability' },
    { title: '12. Modifications', id: 'modifications' },
    { title: '13. Termination', id: 'termination' },
    { title: '14. Governing Law', id: 'law' },
    { title: '15. Contact Information', id: 'contact' },
  ];

  return (
    <PolicyLayout 
      title="Terms & Conditions" 
      lastUpdated="02-April-2026" 
      sections={sections}
    >
      <div id="introduction">
        <PolicySection title="1. Introduction">
          <p>Welcome to Urbancode Edutech Solutions Pvt Ltd. By accessing our website, enrolling in our courses, or using our services, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before proceeding.</p>
        </PolicySection>
      </div>

      <div id="services">
        <PolicySection title="2. Services Offered">
          <p>We provide:</p>
          <ul>
            <li>Online and offline training programs</li>
            <li>Certification courses</li>
            <li>Internship and placement assistance</li>
            <li>Learning Management System (LMS) access</li>
          </ul>
          <p>All services are subject to availability and may be updated periodically.</p>
        </PolicySection>
      </div>

      <div id="eligibility">
        <PolicySection title="3. User Eligibility">
          <ul>
            <li>Users must provide accurate and complete information during registration.</li>
            <li>Students under 18 must have parental/guardian consent.</li>
            <li>Urbancode reserves the right to deny access if eligibility criteria are not met.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="payment">
        <PolicySection title="4. Fees & Payment Terms">
          <ul>
            <li>Course fees must be paid as per the selected plan.</li>
            <li>Payments are non-transferable and non-adjustable across courses.</li>
            <li>Failure to complete payments may result in suspension of access to services.</li>
            <li>All applicable taxes (including GST) will be charged.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="refund">
        <PolicySection title="5. Refund & Cancellation">
          <div className="policy-note">
            <strong>No refunds</strong> will be issued after course access has been substantially utilized.
          </div>
          <ul>
            <li>Refunds are subject to the institute’s official refund policy.</li>
            <li>Cancellation requests must be submitted through <strong>official communication channels</strong> only.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="use">
        <PolicySection title="6. Use of Services">
          <p>By using our platform, you agree:</p>
          <ul>
            <li>Not to misuse, copy, or distribute course materials without permission</li>
            <li>Not to engage in unlawful, abusive, or disruptive behavior</li>
            <li>To maintain confidentiality of login credentials</li>
          </ul>
          <p>Violation may lead to termination of access without refund.</p>
        </PolicySection>
      </div>

      <div id="ip">
        <PolicySection title="7. Intellectual Property Rights">
          <p>
            All course content, materials, and videos are the <strong>sole intellectual property</strong> of Urbancode. 
            Unauthorized reproduction, sharing, or commercial use is <strong>strictly prohibited</strong> and may lead to legal action.
          </p>
        </PolicySection>
      </div>

      <div id="placement">
        <PolicySection title="8. Placement Disclaimer">
          <ul>
            <li>Urbancode provides placement assistance but <strong>does not guarantee</strong> job placement.</li>
            <li>Opportunities depend on <strong>individual performance</strong>, current market conditions, and specific employer requirements.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="lms">
        <PolicySection title="9. LMS Access">
          <ul>
            <li>Access to LMS is granted for a limited duration based on the course.</li>
            <li>Sharing login credentials is strictly prohibited.</li>
            <li>Urbancode reserves the right to suspend accounts for misuse.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="privacy">
        <PolicySection title="10. Privacy & Data Protection">
          <ul>
            <li>User data is collected for academic and operational purposes only.</li>
            <li>We implement appropriate measures to protect your data.</li>
            <li>Please refer to our Privacy Policy for more details.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="liability">
        <PolicySection title="11. Limitation of Liability">
          <p>Urbancode shall not be held liable for:</p>
          <ul>
            <li>Any indirect or consequential damages</li>
            <li>Career outcomes or employment results</li>
            <li>Technical issues beyond our control</li>
          </ul>
        </PolicySection>
      </div>

      <div id="modifications">
        <PolicySection title="12. Modifications to Services">
          <p>Urbancode reserves the right to modify course content, schedules, trainers, or services at any time without prior notice.</p>
        </PolicySection>
      </div>

      <div id="termination">
        <PolicySection title="13. Termination">
          <p>We reserve the right to terminate or suspend access:</p>
          <ul>
            <li>In case of violation of terms</li>
            <li>Non-payment of fees</li>
            <li>Misconduct or unethical behavior</li>
          </ul>
        </PolicySection>
      </div>

      <div id="law">
        <PolicySection title="14. Governing Law">
          <p>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall fall under the jurisdiction of the appropriate courts.</p>
        </PolicySection>
      </div>

      <div id="contact">
        <PolicySection title="15. Contact Information">
          <p>For any queries regarding these Terms:</p>
          <ul className="list-unstyled">
            <li>Email: <a href="mailto:admin@urbancode.in" className="contact-link">admin@urbancode.in</a></li>
            <li>Phone: <a href="tel:+919878798797" className="contact-link">98787 98797</a></li>
          </ul>
        </PolicySection>
      </div>

      <div className="alert-policy p-4 rounded-3 mt-5">
        <h5 className="fw-bold mb-2">Acceptance of Terms</h5>
        <p className="mb-0">By enrolling in our courses or using our services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.</p>
      </div>
    </PolicyLayout>
  );
};

export default TermsConditionsPage;
