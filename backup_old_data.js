
const mongoose = require('mongoose');

async function checkOld() {
    const url = "mongodb+srv://abinash220304_db_user:abinash2204@cluster0.qmoihsl.mongodb.net/feedbackDB";
    try {
        const conn = await mongoose.createConnection(url).asPromise();
        console.log('Connected to OLD cluster');

        const count = await conn.db.collection('questions').countDocuments();
        console.log('Old Questions count:', count);

        if (count > 0) {
            const questions = await conn.db.collection('questions').find().toArray();
            console.log('Fetched', questions.length, 'questions');
            // Save to local file as backup
            require('fs').writeFileSync('old_questions.json', JSON.stringify(questions, null, 2));
        }

        const tCount = await conn.db.collection('trainers').countDocuments();
        console.log('Old Trainers count:', tCount);
        if (tCount > 0) {
            const trainers = await conn.db.collection('trainers').find().toArray();
            require('fs').writeFileSync('old_trainers.json', JSON.stringify(trainers, null, 2));
        }

        await conn.close();
    } catch (err) {
        console.error('Error connecting to OLD cluster:', err.message);
    }
}

checkOld();
