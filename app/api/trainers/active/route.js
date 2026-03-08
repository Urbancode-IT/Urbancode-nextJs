import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Trainer from '@/lib/models/Trainer';

export async function GET() {
    try {
        await dbConnect();
        const trainers = await Trainer.find({ active: true }).sort({ name: 1 });
        return NextResponse.json(trainers);
    } catch (err) {
        console.error("API Error (Active Trainers):", err);
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
