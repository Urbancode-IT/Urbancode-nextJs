
const fs = require('fs');
const content = fs.readFileSync('d:/Urbancode-nextJs/app/compiler/data/problemsData.js', 'utf8');

// This is a bit hacky because it's not a real JS parser, but we can look for blocks
const problems = content.match(/{\s+id:[\s\S]+?}/g);

problems.forEach(p => {
    const titleMatch = p.match(/title: "(.*?)"/);
    const theoryMatch = p.match(/theory:/);
    if (titleMatch && !theoryMatch) {
        console.log(`Missing theory for: ${titleMatch[1]}`);
    }
});
