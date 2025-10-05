# Componente Pagination

Componente de paginación para navegar a través de grandes conjuntos de datos con características de accesibilidad.

## Importación

```tsx
import { Pagination } from 'neo-ram-prisma';
```

## Uso Básico

```tsx
<Pagination 
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log('Página:', page)}
  variant="primary" 
/>
```

## Referencia de Props

### Props Requeridas
- `currentPage` - Página actual (base 1)
- `totalPages` - Número total de páginas
- `onPageChange` - Función callback cuando cambia la página

### Props Opcionales

| Prop | Tipo | Predeterminado | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Variante de color de la paginación |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño de los controles de paginación |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Anulación del tamaño de fuente |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Modo de accesibilidad para daltonismo |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Modo de mejora de accesibilidad |
| `showFirstLast` | `boolean` | `true` | Mostrar botones Primera/Última página |
| `showPrevNext` | `boolean` | `true` | Mostrar botones Anterior/Siguiente |
| `showPageNumbers` | `boolean` | `true` | Mostrar números de página |
| `maxPageNumbers` | `number` | `5` | Número máximo de páginas visibles |
| `showJumpToPage` | `boolean` | `false` | Mostrar campo de salto directo a página |
| `showPageSize` | `boolean` | `false` | Mostrar selector de tamaño de página |
| `pageSizeOptions` | `number[]` | `[10, 20, 50, 100]` | Opciones de tamaño de página |
| `pageSize` | `number` | `10` | Tamaño actual de página |
| `totalItems` | `number` | - | Número total de elementos (para mostrar información) |
| `showInfo` | `boolean` | `false` | Mostrar información "Mostrando X de Y elementos" |
| `disabled` | `boolean` | `false` | Desactivar todos los controles |
| `loading` | `boolean` | `false` | Mostrar estado de carga |
| `firstPageText` | `string` | `'Primera'` | Texto del botón primera página |
| `lastPageText` | `string` | `'Última'` | Texto del botón última página |
| `prevPageText` | `string` | `'Anterior'` | Texto del botón página anterior |
| `nextPageText` | `string` | `'Siguiente'` | Texto del botón página siguiente |
| `jumpToPageText` | `string` | `'Ir a página'` | Etiqueta del campo salto a página |
| `pageSizeText` | `string` | `'Elementos por página'` | Etiqueta del selector de tamaño |
| `onPageSizeChange` | `(pageSize: number) => void` | - | Callback cuando cambia el tamaño de página |
| `className` | `string` | - | Clases CSS adicionales |

## Ejemplos

### Uso Básico

```tsx
function PaginacionBasica() {
  const [paginaActual, setPaginaActual] = useState(1);
  const totalPaginas = 20;

  return (
    <Pagination 
      currentPage={paginaActual}
      totalPages={totalPaginas}
      onPageChange={setPaginaActual}
      variant="primary"
    />
  );
}
```

### Paginación Completa con Información

```tsx
function PaginacionCompleta() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [tamañoPagina, setTamañoPagina] = useState(10);
  const [cargando, setCargando] = useState(false);
  
  const totalElementos = 250;
  const totalPaginas = Math.ceil(totalElementos / tamañoPagina);

  const manejarCambioPagina = async (nuevaPagina) => {
    setCargando(true);
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 500));
      setPaginaActual(nuevaPagina);
    } finally {
      setCargando(false);
    }
  };

  const manejarCambioTamaño = (nuevoTamaño) => {
    setTamañoPagina(nuevoTamaño);
    setPaginaActual(1); // Resetear a primera página
  };

  return (
    <div className="paginacion-completa">
      <Pagination 
        currentPage={paginaActual}
        totalPages={totalPaginas}
        pageSize={tamañoPagina}
        totalItems={totalElementos}
        onPageChange={manejarCambioPagina}
        onPageSizeChange={manejarCambioTamaño}
        showInfo
        showPageSize
        showJumpToPage
        loading={cargando}
        variant="primary"
        maxPageNumbers={7}
      />
    </div>
  );
}
```

### Tabla con Paginación

