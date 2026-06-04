import sharp from 'sharp';
import path from 'path';

const SRC = 'C:\\Users\\s.Abinash\\.gemini\\antigravity\\brain\\ad9d0c6a-6e2d-4b4b-a58c-4f20e9986b14\\owl_mascot_new_1780392609690.png';
const DEST = 'd:\\urbancode\\Urbancode-nextJs\\public\\images\\KidsImages\\owl_mascot.png';

const THRESHOLD = 30; // how close to white counts as background

async function run() {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const buf = Buffer.from(data);

  for (let i = 0; i < width * height; i++) {
    const off = i * channels;
    const r = buf[off];
    const g = buf[off + 1];
    const b = buf[off + 2];

    // If pixel is near-white → make transparent
    if (r > (255 - THRESHOLD) && g > (255 - THRESHOLD) && b > (255 - THRESHOLD)) {
      buf[off + 3] = 0;
    }
  }

  await sharp(buf, { raw: { width, height, channels } })
    .png()
    .resize(280, 340, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(DEST);

  console.log('✅ owl_mascot.png saved to public/images/KidsImages/');
}

run().catch(err => { console.error('❌ Error:', err); process.exit(1); });
