#!/usr/bin/env node
/**
 * Image compression script — converts all PNG/JPEG in public/images and public/assets
 * to optimised WebP (quality 80) and also produces a compressed fallback PNG.
 * Originals are left untouched in originals/.
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const DIRS = [
  path.join(__dirname, '../public/images'),
  path.join(__dirname, '../public/assets'),
];
const WEBP_QUALITY = 80;
const PNG_QUALITY = { compressionLevel: 9, effort: 10 };
// Max dimension for any image — no image needs to be wider than 1920px on web
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;
// Hero / above-fold images stay full-res but are still converted to WebP
const HERO_IMAGES = new Set(['man-standing.png', 'slide-1.png', 'slide-2.png', 'slide-3.png', 'slide-4.png', 'slide-5.png', 'slide-6.png']);
const HERO_MAX = 1280; // slides/hero are displayed at ≤1280px wide

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const dir = path.dirname(filePath);
  const base = path.basename(filePath, ext);

  // Save original alongside compressed version
  const originalsDir = path.join(dir, 'originals');
  if (!fs.existsSync(originalsDir)) fs.mkdirSync(originalsDir, { recursive: true });
  const originalDest = path.join(originalsDir, path.basename(filePath));
  if (!fs.existsSync(originalDest)) fs.copyFileSync(filePath, originalDest);

  const isHero = HERO_IMAGES.has(path.basename(filePath));
  const maxW = isHero ? HERO_MAX : MAX_WIDTH;
  const maxH = isHero ? HERO_MAX : MAX_HEIGHT;

  const originalSize = fs.statSync(filePath).size;

  try {
    const img = sharp(filePath).resize(maxW, maxH, { fit: 'inside', withoutEnlargement: true });

    // 1. Write WebP version
    const webpPath = path.join(dir, base + '.webp');
    await img.clone().webp({ quality: WEBP_QUALITY }).toFile(webpPath);
    const webpSize = fs.statSync(webpPath).size;

    // 2. Overwrite the original with compressed version
    if (ext === '.png') {
      await img.clone().png(PNG_QUALITY).toFile(filePath + '.tmp');
    } else {
      await img.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(filePath + '.tmp');
    }
    fs.renameSync(filePath + '.tmp', filePath);
    const newSize = fs.statSync(filePath).size;

    const saved = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    console.log(
      `✓ ${path.basename(filePath).padEnd(40)} ${(originalSize/1024/1024).toFixed(1)}MB → webp: ${(webpSize/1024).toFixed(0)}KB  png: ${(newSize/1024).toFixed(0)}KB  (${saved}% saved)`
    );
  } catch (err) {
    console.error(`✗ ${path.basename(filePath)}: ${err.message}`);
  }
}

(async () => {
  for (const dir of DIRS) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).map(f => path.join(dir, f));
    for (const f of files) {
      if (fs.statSync(f).isFile()) await processFile(f);
    }
  }
  console.log('\nDone. WebP versions saved alongside originals. Update <img> tags to use .webp src.');
})();
