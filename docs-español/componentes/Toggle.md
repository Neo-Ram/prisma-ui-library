# Componente Toggle

Componente de interruptor para valores booleanos con características de accesibilidad.

## Importación

```tsx
import { Toggle } from 'neo-ram-prisma';
```

## Uso Básico

```tsx
<Toggle 
  label="Habilitar notificaciones" 
  variant="primary" 
/>
```

## Referencia de Props

### Props Requeridas
- `label` - Etiqueta de texto para el interruptor

### Props Opcionales

| Prop | Tipo | Predeterminado | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Variante de color del interruptor |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño del interruptor |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Anulación del tamaño de fuente |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Modo de accesibilidad para daltonismo |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Modo de mejora de accesibilidad |
| `checked` | `boolean` | `false` | Estado controlado del interruptor |
| `defaultChecked` | `boolean` | `false` | Estado predeterminado no controlado del interruptor |
| `disabled` | `boolean` | `false` | Desactivar el interruptor |
| `description` | `string` | - | Texto de descripción adicional |
| `onChange` | `(checked: boolean, event: ChangeEvent) => void` | - | Manejador de evento de cambio |
| `onFocus` | `(event: FocusEvent) => void` | - | Manejador de evento de foco |
| `onBlur` | `(event: FocusEvent) => void` | - | Manejador de evento de desenfoque |
| `className` | `string` | - | Clases CSS adicionales |
| `name` | `string` | - | Nombre del campo de formulario |

## Ejemplos

### Uso Básico

```tsx
// Interruptor simple
<Toggle label="Modo oscuro" variant="primary" />

// Con descripción
<Toggle 
  label="Notificaciones por correo"
  description="Recibir actualizaciones sobre la actividad de tu cuenta"
  variant="primary"
/>

// Diferentes variantes
<Toggle label="Auto-guardado" variant="success" />
<Toggle label="Modo depuración" variant="warning" />
<Toggle label="Eliminar al salir" variant="danger" />
```

### Estado Controlado

```tsx
function InterruptorControlado() {
  const [estaHabilitado, setEstaHabilitado] = useState(false);

  return (
    <>
      <Toggle
        label="Característica habilitada"
        checked={estaHabilitado}
        onChange={(checked) => setEstaHabilitado(checked)}
        variant="primary"
        description={estaHabilitado ? "La característica está actualmente activa" : "La característica está deshabilitada"}
      />
      
      {estaHabilitado && (
        <div>Contenido específico de la característica aquí...</div>
      )}
    </>
  );
}
```

### Panel de Configuraciones

```tsx
function PanelConfiguraciones() {
  const [configuraciones, setConfiguraciones] = useState({
    notificaciones: true,
    autoGuardar: false,
    modoOscuro: false,
    analiticas: true
  });

  const actualizarConfiguracion = (clave: string, valor: boolean) => {
    setConfiguraciones(prev => ({ ...prev, [clave]: valor }));
  };

  return (
    <div className="panel-configuraciones">
      <h3>Preferencias de Usuario</h3>
      
      <Toggle
        label="Notificaciones Push"
        description="Recibir notificaciones en tu dispositivo"
        checked={configuraciones.notificaciones}
        onChange={(checked) => actualizarConfiguracion('notificaciones', checked)}
        variant="primary"
      />
      
      <Toggle
        label="Auto-guardar Documentos"
        description="Guardar automáticamente los cambios cada 30 segundos"
        checked={configuraciones.autoGuardar}
        onChange={(checked) => actualizarConfiguracion('autoGuardar', checked)}
        variant="success"
      />
      
      <Toggle
        label="Tema Oscuro"
        description="Usar colores oscuros en toda la interfaz"
        checked={configuraciones.modoOscuro}
        onChange={(checked) => actualizarConfiguracion('modoOscuro', checked)}
        variant="secondary"
      />
      
      <Toggle
        label="Analíticas"
        description="Ayudar a mejorar nuestro servicio compartiendo datos de uso"
        checked={configuraciones.analiticas}
        onChange={(checked) => actualizarConfiguracion('analiticas', checked)}
        variant="warning"
      />
    </div>
  );
}
```

### Diferentes Tamaños

```tsx
<Toggle label="Extra Pequeño" size="xs" variant="primary" />
<Toggle label="Pequeño" size="sm" variant="primary" />
<Toggle label="Mediano" size="md" variant="primary" />
<Toggle label="Grande" size="lg" variant="primary" />
<Toggle label="Extra Grande" size="xl" variant="primary" />
```

### Características de Accesibilidad

```tsx
// Modo de alto contraste
<Toggle 
  label="Configuración de alto contraste" 
  accessibility="high-contrast"
  variant="primary"
/>

// Para usuarios con protanopia
<Toggle 
  label="Característica crítica" 
  colorVision="protanopia"
  variant="danger"
  description="Esto eliminará permanentemente los datos"
/>

// Modo de baja visión
<Toggle 
  label="Opción de interruptor grande" 
  accessibility="low-vision"
  variant="primary"
/>
```