```tsx
function TablaConPaginacion() {
  const [datos, setDatos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [tamañoPagina, setTamañoPagina] = useState(20);
  const [totalElementos, setTotalElementos] = useState(0);
  const [cargando, setCargando] = useState(false);

  const cargarDatos = async (pagina, tamaño) => {
    setCargando(true);
    try {
      const respuesta = await fetch(
        `/api/usuarios?pagina=${pagina}&tamaño=${tamaño}`
      );
      const resultado = await respuesta.json();
      
      setDatos(resultado.data);
      setTotalElementos(resultado.total);
    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarDatos(paginaActual, tamañoPagina);
  }, [paginaActual, tamañoPagina]);

  const totalPaginas = Math.ceil(totalElementos / tamañoPagina);

  return (
    <div className="tabla-paginada">
      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Fecha Registro</th>
          </tr>
        </thead>
        <tbody>
          {cargando ? (
            <tr>
              <td colSpan={4} className="cargando">
                <Spinner variant="primary" label="Cargando usuarios..." />
              </td>
            </tr>
          ) : (
            datos.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{usuario.fechaRegistro}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <Pagination 
        currentPage={paginaActual}
        totalPages={totalPaginas}
        pageSize={tamañoPagina}
        totalItems={totalElementos}
        onPageChange={setPaginaActual}
        onPageSizeChange={(nuevoTamaño) => {
          setTamañoPagina(nuevoTamaño);
          setPaginaActual(1);
        }}
        showInfo
        showPageSize
        showJumpToPage
        loading={cargando}
        variant="primary"
        pageSizeOptions={[10, 20, 50, 100]}
      />
    </div>
  );
}
```

### Galería con Paginación

```tsx
function GaleriaPaginada() {
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const imagenesPorPagina = 12;
  
  const totalPaginas = Math.ceil(imagenes.length / imagenesPorPagina);
  const indiceInicio = (paginaActual - 1) * imagenesPorPagina;
  const imagenesPagina = imagenes.slice(indiceInicio, indiceInicio + imagenesPorPagina);

  return (
    <div className="galeria-paginada">
      <div className="rejilla-imagenes">
        {imagenesPagina.map((imagen, indice) => (
          <div key={indice} className="tarjeta-imagen">
            <img 
              src={imagen.url} 
              alt={imagen.descripcion}
              loading="lazy"
            />
            <div className="info-imagen">
              <h4>{imagen.titulo}</h4>
              <p>{imagen.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {totalPaginas > 1 && (
        <Pagination 
          currentPage={paginaActual}
          totalPages={totalPaginas}
          onPageChange={setPaginaActual}
          variant="secondary"
          maxPageNumbers={5}
          showInfo
          totalItems={imagenes.length}
          pageSize={imagenesPorPagina}
        />
      )}
    </div>
  );
}
```

### Paginación de Búsqueda

```tsx
function ResultadosBusqueda() {
  const [termino, setTermino] = useState('');
  const [resultados, setResultados] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalResultados, setTotalResultados] = useState(0);
  const [cargando, setCargando] = useState(false);
  
  const resultadosPorPagina = 10;
  const totalPaginas = Math.ceil(totalResultados / resultadosPorPagina);

  const buscar = async (nuevoTermino = termino, pagina = 1) => {
    if (!nuevoTermino.trim()) return;
    
    setCargando(true);
    try {
      const respuesta = await fetch(
        `/api/buscar?q=${encodeURIComponent(nuevoTermino)}&pagina=${pagina}&limite=${resultadosPorPagina}`
      );
      const data = await respuesta.json();
      
      setResultados(data.resultados);
      setTotalResultados(data.total);
      setPaginaActual(pagina);
    } catch (error) {
      console.error('Error en la búsqueda:', error);
    } finally {
      setCargando(false);
    }
  };

  const manejarCambioPagina = (nuevaPagina) => {
    buscar(termino, nuevaPagina);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="busqueda-paginada">
      <div className="barra-busqueda">
        <Input
          label="Buscar"
          value={termino}
          onChange={(e) => setTermino(e.target.value)}
          placeholder="Escribe tu búsqueda..."
          onKeyPress={(e) => e.key === 'Enter' && buscar()}
        />
        <Button 
          onClick={() => buscar()} 
          variant="primary"
          disabled={cargando}
        >
          {cargando ? 'Buscando...' : 'Buscar'}
        </Button>
      </div>

      {totalResultados > 0 && (
        <div className="info-resultados">
          Encontrados {totalResultados.toLocaleString()} resultados para "{termino}"
        </div>
      )}

      <div className="lista-resultados">
        {resultados.map((resultado, indice) => (
          <div key={indice} className="resultado">
            <h3>{resultado.titulo}</h3>
            <p>{resultado.resumen}</p>
            <a href={resultado.url} className="enlace-resultado">
              Ver más →
            </a>
          </div>
        ))}
      </div>

      {totalPaginas > 1 && (
        <Pagination 
          currentPage={paginaActual}
          totalPages={totalPaginas}
          onPageChange={manejarCambioPagina}
          totalItems={totalResultados}
          pageSize={resultadosPorPagina}
          showInfo
          loading={cargando}
          variant="primary"
          maxPageNumbers={7}
        />
      )}
    </div>
  );
}
```

### Paginación Móvil Simplificada

```tsx
function PaginacionMovil() {
  const [paginaActual, setPaginaActual] = useState(1);
  const totalPaginas = 15;
  const esPantallaPequeña = useMediaQuery('(max-width: 768px)');

  return (
    <Pagination 
      currentPage={paginaActual}
      totalPages={totalPaginas}
      onPageChange={setPaginaActual}
      variant="primary"
      showFirstLast={!esPantallaPequeña}
      showPageNumbers={!esPantallaPequeña}
      maxPageNumbers={esPantallaPequeña ? 3 : 7}
      size={esPantallaPequeña ? 'sm' : 'md'}
    />
  );
}
```

