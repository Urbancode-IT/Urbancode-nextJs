import React from 'react';

const PolicySection = ({ title, children, icon }) => {
  return (
    <section className="mb-5">
      <div className="d-flex align-items-center mb-3">
        {icon && <span className="me-2 fs-5">{icon}</span>}
        <h2 className="h4 fw-medium mb-0 text-black">{title}</h2>
      </div>
      <div className="ps-0 ps-md-2 text-dark lh-base" style={{ fontSize: '1.05rem', fontWeight: '400', opacity: '0.9', textAlign: 'justify' }}>
        {children}
      </div>
    </section>
  );
};

export default PolicySection;
