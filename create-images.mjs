#!/usr/bin/env node

/**
 * Create working placeholder PNG images
 * Base64 encoded minimal transparent PNGs
 */

import fs from 'fs';
import path from 'path';

const mascotDir = 'public/images/mascots';

// Base64 encoded 120x140 transparent PNG (placeholder)
const pngBase64_120x140 = 'iVBORw0KGgoAAAANSUhEUgAAAHgAAACSCAYAAACzLfJGAAAABGdBTUEAALGPC/xhBQAAACBjSFRNAAB6JgAAdjoAAHpIAAB1KAAA4qsAAB85AAB0KAAA00EAAOCkAAACGklEQVR42u3QQQEAAAjAIP1vbQjfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4NjSEAAFy0qQ+AAAAAElFTkSuQmCC';

// Base64 encoded 80x80 transparent PNG (for rocket)
const pngBase64_80x80 = 'iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABGdBTUEAALGPC/xhBQAAACBjSFRNAAB6JgAAdjoAAHpIAAB1KAAA4qsAAB85AAB0KAAA00EAAOCkAAACGklEQVR42u3QQQEAAAjAIPlvbQjfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8ORkQAAfhHr3+AAAAAElFTkSuQmCC';

console.log('📦 Creating working PNG image files...\n');

try {
  // Python mascot (120x140)
  const pythonBuf = Buffer.from(pngBase64_120x140, 'base64');
  fs.writeFileSync(path.join(mascotDir, 'python_mascot.png'), pythonBuf);
  console.log('✓ python_mascot.png (120×140)');
  
  // CSS mascot (120x140)
  const cssBuf = Buffer.from(pngBase64_120x140, 'base64');
  fs.writeFileSync(path.join(mascotDir, 'css_mascot.png'), cssBuf);
  console.log('✓ css_mascot.png (120×140)');
  
  // SQL mascot (120x140)
  const sqlBuf = Buffer.from(pngBase64_120x140, 'base64');
  fs.writeFileSync(path.join(mascotDir, 'sql_mascot.png'), sqlBuf);
  console.log('✓ sql_mascot.png (120×140)');
  
  // Rocket mascot (80x80)
  const rocketBuf = Buffer.from(pngBase64_80x80, 'base64');
  fs.writeFileSync(path.join(mascotDir, 'rocket_mascot.png'), rocketBuf);
  console.log('✓ rocket_mascot.png (80×80)');
  
  console.log('\n✓ All placeholder images created!\n');
  console.log('Next: npm run build && npm run dev');
  
} catch (error) {
  console.error('✗ Error:', error.message);
  process.exit(1);
}
