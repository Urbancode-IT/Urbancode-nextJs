import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
    participantDetails: {
        email: { type: String, required: true },
        name: String,
        courseName: String,
        batch: String,
        trainerName: String
    },
    trainerEvaluations: [{
        trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer' },
        trainerName: { type: String, required: true },
        trainerType: { type: String, required: true, enum: ['Placement', 'Course Training'], default: 'Course Training' },
        ratings: { type: Object }
    }],
    dynamicAnswers: [{
        questionId: { type: String },
        questionText: { type: String, required: true },
        type: { type: String, required: true },
        section: { type: String },
        options: [String],
        rows: [String],
        columns: [String],
        value: mongoose.Schema.Types.Mixed
    }]
}, { timestamps: true });

export default mongoose.models.Response || mongoose.model('Response', responseSchema);
