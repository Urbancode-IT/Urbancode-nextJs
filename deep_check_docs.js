
const mongoose = require('mongoose');

async function checkDocs() {
    const url = "mongodb+srv://urbancodecompiler_db_user:Urbancode123@cluster0.ftwenuo.mongodb.net/feedbackDB?retryWrites=true&w=majority";
    try {
        const conn = await mongoose.createConnection(url).asPromise();
        console.log('Connected to:', conn.name);

        const Question = conn.model('Question', new mongoose.Schema({}, { strict: false }), 'questions');
        const count = await Question.countDocuments();
        console.log('Questions count:', count);

        if (count > 0) {
            const first = await Question.findOne();
            console.log('First question:', first.questionText);
        } else {
            console.log('No questions found in:', conn.name);
            const dbs = await conn.db.admin().listDatabases();
            console.log('All DBs:', dbs.databases.map(d => d.name));

            // Try with 'compiler' db and switching
            const conn2 = await mongoose.createConnection("mongodb+srv://urbancodecompiler_db_user:Urbancode123@cluster0.ftwenuo.mongodb.net/compiler").asPromise();
            const fdb = conn2.useDb('feedbackDB');
            const Question2 = fdb.model('Question', new mongoose.Schema({}, { strict: false }), 'questions');
            console.log('Count in feedbackDB via switch:', await Question2.countDocuments());
            await conn2.close();
        }

        await conn.close();
    } catch (err) {
        console.error('Error:', err);
    }
}

checkDocs();
