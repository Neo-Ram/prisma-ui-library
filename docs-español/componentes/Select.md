# Componente Select

Componente de menú desplegable para selección única con búsqueda, agrupación y características de accesibilidad.

## Importación

```tsx
import { Select } from 'neo-ram-prisma';
```

## Uso Básico

```tsx
<Select 
  label="País" 
  options={[
    { value: 'es', label: 'España' },
    { value: 'fr', label: 'Francia' },
    { value: 'de', label: 'Alemania' }
  ]}
  variant="primary" 
/>
```

## Referencia de Props

### Props Requeridas
- `label` - Etiqueta de texto para el select
- `options` - Array de opciones del select

### Props Opcionales

| Prop | Tipo | Predeterminado | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Variante de color del select |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño del select |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Anulación del tamaño de fuente |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Modo de accesibilidad para daltonismo |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Modo de mejora de accesibilidad |
| `value` | `string` | - | Valor seleccionado controlado |
| `defaultValue` | `string` | - | Valor predeterminado no controlado |
| `placeholder` | `string` | `'Seleccionar...'` | Texto de placeholder cuando no hay selección |
| `disabled` | `boolean` | `false` | Desactivar el select |
| `required` | `boolean` | `false` | Marcar select como requerido |
| `error` | `boolean` | `false` | Mostrar estado de error |
| `errorMessage` | `string` | - | Mensaje de error a mostrar |
| `helperText` | `string` | - | Texto de ayuda para el select |
| `searchable` | `boolean` | `false` | Habilitar funcionalidad de búsqueda |
| `searchPlaceholder` | `string` | `'Buscar...'` | Placeholder para el campo de búsqueda |
| `clearable` | `boolean` | `false` | Mostrar botón para limpiar selección |
| `loading` | `boolean` | `false` | Mostrar estado de carga |
| `loadingMessage` | `string` | `'Cargando...'` | Mensaje mostrado durante la carga |
| `noOptionsMessage` | `string` | `'No hay opciones'` | Mensaje cuando no hay opciones disponibles |
| `maxHeight` | `number` | `200` | Altura máxima del menú desplegable en píxeles |
| `onChange` | `(value: string, option: Option) => void` | - | Manejador de evento de cambio |
| `onSearch` | `(searchTerm: string) => void` | - | Manejador de evento de búsqueda |
| `className` | `string` | - | Clases CSS adicionales |
| `name` | `string` | - | Nombre del campo de formulario |

### Interfaz de Opción

```tsx
interface Option {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
  group?: string;
}

interface OptionGroup {
  label: string;
  options: Option[];
}
```

## Ejemplos

### Selects Básicos

```tsx
// Select simple
<Select 
  label="Idioma Preferido"
  options={[
    { value: 'es', label: 'Español' },
    { value: 'en', label: 'Inglés' },
    { value: 'fr', label: 'Francés' },
    { value: 'de', label: 'Alemán' }
  ]}
  variant="primary"
/>

// Con placeholder personalizado
<Select 
  label="Moneda"
  placeholder="Elige una moneda..."
  options={[
    { value: 'eur', label: 'Euro (€)' },
    { value: 'usd', label: 'Dólar Estadounidense ($)' },
    { value: 'gbp', label: 'Libra Esterlina (£)' }
  ]}
  variant="success"
/>
```

### Con Búsqueda

```tsx
function SelectPaises() {
  const paises = [
    { value: 'es', label: 'España', description: 'Reino de España' },
    { value: 'fr', label: 'Francia', description: 'República Francesa' },
    { value: 'de', label: 'Alemania', description: 'República Federal de Alemania' },
    { value: 'it', label: 'Italia', description: 'República Italiana' },
    { value: 'pt', label: 'Portugal', description: 'República Portuguesa' },
    { value: 'nl', label: 'Países Bajos', description: 'Reino de los Países Bajos' }
  ];

  return (
    <Select
      label="País de Residencia"
      options={paises}
      searchable
      searchPlaceholder="Buscar países..."
      clearable
      variant="primary"
      helperText="Selecciona tu país de residencia actual"
    />
  );
}
```

### Estado Controlado

