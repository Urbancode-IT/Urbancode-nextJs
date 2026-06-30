import { NextResponse } from 'next/server';
import { getGoogleReviewModel } from '@/lib/googleReviewsDb';
import axios from 'axios';

/** Resolve a Place ID by text search if not pre-configured */
async function resolvePlaceId(apiKey, searchQuery) {
    try {
        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(searchQuery)}&inputtype=textquery&fields=place_id,name,formatted_address&key=${apiKey}`;
        const res = await axios.get(url);
        if (res.data.status === 'OK' && res.data.candidates?.length > 0) {
            return res.data.candidates[0].place_id;
        }
        return null;
    } catch (err) {
        console.error(`Text search failed for "${searchQuery}":`, err.message);
        return null;
    }
}

export async function GET(request) {
    try {
        const authHeader = request.headers.get('authorization');
        const searchParams = request.nextUrl.searchParams;
        const secret = searchParams.get('secret');

        const CRON_SECRET = process.env.CRON_SECRET || 'urbancode-cron-secret-2026';

        if (authHeader !== `Bearer ${CRON_SECRET}` && secret !== CRON_SECRET) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
        if (!API_KEY) {
            return NextResponse.json({ error: 'Missing GOOGLE_PLACES_API_KEY in environment variables.' }, { status: 500 });
        }

        // Branch config — Place IDs from env vars, or auto-discover via text search
        let branches = [
            {
                name: 'Velachery',
                placeId: process.env.GOOGLE_PLACE_ID_VELACHERRY || process.env.GOOGLE_PLACE_ID || null,
                searchQuery: 'Urbancode Velachery Chennai'
            },
            {
                name: 'Pallikaranai',
                placeId: process.env.GOOGLE_PLACE_ID_PALLIKARANAI || null,
                searchQuery: 'Urbancode Pallikaranai Chennai'
            },
            {
                name: 'Tirunelveli',
                placeId: process.env.GOOGLE_PLACE_ID_TIRUNELVELI || null,
                searchQuery: 'Urbancode Training and Solutions Tirunelveli'
            }
        ];

        // Auto-discover missing Place IDs via text search
        for (const branch of branches) {
            if (!branch.placeId) {
                console.log(`No Place ID for ${branch.name}, resolving via text search...`);
                branch.placeId = await resolvePlaceId(API_KEY, branch.searchQuery);
                if (branch.placeId) {
                    console.log(`Resolved ${branch.name}: ${branch.placeId}`);
                } else {
                    console.warn(`Could not resolve Place ID for ${branch.name}`);
                }
            }
        }

        const GoogleReview = await getGoogleReviewModel();
        let addedCount = 0;
        let updatedCount = 0;
        let totalFetched = 0;
        const resolvedPlaceIds = {};

        for (const branch of branches) {
            if (!branch.placeId) {
                console.warn(`Skipping ${branch.name} — no Place ID available.`);
                continue;
            }

            resolvedPlaceIds[branch.name] = branch.placeId;

            const googleApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${branch.placeId}&fields=reviews,name,rating,user_ratings_total&key=${API_KEY}`;
            try {
                const response = await axios.get(googleApiUrl);

                if (response.data.status === 'OK') {
                    const reviews = response.data.result.reviews || [];
                    totalFetched += reviews.length;

                    for (const review of reviews) {
                        if (review.rating < 4) continue; // only 4-5 star reviews

                        const uniqueId = review.author_url || `${review.author_name}_${review.time}`;

                        const reviewData = {
                            googleReviewId: uniqueId,
                            authorName: review.author_name,
                            authorUrl: review.author_url,
                            profilePhotoUrl: review.profile_photo_url,
                            rating: review.rating,
                            text: review.text,
                            time: review.time,
                            branchName: branch.name,
                        };

                        const existingReview = await GoogleReview.findOne({ googleReviewId: uniqueId });

                        if (existingReview) {
                            await GoogleReview.updateOne({ googleReviewId: uniqueId }, { $set: reviewData });
                            updatedCount++;
                        } else {
                            await GoogleReview.create(reviewData);
                            addedCount++;
                        }
                    }
                } else {
                    console.error(`Google API Error for ${branch.name}:`, response.data.error_message || response.data.status);
                }
            } catch (err) {
                console.error(`Fetch error for ${branch.name}:`, err.message);
            }
        }

        return NextResponse.json({
            success: true,
            message: `Synced successfully. Added: ${addedCount}, Updated: ${updatedCount}`,
            totalFetched,
            resolvedPlaceIds,
        }, { status: 200 });

    } catch (error) {
        console.error('Sync Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
