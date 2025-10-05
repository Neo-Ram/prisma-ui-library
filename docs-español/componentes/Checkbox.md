# Componente Checkbox

Componente de casilla de verificación con soporte para estado indeterminado y características de accesibilidad.

## Importación

```tsx
import { Checkbox } from 'neo-ram-prisma';
```

## Uso Básico

```tsx
<Checkbox 
  label="Suscribirse al boletín" 
  variant="primary" 
/>
```

## Referencia de Props

### Props Requeridas
- `label` - Etiqueta de texto para la casilla de verificación

### Props Opcionales

| Prop | Tipo | Predeterminado | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Variante de color de la casilla |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño de la casilla |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Anulación del tamaño de fuente |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Modo de accesibilidad para daltonismo |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Modo de mejora de accesibilidad |
| `checked` | `boolean` | `false` | Estado controlado de marcado |
| `defaultChecked` | `boolean` | `false` | Estado predeterminado no controlado de marcado |
| `indeterminate` | `boolean` | `false` | Mostrar estado indeterminado (selección parcial) |
| `disabled` | `boolean` | `false` | Desactivar la casilla |
| `required` | `boolean` | `false` | Marcar casilla como requerida |
| `error` | `boolean` | `false` | Mostrar estado de error |
| `errorMessage` | `string` | - | Mensaje de error a mostrar |
| `description` | `string` | - | Texto de descripción adicional |
| `onChange` | `(checked: boolean, event: ChangeEvent) => void` | - | Manejador de evento de cambio |
| `onFocus` | `(event: FocusEvent) => void` | - | Manejador de evento de foco |
| `onBlur` | `(event: FocusEvent) => void` | - | Manejador de evento de desenfoque |
| `className` | `string` | - | Clases CSS adicionales |
| `name` | `string` | - | Nombre del campo de formulario |
| `value` | `string` | - | Valor del campo de formulario |

## Ejemplos

### Uso Básico

```tsx
// Casilla simple
<Checkbox label="Aceptar términos y condiciones" variant="primary" />

// Con descripción
<Checkbox 
  label="Correos de marketing"
  description="Recibir actualizaciones sobre nuevas características y promociones"
  variant="primary"
/>

// Casilla requerida
<Checkbox 
  label="Acepto la política de privacidad"
  required
  variant="primary"
/>
```

### Estado Controlado

```tsx
function CasillaControlada() {
  const [estaMarcada, setEstaMarcada] = useState(false);

  return (
    <Checkbox
      label="Casilla controlada"
      checked={estaMarcada}
      onChange={(checked) => setEstaMarcada(checked)}
      variant="primary"
    />
  );
}
```

### Estado Indeterminado

```tsx
function CasillasHijasPadre() {
  const [elementos, setElementos] = useState([
    { id: 1, label: 'Elemento 1', checked: false },
    { id: 2, label: 'Elemento 2', checked: true },
    { id: 3, label: 'Elemento 3', checked: false }
  ]);

  const todosMarcados = elementos.every(elemento => elemento.checked);
  const algunosMarcados = elementos.some(elemento => elemento.checked);
  const indeterminado = algunosMarcados && !todosMarcados;

  const manejarSeleccionarTodos = (checked: boolean) => {
    setElementos(elementos.map(elemento => ({ ...elemento, checked })));
  };

  return (
    <>
      <Checkbox
        label="Seleccionar Todo"
        checked={todosMarcados}
        indeterminate={indeterminado}
        onChange={manejarSeleccionarTodos}
        variant="primary"
      />
      
      {elementos.map(elemento => (
        <Checkbox
          key={elemento.id}
          label={elemento.label}
          checked={elemento.checked}
          onChange={(checked) => 
            setElementos(elementos.map(e => 
              e.id === elemento.id ? { ...e, checked } : e
            ))
          }
          variant="secondary"
        />
      ))}
    </>
  );
}
```

### Manejo de Errores

```tsx
function CasillaValidada() {
  const [aceptado, setAceptado] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);

  const manejarEnvio = () => {
    if (!aceptado) {
      setMostrarError(true);
    }
  };

  return (
    <>
      <Checkbox
        label="Acepto los términos y condiciones"
        checked={aceptado}
        onChange={(checked) => {
          setAceptado(checked);
          setMostrarError(false);
        }}
        error={mostrarError}
        errorMessage="Debes aceptar los términos para continuar"
        variant={mostrarError ? "danger" : "primary"}
        required
      />
      <Button onClick={manejarEnvio} variant="primary">
        Enviar
      </Button>
    </>
  );
}
```

### Características de Accesibilidad

```tsx
// Modo de alto contraste
<Checkbox 
  label="Habilitar notificaciones" 
  accessibility="high-contrast"
  variant="primary"
/>

// Para usuarios con protanopia
<Checkbox 
  label="Configuración importante" 
  colorVision="protanopia"
  variant="danger"
/>

// Modo de baja visión
<Checkbox 
  label="Opción de casilla grande" 
  accessibility="low-vision"
  variant="primary"
/>
```

## Características de Accesibilidad

### Cumplimiento WCAG 2.1 AA
- ✅ **Etiquetado apropiado** con elementos `<label>`
- ✅ **Navegación por teclado** con activación por tecla espacio
- ✅ **Indicadores de foco** con anillos de foco visibles
- ✅ **Comunicación de estado** con `aria-checked` y `aria-describedby`

### Navegación por Teclado
- **Espacio**: Alternar estado de la casilla
- **Tab**: Mover foco hacia/desde la casilla
- **Shift+Tab**: Mover foco hacia atrás

### Soporte para Lectores de Pantalla
- Anuncia el rol de casilla y estado actual
- Estado indeterminado comunicado apropiadamente
- Mensajes de error asociados y anunciados
- Texto de descripción vinculado con `aria-describedby`

### Estados Anunciados
- **Marcado**: "Casilla marcada"
- **No marcado**: "Casilla no marcada"  
- **Indeterminado**: "Casilla en estado mixto"
- **Requerido**: "Casilla requerida"

## Interfaz TypeScript

```tsx
interface CheckboxProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  description?: string;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  value?: string;
}
```

## Componentes Relacionados

- [**Radiogroup**](./Radiogroup.md) - Para selección única de múltiples opciones
- [**Toggle**](./Toggle.md) - Para controles de switch booleano

---

[← Volver a la Documentación](../README.md)