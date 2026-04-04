import React from 'react';
import PolicyLayout from '../components/policies/PolicyLayout';
import PolicySection from '../components/policies/PolicySection';

export const metadata = {
  title: 'Institute Policies | Urbancode Edutech Solutions',
  description: 'Comprehensive institute policies including enrollment, fees, refunds, and training guidelines.',
};

const InstitutePoliciesPage = () => {
  const sections = [
    { title: '1. Student Enrollment', id: 'enrollment' },
    { title: '2. Fees & Payment', id: 'fees' },
    { title: '3. Refund & Cancellation', id: 'refund' },
    { title: '4. Training & Learning', id: 'training' },
    { title: '5. Assessment & Certification', id: 'assessment' },
    { title: '6. Placement & Internship', id: 'placement' },
    { title: '7. Code of Conduct', id: 'conduct' },
    { title: '8. Data Privacy', id: 'privacy' },
    { title: '9. LMS & Digital Platforms', id: 'lms' },
    { title: '10. Intellectual Property', id: 'ip' },
    { title: '11. Support & Grievance', id: 'support' },
    { title: '12. Policy Updates', id: 'updates' },
  ];

  return (
    <PolicyLayout 
      title="Institute Policies" 
      lastUpdated="02-April-2026" 
      sections={sections}
    >
      <div id="enrollment">
        <PolicySection title="1. Student Enrollment Policy">
          <p>At Urbancode Edutech Solutions Pvt Ltd, we ensure a transparent and streamlined enrollment process:</p>
          <ul>
            <li>Students must complete the registration form with accurate personal and educational details.</li>
            <li>Enrollment is confirmed only after fee payment (full/partial as per program).</li>
            <li>Batch allocation is based on availability and eligibility criteria.</li>
            <li>Urbancode reserves the right to modify schedules or batch timings if required.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="fees">
        <PolicySection title="2. Fees & Payment Policy">
          <ul>
            <li>Course fees must be paid as per the selected plan (one-time / installment).</li>
            <li>All payments are non-transferable.</li>
            <li>Delayed payments may lead to restricted access to classes and resources.</li>
            <li>GST and applicable taxes will be charged as per government regulations.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="refund">
        <PolicySection title="3. Refund & Cancellation Policy">
          <ul>
            <li>Refund requests must be submitted within the defined cooling-off period (if applicable).</li>
            <li>No refunds will be issued once the course has commenced beyond a specified duration.</li>
            <li>Refund processing timelines may vary (typically 7–14 business days, if applicable).</li>
            <li>Cancellation requests must be made via official communication channels.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="training">
        <PolicySection title="4. Training & Learning Policy">
          <p>We are committed to delivering industry-relevant, high-quality training:</p>
          <ul>
            <li>Courses are designed with updated curriculum aligned to industry standards.</li>
            <li>Hands-on projects, real-time scenarios, and assessments are integral to learning.</li>
            <li>Attendance and participation are mandatory for successful completion.</li>
            <li>Trainers are experienced professionals with domain expertise.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="assessment">
        <PolicySection title="5. Assessment & Certification Policy">
          <ul>
            <li>Students must complete assignments, projects, and assessments.</li>
            <li>Certification is awarded based on performance and course completion criteria.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="placement">
        <PolicySection title="6. Placement & Internship Policy">
          <ul>
            <li>Placement assistance is provided with 100% guarantee.</li>
            <li>Students must meet eligibility criteria (attendance, performance, project completion).</li>
            <li>Resume building, mock interviews, and career guidance sessions are included.</li>
            <li>Internship opportunities may be provided based on availability and performance.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="conduct">
        <PolicySection title="7. Code of Conduct">
          <p>All students are expected to maintain professional behavior:</p>
          <ul>
            <li>Respect trainers, peers, and staff.</li>
            <li>Avoid plagiarism, misconduct, or disruptive behavior.</li>
            <li>Maintain discipline in both online and offline sessions.</li>
            <li>Violations may lead to suspension or termination from the program.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="privacy">
        <PolicySection title="8. Data Privacy & Security Policy">
          <ul>
            <li>Student data is collected only for academic and administrative purposes.</li>
            <li>We ensure confidentiality and do not share personal data with third parties without consent.</li>
            <li>Secure systems are used to protect user information.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="lms">
        <PolicySection title="9. LMS & Digital Platform Policy">
          <ul>
            <li>Students will receive access to our Learning Management System (LMS).</li>
            <li>Login credentials are personal and must not be shared.</li>
            <li>Unauthorized use may result in account suspension.</li>
            <li>Platform access duration depends on the course enrolled.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="ip">
        <PolicySection title="10. Intellectual Property Policy">
          <ul>
            <li>Course materials, content, and resources are the intellectual property of Urbancode.</li>
            <li>Unauthorized distribution, reproduction, or sharing is strictly prohibited.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="support">
        <PolicySection title="11. Support & Grievance Policy">
          <ul>
            <li>Students can raise queries or complaints via official email/support channels.</li>
            <li>All concerns will be addressed within a reasonable timeframe.</li>
            <li>Escalation mechanisms are available for unresolved issues.</li>
          </ul>
        </PolicySection>
      </div>

      <div id="updates">
        <PolicySection title="12. Policy Updates">
          <ul>
            <li>Urbancode reserves the right to update policies at any time.</li>
            <li>Students will be notified of major changes through official communication.</li>
          </ul>
        </PolicySection>
      </div>

      <div className="alert-policy p-4 rounded-3 mt-5">
        <h5 className="fw-bold mb-3">Our Commitment</h5>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-center gap-2">
             <span className="text-dark">•</span>
            <span>Delivering industry-ready skills</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="text-dark">•</span>
            <span>Ensuring transparent processes</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="text-dark">•</span>
            <span>Supporting career growth and success</span>
          </div>
        </div>
      </div>
    </PolicyLayout>
  );
};

export default InstitutePoliciesPage;
