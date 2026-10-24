# Bitácora ADSO — Proyecto web en HTML

Transformación de la bitácora de seguimiento en Excel (validada por el instructor) en un sitio web estático, accesible y semántico, hecho solo con HTML (más CSS y un script mínimo de filtrado).

- **Aprendiz:** Silvia Fernanda Osorio Vargas
- **Programa:** Análisis y Desarrollo de Software · **Ficha:** 3381732 · **Periodo:** 3 trimestre

## Estructura del proyecto
| Archivo | Libro de Excel | Contenido |
|---|---|---|
| `index.html` | Información | Datos del programa, competencia, aprendiz, ficha y periodo |
| `reglas.html` | Reglas | 4 reglas de diligenciamiento y guía de llenado por columna |
| `trazabilidad.html` | Trazabilidad | Tabla de actividades con filtro de texto |
| `styles.css` | — | Estilos (incluye modo oscuro y foco visible) |
| `filtro.js` | — | Filtro de filas de la tabla de trazabilidad |
| `acuerdo_trabajo.md` | — | Acuerdo de trabajo del equipo |

Las tres vistas se conectan con un `<nav>` con enlaces `<a>`.

## Semántica y accesibilidad
- `lang="es"`, `<meta viewport>`, `<title>` único por página.
- Etiquetas semánticas: `header`, `nav`, `main`, `section`, `footer`.
- Enlace "Saltar al contenido" (skip link).
- `aria-current="page"` en el enlace activo y `aria-label` en el `<nav>`.
- Tablas con `<caption>`, `<thead>`, `<tbody>` y `scope` en los encabezados.
- Fechas con `<time datetime>`.
- Filtro con `<label for>` asociado a `<input id>`, `aria-controls` y mensaje `role="status"`.
- Contraste adecuado, foco visible y diseño responsive.

## Publicación
Sitio publicado con GitHub Pages: https://karendayana07.github.io/Bitacora_Git/
