import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  LEAD_ADMIN_COOKIE,
  checkLeadAdminPassword,
  leadAdminSessionValue,
} from '@/lib/leadAdminAuth';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  if (!checkLeadAdminPassword(body?.password)) {
    return NextResponse.json({ success: false, message: 'Wrong password.' }, { status: 401 });
  }

  const jar = await cookies();
  jar.set(LEAD_ADMIN_COOKIE, leadAdminSessionValue(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.json({ success: true });
}
