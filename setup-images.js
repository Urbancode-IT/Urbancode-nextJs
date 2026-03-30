#!/usr/bin/env node

/**
 * Kids Loader - Image Setup & Processing
 * Removes backgrounds from mascot images and prepares them for animation
 * 
 * Usage:
 * 1. npm install sharp
 * 2. Save your mascot images to project root as:
 *    - rocket-img.png (or .jpg)
 *    - css-img.png
 *    - sql-img.png
 *    - python-img.png
 * 3. Run: node setup-images.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMAGE_CONFIG = {
  python: { input: 'python-img', output: 'public/images/mascots/python_mascot.png', width: 120, height: 140 },
  css: { input: 'css-img', output: 'public/images/mascots/css_mascot.png', width: 120, height: 140 },
  sql: { input: 'sql-img', output: 'public/images/mascots/sql_mascot.png', width: 120, height: 140 },
  rocket: { input: 'rocket-img', output: 'public/images/mascots/rocket_mascot.png', width: 80, height: 80 },
};

const SUPPORTED_FORMATS = ['.png', '.jpg', '.jpeg', '.webp'];

// Find image file
function findImageFile(baseName) {
  for (const ext of SUPPORTED_FORMATS) {
    const path_ = `${baseName}${ext}`;
    if (fs.existsSync(path_)) {
      return path_;
    }
  }
  return null;
}

// Remove background: make black/near-black pixels transparent
async function removeBackground(inputPath, outputPath, width, height) {
  try {
    const threshold = 40;
    
    // Read image -> convert to RGBA -> extract pixels -> modify -> save
    const image = sharp(inputPath)
      .toColorspace('srgb'); // Ensure proper color space
    
    const { data, info } = await image
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    // Create RGBA buffer
    const pixels = new Uint8ClampedArray(info.width * info.height * 4);
    
    for (let i = 0; i < data.length; i += info.channels) {
      const pixelIndex = (i / info.channels) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = info.channels === 4 ? data[i + 3] : 255;
      
      // If very dark (nearly black), make transparent
      if (r < threshold && g < threshold && b < threshold) {
        pixels[pixelIndex] = r;
        pixels[pixelIndex + 1] = g;
        pixels[pixelIndex + 2] = b;
        pixels[pixelIndex + 3] = 0; // Transparent
      } else {
        pixels[pixelIndex] = r;
        pixels[pixelIndex + 1] = g;
        pixels[pixelIndex + 2] = b;
        pixels[pixelIndex + 3] = a;
      }
    }
    
    // Resize and save
    await sharp(Buffer.from(pixels), {
      raw: { width: info.width, height: info.height, channels: 4 }
    })
      .resize(width, height, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(outputPath);
    
    return true;
  } catch (err) {
    console.error(`✗ Error processing ${inputPath}:`, err.message);
    return false;
  }
}

// Main setup
async function setupImages() {
  console.log('🎨 Kids Loader - Image Setup\n');
  console.log('=' .repeat(60));
  
  // Create output directory
  const outputDir = 'public/images/mascots';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`✓ Created directory: ${outputDir}\n`);
  }
  
  let processedCount = 0;
  let skippedCount = 0;
  
  for (const [name, config] of Object.entries(IMAGE_CONFIG)) {
    const inputFile = findImageFile(config.input);
    
    if (!inputFile) {
      console.log(`⊘ Skipped: ${name} (image file not found)`);
      console.log(`  Expected one of: ${config.input}{${SUPPORTED_FORMATS.join(',')}}\n`);
      skippedCount++;
      continue;
    }
    
    console.log(`Processing: ${name}`);
    console.log(`  Input: ${inputFile}`);
    console.log(`  Output: ${config.output}`);
    console.log(`  Size: ${config.width}×${config.height}px`);
    
    const success = await removeBackground(inputFile, config.output, config.width, config.height);
    
    if (success) {
      console.log(`✓ Saved: ${config.output}\n`);
      processedCount++;
    } else {
      skippedCount++;
      console.log();
    }
  }
  
  console.log('=' .repeat(60));
  console.log(`\nResults: ${processedCount} processed, ${skippedCount} skipped`);
  
  if (processedCount > 0) {
    console.log('\n✓ Images ready! Run: npm run build');
  } else {
    console.log('\n⚠️  No images processed. Please save image files first.');
  }
}

setupImages().catch(err => {
  console.error('Failed:', err);
  process.exit(1);
});
