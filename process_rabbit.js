import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SRC_PATH = 'C:\\Users\\s.Abinash\\.gemini\\antigravity\\brain\\ad9d0c6a-6e2d-4b4b-a58c-4f20e9986b14\\media__1780392281073.jpg';
const DEST_PATH = 'public/images/KidsImages/rabbit_mascot.png';

async function processRabbit() {
  console.log('Processing rabbit image...');
  try {
    const image = sharp(SRC_PATH).toColorspace('srgb');
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

    const pixels = new Uint8ClampedArray(info.width * info.height * 4);

    const thresholdLow = 230;
    const thresholdHigh = 252;

    for (let i = 0; i < data.length; i += info.channels) {
      const pixelIndex = (i / info.channels) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = info.channels === 4 ? data[i + 3] : 255;

      // For white background, we look at the minimum component value.
      // If all components are close to 255, it's white.
      const minVal = Math.min(r, g, b);

      pixels[pixelIndex] = r;
      pixels[pixelIndex + 1] = g;
      pixels[pixelIndex + 2] = b;

      if (minVal > thresholdHigh) {
        // Fully transparent
        pixels[pixelIndex + 3] = 0;
      } else if (minVal > thresholdLow) {
        // Soft gradient transition for smooth hair details
        const factor = (thresholdHigh - minVal) / (thresholdHigh - thresholdLow);
        pixels[pixelIndex + 3] = Math.round(factor * a);
      } else {
        // Fully opaque
        pixels[pixelIndex + 3] = a;
      }
    }

    const destDir = path.dirname(DEST_PATH);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    await sharp(Buffer.from(pixels), {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4,
      },
    })
      .resize(300, 360, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(DEST_PATH);

    console.log(`✓ Rabbit mascot saved to: ${DEST_PATH}`);
  } catch (err) {
    console.error('✗ Error processing rabbit image:', err.message);
  }
}

processRabbit();
