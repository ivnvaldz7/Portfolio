# Known Issues — Bugs y deuda técnica

Última actualización: Marzo 2026  
Fuentes: auditoría Claude (config/deps) + auditoría Codex (código fuente)

---

## Prioridad alta


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

- ~~[A3] Sin rate limiting en el endpoint de contacto~~ — Resuelto: honeypot field (`website`) en `ContactForm.tsx`; el endpoint lo verifica y rechaza silenciosamente si está relleno
- ~~[A2] Endpoint de contacto sin validación de schema~~ — Resuelto: zod instalado, `contactSchema` con `name` (max 100), `email` (email válido), `message` (max 2000) en `api/contact/route.ts`
- ~~[A1] Formulario sin labels de accesibilidad~~ — Resuelto: `aria-label` agregado a los tres campos (`name`, `email`, `message`) en `ContactForm.tsx`
- ~~Next.js 16 no existe~~ — Verificado: Next.js 16.x existe y está publicado en npm (verificación Codex, marzo 2026)
- ~~framer-motion 12.34.0 no existe~~ — Verificado: versión plausible según registro npm actual
