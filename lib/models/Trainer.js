import mongoose from 'mongoose';

const trainerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    specialization: {
        type: String,
        trim: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export default mongoose.models.Trainer || mongoose.model('Trainer', trainerSchema);
