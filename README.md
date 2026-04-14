<p align="center">
  <img src="https://raw.githubusercontent.com/Worth-Doing/brand-assets/main/png/variants/04-horizontal.png" alt="WorthDoing.ai" width="600" />
</p>

<h1 align="center">WorthDoing AI — Official Website</h1>

<p align="center">
  <strong>The landing page and project showcase for WorthDoing AI.</strong>
  <br />
  <em>AI That Decides What Matters — built with Next.js 15, TypeScript, and Tailwind CSS 4.</em>
</p>

---

<p align="center">
  <a href="https://worthdoing.ai"><img src="https://img.shields.io/badge/Built_by-WorthDoing.ai-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPjxwb2x5Z29uIHBvaW50cz0iMTIgMiAxNS4wOSA4LjI2IDIyIDkuMjcgMTcgMTQuMTQgMTguMTggMjEuMDIgMTIgMTcuNzcgNS44MiAyMS4wMiA3IDE0LjE0IDIgOS4yNyA4LjkxIDguMjYgMTIgMiIvPjwvc3ZnPg==" alt="Built by WorthDoing.ai" /></a>
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 15" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/TailwindCSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS 4" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/pages-2+-6C47FF?style=flat-square" alt="Pages 2+" />
  <img src="https://img.shields.io/badge/dark_mode-supported-blue?style=flat-square" alt="Dark Mode" />
  <img src="https://img.shields.io/badge/responsive-mobile_first-brightgreen?style=flat-square" alt="Responsive" />
  <img src="https://img.shields.io/badge/UI_dependencies-zero-brightgreen?style=flat-square" alt="Zero UI Dependencies" />
  <img src="https://img.shields.io/badge/glassmorphism-navbar-blueviolet?style=flat-square" alt="Glassmorphism" />
  <img src="https://img.shields.io/badge/animated-CSS_keyframes-orange?style=flat-square" alt="Animated" />
  <img src="https://img.shields.io/badge/status-active_development-brightgreen?style=flat-square" alt="Status Active Development" />
</p>

---

## Overview

