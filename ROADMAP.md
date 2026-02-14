# Portfolio v2 — Roadmap

Migración completa del portfolio a **Next.js + Vercel** para posicionarse como un desarrollador frontend maduro, con arquitectura moderna, data-driven y funcionalidades profesionales.

---

## Visión general

```
ACTUAL                          OBJETIVO
HTML + SASS + JS vanilla   →    Next.js (App Router)
Sin framework              →    React + TypeScript
CSS compilado              →    Tailwind CSS (o CSS Modules)
Contenido hardcodeado      →    Data-driven (JSON/CMS)
Sin backend                →    API Routes de Next.js
Deploy en Netlify          →    Vercel + dominio propio
Sin contacto directo       →    Email + WhatsApp
Sin testimonios            →    Tarjetas dinámicas de opiniones
Sin i18n                   →    Español / Inglés
Sin tema oscuro            →    Light / Dark mode
```

---

## Fase 0 — Setup del proyecto

**Objetivo:** Inicializar el proyecto con la base técnica correcta.

- [ ] Crear proyecto con `create-next-app` (App Router + TypeScript)
- [ ] Configurar Tailwind CSS
- [ ] Configurar ESLint + Prettier
- [ ] Estructura de carpetas:

```
portfolio-v2/
├── app/
│   ├── layout.tsx              # Layout raíz (fonts, metadata, providers)
│   ├── page.tsx                # Home (landing)
│   ├── api/
│   │   ├── contact/route.ts    # Endpoint para formulario de contacto
│   │   └── testimonials/route.ts # Endpoint para testimonios
│   └── not-found.tsx           # Página 404 personalizada
├── components/
│   ├── ui/                     # Componentes genéricos (Button, Card, Input)
│   ├── Header.tsx
│   ├── Banner.tsx
│   ├── About.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   ├── TestimonialCard.tsx
│   ├── TestimonialCarousel.tsx
│   ├── ContactForm.tsx
│   ├── WhatsAppButton.tsx
│   ├── ThemeToggle.tsx
│   ├── LanguageSwitcher.tsx
│   ├── ScrollToTop.tsx
│   └── Footer.tsx
├── data/
│   ├── projects.ts             # Array tipado de proyectos
│   ├── testimonials.ts         # Testimonios iniciales
│   └── personal.ts             # Info personal (nombre, email, redes)
├── lib/
│   ├── send-email.ts           # Lógica de envío con Resend
│   └── utils.ts                # Helpers
├── hooks/
│   └── useIntersectionObserver.ts
├── types/
│   └── index.ts                # Interfaces: Project, Testimonial, etc.
├── public/
│   ├── icons/
│   └── images/
└── messages/                   # Archivos i18n
    ├── es.json
    └── en.json
```

- [ ] Conectar repositorio a **Vercel** (deploy automático en cada push)
- [ ] Configurar dominio propio en Vercel (DNS)

**Tech:** Next.js 15, React 19, TypeScript, Tailwind CSS

---

## Fase 1 — Migración del contenido actual

**Objetivo:** Reproducir el portfolio actual en Next.js sin perder nada.

### 1.1 Layout y navegación
- [ ] `layout.tsx` con font Inter (next/font/google, sin CDN externo)
- [ ] `<Header />` con navegación y scroll suave
- [ ] Metadata global (title, description, Open Graph, favicon)
- [ ] `<Footer />` con copyright y links

### 1.2 Secciones principales
- [ ] `<Banner />` — Hero con tipografía responsiva
- [ ] `<About />` — Descripción personal + ilustración
- [ ] `<ProjectGrid />` — Grilla de proyectos
- [ ] `<ContactSection />` — Email + ubicación + foto
- [ ] `<ScrollToTop />` — Botón con Intersection Observer (custom hook)

### 1.3 Migrar estilos
- [ ] Traducir la paleta de colores de SASS a variables de Tailwind (`tailwind.config.ts`)

```ts
// tailwind.config.ts → theme.extend.colors
colors: {
  brand: {
    green: 'hsl(161, 49%, 45%)',
    cyan: 'hsl(193, 30%, 69%)',
    pink: 'hsl(13, 53%, 82%)',
    salmon: 'hsl(2, 45%, 56%)',
    'soft-pink': 'hsl(14, 81%, 96%)',
    'soft-cyan': 'hsl(180, 18%, 85%)',
    'strong-blue': 'hsl(192, 42%, 23%)',
    logo: 'hsl(14, 59%, 64%)',
  }
}
```

