
const mongoose = require('mongoose');
const fs = require('fs');

async function migrate() {
    const newUrl = "mongodb+srv://urbancodecompiler_db_user:Urbancode123@cluster0.ftwenuo.mongodb.net/feedbackDB?retryWrites=true&w=majority";

    try {
        const questions = JSON.parse(fs.readFileSync('old_questions.json', 'utf8'));
        const trainers = JSON.parse(fs.readFileSync('old_trainers.json', 'utf8'));

        console.log(`Read ${questions.length} questions and ${trainers.length} trainers from backup.`);

        const conn = await mongoose.createConnection(newUrl).asPromise();
        console.log('Connected to NEW cluster');

        const qColl = conn.db.collection('questions');
        const tColl = conn.db.collection('trainers');

        // Clear existing empty collections if any
        await qColl.deleteMany({});
        await tColl.deleteMany({});

        // Insert new data
        if (questions.length > 0) {
            await qColl.insertMany(questions);
            console.log('✅ Migrated questions');
        }

        if (trainers.length > 0) {
            await tColl.insertMany(trainers);
            console.log('✅ Migrated trainers');
        }

        await conn.close();
        console.log('🚀 Migration complete!');
    } catch (err) {
        console.error('Migration error:', err);
    }
}

migrate();
