import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const DIRS = [
  './assets/projects',
  './assets',
  './public/assets/projects',
  './public/assets',
];

const EXTS = ['.png', '.jpg', '.jpeg'];
let totalSaved = 0;
let converted = 0;

async function processDir(dir) {
  let files;
  try { files = await readdir(dir); } catch { return; }

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!EXTS.includes(ext)) continue;

    const inputPath = join(dir, file);
    const nameWithoutExt = basename(file, ext);
    const outputPath = join(dir, nameWithoutExt + '.webp');

    try {
      const { size: sizeBefore } = await stat(inputPath);

      // Skip if already small enough
      if (sizeBefore < 200 * 1024) continue; // skip files under 200KB

      await sharp(inputPath)
        .webp({ quality: 82, effort: 4 })
        .toFile(outputPath);

      const { size: sizeAfter } = await stat(outputPath);
      const saved = sizeBefore - sizeAfter;

      if (sizeAfter < sizeBefore) {
        totalSaved += saved;
        converted++;
        console.log(`✓ ${file} → ${nameWithoutExt}.webp  ${(sizeBefore/1024).toFixed(0)}KB → ${(sizeAfter/1024).toFixed(0)}KB (saved ${(saved/1024).toFixed(0)}KB)`);
      } else {
        // WebP bigger — delete it, keep original
        await unlink(outputPath);
        console.log(`  skip ${file} (WebP was larger)`);
      }
    } catch (e) {
      console.log(`  ERR ${file}: ${e.message}`);
    }
  }
}

for (const dir of DIRS) {
  await processDir(dir);
}

console.log(`\n✅ Done. Converted ${converted} files, saved ${(totalSaved/1024/1024).toFixed(1)}MB total`);