- [ ] Migrar layouts (grid/flexbox) a clases utilitarias de Tailwind
- [ ] Migrar animaciones (lds-grid, hover effects) a Tailwind + CSS modules si es necesario
- [ ] Responsive design con breakpoints de Tailwind (`sm`, `md`, `lg`, `xl`)

**Resultado:** El portfolio se ve igual que antes pero corre sobre Next.js.

---

## Fase 2 — Data-driven projects

**Objetivo:** Los proyectos se renderizan desde datos tipados, no desde HTML hardcodeado.

### 2.1 Definir tipos e interfaz

```ts
// types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;          // path al ícono en /public
  tags: string[];        // ["Next.js", "TypeScript", "Tailwind"]
  color: string;         // color de fondo de la tarjeta
  featured: boolean;     // destacar en la grilla
  year: number;
}
```

### 2.2 Archivo de datos

```ts
// data/projects.ts
import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'tasty',
    title: 'Tasty',
    description: 'Sitio de restaurante responsive con SASS, HTML y JS.',
    url: 'https://ivnvaldz7.github.io/Tasty/',
    icon: '/icons/plato.svg',
    tags: ['HTML', 'SASS', 'JavaScript'],
    color: 'hsl(192, 42%, 23%)',
    featured: true,
    year: 2025,
  },
  // ... más proyectos
];
```

### 2.3 Componentes dinámicos
- [ ] `<ProjectCard />` recibe un `Project` como prop
- [ ] `<ProjectGrid />` mapea el array y renderiza las tarjetas
- [ ] Filtro por tags (opcional, buena feature para demostrar interactividad)
- [ ] Agregar un proyecto nuevo = agregar un objeto al array, cero HTML

**Resultado:** Para agregar un proyecto solo tocás `data/projects.ts`.

---

## Fase 3 — Comunicación directa

**Objetivo:** Que cualquier persona pueda contactarte fácilmente.

### 3.1 Formulario de contacto con email
- [ ] `<ContactForm />` con campos: nombre, email, mensaje
- [ ] Validación client-side con `zod` + `react-hook-form` (o validación nativa)
- [ ] API Route `app/api/contact/route.ts` que envía el email
- [ ] Usar **Resend** (gratis hasta 3,000 emails/mes, ideal para Vercel)
- [ ] Feedback visual: loading, éxito, error
- [ ] Rate limiting básico para evitar spam

```ts
// app/api/contact/route.ts (ejemplo simplificado)
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  await resend.emails.send({
    from: 'portfolio@tudominio.com',
    to: 'ivnvaldz@gmail.com',
    subject: `Nuevo mensaje de ${name}`,
    text: `De: ${name} (${email})\n\n${message}`,
  });

  return Response.json({ success: true });
}
```

### 3.2 Botón de WhatsApp
- [ ] `<WhatsAppButton />` flotante (esquina inferior derecha)
- [ ] Enlace directo a WhatsApp con mensaje pre-armado:
  `https://wa.me/54XXXXXXXXXX?text=Hola%20Ivan!%20Vi%20tu%20portfolio...`
- [ ] Animación sutil de entrada
- [ ] Configurable desde `data/personal.ts`

### 3.3 Links de redes sociales
- [ ] GitHub, LinkedIn, Twitter/X en el footer y/o header
- [ ] Datos centralizados en `data/personal.ts`

**Resultado:** Email profesional + WhatsApp directo + redes sociales.

---

## Fase 4 — Testimonios dinámicos

**Objetivo:** Mostrar opiniones y saludos de personas en tarjetas dinámicas.

### 4.1 Estructura de datos

```ts
// types/index.ts
export interface Testimonial {
  id: string;
  name: string;
  role: string;           // "Compañero de trabajo", "Cliente", "Amigo"
  message: string;
  avatar?: string;        // URL opcional
  date: string;           // ISO date
}
```

### 4.2 Opciones de almacenamiento

| Opción | Descripción | Recomendación |
|--------|-------------|---------------|
| `data/testimonials.ts` | Archivo local, vos los cargás manualmente | Para empezar |
| Vercel KV (Redis) | Key-value store serverless, gratis en hobby | Cuando quieras escalar |
| Notion API | Cargás testimonios desde una tabla de Notion | Si usás Notion |

### 4.3 Componentes
- [ ] `<TestimonialCard />` — Tarjeta individual con quote, nombre, rol
- [ ] `<TestimonialCarousel />` — Carrusel/slider automático con las tarjetas
  - Scroll horizontal con snap en mobile
  - Auto-play con pausa en hover
  - Indicadores de posición
