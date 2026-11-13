'use client';
import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './FormPhoneInput.css';

const DROPDOWN_WIDTH = 280;
const DROPDOWN_MAX_HEIGHT = 320;

const getFlagEmoji = (countryCode) => {
  if (!countryCode) return '🌍';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

/* ── Custom Country Select with themed dropdown ──────────────── */
const ThemedCountrySelect = ({ value, onChange, options, theme = 'light' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [coords, setCoords] = useState(null);
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updatePosition = useCallback(() => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const spaceBelow = window.innerHeight - rect.bottom;
    const openUp = spaceBelow < Math.min(DROPDOWN_MAX_HEIGHT, 280);
    const left = Math.max(
      8,
      Math.min(rect.left, window.innerWidth - DROPDOWN_WIDTH - 8)
    );

    setCoords({
      left,
      width: DROPDOWN_WIDTH,
      maxHeight: Math.min(
        DROPDOWN_MAX_HEIGHT,
        openUp ? rect.top - 12 : spaceBelow - 12
      ),
      top: openUp ? undefined : rect.bottom + 4,
      bottom: openUp ? window.innerHeight - rect.top + 4 : undefined,
      openUp,
    });
  }, []);

  useLayoutEffect(() => {
    if (!isOpen) return undefined;
    updatePosition();
    const onReposition = () => updatePosition();
    window.addEventListener('resize', onReposition);
    window.addEventListener('scroll', onReposition, true);
    return () => {
      window.removeEventListener('resize', onReposition);
      window.removeEventListener('scroll', onReposition, true);
    };
  }, [isOpen, updatePosition]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleClickOutside = (e) => {
      const inTrigger = rootRef.current?.contains(e.target);
      const inPanel = panelRef.current?.contains(e.target);
      if (!inTrigger && !inPanel) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  const filteredOptions = options.filter((opt) => {
    if (!search) return true;
    const lowerSearch = search.toLowerCase();
    return (
      opt.label?.toLowerCase().includes(lowerSearch) ||
      opt.value?.toLowerCase().includes(lowerSearch)
    );
  });

  const handleSelect = useCallback(
    (optValue) => {
      onChange(optValue || undefined);
      setIsOpen(false);
      setSearch('');
    },
    [onChange]
  );

  const dropdown =
    mounted &&
    isOpen &&
    coords &&
    createPortal(
      <div
        ref={panelRef}
        className={`themed-country-dropdown themed-country-dropdown--portal themed-country-dropdown--${theme}${
          coords.openUp ? ' is-up' : ''
        }`}
        style={{
          position: 'fixed',
          top: coords.top,
          bottom: coords.bottom,
          left: coords.left,
          width: coords.width,
          maxHeight: coords.maxHeight,
          zIndex: 20050,
        }}
        role="presentation"
      >
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
              className={`themed-country-dropdown__item${
                opt.value === value ? ' themed-country-dropdown__item--selected' : ''
              }`}
              onClick={() => handleSelect(opt.value)}
            >
              <span className="themed-country-dropdown__item-flag">
                {getFlagEmoji(opt.value)}
              </span>
              <span className="themed-country-dropdown__item-label">{opt.label}</span>
              {opt.value ? (
                <span className="themed-country-dropdown__item-code">
                  +{getCountryCallingCode(opt.value)}
                </span>
              ) : null}
            </li>
          ))}
          {filteredOptions.length === 0 ? (
            <li className="themed-country-dropdown__empty">No results</li>
          ) : null}
        </ul>
      </div>,
      document.body
    );

  return (
    <div className={`themed-country-select themed-country-select--${theme}`} ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className={`themed-country-select__trigger themed-country-select__trigger--${theme}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="themed-country-select__flag">{getFlagEmoji(value)}</span>
        <span className="themed-country-select__code">
          {value ? `+${getCountryCallingCode(value)}` : ''}
        </span>
        <span className="themed-country-select__arrow">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {dropdown}
    </div>
  );
};

/* ── Main FormPhoneInput ─────────────────────────────────────── */
export const FormPhoneInput = ({
  label,
  error,
  className = '',
  containerClass = '',
  value,
  onChange,
  onBlur,
  disabled,
  name,
  placeholder = 'Enter phone number',
  international = true,
  theme = 'light',
  ...rest
}) => {
  return (
    <div className={`form-group-container ${containerClass}`}>
      {label ? (
        <label className="form-label-standard" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <PhoneInput
        international={international}
        defaultCountry="IN"
        className={`phone-input-custom ${error ? 'is-invalid' : ''} ${className}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        id={name}
        placeholder={placeholder}
        countrySelectComponent={ThemedCountrySelect}
        countrySelectProps={{ theme }}
        {...rest}
      />
      {error ? <div className="form-error-message">{error}</div> : null}
    </div>
  );
};
