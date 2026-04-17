const fs = require('fs');
const p = 'd:/urbancode/Urbancode-nextJs/app/courses/[categorySlug]/coursesData.js';
let data = fs.readFileSync(p, 'utf8');

// Regex to capture the prefixes "Beginner", "Intermediate", "Advanced", "Expert" followed by a dash (hyphen or en-dash)
const regex = /title:\s*\"(?:Beginner|Intermediate|Advanced|Expert)\s*(?:-|–)\s*(.+?)\"/g;
data = data.replace(regex, 'title: \"$1\"');

fs.writeFileSync(p, data, 'utf8');
console.log('Script completed.');
