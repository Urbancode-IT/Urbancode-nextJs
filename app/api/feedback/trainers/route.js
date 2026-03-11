import { NextResponse } from 'next/server';
import { getFeedbackModels } from '@/lib/feedbackDb';

export async function GET(request) {
    try {
        const { Trainer } = await getFeedbackModels();
        // Return all trainers for admin, not just active ones
        const trainers = await Trainer.find().sort({ name: 1 });
        return NextResponse.json(trainers);
    } catch (err) {
        console.error('Feedback API GET /trainers error:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { Trainer } = await getFeedbackModels();
        const doc = await Trainer.create(body);
        return NextResponse.json(doc, { status: 201 });
    } catch (err) {
        console.error('Feedback API POST /trainers error:', err);
        return NextResponse.json({ message: 'Failed to create trainer' }, { status: 500 });
    }
}
