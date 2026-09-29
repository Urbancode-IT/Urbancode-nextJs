export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getCompilerLeadModel } from '@/lib/compilerLeadsDb';

const toLead = (doc) => ({
  id: doc.clientId || String(doc._id),
  name: doc.name || '',
  email: doc.email || '',
  mobile: doc.mobile || doc.phone || '',
  courseName: doc.courseName || '',
  message: doc.message || '',
  createdAt: doc.createdAt ? new Date(doc.createdAt).toISOString() : '',
  apiSuccess: Boolean(doc.apiSuccess),
  apiError: doc.apiError || '',
});

const normalize = (item) => {
  const clientId = String(item?.clientId || item?.id || '').trim();
  if (!clientId) return null;
  return {
    clientId,
    name: String(item?.name || '').trim(),
    email: String(item?.email || '').trim(),
    mobile: String(item?.mobile || item?.phone || '').trim(),
    courseName: String(item?.courseName || item?.course || '').trim(),
    message: String(item?.message || '').trim(),
    mode: String(item?.mode || '').trim(),
    apiSuccess: Boolean(item?.apiSuccess),
    apiError: item?.apiError ? String(item.apiError) : '',
    createdAt: item?.createdAt ? new Date(item.createdAt) : new Date(),
  };
};

export async function GET() {
  try {
    const CompilerLead = await getCompilerLeadModel();
    const docs = await CompilerLead.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, leads: docs.map(toLead) });
  } catch (error) {
    console.error('Compiler leads GET error:', error);
    return NextResponse.json({ success: false, message: 'Could not load leads.' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const incoming = Array.isArray(body?.leads) ? body.leads : [body];
    const leads = incoming.map(normalize).filter(Boolean);

    if (!leads.length) {
      return NextResponse.json({ success: false, message: 'No lead data.' }, { status: 400 });
    }

    const CompilerLead = await getCompilerLeadModel();
    await Promise.all(
      leads.map((lead) =>
        CompilerLead.findOneAndUpdate(
          { clientId: lead.clientId },
          { $set: lead },
          { upsert: true, new: true }
        )
      )
    );

    return NextResponse.json({ success: true, saved: leads.length });
  } catch (error) {
    console.error('Compiler leads POST error:', error);
    return NextResponse.json({ success: false, message: 'Could not save lead.' }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const CompilerLead = await getCompilerLeadModel();

    if (searchParams.get('all') === '1') {
      await CompilerLead.deleteMany({});
      return NextResponse.json({ success: true });
    }

    if (!id) {
      return NextResponse.json({ success: false, message: 'Lead id is required.' }, { status: 400 });
    }

    await CompilerLead.deleteOne({ clientId: id });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Compiler leads DELETE error:', error);
    return NextResponse.json({ success: false, message: 'Could not delete lead.' }, { status: 500 });
  }
}
