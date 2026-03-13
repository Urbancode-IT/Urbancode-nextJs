import { getFeedbackModels } from './lib/feedbackDb.js';

async function test() {
    try {
        const { Question } = await getFeedbackModels();
        const allQuestions = await Question.find().sort({ order: 1 }).lean();
        console.log('Total Questions:', allQuestions.length);
        allQuestions.forEach(q => {
            console.log(`[Order: ${q.order}] [Section: ${q.section}] [Type: ${q.type}] Text: ${q.questionText.substring(0, 50)}`);
        });
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

test();
