
const fs = require('fs');
const content = fs.readFileSync('d:/Urbancode-nextJs/app/compiler/data/problemsData.js', 'utf8');

const lines = content.split('\n');
let currentTopic = '';
let currentProblem = null;
const problemsMap = {};

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const topicMatch = line.match(/^\s{4}([a-z0-9']+):\s*{/);
    if (topicMatch) {
        currentTopic = topicMatch[1];
    }

    if (line.match(/^\s{12}{/)) {
        currentProblem = { id: '?', title: '?', hasTheory: false, topic: currentTopic, line: i + 1 };
    }

    if (currentProblem) {
        const idMatch = line.match(/^\s{16}id:\s*(\d+)/);
        if (idMatch) currentProblem.id = idMatch[1];

        const titleMatch = line.match(/^\s{16}title:\s*["`'](.*?)["`']/);
        if (titleMatch) currentProblem.title = titleMatch[1];

        if (line.includes('theory:')) currentProblem.hasTheory = true;
    }

    if (currentProblem && line.match(/^\s{12}}/)) {
        if (!problemsMap[currentTopic]) problemsMap[currentTopic] = [];
        problemsMap[currentTopic].push(currentProblem);
        currentProblem = null;
    }
}

for (const topic in problemsMap) {
    console.log(`Topic: ${topic}`);
    problemsMap[topic].forEach(p => {
        console.log(`  ${p.id}. ${p.title} - Theory: ${p.hasTheory ? 'YES' : 'NO'}`);
    });
}
