# DECISIONS

## 2026-04-08 - Adoptar opción B escalable para la evolución de proyectos

### Estado
Aprobada

### Contexto
El portfolio ya tiene un stack moderno, pero la sección de proyectos todavía funcionaba como catálogo estático de enlaces externos.

### Decisión
Avanzar con una estrategia escalable, priorizando rediseño del modelo de datos y arquitectura de contenido antes de la UI nueva.

### Trade-offs
#### Pros
- mejor mantenibilidad
- menor deuda técnica futura
- base sólida para case studies

#### Contras
- más trabajo inicial
- requiere documentación y diseño previo

---

## 2026-04-08 - Usar doble sistema de memoria: docs versionados + Engram

### Estado
Aprobada

### Decisión
Mantener dos capas de memoria:
- documentación local visible en `docs/`
- memoria operativa persistente en Engram

### Trade-offs
#### Pros
- memoria explícita y persistente
- menor pérdida de contexto

#### Contras
- exige disciplina de sincronización

---

## 2026-04-08 - Modelar proyectos con contenido bilingue tipado

### Estado
Aprobada

### Contexto
La nueva experiencia debía alimentar cards, preview modal y detail pages, manteniendo además el cambio de idioma del sitio.

### Decisión
Usar `src/data/projects.ts` como fuente principal con campos bilingues tipados (`en` / `es`) y dejar `i18n` para strings de interfaz.

### Motivo
Esto evita que la arquitectura de proyectos dependa del viejo patrón de descripción duplicada.

### Trade-offs
#### Pros
- una fuente principal de verdad para la nueva UX
- soporte de idioma sin mover el proyecto a un CMS
- mejor escalabilidad para nuevas superficies

#### Contras
- el archivo de datos crece en tamaño

### Consecuencia
La capa `projectData` en `i18n` dejó de ser necesaria y fue removida al cerrar la arquitectura.

---

## 2026-04-08 - Mantener salida dual para proyectos: preview interno + detail page + demo externa

### Estado
Aprobada

### Contexto
La sección anterior sólo enviaba al usuario a una URL externa, lo que recortaba narrativa y profundidad.

### Decisión
Cada proyecto debe poder ofrecer:
- vista rápida interna
- página dedicada interna
- salida externa opcional a demo

### Motivo
Así la home deja de funcionar sólo como grilla de links y pasa a comportarse como sistema de contenido.

### Trade-offs
#### Pros
- mejor storytelling
- mejor UX
- mejor escalabilidad

#### Contras
- más complejidad de interacción
- más contenido que mantener
