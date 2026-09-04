export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getFeedbackModels } from '@/lib/feedbackDb';

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        const { Response } = await getFeedbackModels();
        const doc = await Response.findByIdAndDelete(id);
        if (!doc) return NextResponse.json({ message: 'Response not found' }, { status: 404 });
        return NextResponse.json({ message: 'Response deleted' });
    } catch (err) {
        console.error('Feedback API DELETE /responses/:id error:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
