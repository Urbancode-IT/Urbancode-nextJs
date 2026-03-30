#!/usr/bin/env node

/**
 * Complete mascot image processor
 * - Converts images to RGBA PNG
 * - Removes black backgrounds
 * - Resizes to specified dimensions
 * - Saves to public/images/mascots/
 * 
 * Usage: node process_mascots_complete.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const MASCOTS = [
  {
    sourcePattern: '*python*mascot*',
    outputName: 'python_mascot.png',
    width: 120,
    height: 140,
    description: 'Python mascot (blue/yellow character)'
  },
  {
    sourcePattern: '*css*mascot*',
    outputName: 'css_mascot.png',
    width: 120,
    height: 140,
    description: 'CSS mascot (blue rocket)'
  },
  {
    sourcePattern: '*sql*mascot*',
    outputName: 'sql_mascot.png',
    width: 120,
    height: 140,
    description: 'SQL mascot (red character)'
  },
  {
    sourcePattern: '*rocket*mascot*',
    outputName: 'rocket_mascot.png',
    width: 80,
    height: 80,
    description: 'Rocket mascot (red/orange)'
  }
];

const OUTPUT_DIR = 'public/images/mascots';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Remove black background and make transparent
 * Uses color detection to identify black pixels
 */
async function removeBlackBackground(inputPath, outputPath, width, height) {
  try {
    // Read image and convert to RGBA
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`  Processing: ${path.basename(inputPath)}`);
    console.log(`  Original size: ${metadata.width}×${metadata.height}`);

    // Get raw pixel data
    const buffer = await image
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { data, info } = buffer;
    const pixelArray = new Uint8ClampedArray(data);

    // Process pixels - convert black to transparent
    const threshold = 40; // Black threshold (0-40 is very dark)
    
    for (let i = 0; i < pixelArray.length; i += info.channels) {
      const r = pixelArray[i];
      const g = pixelArray[i + 1];
      const b = pixelArray[i + 2];
      
      // Check if pixel is very dark (nearly black)
      if (r < threshold && g < threshold && b < threshold) {
        // Make transparent by setting alpha to 0
        if (info.channels === 4) {
          pixelArray[i + 3] = 0;
        }
      } else {
        // Ensure full opacity for non-black pixels
        if (info.channels === 4) {
          pixelArray[i + 3] = 255;
        }
      }
    }

    // Create RGBA image from processed pixel data
    await sharp(pixelArray, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
      .resize(width, height, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    console.log(`  ✓ Saved: ${outputPath} (${stats.size} bytes)`);
    console.log(`  → Resized to: ${width}×${height}`);
    return true;

  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
    return false;
  }
}

/**
 * Find source image file by pattern
 */
function findSourceImage(pattern, extensions = ['.png', '.jpg', '.jpeg', '.gif']) {
  const srcDir = 'public/images';
  
  if (!fs.existsSync(srcDir)) {
    return null;
  }

  const files = fs.readdirSync(srcDir);
  const regex = new RegExp(pattern.replace(/\*/g, '.*'), 'i');

  for (const file of files) {
    if (regex.test(file) && extensions.some(ext => file.toLowerCase().endsWith(ext))) {
      return path.join(srcDir, file);
    }
  }
  
  return null;
}

/**
 * Main processing function
 */
async function processAllMascots() {
  console.log('\n' + '='.repeat(70));
  console.log('KIDS LOADER - MASCOT IMAGE PROCESSOR');
  console.log('='.repeat(70) + '\n');

  let processed = 0;
  let failed = 0;

  for (const mascot of MASCOTS) {
    console.log(`\n📦 Processing: ${mascot.description}`);
    console.log(`   Output: ${mascot.outputName} (${mascot.width}×${mascot.height})`);

    const sourceFile = findSourceImage(mascot.sourcePattern);

    if (!sourceFile) {
      console.log(`   ⚠️  Source not found. Looking for file matching: ${mascot.sourcePattern}\n`);
      failed++;
      continue;
    }

    const outputPath = path.join(OUTPUT_DIR, mascot.outputName);
    const success = await removeBlackBackground(
      sourceFile,
      outputPath,
      mascot.width,
      mascot.height
    );

    if (success) {
      processed++;
    } else {
      failed++;
    }

    console.log();
  }

  // Summary
  console.log('='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`✓ Successfully processed: ${processed}/${MASCOTS.length}`);
  
  if (failed > 0) {
    console.log(`✗ Failed or skipped: ${failed}/${MASCOTS.length}`);
    console.log('\nTo fix:');
    console.log('1. Place source images in public/images/');
    console.log('2. Name them with mascot type and "mascot" (e.g., "python_mascot.jpg")');
    console.log('3. Supported formats: PNG, JPG, JPEG, GIF');
    console.log('4. Run again: node process_mascots_complete.js');
  } else {
    console.log('\n✓ All mascot images processed successfully!');
    console.log(`✓ Output directory: ${OUTPUT_DIR}`);
    console.log('\nNext step:');
    console.log('  npm run build   # Verify build');
    console.log('  npm run dev     # Test animations');
  }

  console.log('\n' + '='.repeat(70) + '\n');
}

// Run processing
processAllMascots().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
