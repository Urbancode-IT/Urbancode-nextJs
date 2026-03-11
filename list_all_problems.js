
const fs = require('fs');
const content = fs.readFileSync('d:/Urbancode-nextJs/app/compiler/data/problemsData.js', 'utf8');

const topics = content.match(/[a-z0-9']+:\s*{[\s\S]*?problems:\s*\[[\s\S]*?\]\s*}/g);

if (!topics) {
    console.log("No topics found");
    process.exit(1);
}

topics.forEach(topicBlock => {
    const topicNameMatch = topicBlock.match(/([a-z0-9']+):\s*{/);
    const topicName = topicNameMatch ? topicNameMatch[1] : 'unknown';
    console.log(`Topic: ${topicName}`);

    const problems = topicBlock.match(/{\s*id:[\s\S]*?}/g);
    if (problems) {
        problems.forEach(p => {
            const titleMatch = p.match(/title:\s*["`'](.*?)["`']/);
            const theoryMatch = p.match(/theory:/);
            const title = titleMatch ? titleMatch[1] : 'No Title';
            console.log(`  - [${theoryMatch ? 'X' : ' '}] ${title}`);
        });
    }
});