- [ ] Animación de entrada al hacer scroll (Intersection Observer)

### 4.4 Futuro: formulario público de testimonios
- [ ] Página o modal donde alguien puede dejarte un testimonio
- [ ] API Route para guardar en Vercel KV
- [ ] Moderación: los testimonios nuevos quedan como "pendientes" hasta que los apruebes

**Resultado:** Sección visual de testimonios que se puede expandir fácilmente.

---

## Fase 5 — Dark mode

**Objetivo:** Tema oscuro profesional con toggle.

- [ ] Usar `next-themes` (librería estándar para temas en Next.js)
- [ ] `<ThemeToggle />` en el header (ícono sol/luna)
- [ ] Detectar `prefers-color-scheme` del sistema
- [ ] Persistir preferencia en `localStorage`
- [ ] Definir paleta dark en Tailwind:

```ts
// Variables dark mode (ejemplo)
dark: {
  bg: 'hsl(220, 20%, 10%)',
  surface: 'hsl(220, 15%, 16%)',
  text: 'hsl(0, 0%, 90%)',
  muted: 'hsl(0, 0%, 60%)',
}
```

- [ ] Transición suave entre temas (`transition-colors duration-300`)

**Resultado:** Portfolio con dark mode profesional y persistente.

---

## Fase 6 — Internacionalización (i18n)

**Objetivo:** Portfolio disponible en español e inglés.

- [ ] Usar `next-intl` (integración nativa con App Router)
- [ ] Archivos de traducción en `/messages/es.json` y `/messages/en.json`
- [ ] `<LanguageSwitcher />` en el header
- [ ] Detectar idioma del navegador como default
- [ ] Traducir: navegación, títulos, descripciones de proyectos, contacto, testimonios

**Resultado:** Portfolio bilingüe, demuestra profesionalismo internacional.

---

## Fase 7 — SEO, Performance y Analytics

**Objetivo:** Que el portfolio rankee bien y cargue rápido.

### SEO
- [ ] Metadata dinámica con `generateMetadata()` de Next.js
- [ ] Open Graph images (og:image) — usar `next/og` para generarlas dinámicamente
- [ ] `sitemap.ts` y `robots.ts` (generados por Next.js)
- [ ] JSON-LD structured data (schema.org Person)

### Performance
- [ ] Imágenes optimizadas con `next/image` (WebP automático, lazy loading)
- [ ] Fonts optimizados con `next/font` (sin layout shift)
- [ ] Bundle analysis con `@next/bundle-analyzer`
- [ ] Target: Lighthouse 95+ en todas las categorías

### Analytics
- [ ] **Vercel Analytics** (gratis en hobby, integración nativa)
- [ ] **Vercel Speed Insights** para métricas de Web Vitals
- [ ] Eventos personalizados: clicks en proyectos, envíos de contacto

**Resultado:** Portfolio rápido, indexable y con métricas reales.

---

## Fase 8 — Detalles finales y polish

- [ ] Página 404 personalizada y creativa
- [ ] Animaciones de entrada con `framer-motion` o CSS animations
- [ ] Favicon y web manifest (`site.webmanifest`)
- [ ] `<meta>` tags completos para compartir en redes
- [ ] README profesional del repositorio (tech stack, screenshots, deploy)
- [ ] Opcional: sección de blog con MDX (si querés escribir artículos técnicos)

---

## Stack técnico final

| Categoría | Tecnología |
|-----------|-----------|
| Framework | Next.js 15 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Deploy | Vercel |
| Dominio | Personalizado (configurado en Vercel) |
| Email | Resend |
| Temas | next-themes |
| i18n | next-intl |
| Validación | zod |
| Animaciones | framer-motion (opcional) |
| Analytics | Vercel Analytics |
| Linting | ESLint + Prettier |

---

## Orden de implementación

```
Fase 0  →  Setup Next.js + Vercel + dominio
Fase 1  →  Migrar contenido actual (paridad visual)
Fase 2  →  Data-driven projects
Fase 3  →  Contacto: email (Resend) + WhatsApp + redes
Fase 4  →  Testimonios dinámicos
Fase 5  →  Dark mode
Fase 6  →  i18n (español/inglés)
Fase 7  →  SEO + Performance + Analytics
Fase 8  →  Polish y detalles finales
```

Cada fase es deployable de forma independiente. Nunca rompés producción.

---

*Última actualización: Febrero 2026*
