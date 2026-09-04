export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getFeedbackModels } from '@/lib/feedbackDb';

export async function GET(request) {
    try {
        const { Response, Question, Trainer } = await getFeedbackModels();
        const responses = await Response.find().lean();
        
        const totalResponses = responses.length;
        
        const ratingsCount = {
            'Excellent': 0,
            'Good': 0,
            'Average': 0,
            'Bad': 0,
            'Very Bad': 0
        };
        
        const ratingMap = {
            'Excellent': 5,
            'Good': 4,
            'Average': 3,
            'Bad': 2,
            'Very Bad': 1
        };

        let totalPoints = 0;
        let ratedCount = 0;
        
        const trainerCounts = {};
        const courseCounts = {};

        // Find Overall Rating Question ID if any
        const overallRatingQ = await Question.findOne({ isOverallRating: true });

        responses.forEach(res => {
            // 1. Calculate General Rating
            let ratingValue = null;
            
            if (overallRatingQ) {
                const ans = res.dynamicAnswers?.find(a => String(a.questionId) === String(overallRatingQ._id));
                if (ans) ratingValue = ans.value;
            }

            if (!ratingValue) {
                // Fallback: search by text
                const ans = res.dynamicAnswers?.find(a => {
                    const txt = (a.questionText || '').toLowerCase();
                    return txt.includes('overall') || txt.includes('experience') || txt.includes('rating');
                });
                if (ans) ratingValue = ans.value;
            }

            if (ratingValue && ratingsCount[ratingValue] !== undefined) {
                ratingsCount[ratingValue]++;
                totalPoints += (ratingMap[ratingValue] || 0);
                ratedCount++;
            }

            // 2. Count Trainers
            const evals = res.trainerEvaluations || [];
            evals.forEach(e => {
                if (e.trainerName) {
                    trainerCounts[e.trainerName] = (trainerCounts[e.trainerName] || 0) + 1;
                }
            });

            // 3. Count Courses
            const course = res.participantDetails?.courseName;
            if (course) {
                courseCounts[course] = (courseCounts[course] || 0) + 1;
            }
        });

        const topTrainers = Object.entries(trainerCounts)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);

        const topCourses = Object.entries(courseCounts)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);

        return NextResponse.json({
            totalResponses,
            averageRating: ratedCount > 0 ? totalPoints / ratedCount : 0,
            ratingsCount,
            topTrainers,
            topCourses,
            recentActivity: totalResponses > 0 ? 1 : 0 // simplify for now
        });
    } catch (err) {
        console.error('Feedback API GET /analytics error:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
