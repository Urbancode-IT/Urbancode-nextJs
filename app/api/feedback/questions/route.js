export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getFeedbackModels } from '@/lib/feedbackDb';

export async function GET() {
    try {
        const { Question } = await getFeedbackModels();
        const questions = await Question.find({}).sort({ section: 1, order: 1 });
        return NextResponse.json(questions);
    } catch (err) {
        console.error('Feedback API GET /questions error:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { Question } = await getFeedbackModels();
        const doc = await Question.create(body);
        return NextResponse.json(doc, { status: 201 });
    } catch (err) {
        console.error('Feedback API POST /questions error:', err);
        return NextResponse.json({ message: 'Failed to create question' }, { status: 500 });
    }
}
