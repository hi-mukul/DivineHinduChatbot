import fs from 'fs';
import path from 'path';
import axios from 'axios';

// Usage: FAMILY="Poppins:wght@400;600" npm run download-font
const FAMILY = process.env.FAMILY || 'Poppins:wght@400;600;700';
const SUBSETS = 'latin';
const API = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(FAMILY)}&display=swap&subset=${SUBSETS}`;

const OUT_DIR = path.join(process.cwd(), 'public', 'fonts', 'poppins');
fs.mkdirSync(OUT_DIR, { recursive: true });

(async function () {
  const { data: css } = await axios.get(API, { responseType: 'text' });
  const fontUrls = [...css.matchAll(/url\((https:[^)]+\.woff2)\)/g)].map((m) => m[1]);

  const localCss = [];
  for (const url of fontUrls) {
    const filename = url.split('/').pop().split('?')[0];
    const dest = path.join(OUT_DIR, filename);
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    fs.writeFileSync(dest, res.data);
    console.log('Saved', dest);
    // Construct a local @font-face entry
    localCss.push(css
      .split('}')
      .find((b) => b.includes(url))
      ?.replace(url, `/fonts/poppins/${filename}`)
      ?.concat('}')
    );
  }

  fs.writeFileSync(path.join(OUT_DIR, 'local.css'), localCss.filter(Boolean).join('\n\n'));
  console.log('Wrote local font CSS to', path.join(OUT_DIR, 'local.css'));
})();