```tsx
function SelectControlado() {
  const [paisSeleccionado, setPaisSeleccionado] = useState('');
  const [ciudades, setCiudades] = useState([]);

  const paises = [
    { value: 'es', label: 'España' },
    { value: 'fr', label: 'Francia' },
    { value: 'de', label: 'Alemania' }
  ];

  const mapaCiudades = {
    es: [
      { value: 'mad', label: 'Madrid' },
      { value: 'bcn', label: 'Barcelona' },
      { value: 'sev', label: 'Sevilla' }
    ],
    fr: [
      { value: 'par', label: 'París' },
      { value: 'lyon', label: 'Lyon' },
      { value: 'mars', label: 'Marsella' }
    ],
    de: [
      { value: 'ber', label: 'Berlín' },
      { value: 'mun', label: 'Múnich' },
      { value: 'ham', label: 'Hamburgo' }
    ]
  };

  const manejarCambioPais = (valor) => {
    setPaisSeleccionado(valor);
    setCiudades(mapaCiudades[valor] || []);
  };

  return (
    <div className="selectores-ubicacion">
      <Select
        label="País"
        options={paises}
        value={paisSeleccionado}
        onChange={manejarCambioPais}
        variant="primary"
        required
      />
      
      {paisSeleccionado && (
        <Select
          label="Ciudad"
          options={ciudades}
          placeholder="Seleccionar ciudad..."
          variant="secondary"
          disabled={ciudades.length === 0}
        />
      )}
    </div>
  );
}
```

### Con Opciones Agrupadas

```tsx
function SelectCategorizado() {
  const opcionesAgrupadas = [
    {
      label: 'Frutas',
      options: [
        { value: 'manzana', label: 'Manzana', group: 'frutas' },
        { value: 'banana', label: 'Plátano', group: 'frutas' },
        { value: 'naranja', label: 'Naranja', group: 'frutas' }
      ]
    },
    {
      label: 'Verduras',
      options: [
        { value: 'zanahoria', label: 'Zanahoria', group: 'verduras' },
        { value: 'broccoli', label: 'Brócoli', group: 'verduras' },
        { value: 'espinaca', label: 'Espinaca', group: 'verduras' }
      ]
    },
    {
      label: 'Proteínas',
      options: [
        { value: 'pollo', label: 'Pollo', group: 'proteinas' },
        { value: 'salmon', label: 'Salmón', group: 'proteinas' },
        { value: 'tofu', label: 'Tofu', group: 'proteinas' }
      ]
    }
  ];

  return (
    <Select
      label="Ingrediente Principal"
      options={opcionesAgrupadas}
      searchable
      variant="success"
      helperText="Selecciona el ingrediente principal para tu receta"
    />
  );
}
```

### Con Carga Asíncrona

```tsx
function SelectAsincrono() {
  const [opciones, setOpciones] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  const buscarUsuarios = useCallback(
    debounce(async (termino) => {
      if (termino.length < 2) {
        setOpciones([]);
        return;
      }
      
      setCargando(true);
      try {
        const respuesta = await fetch(`/api/usuarios?buscar=${termino}`);
        const usuarios = await respuesta.json();
        
        const opcionesFormateadas = usuarios.map(usuario => ({
          value: usuario.id.toString(),
          label: usuario.nombre,
          description: usuario.email
        }));
        
        setOpciones(opcionesFormateadas);
      } catch (error) {
        console.error('Error buscando usuarios:', error);
        setOpciones([]);
      } finally {
        setCargando(false);
      }
    }, 300),
    []
  );

  const manejarBusqueda = (termino) => {
    setBusqueda(termino);
    buscarUsuarios(termino);
  };

  return (
    <Select
      label="Asignar a Usuario"
      options={opciones}
      searchable
      loading={cargando}
      onSearch={manejarBusqueda}
      searchPlaceholder="Escribe para buscar usuarios..."
      loadingMessage="Buscando usuarios..."
      noOptionsMessage={busqueda.length < 2 ? 'Escribe al menos 2 caracteres' : 'No se encontraron usuarios'}
      variant="primary"
    />
  );
}
```

### Manejo de Errores

```tsx
function SelectValidado() {
  const [valor, setValor] = useState('');
  const [mostrarError, setMostrarError] = useState(false);

  const opciones = [
    { value: 'opcion1', label: 'Opción 1' },
    { value: 'opcion2', label: 'Opción 2' },
    { value: 'opcion3', label: 'Opción 3' }
  ];

  const manejarEnvio = () => {
    if (!valor) {
      setMostrarError(true);
    } else {
      setMostrarError(false);
      // Continuar con el envío
    }
  };

  return (
    <>
      <Select
        label="Selección Requerida"
        options={opciones}
        value={valor}
        onChange={(nuevoValor) => {
          setValor(nuevoValor);
          setMostrarError(false);
        }}
        error={mostrarError}
        errorMessage="Por favor selecciona una opción antes de continuar"
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

### Diferentes Tamaños

```tsx
<Select label="Extra Pequeño" options={opciones} size="xs" variant="primary" />
<Select label="Pequeño" options={opciones} size="sm" variant="secondary" />
<Select label="Mediano" options={opciones} size="md" variant="success" />
<Select label="Grande" options={opciones} size="lg" variant="warning" />
<Select label="Extra Grande" options={opciones} size="xl" variant="danger" />
```

### Características de Accesibilidad

```tsx
// Modo de alto contraste
<Select 
  label="Select de alto contraste" 
  options={opciones}
  accessibility="high-contrast"
  variant="primary"
  searchable