**WorthDoing AI — Official Website** is the landing page and public-facing project showcase for the [WorthDoing AI](https://github.com/WorthDoingAI) organization. It serves as the front door to the entire ecosystem: introducing the mission, highlighting the open-source tooling, and guiding developers to the right repository for their use case.

- **Official landing page** for the WorthDoing AI organization and brand
- **Project showcase** with filterable cards for every open-source repository
- **Modern, clean, responsive design** that works seamlessly across desktop, tablet, and mobile
- **Light / dark theme toggle** with system preference detection, persisted in `localStorage`
- **Zero external UI component libraries** — every component is hand-built with pure Tailwind CSS utility classes
- **Animated hero section** with neural network dot-and-line decorations and a radial gradient glow backdrop
- **Glassmorphism navigation** with sticky positioning and backdrop blur
- **Brand gradient text** (blue → cyan → green) used consistently across headings and interactive elements

---

## Screenshots

### Home — Landing Page

<p align="center">
  <em>Screenshots coming soon</em>
</p>

### Projects — Repository Showcase

<p align="center">
  <em>Screenshots coming soon</em>
</p>

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Landing page with hero section, feature grid, stats bar, and call-to-action |
| **Projects** | `/projects` | Project showcase with category filter tabs and detailed cards for every repository |

---

## Features

### Landing Page (`/`)

#### Hero Section
- Large gradient heading ("AI That Decides / What Matters") using the brand `blue → cyan → green` gradient
- Descriptive subtitle explaining the open-source mission
- Two CTA buttons: "Get Started" (gradient fill, links to GitHub) and "View Projects" (outline, links to `/projects`)
- **Animated neural network decoration** — 12 floating dots and 6 pulsing lines with staggered CSS animation delays and three independent float keyframe variations
- **Radial gradient glow** backdrop centered behind the heading with `blur-3xl` and cyan/blue radial gradient

#### Features Grid
- 6 feature cards displayed in a responsive 3-column grid (`1 → 2 → 3` columns across breakpoints)
- Each card contains a colored icon, title, and description:
  - **Capability-First** (blue icon) — 31 capabilities across 8 providers
  - **Local-First** (cyan icon) — custom C++ inference engine
  - **Agent System** (emerald icon) — WD Agent local AI OS
  - **350+ Models** (violet icon) — OpenRouter LLM integration
  - **Academic Research** (amber icon) — 250M+ scholarly papers via OpenAlex
  - **Financial Data** (rose icon) — real-time quotes via FMP and EODHD
- Subtle hover glow effect using a gradient overlay that fades in on hover
- Lift animation (`hover:-translate-y-0.5`) with shadow transition

#### Stats Section
- 5 large animated numbers displayed in a responsive grid (2 columns on mobile, 5 on desktop)
- **31+ Capabilities** | **350+ Models** | **8 Providers** | **6 Repositories** | **188+ Tests**
- Brand gradient text on the numbers with staggered `count-up` entrance animation
- Gray background section with top and bottom borders for visual separation

#### CTA Section
- "Ready to build with WorthDoing AI?" heading with supporting copy
- Two install command cards side by side:
  - `npm i worthdoing-capabilities` (Capabilities)
  - `npm i wd-agent` (Agent)
- Primary gradient "View on GitHub" button linking to the organization page

---

### Projects Page (`/projects`)

#### Hero Header
- Full-width section with a faint radial gradient backdrop (blue → cyan → green)
- "Our Projects" heading using the brand gradient via `bg-clip-text text-transparent`
- Subtitle: "Open-source tools powering the next generation of AI applications."

#### Category Filter Tabs
- Pill-shaped toggle buttons: **All** | **AI Tools** | **Capabilities** | **Infrastructure**
- Active tab uses inverted colors (dark bg on light mode, white bg on dark mode)
- Client-side filtering with `useState` — instant re-render, no page navigation

#### Project Cards (6 total)
Each card includes:
- **Emoji identifier** and **project name** in a bold header row
- **Status badge** with colored dot indicator:
  - Blue dot = Active Development
  - Green dot = Published on npm / Production Ready
  - Gray dot = Complete
- **Description** paragraph
- **Highlights list** with green checkmarks (e.g., "31 capabilities", "188 tests", "Zero deps")
- **Tech badges** — color-coded rounded pills per technology:
  - TypeScript (blue), Python (yellow), C++ (purple), Node.js (green), Next.js (black/white), React (cyan), TailwindCSS (teal), Metal (gray)
- **Footer links** — GitHub button (dark fill) and npm button (outline, shown only if package is published)
- **Hover effects** — `hover:-translate-y-1` lift with `hover:shadow-lg` shadow

The six showcased projects:
1. **WD Agent** — local AI agent OS (AI Tools)
2. **WorthDoing Capabilities (Python)** — capability package (Capabilities)
3. **WorthDoing Capabilities (TypeScript)** — TypeScript SDK (Capabilities)
4. **AI Playground** — 350+ model playground (AI Tools)
5. **Local LLM Inference** — custom C++ engine (Infrastructure)
6. **Brand Assets** — logos and branding (Infrastructure)

---

### Theme System

| Feature | Implementation |
|---------|----------------|
| Light mode (default) | White backgrounds, dark text, light borders |
| Dark mode | Near-black backgrounds (`gray-950`), light text, dark borders |
| System preference | `prefers-color-scheme` media query listener when set to "system" |
| Toggle mechanism | Sun/moon icon button in the navbar |
| Persistence | `localStorage` key: `worthdoing-theme` |
| Hydration flash prevention | Renders neutral on server; defers theme application to `useEffect` on mount |
| CSS strategy | `dark` class on `<html>` element with Tailwind `dark:` variant |

The theme system is implemented as a React Context provider (`ThemeProvider`) that wraps the entire application. The `useTheme()` hook exposes `theme`, `resolvedTheme`, and `setTheme` to any component.

---

### Navigation

#### Navbar
- **Sticky positioning** — remains visible at the top of the viewport on scroll
- **Glassmorphism effect** — `bg-white/70 dark:bg-gray-950/70` with `backdrop-blur-xl`
- Gradient "WorthDoing AI" logo text linking to home
- **Desktop links**: Home, Projects, Capabilities, Agent — with hover background transition
- **Theme toggle button**: sun icon (in dark mode) / moon icon (in light mode)
- **Mobile hamburger menu**: collapsible menu panel with close (X) button, hidden on `md+` screens

#### Footer
- **Three-column layout** (stacked on mobile, side-by-side on desktop):
  - **Branding column** — gradient logo text + mission description
  - **Navigation column** — Home, Projects, Capabilities, Agent links
  - **Connect column** — GitHub, npm Packages, admin@worthdoing.ai
- **Bottom bar** with copyright notice and italic tagline separated by a border

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **UI** | Custom components (zero external libraries) |
| **Fonts** | Inter (Google Fonts via `next/font`) |
| **Icons** | Inline SVG components (no icon library) |
| **Theme** | `localStorage` + CSS class toggle via React Context |
| **Deployment** | Vercel-ready (static export compatible) |
| **Linting** | ESLint 9 with `eslint-config-next` |
| **Build Tool** | Next.js built-in (Turbopack in dev) |

---

## Project Structure

```
worthdoing-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout — Inter font, ThemeProvider, Navbar, Footer
│   │   ├── page.tsx              # Landing page — hero, features grid, stats, CTA
│   │   ├── globals.css           # Global styles, CSS animations, brand gradient utility
│   │   └── projects/
│   │       └── page.tsx          # Projects showcase — filter tabs, project cards
│   └── components/
│       ├── navbar.tsx            # Sticky glassmorphism navigation bar
│       ├── footer.tsx            # Three-column footer with branding
│       └── theme-provider.tsx    # Dark mode context provider + useTheme hook
├── public/
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/Worth-Doing/worthdoing-website.git
cd worthdoing-website

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Open in your browser
# http://localhost:3000
```

The development server supports hot module replacement — changes to any file will be reflected instantly in the browser.

### Production Build

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

### Linting

```bash
# Run ESLint across the project
npm run lint
```

---

## Design System

### Brand Colors

| Color | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| **Blue** | `#3b82f6` | `--color-brand-blue` | Primary actions, links, CTA buttons |
| **Cyan** | `#06b6d4` | `--color-brand-cyan` | Accents, processing states, neural decorations |
| **Green** | `#10b981` | `--color-brand-green` | Success states, highlights, checkmarks |
| **Gradient** | Blue → Cyan → Green | `.text-brand-gradient` | Brand gradient for headings, logo text, stat numbers |

### Typography

| Property | Value |
|----------|-------|
| Font Family | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |
| Loading | `next/font/google` with `latin` subset (self-hosted, zero CLS) |
| Heading Weight | `extrabold` (800) |
| Body Weight | `normal` (400) / `medium` (500) |
| Antialiasing | `antialiased` on body |

### CSS Animations

| Animation | Duration | Usage |
|-----------|----------|-------|
| `gradient-shift` | 12s ease infinite | Hero section background gradient movement |
| `float-1` | 8s ease-in-out infinite | Neural network dots — float pattern 1 |
| `float-2` | 10s ease-in-out infinite | Neural network dots — float pattern 2 |
| `float-3` | 12s ease-in-out infinite | Neural network dots — float pattern 3 |
| `pulse-line` | 4s ease-in-out infinite | Neural network connector lines — opacity pulse |
| `count-up` | 0.6s ease-out | Stats section — entrance animation |

### Selection Color

Text selection across the entire site uses a semi-transparent cyan highlight (`rgba(6, 182, 212, 0.25)`) for brand consistency.

---

## Deployment

### Vercel (Recommended)

The project is fully compatible with [Vercel](https://vercel.com) — zero configuration required:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments on every push.

### Other Platforms

This project also works with:

| Platform | Notes |
|----------|-------|
| **Netlify** | Works out of the box with Next.js adapter |
| **Cloudflare Pages** | Use `@cloudflare/next-on-pages` |
| **Docker** | Standard Node.js Dockerfile with `npm run build && npm start` |
| **Static Export** | Add `output: 'export'` to `next.config.ts` for any static host |
| **AWS Amplify** | Native Next.js support |

---

## WorthDoing AI Ecosystem

This website is part of a broader open-source ecosystem. Every project is designed to work independently or together:

| Project | Description | Links |
|---------|-------------|-------|
| **worthdoing-website** | This website — landing page and project showcase | [GitHub](https://github.com/Worth-Doing/worthdoing-website) |
| **wd-agent** | Local AI agent operating system for the terminal | [GitHub](https://github.com/Worth-Doing/wd-agent) · [npm](https://www.npmjs.com/package/wd-agent) |
| **worthdoing-capabilities** | Production-grade Python capability package (31 capabilities) | [GitHub](https://github.com/Worth-Doing/worthdoing-capabilities) |
| **worthdoing-capabilities-js** | TypeScript SDK — same capabilities on npm | [GitHub](https://github.com/Worth-Doing/worthdoing-capabilities-js) · [npm](https://www.npmjs.com/package/worthdoing-capabilities) |
| **ai-playground** | Unified AI playground — 350+ models, Compare Lab, Image Lab | [GitHub](https://github.com/Worth-Doing/ai-playground) |
| **local-llm-inference** | Custom C++ inference engine for Apple Silicon | [GitHub](https://github.com/Worth-Doing/local-llm-inference) |
| **brand-assets** | Official logos and brand assets — 12 variants in SVG + PNG | [GitHub](https://github.com/Worth-Doing/brand-assets) |

---

## Contributing

<p align="center">
  <a href="https://github.com/Worth-Doing/worthdoing-website/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" alt="PRs Welcome" /></a>
  <a href="https://github.com/Worth-Doing/worthdoing-website/issues"><img src="https://img.shields.io/badge/Issues-welcome-blue?style=flat-square" alt="Issues Welcome" /></a>
</p>

We welcome contributions of all kinds — bug fixes, new pages, design improvements, accessibility enhancements, and documentation.

### How to Contribute

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/worthdoing-website.git
   cd worthdoing-website
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Create** a feature branch:
   ```bash
   git checkout -b feat/my-feature
   ```
5. **Make** your changes and verify locally:
   ```bash
   npm run dev
   ```
6. **Lint** your code:
   ```bash
   npm run lint
   ```
7. **Build** to verify no errors:
   ```bash
   npm run build
   ```
8. **Submit** a pull request with a clear description of your changes

### Development Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Dev** | `npm run dev` | Start development server with hot reload |
| **Build** | `npm run build` | Create optimized production build |
| **Start** | `npm start` | Serve the production build locally |
| **Lint** | `npm run lint` | Run ESLint across all source files |

### Guidelines

- Follow the existing code style — Tailwind utility classes, inline SVG icons, no external UI libraries
- Test across light and dark modes
- Ensure responsive behavior on mobile, tablet, and desktop breakpoints
- Keep the zero-dependency philosophy — no `shadcn/ui`, `headlessui`, `framer-motion`, etc.
- Use the brand color palette (`blue`, `cyan`, `green`) consistently

---

## License

<p align="center">
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" /></a>
</p>

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

Copyright 2026 WorthDoing AI. All rights reserved.

---

<p align="center">
  <br />
  <a href="https://worthdoing.ai">
    <img src="https://raw.githubusercontent.com/Worth-Doing/brand-assets/main/png/variants/03-icon-only.png" alt="WorthDoing.ai" width="80" />
  </a>
  <br /><br />
  <strong>Built with purpose by <a href="https://worthdoing.ai">WorthDoing AI</a></strong>
  <br />
  <sub>AI That Decides What Matters</sub>
  <br /><br />
  <a href="https://worthdoing.ai"><img src="https://img.shields.io/badge/Website-worthdoing.ai-blue?style=flat-square&logo=safari&logoColor=white" alt="Website" /></a>
  <a href="mailto:admin@worthdoing.ai"><img src="https://img.shields.io/badge/Email-admin@worthdoing.ai-red?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://github.com/WorthDoingAI"><img src="https://img.shields.io/badge/GitHub-WorthDoingAI-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
</p>
