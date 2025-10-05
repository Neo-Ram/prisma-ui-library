# Componente Breadcrumb

Componente de navegación que muestra la ubicación actual del usuario en la jerarquía del sitio web.

## Importación

```tsx
import { Breadcrumb } from 'neo-ram-prisma';
```

## Uso Básico

```tsx
<Breadcrumb 
  items={[
    { label: 'Inicio', href: '/' },
    { label: 'Productos', href: '/productos' },
    { label: 'Laptops', href: '/productos/laptops' },
    { label: 'MacBook Pro', href: '/productos/laptops/macbook-pro' }
  ]}
  variant="primary" 
/>
```

## Referencia de Props

### Props Requeridas
- `items` - Array de elementos del breadcrumb

### Props Opcionales

| Prop | Tipo | Predeterminado | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Variante de color del breadcrumb |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño del breadcrumb |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Anulación del tamaño de fuente |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Modo de accesibilidad para daltonismo |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Modo de mejora de accesibilidad |
| `separator` | `'arrow' \| 'slash' \| 'chevron' \| 'bullet' \| 'custom'` | `'arrow'` | Tipo de separador entre elementos |
| `customSeparator` | `ReactNode` | - | Separador personalizado cuando separator="custom" |
| `maxItems` | `number` | - | Número máximo de elementos visibles |
| `itemsBeforeCollapse` | `number` | `1` | Elementos a mostrar antes del colapso |
| `itemsAfterCollapse` | `number` | `1` | Elementos a mostrar después del colapso |
| `expandText` | `string` | `'...'` | Texto del botón para expandir elementos colapsados |
| `showRoot` | `boolean` | `true` | Mostrar elemento raíz cuando está colapsado |
| `onItemClick` | `(item: BreadcrumbItem, index: number) => void` | - | Manejador de clic en elemento |
| `className` | `string` | - | Clases CSS adicionales |

### Interfaz BreadcrumbItem

```tsx
interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  current?: boolean;
}
```

## Ejemplos

### Uso Básico

```tsx
// Breadcrumb de navegación simple
<Breadcrumb 
  items={[
    { label: 'Inicio', href: '/' },
    { label: 'Categorías', href: '/categorias' },
    { label: 'Electrónicos', href: '/categorias/electronicos' },
    { label: 'Smartphones', current: true }
  ]}
  variant="primary"
/>

// Con diferentes separadores
<Breadcrumb 
  items={[
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Usuarios', href: '/usuarios' },
    { label: 'Perfil', current: true }
  ]}
  separator="chevron"
  variant="secondary"
/>
```

### Con Iconos

```tsx
function BreadcrumbConIconos() {
  const elementos = [
    { 
      label: 'Inicio', 
      href: '/', 
      icon: <IconoInicio /> 
    },
    { 
      label: 'Mi Cuenta', 
      href: '/cuenta',
      icon: <IconoCuenta />
    },
    { 
      label: 'Configuración', 
      href: '/cuenta/configuracion',
      icon: <IconoConfiguracion />
    },
    { 
      label: 'Privacidad', 
      current: true,
      icon: <IconoPrivacidad />
    }
  ];

  return (
    <Breadcrumb 
      items={elementos}
      variant="primary"
      separator="arrow"
    />
  );
}
```

### Con Colapso Automático

```tsx
function BreadcrumbLargo() {
  const rutaCompleta = [
    { label: 'Inicio', href: '/' },
    { label: 'Administración', href: '/admin' },
    { label: 'Sistema', href: '/admin/sistema' },
    { label: 'Configuración', href: '/admin/sistema/config' },
    { label: 'Base de Datos', href: '/admin/sistema/config/bd' },
    { label: 'Conexiones', href: '/admin/sistema/config/bd/conexiones' },
    { label: 'MySQL', current: true }
  ];

  return (
    <Breadcrumb 
      items={rutaCompleta}
      maxItems={4}
      itemsBeforeCollapse={2}
      itemsAfterCollapse={1}
      expandText="mostrar más..."
      variant="primary"
    />
  );
}
```

### Navegación Dinámica

