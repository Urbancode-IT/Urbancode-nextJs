export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getFeedbackModels } from '@/lib/feedbackDb';

export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { Question } = await getFeedbackModels();
        const doc = await Question.findByIdAndUpdate(id, body, { new: true });
        if (!doc) return NextResponse.json({ message: 'Question not found' }, { status: 404 });
        return NextResponse.json(doc);
    } catch (err) {
        console.error('Feedback API PUT /questions/:id error:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        const { Question } = await getFeedbackModels();
        const doc = await Question.findByIdAndDelete(id);
        if (!doc) return NextResponse.json({ message: 'Question not found' }, { status: 404 });
        return NextResponse.json({ message: 'Question deleted' });
    } catch (err) {
        console.error('Feedback API DELETE /questions/:id error:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
