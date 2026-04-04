import React from 'react';
import PolicyLayout from '../components/policies/PolicyLayout';
import PolicySection from '../components/policies/PolicySection';

export const metadata = {
  title: 'Cookie Policy | Urbancode Edutech Solutions',
  description: 'Learn how Urbancode Edutech Solutions uses cookies and similar technologies to enhance your experience.',
};

const CookiePolicyPage = () => {
  const sections = [
    { title: '1. Introduction', id: 'introduction' },
    { title: '2. What Are Cookies?', id: 'what-are' },
    { title: '3. How We Use Cookies', id: 'how-use' },
    { title: '4. Types of Cookies', id: 'types' },
    { title: '5. Third-Party Cookies', id: 'third-party' },
    { title: '6. Managing Cookies', id: 'managing' },
    { title: '7. Consent', id: 'consent' },
    { title: '8. Data Protection', id: 'data' },
    { title: '9. Policy Updates', id: 'updates' },
    { title: '10. Contact Us', id: 'contact' },
  ];

  return (
    <PolicyLayout 
      title="Cookie Policy" 
      lastUpdated="02-April-2026" 
      sections={sections}
    >
      <div id="introduction">
        <PolicySection title="1. Introduction">
          <p>This Cookie Policy explains how Urbancode Edutech Solutions Pvt Ltd uses cookies and similar technologies when you visit our website and use our Learning Management System (LMS). By continuing to browse or use our services, you agree to our use of cookies as described in this policy.</p>
        </PolicySection>
      </div>

      <div id="what-are">
        <PolicySection title="2. What Are Cookies?">
          <p>Cookies are small text files stored on your device (computer, mobile, tablet) when you visit a website. They help improve your browsing experience by remembering your preferences and enabling certain functionalities.</p>
        </PolicySection>
      </div>

      <div id="how-use">
        <PolicySection title="3. How We Use Cookies">
          <p>We use cookies to:</p>
          <ul>
            <li>Ensure the website functions properly</li>
            <li>Enhance user experience and navigation</li>
            <li>Remember login sessions and preferences</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Improve our services and content</li>
          </ul>
        </PolicySection>
      </div>

      <div id="types">
        <PolicySection title="4. Types of Cookies We Use">
          <div className="policy-table-container">
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Persistence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-medium">Essential</td>
                  <td>Necessary for core features like login and security.</td>
                  <td>Session/Permanent</td>
                </tr>
                <tr>
                  <td className="fw-medium">Analytics</td>
                  <td>Tracks usage patterns to improve performance.</td>
                  <td>Permanent</td>
                </tr>
                <tr>
                  <td className="fw-medium">Functional</td>
                  <td>Remembers your preferences and settings.</td>
                  <td>Permanent</td>
                </tr>
                <tr>
                  <td className="fw-medium">Marketing</td>
                  <td>Used to deliver relevant advertisements.</td>
                  <td>Permanent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </PolicySection>
      </div>

      <div id="third-party">
        <PolicySection title="5. Third-Party Cookies">
          <p>We may use trusted third-party services such as:</p>
          <ul>
            <li>Analytics tools (e.g., Google Analytics)</li>
            <li>Payment gateways</li>
            <li>LMS and marketing platforms</li>
          </ul>
          <p>These third parties may set their own cookies and have their own privacy policies.</p>
        </PolicySection>
      </div>

      <div id="managing">
        <PolicySection title="6. Managing Cookies">
          <p>You can control or disable cookies through your browser settings:</p>
          <ul>
            <li>Block or delete cookies at any time</li>
            <li>Set preferences for specific websites</li>
          </ul>
          <div className="alert-policy p-3 border rounded-3 small">
             Note: Disabling cookies may affect website functionality and user experience.
          </div>
        </PolicySection>
      </div>

      <div id="consent">
        <PolicySection title="7. Consent to Use Cookies">
          <p>When you visit our website for the first time, you will see a cookie consent banner. By clicking “Accept” or continuing to browse, you consent to our use of cookies.</p>
        </PolicySection>
      </div>

      <div id="data">
        <PolicySection title="8. Data Protection">
          <p>Cookies do not typically contain personally identifiable information. However, any data collected will be handled in accordance with our Privacy Policy.</p>
        </PolicySection>
      </div>

      <div id="updates">
        <PolicySection title="9. Updates to This Policy">
          <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated date.</p>
        </PolicySection>
      </div>

      <div id="contact">
        <PolicySection title="10. Contact Us">
          <p>For any questions about our Cookie Policy:</p>
          <ul className="list-unstyled">
            <li>Email: <a href="mailto:admin@urbancode.in" className="contact-link">admin@urbancode.in</a></li>
            <li>Phone: <a href="tel:+919878798797" className="contact-link">98787 98797</a></li>
          </ul>
        </PolicySection>
      </div>

      <div className="alert-policy p-4 rounded-3 mt-5 text-center">
        <h5 className="fw-bold mb-2">Acknowledgement</h5>
        <p className="mb-0">By using our website, you acknowledge that you have read and understood this Cookie Policy and agree to its terms.</p>
      </div>
    </PolicyLayout>
  );
};

export default CookiePolicyPage;
