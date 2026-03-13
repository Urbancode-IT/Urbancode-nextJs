import { NextResponse } from 'next/server';
import { getFeedbackModels } from '@/lib/feedbackDb';

export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { Trainer } = await getFeedbackModels();
        const doc = await Trainer.findByIdAndUpdate(id, body, { new: true });
        if (!doc) return NextResponse.json({ message: 'Trainer not found' }, { status: 404 });
        return NextResponse.json(doc);
    } catch (err) {
        console.error('Feedback API PUT /trainers/:id error:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        const { Trainer } = await getFeedbackModels();
        const doc = await Trainer.findByIdAndDelete(id);
        if (!doc) return NextResponse.json({ message: 'Trainer not found' }, { status: 404 });
        return NextResponse.json({ message: 'Trainer deleted' });
    } catch (err) {
        console.error('Feedback API DELETE /trainers/:id error:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
