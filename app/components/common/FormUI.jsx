'use client';

import React from 'react';

/**
 * Standardized Input Component
 */
export const FormInput = ({ 
  label, 
  error, 
  className = "", 
  containerClass = "", 
  ...props 
}) => {
  return (
    <div className={`form-group-container ${containerClass}`}>
      {label && <label className="form-label-standard">{label}</label>}
      <input 
        className={`form-input-standard ${error ? 'is-invalid' : ''} ${className}`} 
        {...props} 
      />
      {error && <div className="form-error-message">{error}</div>}
    </div>
  );
};

/**
 * Standardized Select Component
 */
export const FormSelect = ({ 
  label, 
  options = [], 
  error, 
  placeholder, 
  className = "", 
  containerClass = "", 
  ...props 
}) => {
  return (
    <div className={`form-group-container ${containerClass}`}>
      {label && <label className="form-label-standard">{label}</label>}
      <div className="form-select-wrapper">
        <select 
          className={`form-select-standard ${error ? 'is-invalid' : ''} ${className}`} 
          {...props}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt, idx) => {
            const val = typeof opt === 'string' ? opt : opt.value;
            const labelStr = typeof opt === 'string' ? opt : opt.label;
            return <option key={idx} value={val}>{labelStr}</option>;
          })}
        </select>
      </div>
      {error && <div className="form-error-message">{error}</div>}
    </div>
  );
};

/**
 * Standardized Textarea Component
 */
export const FormTextarea = ({ 
  label, 
  error, 
  className = "", 
  containerClass = "", 
  ...props 
}) => {
  return (
    <div className={`form-group-container ${containerClass}`}>
      {label && <label className="form-label-standard">{label}</label>}
      <textarea 
        className={`form-textarea-standard ${error ? 'is-invalid' : ''} ${className}`} 
        {...props} 
      />
      {error && <div className="form-error-message">{error}</div>}
    </div>
  );
};

/**
 * Standardized Button Component
 */
export const FormButton = ({ 
  children, 
  loading, 
  variant = "primary", 
  className = "", 
  ...props 
}) => {
  const variantClass = `form-btn-${variant}`;
  return (
    <button 
      className={`form-btn-standard ${variantClass} ${loading ? 'is-loading' : ''} ${className}`} 
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <span className="form-btn-loader"></span>
      ) : children}
    </button>
  );
};

/**
 * Standardized Card Container for Forms
 */
export const FormCard = ({ children, className = "", title, subtitle }) => {
  return (
    <div className={`form-card-standard ${className}`}>
      {title && <h2 className="form-card-title">{title}</h2>}
      {subtitle && <p className="form-card-subtitle">{subtitle}</p>}
      {children}
    </div>
  );
};

/**
 * Standardized Radio Component
 */
export const FormRadioGroup = ({ 
  label, 
  name, 
  options = [], 
  value, 
  onChange, 
  error, 
  className = "" 
}) => {
  return (
    <div className={`form-group-container ${className}`}>
      {label && <label className="form-label-standard">{label}</label>}
      <div className="form-radio-group-horizontal">
        {options.map((opt, idx) => {
          const val = typeof opt === 'string' ? opt : opt.value;
          const labelStr = typeof opt === 'string' ? opt : opt.label;
          const isActive = value === val;
          return (
            <label key={idx} className={`form-radio-pill ${isActive ? 'active' : ''}`}>
              <input 
                type="radio" 
                name={name} 
                value={val} 
                checked={isActive} 
                onChange={() => onChange && onChange({ target: { name, value: val } })} 
              />
              {labelStr}
            </label>
          );
        })}
      </div>
      {error && <div className="form-error-message">{error}</div>}
    </div>
  );
};

/**
 * Standardized Checkbox Component
 */
export const FormCheckbox = ({ 
  label, 
  checked, 
  onChange, 
  error, 
  className = "", 
  ...props 
}) => {
  return (
    <div className={`form-group-container ${className}`}>
      <label className="form-checkbox-item">
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={onChange} 
          {...props} 
        />
        <span>{label}</span>
      </label>
      {error && <div className="form-error-message">{error}</div>}
    </div>
  );
};
