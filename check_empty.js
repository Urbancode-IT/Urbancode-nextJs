
const fs = require('fs');
const content = fs.readFileSync('d:/Urbancode-nextJs/app/compiler/data/problemsData.js', 'utf8');

const lines = content.split('\n');
let currentTopic = '';
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const topicMatch = line.match(/^\s{4}([a-z0-9'+]+):\s*{/);
    if (topicMatch) currentTopic = topicMatch[1];

    if (line.match(/title:\s*["'`]\s*["'`]/)) console.log(`Empty TITLE in ${currentTopic} at line ${i + 1}`);
    if (line.match(/description:\s*["'`]\s*["'`]/)) console.log(`Empty DESCRIPTION in ${currentTopic} at line ${i + 1}`);
    if (line.match(/theory:\s*["'`]\s*["'`]/)) console.log(`Empty THEORY in ${currentTopic} at line ${i + 1}`);
}
