# Componente Input

Componente de campo de texto con validación, manejo de errores y características de accesibilidad.

## Importación

```tsx
import { Input } from 'neo-ram-prisma';
```

## Uso Básico

```tsx
<Input 
  label="Dirección de Correo Electrónico" 
  type="email" 
  variant="primary" 
  required 
/>
```

## Referencia de Props

### Props Requeridas
- `label` - Etiqueta de texto para el campo de entrada

### Props Opcionales

| Prop | Tipo | Predeterminado | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Variante de color del campo |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño del campo |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Anulación del tamaño de fuente |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Modo de accesibilidad para daltonismo |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Modo de mejora de accesibilidad |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url'` | `'text'` | Tipo de entrada HTML |
| `placeholder` | `string` | - | Texto de marcador de posición |
| `value` | `string` | - | Valor de entrada controlada |
| `defaultValue` | `string` | - | Valor predeterminado no controlado |
| `required` | `boolean` | `false` | Marcar campo como requerido |
| `disabled` | `boolean` | `false` | Desactivar la entrada |
| `error` | `boolean` | `false` | Mostrar estado de error |
| `errorMessage` | `string` | - | Mensaje de error a mostrar |
| `helperText` | `string` | - | Texto de ayuda debajo de la entrada |
| `maxLength` | `number` | - | Longitud máxima de caracteres |
| `minLength` | `number` | - | Longitud mínima de caracteres |
| `pattern` | `string` | - | Patrón de validación regex |
| `onChange` | `(event: ChangeEvent) => void` | - | Manejador de evento de cambio |
| `onFocus` | `(event: FocusEvent) => void` | - | Manejador de evento de foco |
| `onBlur` | `(event: FocusEvent) => void` | - | Manejador de evento de desenfoque |
| `className` | `string` | - | Clases CSS adicionales |

## Ejemplos

### Tipos de Entrada Básicos

```tsx
// Entrada de texto
<Input label="Nombre Completo" type="text" variant="primary" />

// Entrada de correo con validación
<Input 
  label="Correo Electrónico" 
  type="email" 
  required 
  variant="primary"
  helperText="Nunca compartiremos tu correo electrónico"
/>

// Entrada de contraseña
<Input 
  label="Contraseña" 
  type="password" 
  required
  minLength={8}
  variant="primary"
/>

// Entrada numérica
<Input 
  label="Edad" 
  type="number" 
  min={0}
  max={120}
  variant="primary"
/>
```

### Manejo de Errores

```tsx
function EntradaValidada() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const validarEmail = (valor: string) => {
    const esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    setError(!esValido && valor.length > 0);
  };

  return (
    <Input
      label="Dirección de Correo Electrónico"
      type="email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
        validarEmail(e.target.value);
      }}
      error={error}
      errorMessage="Por favor ingresa una dirección de correo válida"
      variant={error ? "danger" : "primary"}
      required
    />
  );
}
```

### Características de Accesibilidad

```tsx
// Modo de alto contraste
<Input 
  label="Nombre de Usuario" 
  accessibility="high-contrast"
  variant="primary"
/>

// Para usuarios con deuteranopia
<Input 
  label="Cantidad" 
  type="number" 
  colorVision="deuteranopia"
  variant="success"
/>

// Modo de baja visión
<Input 
  label="Descripción" 
  accessibility="low-vision"
  variant="primary"
/>
```

## Características de Accesibilidad

### Cumplimiento WCAG 2.1 AA
- ✅ **Etiquetado apropiado** con elementos `<label>`
- ✅ **Asociación de errores** con `aria-describedby`
- ✅ **Indicación de campo requerido** con `aria-required`
- ✅ **Estado inválido** comunicado con `aria-invalid`

### Navegación por Teclado
- **Tab**: Mover foco hacia/desde la entrada
- **Shift+Tab**: Mover foco hacia atrás
- **Todas las teclas de escritura estándar**: Entrada de texto
- **Ctrl+A**: Seleccionar todo el texto

### Soporte para Lectores de Pantalla
- Anuncia etiqueta, tipo y valor actual
- Mensajes de error anunciados inmediatamente
- Estado requerido comunicado apropiadamente
- Texto de ayuda asociado y anunciado

## Interfaz TypeScript

```tsx
interface InputProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
}
```

---

[← Volver a la Documentación](../README.md)