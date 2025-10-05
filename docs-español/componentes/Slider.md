# Componente Slider

Componente de control deslizante para seleccionar valores numéricos dentro de un rango con características de accesibilidad.

## Importación

```tsx
import { Slider } from 'neo-ram-prisma';
```

## Uso Básico

```tsx
<Slider 
  label="Volumen" 
  min={0} 
  max={100} 
  variant="primary" 
/>
```

## Referencia de Props

### Props Requeridas
- `label` - Etiqueta de texto para el slider
- `min` - Valor mínimo del slider
- `max` - Valor máximo del slider

### Props Opcionales

| Prop | Tipo | Predeterminado | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Variante de color del slider |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño del slider |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Anulación del tamaño de fuente |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Modo de accesibilidad para daltonismo |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Modo de mejora de accesibilidad |
| `value` | `number` | - | Valor controlado del slider |
| `defaultValue` | `number` | `min` | Valor predeterminado no controlado |
| `step` | `number` | `1` | Incremento de pasos del slider |
| `disabled` | `boolean` | `false` | Desactivar el slider |
| `showValue` | `boolean` | `true` | Mostrar valor actual del slider |
| `showTicks` | `boolean` | `false` | Mostrar marcas de graduación |
| `tickInterval` | `number` | - | Intervalo entre marcas de graduación |
| `showLabels` | `boolean` | `false` | Mostrar etiquetas min/max |
| `formatValue` | `(value: number) => string` | - | Función personalizada para formatear el valor mostrado |
| `unit` | `string` | - | Unidad a mostrar con el valor (ej. "px", "%", "°") |
| `onChange` | `(value: number, event: ChangeEvent) => void` | - | Manejador de evento de cambio |
| `onChangeComplete` | `(value: number) => void` | - | Manejador de evento cuando termina el cambio |
| `className` | `string` | - | Clases CSS adicionales |
| `name` | `string` | - | Nombre del campo de formulario |

## Ejemplos

### Uso Básico

```tsx
// Slider de volumen simple
<Slider 
  label="Volumen" 
  min={0} 
  max={100} 
  defaultValue={50}
  unit="%" 
  variant="primary" 
/>

// Control de brillo
<Slider 
  label="Brillo de pantalla" 
  min={10} 
  max={100} 
  defaultValue={80}
  step={5}
  unit="%" 
  variant="secondary" 
  showTicks
  tickInterval={20}
/>

// Selector de precio
<Slider 
  label="Rango de precio máximo" 
  min={0} 
  max={1000} 
  defaultValue={250}
  step={25}
  unit="€" 
  variant="success"
  showLabels 
/>
```

### Estado Controlado

```tsx
function ControlVolumen() {
  const [volumen, setVolumen] = useState(75);

  const formatearVolumen = (valor) => {
    if (valor === 0) return "Silencio";
    if (valor <= 30) return `Bajo (${valor}%)`;
    if (valor <= 70) return `Medio (${valor}%)`;
    return `Alto (${valor}%)`;
  };

  return (
    <div className="control-volumen">
      <Slider
        label="Control de Volumen"
        min={0}
        max={100}
        value={volumen}
        onChange={(nuevoVolumen) => setVolumen(nuevoVolumen)}
        formatValue={formatearVolumen}
        variant="primary"
        showTicks
        tickInterval={25}
      />
      
      <div className="controles-volumen">
        <Button 
          onClick={() => setVolumen(0)} 
          variant="secondary" 
          size="sm"
        >
          Silenciar
        </Button>
        <Button 
          onClick={() => setVolumen(100)} 
          variant="secondary" 
          size="sm"
        >
          Máximo
        </Button>
      </div>
    </div>
  );
}
```

### Configuración de Ajustes

