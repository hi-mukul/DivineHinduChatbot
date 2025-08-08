import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET = process.env.TARGET || 'https://www.divinehindu.in/';
const OUT_DIR = path.join(__dirname, '..', 'public', 'assets', 'scraped');
fs.mkdirSync(OUT_DIR, { recursive: true });

function toAbsolute(url, base) {
  try {
    return new URL(url, base).toString();
  } catch {
    return null;
  }
}

async function download(url, dest) {
  try {
    const res = await axios.get(url, { responseType: 'arraybuffer', timeout: 20000 });
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, res.data);
    console.log('Saved:', dest.replace(process.cwd(), ''));
  } catch (e) {
    console.warn('Failed:', url, e.message);
  }
}

(async function run() {
  console.log('Fetching:', TARGET);
  const { data: html } = await axios.get(TARGET, { timeout: 20000 });
  const $ = cheerio.load(html);

  // Collect image URLs
  const imgUrls = new Set();
  $('img').each((_, el) => {
    const src = $(el).attr('src') || $(el).attr('data-src');
    const srcset = $(el).attr('srcset');
    if (src) imgUrls.add(toAbsolute(src, TARGET));
    if (srcset) {
      srcset.split(',').forEach(part => {
        const u = part.trim().split(' ')[0];
        const abs = toAbsolute(u, TARGET);
        if (abs) imgUrls.add(abs);
      });
    }
  });

  // Also scan CSS for background images
  const links = $('link[rel="stylesheet"]')
    .map((_, el) => toAbsolute($(el).attr('href'), TARGET))
    .get()
    .filter(Boolean);

  const fontUrls = new Set();
  for (const cssUrl of links) {
    try {
      const { data: css } = await axios.get(cssUrl, { timeout: 20000 });
      // Extract URLs from CSS url(...) tokens
      const urlMatches = [...css.matchAll(/url\(([^)]+)\)/g)].map(m => m[1].replace(/["']/g, ''));
      for (const u of urlMatches) {
        const abs = toAbsolute(u, cssUrl);
        if (!abs) continue;
        if (abs.endsWith('.woff') || abs.endsWith('.woff2') || abs.includes('fonts')) {
          fontUrls.add(abs);
        } else if (abs.match(/\.(png|jpe?g|webp|svg)$/i)) {
          imgUrls.add(abs);
        }
      }
    } catch (e) {
      console.warn('CSS fetch failed:', cssUrl, e.message);
    }
  }

  // Download images
  for (const url of imgUrls) {
    if (!url) continue;
    const filename = url.split('?')[0].split('/').pop();
    if (!filename) continue;
    const dest = path.join(OUT_DIR, filename);
    await download(url, dest);
  }

  // Download fonts (if license permits)
  const fontsDir = path.join(__dirname, '..', 'public', 'fonts', 'external');
  for (const url of fontUrls) {
    if (!url) continue;
    const filename = url.split('?')[0].split('/').pop();
    if (!filename) continue;
    const dest = path.join(fontsDir, filename);
    await download(url, dest);
  }

  console.log('Done. Review assets in /public/assets/scraped and /public/fonts/external');
})();