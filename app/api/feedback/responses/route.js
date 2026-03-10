import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.FEEDBACK_API_URL || 'https://feedback-uc-urbancode.onrender.com';

export async function POST(request) {
    try {
        const body = await request.json();
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000);
        const res = await fetch(`${BACKEND_URL}/api/responses`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
            return NextResponse.json(
                { message: data.message || 'Failed to submit feedback' },
                { status: res.status }
            );
        }
        return NextResponse.json(data);
    } catch (err) {
        console.error('Feedback proxy /responses:', err);
        return NextResponse.json(
            { message: 'Service temporarily unavailable' },
            { status: 502 }
        );
    }
}
