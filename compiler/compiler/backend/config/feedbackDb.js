const mongoose = require('mongoose');

/**
 * Optional second MongoDB connection for Feedback form (questions, trainers, responses).
 * Set FEEDBACK_MONGODB_URI in env to enable feedback API on this backend.
 */
let feedbackConnection = null;
let Question = null;
let Trainer = null;
let Response = null;

if (process.env.FEEDBACK_MONGODB_URI) {
    try {
        feedbackConnection = mongoose.createConnection(process.env.FEEDBACK_MONGODB_URI, {
            serverSelectionTimeoutMS: 5000,
            family: 4
        });
        feedbackConnection.on('connected', () => {
            console.log('✅ Feedback MongoDB connected');
        });
        feedbackConnection.on('error', (err) => {
            console.error('❌ Feedback MongoDB error:', err.message);
        });

        const questionSchema = new mongoose.Schema({
            questionText: { type: String, required: true },
            type: { type: String, default: 'text' },
            order: { type: Number, default: 0 },
            required: { type: Boolean, default: false },
            options: [String],
            rows: [String],
            cols: [String],
            section: String,
            isTrainerEval: { type: Boolean, default: false }
        }, { timestamps: true, strict: false });

        const trainerSchema = new mongoose.Schema({
            name: { type: String, required: true },
            active: { type: Boolean, default: true }
        }, { timestamps: true, strict: false });

        const responseSchema = new mongoose.Schema({
            participantDetails: mongoose.Schema.Types.Mixed,
            dynamicAnswers: [mongoose.Schema.Types.Mixed],
            trainerEvaluations: [mongoose.Schema.Types.Mixed]
        }, { timestamps: true, strict: false });

        Question = feedbackConnection.model('Question', questionSchema, 'questions');
        Trainer = feedbackConnection.model('Trainer', trainerSchema, 'trainers');
        Response = feedbackConnection.model('Response', responseSchema, 'responses');
    } catch (err) {
        console.error('Feedback DB init error:', err.message);
    }
}

function getFeedbackModels() {
    return feedbackConnection ? { Question, Trainer, Response } : null;
}

function isFeedbackEnabled() {
    return !!feedbackConnection && !!Question && !!Trainer && !!Response;
}

module.exports = {
    feedbackConnection,
    getFeedbackModels,
    isFeedbackEnabled
};
