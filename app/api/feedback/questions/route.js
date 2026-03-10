import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.FEEDBACK_API_URL || 'https://feedback-uc-urbancode.onrender.com';

export async function GET() {
    try {
        const res = await fetch(`${BACKEND_URL}/api/questions`, {
            headers: { 'Content-Type': 'application/json' },
            next: { revalidate: 60 }
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
            return NextResponse.json(
                { message: data.message || 'Failed to load questions' },
                { status: res.status }
            );
        }
        return NextResponse.json(data);
    } catch (err) {
        console.error('Feedback proxy /questions:', err);
        return NextResponse.json(
            { message: 'Service temporarily unavailable' },
            { status: 502 }
        );
    }
}
