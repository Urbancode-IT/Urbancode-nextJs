import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SRC_IMAGES = {
  python: 'C:\\Users\\s.Abinash\\.gemini\\antigravity\\brain\\ad9d0c6a-6e2d-4b4b-a58c-4f20e9986b14\\python_mascot_raw_1780388933270.png',
  css: 'C:\\Users\\s.Abinash\\.gemini\\antigravity\\brain\\ad9d0c6a-6e2d-4b4b-a58c-4f20e9986b14\\css_mascot_raw_1780388948774.png',
  sql: 'C:\\Users\\s.Abinash\\.gemini\\antigravity\\brain\\ad9d0c6a-6e2d-4b4b-a58c-4f20e9986b14\\sql_mascot_raw_1780388964685.png',
  rocket: 'C:\\Users\\s.Abinash\\.gemini\\antigravity\\brain\\ad9d0c6a-6e2d-4b4b-a58c-4f20e9986b14\\rocket_mascot_raw_1780388980174.png',
};

const DEST_DIR = 'public/images/mascots';

const CONFIG = {
  python: { width: 240, height: 280, output: 'python_mascot.png' },
  css: { width: 240, height: 280, output: 'css_mascot.png' },
  sql: { width: 240, height: 280, output: 'sql_mascot.png' },
  rocket: { width: 160, height: 160, output: 'rocket_mascot.png' },
};

async function processImage(key, srcPath, destPath, config) {
  console.log(`Processing ${key}...`);
  try {
    // 1. Read the image and extract srgb pixel data
    const image = sharp(srcPath).toColorspace('srgb');
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

    // 2. Create target RGBA pixels buffer
    const pixels = new Uint8ClampedArray(info.width * info.height * 4);

    const thresholdLow = 15;
    const thresholdHigh = 50;

    for (let i = 0; i < data.length; i += info.channels) {
      const pixelIndex = (i / info.channels) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = info.channels === 4 ? data[i + 3] : 255;

      const maxVal = Math.max(r, g, b);

      pixels[pixelIndex] = r;
      pixels[pixelIndex + 1] = g;
      pixels[pixelIndex + 2] = b;

      if (maxVal < thresholdLow) {
        // Fully transparent
        pixels[pixelIndex + 3] = 0;
      } else if (maxVal < thresholdHigh) {
        // Soft anti-aliasing gradient for smooth edges
        const factor = (maxVal - thresholdLow) / (thresholdHigh - thresholdLow);
        pixels[pixelIndex + 3] = Math.round(factor * a);
      } else {
        // Fully opaque/original alpha
        pixels[pixelIndex + 3] = a;
      }
    }

    // 3. Create PNG from processed pixels, resize and save
    await sharp(Buffer.from(pixels), {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4,
      },
    })
      .resize(config.width, config.height, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(destPath);

    console.log(`✓ Saved transparent processed image: ${destPath}`);
    return true;
  } catch (err) {
    console.error(`✗ Error processing ${key}:`, err.message);
    return false;
  }
}

async function run() {
  if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true });
    console.log(`✓ Created output directory: ${DEST_DIR}`);
  }

  for (const [key, srcPath] of Object.entries(SRC_IMAGES)) {
    const config = CONFIG[key];
    const destPath = path.join(DEST_DIR, config.output);
    await processImage(key, srcPath, destPath, config);
  }
  console.log('--- Processing finished! ---');
}

run().catch(err => {
  console.error('Failed to run image processing:', err);
});
