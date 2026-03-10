import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.FEEDBACK_API_URL || 'https://feedback-uc-urbancode.onrender.com';

export async function GET() {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000);
        const res = await fetch(`${BACKEND_URL}/api/trainers/active`, {
            headers: { 'Content-Type': 'application/json' },
            next: { revalidate: 60 },
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
            return NextResponse.json(
                { message: data.message || 'Failed to load trainers' },
                { status: res.status }
            );
        }
        return NextResponse.json(data);
    } catch (err) {
        console.error('Feedback proxy /trainers/active:', err);
        return NextResponse.json(
            { message: 'Service temporarily unavailable' },
            { status: 502 }
        );
    }
}
