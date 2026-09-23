# Design System: Aprende Kankuamo

## 1. Visual Theme & Atmosphere
Una interfaz educativa cálida y confiable — como un cuaderno de campo bien cuidado
en la Sierra Nevada de Santa Marta, no un folleto turístico. Fondo color arena/lino,
tinta cacao profundo (nunca negro puro), un único acento ocre-terracota para la
acción principal y un verde de montaña reservado exclusivamente para el progreso
dominado. Densidad "Daily App Balanced" (las lecciones se leen como tarjetas de
estudio, no como una lista densa). Variación moderada: las pantallas de
autenticación se mantienen centradas por convención de uso, pero las grillas de
palabras usan espaciado asimétrico y profundidad de tarjeta real. Movimiento
sutil tipo resorte en hover/focus, entrada escalonada de tarjetas — nunca CSS
genérico "pop-in" instantáneo.

## 2. Color Palette & Roles
- **Arena Cálida** (#F6EFE2) — Fondo principal de la página (lino/algodón)
- **Superficie Marfil** (#FFFCF6) — Fondo de tarjetas e inputs
- **Cacao Profundo** (#2B2117) — Texto primario, títulos (Zinc-950 cálido, nunca #000)
- **Taupe Cálido** (#7A6A55) — Texto secundario, ayudas, metadatos
- **Borde Lino** (rgba(43,33,23,0.14)) — Bordes estructurales de 1px
- **Ocre Terracota** (#B5602C) — Único acento: CTA primario, focus ring, enlaces activos
- **Verde Sierra** (#4B6B4A) — Reservado solo para estado "Dominado" / progreso logrado
- **Rojo Barro** (#A6433D) — Errores de formulario (desaturado, no rojo semáforo)
(Máx. 1 acento funcional para acción. Saturación < 80%. Sin morado/neón.)

## 3. Typography Rules
- **Display (títulos, logo):** `Fraunces` — serif moderna con carácter cálido y
  editorial, track-tight, para h1/h2 y el nombre de la app. No es un serif
  genérico (no Georgia/Times).
- **UI / Body:** `Outfit` — geométrica, muy legible en pantalla, para párrafos,
  botones, inputs, navegación. Reemplaza a Inter.
- **Mono:** no aplica (no hay datos tabulares de alta densidad en esta app).
- **Banned:** Inter, Times New Roman, Georgia, Garamond, Palatino.

## 4. Component Stylings
- **Botones:** Relleno sólido ocre para la acción primaria, esquinas de 0.75rem,
  sin glow neón. Feedback táctil: `translateY(1px)` en `:active`. Botón
  secundario tipo ghost con borde lino. Botón de cerrar sesión/peligro en texto
  taupe que se tiñe de rojo barro al hover, sin gritar visualmente.
- **Tarjetas (lecciones y palabras):** Fondo marfil, radio 1rem, sombra difusa
  teñida de cacao (no gris genérico), borde lino de 1px. Elevación sutil y
  `translateY(-2px)` en hover. En LeccionDetalle cada palabra es su propia
  tarjeta con la palabra nativa en Fraunces grande y acento ocre, la traducción
  debajo en taupe, badge de dificultad y el botón "Dominado" alineado a la
  derecha; al marcar, la tarjeta adopta borde/ícono verde sierra.
- **Inputs:** Etiqueta encima, fondo marfil, borde lino, radio 0.6rem, anillo de
  foco ocre translúcido. Texto de error debajo, en rojo barro.
- **Select (elegir lección):** mismo tratamiento que input, con flecha custom
  sutil, altura de toque ≥ 44px.
- **Empty/loading:** mensaje compuesto centrado en tarjeta fantasma, no spinner
  genérico.

## 5. Layout Principles
- Contenedor máximo de 1080px centrado, con relleno lateral generoso.
- Grillas de tarjetas con CSS Grid `auto-fill`/`minmax`, nunca cálculos con
  `calc()` porcentual.
- Login permanece centrado (convención de auth). Lecciones/LeccionDetalle usan
  encabezado alineado a la izquierda + grilla de tarjetas, evitando el look de
  "3 columnas iguales" forzado — el grid se adapta al contenido real.
- Altura completa vía `min-height: 100dvh`, nunca `100vh` a secas.

## 6. Responsive Rules
- Colapso mobile-first por debajo de 640px: todo a una columna, topbar se
  apila verticalmente.
- Sin scroll horizontal en ningún viewport.
- Tipografía con `clamp()` para h1/h2. Cuerpo mínimo 1rem.
- Objetivos táctiles mínimo 44px (botones, opciones de select).
- Espaciado vertical entre secciones con `clamp(1.5rem, 5vw, 3rem)`.

## 7. Motion & Interaction
- Transiciones con curva tipo resorte suave: `cubic-bezier(0.22, 1, 0.36, 1)`,
  180–240ms. Nunca `linear`.
- Entrada escalonada de tarjetas (`animation-delay` incremental por
  `nth-child`) al cargar lecciones/palabras — nunca aparición instantánea en
  bloque.
- Animar solo `transform` y `opacity`.

## 8. Anti-Patterns (Banned)
Sin emojis decorativos en la UI (los que ya existen en datos/checks del código
no se tocan), sin Inter, sin serif genérico, sin negro puro, sin glow neón,
sin acentos morados, sin degradados de texto, sin cursores custom, sin
tarjetas superpuestas, sin nombres de marcador de posición genéricos, sin
clichés de copywriting ("Eleva tu aprendizaje", "Desbloquea"), sin spinners
circulares genéricos.
