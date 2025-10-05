# Componente Radiogroup

Componente de grupo de botones radio para selección única con descripciones y características de accesibilidad.

## Importación

```tsx
import { Radiogroup } from 'neo-ram-prisma';
```

## Uso Básico

```tsx
<Radiogroup
  label="Método de Contacto Preferido"
  name="contacto"
  options={[
    { value: 'email', label: 'Correo Electrónico' },
    { value: 'phone', label: 'Teléfono' },
    { value: 'sms', label: 'SMS' }
  ]}
  variant="primary"
/>
```

## Referencia de Props

### Props Requeridas
- `label` - Etiqueta de texto para el grupo de radio
- `name` - Nombre del campo de formulario para el grupo
- `options` - Array de opciones de botones radio

### Props Opcionales

| Prop | Tipo | Predeterminado | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Variante de color del grupo de radio |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño de los botones radio |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Anulación del tamaño de fuente |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Modo de accesibilidad para daltonismo |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Modo de mejora de accesibilidad |
| `value` | `string` | - | Valor seleccionado controlado |
| `defaultValue` | `string` | - | Valor predeterminado no controlado seleccionado |
| `disabled` | `boolean` | `false` | Desactivar todo el grupo de radio |
| `required` | `boolean` | `false` | Marcar grupo de radio como requerido |
| `error` | `boolean` | `false` | Mostrar estado de error |
| `errorMessage` | `string` | - | Mensaje de error a mostrar |
| `helperText` | `string` | - | Texto de ayuda para el grupo |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Orientación del diseño |
| `onChange` | `(value: string, event: ChangeEvent) => void` | - | Manejador de evento de cambio |
| `className` | `string` | - | Clases CSS adicionales |

### Interfaz de Opción

```tsx
interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}
```

## Ejemplos

### Grupos de Radio Básicos

```tsx
// Grupo de radio vertical simple
<Radiogroup
  label="Tamaño"
  name="tamaño"
  options={[
    { value: 'pequeño', label: 'Pequeño' },
    { value: 'mediano', label: 'Mediano' },
    { value: 'grande', label: 'Grande' }
  ]}
  variant="primary"
/>

// Diseño horizontal
<Radiogroup
  label="Nivel de Prioridad"
  name="prioridad"
  orientation="horizontal"
  options={[
    { value: 'baja', label: 'Baja' },
    { value: 'media', label: 'Media' },
    { value: 'alta', label: 'Alta' }
  ]}
  variant="warning"
/>
```

### Con Descripciones

```tsx
<Radiogroup
  label="Plan de Suscripción"
  name="plan"
  options={[
    { 
      value: 'basico', 
      label: 'Plan Básico',
      description: 'Características esenciales para individuos - $9/mes'
    },
    { 
      value: 'pro', 
      label: 'Plan Pro',
      description: 'Características avanzadas para profesionales - $29/mes'
    },
    { 
      value: 'enterprise', 
      label: 'Plan Enterprise',
      description: 'Suite completa para organizaciones - $99/mes'
    }
  ]}
  variant="primary"
/>
```

### Estado Controlado

```tsx
function RadiogroupControlado() {
  const [valorSeleccionado, setValorSeleccionado] = useState('mediano');

  const opciones = [
    { value: 'pequeño', label: 'Pequeño (S)' },
    { value: 'mediano', label: 'Mediano (M)' },
    { value: 'grande', label: 'Grande (L)' },
    { value: 'extragrande', label: 'Extra Grande (XL)' }
  ];

  return (
    <Radiogroup
      label="Talla de Camiseta"
      name="talla-camiseta"
      options={opciones}
      value={valorSeleccionado}
      onChange={(valor) => setValorSeleccionado(valor)}
      variant="primary"
      helperText={`Seleccionado: ${valorSeleccionado.toUpperCase()}`}
    />
  );
}
```

### Con Opciones Deshabilitadas

