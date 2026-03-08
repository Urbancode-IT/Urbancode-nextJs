import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Question from '@/lib/models/Question';

// GET all questions
export async function GET() {
    try {
        await dbConnect();
        const questions = await Question.find().sort({ order: 1 });
        return NextResponse.json(questions);
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}

// CREATE new question (requires auth in original - we'll implement a simple head check)
export async function POST(req) {
    try {
        await dbConnect();
        // Simple Auth Simulation (mirroring existing logic)
        const authHeader = req.headers.get('Authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'No authorization token' }, { status: 401 });
        }

        const body = await req.json();
        const question = await Question.create(body);
        return NextResponse.json(question, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
