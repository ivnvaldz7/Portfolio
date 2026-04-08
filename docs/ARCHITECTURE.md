# ARCHITECTURE

## Estado actual
Arquitectura de sitio single-page con App Router y una experiencia de proyectos ya extendida con modal y rutas dedicadas.

## Arquitectura funcional implementada
```text
Home
├── Header
├── Banner
├── About
├── ProjectGrid
│   ├── LoadingGrid
│   ├── ProjectCard[]
│   ├── ProjectPreviewModal
│   └── ComingSoonCard
├── Contact
├── ScrollToTop
└── WhatsAppButton

/projects/[slug]
└── ProjectDetailPage
```

## Problema arquitectónico resuelto
La experiencia de proyectos ya no está modelada como una grilla de enlaces externos directos. Ahora una sola capa de datos alimenta:
- card resumida en home
- modal de preview
- página dedicada por proyecto

## Principios
- una sola fuente principal de verdad para datos de proyecto
- tipado fuerte
- separación más clara entre contenido y presentación
- composición incremental sin romper la home actual
- mobile first como criterio de diseño base

## Diseño implementado
```text
src/
├── app/
│   ├── page.tsx
│   ├── projects/
│   │   └── [slug]/
│   │      └── page.tsx
│   └── sitemap.ts
├── components/
│   ├── ProjectGrid.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectPreviewModal.tsx
│   └── ProjectDetailPage.tsx
├── data/
│   └── projects.ts
└── types/
   └── index.ts
```

## Contrato de datos implementado
El tipo `Project` evolucionó para incluir:
- `slug`
- `title`
- `subtitle`
- `summary`
- `year`
- `role`
- `stack`
- `featured`
- `status`
- `links`
- `theme`
- `previewBullets`
- `metrics`
- `sections`
- `outcomes`

## Estrategia de contenido
### Alternativa elegida
Mantener contenido en módulos TypeScript tipados, evitando introducir CMS o MDX en esta fase.

### Racional técnico
- menor complejidad operativa
- mejor integración con tipos
- más velocidad para iterar
- suficiente para el tamaño actual del portfolio

## i18n
### Estado actual
La nueva UI consume contenido estructural desde `src/data/projects.ts`. `src/i18n/*.json` queda enfocado exclusivamente en labels de interfaz.

## Motion
### Estado actual
La sección ahora usa motion más visible en:
- aparición seccional
- cards
- open / close del modal
- entrada del detail page

### Soporte adicional
Se agregó soporte básico a `prefers-reduced-motion`.

## Mobile first
### Estado actual
- acciones visibles en card sin depender de hover
- jerarquía más clara en mobile
- modal usable desde pantallas pequeñas
- detail page pensada primero en columna y luego expandida a desktop

## Dependencias introducidas
Ninguna nueva.

## Validación técnica
`npm run build` pasó correctamente luego de la implementación y también después de la limpieza final de arquitectura.
