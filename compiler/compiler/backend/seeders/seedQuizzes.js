const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Quiz = require('../models/Quiz');

// Load env vars
dotenv.config({ path: path.join(__dirname, '../.env') });

// Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const importData = async () => {
    try {
        await connectDB();

        // Read JSON file
        const data = fs.readFileSync(path.join(__dirname, 'quizzes_data.json'), 'utf-8');
        const updates = JSON.parse(data);

        const topicDefaults = {
            python: { title: "Python Programming", icon: "🐍", color: "#3776ab" },
            java: { title: "Java Programming", icon: "☕", color: "#f89820" },
            javascript: { title: "JavaScript Basics", icon: "📜", color: "#f6e05e" },
            html: { title: "HTML & Web Development", icon: "🌐", color: "#ed8936" },
            css: { title: "CSS Styles", icon: "🎨", color: "#30a9dc" },
            react: { title: "React Framework", icon: "⚛️", color: "#61dafb" },
            sql: { title: "SQL & Databases", icon: "🗄️", color: "#4a5568" },
            cpp: { title: "C++ Programming", icon: "⚙️", color: "#00599c" }
        };

        for (const update of updates) {
            const { topic, level, questions } = update;

            if (!['beginner', 'average', 'tough'].includes(level)) {
                console.warn(`Skipping invalid level: ${level} for topic ${topic}`);
                continue;
            }

            const topicKey = topic.toLowerCase();
            let quiz = await Quiz.findOne({ topic: topicKey });

            if (!quiz) {
                const defaults = topicDefaults[topicKey] || { title: topic, icon: '❓', color: '#667eea' };
                quiz = new Quiz({
                    topic: topicKey,
                    title: defaults.title,
                    icon: defaults.icon,
                    color: defaults.color,
                    levels: { beginner: [], average: [], tough: [] }
                });
                await quiz.save();
                console.log(`Created new quiz topic: ${topicKey}`);
            }

            // Replace or append? The current script appends. 
            // I'll make it replace if the ID matches to avoid duplicates if possible, or just append as before.
            // Actually, I'll just clear the level first if we want a fresh start, 
            // but the user said "add all", so appending might build it up.
            // Let's just append as the original script did, but avoid duplicates if possible.

            await Quiz.updateOne(
                { _id: quiz._id },
                { $set: { [`levels.${level}`]: questions } }
            );
            console.log(`Updated ${topic} (${level}) with ${questions.length} questions`);
        }

        console.log('Quiz Data Import Process Completed!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

importData();
