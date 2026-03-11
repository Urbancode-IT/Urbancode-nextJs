
const fs = require('fs');
const content = fs.readFileSync('d:/Urbancode-nextJs/app/compiler/data/problemsData.js', 'utf8');

const problemRegex = /\{\s*id:\s*\d+,\s*title:\s*["'`](.*?)["'`]/g;
let match;
const titles = [];
while ((match = problemRegex.exec(content)) !== null) {
    titles.push(match[1]);
}

console.log(`Found ${titles.length} titles.`);
titles.sort().forEach(t => console.log(t));
