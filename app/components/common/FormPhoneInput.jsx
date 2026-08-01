'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import PhoneInput, { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en';
import 'react-phone-number-input/style.css';
import './FormPhoneInput.css';

/* ── Custom Country Select with themed dropdown ──────────────── */
const ThemedCountrySelect = ({ value, onChange, options, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search when opened
  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  const filteredOptions = options.filter((opt) => {
    if (!search) return true;
    const lowerSearch = search.toLowerCase();
    return opt.label?.toLowerCase().includes(lowerSearch) ||
           opt.value?.toLowerCase().includes(lowerSearch);
  });

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = useCallback((optValue) => {
    onChange(optValue || undefined);
    setIsOpen(false);
    setSearch('');
  }, [onChange]);

  // Get flag emoji from country code
  const getFlagEmoji = (countryCode) => {
    if (!countryCode) return '🌍';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  return (
    <div className="themed-country-select" ref={dropdownRef}>
      <button
        type="button"
        className="themed-country-select__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="themed-country-select__flag">
          {getFlagEmoji(value)}
        </span>
        <span className="themed-country-select__arrow">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="themed-country-dropdown">
          <div className="themed-country-dropdown__search-wrap">
            <input
              ref={searchRef}
              type="text"
              className="themed-country-dropdown__search"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <ul className="themed-country-dropdown__list" role="listbox">
            {filteredOptions.map((opt) => (
              <li
                key={opt.value || 'intl'}
                role="option"
                aria-selected={opt.value === value}
                className={`themed-country-dropdown__item ${opt.value === value ? 'themed-country-dropdown__item--selected' : ''}`}
                onClick={() => handleSelect(opt.value)}
              >
                <span className="themed-country-dropdown__item-flag">
                  {getFlagEmoji(opt.value)}
                </span>
                <span className="themed-country-dropdown__item-label">
                  {opt.label}
                </span>
                {opt.value && (
                  <span className="themed-country-dropdown__item-code">
                    +{getCountryCallingCode(opt.value)}
                  </span>
                )}
              </li>
            ))}
            {filteredOptions.length === 0 && (
              <li className="themed-country-dropdown__empty">No results</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

/* ── Main FormPhoneInput ─────────────────────────────────────── */
export const FormPhoneInput = ({ 
  label,
  error,
  className = "",
  containerClass = "",
  value,
  onChange,
  onBlur,
  disabled,
  name,
  placeholder = "Enter phone number"
}) => {
  return (
    <div className={`form-group-container ${containerClass}`}>
      {label && <label className="form-label-standard" htmlFor={name}>{label}</label>}
      <PhoneInput
        international
        defaultCountry="IN"
        className={`phone-input-custom ${error ? 'is-invalid' : ''} ${className}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        id={name}
        placeholder={placeholder}
        countrySelectComponent={ThemedCountrySelect}
      />
      {error && <div className="form-error-message">{error}</div>}
    </div>
  );
};
