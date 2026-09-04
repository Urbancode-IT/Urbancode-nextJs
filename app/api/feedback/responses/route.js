export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getFeedbackModels } from '@/lib/feedbackDb';

export async function GET(request) {
    try {
        const { Response } = await getFeedbackModels();
        const responses = await Response.find().sort({ createdAt: -1 });
        return NextResponse.json(responses);
    } catch (err) {
        console.error('Feedback API GET /responses error:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { Response } = await getFeedbackModels();
        const newResponse = await Response.create(body);
        return NextResponse.json({ success: true, id: newResponse._id }, { status: 201 });
    } catch (err) {
        console.error('Feedback API POST /responses error:', err);
        return NextResponse.json({ message: 'Failed to submit feedback' }, { status: 500 });
    }
}
