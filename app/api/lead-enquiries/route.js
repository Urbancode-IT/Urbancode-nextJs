import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getLeadEnquiryModel } from '@/lib/leadEnquiriesDb';
import { resolveLeadSection } from '@/app/utils/leadSource';
import { LEAD_ADMIN_COOKIE, isLeadAdminSession } from '@/lib/leadAdminAuth';

export const dynamic = 'force-dynamic';

function csvCell(value) {
  const text = String(value ?? '');
  if (/[",\r\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function countPairs(leads) {
  const map = new Map();
  for (const lead of leads) {
    const form = lead.sourceForm || 'Not captured';
    const button = lead.sourceButton || 'Not captured';
    const key = `${form}\u0000${button}`;
    const current = map.get(key) || { form, button, count: 0 };
    current.count += 1;
    map.set(key, current);
  }
  return [...map.values()].sort((a, b) => b.count - a.count);
}

function countField(leads, field) {
  const map = new Map();
  for (const lead of leads) {
    const label = lead[field] || 'Not captured';
    map.set(label, (map.get(label) || 0) + 1);
  }
  return [...map.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);
}

async function requireAdmin() {
  const jar = await cookies();
  const token = jar.get(LEAD_ADMIN_COOKIE)?.value;
  if (!isLeadAdminSession(token)) {
    return NextResponse.json({ success: false, message: 'Login required.' }, { status: 401 });
  }
  return null;
}

export async function GET(req) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const Model = await getLeadEnquiryModel();
  const leads = await Model.find({}).sort({ createdAt: -1 }).lean();
  const format = new URL(req.url).searchParams.get('format');

  if (format === 'csv') {
    const header = ['Date', 'Name', 'Email', 'Phone', 'Topic', 'Section', 'Form', 'Button', 'Page', 'Channel'];
    const rows = leads.map((lead) => {
      const place = resolveLeadSection(lead);
      return [
        lead.createdAt ? new Date(lead.createdAt).toISOString() : '',
        lead.name,
        lead.email,
        lead.phone,
        lead.topic,
        place.section,
        place.form,
        place.button,
        lead.sourcePage,
        lead.channel,
      ];
    });
    const csv = [header, ...rows].map((row) => row.map(csvCell).join(',')).join('\r\n');
    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="lead-enquiries.csv"',
      },
    });
  }

  return NextResponse.json({
    success: true,
    total: leads.length,
    formCount: countField(leads, 'sourceForm').length,
    buttonCount: countField(leads, 'sourceButton').length,
    byForm: countField(leads, 'sourceForm'),
    byButton: countField(leads, 'sourceButton'),
    byFormButton: countPairs(leads),
    leads: leads.map((lead) => ({
      id: String(lead._id),
      name: lead.name || '',
      email: lead.email || '',
      phone: lead.phone || '',
      topic: lead.topic || '',
      channel: lead.channel || '',
      sourcePage: lead.sourcePage || 'Not captured',
      sourceSection: lead.sourceSection || '',
      sourceForm: lead.sourceForm || 'Not captured',
      sourceButton: lead.sourceButton || 'Not captured',
      createdAt: lead.createdAt || null,
    })),
  });
}
