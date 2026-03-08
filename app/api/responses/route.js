import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import ResponseModel from '@/lib/models/Response';

// GET all responses (admin only)
export async function GET() {
    try {
        await dbConnect();
        const responses = await ResponseModel.find().sort({ createdAt: -1 });
        return NextResponse.json(responses);
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}

// POST new response (submit feedback)
export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();

        // Optional: Check for duplicate submissions if necessary
        // const existing = await ResponseModel.findOne({ 'participantDetails.email': body.participantDetails.email });

        const response = await ResponseModel.create(body);
        return NextResponse.json(response, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
