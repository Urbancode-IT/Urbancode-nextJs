import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req) {
    try {
        const { username, password } = await req.json();

        // Use same environment variables as original backend
        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '24h' });
            return NextResponse.json({ token, username });
        }

        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