### Diferentes Tamaños y Variantes

```tsx
<Pagination 
  currentPage={1} 
  totalPages={10} 
  onPageChange={() => {}}
  size="xs" 
  variant="primary" 
/>

<Pagination 
  currentPage={1} 
  totalPages={10} 
  onPageChange={() => {}}
  size="sm" 
  variant="secondary" 
/>

<Pagination 
  currentPage={1} 
  totalPages={10} 
  onPageChange={() => {}}
  size="lg" 
  variant="success" 
/>

<Pagination 
  currentPage={1} 
  totalPages={10} 
  onPageChange={() => {}}
  size="xl" 
  variant="danger" 
/>
```

### Características de Accesibilidad

```tsx
// Modo de alto contraste
<Pagination 
  currentPage={1}
  totalPages={10}
  onPageChange={() => {}}
  accessibility="high-contrast"
  variant="primary"
/>

// Para usuarios con deuteranopia
<Pagination 
  currentPage={1}
  totalPages={10}
  onPageChange={() => {}}
  colorVision="deuteranopia"
  variant="success"
/>

// Modo de baja visión
<Pagination 
  currentPage={1}
  totalPages={10}
  onPageChange={() => {}}
  accessibility="low-vision"
  size="xl"
  variant="primary"
/>
```

### Paginación con Estado de Error

```tsx
function PaginacionConError() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);
  
  const totalPaginas = 10;

  const manejarCambioPagina = async (nuevaPagina) => {
    setCargando(true);
    setError(null);
    
    try {
      await cargarDatosPagina(nuevaPagina);
      setPaginaActual(nuevaPagina);
    } catch (err) {
      setError('Error al cargar la página. Inténtalo de nuevo.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div>
      {error && (
        <Alert variant="danger" className="mb-4">
          {error}
        </Alert>
      )}
      
      <Pagination 
        currentPage={paginaActual}
        totalPages={totalPaginas}
        onPageChange={manejarCambioPagina}
        loading={cargando}
        disabled={!!error}
        variant={error ? "danger" : "primary"}
      />
    </div>
  );
}
```

## Características de Accesibilidad

### Cumplimiento WCAG 2.1 AA
- ✅ **Navegación landmark** con `<nav>` y `aria-label="pagination"`
- ✅ **Estado de página actual** con `aria-current="page"`
- ✅ **Etiquetas descriptivas** para todos los controles
- ✅ **Navegación por teclado** completa

### Navegación por Teclado
- **Tab**: Navegar entre controles de paginación
- **Enter/Espacio**: Activar botón o enlace enfocado
- **Flecha Izquierda/Derecha**: Navegar entre páginas (opcional)
- **Home**: Ir a primera página (cuando está enfocado)
- **End**: Ir a última página (cuando está enfocado)

### Soporte para Lectores de Pantalla
- Se anuncia como "navegación de paginación"
- Página actual anunciada claramente
- Botones deshabilitados comunicados apropiadamente
- Información de contexto (X de Y páginas) proporcionada

### Estados Visuales
- **Página actual** claramente diferenciada
- **Botones deshabilitados** visualmente distintos
- **Estado de carga** indicado apropiadamente
- **Foco visible** en todos los elementos interactivos

## Interfaz TypeScript

```tsx
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  showPageNumbers?: boolean;
  maxPageNumbers?: number;
  showJumpToPage?: boolean;
  showPageSize?: boolean;
  pageSizeOptions?: number[];
  pageSize?: number;
  totalItems?: number;
  showInfo?: boolean;
  disabled?: boolean;
  loading?: boolean;
  firstPageText?: string;
  lastPageText?: string;
  prevPageText?: string;
  nextPageText?: string;
  jumpToPageText?: string;
  pageSizeText?: string;
  onPageSizeChange?: (pageSize: number) => void;
  className?: string;
}
```

## Mejores Prácticas

### Rendimiento
- Implementar lazy loading para contenido paginado
- Usar debouncing para salto directo a página
- Cachear páginas visitadas recientemente
- Optimizar queries de base de datos con LIMIT/OFFSET

### UX/UI
- Mantener contexto visual durante la navegación
- Mostrar indicador de carga para operaciones asíncronas
- Proporcionar información sobre total de elementos
- Considerar paginación infinita para contenido móvil

## Componentes Relacionados

- [**Breadcrumb**](./Breadcrumb.md) - Para navegación jerárquica
- [**Button**](./Button.md) - Para controles de navegación
- [**Select**](./Select.md) - Para selector de tamaño de página

---

[← Volver a la Documentación](../README.md)