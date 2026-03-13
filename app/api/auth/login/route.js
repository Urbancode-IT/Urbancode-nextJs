import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.FEEDBACK_JWT_SECRET || 'uc_secret_2024_feedback_token_key_uc';
const ADMIN_USERNAME = process.env.FEEDBACK_ADMIN_USERNAME || 'urbancodeit';
const ADMIN_PASSWORD = process.env.FEEDBACK_ADMIN_PASSWORD || 'UCfeedbackadmin@2204';

export async function POST(req) {
    try {
        const { username, password } = await req.json();

        // Match standalone credentials
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            // Create a real JWT token like standalone
            const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '24h' });
            
            return NextResponse.json({
                success: true,
                token: token,
                username: username
            });
        }

        return NextResponse.json(
            { message: 'Invalid credentials. Please check your username and password.' },
            { status: 401 }
        );
    } catch (err) {
        console.error('Local auth error:', err);
        return NextResponse.json({ message: 'Authentication service error' }, { status: 500 });
    }
}
