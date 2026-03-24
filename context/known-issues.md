# Known Issues — Bugs y deuda técnica

Última actualización: Marzo 2026  
Fuentes: auditoría Claude (config/deps) + auditoría Codex (código fuente)

---

## Prioridad alta

### [A1] Formulario sin labels de accesibilidad
**Archivo:** `src/components/ContactForm.tsx`  
**Problema:** Los inputs dependen de `placeholder` en lugar de `<label>` o `aria-label`. Visualmente funciona, pero Lighthouse Accessibility lo penaliza y los lectores de pantalla no pueden asociar el campo con su propósito.  
**Fix:** Agregar `<label htmlFor="campo">` o `aria-label` a cada input y textarea.  
**Costo:** Bajo (30 min). **Impacto:** Alto (Lighthouse + percepción de calidad).  
**Regla:** Al tocar cualquier parte del formulario, corregir esto en el mismo cambio.

### [A2] Endpoint de contacto sin validación de schema
**Archivo:** `src/app/api/contact/route.ts`  
**Problema:** `req.json()` no valida tipos, longitud de campos ni presencia de campos requeridos. Un payload malformado puede causar un error 500 no controlado.  
**Fix:** Agregar validación con `zod`. Schema mínimo: `name` (string, max 100), `email` (email válido), `message` (string, max 2000).  
**Costo:** Medio (1-2 hs incluye instalar zod). **Impacto:** Alto antes de producción real.

### [A3] Sin rate limiting en el endpoint de contacto
**Archivo:** `src/app/api/contact/route.ts`  
**Problema:** Cualquier cliente puede hacer POST ilimitado. En un portfolio público con Resend free tier (3000 emails/mes), un bot puede agotar la cuota.  
**Fix:** Upstash Rate Limit (serverless, funciona en Netlify Edge) o simplemente honeypot field en el formulario.  
**Costo:** Medio. **Impacto:** Medio (no urgente para demo, sí para producción).

---

## Prioridad media

### [M1] i18n no afecta metadata del servidor
**Archivos:** `src/app/layout.tsx`, `src/context/LanguageContext.tsx`  
**Problema:** `<html lang>`, Open Graph locale, y `alternates.languages` en `layout.tsx` están fijos en español (idioma primario). El switcher de idioma solo cambia el contenido visible en cliente. El HTML inicial y el SEO siempre salen en español.  
**Decisión tomada:** Aceptado como tradeoff (ver `architecture.md` sección i18n).  
**Cuándo escala a problema:** Si se necesita indexación SEO independiente en inglés.  
**Fix potencial:** Migrar a `next-intl` con middleware. Implica cambio arquitectural, no un fix menor.

### [M2] Cast inseguro en traducciones de proyectos
**Archivos:** `src/components/ProjectCard.tsx`, `src/i18n/en.json`, `src/i18n/es.json`  
**Problema (Codex):** Las descripciones localizadas de proyectos se acceden con un cast `as Record<string, { description: string }>` sobre `t.projectData`. Si un proyecto tiene un `id` que no matchea una clave en el JSON de traducción, falla en silencio mostrando `undefined`.  
**Fix:** Definir un tipo derivado de la estructura real de `projects.ts` para las traducciones, en lugar del cast genérico. Agregar validación en desarrollo que loguee ids faltantes.  
**Costo:** Medio. **Impacto:** Medio (no rompe visualmente, pero es deuda de tipo real).

### [M3] useTranslation() con fallback silencioso
**Archivo:** `src/context/LanguageContext.tsx`  
**Problema (Codex):** `useTranslation()` devuelve un fallback en inglés si se usa fuera del Provider, en lugar de lanzar un error. Esto hace que bugs de composición (componente fuera del árbol correcto) "funcionen en inglés" y sean difíciles de detectar.  
**Fix:** En desarrollo, lanzar un error explícito si `useTranslation()` se llama fuera del Provider. En producción, mantener el fallback.  
**Costo:** Bajo. **Impacto:** Medio (calidad de desarrollo).

---

## Prioridad baja

### [B1] Email con remitente genérico de Resend
**Archivo:** `src/app/api/contact/route.ts`  
**Problema:** El `from` es `onboarding@resend.dev`, no un dominio propio. Los emails pueden ir a spam o verse poco profesionales.  
**Fix:** Verificar un dominio propio en Resend y actualizar el remitente.  
**Bloqueado por:** Necesita dominio propio con acceso DNS.

### [B2] tsconfig target ES2017
**Archivo:** `tsconfig.json`  
**Problema:** React 19 es más moderno que ES2017. El target actual puede generar polyfills innecesarios.  
**Fix:** Cambiar a `"target": "ES2020"`. Verificar que el build en Netlify no rompa antes de mergear.  
**Costo:** Muy bajo. **Riesgo:** Muy bajo.

### [B3] Branch master en lugar de main
**Problema:** El HEAD apunta a `refs/heads/master`. Netlify y GitHub usan `main` como default en repos nuevos. No es un bug funcional, pero es inconsistente con el ecosistema actual.  
**Fix:** `git branch -m master main` + actualizar configuración en Netlify.  
**Costo:** Muy bajo. **Riesgo:** Bajo (verificar que Netlify siga desplegando después del rename).

### [B4] settings.local.json con permiso a Netlify CLI obsoleto
**Archivo:** `.claude/settings.local.json`  
**Problema:** `"Bash(npx netlify:*)"` está en los permisos de Claude Code pero el proyecto ya usa Netlify directamente sin CLI. Es un residuo de la versión anterior.  
**Fix:** Eliminar esa línea del archivo.  
**Costo:** Trivial.

---

## Resuelto (historial)

- ~~Next.js 16 no existe~~ — Verificado: Next.js 16.x existe y está publicado en npm (verificación Codex, marzo 2026)
- ~~framer-motion 12.34.0 no existe~~ — Verificado: versión plausible según registro npm actual
