const fs = require('fs');
const path = require('path');
const dirs = fs.readdirSync('./app/study-abroad').filter(d => fs.statSync(path.join('./app/study-abroad', d)).isDirectory());
dirs.forEach(d => {
    const p = path.join('./app/study-abroad', d, 'page.jsx');
    if(fs.existsSync(p)) {
        let c = fs.readFileSync(p, 'utf8');
        c = c.replace(/import '\.\.\/\.\.\/StudyAbroad\.css';/g, "import '../StudyAbroad.css';");
        fs.writeFileSync(p, c);
        console.log('Updated ' + d);
    }
});