```tsx
<Radiogroup
  label="Método de Entrega"
  name="entrega"
  options={[
    { value: 'estandar', label: 'Entrega Estándar', description: '5-7 días hábiles' },
    { value: 'express', label: 'Entrega Express', description: '2-3 días hábiles' },
    { 
      value: 'nocturna', 
      label: 'Entrega Nocturna', 
      description: 'Siguiente día hábil',
      disabled: true // No disponible para este pedido
    }
  ]}
  variant="primary"
/>
```

### Manejo de Errores

```tsx
function RadiogroupValidado() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [mostrarError, setMostrarError] = useState(false);

  const manejarEnvio = () => {
    if (!opcionSeleccionada) {
      setMostrarError(true);
    }
  };

  const opciones = [
    { value: 'opcion1', label: 'Opción 1' },
    { value: 'opcion2', label: 'Opción 2' },
    { value: 'opcion3', label: 'Opción 3' }
  ];

  return (
    <>
      <Radiogroup
        label="Selección Requerida"
        name="eleccion-requerida"
        options={opciones}
        value={opcionSeleccionada}
        onChange={(valor) => {
          setOpcionSeleccionada(valor);
          setMostrarError(false);
        }}
        error={mostrarError}
        errorMessage="Por favor selecciona una opción para continuar"
        variant={mostrarError ? "danger" : "primary"}
        required
      />
      <Button onClick={manejarEnvio} variant="primary">
        Continuar
      </Button>
    </>
  );
}
```

### Características de Accesibilidad

```tsx
// Modo de alto contraste
<Radiogroup
  label="Preferencia de Tema"
  name="tema"
  accessibility="high-contrast"
  options={[
    { value: 'claro', label: 'Modo Claro' },
    { value: 'oscuro', label: 'Modo Oscuro' }
  ]}
  variant="primary"
/>

// Para usuarios con deuteranopia
<Radiogroup
  label="Estado"
  name="estado"
  colorVision="deuteranopia"
  options={[
    { value: 'activo', label: 'Activo' },
    { value: 'inactivo', label: 'Inactivo' }
  ]}
  variant="success"
/>

// Modo de baja visión
<Radiogroup
  label="Opciones Grandes"
  name="opciones-grandes"
  accessibility="low-vision"
  options={[
    { value: 'si', label: 'Sí' },
    { value: 'no', label: 'No' }
  ]}
  variant="primary"
/>
```

## Características de Accesibilidad

### Cumplimiento WCAG 2.1 AA
- ✅ **Fieldset y Legend** para etiquetado apropiado del grupo
- ✅ **Semántica de botones radio** con atributos ARIA apropiados
- ✅ **Navegación por teclado** con teclas de flecha
- ✅ **Gestión de foco** dentro del grupo

### Navegación por Teclado
- **Flecha Arriba/Abajo**: Navegar entre opciones (vertical)
- **Flecha Izquierda/Derecha**: Navegar entre opciones (horizontal)
- **Espacio**: Seleccionar opción actual
- **Tab**: Mover foco hacia/desde el grupo de radio

### Soporte para Lectores de Pantalla
- Grupo anunciado como "Grupo de radio: [etiqueta]"
- Cada opción anunciada con posición y estado de selección
- Descripciones asociadas apropiadamente con opciones
- Estado requerido comunicado para el grupo

### Gestión de Foco
- Solo la opción seleccionada está en el orden de tabulación
- Las teclas de flecha navegan dentro del grupo
- Foco visible con indicadores claros
- Orden de lectura lógico mantenido

## Interfaz TypeScript

```tsx
interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

interface RadiogroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  orientation?: 'vertical' | 'horizontal';
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
```

## Componentes Relacionados

- [**Checkbox**](./Checkbox.md) - Para opciones de selección múltiple
- [**Select**](./Select.md) - Para selección única desplegable

---

[← Volver a la Documentación](../README.md)