# Portfolio Interactivo con P5.js

Página web HTML5 que integra elementos web convencionales con un canvas P5.js interactivo de fondo.

## Características

### Integración Web + P5.js
- **Canvas de fondo**: Sistema de partículas interactivas que reacciona al movimiento del ratón
- **Contenido flotante**: DIVs con z-index superior que flotan sobre el canvas
- **Diseño responsive**: Adaptable a diferentes tamaños de pantalla
- **Efectos visuales**: Backdrop blur y transparencias para integración natural

### Elementos HTML5 Incluidos
# RocketLaunch — Web Interactiva con P5.js

Pequeña web multimedia que combina contenido HTML5 (texto, imágenes, formularios, menús) con un canvas P5.js interactivo de fondo.

## Resumen rápido

- Tema: lanzamientos de cohetes (sección "Próximos lanzamientos", galería de imágenes y lista informativa).
- Fondo: canvas P5.js con sistema de partículas tipo "estrellas" que reacciona al ratón.
- Diseño: responsive, contenido flotante sobre el canvas.

## Características principales

- Integración Web + P5.js: el canvas actúa como fondo interactivo mientras el contenido (DIVs) flota encima (z-index mayor).
- Interacción con el ratón en el canvas: partículas atraídas/repelidas por el cursor, clic para añadir partículas y efecto glow.
- Sección "Próximos lanzamientos": lista informativa centrada y galería de cohetes con nombre y bandera por cohete.
- Formulario de aportes: formulario para que colaboradores propongan código, diseño, pruebas, documentación o ideas.
- Archivos de estilos separados: `css/styles.css`, `css/sections.css` y `css/custom-styles.css` contienen los estilos.

## Archivos relevantes

- `index.html` — Estructura HTML de la web (secciones: Hero, Lanzamientos, Portfolio, Contacto, Footer).
- `sketch.js` — Código P5.js: sistema de partículas interactivo. Contiene comentario con la referencia original y lista de modificaciones.
- `css/styles.css`, `css/sections.css` — Estilos globales del proyecto.
- `css/custom-styles.css` — Estilos añadidos para la galería, lanzamientos y ajustes recientes.
- `img/` — Imágenes de cohetes (falcon9.png, Ariane6.png, Long March 5B.png, GSLV Mk III.png, y el logo).

## Créditos y modificaciones

El sistema de partículas está inspirado por ejemplos en OpenProcessing.org y la referencia original está citada dentro de `sketch.js`.
En `sketch.js` se documentan las modificaciones realizadas, entre ellas:

1. Atracción/repulsión al cursor
2. Efecto de onda desde el cursor
3. Colores dinámicos para partículas (ahora estilo "estrellas")
4. Gradientes/alpha en conexiones
5. Glow y efectos de brillo
6. Añadir partículas con clic
7. Optimización y ajuste de parámetros

## Cómo ejecutar (local)

1. Abrir `index.html` en un navegador moderno (Chrome, Edge, Firefox). No requiere servidor para pruebas básicas.

Opcional — servir desde un servidor local (recomendado para desarrollo):

```bash
# con Python 3
python -m http.server 8000

# o con Node.js (si tienes http-server instalado)
npx http-server -p 8000
```

Luego abrir `http://localhost:8000` en tu navegador.

## Notas sobre el formulario

- El formulario de "Aportes" recoge: Nombre, Email, Tipo de aporte y Sugerencias.
- Actualmente envía mediante POST si integras un endpoint; si quieres puedo añadir almacenamiento local (guardar en `localStorage` o simular envío a un archivo JSON).

## Cumplimiento de requisitos de la tarea

- Página HTML5 con elementos convencionales: ✅
- Canvas P5.js integrado y aportando espectacularidad: ✅
- Interacción con ratón en canvas: ✅
- Código P5.js referenciado y modificado (cita incluida): ✅
- Diseño con DIVs flotando sobre el canvas: ✅

## Cambios recientes notables

- Tema actualizado a "lanzamientos de cohetes" con galería y lista informativa.
- Paleta visual ajustada hacia tonos azules espaciales y acentos en amarillo.
- Partículas recoloreadas a tonos blanco/amarillo tipo "estrellas".
- Se reemplazó la sección de contacto por un formulario de aportes y se ajustó su layout para apilar el formulario debajo del texto y limitar su ancho.

## Siguientes pasos recomendados (opcional)

- Añadir envío real del formulario (endpoint) o guardar aportes en `localStorage`/archivo JSON.
- Ajustar accesibilidad (labels/aria) y validación del formulario.
- Añadir tests básicos o scripts de lint CSS/JS.

## Contacto

Si quieres que conecte el formulario a un endpoint, almacene los aportes localmente, o adapte colores/anchuras, dime qué prefieres y lo implemento.

---

_Actualizado: Feb 2026_
