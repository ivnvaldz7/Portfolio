# Ivan Valdez | Frontend Developer Portfolio

Personal portfolio built with **Next.js 16**, **React 19**, **TypeScript** and **Tailwind CSS 4**.

Live at [ivnvaldz.com](https://ivnvaldz.com)

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Email | Resend |
| Theming | next-themes (dark/light) |
| Fonts | Geist Sans & Geist Mono |

## Features

- **Dark / Light mode** with smooth transitions
- **Bilingual (EN / ES)** with custom i18n context
- **Contact form** powered by Resend API
- **WhatsApp button** for direct communication
- **Scroll-to-top** button
- **Scroll animations** via Framer Motion
- **SEO optimized**: Open Graph, Twitter Cards, JSON-LD, sitemap, robots.txt
- **Responsive** design across all breakpoints
- **404 page** with custom design

## Project Structure

```
src/
├── app/
│   ├── api/contact/       # Resend email endpoint
│   ├── globals.css         # Tailwind config + dark mode tokens
│   ├── layout.tsx          # Root layout, metadata, SEO
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # Custom 404
│   ├── robots.ts           # Robots.txt generation
│   └── sitemap.ts          # Sitemap generation
├── components/
│   ├── Header.tsx          # Navigation
│   ├── Banner.tsx          # Hero section
│   ├── About.tsx           # About me section
│   ├── ProjectGrid.tsx     # Projects grid
│   ├── ProjectCard.tsx     # Individual project card
│   ├── Contact.tsx         # Contact section
│   ├── ContactForm.tsx     # Email form (Resend)
│   ├── WhatsAppButton.tsx  # WhatsApp floating button
│   ├── ThemeToggle.tsx     # Dark/light toggle
│   ├── ThemeProvider.tsx   # next-themes wrapper
│   ├── LanguageSwitcher.tsx# EN/ES toggle
│   ├── AnimatedSection.tsx # Framer Motion wrapper
│   ├── ScrollToTop.tsx     # Scroll-to-top button
│   ├── JsonLd.tsx          # Structured data
│   ├── ComingSoonCard.tsx  # Placeholder card
│   └── LoadingGrid.tsx     # Loading skeleton
├── context/
│   └── LanguageContext.tsx  # i18n provider
└── i18n/
    ├── index.ts            # Translation loader
    ├── en.json             # English translations
    └── es.json             # Spanish translations
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

## Update Timeline

```
                           2021                                     2026
                            |                                        |
  Aug 25 ──── Aug 26 ──── Aug 31 ──── Jan 26 ──────── Feb 13 ──── Feb 14
    |            |            |           |                |           |
    v            v            v           v                v           v

┌─────────┐ ┌──────────┐ ┌────────┐ ┌──────────┐ ┌────────────┐ ┌──────────┐
│ v0.1.0  │ │  v0.2.0  │ │ v1.0.0 │ │  v1.1.0  │ │   v2.0.0   │ │  v2.1.0  │
│         │ │          │ │  Beta  │ │          │ │            │ │          │
│ Inicio  │ │  Mobile  │ │Release │ │  A11y +  │ │ Next.js 16 │ │ Contact  │
│ sección │ │ complete │ │        │ │   SASS   │ │ React 19   │ │  Form +  │
│         │ │          │ │        │ │  Perf    │ │ TS + TW 4  │ │ WhatsApp │
└─────────┘ └──────────┘ └────────┘ └──────────┘ └────────────┘ └──────────┘
```

### v0.1.0 — First Steps (Aug 2021)
Initial section layout. The project begins as a static HTML/CSS/JS portfolio.

### v0.2.0 — Mobile Complete (Aug 2021)
Responsive design completed for mobile breakpoints.

### v1.0.0 Beta — First Release (Aug 2021)
First deployable version of the portfolio with all core sections working.

### v1.1.0 — Accessibility & Performance (Jan 2026)
- Improved accessibility (a11y) across all components
- Migrated to structured SASS architecture
- Performance optimizations

### v2.0.0 — Full Stack Migration (Feb 13, 2026)
Complete rewrite of the portfolio:
- **Next.js 16** with App Router
- **React 19** with latest features
- **TypeScript** for type safety
- **Tailwind CSS 4** replacing SASS
- Dark/light theme system (next-themes)
- Bilingual support (EN/ES) with custom i18n
- SEO: Open Graph, JSON-LD, sitemap, robots.txt
- Framer Motion animations
- Geist font family

### v2.1.0 — Direct Communication (Feb 14, 2026)
- **Contact form** with Resend API (server-side email sending)
- **WhatsApp button** for instant messaging
- Full form validation with loading/success/error states

## Deployment

Optimized for **Vercel** (recommended):

```bash
npm i -g vercel
vercel
```

Set `RESEND_API_KEY` in your Vercel project environment variables.

## License

MIT
