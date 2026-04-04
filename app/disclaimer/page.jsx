import React from 'react';
import PolicyLayout from '../components/policies/PolicyLayout';
import PolicySection from '../components/policies/PolicySection';

export const metadata = {
  title: 'Disclaimer | Urbancode Edutech Solutions',
  description: 'General information, educational, and technical disclaimers for Urbancode Edutech Solutions.',
};

const DisclaimerPage = () => {
  const sections = [
    { title: '1. General Information', id: 'general' },
    { title: '2. Educational Disclaimer', id: 'educational' },
    { title: '3. Placement Disclaimer', id: 'placement' },
    { title: '4. External Links', id: 'links' },
    { title: '5. Technical Disclaimer', id: 'technical' },
    { title: '6. Content Usage', id: 'content' },
    { title: '7. Limitation of Liability', id: 'liability' },
    { title: '8. No Professional Advice', id: 'advice' },
    { title: '9. Updates to Disclaimer', id: 'updates' },
    { title: '10. Contact Us', id: 'contact' },
  ];

  return (
    <PolicyLayout 
      title="Disclaimer" 
      lastUpdated="02-April-2026" 
      sections={sections}
    >
      <div id="general">
        <PolicySection title="1. General Information">
          <p>The information provided by Urbancode Edutech Solutions Pvt Ltd on our website, Learning Management System (LMS), and training platforms is for general informational and educational purposes only. While we strive to keep the content accurate and up to date, we make no guarantees of completeness, reliability, or accuracy.</p>
        </PolicySection>
      </div>

      <div id="educational">
        <PolicySection title="2. Educational & Training Disclaimer">
          <ul>
            <li>Our courses are designed to provide industry-relevant skills and knowledge.</li>
            <li>Completion of any course does not guarantee employment, certification, or career advancement.</li>
            <li>Learning outcomes may vary based on individual effort, background, and market conditions.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="placement">
        <PolicySection title="3. Placement Disclaimer">
          <ul>
            <li>We offer placement assistance services, including resume building and interview preparation.</li>
            <li>However, job placement is not guaranteed.</li>
            <li>Hiring decisions are made solely by third-party employers based on their criteria.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="links">
        <PolicySection title="4. External Links Disclaimer">
          <ul>
            <li>Our website may contain links to third-party websites or services.</li>
            <li>We do not control or guarantee the accuracy of information on these external platforms.</li>
            <li>We are not responsible for any loss or damage caused by reliance on third-party content.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="technical">
        <PolicySection title="5. Technical Disclaimer">
          <ul>
            <li>We do not guarantee uninterrupted or error-free access to our website, LMS, or online classes.</li>
            <li>Temporary downtime may occur due to maintenance, technical issues, or factors beyond our control.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="content">
        <PolicySection title="6. Content Usage Disclaimer">
          <ul>
            <li>All content, including course materials, videos, and resources, is intended for personal learning purposes only.</li>
            <li>Unauthorized copying, distribution, or commercial use is strictly prohibited.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="liability">
        <PolicySection title="7. Limitation of Liability">
          <p>Under no circumstances shall Urbancode Edutech Solutions Pvt Ltd be held liable for:</p>
          <ul>
            <li>Any direct, indirect, or consequential loss or damage</li>
            <li>Loss of data, revenue, or business opportunities</li>
            <li>Decisions made based on the information provided</li>
          </ul>
        </PolicySection>
      </div>

      <div id="advice">
        <PolicySection title="8. No Professional Advice">
          <p>The content provided does not constitute:</p>
          <ul>
            <li>Legal advice</li>
            <li>Financial advice</li>
            <li>Career guarantee or assurance</li>
          </ul>
          <p>Users are encouraged to seek professional guidance where necessary.</p>
        </PolicySection>
      </div>

      <div id="updates">
        <PolicySection title="9. Updates to Disclaimer">
          <p>We reserve the right to update or modify this Disclaimer at any time without prior notice. Changes will be reflected on this page.</p>
        </PolicySection>
      </div>

      <div id="contact">
        <PolicySection title="10. Contact Us">
          <p>For any questions regarding this Disclaimer:</p>
          <ul className="list-unstyled">
            <li>Email: <a href="mailto:admin@urbancode.in" className="contact-link">admin@urbancode.in</a></li>
            <li>Phone: <a href="tel:+919878798797" className="contact-link">98787 98797</a></li>
          </ul>
        </PolicySection>
      </div>

      <div className="alert-policy p-4 rounded-3 mt-5 text-center">
        <h5 className="fw-bold mb-2">Consent</h5>
        <p className="mb-0">By using our website and services, you acknowledge that you have read, understood, and agreed to this Disclaimer.</p>
      </div>
    </PolicyLayout>
  );
};

export default DisclaimerPage;
