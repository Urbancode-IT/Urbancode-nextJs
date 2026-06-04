const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC = 'C:\\Users\\s.Abinash\\.gemini\\antigravity\\brain\\32177dfc-6c57-473a-ac30-a5583d3a8f7f\\media__1780463591142.png';
const DEST = 'public/images/KidsImages/owl_mascot.png';

async function run() {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const buf = Buffer.from(data);

  // Background color is roughly R=215, G=230, B=223
  const targetR = 215;
  const targetG = 230;
  const targetB = 223;
  const THRESHOLD = 35;

  for (let i = 0; i < width * height; i++) {
    const off = i * channels;
    const r = buf[off];
    const g = buf[off + 1];
    const b = buf[off + 2];

    const dist = Math.sqrt(
      Math.pow(r - targetR, 2) +
      Math.pow(g - targetG, 2) +
      Math.pow(b - targetB, 2)
    );

    if (dist < THRESHOLD) {
      buf[off + 3] = 0; // Make transparent
    }
  }

  // Save the transparent PNG
  await sharp(buf, { raw: { width, height, channels } })
    .png()
    .toFile(DEST);

  console.log('✓ Successfully processed green owl mascot and saved to:', DEST);
}

run().catch(console.error);
