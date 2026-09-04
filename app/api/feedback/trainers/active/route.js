export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getFeedbackModels } from '@/lib/feedbackDb';

export async function GET() {
    try {
        const { Trainer } = await getFeedbackModels();
        const trainers = await Trainer.find({ active: true });
        return NextResponse.json(trainers);
    } catch (err) {
        console.error('Feedback API GET /trainers/active error:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
