import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import ResponseModel from '../../../lib/models/Response';

// GET all responses (admin only)
export async function GET() {
    await dbConnect();
    try {
        const responses = await ResponseModel.find().sort({ createdAt: -1 });
        return NextResponse.json(responses);
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}

// POST new response (submit feedback)
export async function POST(req) {
    await dbConnect();
    try {
        const body = await req.json();

        // Handle previous response by same email if logic requires
        const existing = await ResponseModel.findOne({ 'participantDetails.email': body.participantDetails.email });
        if (existing) {
            // In the original it was NOT unique, but let's check. 
            // Actually, if it's NOT unique in DB but unique in schema it would fail.
            // Usually we allow multiple if it's anonymous-ish feedback.
        }

        const response = await ResponseModel.create(body);
        return NextResponse.json(response, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
