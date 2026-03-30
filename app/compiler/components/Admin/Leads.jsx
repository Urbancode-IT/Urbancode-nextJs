'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { FaTrash, FaSearch } from 'react-icons/fa';

import './Leads.css';

const STORAGE_KEY = 'uc_local_leads';

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const loadLeads = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      setLeads(Array.isArray(parsed) ? parsed : []);
    } catch {
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const filtered = useMemo(() => {
    const term = (search || '').trim().toLowerCase();
    if (!term) return leads;
    return leads.filter((l) => {
      const hay = `${l.name || ''} ${l.email || ''} ${l.mobile || ''} ${l.courseName || ''}`.toLowerCase();
      return hay.includes(term);
    });
  }, [leads, search]);

  const clearAll = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setLeads([]);
  };

  const deleteLead = (id) => {
    const next = leads.filter((l) => l.id !== id);
    setLeads(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  if (loading) {
    return (
      <div className="leads-empty">
        <div className="uc-loader-text">Loading leads...</div>
      </div>
    );
  }

  return (
    <div className="leads-wrap">
      <div className="leads-header">
        <div>
          <h2>Leads</h2>
          <p>Captured from clicks (name/mobile/email).</p>
        </div>
        <div className="leads-actions">
          <button type="button" className="leads-clear-btn" onClick={clearAll}>
            <FaTrash /> Clear
          </button>
        </div>
      </div>

      <div className="leads-search">
        <FaSearch />
        <input
          type="text"
          placeholder="Search name/email/mobile/course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="leads-empty">
          No leads found.
        </div>
      ) : (
        <div className="leads-table-wrap">
          <table className="leads-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Course</th>
                <th>Status</th>
                <th className="leads-col-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered
                .slice()
                .sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''))
                .map((l) => (
                  <tr key={l.id}>
                    <td>{l.createdAt ? new Date(l.createdAt).toLocaleDateString() : 'N/A'}</td>
                    <td>{l.name || 'N/A'}</td>
                    <td>{l.email || 'N/A'}</td>
                    <td>{l.mobile || l.phone || 'N/A'}</td>
                    <td>{l.courseName || 'N/A'}</td>
                    <td>
                      {l.apiSuccess ? (
                        <span className="leads-badge is-success">Submitted</span>
                      ) : (
                        <span className="leads-badge is-error" title={l.apiError || ''}>
                          Not submitted
                        </span>
                      )}
                    </td>
                    <td className="leads-col-actions">
                      <button type="button" className="leads-row-delete" onClick={() => deleteLead(l.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Leads;

