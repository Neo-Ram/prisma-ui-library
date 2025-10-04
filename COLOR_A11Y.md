# Justificación de colores accesibles para botones

Este archivo documenta la elección de colores para los botones de la librería, especialmente en variantes y modos de daltonismo, siguiendo criterios de accesibilidad (WCAG) y buenas prácticas de UI.

## Azul principal (`primary`)
- **Color base:** #007bff (azul Bootstrap, ampliamente usado en la web por su buen contraste y familiaridad).
- **Protanopia:** #3399ff (azul claro, perceptible para quienes no distinguen bien los rojos).
- **Deuteranopia:** #4f83cc (azul-violeta, mejora la percepción para quienes no distinguen bien los verdes).
- **Tritanopia:** #007bff (el azul original, ya que los tritanopes distinguen bien azules).

## Success
- **Color base:** #1f9d55 (verde accesible, buen contraste con blanco).
- **Protanopia:** #ffd966 (amarillo, ya que los protanopes no distinguen bien los verdes y rojos, el amarillo es más visible).
- **Deuteranopia:** #a3e635 (verde claro, perceptible para quienes no distinguen bien los verdes, pero mantiene contraste).
- **Tritanopia:** #fbbf24 (naranja, ya que los tritanopes no distinguen bien los azules y amarillos, el naranja es más visible).

## Warning
- **Color base:** #f59e0b (amarillo-naranja, buen contraste con texto oscuro).
- **Protanopia:** #ffd966 (amarillo claro, perceptible para protanopes).
- **Deuteranopia:** #ffe066 (amarillo más claro, mejora percepción para deuteranopes).
- **Tritanopia:** #ffb366 (naranja claro, perceptible para tritanopes).

## Danger
- **Color base:** #e11d48 (rojo accesible, buen contraste con blanco).
- **Protanopia:** #ff6666 (rojo claro, perceptible para protanopes).
- **Deuteranopia:** #ff8080 (rojo-rosado, mejora percepción para deuteranopes).
- **Tritanopia:** #ff6666 (rojo claro, perceptible para tritanopes).

## Referencias
- [WebAIM: Color Blindness](https://webaim.org/articles/visual/blindness)
- [ColorBrewer2](https://colorbrewer2.org/)
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Bootstrap Colors](https://getbootstrap.com/docs/5.0/customize/color/)

**Nota:** Los colores fueron seleccionados para maximizar el contraste y la diferenciación visual entre variantes, considerando las limitaciones de cada tipo de daltonismo y manteniendo la estética moderna y reconocible en interfaces web.
