# TASKS

## Estado general
Fase actual: arquitectura de proyectos cerrada, limpia y validada por build. Lo pendiente ya no es estructural sino de polish visual/editorial.

## Roadmap por etapas

### Etapa 0 - Base de continuidad
- [x] Diagnóstico técnico inicial del proyecto
- [x] Decisión estratégica: opción B escalable
- [x] Crear `docs/CONTEXT.md`
- [x] Crear `docs/PRD.md`
- [x] Crear `docs/ARCHITECTURE.md`
- [x] Crear `docs/DECISIONS.md`
- [x] Crear `docs/TASKS.md`
- [x] Registrar memoria inicial del proyecto en Engram

### Etapa 1 - Modelo de contenido de proyectos
- [x] Redefinir contrato `Project`
- [x] Separar campos para card, preview y detail page
- [x] Definir estrategia principal para contenido e i18n
- [x] Identificar proyectos prioritarios para case study profundo

### Etapa 2 - Arquitectura de UI de proyectos
- [x] Refactorizar sección de proyectos para desacoplar navegación externa
- [x] Diseñar acciones por card: preview, detail, demo externa
- [x] Definir estructura de componentes reutilizables para proyectos

### Etapa 3 - Modal de preview
- [x] Diseñar API del modal
- [x] Definir contenido mínimo de preview
- [x] Asegurar accesibilidad: focus, escape, overlay, scroll lock
- [x] Integrar motion de open / close

### Etapa 4 - Páginas dedicadas
- [x] Crear ruta `projects/[slug]`
- [x] Implementar metadata dinámica por proyecto
- [x] Diseñar layout de case study
- [x] Resolver navegación home <-> proyecto

### Etapa 5 - Motion system
- [x] Revisar animaciones seccionales actuales
- [x] Definir variantes de motion por contexto
- [x] Agregar soporte a `prefers-reduced-motion`
- [x] Mejorar visibilidad de transiciones en mobile

### Etapa 6 - Mobile first hardening
- [x] Revisar jerarquía tipográfica de proyectos
- [x] Ajustar spacing y densidad desde viewport pequeño
- [x] Validar CTAs táctiles y estados sin hover
- [ ] Revisar modal y detail page en navegador real

### Etapa 7 - Polish visual y editorial
- [x] Reintegrar `Projects` al patrón visual de título flotante del sitio
- [x] Compactar `About` y `Hablemos` para acercarlos a la escala de `Projects`
- [x] Eliminar pills/badges genéricas de las cards
- [x] Centrar y ordenar mejor la composición interna de las cards
- [x] Limitar la transición de idioma al contenido principal
- [ ] Revisar visualmente cards, modal y detail page en navegador real
- [ ] Afinar la narrativa/copy de los proyectos prioritarios
- [ ] Evaluar un último pase de look-and-feel si hiciera falta

## Bloqueos actuales
- No hay bloqueos técnicos de compilación.
- Falta validación visual manual.
- No hay deuda arquitectónica urgente abierta.

## Próximo paso recomendado
Abrir la nueva experiencia en navegador y revisar:
- modal
- rutas dedicadas
- spacing mobile
- narrativa de contenido por proyecto
- consistencia visual general entre secciones
