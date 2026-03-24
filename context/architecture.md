# Architecture — Decisiones técnicas

Registro de decisiones tomadas y sus razones. Antes de cambiar algo de esta lista, discutirlo con Ivan.

---

## i18n — Context custom client-side

**Decisión:** i18n implementado con `LanguageContext.tsx` + archivos `en.json` / `es.json`, sin `next-intl` ni middleware de rutas.

**Por qué:**
- El portfolio es una SPA de una sola ruta (`/`). No hay rutas `/es/about` ni `/en/about` que indexar por separado.
- La audiencia primaria es hispanohablante. El inglés es accesorio, no un mercado independiente.
- `next-intl` requiere middleware que intercepta todas las rutas y genera URLs con prefijo de locale (`/es`, `/en`). Para una sola página es over-engineering.
- El tradeoff aceptado: la metadata de `layout.tsx` sale fija en español (idioma primario). El HTML inicial es correcto para el 80% de la audiencia.

**Consecuencia conocida:** El `<html lang>`, Open Graph y alternates no cambian dinámicamente con el switcher. Documentado en `known-issues.md` como mejora futura de baja prioridad.

**Lo que NO hacer:** No migrar a `next-intl` sin una razón de producto concreta (ej: necesitar indexación SEO independiente en inglés).

---

## Deploy — Netlify

**Decisión:** Deploy en Netlify desde rama `master`. Sin Vercel.

**Por qué:** El proyecto migró de Netlify (versión vanilla) y el dominio/configuración ya estaba allí. No hay razón de producto para mover a Vercel.

**Lo que NO hacer:** No agregar configuración de Vercel (`vercel.json`, variables en dashboard de Vercel) ni migrar sin decisión explícita de Ivan.

---

## Email — Resend directo a Gmail

**Decisión:** `api/contact/route.ts` envía con Resend al email `ivnvaldz@gmail.com`. El remitente es `onboarding@resend.dev` (dominio de Resend, no propio).

**Por qué:** MVP funcional. Configurar un dominio propio en Resend requiere DNS verification en Netlify/dominio y no es prioritario para demo.

**Consecuencia conocida:** El email llega con remitente genérico. Mejora pendiente cuando se configure dominio propio.

**Lo que NO hacer:** No cambiar el email de destino sin confirmación. No exponer el API key en cliente.

---

## Validación del formulario — Sin zod (hoy)

**Decisión:** El endpoint `api/contact/route.ts` valida manualmente sin schema formal.

**Por qué:** Es suficiente para MVP/demo. La audiencia del portfolio no es adversarial.

**Consecuencia conocida:** Sin longitud máxima de campos, sin rate limiting, sin schema tipado. Pendiente antes de producción "real".

**Lo que NO hacer:** No exponer el endpoint como ejemplo de "buenas prácticas de API" en entrevistas sin aclarar que es MVP.

---

## Proyectos — Datos en projects.ts

**Decisión:** Los proyectos están en un archivo de datos tipado (`projects.ts` o equivalente), no hardcodeados en JSX.

**Por qué:** Permite agregar proyectos sin tocar componentes. Escala limpio.

**Problema conocido (Codex):** Las descripciones localizadas se acceden con un cast manual `as Record<string, { description: string }>` sobre `t.projectData`. Ese cast rompe la seguridad de tipos — un id faltante falla en silencio.

**Mejora pendiente:** Tipar las traducciones de proyectos con un tipo derivado de la estructura real de `projects.ts`, no con un cast genérico.

---

## Animaciones — Framer Motion

**Decisión:** Framer Motion para animaciones de scroll y transiciones.

**Por qué:** Ya estaba en el stack. Para un portfolio es apropiado — las animaciones son parte del "producto".

**Consideración:** Framer Motion es una dependencia pesada para lo que hace. Si en el futuro se busca optimizar bundle, evaluar reemplazar con CSS animations para los casos simples.

---

## TypeScript — strict mode

**Decisión:** `"strict": true` en `tsconfig.json`.

**Por qué:** El portfolio es también una demostración de TypeScript serio. Strict mode es la señal visible de eso.

**Lo que NO hacer:** No desactivar strict ni agregar `// @ts-ignore` sin documentar por qué.

---

## ESLint — Flat config v9

**Decisión:** ESLint 9 con `defineConfig` y `globalIgnores` (API moderna).

**Por qué:** Next.js 16 genera este formato por defecto. Es el estándar actual.

---

## Target ES — ES2017 (revisión pendiente)

**Decisión actual:** `"target": "ES2017"` en tsconfig.

**Problema:** React 19 usa APIs modernas que ES2017 puede polyfill innecesariamente. Subir a `ES2020` es más coherente con el stack.

**Estado:** Pendiente de verificar que no rompa el build en Netlify antes de cambiar.
