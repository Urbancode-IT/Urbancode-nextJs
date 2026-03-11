
const fs = require('fs');
const content = fs.readFileSync('d:/Urbancode-nextJs/app/compiler/data/problemsData.js', 'utf8');

// This script will attempt to parse the file roughly by splitting into problem objects
// It's not perfect but better than the simple regex

const problems = [];
// Find all occurrences of problem objects. They usually look like { id: ..., title: ..., theory: ... }
// We'll search for 'id:' followed by 'title:' and 'theory:'
const problemRegex = /\{\s*id:\s*\d+,\s*title:\s*["'`](.*?)["'`][\s\S]*?theory:\s*["'`]([\s\S]*?)["'`]\s*}/g;
let match;
while ((match = problemRegex.exec(content)) !== null) {
    problems.push({
        title: match[1],
        theory: match[2]
    });
}

console.log(`Found ${problems.length} problems.`);

problems.forEach(p => {
    if (!p.theory || p.theory.trim() === "" || !p.theory.toLowerCase().includes('logic')) {
        console.log(`MISSING LOGIC: "${p.title}"`);
        // console.log(`THEORY CONTENT: [${p.theory}]`);
    }
});
