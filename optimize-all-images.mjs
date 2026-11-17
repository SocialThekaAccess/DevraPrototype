#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const DIRS = [
  './assets/projects',
  './assets',
  './public/assets/projects',
  './public/assets',
];

const EXTS = ['.png', '.jpg', '.jpeg', '.webp'];
let totalProcessed = 0;
let totalSaved = 0;

async function optimizeImage(inputPath) {
  try {
    const ext = extname(inputPath).toLowerCase();
    const { size: sizeBefore } = await stat(inputPath);
    
    // Skip files smaller than 100KB
    if (sizeBefore < 100 * 1024) {
      console.log(`  ⊘ ${basename(inputPath)} - already small (${(sizeBefore/1024).toFixed(0)}KB)`);
      return;
    }

    const dir = inputPath.substring(0, inputPath.lastIndexOf('/') || inputPath.lastIndexOf('\\'));
    const nameWithoutExt = basename(inputPath, ext);
    const tempPath = join(dir, `${nameWithoutExt}_optimized${ext}`);

    let quality = 85;
    
    // Different quality for different formats
    if (ext === '.webp') {
      await sharp(inputPath)
        .webp({ quality: 82, effort: 6 })
        .toFile(tempPath);
    } else if (ext === '.png') {
      await sharp(inputPath)
        .png({ quality: 85, compressionLevel: 9, effort: 10 })
        .toFile(tempPath);
    } else {
      await sharp(inputPath)
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(tempPath);
    }

    const { size: sizeAfter } = await stat(tempPath);
    const saved = sizeBefore - sizeAfter;
    const percentSaved = ((saved / sizeBefore) * 100).toFixed(1);

    if (sizeAfter < sizeBefore) {
      // Replace original with optimized
      const fs = await import('fs/promises');
      await fs.unlink(inputPath);
      await fs.rename(tempPath, inputPath);
      
      totalSaved += saved;
      totalProcessed++;
      console.log(`✓ ${basename(inputPath)} - ${(sizeBefore/1024).toFixed(0)}KB → ${(sizeAfter/1024).toFixed(0)}KB (saved ${percentSaved}%)`);
    } else {
      // Remove temp file
      const fs = await import('fs/promises');
      await fs.unlink(tempPath);
      console.log(`  ⊘ ${basename(inputPath)} - no improvement`);
    }
  } catch (e) {
    console.log(`  ✗ ${basename(inputPath)} - ERROR: ${e.message}`);
  }
}

async function processDir(dir) {
  try {
    const files = await readdir(dir);
    
    for (const file of files) {
      const ext = extname(file).toLowerCase();
      if (!EXTS.includes(ext)) continue;
      
      const filePath = join(dir, file);
      await optimizeImage(filePath);
    }
  } catch (e) {
    console.log(`Cannot access ${dir}: ${e.message}`);
  }
}

console.log('🚀 Starting image optimization...\n');

for (const dir of DIRS) {
  console.log(`\n📁 Processing ${dir}...`);
  await processDir(dir);
}

console.log(`\n✅ DONE! Optimized ${totalProcessed} images, saved ${(totalSaved/1024/1024).toFixed(2)}MB total`);
console.log(`💡 Tip: Run "npm run build" to see the final bundle size improvement\n`);
