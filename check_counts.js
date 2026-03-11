
const { problemsData } = require('./app/compiler/data/problemsData.js');
for (const topic in problemsData) {
    const actual = problemsData[topic].problems.length;
    const expected = problemsData[topic].totalProblems;
    if (actual !== expected) {
        console.log(`Topic: ${topic} - Actual: ${actual}, Expected: ${expected}`);
    }
}
