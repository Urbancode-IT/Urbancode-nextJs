import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Trainer from '../../../../lib/models/Trainer';

export async function GET() {
    await dbConnect();
    try {
        const trainers = await Trainer.find({ active: true }).sort({ name: 1 });
        return NextResponse.json(trainers);
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
