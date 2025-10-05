# Componente Spinner

Componente de indicador de carga con 5 variantes diferentes y características de accesibilidad.

## Importación

```tsx
import { Spinner } from 'neo-ram-prisma';
```

## Uso Básico

```tsx
<Spinner variant="primary" />
```

## Referencia de Props

### Props Requeridas
Ninguna - todas las props son opcionales con valores predeterminados sensatos.

### Props Opcionales

| Prop | Tipo | Predeterminado | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Variante de color del spinner |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño del spinner |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Tamaño de fuente para texto de etiqueta |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Modo de accesibilidad para daltonismo |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Modo de mejora de accesibilidad |
| `spinnerType` | `'circular' \| 'dots' \| 'bars' \| 'pulse' \| 'ring'` | `'circular'` | Tipo de animación del spinner |
| `label` | `string` | - | Etiqueta accesible para lectores de pantalla |
| `showLabel` | `boolean` | `false` | Mostrar texto de etiqueta visualmente |
| `speed` | `'slow' \| 'normal' \| 'fast'` | `'normal'` | Velocidad de animación |
| `center` | `boolean` | `false` | Centrar el spinner en su contenedor |
| `className` | `string` | - | Clases CSS adicionales |

## Ejemplos

### Tipos Básicos de Spinner

```tsx
// Spinner circular (predeterminado)
<Spinner variant="primary" spinnerType="circular" />

// Spinner de puntos
<Spinner variant="secondary" spinnerType="dots" />

// Spinner de barras
<Spinner variant="success" spinnerType="bars" />

// Spinner de pulso
<Spinner variant="warning" spinnerType="pulse" />

// Spinner de anillo
<Spinner variant="danger" spinnerType="ring" />
```

### Diferentes Tamaños

```tsx
<Spinner size="xs" variant="primary" />
<Spinner size="sm" variant="secondary" />
<Spinner size="md" variant="success" />
<Spinner size="lg" variant="warning" />
<Spinner size="xl" variant="danger" />
```

### Con Etiquetas

```tsx
// Etiquetas visibles
<Spinner 
  variant="primary" 
  label="Cargando contenido..." 
  showLabel 
/>

<Spinner 
  variant="success" 
  label="Procesando tu solicitud..." 
  showLabel 
  spinnerType="dots"
/>

// Etiquetas solo para lectores de pantalla
<Spinner 
  variant="primary" 
  label="Cargando datos del servidor"
  showLabel={false} // Etiqueta solo para lectores de pantalla
/>
```

### Estados de Carga en Componentes

```tsx
// Botón con spinner de carga
function BotonCargando() {
  const [estaCargando, setEstaCargando] = useState(false);

  const manejarClic = async () => {
    setEstaCargando(true);
    try {
      await guardarDatos();
    } finally {
      setEstaCargando(false);
    }
  };

  return (
    <Button 
      onClick={manejarClic} 
      disabled={estaCargando}
      variant="primary"
    >
      {estaCargando ? (
        <>
          <Spinner 
            size="sm" 
            variant="primary" 
            label="Guardando..."
            spinnerType="circular"
          />
          <span>Guardando...</span>
        </>
      ) : (
        'Guardar Cambios'
      )}
    </Button>
  );
}

// Estado de carga de datos
function TablaData() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerDatos().then(resultado => {
      setDatos(resultado);
      setCargando(false);
    });
  }, []);

  if (cargando) {
    return (
      <div className="contenedor-carga">
        <Spinner 
          variant="primary" 
          size="lg"
          label="Cargando datos de la tabla..."
          showLabel
          center
          spinnerType="dots"
        />
      </div>
    );
  }

  return (
    <table>
      {/* Contenido de la tabla */}
    </table>
  );
}
```

### Carga a Nivel de Página

```tsx
function SpinnerPagina({ mensaje = "Cargando..." }) {
  return (
    <div className="overlay-spinner-pagina">
      <div className="contenido-spinner-pagina">
        <Spinner 
          variant="primary" 
          size="xl"
          label={mensaje}
          showLabel
          spinnerType="ring"
          center
        />
      </div>
    </div>
  );
}

// Uso en la aplicación
function App() {
  const [inicializando, setInicializando] = useState(true);

  useEffect(() => {
    inicializarApp().then(() => {
      setInicializando(false);
    });
  }, []);

  if (inicializando) {
    return <SpinnerPagina mensaje="Inicializando aplicación..." />;
  }

  return (
    <div className="app">
      {/* Contenido de la aplicación */}
    </div>
  );
}
```

### Carga de Envío de Formulario

```tsx
function FormularioContacto() {
  const [datosFormulario, setDatosFormulario] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setEnviando(true);
    
    try {
      await enviarFormulario(datosFormulario);
      setEnviado(true);
    } catch (error) {
      // Manejar error
    } finally {
      setEnviando(false);
    }
  };

  if (enviado) {
    return (
      <Alert variant="success">
        ✅ ¡Gracias! Tu mensaje ha sido enviado exitosamente.
      </Alert>
    );
  }

  return (
    <form onSubmit={manejarEnvio}>
      {/* Campos del formulario */}
      
      <Button 
        type="submit" 
        variant="primary" 
        disabled={enviando}
      >
        {enviando ? (
          <>
            <Spinner 
              size="sm" 
              variant="primary"
              label="Enviando mensaje..."
              spinnerType="circular"
            />
            Enviando...
          </>
        ) : (
          'Enviar Mensaje'
        )}
      </Button>
      
      {enviando && (
        <div className="overlay-carga-formulario">
          <Spinner 
            variant="primary" 
            size="lg"
            label="Procesando tu envío..."
            showLabel
            center
            spinnerType="pulse"
          />
        </div>
      )}
    </form>
  );
}
```

