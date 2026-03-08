import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Question from '../../../../lib/models/Question';

export async function PUT(req, { params }) {
    await dbConnect();
    const { id } = await params;
    try {
        const body = await req.json();
        const question = await Question.findByIdAndUpdate(id, body, { new: true });
        return NextResponse.json(question);
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}

export async function DELETE(req, { params }) {
    await dbConnect();
    const { id } = await params;
    try {
        await Question.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Question deleted' });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