```tsx
function BreadcrumbDinamico() {
  const ubicacion = useLocation();
  const navegar = useNavigate();
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    // Construir breadcrumb basado en la ruta actual
    const segmentos = ubicacion.pathname.split('/').filter(Boolean);
    const elementosBreadcrumb = [
      { label: 'Inicio', href: '/' }
    ];

    let rutaAcumulada = '';
    segmentos.forEach((segmento, indice) => {
      rutaAcumulada += `/${segmento}`;
      const esUltimo = indice === segmentos.length - 1;
      
      elementosBreadcrumb.push({
        label: formatearSegmento(segmento),
        href: esUltimo ? undefined : rutaAcumulada,
        current: esUltimo
      });
    });

    setElementos(elementosBreadcrumb);
  }, [ubicacion]);

  const formatearSegmento = (segmento) => {
    return segmento
      .split('-')
      .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
      .join(' ');
  };

  const manejarClicElemento = (elemento) => {
    if (elemento.href) {
      navegar(elemento.href);
    }
  };

  return (
    <Breadcrumb 
      items={elementos}
      onItemClick={manejarClicElemento}
      variant="primary"
      maxItems={5}
    />
  );
}
```

### Breadcrumb de E-commerce

```tsx
function BreadcrumbTienda({ categoria, subcategoria, producto }) {
  const elementos = [
    { label: 'Tienda', href: '/tienda' }
  ];

  if (categoria) {
    elementos.push({
      label: categoria.nombre,
      href: `/tienda/${categoria.slug}`,
      icon: categoria.icono
    });
  }

  if (subcategoria) {
    elementos.push({
      label: subcategoria.nombre,
      href: `/tienda/${categoria.slug}/${subcategoria.slug}`
    });
  }

  if (producto) {
    elementos.push({
      label: producto.nombre,
      current: true
    });
  }

  return (
    <div className="breadcrumb-tienda">
      <Breadcrumb 
        items={elementos}
        variant="primary"
        separator="chevron"
        maxItems={4}
      />
    </div>
  );
}

// Uso en página de producto
<BreadcrumbTienda 
  categoria={{ nombre: 'Electrónicos', slug: 'electronicos', icono: <IconoElectronicos /> }}
  subcategoria={{ nombre: 'Smartphones', slug: 'smartphones' }}
  producto={{ nombre: 'iPhone 15 Pro Max' }}
/>
```

### Breadcrumb de Documentación

```tsx
function BreadcrumbDocumentacion({ seccion, articulo }) {
  const elementos = [
    { 
      label: 'Documentación', 
      href: '/docs',
      icon: <IconoDocumentacion />
    }
  ];

  if (seccion) {
    elementos.push({
      label: seccion.titulo,
      href: `/docs/${seccion.slug}`,
      icon: seccion.icono
    });

    if (articulo) {
      elementos.push({
        label: articulo.titulo,
        current: true
      });
    }
  }

  return (
    <Breadcrumb 
      items={elementos}
      variant="secondary"
      separator="slash"
      className="breadcrumb-docs"
    />
  );
}
```

### Con Separadores Personalizados

```tsx
// Separador personalizado con emoji
<Breadcrumb 
  items={[
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'React Tips', current: true }
  ]}
  separator="custom"
  customSeparator={<span className="separador-emoji">🏠</span>}
  variant="primary"
/>

// Separador con componente personalizado
function SeparadorFlecha() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
    </svg>
  );
}

<Breadcrumb 
  items={elementos}
  separator="custom"
  customSeparator={<SeparadorFlecha />}
  variant="primary"
/>
```

### Breadcrumb Interactivo con Menú

