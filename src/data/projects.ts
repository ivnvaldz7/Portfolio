import type { LocalizedText, Project } from "@/types";

type SupportedLocale = "en" | "es";

const t = (en: string, es: string): LocalizedText => ({ en, es });

export const projects: Project[] = [
  {
    id: "alebet-manager",
    slug: "alebet-manager",
    title: t("Alebet Manager", "Alebet Manager"),
    subtitle: t(
      "Internal logistics system for stock, traceability and operations.",
      "Sistema interno de logística para stock, trazabilidad y operaciones.",
    ),
    summary: t(
      "A business-facing platform for inventory movement, operational visibility and traceable workflows.",
      "Una plataforma orientada al negocio para movimientos de inventario, visibilidad operativa y flujos trazables.",
    ),
    role: t(
      "Product thinking, frontend architecture and workflow design.",
      "Pensamiento de producto, arquitectura frontend y diseño de flujo.",
    ),
    year: 2025,
    featured: true,
    status: "live",
    icon: "/icons/tracking-app.png",
    stack: ["Next.js", "TypeScript", "Tailwind", "Zod"],
    theme: {
      from: "hsl(163, 57%, 25%)",
      to: "hsl(193, 54%, 18%)",
      glow: "hsla(161, 49%, 45%, 0.4)",
    },
    links: { live: "https://alebet-manager.netlify.app" },
    previewBullets: [
      t("Built around real internal operations.", "Construido alrededor de operaciones internas reales."),
      t("Prioritizes traceability and speed.", "Prioriza trazabilidad y velocidad."),
      t("Acts as the flagship case study.", "Funciona como caso de estudio principal."),
    ],
    metrics: [
      { label: t("Focus", "Foco"), value: t("Stock + movements", "Stock + movimientos") },
      { label: t("Audience", "Usuarios"), value: t("Internal teams", "Equipos internos") },
      { label: t("Priority", "Prioridad"), value: t("Traceability", "Trazabilidad") },
    ],
    sections: {
      overview: {
        title: t("Operational clarity first", "Claridad operativa primero"),
        body: t(
          "Alebet Manager is framed as practical software for day-to-day control, not a generic dashboard.",
          "Alebet Manager está planteado como software práctico para control diario, no como un dashboard genérico.",
        ),
      },
      challenge: {
        title: t("The challenge", "El desafío"),
        body: t(
          "The interface had to support frequent operational tasks without losing context or history.",
          "La interfaz debía soportar tareas operativas frecuentes sin perder contexto ni historial.",
        ),
      },
      solution: {
        title: t("The solution", "La solución"),
        body: t(
          "A structured UI with clear hierarchy, reusable patterns and room for future modules.",
          "Una UI estructurada con jerarquía clara, patrones reutilizables y espacio para módulos futuros.",
        ),
      },
      impact: {
        title: t("Why it matters", "Por qué importa"),
        body: t(
          "It shows the kind of business-aware product work the portfolio should lead with.",
          "Muestra el tipo de trabajo orientado al negocio con el que el portfolio debería abrir.",
        ),
      },
    },
    outcomes: [
      t("Created a stronger flagship project.", "Creó un proyecto insignia más sólido."),
      t("Established a reusable operational UI language.", "Estableció un lenguaje reutilizable para UI operativa."),
      t("Supports a richer case-study narrative.", "Permite una narrativa de caso de estudio más rica."),
    ],
  },
  {
    id: "clinicpay",
    slug: "clinicpay",
    title: t("ClinicPay", "ClinicPay"),
    subtitle: t(
      "Billing and payment platform for clinic workflows.",
      "Plataforma de facturación y pagos para flujos de clínicas.",
    ),
    summary: t(
      "A full-stack product centered on payments, billing flow and administrative clarity.",
      "Un producto full-stack centrado en pagos, flujo de facturación y claridad administrativa.",
    ),
    role: t(
      "Frontend implementation with product-oriented full-stack scope.",
      "Implementación frontend con alcance full-stack orientado a producto.",
    ),
    year: 2025,
    featured: true,
    status: "live",
    icon: "/icons/valid.png",
    stack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    theme: {
      from: "hsl(222, 72%, 28%)",
      to: "hsl(211, 88%, 38%)",
      glow: "hsla(217, 91%, 60%, 0.4)",
    },
    links: { live: "https://clinicpay.netlify.app/" },
    previewBullets: [
      t("Payment flow inside a real product context.", "Flujo de pagos dentro de un contexto de producto real."),
      t("Balances UX clarity with admin density.", "Equilibra claridad UX con densidad administrativa."),
      t("Expands the portfolio beyond pure frontend showcases.", "Expande el portfolio más allá del showcase frontend."),
    ],
    metrics: [
      { label: t("Domain", "Dominio"), value: t("Health admin", "Administración de salud") },
      { label: t("Payments", "Pagos"), value: t("Stripe", "Stripe") },
      { label: t("Type", "Tipo"), value: t("Full-stack app", "App full-stack") },
    ],
    sections: {
      overview: {
        title: t("Administrative software with payment depth", "Software administrativo con profundidad en pagos"),
        body: t(
          "ClinicPay explores how trust, billing state and speed intersect in a healthcare workflow.",
          "ClinicPay explora cómo se cruzan confianza, estado de facturación y velocidad en un flujo de salud.",
        ),
      },
      challenge: {
        title: t("The challenge", "El desafío"),
        body: t(
          "Payment-related interfaces can become dense and confusing very quickly.",
          "Las interfaces ligadas a pagos pueden volverse densas y confusas muy rápido.",
        ),
      },
      solution: {
        title: t("The solution", "La solución"),
        body: t(
          "The product uses clearer hierarchy and state framing so billing tasks stay understandable.",
          "El producto usa mejor jerarquía y encuadre de estados para que la facturación siga siendo comprensible.",
        ),
      },
      impact: {
        title: t("Why it matters", "Por qué importa"),
        body: t(
          "It helps position the portfolio around practical business software with transactional weight.",
          "Ayuda a posicionar el portfolio alrededor de software práctico de negocio con peso transaccional.",
        ),
      },
    },
    outcomes: [
      t("Added payment and backend concerns to the portfolio.", "Sumó pagos y backend al portfolio."),
      t("Reinforced business-focused UX.", "Reforzó la UX orientada al negocio."),
      t("Expanded the product narrative.", "Amplió la narrativa de producto."),
    ],
  },
  {
    id: "checar",
    slug: "checar",
    title: t("ChecAR", "ChecAR"),
    subtitle: t(
      "AI-assisted verification tool for Argentine political content.",
      "Herramienta de verificación asistida para contenido político argentino.",
    ),
    summary: t(
      "A fact-checking workflow that detects claims and contrasts them against official sources in near real time.",
      "Un flujo de fact-checking que detecta afirmaciones y las contrasta contra fuentes oficiales casi en tiempo real.",
    ),
    role: t(
      "Frontend product framing and AI-assisted UX.",
      "Planteo de producto frontend y UX asistida por IA.",
    ),
    year: 2026,
    featured: true,
    status: "live",
    icon: "/icons/checar.svg",
    stack: ["React", "Node.js", "Gemini", "Socket.io", "Vercel"],
    theme: {
      from: "hsl(213, 56%, 22%)",
      to: "hsl(205, 80%, 33%)",
      glow: "hsla(203, 100%, 55%, 0.35)",
    },
    links: { live: "https://checar-dcmq.vercel.app" },
    previewBullets: [
      t("Blends editorial logic with AI-assisted interaction.", "Combina lógica editorial con interacción asistida por IA."),
      t("Frames source comparison as a guided workflow.", "Plantea la comparación de fuentes como un flujo guiado."),
      t("Adds a strong contemporary narrative to the portfolio.", "Aporta una narrativa contemporánea fuerte al portfolio."),
    ],
    metrics: [
      { label: t("Focus", "Foco"), value: t("Fact-checking", "Fact-checking") },
      { label: t("Signals", "Señales"), value: t("Claims + sources", "Afirmaciones + fuentes") },
      { label: t("Realtime", "Tiempo real"), value: t("Socket updates", "Actualizaciones por socket") },
    ],
    sections: {
      overview: {
        title: t("Editorial support through assisted verification", "Soporte editorial mediante verificación asistida"),
        body: t(
          "ChecAR turns AI output into a practical editorial workflow instead of a black-box demo.",
          "ChecAR convierte la salida de IA en un flujo editorial práctico en lugar de una demo caja negra.",
        ),
      },
      challenge: {
        title: t("The challenge", "El desafío"),
        body: t(
          "Users need to move from article text to verifiable claims without losing trust in the process.",
          "Los usuarios necesitan pasar del texto periodístico a afirmaciones verificables sin perder confianza en el proceso.",
        ),
      },
      solution: {
        title: t("The solution", "La solución"),
        body: t(
          "The interface emphasizes explicit steps, source framing and real-time feedback.",
          "La interfaz enfatiza pasos explícitos, encuadre de fuentes y feedback en tiempo real.",
        ),
      },
      impact: {
        title: t("Why it matters", "Por qué importa"),
        body: t(
          "It shows the ability to work on socially relevant AI-assisted products with real workflow thinking.",
          "Muestra capacidad para trabajar en productos asistidos por IA con relevancia social y lógica de flujo real.",
        ),
      },
    },
    outcomes: [
      t("Introduced an AI-native case study.", "Introdujo un caso de estudio nativo de IA."),
      t("Showed stronger systems thinking.", "Mostró una mirada más sistémica."),
      t("Balanced innovation with user value.", "Equilibró innovación con valor para el usuario."),
    ],
  },
  {
    id: "tasty",
    slug: "tasty",
    title: t("Tasty", "Tasty"),
    subtitle: t(
      "Responsive landing experience built in an early frontend stage.",
      "Experiencia responsive construida en una etapa temprana del frontend.",
    ),
    summary: t(
      "A foundational project focused on responsive layout, visual structure and JavaScript basics.",
      "Un proyecto fundacional enfocado en layout responsive, estructura visual y bases de JavaScript.",
    ),
    role: t(
      "Responsive frontend implementation and interaction basics.",
      "Implementación frontend responsive y bases de interacción.",
    ),
    year: 2025,
    featured: true,
    status: "live",
    icon: "/icons/plato.svg",
    stack: ["HTML", "SASS", "JavaScript"],
    theme: {
      from: "hsl(193, 46%, 23%)",
      to: "hsl(173, 32%, 28%)",
      glow: "hsla(189, 58%, 62%, 0.28)",
    },
    links: { live: "https://ivnvaldz7.github.io/Tasty/" },
    previewBullets: [
      t("Represents the early foundation of responsive work.", "Representa la base temprana del trabajo responsive."),
      t("Useful for the portfolio progression narrative.", "Útil para la narrativa de evolución del portfolio."),
      t("Shows disciplined layout practice.", "Muestra práctica disciplinada de layout."),
    ],
    metrics: [
      { label: t("Stage", "Etapa"), value: t("Foundational", "Fundacional") },
      { label: t("Primary skill", "Habilidad principal"), value: t("Responsive layout", "Layout responsive") },
      { label: t("Type", "Tipo"), value: t("Frontend site", "Sitio frontend") },
    ],
    sections: {
      overview: {
        title: t("A baseline project with learning value", "Un proyecto base con valor de aprendizaje"),
        body: t(
          "Tasty is less about complexity and more about showing progression through responsive implementation.",
          "Tasty trata menos de complejidad y más de mostrar progreso mediante implementación responsive.",
        ),
      },
      challenge: {
        title: t("The challenge", "El desafío"),
        body: t(
          "The key challenge was turning design intent into a clean responsive layout.",
          "El desafío clave era traducir intención de diseño a un layout responsive limpio.",
        ),
      },
      solution: {
        title: t("The solution", "La solución"),
        body: t(
          "The project focused on responsive structure, simple interactions and consistent composition.",
          "El proyecto se enfocó en estructura responsive, interacciones simples y composición consistente.",
        ),
      },
      impact: {
        title: t("Why it matters", "Por qué importa"),
        body: t(
          "It adds historical depth by showing how the work evolved over time.",
          "Aporta profundidad histórica al mostrar cómo evolucionó el trabajo con el tiempo.",
        ),
      },
    },
    outcomes: [
      t("Strengthened responsive discipline.", "Fortaleció la disciplina responsive."),
      t("Acts as an early milestone.", "Funciona como un hito temprano."),
      t("Supports a credible growth narrative.", "Aporta una narrativa de crecimiento creíble."),
    ],
  },
  {
    id: "pokeapi",
    slug: "pokeapi",
    title: t("PokeApi", "PokeApi"),
    subtitle: t(
      "API-driven interaction built on top of a reusable card pattern.",
      "Interacción impulsada por API construida sobre un patrón de tarjeta reutilizable.",
    ),
    summary: t(
      "A playful frontend exercise that turns a static component into a more dynamic interface.",
      "Un ejercicio frontend lúdico que convierte un componente estático en una interfaz más dinámica.",
    ),
    role: t(
      "Component reuse, API integration and UI interaction.",
      "Reutilización de componentes, integración de API e interacción UI.",
    ),
    year: 2025,
    featured: true,
    status: "live",
    icon: "/icons/pokebola.svg",
    stack: ["HTML", "CSS", "JavaScript", "API"],
    theme: {
      from: "hsl(210, 46%, 20%)",
      to: "hsl(358, 56%, 37%)",
      glow: "hsla(10, 84%, 58%, 0.3)",
    },
    links: { live: "https://frontmentorpokeapi.netlify.app/" },
    previewBullets: [
      t("Transforms a static pattern into a data-driven interaction.", "Transforma un patrón estático en una interacción guiada por datos."),
      t("Highlights iteration over starting from zero.", "Destaca iteración por sobre empezar desde cero."),
      t("Bridges static UI and product logic.", "Tiende un puente entre UI estática y lógica de producto."),
    ],
    metrics: [
      { label: t("Pattern", "Patrón"), value: t("Reusable card", "Tarjeta reutilizable") },
      { label: t("Data source", "Fuente de datos"), value: t("Pokemon API", "Pokemon API") },
      { label: t("Intent", "Intención"), value: t("Interaction upgrade", "Mejora de interacción") },
    ],
    sections: {
      overview: {
        title: t("Small project, meaningful transition", "Proyecto pequeño, transición significativa"),
        body: t(
          "PokeApi marks the shift from static composition to data-aware interaction.",
          "PokeApi marca el paso desde composición estática hacia interacción sensible a datos.",
        ),
      },
      challenge: {
        title: t("The challenge", "El desafío"),
        body: t(
          "The goal was to make an existing component feel more alive without overcomplicating it.",
          "El objetivo era hacer que un componente existente se sintiera más vivo sin sobrecomplicarlo.",
        ),
      },
      solution: {
        title: t("The solution", "La solución"),
        body: t(
          "The project layered API behavior on top of a known visual structure.",
          "El proyecto agregó comportamiento de API sobre una estructura visual conocida.",
        ),
      },
      impact: {
        title: t("Why it matters", "Por qué importa"),
        body: t(
          "It demonstrates learning through iteration instead of disposable demos.",
          "Demuestra aprendizaje mediante iteración y no mediante demos descartables.",
        ),
      },
    },
    outcomes: [
      t("Improved confidence with APIs.", "Mejoró la confianza con APIs."),
      t("Showed practical component reuse.", "Mostró reutilización práctica de componentes."),
      t("Added a more dynamic early project.", "Sumó un proyecto temprano más dinámico."),
    ],
  },
  {
    id: "generactiva",
    slug: "generactiva",
    title: t("Géneractiva", "Géneractiva"),
    subtitle: t(
      "A multi-page website from an earlier learning stage.",
      "Un sitio multipágina de una etapa temprana de aprendizaje.",
    ),
    summary: t(
      "One of the first larger websites in the portfolio, valuable as a signal of persistence and scope.",
      "Uno de los primeros sitios más grandes del portfolio, valioso como señal de constancia y alcance.",
    ),
    role: t(
      "Frontend structure, page composition and early project endurance.",
      "Estructura frontend, composición de páginas y resistencia de proyecto temprana.",
    ),
    year: 2025,
    featured: true,
    status: "live",
    icon: "/icons/genero.svg",
    stack: ["HTML", "CSS", "JavaScript"],
    theme: {
      from: "hsl(321, 34%, 26%)",
      to: "hsl(191, 44%, 25%)",
      glow: "hsla(328, 68%, 65%, 0.3)",
    },
    links: { live: "https://g-neractiva.netlify.app/" },
    previewBullets: [
      t("One of the earliest larger-scope efforts.", "Uno de los primeros esfuerzos de mayor alcance."),
      t("Demonstrates persistence across multiple pages.", "Demuestra constancia a través de múltiples páginas."),
      t("Useful for the maturity timeline.", "Útil para la línea de madurez."),
    ],
    metrics: [
      { label: t("Scope", "Alcance"), value: t("Multi-page site", "Sitio multipágina") },
      { label: t("Stage", "Etapa"), value: t("Early portfolio", "Portfolio temprano") },
      { label: t("Value", "Valor"), value: t("Progress marker", "Marcador de progreso") },
    ],
    sections: {
      overview: {
        title: t("Early complexity, useful signal", "Complejidad temprana, señal útil"),
        body: t(
          "Géneractiva helps show the ability to sustain a larger build while foundational skills were still forming.",
          "Géneractiva ayuda a mostrar capacidad para sostener una construcción más grande mientras las habilidades base se consolidaban.",
        ),
      },
      challenge: {
        title: t("The challenge", "El desafío"),
        body: t(
          "Managing multiple pages and preserving consistency was the hard part at that stage.",
          "Gestionar múltiples páginas y preservar consistencia era la parte difícil en esa etapa.",
        ),
      },
      solution: {
        title: t("The solution", "La solución"),
        body: t(
          "The project leaned on page composition discipline and persistence through a broader scope.",
          "El proyecto se apoyó en disciplina de composición y constancia frente a un alcance mayor.",
        ),
      },
      impact: {
        title: t("Why it matters", "Por qué importa"),
        body: t(
          "It contributes evidence of progression instead of showing only polished recent work.",
          "Aporta evidencia de progresión en lugar de mostrar sólo trabajo reciente pulido.",
        ),
      },
    },
    outcomes: [
      t("Built confidence with multi-page structure.", "Construyó confianza con estructura multipágina."),
      t("Added depth to the early timeline.", "Agregó profundidad a la línea temprana."),
      t("Strengthened screen-to-screen consistency.", "Fortaleció la consistencia entre pantallas."),
    ],
  },
  {
    id: "github",
    slug: "github-profile",
    title: t("GitHub", "GitHub"),
    subtitle: t(
      "Public code hub that complements the curated portfolio.",
      "Hub público de código que complementa el portfolio curado.",
    ),
    summary: t(
      "A supporting surface rather than a standalone product, useful for showing continuity of work and experimentation.",
      "Una superficie de apoyo más que un producto autónomo, útil para mostrar continuidad de trabajo y experimentación.",
    ),
    role: t(
      "Code archive, public proof of iteration and engineering habits.",
      "Archivo de código, prueba pública de iteración y hábitos de ingeniería.",
    ),
    year: 2025,
    featured: false,
    status: "live",
    icon: "/icons/github-logo.svg",
    stack: ["GitHub", "Open source workflow"],
    theme: {
      from: "hsl(220, 12%, 14%)",
      to: "hsl(0, 0%, 6%)",
      glow: "hsla(0, 0%, 100%, 0.14)",
      image: "/images/github.png",
    },
    links: { live: "https://github.com/ivnvaldz7" },
    previewBullets: [
      t("Supports the portfolio with repository history.", "Apoya el portfolio con historial de repositorios."),
      t("Useful for technical reviewers.", "Útil para revisores técnicos."),
      t("Works best as a secondary trust surface.", "Funciona mejor como superficie secundaria de confianza."),
    ],
    metrics: [
      { label: t("Type", "Tipo"), value: t("Supporting surface", "Superficie de apoyo") },
      { label: t("Use", "Uso"), value: t("Code visibility", "Visibilidad de código") },
      { label: t("Role", "Rol"), value: t("Trust signal", "Señal de confianza") },
    ],
    sections: {
      overview: {
        title: t("Not a product, still strategic", "No es un producto, sigue siendo estratégico"),
        body: t(
          "GitHub is part of the ecosystem because it exposes the continuity behind the curated case studies.",
          "GitHub forma parte del ecosistema porque expone la continuidad detrás de los case studies curados.",
        ),
      },
      challenge: {
        title: t("The challenge", "El desafío"),
        body: t(
          "GitHub is useful as proof of process, but not enough on its own to tell the full product story.",
          "GitHub es útil como prueba de proceso, pero no alcanza por sí solo para contar toda la historia de producto.",
        ),
      },
      solution: {
        title: t("The solution", "La solución"),
        body: t(
          "Inside the portfolio it works as a complement, not as the main narrative destination.",
          "Dentro del portfolio funciona como complemento y no como destino narrativo principal.",
        ),
      },
      impact: {
        title: t("Why it matters", "Por qué importa"),
        body: t(
          "It gives technical readers an inspection path without weakening the portfolio narrative.",
          "Le da a lectores técnicos un camino de inspección sin debilitar la narrativa del portfolio.",
        ),
      },
    },
    outcomes: [
      t("Improves trust for technical readers.", "Mejora la confianza para lectores técnicos."),
      t("Adds repo-level evidence behind the case studies.", "Agrega evidencia a nivel repositorio detrás de los case studies."),
      t("Should remain a secondary navigation path.", "Debe seguir siendo una vía secundaria de navegación."),
    ],
  },
];

export function getLocalizedText(
  value: LocalizedText,
  locale: SupportedLocale,
): string {
  return value[locale];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
