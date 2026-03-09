import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['text', 'textarea', 'radio', 'checkbox', 'matrix', 'trainer-select']
    },
    options: [String],
    rows: [String],
    columns: [String],
    section: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        default: 0
    },
    required: {
        type: Boolean,
        default: false
    },
    isTrainerEval: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.models.Question || mongoose.model('Question', QuestionSchema);
