
const fs = require('fs');
const content = fs.readFileSync('d:/Urbancode-nextJs/app/compiler/data/problemsData.js', 'utf8');

// Find all problem objects and check if they have a 'theory' key
const problemRegex = /\{\s*id:[\s\S]*?title:[\s\S]*?\}/g;
let match;
let missingCount = 0;

// This is a bit tricky because of nesting. Let's try to match problem objects more specifically.
// We'll search for 'id:' then find the matching closing brace for the problem object.

const lines = content.split('\n');
let inProblemsArray = false;
let currentProblem = null;
let hasTheory = false;
let currentTitle = "";

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('problems: [')) inProblemsArray = true;
    if (line.includes('id:')) {
        if (currentTitle && !hasTheory) {
            console.log(`MISSING THEORY: "${currentTitle}"`);
            missingCount++;
        }
        hasTheory = false;
        currentTitle = "";
    }
    const tm = line.match(/title:\s*["'`](.*?)["'`]/);
    if (tm) currentTitle = tm[1];
    if (line.includes('theory:')) hasTheory = true;
}

// Check the last one
if (currentTitle && !hasTheory) {
    console.log(`MISSING THEORY: "${currentTitle}"`);
    missingCount++;
}

console.log(`Total missing theory: ${missingCount}`);
