# PRD

## Producto
Portfolio profesional de Ivan Valdez.

## Objetivo principal
Convertir la sección de proyectos en una experiencia capaz de comunicar profundidad técnica, criterio de producto y calidad de ejecución, sin perder claridad ni simplicidad visual.

## Problema actual
La home muestra proyectos, pero hoy los presenta como tarjetas que derivan directamente a links externos. Eso limita la capacidad del portfolio para:
- explicar contexto de negocio
- mostrar desafíos técnicos
- destacar decisiones de arquitectura
- comunicar impacto real

## Objetivo de esta iteración
Reestructurar la experiencia de proyectos con una base escalable para soportar:
- modal de vista rápida
- página dedicada por proyecto
- transiciones más suaves y visibles
- enfoque mobile first

## Objetivos de negocio
- Mejorar empleabilidad.
- Posicionar mejor proyectos propios con narrativa profesional.
- Dar más protagonismo a casos reales como Alebet Manager.
- Mostrar criterio de diseño, arquitectura y producto.

## Usuario objetivo
- Recruiters técnicos
- Hiring managers
- Clientes potenciales
- Otros desarrolladores o colaboradores técnicos

## Necesidades del usuario
- entender rápido qué hace cada proyecto
- profundizar sólo cuando vale la pena
- navegar bien desde mobile
- percibir calidad visual sin fricción innecesaria

## Alcance incluido
- Rediseño del modelo de datos de proyectos
- Reestructuración de la sección de proyectos
- Base para modal de preview
- Base para rutas dedicadas por proyecto
- Revisión de motion en proyectos
- Revisión mobile first de esa experiencia
- Documentación viva del proyecto
- Memoria persistente con Engram

## Alcance excluido por ahora
- Rebranding completo del portfolio
- CMS
- internacionalización de rutas
- analytics avanzado
- refactor completo de todas las secciones del sitio

## Criterios de éxito
- La arquitectura de proyectos deja de depender de links externos como única salida.
- Existe una sola estrategia clara para modelar contenido de proyectos.
- El sitio queda preparado para sumar case studies sin rehacer la base.
- La experiencia en mobile mejora en jerarquía, lectura e interacción.
- Las decisiones quedan documentadas y recuperables entre sesiones.

## Prioridades
1. Modelo de contenido escalable
2. Arquitectura de UI para proyectos
3. Mobile first
4. Motion y polish visual
5. SEO / metadata por proyecto

## Trade-off elegido
Se prioriza mantenibilidad y escalabilidad por sobre velocidad de implementación inicial.

## Decisión actual
Se eligió la opción B escalable:
- rediseñar contrato de datos
- separar mejor contenido y presentación
- habilitar modal y páginas dedicadas sobre una base mantenible
