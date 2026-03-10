const express = require('express');
const router = express.Router();
const { getFeedbackModels, isFeedbackEnabled } = require('../config/feedbackDb');

/**
 * GET /api/questions - List all feedback questions (for form)
 */
router.get('/questions', async (req, res) => {
    if (!isFeedbackEnabled()) {
        return res.status(503).json({ message: 'Feedback service not configured. Set FEEDBACK_MONGODB_URI.' });
    }
    try {
        const { Question } = getFeedbackModels();
        const questions = await Question.find({}).sort({ order: 1 });
        res.json(questions);
    } catch (err) {
        console.error('Feedback GET /questions:', err);
        res.status(500).json({ message: 'Failed to load questions' });
    }
});

/**
 * GET /api/trainers/active - List active trainers
 */
router.get('/trainers/active', async (req, res) => {
    if (!isFeedbackEnabled()) {
        return res.status(503).json({ message: 'Feedback service not configured. Set FEEDBACK_MONGODB_URI.' });
    }
    try {
        const { Trainer } = getFeedbackModels();
        const trainers = await Trainer.find({ active: true });
        res.json(trainers);
    } catch (err) {
        console.error('Feedback GET /trainers/active:', err);
        res.status(500).json({ message: 'Failed to load trainers' });
    }
});

/**
 * POST /api/responses - Submit feedback response
 */
router.post('/responses', async (req, res) => {
    if (!isFeedbackEnabled()) {
        return res.status(503).json({ message: 'Feedback service not configured. Set FEEDBACK_MONGODB_URI.' });
    }
    try {
        const { Response } = getFeedbackModels();
        const { participantDetails, dynamicAnswers, trainerEvaluations } = req.body || {};
        const doc = await Response.create({
            participantDetails: participantDetails || {},
            dynamicAnswers: dynamicAnswers || [],
            trainerEvaluations: trainerEvaluations || []
        });
        res.status(201).json({ success: true, id: doc._id });
    } catch (err) {
        console.error('Feedback POST /responses:', err);
        res.status(500).json({ message: 'Failed to submit feedback' });
    }
});

module.exports = router;
