# Portfolio Roadmap

Ideas y funcionalidades para implementar en futuras versiones.

---

## 1. Modo Oscuro / Sepia

**Prioridad:** Alta
**Complejidad:** Baja

- [ ] Toggle de tema (light / dark / sepia)
- [ ] Detectar preferencia del sistema (`prefers-color-scheme`)
- [ ] Guardar preferencia en `localStorage`
- [ ] Variables CSS para cada tema
- [ ] Transición suave entre temas

**Opciones de implementación:**
- CSS custom properties + JS vanilla
- Botón en el header o floating

---

## 2. Traducción (i18n)

**Prioridad:** Media
**Complejidad:** Media

- [ ] Soporte para español e inglés
- [ ] Switch de idioma visible
- [ ] Guardar preferencia en `localStorage`
- [ ] Detectar idioma del navegador

**Opciones de implementación:**
- `i18next` - librería liviana
- JSON con textos + JS vanilla
- Archivos separados por idioma

**Textos a traducir:**
- Navegación
- Títulos de secciones
- Descripciones de proyectos
- Sección de contacto

---

## 3. Backend para Proyectos

**Prioridad:** Media
**Complejidad:** Alta

- [ ] Panel de administración
- [ ] CRUD de proyectos
- [ ] Subida de imágenes
- [ ] Ordenar proyectos

**Opciones de implementación:**

| Opción | Pros | Contras |
|--------|------|---------|
| JSON en GitHub | Simple, gratis, versionado | Edición manual |
| Notion API | UI amigable, gratis | Dependencia externa |
| Contentful | CMS completo, CDN | Límite en plan free |
| Strapi | Open source, flexible | Requiere hosting |
| Node + MongoDB | Control total | Más desarrollo |

**Estructura de proyecto:**
```json
{
  "id": "1",
  "title": "Tasty",
  "description": "...",
  "url": "https://...",
  "icon": "plato.svg",
  "color": "#224953",
  "tags": ["HTML", "SASS", "JS"],
  "featured": true
}
```

---

## 4. Formulario de Contacto

**Prioridad:** Alta
**Complejidad:** Baja

- [ ] Campos: nombre, email, mensaje
- [ ] Validación de formulario
- [ ] Feedback visual de envío
- [ ] Protección anti-spam

**Opciones de implementación:**
- **Formspree** - gratis hasta 50 envíos/mes
- **Netlify Forms** - si hosteas en Netlify
- **EmailJS** - envía directo desde frontend
- **Web3Forms** - gratis, sin registro

---

## 5. Integraciones de Comunicación

**Prioridad:** Baja
**Complejidad:** Baja

- [ ] Links a redes sociales
- [ ] Widget de Calendly para agendar llamadas
- [ ] WhatsApp Business link
- [ ] Discord server invite

**Redes a considerar:**
- LinkedIn
- GitHub (ya está)
- Twitter/X
- Instagram
- Dev.to
- CodePen

---

## 6. Otras Mejoras Futuras

### Performance
- [ ] Minificar CSS/JS en producción
- [ ] Optimizar imágenes (WebP)
- [ ] Service Worker para offline

### SEO
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Schema markup (JSON-LD)

### Analytics
- [ ] Google Analytics o Plausible
- [ ] Eventos de click en proyectos

### UX
- [ ] Animaciones de entrada (scroll reveal)
- [ ] Skeleton loading para proyectos
- [ ] Página 404 personalizada

---

## Orden sugerido de implementación

1. Modo oscuro/sepia
2. Formulario de contacto
3. Links a redes sociales
4. Traducción i18n
5. Backend para proyectos

---

*Última actualización: Enero 2026*
