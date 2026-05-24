# RepOS Landing Page

This repository contains the RepOS landing page, a static Next.js site for the
[`repos-cli`](https://github.com/trifactoria/repos-cli) Python package. The site
explains RepOS, links to the GitHub repository and PyPI package, and provides a
lightweight install-focused entry point for users evaluating the CLI.

RepOS itself lives in `repos-cli`; this repository only contains the public
landing page.

## Project Links

- **Deployed site**: <https://www.rep-os.dev>
- **CLI source**: <https://github.com/trifactoria/repos-cli>
- **PyPI package**: <https://pypi.org/project/repos-cli/>

## Screenshot

![RepOS terminal interface](screenshots/repos-cli-terminal.png)

RepOS running as a multi-panel database-backed command environment with panel switching, aliases, and workflow-oriented terminal organization.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production (outputs to /out)
pnpm build
```

This repo uses `pnpm`; keep dependency changes aligned with `pnpm-lock.yaml`.

## Build and Lint

```bash
# TypeScript/lint-style project check
pnpm lint

# Static export build
pnpm build
```

The previous `next lint` command is not compatible with the Next.js 15 version
resolved in `pnpm-lock.yaml`, so `pnpm lint` runs `tsc --noEmit` for the current
project check.

## Deployment

This site is configured for static export, making it easy to deploy anywhere:

- **GitHub Pages**: Push the `out` folder contents to the `gh-pages` branch
- **Netlify**: Build command `pnpm build`, publish directory `out`
- **Vercel**: Auto-detects Next.js
- **Any static host**: Upload contents of `out` folder

## Project Structure

```
repos-landing/
├── app/
│   ├── globals.css    # Tailwind + custom styles
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Main page component
├── public/
│   └── logo.png       # RepOS logo
├── next.config.ts     # Next.js config (static export)
├── package.json
├── pnpm-lock.yaml
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
