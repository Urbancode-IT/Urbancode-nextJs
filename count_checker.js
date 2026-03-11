
const fs = require('fs');
const content = fs.readFileSync('d:/Urbancode-nextJs/app/compiler/data/problemsData.js', 'utf8');

// Regex to find topic blocks and their totalProblems and problems array
const topicRegex = /(\w+):\s*{[\s\S]*?title:[\s\S]*?totalProblems:\s*(\d+)[\s\S]*?problems:\s*\[([\s\S]*?)\]\s*}/g;
let match;

while ((match = topicRegex.exec(content)) !== null) {
    const topic = match[1];
    const expected = parseInt(match[2]);
    const problemsBlock = match[3];

    // Count objects in the problems array. 
    // This is a simple count of characters '{' at the start of an object
    const actual = (problemsBlock.match(/\{\s*id:/g) || []).length;

    if (actual !== expected) {
        console.log(`Topic: ${topic} - Actual: ${actual}, Expected: ${expected}`);
    } else {
        console.log(`Topic: ${topic} - OK (${actual})`);
    }
}
