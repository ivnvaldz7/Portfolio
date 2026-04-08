# CONTEXT

## Proyecto
Portfolio personal de Ivan Valdez orientado a empleabilidad como Frontend / Fullstack Developer, con foco en mostrar proyectos reales y capacidad técnica con mayor profundidad narrativa.

## Fuente de contexto
- `PROYECT_CONTEXT.MD`
- Inspección técnica del repositorio al 2026-04-08
- Decisión actual: seguir la opción B escalable

## Estado actual real
- Proyecto migrado parcialmente a stack moderno.
- La base visual y funcional existe.
- La experiencia de proyectos ya fue refactorizada sobre un modelo tipado más rico.
- Existe modal de preview.
- Existen páginas dedicadas por proyecto.
- La sección de proyectos ya no depende de links externos como única interacción.
- Las transiciones fueron reforzadas y ahora hay soporte básico para `prefers-reduced-motion`.
- La UI de proyectos fue replanteada con una lógica más mobile first.

## Stack actual confirmado
- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Framer Motion
- next-themes
- Zod
- Resend

## Estructura actual relevante
```text
src/
├── app/
│   ├── page.tsx
│   ├── projects/[slug]/page.tsx
│   ├── api/contact/route.ts
│   ├── globals.css
│   └── sitemap.ts
├── components/
│   ├── ProjectGrid.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectPreviewModal.tsx
│   └── ProjectDetailPage.tsx
├── data/
│   └── projects.ts
├── context/
├── i18n/
└── types/
```

## Diagnóstico técnico resumido
- La arquitectura general del sitio sigue siendo simple y clara.
- El cuello de botella principal estaba en el modelo de contenido de proyectos y fue atacado en esta iteración.
- `src/data/projects.ts` pasó a ser la fuente principal usada por la nueva UI de proyectos.
- El tipo `Project` ahora soporta:
  - card de home
  - modal de preview
  - página dedicada por proyecto
- La interacción principal de proyectos ahora combina preview interno, detalle interno y salida externa.
- Queda una capa legacy en `projectData` dentro de `src/i18n/*.json`, pero ya no gobierna la renderización nueva.

## Restricciones y reglas vigentes
- No romper la estructura existente si no es necesario.
- Priorizar componentes reutilizables.
- Priorizar mobile first.
- Mantener diseño limpio y profesional.
- Evitar sobrecarga visual.
- Antes de implementar cambios importantes:
  - revisar estos documentos
  - revisar memoria disponible en Engram

## Riesgos actuales
- La narrativa nueva depende de revisar el contenido real de cada proyecto para no quedarse corta.
- Falta validación visual manual en navegador real para modal y detail pages.

## Supuestos activos
- La home actual seguirá existiendo como punto de entrada principal.
- Los proyectos seguirán siendo un bloque central del portfolio.
- Alebet Manager será el caso más profundo y narrativamente más importante.
- Se prefiere una solución escalable por sobre una solución rápida.

## Próximo foco
- Revisar visualmente la nueva experiencia en navegador real.
- Ajustar contenido de los case studies prioritarios.
