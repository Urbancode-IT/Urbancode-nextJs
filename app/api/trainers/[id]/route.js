import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Trainer from '../../../../lib/models/Trainer';

export async function PUT(req, { params }) {
    await dbConnect();
    const { id } = await params;
    try {
        const body = await req.json();
        const trainer = await Trainer.findByIdAndUpdate(id, body, { new: true });
        return NextResponse.json(trainer);
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}

export async function DELETE(req, { params }) {
    await dbConnect();
    const { id } = await params;
    try {
        await Trainer.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Trainer deleted' });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
