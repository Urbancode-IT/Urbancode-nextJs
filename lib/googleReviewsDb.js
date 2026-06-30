import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://abinash220304_db_user:abinash2204@cluster0.qmoihsl.mongodb.net/urbancodeDB?retryWrites=true&w=majority";

let cached = global.mongooseGoogleReviews;

if (!cached) {
    cached = global.mongooseGoogleReviews = { conn: null, promise: null };
}

export async function connectGoogleReviewsDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        console.log('🔄 Connecting to MongoDB (Google Reviews)...');
        cached.promise = mongoose.createConnection(MONGODB_URI, {
            serverSelectionTimeoutMS: 5000,
        }).asPromise().then((conn) => {
            console.log('✅ Next.js Google Reviews DB Connected');
            return conn;
        }).catch(err => {
            console.error('❌ Google Reviews DB Connection Error:', err);
            cached.promise = null;
            throw err;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export async function getGoogleReviewModel() {
    const conn = await connectGoogleReviewsDB();

    if (conn.models.GoogleReview) {
        return conn.model('GoogleReview');
    }

    const googleReviewSchema = new mongoose.Schema({
        googleReviewId: { type: String, required: true, unique: true },
        authorName: { type: String, required: true },
        authorUrl: { type: String },
        profilePhotoUrl: { type: String },
        rating: { type: Number, required: true },
        text: { type: String },
        time: { type: Number, required: true }, // UNIX timestamp from Google
        branchName: { type: String, default: 'Velachery' }, // e.g., Velachery, Pallikaranai, Tirunelveli
    }, { timestamps: true });

    return conn.model('GoogleReview', googleReviewSchema, 'google_reviews');
}
