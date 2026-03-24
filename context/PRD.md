# PRD — Ivan Valdez Portfolio

**Versión:** 2.1  
**Última actualización:** Marzo 2026  
**Owner:** Ivan Valdez

---

## Qué es

Portfolio personal de Ivan Valdez, desarrollador frontend con orientación full-stack. Es la herramienta principal de presentación profesional ante recruiters y potenciales empleadores.

No es un blog, no es una app SaaS, no es un proyecto técnico complejo. Es una **tarjeta de presentación interactiva con código real detrás**.

---

## Problema que resuelve

Un recruiter que recibe el CV de Ivan necesita, en menos de 5 minutos, poder responder:

1. ¿Qué tecnologías usa?
2. ¿Tiene proyectos reales para ver?
3. ¿Cómo lo contacto ahora mismo?
4. ¿Parece serio o es un template?

El portfolio existe para que esas 4 preguntas tengan respuesta clara antes de que el recruiter cierre la pestaña.

---

## Audiencia

### Primaria — Recruiter hispanohablante
- Lee el portfolio en español
- No necesariamente técnico
- Tiempo de atención: 2 a 5 minutos
- Objetivo: encontrar proyectos, entender el perfil, contactar

### Secundaria — Recruiter o desarrollador angloparlante
- Lee el portfolio en inglés via el switcher
- Más probable que inspeccione el código o Lighthouse
- Objetivo: validar que el stack es real y el código es prolijo

### No es audiencia
- Usuarios finales de productos
- Personas sin contexto de tech

---

## Objetivos medibles

| Objetivo | Métrica | Target |
|----------|---------|--------|
| Contacto fácil | Formulario y WhatsApp visibles | Sin scroll en mobile |
| Proyectos legibles | Proyectos con URL activa | Mínimo 3 |
| Performance | Lighthouse Performance | ≥ 90 |
| Accesibilidad | Lighthouse Accessibility | ≥ 90 |
| SEO | Lighthouse SEO | ≥ 90 |
| Carga inicial | LCP | < 2.5s en Netlify |

---

## Funcionalidades actuales (v2.1)

- Secciones: Header, Banner/Hero, About, ProjectGrid, Contact
- Dark / Light mode con next-themes
- Bilingüe ES/EN con i18n context custom (client-side)
- Formulario de contacto con Resend → ivnvaldz@gmail.com
- Botón WhatsApp flotante
- Scroll-to-top
- Animaciones con Framer Motion
- SEO: Open Graph, JSON-LD, sitemap, robots.txt
- 404 personalizada
- Responsive completo

---

## Backlog priorizado

Ordenado por impacto en audiencia primaria:

1. **Labels de accesibilidad** en formulario — bajo costo, alto impacto Lighthouse
2. **Validación con zod** en `api/contact/route.ts` — producción real
3. **Rate limiting** en endpoint de contacto — anti-spam
4. **Metadata dinámica por idioma** en `layout.tsx` — SEO en español
5. **Testimonios** — sección con opiniones reales
6. **Blog/notas** — solo si hay contenido real para publicar

---

## Fuera de scope

- CMS externo — overkill para este volumen
- Base de datos — no hay datos dinámicos que lo justifiquen
- Autenticación — no hay área privada
- Migración a Vercel — Netlify funciona, no es prioridad
- PWA / Service Worker — no agrega valor para esta audiencia
- Tests automatizados — futuro

---

## Definición de "listo para mostrar"

- [ ] Lighthouse ≥ 90 en Performance, Accessibility y SEO
- [ ] Formulario de contacto entrega email a ivnvaldz@gmail.com
- [ ] WhatsApp abre con mensaje pre-armado correcto
- [ ] Todos los proyectos tienen URL activa
- [ ] Dark mode sin flash al cargar
- [ ] Sin `console.error` en producción
- [ ] Formulario con labels accesibles