```tsx
function PanelAjustes() {
  const [ajustes, setAjustes] = useState({
    brillo: 80,
    contraste: 50,
    saturacion: 60,
    temperatura: 6500
  });

  const actualizarAjuste = (clave, valor) => {
    setAjustes(prev => ({ ...prev, [clave]: valor }));
  };

  return (
    <div className="panel-ajustes">
      <h3>Ajustes de Display</h3>
      
      <Slider
        label="Brillo"
        min={0}
        max={100}
        value={ajustes.brillo}
        onChange={(valor) => actualizarAjuste('brillo', valor)}
        unit="%"
        variant="primary"
        showTicks
        tickInterval={25}
      />
      
      <Slider
        label="Contraste"
        min={0}
        max={100}
        value={ajustes.contraste}
        onChange={(valor) => actualizarAjuste('contraste', valor)}
        unit="%"
        variant="secondary"
      />
      
      <Slider
        label="Saturación"
        min={0}
        max={100}
        value={ajustes.saturacion}
        onChange={(valor) => actualizarAjuste('saturacion', valor)}
        unit="%"
        variant="success"
      />
      
      <Slider
        label="Temperatura de Color"
        min={2700}
        max={6500}
        value={ajustes.temperatura}
        onChange={(valor) => actualizarAjuste('temperatura', valor)}
        step={100}
        unit="K"
        variant="warning"
        formatValue={(valor) => `${valor}K (${valor < 4000 ? 'Cálido' : valor < 5500 ? 'Neutral' : 'Frío'})`}
        showLabels
      />
    </div>
  );
}
```

### Filtro de Rango de Precio

```tsx
function FiltroRangoPrecios() {
  const [rangoMinimo, setRangoMinimo] = useState(0);
  const [rangoMaximo, setRangoMaximo] = useState(500);

  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(valor);
  };

  return (
    <div className="filtro-precios">
      <h4>Filtrar por Precio</h4>
      
      <Slider
        label="Precio Mínimo"
        min={0}
        max={1000}
        value={rangoMinimo}
        onChange={setRangoMinimo}
        step={25}
        formatValue={formatearPrecio}
        variant="success"
        showLabels
      />
      
      <Slider
        label="Precio Máximo"
        min={0}
        max={1000}
        value={rangoMaximo}
        onChange={setRangoMaximo}
        step={25}
        formatValue={formatearPrecio}
        variant="success"
        showLabels
      />
      
      <div className="resumen-rango">
        Rango seleccionado: {formatearPrecio(rangoMinimo)} - {formatearPrecio(rangoMaximo)}
      </div>
    </div>
  );
}
```

### Control de Progreso/Tiempo

```tsx
function ReproductorAudio({ duracion = 180 }) {
  const [tiempoActual, setTiempoActual] = useState(0);
  const [reproduciendo, setReproduciendo] = useState(false);

  const formatearTiempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${minutos}:${segs.toString().padStart(2, '0')}`;
  };

  const manejarCambioTiempo = (nuevoTiempo, evento) => {
    setTiempoActual(nuevoTiempo);
    // Aquí buscarías a este tiempo en el audio
  };

  const manejarCambioCompleto = (tiempoFinal) => {
    // Finalizar operación de búsqueda
    console.log(`Saltando a ${formatearTiempo(tiempoFinal)}`);
  };

  return (
    <div className="reproductor-audio">
      <div className="controles-reproduccion">
        <Button 
          onClick={() => setReproduciendo(!reproduciendo)}
          variant="primary"
        >
          {reproduciendo ? '⏸️ Pausar' : '▶️ Reproducir'}
        </Button>
      </div>
      
      <Slider
        label="Progreso de la pista"
        min={0}
        max={duracion}
        value={tiempoActual}
        onChange={manejarCambioTiempo}
        onChangeComplete={manejarCambioCompleto}
        formatValue={formatearTiempo}
        variant="primary"
        showLabels
        showTicks
        tickInterval={30}
      />
      
      <div className="info-tiempo">
        {formatearTiempo(tiempoActual)} / {formatearTiempo(duracion)}
      </div>
    </div>
  );
}
```

### Diferentes Tamaños

```tsx
<Slider label="Extra Pequeño" min={0} max={100} size="xs" variant="primary" />
<Slider label="Pequeño" min={0} max={100} size="sm" variant="secondary" />
<Slider label="Mediano" min={0} max={100} size="md" variant="success" />
<Slider label="Grande" min={0} max={100} size="lg" variant="warning" />
<Slider label="Extra Grande" min={0} max={100} size="xl" variant="danger" />
```

### Características de Accesibilidad

```tsx
// Modo de alto contraste
<Slider 
  label="Configuración de alto contraste" 
  min={0} 
  max={100}
  accessibility="high-contrast"
  variant="primary"
  showLabels
  showTicks
  tickInterval={20}
