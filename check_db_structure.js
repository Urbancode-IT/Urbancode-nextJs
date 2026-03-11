
const mongoose = require('mongoose');

async function checkDB() {
    const url = "mongodb+srv://urbancodecompiler_db_user:Urbancode123@cluster0.ftwenuo.mongodb.net/compiler?retryWrites=true&w=majority";
    try {
        const conn = await mongoose.createConnection(url).asPromise();
        console.log('Connected to cluster');

        const admin = conn.db.admin();
        const dbs = await admin.listDatabases();
        console.log('Databases:', dbs.databases.map(d => d.name));

        const compilerDb = conn.useDb('compiler');
        const collections = await compilerDb.db.listCollections().toArray();
        console.log('Collections in compiler:', collections.map(c => c.name));

        if (dbs.databases.find(d => d.name === 'feedbackDB')) {
            const feedbackDb = conn.useDb('feedbackDB');
            const feedbackCollections = await feedbackDb.db.listCollections().toArray();
            console.log('Collections in feedbackDB:', feedbackCollections.map(c => c.name));
        }

        await conn.close();
    } catch (err) {
        console.error('Error:', err);
    }
}

checkDB();
