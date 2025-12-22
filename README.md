# RepOS Landing Page

A single-page Next.js site for RepOS — the multi-panel, database-backed command environment.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (outputs to /out)
npm run build
```

## Deployment

This site is configured for static export, making it easy to deploy anywhere:

- **GitHub Pages**: Push the `out` folder contents to `gh-pages` branch
- **Netlify**: Build command `npm run build`, publish directory `out`
- **Vercel**: Auto-detects Next.js
- **Any static host**: Upload contents of `out` folder

## Project Structure

```
repos-site/
├── app/
│   ├── globals.css    # Tailwind + custom styles
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Main page component
├── public/
│   └── logo.png       # RepOS logo
├── next.config.ts     # Next.js config (static export)
├── package.json
└── tsconfig.json
```

## Colors

From the RepOS logo:

| Color   | Hex       | Usage                    |
|---------|-----------|--------------------------|
| Dark    | `#2D3239` | Background               |
| Grey    | `#3D4451` | Buttons, borders         |
| Magenta | `#D63384` | Accent, "OS" text        |
| Cyan    | `#5DD3D3` | Accent, highlights       |
| Yellow  | `#F5C842` | Accent, prompt character |
| Text    | `#E8E8E8` | Primary text             |
| Muted   | `#8B9199` | Secondary text           |

## Fonts

- **JetBrains Mono** — Terminal aesthetic for all text
- Loaded via Google Fonts CDN
