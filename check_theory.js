
const fs = require('fs');
const content = fs.readFileSync('d:/Urbancode-nextJs/app/compiler/data/problemsData.js', 'utf8');

const lines = content.split('\n');
let currentTopic = '';
let currentProblem = null;

const results = [];

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
        if (line.match(/^\s{16}id:\s*(\d+)/)) currentProblem.id = line.match(/^\s{16}id:\s*(\d+)/)[1];
        if (line.match(/^\s{16}title:\s*["`'](.*?)["`']/)) currentProblem.title = line.match(/^\s{16}title:\s*["`'](.*?)["`']/)[1];
        if (line.match(/^\s{16}theory:/)) currentProblem.hasTheory = true;
    }

    if (currentProblem && line.match(/^\s{12}}/)) {
        results.push(currentProblem);
        currentProblem = null;
    }
}

results.forEach(p => {
    if (!p.hasTheory) {
        console.log(`[MISSING] Topic: ${p.topic}, ID: ${p.id}, Title: ${p.title} (Line ${p.line})`);
    }
});

console.log(`Verified ${results.length} problems.`);
