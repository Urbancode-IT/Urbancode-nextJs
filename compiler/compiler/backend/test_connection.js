require('dotenv').config();
const mongoose = require('mongoose');

console.log('Testing MongoDB Connection...');
console.log('Connection String:', process.env.MONGODB_URI.replace(/:[^@]+@/, ':****@')); // Hide password

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('✅ Successfully connected to MongoDB!');
        console.log('Host:', mongoose.connection.host);
        console.log('Database:', mongoose.connection.name);
        console.log('ReadyState:', mongoose.connection.readyState);
        process.exit(0);
    })
    .catch((error) => {
        console.error('❌ Failed to connect to MongoDB!');
        console.error('Error Name:', error.name);
        console.error('Error Message:', error.message);
        console.error('Full Error:', error);
        process.exit(1);
    });
