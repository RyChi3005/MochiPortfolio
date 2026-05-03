/**
 * Generates raster assets from SVG sources:
 *   public/favicon.png       — 32×32  browser tab fallback
 *   public/apple-touch-icon.png — 192×192  iOS home-screen
 *   public/og-image.png      — 1200×630  OpenGraph link preview
 *
 * Run once (or after design changes):
 *   node scripts/generate-assets.mjs
 */
import sharp from "sharp";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = (f) => join(__dirname, "..", "public", f);

/* ─── Favicon SVG ─────────────────────────────────────────────────────────── */
// Geometric M letterform in a 32×32 dark-sage rounded badge.
const faviconSvg = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#2b4d31"/>
  <rect x="1.5" y="1.5" width="29" height="29" rx="5.5"
        fill="none" stroke="#4e7853" stroke-width="0.75" opacity="0.5"/>
  <path d="M7 22.5 L7 9.5 L16 19.5 L25 9.5 L25 22.5"
        stroke="#f4f0e6" stroke-width="2.7"
        stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="16" cy="6.5" r="2.5" fill="#d4b98a"/>
</svg>`;

/* ─── OG Image SVG (1200 × 630) ───────────────────────────────────────────── */
const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630"
     xmlns="http://www.w3.org/2000/svg">

  <!-- Warm beige canvas -->
  <rect width="1200" height="630" fill="#f4f0e6"/>

  <!-- Dark-sage left panel -->
  <rect width="408" height="630" fill="#2b4d31"/>

  <!-- Ghost M — depth layer -->
  <text x="204" y="530"
        font-family="Georgia,Times New Roman,serif"
        font-size="490" font-weight="700"
        text-anchor="middle"
        fill="#192e1c">M</text>

  <!-- Main M monogram -->
  <text x="204" y="438"
        font-family="Georgia,Times New Roman,serif"
        font-size="252" font-weight="600"
        text-anchor="middle"
        fill="#d4b98a" opacity="0.82">M</text>

  <!-- Botanical sprigs, bottom-left panel -->
  <g transform="translate(96,526)">
    <line x1="0" y1="68" x2="0" y2="0" stroke="#4e7853" stroke-width="1.5" opacity="0.55"/>
    <path d="M0 60 C-22 42,-30 8,-8 0 C5 8,15 30,0 60Z"  fill="#4e7853" opacity="0.6"/>
    <path d="M0 60 C22 42,30 8,8 0 C-5 8,-15 30,0 60Z"   fill="#3a6040" opacity="0.42"/>
    <path d="M-3 35 C-18 22,-22 4,-6 0 C2 5,8 18,-3 35Z" fill="#4e7853" opacity="0.45"/>
  </g>
  <g transform="translate(302,542)">
    <line x1="0" y1="50" x2="0" y2="0" stroke="#4e7853" stroke-width="1" opacity="0.4"/>
    <path d="M0 44 C-16 30,-20 6,-5 0 C3 6,10 22,0 44Z"  fill="#4e7853" opacity="0.45"/>
    <path d="M0 44 C16 30,20 6,5 0 C-3 6,-10 22,0 44Z"   fill="#3a6040" opacity="0.3"/>
  </g>

  <!-- Panel separator -->
  <line x1="408" y1="0" x2="408" y2="630" stroke="#3a6040" stroke-width="1.5"/>

  <!-- Top / bottom edge strips -->
  <rect width="1200" height="5" fill="#192e1c"/>
  <rect y="625" width="1200" height="5" fill="#192e1c"/>

  <!-- ── Right-panel content (centred at x=810) ── -->

  <!-- "MOCHI F&B" eyebrow -->
  <text x="810" y="205"
        font-family="Helvetica Neue,Arial,sans-serif"
        font-size="17" font-weight="600" letter-spacing="11"
        text-anchor="middle"
        fill="#4e7853">MOCHI F&amp;B</text>

  <!-- Name — line 1 (U+1EC5 = ễ → Nguyễn) -->
  <text x="810" y="296"
        font-family="Georgia,Times New Roman,serif"
        font-size="68" font-weight="600"
        text-anchor="middle"
        fill="#252520">Nguy&#x1EC5;n Th&#x1ECB;</text>

  <!-- Name — line 2 -->
  <text x="810" y="376"
        font-family="Georgia,Times New Roman,serif"
        font-size="68" font-weight="600"
        text-anchor="middle"
        fill="#252520">Hu&#x1EF3;nh Ch&#x0103;m</text>

  <!-- Champagne divider -->
  <rect x="771" y="400" width="78" height="2.5" rx="1" fill="#d4b98a"/>

  <!-- Role / city -->
  <text x="810" y="445"
        font-family="Georgia,Times New Roman,serif"
        font-size="25" font-style="italic"
        text-anchor="middle"
        fill="#3a6040">F&amp;B Service Crew &#xB7; TP.HCM</text>
</svg>`;

/* ─── Write SVG + generate PNGs ───────────────────────────────────────────── */

// favicon.svg is already in public/ (source of truth for browsers)
// We still write it here so the script is self-contained if re-run
writeFileSync(pub("favicon.svg"), faviconSvg);
console.log("✓  favicon.svg  written");

await sharp(Buffer.from(faviconSvg))
  .resize(32, 32)
  .png()
  .toFile(pub("favicon.png"));
console.log("✓  favicon.png  (32×32)");

await sharp(Buffer.from(faviconSvg))
  .resize(192, 192)
  .png()
  .toFile(pub("apple-touch-icon.png"));
console.log("✓  apple-touch-icon.png  (192×192)");

await sharp(Buffer.from(ogSvg))
  .resize(1200, 630)
  .png()
  .toFile(pub("og-image.png"));
console.log("✓  og-image.png  (1200×630)");

console.log("\nAll assets generated successfully.");
