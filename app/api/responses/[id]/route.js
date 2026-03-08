import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import ResponseModel from '../../../../lib/models/Response';

export async function DELETE(req, { params }) {
    await dbConnect();
    const { id } = await params;
    try {
        await ResponseModel.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Response deleted' });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}

export async function GET(req, { params }) {
    await dbConnect();
    const { id } = await params;
    try {
        const response = await ResponseModel.findById(id);
        if (!response) {
            return NextResponse.json({ message: 'Response not found' }, { status: 404 });
        }
        return NextResponse.json(response);
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
