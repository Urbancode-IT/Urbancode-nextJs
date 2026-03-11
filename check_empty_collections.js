
const mongoose = require('mongoose');

async function checkEmpty() {
    const url = "mongodb+srv://urbancodecompiler_db_user:Urbancode123@cluster0.ftwenuo.mongodb.net/feedbackDB";
    try {
        const conn = await mongoose.createConnection(url).asPromise();
        console.log('Connected to:', conn.name);

        const feedbackDb = conn.useDb('feedbackDB');
        const collections = await feedbackDb.db.listCollections().toArray();
        console.log('Collections in feedbackDB:', collections.map(c => c.name));

        for (let coll of collections) {
            const count = await feedbackDb.db.collection(coll.name).countDocuments();
            console.log(`- ${coll.name}: ${count} documents`);
        }

        await conn.close();
    } catch (err) {
        console.error('Error:', err);
    }
}

checkEmpty();