/>

// Para usuarios con protanopia
<Slider 
  label="Control crítico" 
  min={0} 
  max={100}
  colorVision="protanopia"
  variant="danger"
  showValue
  showLabels
/>

// Modo de baja visión
<Slider 
  label="Slider de gran visibilidad" 
  min={0} 
  max={100}
  accessibility="low-vision"
  size="xl"
  variant="primary"
  showTicks
  tickInterval={10}
/>
```

### Configuración Avanzada

```tsx
function SliderConfiguración() {
  const [configuracion, setConfiguracion] = useState({
    calidad: 75,
    fps: 30,
    bitrate: 5000
  });

  const opcionesFPS = [24, 30, 60, 120];
  const formatearFPS = (valor) => `${valor} FPS`;
  
  const formatearBitrate = (valor) => {
    return valor >= 1000 ? `${(valor/1000).toFixed(1)}M` : `${valor}K`;
  };

  return (
    <div className="configuracion-video">
      <h3>Configuración de Grabación</h3>
      
      <Slider
        label="Calidad de Video"
        min={0}
        max={100}
        value={configuracion.calidad}
        onChange={(valor) => setConfiguracion(prev => ({ ...prev, calidad: valor }))}
        unit="%"
        variant="primary"
        showTicks
        tickInterval={25}
        formatValue={(valor) => {
          if (valor <= 25) return `Baja (${valor}%)`;
          if (valor <= 50) return `Media (${valor}%)`;
          if (valor <= 75) return `Alta (${valor}%)`;
          return `Ultra (${valor}%)`;
        }}
      />
      
      <Slider
        label="Velocidad de Fotogramas"
        min={24}
        max={120}
        value={configuracion.fps}
        onChange={(valor) => setConfiguracion(prev => ({ ...prev, fps: valor }))}
        step={6}
        formatValue={formatearFPS}
        variant="secondary"
        showLabels
      />
      
      <Slider
        label="Bitrate"
        min={1000}
        max={50000}
        value={configuracion.bitrate}
        onChange={(valor) => setConfiguracion(prev => ({ ...prev, bitrate: valor }))}
        step={500}
        formatValue={formatearBitrate}
        unit="bps"
        variant="success"
        showTicks
        tickInterval={10000}
      />
    </div>
  );
}
```

## Características de Accesibilidad

### Cumplimiento WCAG 2.1 AA
- ✅ **Rol de slider** con atributos ARIA apropiados
- ✅ **Navegación por teclado** con teclas de flecha
- ✅ **Etiquetas apropiadas** con `aria-label` y `aria-labelledby`
- ✅ **Comunicación de valor** con `aria-valuenow`, `aria-valuemin`, `aria-valuemax`

### Navegación por Teclado
- **Flecha Derecha/Arriba**: Incrementar valor
- **Flecha Izquierda/Abajo**: Decrementar valor
- **Page Up**: Incrementar por pasos grandes
- **Page Down**: Decrementar por pasos grandes
- **Home**: Ir a valor mínimo
- **End**: Ir a valor máximo

### Soporte para Lectores de Pantalla
- Se anuncia como "Slider" con valor actual
- Cambios de valor anunciados durante el arrastre
- Valores mínimo y máximo comunicados
- Unidades y etiquetas personalizadas leídas apropiadamente

### Gestión de Foco
- Indicador de foco claro en el pulgar del slider
- Solo un elemento enfocable en el orden de tabulación
- Foco permanece en el slider durante la interacción
- Estados hover/focus visualmente distintos

## Interfaz TypeScript

```tsx
interface SliderProps {
  label: string;
  min: number;
  max: number;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  value?: number;
  defaultValue?: number;
  step?: number;
  disabled?: boolean;
  showValue?: boolean;
  showTicks?: boolean;
  tickInterval?: number;
  showLabels?: boolean;
  formatValue?: (value: number) => string;
  unit?: string;
  onChange?: (value: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeComplete?: (value: number) => void;
  className?: string;
  name?: string;
}
```

## Componentes Relacionados

- [**Input**](./Input.md) - Para entrada de valores numéricos precisos
- [**Toggle**](./Toggle.md) - Para valores booleanos simples

---

[← Volver a la Documentación](../README.md)