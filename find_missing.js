
const fs = require('fs');
const content = fs.readFileSync('d:/Urbancode-nextJs/app/compiler/data/problemsData.js', 'utf8');

const topicBlocks = content.split(/^\s{4}([a-z0-9'+]+):\s*{/m);
// The split will give: [garbage, topic1, content1, topic2, content2, ...]

for (let i = 1; i < topicBlocks.length; i += 2) {
    const topic = topicBlocks[i].replace(/'/g, '');
    const topicContent = topicBlocks[i + 1];

    // Find problem arrays
    const problemArrayMatch = topicContent.match(/problems:\s*\[([\s\S]*?)\]\s*(?:,|})/);
    if (!problemArrayMatch) continue;

    const problemsRaw = problemArrayMatch[1];

    // Parse individual problems
    const problems = [];
    let braceCount = 0;
    let currentProblem = "";
    let inProblem = false;

    for (let j = 0; j < problemsRaw.length; j++) {
        const char = problemsRaw[j];
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

    problems.forEach(p => {
        if (!p.includes('theory:')) {
            const titleMatch = p.match(/title:\s*["'`](.*?)["'`]/);
            console.log(`MISSING: Topic [${topic}], Problem [${titleMatch ? titleMatch[1] : 'Unknown'}]`);
        }
    });
}
