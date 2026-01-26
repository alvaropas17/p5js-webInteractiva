# Portfolio Interactivo con P5.js

Página web HTML5 que integra elementos web convencionales con un canvas P5.js interactivo de fondo.

## 🎨 Características

### Integración Web + P5.js
- **Canvas de fondo**: Sistema de partículas interactivas que reacciona al movimiento del ratón
- **Contenido flotante**: DIVs con z-index superior que flotan sobre el canvas
- **Diseño responsive**: Adaptable a diferentes tamaños de pantalla
- **Efectos visuales**: Backdrop blur y transparencias para integración natural

### Elementos HTML5 Incluidos

#### Navegación
- Menú sticky con efecto glassmorphism
- Enlaces con animación hover
- Logo con estilo moderno

#### Secciones
1. **Hero**: Llamada a la acción principal
2. **Servicios**: Grid de tarjetas con iconos
3. **Portfolio**: Galería de proyectos con imágenes placeholder
4. **Contacto**: Formulario funcional con campos de texto y textarea
5. **Footer**: Información y atribución

### Interactividad P5.js

#### Efectos del Ratón
- **Movimiento**: Las partículas son atraídas hacia el cursor
- **Clic**: Añade nuevas partículas en la posición del ratón
- **Clic sostenido**: Cambia a modo repulsión (las partículas huyen)
- **Efecto glow**: Halo luminoso alrededor del cursor

#### Características Visuales
- Partículas conectadas por líneas cuando están cerca
- Colores dinámicos basados en la velocidad
- Efecto de brillo en partículas cercanas al ratón
- Movimiento orgánico con física básica
- Límite automático en los bordes del canvas

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS, gradientes, backdrop-filter
- **JavaScript**: Lógica de interacción
- **P5.js v1.7.0**: Librería de visualización creativa

## 📚 Créditos y Fuentes

### Inspiración
El sistema de partículas está inspirado en ejemplos comunes de OpenProcessing.org, específicamente en sistemas de partículas con conexiones visuales.

### Modificaciones Realizadas
1. ✨ Sistema de atracción/repulsión hacia el ratón
2. 🎭 Efecto de onda que emana desde el cursor
3. 🌈 Colores dinámicos basados en velocidad de partículas
4. 💫 Gradientes de opacidad en las conexiones
5. ✨ Efecto glow en partículas cercanas al ratón
6. ⚡ Optimización de rendimiento
7. 🖱️ Añadir partículas con clic del ratón
8. 🔄 Redimensionamiento automático del canvas

## 🚀 Cómo Usar

1. Abre `index.html` en un navegador moderno
2. Mueve el ratón sobre la página para ver las partículas reaccionar
3. Haz clic para añadir nuevas partículas
4. Mantén presionado el clic para activar el modo repulsión
5. Navega por las diferentes secciones usando el menú

## 📱 Responsive Design

La página se adapta a diferentes tamaños de pantalla:
- **Desktop**: Layout completo con grid de múltiples columnas
- **Tablet**: Grid adaptativo con menos columnas
- **Mobile**: Layout de una sola columna con menú compactado

## 🎯 Cumplimiento de Requisitos

✅ Página HTML5 completa
✅ Elementos web convencionales: texto, imágenes (placeholder), formularios, menús
✅ Elementos ubicados en DIVs correspondientes
✅ Canvas P5.js integrado de forma natural
✅ Interacción con el ratón
✅ Animación y efectos visuales interactivos
✅ Código modificado con mejoras sobre ejemplos base
✅ Fuentes citadas en el código y README

## 🎨 Paleta de Colores

- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Background: Gradiente oscuro `#1e1e2e` a `#2a2a40`
- Text: Blanco con variaciones de opacidad

## 📄 Estructura de Archivos

```
p5js-v2/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── sketch.js           # Código P5.js
└── README.md           # Documentación
```

---

**Desarrollado como proyecto educativo - 2026**
