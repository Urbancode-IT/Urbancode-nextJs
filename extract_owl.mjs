import fs from 'fs';

// Search ALL brain conversations for KidsMascot.jsx writes
const brainDir = 'C:/Users/s.Abinash/.gemini/antigravity/brain';
const convDirs = fs.readdirSync(brainDir).filter(d => {
  const full = `${brainDir}/${d}`;
  return fs.statSync(full).isDirectory();
});

console.log(`Scanning ${convDirs.length} conversations...`);

let allFound = [];
convDirs.forEach(convId => {
  const logFile = `${brainDir}/${convId}/.system_generated/logs/transcript.jsonl`;
  if (!fs.existsSync(logFile)) return;
  
  const lines = fs.readFileSync(logFile, 'utf8').split('\n').filter(Boolean);
  lines.forEach((line, idx) => {
    try {
      const parsed = JSON.parse(line);
      if (parsed.tool_calls) {
        parsed.tool_calls.forEach(tc => {
          if (tc.name === 'write_to_file' && tc.args && tc.args.TargetFile && tc.args.TargetFile.includes('KidsMascot.jsx')) {
            const code = tc.args.CodeContent || '';
            allFound.push({ convId, idx, len: code.length, code });
          }
        });
      }
    } catch(e) {}
  });
});

console.log(`\nFound ${allFound.length} total KidsMascot.jsx writes:`);
allFound.sort((a,b) => b.len - a.len); // largest first
allFound.forEach((f, i) => {
  console.log(`  [${i}] conv=${f.convId.substring(0,8)} line=${f.idx} len=${f.len}`);
});

// Use the largest one (most complete)
if (allFound.length > 0) {
  const best = allFound[0];
  let code = best.code;
  // Try to JSON-unescape if needed
  if (code.startsWith('"')) {
    try { code = JSON.parse(code); } catch(e) {}
  }
  
  const outPath = 'd:/urbancode/Urbancode-nextJs/app/components/CourseLayout/KidsMascot.jsx';
  fs.writeFileSync(outPath, code, 'utf8');
  console.log(`\nWritten best entry (${code.length} chars) from conv ${best.convId.substring(0,8)}, line ${best.idx}`);
  console.log('First 200 chars:', code.substring(0, 200));
}