### Diferentes Velocidades de Animación

```tsx
<Spinner speed="slow" variant="primary" label="Carga lenta..." />
<Spinner speed="normal" variant="secondary" label="Carga normal..." />
<Spinner speed="fast" variant="success" label="Carga rápida..." />
```

### Estados de Carga Condicionales

```tsx
function CargadorInteligente({ 
  cargando, 
  error, 
  children, 
  mensajeCarga = "Cargando...",
  mensajeError = "Algo salió mal" 
}) {
  if (error) {
    return (
      <Alert variant="danger">
        {mensajeError}
      </Alert>
    );
  }

  if (cargando) {
    return (
      <div className="cargador-contenido">
        <Spinner 
          variant="primary"
          size="md"
          label={mensajeCarga}
          showLabel
          center
          spinnerType="dots"
        />
      </div>
    );
  }

  return children;
}

// Uso
function PerfilUsuario({ userId }) {
  const { data: usuario, cargando, error } = useUsuario(userId);

  return (
    <CargadorInteligente 
      cargando={cargando}
      error={error}
      mensajeCarga="Cargando perfil de usuario..."
      mensajeError="Falló al cargar perfil de usuario"
    >
      <div className="perfil-usuario">
        <h1>{usuario.nombre}</h1>
        <p>{usuario.email}</p>
      </div>
    </CargadorInteligente>
  );
}
```

### Características de Accesibilidad

```tsx
// Modo de alto contraste
<Spinner 
  variant="primary" 
  accessibility="high-contrast"
  label="Cargando con visibilidad mejorada"
  showLabel
/>

// Para usuarios con deuteranopia
<Spinner 
  variant="success" 
  colorVision="deuteranopia"
  label="Procesando estado de éxito"
  spinnerType="pulse"
/>

// Modo de baja visión
<Spinner 
  variant="primary" 
  accessibility="low-vision"
  size="xl"
  label="Spinner grande para usuarios con baja visión"
  showLabel
/>

// Consideración de movimiento reducido
function SpinnerSeguroMovimiento(props) {
  const prefiereMovimientoReducido = useMediaQuery('(prefers-reduced-motion: reduce)');
  
  return (
    <Spinner 
      {...props}
      speed={prefiereMovimientoReducido ? 'slow' : props.speed}
      spinnerType={prefiereMovimientoReducido ? 'pulse' : props.spinnerType}
    />
  );
}
```

## Características de Accesibilidad

### Cumplimiento WCAG 2.1 AA
- ✅ **Atributos ARIA** (`role="status"`, `aria-label`)
- ✅ **Soporte para lectores de pantalla** con etiquetas significativas
- ✅ **Consideración de movimiento reducido** para usuarios con trastornos vestibulares
- ✅ **Gestión de foco** no atrapa el foco durante la carga

### Soporte para Lectores de Pantalla
- Anuncia estado de carga con `role="status"`
- Etiquetas personalizadas proporcionan contexto sobre lo que se está cargando
- Actualizaciones de región viva cuando cambia el estado de carga
- Estructura semántica apropiada para tecnología asistiva

### Soporte para Movimiento Reducido
- Respeta la consulta de medios `prefers-reduced-motion`
- Ofrece animaciones estáticas o más lentas para usuarios sensibles
- Animación de pulso como respaldo para usuarios sensibles al movimiento
- Velocidades de animación configurables

### Accesibilidad Visual
- Variantes de alto contraste para mejor visibilidad
- Variantes amigables para daltónicos
- Opciones de tamaño para diferentes necesidades visuales
- Indicación visual clara del estado de carga

## Tipos de Spinner

### 1. Circular (Predeterminado)
- Círculo giratorio clásico
- Animación suave y continua
- Funciona bien en todos los contextos

### 2. Puntos
- Tres puntos que rebotan
- Animación sutil y juguetona
- Bueno para uso en línea

### 3. Barras
- Barras animadas de alturas variables
- Apariencia moderna y técnica
- Adecuado para procesamiento de datos

### 4. Pulso
- Animación de círculo pulsante
- Opción suave y accesible
- Mejor para preferencias de movimiento reducido

### 5. Anillo
- Anillo giratorio con espacio
- Apariencia limpia y mínima
- Bueno para tamaños más grandes

## Interfaz TypeScript

```tsx
interface SpinnerProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  spinnerType?: 'circular' | 'dots' | 'bars' | 'pulse' | 'ring';
  label?: string;
  showLabel?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
  center?: boolean;
  className?: string;
}
```

## Componentes Relacionados

- [**Button**](./Button.md) - A menudo contiene spinners de carga
- [**Alert**](./Alert.md) - Para mostrar mensajes de carga

---

[← Volver a la Documentación](../README.md)