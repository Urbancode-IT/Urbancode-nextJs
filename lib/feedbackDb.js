import mongoose from 'mongoose';

// Use the dedicated feedback URI if available, otherwise fallback to the corrected URL
// we avoid using MONGODB_URI directly because that points to the main 'compiler' database
const FEEDBACK_URI = process.env.FEEDBACK_MONGODB_URI || "mongodb+srv://urbancodecompiler_db_user:Urbancode123@cluster0.ftwenuo.mongodb.net/feedbackDB?retryWrites=true&w=majority";

let cached = global.mongooseFeedback;

if (!cached) {
    cached = global.mongooseFeedback = { conn: null, promise: null };
}

export async function connectFeedbackDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        console.log('🔄 Connecting to Feedback MongoDB...');
        cached.promise = mongoose.createConnection(FEEDBACK_URI, {
            serverSelectionTimeoutMS: 5000,
        }).asPromise().then((conn) => {
            console.log('✅ Next.js Feedback DB Connected');
            return conn;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export async function getFeedbackModels() {
    const conn = await connectFeedbackDB();

    if (conn.models.Question) {
        return {
            Question: conn.model('Question'),
            Trainer: conn.model('Trainer'),
            Response: conn.model('Response')
        };
    }

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

    return {
        Question: conn.model('Question', questionSchema, 'questions'),
        Trainer: conn.model('Trainer', trainerSchema, 'trainers'),
        Response: conn.model('Response', responseSchema, 'responses')
    };
}
