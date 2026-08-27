# 欢迎光临 小云朵想养鲸鱼の博客

Astro static personal homepage for `YunLambert.github.io`, rebuilt around a more personal blog identity:

> 欢迎光临 小云朵想养鲸鱼の博客

## What is included

- Home hero with interest tags: coding, hiking, designing, photograph, vibecoding, music, travel, whales, sunset, starlight
- Five top-level theme pages: `/code/`, `/photograph/`, `/article/`, `/travel/`, `/music/`
- Day/night theme toggle:
  - Day: 落日橙
  - Night: 深海星空
- Lightweight native Canvas star/network field with pointer and reduced-motion support
- Notes index and two preserved historical articles
- Compatibility redirects for the old Jekyll `.html` URLs
- Responsive design for desktop and 390 px mobile, semantic HTML, keyboard focus, 44 px targets
- Local SVG icons, favicon, manifest, SEO/Open Graph metadata, RSS, sitemap, and 404 page
- GitHub Pages deployment workflow

## Local development

Requires Node.js 22.12 or newer (CI uses Node.js 22).

```bash
npm ci
npm run dev
```

Validation:

```bash
npm run check
npm run build
```

The static output is written to `dist/`.

## Content and privacy notes

- `legacy-posts/` is the untouched backup of the two original Jekyll posts.
- `src/content/notes/` preserves the original prose used by Astro; only image resource URLs were localized under `public/archive-assets/`.
- Three original Git diagrams were no longer available from their historical host, so honest local “asset unavailable” placeholders are shown instead of fabricated diagrams.
- One 28 MB archived QR GIF is represented by a local first-frame WebP to keep the static page lightweight; the untouched Markdown backup still records its original URL.
- The Git article carries a prominent warning because commands can be outdated, incorrect, or destructive.
- MiniPlayer and BotsWorkflow are described only at a high level and expose no repository or source links.
- Travel content stays abstract/coarse and does not expose precise locations, future itinerary, addresses, or private details.
- No analytics, external fonts, runtime CDN, React, Three.js, D3, jQuery, Chart, Mermaid, or MathJax are used.

## Deployment

`.github/workflows/deploy.yml` runs `npm ci`, Astro check/build, and deploys `dist/` through GitHub Pages. In the repository settings, Pages should use **GitHub Actions** as its source.
