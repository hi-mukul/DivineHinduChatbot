# DivineHindu Homepage Clone (Next.js + TS + Tailwind)

This project scaffolds a pixel-perfect clone of the DivineHindu.in homepage using:
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (no inline styles; no external CSS beyond Tailwind layers)
- Accessibility + SEO best practices

## Getting Started

1. Install dependencies:
   - pnpm i
   - or npm i / yarn

2. Run dev:
   - pnpm dev
   - open http://localhost:3000

3. Scrape homepage assets (optional; review license before using):
   - TARGET="https://www.divinehindu.in/" pnpm scrape
   - Assets are saved under /public/assets/scraped and /public/fonts/external
   - Move/rename into organized folders like /public/assets/hero, /assets/products, etc.

4. Fonts
   - If the live site uses Google Fonts (e.g., Poppins), self-host:
     - FAMILY="Poppins:wght@400;600;700" pnpm download-font
     - Update app/layout.tsx to use next/font/local or continue using next/font/google (self-hosted by Next at build time).
   - Ensure your font license allows self-hosting.

5. Content & Data
   - Replace dummy data under /data to match the live homepage.
   - Put images in /public/assets/* and update paths in data files.

6. Build
   - pnpm build && pnpm start

## Notes
- Image optimization uses Next/Image with local assets.
- Carousels are implemented with scroll-snap + JS (no external CSS).
- Accessibility: landmarks, labels, focus styles, color contrast.
- SEO: metadata, OG/Twitter, JSON-LD (extend as needed).

## Legal
Clone only if you have the rights to do so or for internal evaluation. Verify licenses for images, fonts, and brand assets before redistribution.