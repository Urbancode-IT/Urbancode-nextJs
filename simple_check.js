
const fs = require('fs');
const content = fs.readFileSync('d:/Urbancode-nextJs/app/compiler/data/problemsData.js', 'utf8');

const regex = /title:\s*["'`](.*?)["'`][\s\S]*?theory:\s*["'`]([\s\S]*?)["'`]/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const title = match[1];
    const theory = match[2];
    if (!theory.toLowerCase().includes('logic')) {
        console.log(`Problem: ${title} is missing "Logic" keyword in theory.`);
    }
}
