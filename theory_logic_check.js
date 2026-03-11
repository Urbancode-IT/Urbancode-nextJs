
const fs = require('fs');
const content = fs.readFileSync('d:/Urbancode-nextJs/app/compiler/data/problemsData.js', 'utf8');

// Find all objects that have a theory field
// We'll search for 'theory:' and then work backwards to find the 'title:'
const theoryMatches = [];
const theoryRegex = /theory:\s*(["'`])([\s\S]*?)\1/g;
let match;

while ((match = theoryRegex.exec(content)) !== null) {
    const theoryBody = match[2];
    const pos = match.index;

    // Search backwards for the nearest 'title:'
    const sub = content.substring(Math.max(0, pos - 1000), pos);
    const titleMatch = sub.match(/title:\s*(["'`])(.*?)\1/g);
    const title = titleMatch ? titleMatch[titleMatch.length - 1].replace(/title:\s*["'`]/, '').replace(/["'`]$/, '') : "Unknown";

    if (!theoryBody.toLowerCase().includes('logic')) {
        console.log(`MISSING LOGIC in title "${title}"`);
        // console.log(`Theory: ${theoryBody.substring(0, 50)}...`);
    }
}
