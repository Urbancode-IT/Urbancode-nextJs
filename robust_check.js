
const fs = require('fs');
const path = 'd:/Urbancode-nextJs/app/compiler/data/problemsData.js';
const content = fs.readFileSync(path, 'utf8');

// We need to parse this properly. Since it's a JS file exporting an object, we can try to extract the object.
// But it might have comments and stuff. Let's use a simpler regex approach but better.

// Extract the problemsData object content
const dataMatch = content.match(/export const problemsData = (\{[\s\S]*?\});/);
if (!dataMatch) {
    console.log("Could not find problemsData export");
    process.exit(1);
}

// Since we can't easily eval() because of possible JSX/ESM, let's parse topics manually.
const topicsRaw = dataMatch[1];

// This regex finds topic blocks: key: { ... problems: [ ... ] }
const topicRegex = /([a-z0-9']+):\s*{[\s\S]*?problems:\s*\[([\s\S]*?)\]\s*}/g;
let topicMatch;

console.log("Checking problemsData.js for missing theory and inconsistencies...\n");

while ((topicMatch = topicRegex.exec(topicsRaw)) !== null) {
    const topicName = topicMatch[1];
    const problemsRaw = topicMatch[2];

    // Find each problem object. This handles nested braces by a simple (but potentially flawed) regex.
    // For our data, problems are separated by }, { or bounded by [ ]
    const problemRegex = /{[^{]*?id:[^}]*?}/g;
    // Wait, the problems might have nested objects (like testCases). 
    // Let's use a more robust split.
    const problems = [];
    let braceCount = 0;
    let currentProblem = "";
    let inProblem = false;

    for (let i = 0; i < problemsRaw.length; i++) {
        const char = problemsRaw[i];
        if (char === '{' && braceCount === 0) {
            inProblem = true;
            currentProblem = "{";
            braceCount++;
        } else if (inProblem) {
            currentProblem += char;
            if (char === '{') braceCount++;
            if (char === '}') {
                braceCount--;
                if (braceCount === 0) {
                    problems.push(currentProblem);
                    inProblem = false;
                    currentProblem = "";
                }
            }
        }
    }

    console.log(`Topic: ${topicName} (Found ${problems.length} problems)`);

    problems.forEach((p, index) => {
        const idMatch = p.match(/id:\s*(\d+)/);
        const titleMatch = p.match(/title:\s*["'`](.*?)["'`]/);
        const theoryMatch = p.match(/theory:\s*["'`]([\s\S]*?)["'`]/);

        const id = idMatch ? idMatch[1] : `unknown-${index}`;
        const title = titleMatch ? titleMatch[1] : "Untitled";

        if (!theoryMatch || theoryMatch[1].trim() === "") {
            console.log(`  [MISSING THEORY] ID: ${id}, Title: "${title}"`);
        }
    });
}
