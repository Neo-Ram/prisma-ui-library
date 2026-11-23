# Justificación de la paleta accesible para daltonismo

Este documento explica **qué color usa cada variante en cada modo de visión y por qué**. Cada valor fue verificado numéricamente contra WCAG 2.2 en visión normal y bajo simulación de cada tipo de daltonismo, que es el mismo criterio que aplica [whocanuse.com](https://www.whocanuse.com/).

## 1. Criterios de aceptación

| Criterio | Umbral | Norma |
|---|---|---|
| Texto normal | ≥ 4.5:1 | WCAG 1.4.3 (AA) |
| Texto grande (≥ 24px o ≥ 18.66px en negrita) | ≥ 3:1 | WCAG 1.4.3 (AA) |
| Bordes, rellenos, iconos e indicadores de foco | ≥ 3:1 | WCAG 1.4.11 |
| Títulos de `Alert` | ≥ 7.5:1 | WCAG 1.4.6 (AAA) |
| Distinguibilidad entre variantes del mismo modo | ΔE2000 ≥ ~18 bajo la simulación del modo | Criterio propio |
| El color nunca es la única señal | Iconos y texto acompañan al color | WCAG 1.4.1 |

**"Peor caso"** es el mínimo de siete valores:
- el contraste en visión normal;
- el contraste bajo las tres simulaciones de Machado et al. (2009), con severidad 1.0;
- el contraste bajo las tres simulaciones de Wickline/HCIRN, que es el algoritmo que usa whocanuse.com (paquete `color-blind`).

## 2. Los tres tipos de daltonismo

| | Protanopia | Deuteranopia | Tritanopia |
|---|---|---|---|
| Cono ausente | L (onda larga, "rojo") | M (onda media, "verde") | S (onda corta, "azul") |
| Prevalencia aprox. | ~1–1.3 % de los hombres | ~1–1.5 % de los hombres | ~0.001–0.01 %, sin diferencia por sexo |
| Herencia | Ligada al X | Ligada al X | Autosómica dominante (cromosoma 7) |
| Eje que se pierde | Rojo–verde | Rojo–verde | Azul–amarillo |
| Eje que se conserva | Azul ↔ amarillo | Azul ↔ amarillo | Rojo/rosa ↔ cian |
| Punto neutro (se ve gris) | ~492 nm (turquesa) | ~498 nm (verde azulado) | ~570 nm (amarillo) y violeta |
| Cambio de luminancia | Los rojos se ven **mucho más oscuros** | Casi ninguno | Azules y amarillos pierden croma |
| Confusiones típicas | Rojo, verde, marrón y naranja; azul con violeta | Igual que la protanopia | Azul con verde; amarillo con rosa o blanco |

**Qué implica para el diseño:**
1. **Las variantes deben distinguirse por luminosidad y por el eje que se conserva.** Un dicrómata solo dispone de dos dimensiones de color. Por eso en protanopia y deuteranopia se reparten las variantes entre azul, amarillo y distintos niveles de oscuridad; en tritanopia, entre rojo y cian.
2. **El turquesa no sirve para protanopia ni deuteranopia,** porque cae en su punto neutro y se ve gris (ΔE frente a gris de 5–8).
3. **El rojo oscuro funciona bien para una persona protanópica.** Percibe el rojo casi negro, así que el texto blanco sobre rojo *gana* contraste. En cambio, el texto oscuro sobre rojo lo *pierde*.
4. **Hay precedentes.** La paleta de Okabe & Ito / Wong (2011) y los temas de GitHub para protanopia/deuteranopia reemplazan el par rojo/verde por naranja/azul.

## 3. Problemas de la paleta anterior

| Problema | Dato medido |
|---|---|
| Texto blanco sobre el azul primario `#007bff` | 3.98:1 (no cumple AA) |
| Protanopia con un azul "más claro" (`#3399ff`): no tiene base, porque la persona protanópica conserva el cono S | 2.94:1 |
| Fondos amarillo/lima con texto blanco (`#ffd966`, `#a3e635`, `#fbbf24`…) | 1.30–1.77:1 |
| Protanopia: success y warning con el **mismo** color `#ffd966` | ΔE = 0 (indistinguibles) |
| Tritanopia: success `#fbbf24` y warning `#ffb366` | ΔE = 3.3 |
| Danger en rojos claros (`#ff6666`, `#ff8080`) con texto blanco | 2.2–3.7:1 |
| Texto de `Alert` warning `#d97706` | 3.07:1 |
| Errores y campos obligatorios en `#ef4444` | 3.76:1 |
| Bordes de radio y toggle (`#d1d5db`, `#cbd2dd`) | ~1.5:1 (WCAG 1.4.11 pide 3:1) |
| Anillos de foco con `rgba(…, .15)` | Por debajo de 3:1 |

## 4. Decisión por variante

| Variante | Modo | Color | Por qué |
|---|---|---|---|
| primary | normal | `#1c64d7` | Azul de marca oscurecido para que el texto blanco cumpla 4.5:1 incluso en simulación (peor caso 4.62). |
| primary | protanopia | `#2253f0` | La persona protanópica conserva el cono S, así que el azul es su color más fiable (Okabe-Ito). Es saturado, no aclarado, para contrastar con el success oscuro. |
| primary | deuteranopia | `#006ebe` | Cercano al azul de Okabe-Ito (`#0072B2`), oscurecido hasta cumplir el contraste. |
| primary | tritanopia | `#6a45f0` | La persona tritanópica confunde azul con verde. El violeta conserva componente roja y se percibe como azul petróleo, distinto del success. |
| secondary | normal / tritanopia | `#4d4d4d` | Gris acromático: se ve igual en todos los modos. |
| secondary | protanopia / deuteranopia | `#747474` | Gris más claro, para separarlo por luminosidad de success y danger, que en estos modos son oscuros. |
| success | normal | `#397e28` | Verde convencional. |
| success | protanopia / deuteranopia | `#064b69` / `#16505a` | El verde se pierde y el turquesa se ve gris. Se usa azul petróleo **oscuro** (como GitHub y Wong 2011), que se distingue del primary por luminosidad. |
| success | tritanopia | `#258101` | El eje rojo–verde está intacto. El verde se ve turquesa y no se confunde con el rojo. |
| warning | todos | Fondo amarillo/ámbar con texto `#1a1f2b` | Amarillo con negro (convención ISO 3864). En protanopia y deuteranopia el amarillo es el polo conservado. Es la única variante clara, lo que la hace la más reconocible. Sus bordes usan un ámbar oscuro. |
| danger | normal | `#c4284a` | Rojo carmesí. |
| danger | protanopia / deuteranopia | `#7f282e` / `#7e2735` | Se aprovecha que el rojo se percibe oscuro: el peligro es la variante **más oscura**. Se evita el rojo puro, que en estos modos quedaba idéntico al warning (ΔE 0.8). |
| danger | tritanopia | `#8a0700` | El rojo se conserva bien en tritanopia. Se oscurece para separarlo del warning. |

### Distinguibilidad (ΔE2000 mínimo entre las 5 variantes, bajo la simulación del modo)

| Modo | Paleta anterior | Paleta actual |
|---|---|---|
| Normal | 19.0 | **27.8** |
| Protanopia | **0.0** | **20.7** |
| Deuteranopia | 5.0 | **18.8** |
| Tritanopia | 3.3 | **21.0** |

Como referencia, ΔE ≈ 1 apenas se percibe y ΔE ≥ ~20 equivale a colores claramente distintos.

## 5. Tokens por variante

**Significado de cada token:**
- **Fondo / Texto / Hover / Active:** fondo de botones, página activa de `Pagination` y opción seleccionada, con su texto.
- **Strong:** bordes de campos, rellenos (checkbox, radio, toggle, slider, spinner) y anillos de foco. Siempre ≥ 4.5:1 contra blanco.
- **Ink:** texto sobre el tinte claro de hover (en `Breadcrumb`, `Select` y `Pagination`).

**Contraste mostrado:** es el peor caso entre visión normal y las 3 simulaciones de Machado.

### Visión normal

| Variante | Fondo | Texto | Hover | Active | Strong (bordes/rellenos) | Ink (texto sobre tinte) | Contraste texto/fondo (peor caso) | Strong vs blanco (peor caso) |
|---|---|---|---|---|---|---|---|---|
| primary | `#1c64d7` | `#ffffff` | `#1855b7` | `#144697` | `#1c64d7` | `#1959bf` | 4.62:1 | 4.62:1 |
| secondary | `#4d4d4d` | `#ffffff` | `#414141` | `#363636` | `#4d4d4d` | `#4d4d4d` | 8.45:1 | 8.45:1 |
| success | `#397e28` | `#ffffff` | `#306b22` | `#28581c` | `#397e28` | `#347325` | 4.77:1 | 4.77:1 |
| warning | `#f59e0b` | `#1a1f2b` | `#e8950b` | `#dd8d0b` | `#a0600b` | `#8f560a` | 6.57:1 | 4.65:1 |
| danger | `#c4284a` | `#ffffff` | `#a7223f` | `#891c34` | `#c4284a` | `#b02443` | 4.75:1 | 4.75:1 |

### Protanopia

| Variante | Fondo | Texto | Hover | Active | Strong (bordes/rellenos) | Ink (texto sobre tinte) | Contraste texto/fondo (peor caso) | Strong vs blanco (peor caso) |
|---|---|---|---|---|---|---|---|---|
| primary | `#2253f0` | `#ffffff` | `#1d47cc` | `#183aa8` | `#2253f0` | `#1e49d4` | 4.61:1 | 4.61:1 |
| secondary | `#747474` | `#ffffff` | `#636363` | `#515151` | `#747474` | `#686868` | 4.67:1 | 4.67:1 |
| success | `#064b69` | `#ffffff` | `#054059` | `#04354a` | `#064b69` | `#064b69` | 8.76:1 | 8.76:1 |
| warning | `#fbbf24` | `#1a1f2b` | `#edb124` | `#e2a424` | `#a06024` | `#8f5620` | 8.86:1 | 4.63:1 |
| danger | `#7f282e` | `#ffffff` | `#6c2227` | `#591c20` | `#7f282e` | `#7f282e` | 8.43:1 | 8.43:1 |

### Deuteranopia

| Variante | Fondo | Texto | Hover | Active | Strong (bordes/rellenos) | Ink (texto sobre tinte) | Contraste texto/fondo (peor caso) | Strong vs blanco (peor caso) |
|---|---|---|---|---|---|---|---|---|
| primary | `#006ebe` | `#ffffff` | `#005ea2` | `#004d85` | `#006ebe` | `#0061a8` | 4.62:1 | 4.62:1 |
| secondary | `#747474` | `#ffffff` | `#636363` | `#515151` | `#747474` | `#686868` | 4.67:1 | 4.67:1 |
| success | `#16505a` | `#ffffff` | `#13444d` | `#0f383f` | `#16505a` | `#16505a` | 8.45:1 | 8.45:1 |
| warning | `#fbbf24` | `#1a1f2b` | `#edb123` | `#e1a522` | `#9d621e` | `#8c571b` | 8.86:1 | 4.65:1 |
| danger | `#7e2735` | `#ffffff` | `#6b212d` | `#581b25` | `#7e2735` | `#7e2735` | 8.51:1 | 8.51:1 |

### Tritanopia

| Variante | Fondo | Texto | Hover | Active | Strong (bordes/rellenos) | Ink (texto sobre tinte) | Contraste texto/fondo (peor caso) | Strong vs blanco (peor caso) |
|---|---|---|---|---|---|---|---|---|
| primary | `#6a45f0` | `#ffffff` | `#5a3bcc` | `#4a30a8` | `#6a45f0` | `#5f3ed8` | 4.71:1 | 4.71:1 |
| secondary | `#4d4d4d` | `#ffffff` | `#414141` | `#363636` | `#4d4d4d` | `#4d4d4d` | 8.45:1 | 8.45:1 |
| success | `#258101` | `#ffffff` | `#1f6e01` | `#1a5a01` | `#258101` | `#217401` | 4.67:1 | 4.67:1 |
| warning | `#f5b941` | `#1a1f2b` | `#e5ae3e` | `#d7a43b` | `#8a6d2c` | `#7c6228` | 8.37:1 | 4.69:1 |
| danger | `#8a0700` | `#ffffff` | `#750600` | `#610500` | `#8a0700` | `#8a0700` | 8.59:1 | 8.59:1 |

### Alert y Tooltip

| Modo | Variante | Fondo alert | Texto | Título | Borde/icono | Tooltip (texto blanco) |
|---|---|---|---|---|---|---|
| Visión normal | primary | `#e8f0fb` | `#1752b1` (5.52) | `#12418d` (7.54) | `#1c64d7` (4.03) | `#1c64d7` (4.62) |
| Visión normal | secondary | `#ededed` | `#4d4d4d` (7.22) | `#484848` (7.81) | `#4d4d4d` (7.22) | `#4d4d4d` (8.45) |
| Visión normal | success | `#ebf2ea` | `#306a22` (5.51) | `#26541b` (7.53) | `#397e28` (4.20) | `#397e28` (4.77) |
| Visión normal | warning | `#f6efe7` | `#844f09` (5.57) | `#6a3f07` (7.51) | `#a0600b` (4.10) | `#a0600b` (4.65) |
| Visión normal | danger | `#f9eaed` | `#a3213d` (5.53) | `#821b31` (7.51) | `#c4284a` (4.11) | `#c4284a` (4.75) |
| Protanopia | primary | `#e9eefe` | `#1c44c6` (5.50) | `#16369d` (7.57) | `#2253f0` (4.02) | `#2253f0` (4.61) |
| Protanopia | secondary | `#f1f1f1` | `#5f5f5f` (5.65) | `#4b4b4b` (7.72) | `#747474` (4.14) | `#747474` (4.67) |
| Protanopia | success | `#e6edf0` | `#064b69` (7.45) | `#064a68` (7.56) | `#064b69` (7.45) | `#064b69` (8.76) |
| Protanopia | warning | `#f6efe9` | `#844f1e` (5.55) | `#693f18` (7.54) | `#a06024` (4.09) | `#a06024` (4.63) |
| Protanopia | danger | `#f2eaea` | `#7f282e` (7.15) | `#7a262c` (7.53) | `#7f282e` (7.15) | `#7f282e` (8.43) |
| Deuteranopia | primary | `#e6f1f9` | `#005a9c` (5.54) | `#00487c` (7.51) | `#006ebe` (4.04) | `#006ebe` (4.62) |
| Deuteranopia | secondary | `#f1f1f1` | `#5f5f5f` (5.65) | `#4b4b4b` (7.72) | `#747474` (4.14) | `#747474` (4.67) |
| Deuteranopia | success | `#e8eeef` | `#16505a` (7.25) | `#154d57` (7.58) | `#16505a` (7.25) | `#16505a` (8.45) |
| Deuteranopia | warning | `#f5efe9` | `#825119` (5.52) | `#674014` (7.56) | `#9d621e` (4.09) | `#9d621e` (4.65) |
| Deuteranopia | danger | `#f2e9eb` | `#7e2735` (7.18) | `#792533` (7.56) | `#7e2735` (7.18) | `#7e2735` (8.51) |
| Tritanopia | primary | `#f0ecfe` | `#5839c7` (5.51) | `#462e9e` (7.54) | `#6a45f0` (4.07) | `#6a45f0` (4.71) |
| Tritanopia | secondary | `#ededed` | `#4d4d4d` (7.22) | `#484848` (7.81) | `#4d4d4d` (7.22) | `#4d4d4d` (8.45) |
| Tritanopia | success | `#e9f2e6` | `#1f6b01` (5.50) | `#185501` (7.51) | `#258101` (4.09) | `#258101` (4.67) |
| Tritanopia | warning | `#f3f0ea` | `#735a25` (5.55) | `#5b481d` (7.53) | `#8a6d2c` (4.13) | `#8a6d2c` (4.69) |
| Tritanopia | danger | `#f3e6e6` | `#8a0700` (7.12) | `#840700` (7.53) | `#8a0700` (7.12) | `#8a0700` (8.59) |

## 6. Otros colores fijos

| Uso | Color | Contraste |
|---|---|---|
| Errores y marca de obligatorio | `#b91c1c` | 5.44:1 sobre blanco |
| Label estático de `Input` | `#4b5563` | 7.39:1 |
| Bordes por defecto de campos, radio, toggle y pista de slider | `#6b7280` | 4.76:1 |
| Knob del toggle apagado | `#6b7280` | 4.03:1 sobre la pista `#e9ecf1` |
| Texto deshabilitado de `Breadcrumb` | `#6b7280` | 4.76:1 |

## 7. Cómo verificarlo

1. Ejecuta `npm run dev`.
2. Abre `http://localhost:5173/audit.html`. La página renderiza los 13 componentes en las 60 combinaciones (5 variantes × 4 modos de visión × 3 modos de accesibilidad). Puedes filtrar con `?cv=protanopia&a11y=default`.
3. Pasa Lighthouse (categoría Accessibility) o axe DevTools sobre esa página y sobre la demo (`/`).

Resultado al cierre de esta revisión:
- Lighthouse Accessibility: **100/100** en `/` y en `/audit.html`.
- axe-core 4.10: **0 violaciones** (reglas WCAG 2.2 AA y best-practice).
- 1 985 textos verificados con simulación de daltonismo: 0 por debajo de 4.5:1.

**Limitaciones:**
- Las simulaciones modelan dicromacia total. Las anomalías tricromáticas, que son más frecuentes, quedan entre la visión normal y el modo dicrómata.
- Los fondos de `Alert` son tintes casi blancos y se parecen entre sí. En `Alert`, la distinción la dan el borde, el título y el icono.

## Referencias

- Machado, Oliveira & Fernandes (2009). *A Physiologically-based Model for Simulation of Color Vision Deficiency*. IEEE TVCG 15(6). https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html
- Brettel, Viénot & Mollon (1997), JOSA A 14(10); Viénot, Brettel & Mollon (1999), Color Res. Appl. 24(4).
- Wong, B. (2011). *Points of view: Color blindness*. Nature Methods 8:441. https://www.nature.com/articles/nmeth.1618
- Okabe & Ito, *Color Universal Design*. https://jfly.uni-koeln.de/color/
- Paul Tol, *Colour schemes*. https://personal.sron.nl/~pault/
- GitHub, temas para daltonismo: https://github.blog/changelog/2022-04-19-protanopia-deuteranopia-colorblind-themes-beta/
- whocanuse (algoritmo de simulación): https://github.com/CoreyGinnivan/whocanuse
- WCAG 2.2: [Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- Sharma, Wu & Dalal (2005). *The CIEDE2000 color-difference formula*. Color Res. Appl. 30(1).
