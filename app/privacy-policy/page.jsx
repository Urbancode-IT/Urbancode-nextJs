import React from 'react';
import PolicyLayout from '../components/policies/PolicyLayout';
import PolicySection from '../components/policies/PolicySection';

export const metadata = {
  title: 'Privacy Policy | Urbancode Edutech Solutions',
  description: 'Your privacy is important to us. Learn how Urbancode Edutech Solutions collects, uses, and protects your information.',
  openGraph: {
    title: 'Privacy Policy | Urbancode Edutech Solutions',
    description: 'Learn about our data collection and protection practices.',
    type: 'website',
  }
};

const PrivacyPolicyPage = () => {
  const sections = [
    { title: '1. Introduction', id: 'introduction' },
    { title: '2. Information Collection', id: 'collection' },
    { title: '3. Data Usage', id: 'usage' },
    { title: '4. Cookies & Tracking', id: 'cookies' },
    { title: '5. Sharing Information', id: 'sharing' },
    { title: '6. Data Security', id: 'security' },
    { title: '7. User Rights', id: 'rights' },
    { title: '8. Data Retention', id: 'retention' },
    { title: '9. Third-Party Links', id: 'links' },
    { title: '10. Children’s Privacy', id: 'children' },
    { title: '11. Policy Updates', id: 'updates' },
    { title: '12. Contact us', id: 'contact' },
  ];

  return (
    <PolicyLayout 
      title="Privacy Policy" 
      lastUpdated="02-April-2026" 
      sections={sections}
    >
      <div id="introduction">
        <PolicySection title="1. Introduction">
          <p>At Urbancode Edutech Solutions Pvt Ltd, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you interact with our website, services, and Learning Management System (LMS).</p>
        </PolicySection>
      </div>

      <div id="collection">
        <PolicySection title="2. Information We Collect">
          <p>We may collect and use the following categories of information to provide and improve our services:</p>
          <div className="policy-table-container">
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Examples</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-medium">Personal</td>
                  <td>Name, Email, Phone, Background</td>
                  <td>Enrollment & Communication</td>
                </tr>
                <tr>
                  <td className="fw-medium">Financial</td>
                  <td>Payment details, Billing address</td>
                  <td>Processing payments</td>
                </tr>
                <tr>
                  <td className="fw-medium">Technical</td>
                  <td>IP address, Browser type, Device info</td>
                  <td>Website optimization</td>
                </tr>
                <tr>
                  <td className="fw-medium">Usage</td>
                  <td>Course progress, Click behavior</td>
                  <td>Improving learning experience</td>
                </tr>
              </tbody>
            </table>
          </div>
        </PolicySection>
      </div>

      <div id="usage">
        <PolicySection title="3. How We Use Your Information">
          <p>Your data is used to:</p>
          <ul>
            <li>Process registrations and enrolments</li>
            <li>Provide course access and learning support</li>
            <li>Communicate updates, offers, and important notifications</li>
            <li>Improve our services, website performance, and user experience</li>
            <li>Facilitate placement assistance and career services</li>
          </ul>
        </PolicySection>
      </div>

      <div id="cookies">
        <PolicySection title="4. Cookies & Tracking Technologies">
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>Enhance user experience</li>
            <li>Track website usage and analytics</li>
            <li>Personalize content</li>
          </ul>
          <p>You can control or disable cookies through your browser settings.</p>
        </PolicySection>
      </div>

      <div id="sharing">
        <PolicySection title="5. Sharing of Information">
          <p>We <strong>do not sell or rent</strong> your personal data to any third parties. However, we may share information with:</p>
          <ul>
            <li>Third-party service providers (payment gateways, LMS tools)</li>
            <li><strong>Hiring partners</strong> for placement assistance (with your consent)</li>
            <li>Authorities when required by law</li>
          </ul>
        </PolicySection>
      </div>

      <div id="security">
        <PolicySection title="6. Data Security">
          <p>We implement appropriate technical and organizational measures to protect your data from:</p>
          <ul>
            <li>Unauthorized access</li>
            <li>Loss or misuse</li>
            <li>Alteration or disclosure</li>
          </ul>
          <p>However, no system is 100% secure, and we encourage users to maintain confidentiality of their credentials.</p>
        </PolicySection>
      </div>

      <div id="rights">
        <PolicySection title="7. User Rights">
          <p>You have the right to <strong>access, review, and request correction</strong> or deletion (subject to legal obligations) of your personal data at any time.</p>
        </PolicySection>
      </div>

      <div id="retention">
        <PolicySection title="8. Data Retention">
          <p>We retain your data only for as long as necessary to:</p>
          <ul>
            <li>Provide our services</li>
            <li>Fulfill legal and regulatory requirements</li>
            <li>Resolve disputes and enforce agreements</li>
          </ul>
        </PolicySection>
      </div>

      <div id="links">
        <PolicySection title="9. Third-Party Links">
          <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices, and users are encouraged to review their policies.</p>
        </PolicySection>
      </div>

      <div id="children">
        <PolicySection title="10. Children’s Privacy">
          <p>Our services are not intended for children under 13 without parental consent. We do not knowingly collect data from minors without authorization.</p>
        </PolicySection>
      </div>

      <div id="updates">
        <PolicySection title="11. Updates to Privacy Policy">
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
        </PolicySection>
      </div>

      <div id="contact">
        <PolicySection title="12. Contact Information">
          <p>For any queries or concerns regarding this Privacy Policy:</p>
          <ul className="list-unstyled">
            <li>Email: <a href="mailto:admin@urbancode.in" className="contact-link">admin@urbancode.in</a></li>
            <li>Phone: <a href="tel:+919878798797" className="contact-link">98787 98797</a></li>
          </ul>
        </PolicySection>
      </div>

      <div className="alert-policy p-4 rounded-3 mt-5">
        <h5 className="fw-bold mb-2">Consent</h5>
        <p className="mb-0">By using our website and services, you consent to the collection and use of your information as outlined in this Privacy Policy.</p>
      </div>
    </PolicyLayout>
  );
};

export default PrivacyPolicyPage;
