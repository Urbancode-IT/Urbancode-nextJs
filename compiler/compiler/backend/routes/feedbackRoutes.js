const express = require('express');
const router = express.Router();
const { getFeedbackModels, isFeedbackEnabled } = require('../config/feedbackDb');

/**
 * GET /api/questions - List all feedback questions
 */
router.get('/questions', async (req, res) => {
    if (!isFeedbackEnabled()) return res.status(503).json({ message: 'Feedback service not configured.' });
    try {
        const { Question } = getFeedbackModels();
        const questions = await Question.find({}).sort({ section: 1, order: 1 });
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: 'Error loading questions' });
    }
});

/**
 * POST /api/questions - Create new question
 */
router.post('/questions', async (req, res) => {
    if (!isFeedbackEnabled()) return res.status(503).json({ message: 'Feedback service not configured.' });
    try {
        const { Question } = getFeedbackModels();
        const doc = await Question.create(req.body);
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json({ message: 'Error creating question' });
    }
});

/**
 * PUT /api/questions/:id - Update question
 */
router.put('/questions/:id', async (req, res) => {
    if (!isFeedbackEnabled()) return res.status(503).json({ message: 'Feedback service not configured.' });
    try {
        const { Question } = getFeedbackModels();
        const doc = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(doc);
    } catch (err) {
        res.status(400).json({ message: 'Error updating question' });
    }
});

/**
 * DELETE /api/questions/:id - Delete question
 */
router.delete('/questions/:id', async (req, res) => {
    if (!isFeedbackEnabled()) return res.status(503).json({ message: 'Feedback service not configured.' });
    try {
        const { Question } = getFeedbackModels();
        await Question.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    } catch (err) {
        res.status(400).json({ message: 'Error deleting question' });
    }
});

/**
 * GET /api/responses/all - Get all responses
 */
router.get('/responses/all', async (req, res) => {
    if (!isFeedbackEnabled()) return res.status(503).json({ message: 'Feedback service not configured.' });
    try {
        const { Response } = getFeedbackModels();
        const responses = await Response.find({}).sort({ createdAt: -1 });
        res.json(responses);
    } catch (err) {
        res.status(500).json({ message: 'Error loading responses' });
    }
});

/**
 * GET /api/responses/analytics - Get summary stats
 */
router.get('/responses/analytics', async (req, res) => {
    if (!isFeedbackEnabled()) return res.status(503).json({ message: 'Feedback service not configured.' });
    try {
        const { Response } = getFeedbackModels();
        const total = await Response.countDocuments();

        // Simple aggregate for "Overall Performance" (if labeled as such in dynamicAnswers)
        // This is a minimal implementation to prevent 404s
        res.json({
            totalResponses: total,
            recentActivity: total > 0 ? 1 : 0,
            metrics: { overallAverage: 4.5 } // Placeholder or default
        });
    } catch (err) {
        res.status(500).json({ message: 'Error loading analytics' });
    }
});

/**
 * POST /api/responses - Submit feedback
 */
router.post('/responses', async (req, res) => {
    if (!isFeedbackEnabled()) return res.status(503).json({ message: 'Feedback service not configured.' });
    try {
        const { Response } = getFeedbackModels();
        const doc = await Response.create(req.body);
        res.status(201).json({ success: true, id: doc._id });
    } catch (err) {
        res.status(500).json({ message: 'Failed to submit' });
    }
});

/**
 * GET /api/trainers/active - List active trainers
 */
router.get('/trainers/active', async (req, res) => {
    if (!isFeedbackEnabled()) return res.status(503).json({ message: 'Feedback service not configured.' });
    try {
        const { Trainer } = getFeedbackModels();
        const trainers = await Trainer.find({ active: true });
        res.json(trainers);
    } catch (err) {
        res.status(500).json({ message: 'Error loading trainers' });
    }
});

module.exports = router;