```tsx
function BreadcrumbConMenu() {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [elementoSeleccionado, setElementoSeleccionado] = useState(null);

  const elementos = [
    { label: 'Workspace', href: '/workspace' },
    { 
      label: 'Proyecto A', 
      href: '/workspace/proyecto-a',
      submenu: [
        { label: 'Proyecto B', href: '/workspace/proyecto-b' },
        { label: 'Proyecto C', href: '/workspace/proyecto-c' }
      ]
    },
    { label: 'Código', current: true }
  ];

  const manejarClicElemento = (elemento, indice) => {
    if (elemento.submenu) {
      setElementoSeleccionado(elemento);
      setMostrarMenu(true);
    } else if (elemento.href) {
      // Navegar a la ruta
    }
  };

  return (
    <div className="breadcrumb-interactivo">
      <Breadcrumb 
        items={elementos}
        onItemClick={manejarClicElemento}
        variant="primary"
        separator="chevron"
      />
      
      {mostrarMenu && elementoSeleccionado && (
        <div className="menu-breadcrumb">
          {elementoSeleccionado.submenu.map((item, indice) => (
            <a 
              key={indice}
              href={item.href}
              className="menu-item"
              onClick={() => setMostrarMenu(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
```

### Diferentes Tamaños

```tsx
<Breadcrumb items={elementos} size="xs" variant="primary" />
<Breadcrumb items={elementos} size="sm" variant="secondary" />
<Breadcrumb items={elementos} size="md" variant="success" />
<Breadcrumb items={elementos} size="lg" variant="warning" />
<Breadcrumb items={elementos} size="xl" variant="danger" />
```

### Características de Accesibilidad

```tsx
// Modo de alto contraste
<Breadcrumb 
  items={elementos}
  accessibility="high-contrast"
  variant="primary"
/>

// Para usuarios con protanopia
<Breadcrumb 
  items={elementos}
  colorVision="protanopia"
  variant="success"
/>

// Modo de baja visión
<Breadcrumb 
  items={elementos}
  accessibility="low-vision"
  size="xl"
  variant="primary"
/>
```

### Breadcrumb con Estado de Carga

```tsx
function BreadcrumbConCarga({ cargando, elementos }) {
  if (cargando) {
    return (
      <div className="breadcrumb-skeleton">
        <div className="skeleton-item" />
        <span className="separator">/</span>
        <div className="skeleton-item" />
        <span className="separator">/</span>
        <div className="skeleton-item" />
      </div>
    );
  }

  return (
    <Breadcrumb 
      items={elementos}
      variant="primary"
      separator="slash"
    />
  );
}
```

## Características de Accesibilidad

### Cumplimiento WCAG 2.1 AA
- ✅ **Navegación landmark** con `<nav>` y `aria-label="breadcrumb"`
- ✅ **Lista ordenada** semánticamente correcta
- ✅ **Página actual** marcada con `aria-current="page"`
- ✅ **Enlaces descriptivos** con texto claro y contexto

### Navegación por Teclado
- **Tab**: Navegar entre enlaces del breadcrumb
- **Enter/Espacio**: Activar enlace enfocado
- **Shift+Tab**: Navegación hacia atrás

### Soporte para Lectores de Pantalla
- Se anuncia como "navegación breadcrumb"
- Enlaces del breadcrumb claramente identificados
- Página actual anunciada apropiadamente
- Separadores ignorados por lectores de pantalla

### Estructura Semántica
- Uso de `<nav>` para contenedor de navegación
- Lista ordenada (`<ol>`) para jerarquía clara
- Enlaces reales (`<a>`) para navegación
- Elemento actual sin enlace pero con texto visible

## Interfaz TypeScript

```tsx
interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  separator?: 'arrow' | 'slash' | 'chevron' | 'bullet' | 'custom';
  customSeparator?: React.ReactNode;
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  expandText?: string;
  showRoot?: boolean;
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
  className?: string;
}
```

## Mejores Prácticas

### Estructura de Navegación
- Mantener jerarquía clara y lógica
- No incluir la página actual como enlace
- Usar etiquetas descriptivas y concisas
- Evitar breadcrumbs demasiado profundos

### Rendimiento
- Implementar colapso automático para rutas largas
- Usar lazy loading para menús de breadcrumb
- Optimizar iconos y separadores personalizados
- Cachear rutas de navegación comunes

## Componentes Relacionados

- [**Button**](./Button.md) - Para acciones de navegación
- [**Pagination**](./Pagination.md) - Para navegación secuencial

---

[← Volver a la Documentación](../README.md)