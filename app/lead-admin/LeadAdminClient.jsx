'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { resolveLeadSection } from '@/app/utils/leadSource';
import './lead-admin.css';

function withPlace(lead) {
  const place = resolveLeadSection(lead);
  return { ...lead, section: place.section, formLabel: place.form, buttonLabel: place.button };
}

function pairsFromLeads(leads) {
  const map = new Map();
  for (const lead of leads) {
    const key = `${lead.section}\u0000${lead.formLabel}\u0000${lead.buttonLabel}`;
    const current = map.get(key) || {
      section: lead.section,
      form: lead.formLabel,
      button: lead.buttonLabel,
      count: 0,
    };
    current.count += 1;
    map.set(key, current);
  }
  return [...map.values()].sort((a, b) => b.count - a.count);
}

export default function LeadAdminClient() {
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [data, setData] = useState(null);
  const [loadError, setLoadError] = useState('');
  const [query, setQuery] = useState('');

  const loadLeads = useCallback(async () => {
    setLoadError('');
    const response = await fetch('/api/lead-enquiries', { cache: 'no-store' });
    if (response.status === 401) {
      setAuthed(false);
      setData(null);
      return;
    }
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      setLoadError(body.message || 'Could not load leads.');
      return;
    }
    setAuthed(true);
    setData(body);
  }, []);

  useEffect(() => {
    loadLeads().finally(() => setLoading(false));
  }, [loadLeads]);

  const filteredLeads = useMemo(() => {
    const leads = (data?.leads || []).map(withPlace);
    const needle = query.trim().toLowerCase();
    if (!needle) return leads;
    return leads.filter((lead) =>
      [lead.name, lead.email, lead.phone, lead.section, lead.formLabel, lead.buttonLabel, lead.sourcePage, lead.topic]
        .join(' ')
        .toLowerCase()
        .includes(needle)
    );
  }, [data, query]);

  const pairs = useMemo(() => pairsFromLeads(filteredLeads), [filteredLeads]);

  const onLogin = async (event) => {
    event.preventDefault();
    setLoginError('');
    const response = await fetch('/api/lead-enquiries/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      setLoginError(body.message || 'Wrong password.');
      return;
    }
    setPassword('');
    setLoading(true);
    await loadLeads();
    setLoading(false);
  };

  const onLogout = async () => {
    await fetch('/api/lead-enquiries/logout', { method: 'POST' });
    setAuthed(false);
    setData(null);
    setQuery('');
  };

  const onDownload = () => {
    window.location.href = '/api/lead-enquiries?format=csv';
  };

  return (
    <main className="lead-admin">
      <header className="lead-admin-header">
        <div>
          <h1>Lead sources</h1>
          <p>Search by page section, form, or button. The section is the same label sent in the lead email.</p>
        </div>
      </header>

      {loading ? <p className="lead-admin-status">Loading...</p> : null}

      {!loading && !authed ? (
        <form className="lead-admin-login" onSubmit={onLogin}>
          <h2>Sign in</h2>
          {loginError ? <p className="lead-admin-error">{loginError}</p> : null}
          <label htmlFor="lead-admin-password">Password</label>
          <input
            id="lead-admin-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
          <button type="submit">Open</button>
        </form>
      ) : null}

      {!loading && authed && data ? (
        <>
          <div className="lead-admin-stats">
            <div className="lead-admin-stat">
              <strong>{filteredLeads.length}</strong>
              <span>{query.trim() ? 'Matching enquiries' : 'Total enquiries'}</span>
            </div>
            <div className="lead-admin-stat">
              <strong>{pairs.length}</strong>
              <span>Form and button pairs</span>
            </div>
          </div>

          <div className="lead-admin-toolbar">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search section, form, button, name, or page"
              aria-label="Search leads"
            />
            <div className="lead-admin-actions">
              <button type="button" onClick={onDownload}>Download CSV</button>
              <button type="button" className="secondary" onClick={loadLeads}>Refresh</button>
              <button type="button" className="secondary" onClick={onLogout}>Log out</button>
            </div>
          </div>

          {loadError ? <p className="lead-admin-error">{loadError}</p> : null}

          <section className="lead-admin-card">
            <h2>Form and button</h2>
            <div className="lead-admin-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Page section</th>
                    <th>Form</th>
                    <th>Button</th>
                    <th className="num">Leads</th>
                  </tr>
                </thead>
                <tbody>
                  {pairs.length === 0 ? (
                    <tr>
                      <td colSpan={4}>No leads match this search.</td>
                    </tr>
                  ) : (
                    pairs.map((row) => (
                      <tr key={`${row.section}-${row.form}-${row.button}`}>
                        <td>{row.section}</td>
                        <td>{row.form}</td>
                        <td>{row.button}</td>
                        <td className="num">{row.count}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section className="lead-admin-card">
            <h2>All enquiries</h2>
            <div className="lead-admin-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Page section</th>
                    <th>Form</th>
                    <th>Button</th>
                    <th>Page</th>
                    <th>Topic</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={7}>No leads match this search.</td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id}>
                        <td className="nowrap">{lead.createdAt ? new Date(lead.createdAt).toLocaleString() : ''}</td>
                        <td>
                          <div className="lead-name">{lead.name}</div>
                          <div className="lead-meta">{lead.email}</div>
                          <div className="lead-meta">{lead.phone}</div>
                        </td>
                        <td>{lead.section}</td>
                        <td>{lead.formLabel}</td>
                        <td>{lead.buttonLabel}</td>
                        <td className="lead-admin-page">{lead.sourcePage}</td>
                        <td>{lead.topic}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </>
      ) : null}
    </main>
  );
}
