'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PolicyLayout = ({ title, lastUpdated, sections, children }) => {
  return (
    <div className="bg-white py-5 min-vh-100 mt-5 border-top border-light">
      <Container className="max-width-900">
        <style jsx>{`
          .max-width-900 { max-width: 900px !important; }
          :global(.policy-content) { color: #1a1a1a; line-height: 1.75; font-size: 1.05rem; }
          .last-updated { font-style: italic; color: #555; font-size: 0.95rem; }
          .table-of-contents { background: #fdfdfd; padding: 2rem 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee; margin: 2rem 0 3rem; }
          .toc-title { font-size: 1.5rem; font-weight: 500; color: #000; margin-bottom: 1.25rem; }
          .toc-list { list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 0.75rem; }
          .toc-list li { width: 100%; }
          .toc-link { color: #000; text-decoration: underline; font-weight: 400; transition: opacity 0.2s ease; font-size: 1rem; }
          .toc-link:hover { opacity: 0.7; }
          h1 { font-size: 2.5rem; font-weight: 600; color: #000; letter-spacing: -0.02em; }
          .policy-intro { margin-bottom: 2rem; text-align: justify; }
          .policy-intro p { margin-bottom: 1.25rem; }
          .contact-link { color: #000; text-decoration: underline; }
          .alert-policy { background: #f8f9fa; border: 1px solid #eee; text-align: justify; }
          :global(.policy-table-container) { margin: 2rem 0; overflow-x: auto; width: 100%; display: block; }
          :global(.policy-table) { width: 100% !important; border-collapse: collapse !important; border: 1px solid #ddd !important; margin-bottom: 1rem; display: table !important; }
          :global(.policy-table th) { background: #f8f9fa !important; border-bottom: 2px solid #000 !important; padding: 1rem !important; text-align: left !important; font-weight: 600 !important; font-size: 0.95rem !important; }
          :global(.policy-table td) { border-bottom: 1px solid #eee !important; padding: 1rem !important; font-size: 0.95rem !important; background: #fff !important; }
          :global(.policy-table tr:nth-child(even) td) { background: #fafafa !important; }
          :global(.policy-table tr:last-child td) { border-bottom: none !important; }
          :global(.policy-note) { border-left: 4px solid #000; background: #fdfdfd; padding: 1.5rem; margin: 1.5rem 0; font-style: italic; }
          :global(strong) { color: #000; font-weight: 700; }
          .emoji-title { display: none; }
        `}</style>
        
        <Row className="justify-content-center">
          <Col lg={12} className="policy-content">
            {/* Header Section */}
            <header className="policy-intro">
               <h1 className="mb-4">{title}</h1>
               <div className="last-updated mb-4">
                 {title} last updated {lastUpdated}.
               </div>
               <p>
                 Thank you for joining Urbancode. We at Urbancode respect your privacy and want you to understand how we collect, use, and share data about you.
                 This policy covers our {title.toLowerCase()} practices and describes your rights regarding your personal data.
               </p>
               <p>
                 Unless we link to a different policy or state otherwise, this policy applies when you visit or use Urbancode websites, mobile applications, APIs, or related services.
               </p>
            </header>

            {/* Table of Contents - Now in the center flow */}
            <nav className="table-of-contents" aria-label="Table of contents">
              <h2 className="toc-title">Table of Contents</h2>
              <ol className="toc-list">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="toc-link">
                      {section.title.replace(/[^\w\s\.]/g, '').trim()}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Main Content Area */}
            <article className="pb-5">
              {children}
            </article>

            {/* Footer Sign-off */}
            <footer className="mt-5 pt-5 border-top border-light">
              <div className="alert-policy p-4 rounded-3 mb-5">
                <p className="mb-0 text-muted small">
                  If you have any questions about these terms, please contact us at <a href="mailto:admin@urbancode.in" className="contact-link fw-semibold">admin@urbancode.in</a> or by visiting 
                  our <a href="/contact-us" className="contact-link">Contact Us</a> page.
                </p>
              </div>
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PolicyLayout;
