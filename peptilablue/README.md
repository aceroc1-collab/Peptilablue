# PEPTILAB — Website

Ultra-premium pharmaceutical brand website built with Next.js 14, TypeScript, Tailwind CSS & Framer Motion.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS variables
- **Animations**: Framer Motion
- **Fonts**: Cormorant Garamond + Josefin Sans + Space Mono (Google Fonts)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy** — no environment variables needed

## Project Structure

```
peptilab/
├── app/
│   ├── globals.css       # Global styles + CSS variables
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── CartContext.tsx   # Cart state management (React Context)
│   ├── CartPanel.tsx     # Sliding cart drawer
│   ├── Hero.tsx          # Hero section with molecule animation
│   ├── Navbar.tsx        # Fixed navigation with scroll effect
│   ├── Products.tsx      # Product catalog + cart integration
│   └── Sections.tsx      # Ticker, About, Benefits, Testimonials, FAQ, Contact, Footer
├── public/               # Static assets (add logo.png here)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Customization

### Products
Edit `PRODUCTS` array in `components/Products.tsx` to add/remove/modify products.

### Contact Info
Edit contact details in `components/Sections.tsx` → `Contact` function.

### Colors
All brand colors are defined as CSS variables in `app/globals.css`:
```css
--gold: #B8A06A;
--gold-light: #D4BC88;
--cyan: #00D4FF;
```

### Adding your logo image
Place `logo.png` in `/public/` and update `Navbar.tsx` to use `<Image>` component.

## Legal Notice

> FOR RESEARCH USE ONLY — NOT FOR HUMAN CONSUMPTION

Ensure all legal disclaimers are maintained when deploying.