/>

// Para usuarios con deuteranopia
<Select 
  label="Estado crítico" 
  options={opciones}
  colorVision="deuteranopia"
  variant="danger"
/>

// Modo de baja visión
<Select 
  label="Select de gran visibilidad" 
  options={opciones}
  accessibility="low-vision"
  size="xl"
  variant="primary"
/>
```

### Integración con Formularios

```tsx
function FormularioCompleto() {
  const [datosFormulario, setDatosFormulario] = useState({
    titulo: '',
    categoria: '',
    prioridad: '',
    asignadoA: ''
  });

  const categorias = [
    { value: 'bug', label: 'Error', description: 'Reporte de bug' },
    { value: 'feature', label: 'Característica', description: 'Nueva funcionalidad' },
    { value: 'improvement', label: 'Mejora', description: 'Optimización existente' }
  ];

  const prioridades = [
    { value: 'baja', label: 'Baja', description: 'No urgente' },
    { value: 'media', label: 'Media', description: 'Urgencia moderada' },
    { value: 'alta', label: 'Alta', description: 'Requiere atención inmediata' },
    { value: 'critica', label: 'Crítica', description: 'Bloqueante del sistema' }
  ];

  return (
    <form className="formulario-ticket">
      <Input
        label="Título del Ticket"
        value={datosFormulario.titulo}
        onChange={(e) => setDatosFormulario(prev => ({ ...prev, titulo: e.target.value }))}
        required
      />
      
      <Select
        label="Categoría"
        options={categorias}
        value={datosFormulario.categoria}
        onChange={(valor) => setDatosFormulario(prev => ({ ...prev, categoria: valor }))}
        variant="primary"
        required
      />
      
      <Select
        label="Prioridad"
        options={prioridades}
        value={datosFormulario.prioridad}
        onChange={(valor) => setDatosFormulario(prev => ({ ...prev, prioridad: valor }))}
        variant={datosFormulario.prioridad === 'critica' ? 'danger' : 
                datosFormulario.prioridad === 'alta' ? 'warning' : 'primary'}
        required
      />
      
      <Button type="submit" variant="primary">
        Crear Ticket
      </Button>
    </form>
  );
}
```

## Características de Accesibilidad

### Cumplimiento WCAG 2.1 AA
- ✅ **Combobox ARIA** con atributos apropiados
- ✅ **Navegación por teclado** completa con flechas y búsqueda
- ✅ **Gestión de foco** dentro del menú desplegable
- ✅ **Anuncios de estado** para lectores de pantalla

### Navegación por Teclado
- **Flecha Arriba/Abajo**: Navegar entre opciones
- **Enter/Espacio**: Seleccionar opción actual
- **Escape**: Cerrar menú desplegable
- **Tab**: Mover foco fuera del select
- **Escritura**: Buscar opciones (en selects buscables)

### Soporte para Lectores de Pantalla
- Se anuncia como "Combobox" con estado expandido/colapsado
- Opciones anunciadas con posición en la lista
- Texto de descripción asociado apropiadamente
- Cambios de selección anunciados inmediatamente

### Gestión de Estados de Carga
- Estados de carga comunicados a tecnología asistiva
- Mensajes de "sin opciones" apropiadamente anunciados
- Indicadores de progreso para búsquedas asíncronas
- Manejo gracioso de errores de red

## Interfaz TypeScript

```tsx
interface Option {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
  group?: string;
}

interface OptionGroup {
  label: string;
  options: Option[];
}

interface SelectProps {
  label: string;
  options: Option[] | OptionGroup[];
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  clearable?: boolean;
  loading?: boolean;
  loadingMessage?: string;
  noOptionsMessage?: string;
  maxHeight?: number;
  onChange?: (value: string, option: Option) => void;
  onSearch?: (searchTerm: string) => void;
  className?: string;
  name?: string;
}
```

## Componentes Relacionados

- [**Radiogroup**](./Radiogroup.md) - Para selección única con todas las opciones visibles
- [**Input**](./Input.md) - Para entrada de texto libre

---

[← Volver a la Documentación](../README.md)