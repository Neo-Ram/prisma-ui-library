# Componente Button

Componente de botón interactivo con estados de carga, características de accesibilidad y temas consistentes.

## Importación

```tsx
import { Button } from 'neo-ram-prisma';
```

## Uso Básico

```tsx
<Button variant="primary" size="md">
  Haz clic aquí
</Button>
```

## Referencia de Props

### Props Requeridas
Ninguna - todas las props son opcionales con valores predeterminados sensatos.

### Props Opcionales

| Prop | Tipo | Predeterminado | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Variante de color del botón |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño del botón |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Anulación del tamaño de fuente |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Modo de accesibilidad para daltonismo |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Modo de mejora de accesibilidad |
| `isLoading` | `boolean` | `false` | Muestra estado de carga con spinner |
| `loadingText` | `string` | `'Cargando...'` | Texto a mostrar durante la carga |
| `disabled` | `boolean` | `false` | Desactiva el botón |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Tipo de botón HTML |
| `onClick` | `(event: MouseEvent) => void` | - | Manejador de evento de clic |
| `onFocus` | `(event: FocusEvent) => void` | - | Manejador de evento de foco |
| `onBlur` | `(event: FocusEvent) => void` | - | Manejador de evento de desenfoque |
| `children` | `ReactNode` | - | Contenido del botón |
| `className` | `string` | - | Clases CSS adicionales |
| `ariaLabel` | `string` | - | Anulación de etiqueta accesible |

## Ejemplos

### Variantes Básicas

```tsx
// Botón primario (predeterminado)
<Button variant="primary">Acción Primaria</Button>

// Botón secundario  
<Button variant="secondary">Acción Secundaria</Button>

// Botón de éxito
<Button variant="success">Guardar Cambios</Button>

// Botón de advertencia
<Button variant="warning">Proceder con Precaución</Button>

// Botón de peligro
<Button variant="danger">Eliminar Elemento</Button>
```

### Diferentes Tamaños

```tsx
<Button size="xs" variant="primary">Extra Pequeño</Button>
<Button size="sm" variant="primary">Pequeño</Button>
<Button size="md" variant="primary">Mediano</Button>
<Button size="lg" variant="primary">Grande</Button>
<Button size="xl" variant="primary">Extra Grande</Button>
```

### Estados de Carga

```tsx
// Carga básica
<Button isLoading variant="primary">
  Guardar Documento
</Button>

// Texto de carga personalizado
<Button 
  isLoading 
  loadingText="Subiendo..." 
  variant="success"
>
  Subir Archivo
</Button>
```

### Características de Accesibilidad

```tsx
// Para usuarios con protanopia (ceguera al rojo)
<Button 
  variant="danger" 
  colorVision="protanopia"
>
  Eliminar (Amigable para Daltónicos)
</Button>

// Modo de alto contraste
<Button 
  variant="primary" 
  accessibility="high-contrast"
>
  Botón de Alto Contraste
</Button>

// Modo de baja visión (tamaño más grande)
<Button 
  variant="primary" 
  accessibility="low-vision"
>
  Botón Grande para Baja Visión
</Button>
```

### Manejo de Eventos

```tsx
function BotonInteractivo() {
  const manejarClic = () => {
    console.log('¡Botón clickeado!');
  };

  const manejarFoco = () => {
    console.log('Botón enfocado');
  };

  return (
    <Button
      variant="primary"
      onClick={manejarClic}
      onFocus={manejarFoco}
    >
      Botón Interactivo
    </Button>
  );
}
```

### Uso en Formularios

```tsx
function EjemploFormulario() {
  const [enviando, setEnviando] = useState(false);

  const manejarEnvio = async () => {
    setEnviando(true);
    // Simular llamada API
    await new Promise(resolve => setTimeout(resolve, 2000));
    setEnviando(false);
  };

  return (
    <form>
      {/* Campos del formulario aquí */}
      
      <Button
        type="submit"
        variant="primary"
        isLoading={enviando}
        loadingText="Enviando..."
        onClick={manejarEnvio}
      >
        Enviar Formulario
      </Button>
    </form>
  );
}
```

## Características de Accesibilidad

### Cumplimiento WCAG 2.1 AA
- ✅ **Contraste de Color**: Todas las variantes cumplen con la relación mínima de contraste 4.5:1
- ✅ **Indicadores de Foco**: Anillos de foco visibles con contorno de 3px
- ✅ **Objetivos Táctiles**: Área táctil mínima de 44px para móviles
- ✅ **Lector de Pantalla**: Etiquetas ARIA apropiadas y semántica de botón

### Navegación por Teclado
- **Espacio/Enter**: Activa el botón
- **Tab**: Mueve el foco hacia/desde el botón
- **Escape**: Sin comportamiento predeterminado (puede ser personalizado)

### Soporte para Lectores de Pantalla
- Anuncia el rol de botón y estado actual
- Estado de carga comunicado con `aria-live="polite"`
- Estado deshabilitado anunciado apropiadamente
- `ariaLabel` personalizado para contexto adicional

### Soporte para Daltonismo
Cada variante tiene colores especialmente ajustados para diferentes tipos de daltonismo:

**Protanopia (Ceguera al Rojo)**:
- Los botones de peligro usan alternativas de alto contraste
- Los botones de éxito usan tonos amarillo/dorado
- Los botones primarios usan azules mejorados

**Deuteranopia (Ceguera al Verde)**:
- Los botones de éxito usan colores lima brillantes
- Los botones de advertencia usan amarillos mejorados
- Mantiene jerarquía visual

**Tritanopia (Ceguera al Azul)**:
- Los botones primarios usan azules ajustados
- Mantiene consistencia de marca
- Contraste mejorado donde es necesario

## Personalización CSS

Los colores se exponen como variables CSS definidas **en el propio elemento del componente**, por lo que sobrescribirlas en `:root` no tiene efecto. La forma recomendada de cambiar colores es `variant="custom"` con la prop `customColors` (un juego por modo de visión). Para ajustes puntuales, pasa las variables en `style` junto con `variant="custom"`:

```tsx
<Button
  variant="custom"
  style={{ '--btn-bg': '#397e28', '--btn-bg-hover': '#306b22', '--btn-bg-active': '#28581c', '--btn-color': '#ffffff' } as React.CSSProperties}
>
  Save
</Button>
```

| Variable | Valor por defecto (primary, visión normal) | Uso |
|---|---|---|
| `--btn-bg` | `#1c64d7` | Fondo |
| `--btn-bg-hover` | `#1855b7` | Fondo en hover |
| `--btn-bg-active` | `#144697` | Fondo activo |
| `--btn-color` | `#ffffff` | Texto (≥4.5:1 contra los tres fondos) |
| `--btn-border` | `transparent` | Borde |
| `--btn-focus` | `#1c64d7` | Contorno de foco (≥3:1 contra la página) |

> Mantén el texto ≥ 4.5:1 y los bordes, rellenos e indicadores de foco ≥ 3:1 (WCAG 1.4.3 / 1.4.11), también bajo simulación de protanopia, deuteranopia y tritanopia. La paleta por defecto y su justificación están en [COLOR_A11Y.md](../../COLOR_A11Y.md).

## Interfaz TypeScript

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}
```

## Componentes Relacionados

- [**Input**](./Input.md) - Para campos de entrada que se emparejan con botones
- [**Alert**](./Alert.md) - Para mostrar resultados de acciones
- [**Spinner**](./Spinner.md) - Indicadores de carga independientes

---

[← Volver a la Documentación](../README.md)