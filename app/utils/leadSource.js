const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export function pageSectionFromUrl(href) {
  if (!href || href === 'Not captured' || href === 'Unknown page') return '';
  try {
    const url = new URL(href, 'http://localhost');
    const path = url.pathname.replace(/\/+$/, '') || '/';
    const named = {
      '/': 'Home page',
      '/form': 'Ads enquiry page',
      '/book-demo': 'Book a demo page',
      '/contact-us': 'Contact us page',
      '/contact': 'Contact us page',
      '/compiler': 'Compiler page',
      '/internship': 'Internship page',
      '/be-our-mentor': 'Mentor page',
      '/english-intake': 'English intake page',
      '/english-proficiency': 'English proficiency page',
      '/study-abroad': 'Study abroad page',
      '/kids-courses': 'Kids courses page',
      '/portfolio': 'Portfolio page',
    };
    if (named[path]) return named[path];
    const parts = path.split('/').filter(Boolean);
    const last = (parts[parts.length - 1] || 'page').replace(/-/g, ' ');
    if (parts[0] === 'courses') return `${last} course page`;
    if (parts[0] === 'study-abroad') return `Study in ${last} page`;
    if (parts[0] === 'certifications') return `${last} certification page`;
    return `${last} page`;
  } catch {
    return '';
  }
}

export function getLeadSource(formName, buttonLabel, sectionLabel = '') {
  const page = typeof window === 'undefined' ? '' : window.location.href;
  const fromUrl = pageSectionFromUrl(page);
  const section = String(sectionLabel || '').trim() || fromUrl || 'Not captured';
  return {
    source_page: page || 'Not captured',
    source_form: formName,
    source_button: buttonLabel,
    source_section: section,
  };
}

export function readLeadSource(body, toText) {
  const page = toText(body?.source_page, 'Not captured');
  const form = toText(body?.source_form, 'Not captured');
  const button = toText(body?.source_button, 'Not captured');
  const parsed = splitLeadPlace(form, button);
  const explicit = toText(body?.source_section, '');
  const fromUrl = pageSectionFromUrl(page);
  const section =
    explicit && explicit !== 'Not captured' && explicit !== 'N/A'
      ? explicit
      : parsed.section !== 'Not captured'
        ? parsed.section
        : fromUrl || 'Not captured';
  return { page, form, button, section };
}

export function resolveLeadSection(lead) {
  const parsed = splitLeadPlace(lead?.sourceForm, lead?.sourceButton);
  const explicit = lead?.sourceSection && lead.sourceSection !== 'Not captured' ? lead.sourceSection : '';
  const fromUrl = pageSectionFromUrl(lead?.sourcePage);
  const section =
    explicit ||
    (parsed.section !== 'Not captured' ? parsed.section : '') ||
    fromUrl ||
    'Not captured';
  return { section, form: parsed.form, button: parsed.button };
}

export function splitLeadPlace(form, button) {
  const formText = form || 'Not captured';
  const buttonText = button || 'Not captured';
  const marker = ' — ';
  const splitAt = formText.lastIndexOf(marker);
  if (splitAt === -1) {
    return { section: 'Not captured', form: formText, button: buttonText };
  }
  const section = formText.slice(0, splitAt);
  const shortForm = formText.slice(splitAt + marker.length);
  const prefix = `${section}${marker}`;
  const shortButton = buttonText.startsWith(prefix) ? buttonText.slice(prefix.length) : buttonText;
  return { section, form: shortForm, button: shortButton };
}

export function leadSourceTextLines(source) {
  return [
    `Page: ${source.page}`,
    `Section: ${source.section || 'Not captured'}`,
    `Form: ${source.form}`,
    `Button: ${source.button}`,
  ];
}

export function leadSourceHtmlRows(source) {
  const row = (icon, label, value) => `
                <tr>
                  <td style="padding:13px 16px;font-size:13px;font-weight:600;color:#475569;border-bottom:1px solid #e2e8f0;background:#fff7ed;width:38%;">${icon} ${label}</td>
                  <td style="padding:13px 16px;font-size:14px;color:#1a2b3c;border-bottom:1px solid #e2e8f0;">${escapeHtml(value)}</td>
                </tr>`;
  return [
    row('📄', 'Page', source.page),
    row('📍', 'Section', source.section || 'Not captured'),
    row('📝', 'Form', source.form),
    row('🖱️', 'Button', source.button),
  ].join('');
}
