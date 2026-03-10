import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { username, password } = await req.json();

        // Hardcoded admin credentials for the feedback panel
        if (username === 'admin' && password === 'admin123') {
            return NextResponse.json({
                success: true,
                token: 'UC-SESSION-TOKEN-ADMIN-ACCESS',
                user: {
                    username: 'admin',
                    role: 'superuser'
                }
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
