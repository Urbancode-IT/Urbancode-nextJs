import { NextResponse } from 'next/server';
import { getFeedbackModels } from '@/lib/feedbackDb';

export async function GET(request) {
    try {
        const { Response } = await getFeedbackModels();
        const total = await Response.countDocuments();

        return NextResponse.json({
            totalResponses: total,
            recentActivity: total > 0 ? 1 : 0,
            metrics: { overallAverage: 4.5 }
        });
    } catch (err) {
        console.error('Feedback API GET /analytics error:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