### Integración con Formularios

```tsx
function FormularioPerfil() {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    email: '',
    notificacionesEmail: true,
    notificacionesSMS: false,
    correosMarketing: false
  });

  const manejarCambioToggle = (campo: string) => (checked: boolean) => {
    setDatosFormulario(prev => ({ ...prev, [campo]: checked }));
  };

  return (
    <form>
      <Input 
        label="Nombre" 
        value={datosFormulario.nombre}
        onChange={(e) => setDatosFormulario(prev => ({ ...prev, nombre: e.target.value }))}
      />
      
      <Input 
        label="Correo Electrónico" 
        type="email"
        value={datosFormulario.email}
        onChange={(e) => setDatosFormulario(prev => ({ ...prev, email: e.target.value }))}
      />
      
      <fieldset>
        <legend>Preferencias de Notificación</legend>
        
        <Toggle
          label="Notificaciones por Correo"
          name="notificacionesEmail"
          checked={datosFormulario.notificacionesEmail}
          onChange={manejarCambioToggle('notificacionesEmail')}
          variant="primary"
        />
        
        <Toggle
          label="Notificaciones SMS"
          name="notificacionesSMS"
          checked={datosFormulario.notificacionesSMS}
          onChange={manejarCambioToggle('notificacionesSMS')}
          variant="primary"
        />
        
        <Toggle
          label="Correos de Marketing"
          name="correosMarketing"
          checked={datosFormulario.correosMarketing}
          onChange={manejarCambioToggle('correosMarketing')}
          variant="secondary"
          description="Recibir actualizaciones sobre nuevas características y promociones"
        />
      </fieldset>
      
      <Button type="submit" variant="primary">
        Guardar Configuraciones
      </Button>
    </form>
  );
}
```

## Características de Accesibilidad

### Cumplimiento WCAG 2.1 AA
- ✅ **Rol de switch** con atributos ARIA apropiados
- ✅ **Comunicación de estado** con `aria-checked`
- ✅ **Navegación por teclado** con activación por tecla espacio
- ✅ **Indicadores de foco** con anillos de foco visibles

### Navegación por Teclado
- **Espacio**: Alternar estado del interruptor
- **Enter**: Alternar estado del interruptor
- **Tab**: Mover foco hacia/desde el interruptor
- **Shift+Tab**: Mover foco hacia atrás

### Soporte para Lectores de Pantalla
- Se anuncia como "Interruptor" con estado actual
- Cambios de estado anunciados inmediatamente
- Texto de descripción asociado y anunciado
- Etiqueta conectada apropiadamente al control

### Estados Visuales
- **Estados Encendido/Apagado** claramente diferenciados
- **Animaciones suaves** para transiciones de estado
- **Indicadores de foco** para usuarios de teclado
- **Estado deshabilitado** visualmente distinto

## Interfaz TypeScript

```tsx
interface ToggleProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  description?: string;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
}
```

## Personalización CSS

Los colores se exponen como variables CSS definidas **en el propio elemento del componente**, por lo que sobrescribirlas en `:root` no tiene efecto. La forma recomendada de cambiar colores es `variant="custom"` con la prop `customColors` (un juego por modo de visión). Para ajustes puntuales, pasa las variables en `style` junto con `variant="custom"`:

```tsx
<Toggle
  variant="custom"
  style={{ '--toggle-bg-on': '#397e28', '--toggle-border-on': '#397e28' } as React.CSSProperties}
  label="Notifications" checked={on} onChange={setOn}
/>
```

| Variable | Valor por defecto (primary, visión normal) | Uso |
|---|---|---|
| `--toggle-bg` | `#e9ecf1` | Pista apagado |
| `--toggle-border` | `#6b7280` | Borde apagado (≥3:1) |
| `--toggle-knob` | `#6b7280` | Knob apagado (≥3:1 contra la pista) |
| `--toggle-bg-on` | `#1c64d7` | Pista encendido |
| `--toggle-border-on` | `#1c64d7` | Borde encendido |
| `--toggle-knob-on` | `#ffffff` | Knob encendido (≥3:1 contra la pista) |
| `--toggle-focus` | `#1c64d7` | Contorno de foco |
| `--toggle-label-color` | `#1a1f2b` | Texto de la etiqueta |

> Mantén el texto ≥ 4.5:1 y los bordes, rellenos e indicadores de foco ≥ 3:1 (WCAG 1.4.3 / 1.4.11), también bajo simulación de protanopia, deuteranopia y tritanopia. La paleta por defecto y su justificación están en [COLOR_A11Y.md](../../COLOR_A11Y.md).

## Componentes Relacionados

- [**Checkbox**](./Checkbox.md) - Para selección verdadero/falso con estilo visual diferente
- [**Radiogroup**](./Radiogroup.md) - Para selección única de múltiples opciones

---

[← Volver a la Documentación](../README.md)