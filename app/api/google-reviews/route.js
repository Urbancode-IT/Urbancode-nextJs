import { NextResponse } from 'next/server';
import { getGoogleReviewModel } from '@/lib/googleReviewsDb';

export async function GET() {
    try {
        const GoogleReview = await getGoogleReviewModel();

        // Fetch reviews from DB: Rating >= 4, sort by newest first (time DESC)
        const reviews = await GoogleReview.find({ rating: { $gte: 4 } })
                                          .sort({ time: -1 })
                                          .lean();

        return NextResponse.json({ success: true, data: reviews }, { status: 200 });

    } catch (error) {
        console.error('Fetch Reviews Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
