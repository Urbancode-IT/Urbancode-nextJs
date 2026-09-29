import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { LEAD_ADMIN_COOKIE } from '@/lib/leadAdminAuth';

export const dynamic = 'force-dynamic';

export async function POST() {
  const jar = await cookies();
  jar.set(LEAD_ADMIN_COOKIE, '', { httpOnly: true, path: '/', maxAge: 0 });
  return NextResponse.json({ success: true });
}
