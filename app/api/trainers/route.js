import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Trainer from '@/lib/models/Trainer';

export async function GET() {
    try {
        await dbConnect();
        const trainers = await Trainer.find().sort({ name: 1 });
        return NextResponse.json(trainers);
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();
        const trainer = await Trainer.create(body);
        return NextResponse.json(trainer, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
