# CLAUDE.md — Ivan Valdez Portfolio

Instrucciones operativas para Claude Code. Leer antes de cualquier acción.

## Contexto del proyecto

Portfolio personal de Ivan Valdez, desarrollador frontend. Stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Resend.

- **Live:** https://my-portfolio001.netlify.app/
- **Deploy:** Netlify (rama `master`)
- **Idioma primario:** Español. El inglés es secundario.
- **Audiencia:** Recruiters técnicos y no técnicos, mayoritariamente hispanohablantes.

Ver detalles completos en `context/PRD.md`.

---

## Comandos disponibles

```bash
npm run dev        # Servidor de desarrollo (localhost:3000)
npm run build      # Build de producción
npm run start      # Servidor de producción local
npm run lint       # ESLint con flat config (v9)
```

### Variables de entorno requeridas

Crear `.env.local` en la raíz:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

Sin esta variable, el endpoint de contacto falla en runtime. No hay validación en build time.

---

## Estructura del proyecto

```
src/
├── app/
│   ├── api/contact/route.ts   # Endpoint Resend → ivnvaldz@gmail.com
│   ├── globals.css            # Tokens de Tailwind + dark mode
│   ├── layout.tsx             # Root layout, metadata, SEO
│   ├── page.tsx               # Home (única página)
│   ├── not-found.tsx          # 404 personalizada
│   ├── robots.ts              # Generado por Next.js
│   └── sitemap.ts             # Generado por Next.js
├── components/                # Ver context/architecture.md
├── context/
│   └── LanguageContext.tsx    # i18n client-side (ES primario)
└── i18n/
    ├── en.json
    └── es.json
```

---

## Reglas de trabajo

### Antes de tocar código

1. Leer `context/known-issues.md` — puede haber bugs conocidos relacionados
2. Leer `context/architecture.md` — para no revertir decisiones ya tomadas
3. Si la tarea implica i18n, leer la sección "i18n" en `context/architecture.md`

### Commits

Formato obligatorio, siempre en español:

```
feat: descripción breve
fix: descripción breve
docs: actualizar context/ si cambia arquitectura
refactor: sin cambios de comportamiento
```

### Lo que NO hacer sin confirmación explícita de Ivan

- Cambiar el sistema de i18n (decisión arquitectural documentada)
- Modificar metadata en `layout.tsx` sin revisar implicaciones SEO
- Agregar dependencias nuevas sin justificar por qué no alcanza lo existente
- Hacer deploy o configurar Netlify (Ivan lo maneja manualmente)
- Cambiar el email de destino en `api/contact/route.ts`
- Migrar de Netlify a cualquier otro servicio
- Tocar `tsconfig.json` sin revisar impacto en build

### Accesibilidad

Todo `<input>` y `<textarea>` necesita `<label>` asociado o `aria-label`. Es deuda técnica pendiente (ver `context/known-issues.md`). Al tocar cualquier formulario, corregirlo en el mismo PR.

---

## Stack fijo

| Área        | Tecnología                  |
| ----------- | --------------------------- |
| Framework   | Next.js 16 (App Router)     |
| UI          | React 19                    |
| Tipado      | TypeScript strict mode      |
| Estilos     | Tailwind CSS 4              |
| Animaciones | Framer Motion               |
| Email       | Resend → ivnvaldz@gmail.com |
| i18n        | Context custom client-side  |
| Deploy      | Netlify                     |
| Linting     | ESLint v9 flat config       |

---

## Archivos de contexto

| Archivo                   | Contenido                                 |
| ------------------------- | ----------------------------------------- |
| `context/PRD.md`          | Objetivos, audiencia, definición de éxito |
| `context/architecture.md` | Decisiones técnicas y sus razones         |
| `context/known-issues.md` | Bugs conocidos y deuda técnica priorizada |
