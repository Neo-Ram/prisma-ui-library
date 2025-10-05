# Componente Tooltip

Componente de información contextual que aparece al hacer hover o focus, con posicionamiento inteligente y características de accesibilidad.

## Importación

```tsx
import { Tooltip } from 'neo-ram-prisma';
```

## Uso Básico

```tsx
<Tooltip content="Este es un tooltip básico">
  <Button variant="primary">Pasa el ratón aquí</Button>
</Tooltip>
```

## Referencia de Props

### Props Requeridas
- `content` - Contenido del tooltip (string o ReactNode)
- `children` - Elemento que activa el tooltip

### Props Opcionales

| Prop | Tipo | Predeterminado | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light'` | `'dark'` | Variante de color del tooltip |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño del tooltip |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-sm'` | Tamaño de fuente del contenido |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Modo de accesibilidad para daltonismo |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Modo de mejora de accesibilidad |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'auto'` | `'top'` | Posición del tooltip relativa al elemento |
| `trigger` | `'hover' \| 'click' \| 'focus' \| 'manual' \| 'hover+focus'` | `'hover+focus'` | Evento que activa el tooltip |
| `delay` | `number \| { show: number, hide: number }` | `{ show: 0, hide: 0 }` | Retraso en mostrar/ocultar (ms) |
| `arrow` | `boolean` | `true` | Mostrar flecha apuntadora |
| `offset` | `number` | `8` | Distancia del tooltip al elemento (px) |
| `maxWidth` | `number \| string` | `200` | Ancho máximo del tooltip |
| `multiline` | `boolean` | `false` | Permitir contenido multilínea |
| `interactive` | `boolean` | `false` | Permitir interacción con el contenido del tooltip |
| `disabled` | `boolean` | `false` | Desactivar el tooltip |
| `visible` | `boolean` | - | Control manual de visibilidad |
| `defaultVisible` | `boolean` | `false` | Visibilidad inicial (no controlada) |
| `animation` | `'none' \| 'fade' \| 'scale' \| 'slide'` | `'fade'` | Tipo de animación |
| `animationDuration` | `number` | `200` | Duración de animación (ms) |
| `zIndex` | `number` | `1000` | Z-index del tooltip |
| `closeOnEscape` | `boolean` | `true` | Cerrar con tecla Escape |
| `closeOnClickOutside` | `boolean` | `true` | Cerrar al hacer clic fuera |
| `onVisibilityChange` | `(visible: boolean) => void` | - | Callback cuando cambia la visibilidad |
| `className` | `string` | - | Clases CSS adicionales |
| `contentClassName` | `string` | - | Clases CSS para el contenido |

## Ejemplos

### Uso Básico

```tsx
// Tooltip simple
<Tooltip content="Información útil sobre este botón">
  <Button variant="primary">Botón con Tooltip</Button>
</Tooltip>

// Con diferentes posiciones
<div className="tooltips-posicion">
  <Tooltip content="Tooltip arriba" placement="top">
    <Button variant="secondary">Arriba</Button>
  </Tooltip>
  
  <Tooltip content="Tooltip abajo" placement="bottom">
    <Button variant="secondary">Abajo</Button>
  </Tooltip>
  
  <Tooltip content="Tooltip izquierda" placement="left">
    <Button variant="secondary">Izquierda</Button>
  </Tooltip>
  
  <Tooltip content="Tooltip derecha" placement="right">
    <Button variant="secondary">Derecha</Button>
  </Tooltip>
</div>
```

### Diferentes Variantes

```tsx
<Tooltip content="Tooltip primario" variant="primary">
  <Button variant="outline">Primario</Button>
</Tooltip>

<Tooltip content="Tooltip de éxito" variant="success">
  <Button variant="outline">Éxito</Button>
</Tooltip>

<Tooltip content="Tooltip de advertencia" variant="warning">
  <Button variant="outline">Advertencia</Button>
</Tooltip>

<Tooltip content="Tooltip de peligro" variant="danger">
  <Button variant="outline">Peligro</Button>
</Tooltip>

<Tooltip content="Tooltip claro" variant="light">
  <Button variant="dark">Claro</Button>
</Tooltip>
```

### Tooltips con Contenido Rico

```tsx
function TooltipRico() {
  const contenidoTooltip = (
    <div className="tooltip-rico">
      <h4>Información del Usuario</h4>
      <p><strong>Nombre:</strong> Juan Pérez</p>
      <p><strong>Email:</strong> juan@ejemplo.com</p>
      <p><strong>Estado:</strong> <span className="estado-activo">Activo</span></p>
    </div>
  );

  return (
    <Tooltip 
      content={contenidoTooltip}
      variant="light"
      maxWidth={300}
      multiline
      interactive
      placement="right"
    >
      <div className="tarjeta-usuario">
        <img src="/avatar.jpg" alt="Avatar" />
        <span>Juan Pérez</span>
      </div>
    </Tooltip>
  );
}
```

### Tooltips de Ayuda en Formularios

```tsx
function FormularioConAyuda() {
  return (
    <form className="formulario-ayuda">
      <div className="campo-con-tooltip">
        <label>
          Contraseña
          <Tooltip 
            content="La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y símbolos"
            variant="primary"
            maxWidth={250}
            multiline
            placement="right"
          >
            <span className="icono-ayuda">ℹ️</span>
          </Tooltip>
        </label>
        <Input 
          type="password" 
          placeholder="Ingresa tu contraseña"
        />
      </div>
      
      <div className="campo-con-tooltip">
        <label>
          Fecha de Nacimiento
          <Tooltip 
            content="Usamos tu fecha de nacimiento para personalizar tu experiencia y cumplir con regulaciones de edad"
            variant="secondary"
            maxWidth={200}
            multiline
          >
            <span className="icono-ayuda">❓</span>
          </Tooltip>
        </label>
        <Input 
          type="date" 
        />
      </div>
    </form>
  );
}
```

### Tooltips Interactivos

```tsx
function TooltipInteractivo() {
  const [favorito, setFavorito] = useState(false);

  const contenidoTooltip = (
    <div className="tooltip-interactivo">
      <p>¿Te gusta este artículo?</p>
      <div className="acciones-tooltip">
        <Button 
          size="sm" 
          variant="primary"
          onClick={() => setFavorito(!favorito)}
        >
          {favorito ? '❤️ Favorito' : '🤍 Agregar a favoritos'}
        </Button>
        <Button 
          size="sm" 
          variant="secondary"
          onClick={() => compartirArticulo()}
        >
          📤 Compartir
        </Button>
      </div>
    </div>
  );

  return (
    <Tooltip 
      content={contenidoTooltip}
      variant="light"
      interactive
      trigger="click"
      placement="bottom"
      maxWidth={250}
      closeOnClickOutside
    >
      <Button variant="outline">
        Acciones del Artículo
      </Button>
    </Tooltip>
  );
}
```

### Tooltips con Retrasos Personalizados

```tsx
function TooltipsConRetrasos() {
  return (
    <div className="tooltips-retrasos">
      <Tooltip 
        content="Aparece inmediatamente"
        delay={0}
      >
        <Button variant="primary">Sin Retraso</Button>
      </Tooltip>
      
      <Tooltip 
        content="Aparece después de 500ms"
        delay={{ show: 500, hide: 0 }}
      >
        <Button variant="secondary">Retraso al Mostrar</Button>
      </Tooltip>
      
      <Tooltip 
        content="Se oculta después de 1 segundo"
        delay={{ show: 0, hide: 1000 }}
      >
        <Button variant="success">Retraso al Ocultar</Button>
      </Tooltip>
    </div>
  );
}
```

### Tooltips en Tablas de Datos

```tsx
function TablaDatos() {
  const usuarios = [
    { id: 1, nombre: 'Ana García', estado: 'activo', ultimoAcceso: '2024-01-15' },
    { id: 2, nombre: 'Carlos Ruiz', estado: 'inactivo', ultimoAcceso: '2024-01-10' },
    { id: 3, nombre: 'María López', estado: 'pendiente', ultimoAcceso: null }
  ];

  const obtenerDescripcionEstado = (estado) => {
    const descripciones = {
      activo: 'Usuario activo con acceso completo al sistema',
      inactivo: 'Usuario temporalmente desactivado',
      pendiente: 'Usuario esperando activación por email'
    };
    return descripciones[estado] || 'Estado desconocido';
  };

  return (
    <table className="tabla-usuarios">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>
            Estado
            <Tooltip 
              content="El estado indica el nivel de acceso del usuario"
              variant="dark"
              size="sm"
            >
              <span className="icono-ayuda">ℹ️</span>
            </Tooltip>
          </th>
          <th>Último Acceso</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(usuario => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>
              <Tooltip 
                content={`ID: ${usuario.id}\nÚltimo acceso: ${usuario.ultimoAcceso || 'Nunca'}`}
                multiline
                maxWidth={200}
              >
                {usuario.nombre}
              </Tooltip>
            </td>
            <td>
              <Tooltip 
                content={obtenerDescripcionEstado(usuario.estado)}
                variant={usuario.estado === 'activo' ? 'success' : 
                        usuario.estado === 'inactivo' ? 'danger' : 'warning'}
              >
                <span className={`estado estado-${usuario.estado}`}>
                  {usuario.estado}
                </span>
              </Tooltip>
            </td>
            <td>{usuario.ultimoAcceso || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

### Tooltips Controlados Manualmente

```tsx
function TooltipManual() {
  const [visible, setVisible] = useState(false);
  const [contenido, setContenido] = useState('');

  const mostrarNotificacion = (mensaje) => {
    setContenido(mensaje);
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <div className="tooltip-manual">
      <Tooltip 
        content={contenido}
        visible={visible}
        trigger="manual"
        variant="success"
        placement="top"
        animation="scale"
      >
        <Button 
          variant="primary"
          onClick={() => mostrarNotificacion('¡Acción completada con éxito!')}
        >
          Ejecutar Acción
        </Button>
      </Tooltip>
      
      <Button 
        variant="secondary"
        onClick={() => setVisible(false)}
        className="ml-2"
      >
        Ocultar Tooltip
      </Button>
    </div>
  );
}
```

### Tooltips Responsivos

```tsx
function TooltipResponsivo({ children, content, ...props }) {
  const esPantallaTactil = useMediaQuery('(hover: none)');
  
  // En pantallas táctiles, usar click en lugar de hover
  const trigger = esPantallaTactil ? 'click' : 'hover+focus';
  
  return (
    <Tooltip 
      content={content}
      trigger={trigger}
      closeOnClickOutside={esPantallaTactil}
      {...props}
    >
      {children}
    </Tooltip>
  );
}

// Uso
<TooltipResponsivo content="Se adapta al tipo de dispositivo">
  <Button variant="primary">Botón Adaptativo</Button>
</TooltipResponsivo>
```

### Diferentes Tamaños

```tsx
<Tooltip content="Extra pequeño" size="xs">
  <Button size="xs">XS</Button>
</Tooltip>

<Tooltip content="Pequeño" size="sm">
  <Button size="sm">SM</Button>
</Tooltip>

<Tooltip content="Mediano" size="md">
  <Button size="md">MD</Button>
</Tooltip>

<Tooltip content="Grande" size="lg">
  <Button size="lg">LG</Button>
</Tooltip>

<Tooltip content="Extra grande" size="xl">
  <Button size="xl">XL</Button>
</Tooltip>
```

### Características de Accesibilidad

```tsx
// Modo de alto contraste
<Tooltip 
  content="Tooltip de alto contraste" 
  accessibility="high-contrast"
  variant="dark"
>
  <Button variant="primary">Alto Contraste</Button>
</Tooltip>

// Para usuarios con protanopia
<Tooltip 
  content="Información importante" 
  colorVision="protanopia"
  variant="warning"
>
  <Button variant="warning">Advertencia</Button>
</Tooltip>

// Modo de baja visión
<Tooltip 
  content="Tooltip de gran visibilidad" 
  accessibility="low-vision"
  size="xl"
  fontSize="fs-lg"
  variant="dark"
>
  <Button variant="primary">Baja Visión</Button>
</Tooltip>
```

## Características de Accesibilidad

### Cumplimiento WCAG 2.1 AA
- ✅ **Atributos ARIA** (`role="tooltip"`, `aria-describedby`)
- ✅ **Navegación por teclado** con soporte para Escape
- ✅ **Gestión de foco** apropiada para tooltips interactivos
- ✅ **Comunicación de estado** para lectores de pantalla

### Navegación por Teclado
- **Tab**: Enfocar elemento que activa el tooltip
- **Escape**: Cerrar tooltip visible
- **Enter/Espacio**: Activar tooltip en modo click/focus
- **Flechas**: Navegar dentro de tooltips interactivos

### Soporte para Lectores de Pantalla
- Contenido del tooltip asociado con `aria-describedby`
- Se anuncia cuando el elemento recibe foco
- Contenido rico interpretado apropiadamente
- Estado de visibilidad comunicado correctamente

### Gestión de Foco
- Foco permanece en el elemento disparador
- Para tooltips interactivos, foco puede moverse al contenido
- Foco retorna apropiadamente cuando se cierra
- Trap de foco en tooltips modales (interactivos)

## Interfaz TypeScript

```tsx
interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark' | 'light';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  trigger?: 'hover' | 'click' | 'focus' | 'manual' | 'hover+focus';
  delay?: number | { show: number; hide: number };
  arrow?: boolean;
  offset?: number;
  maxWidth?: number | string;
  multiline?: boolean;
  interactive?: boolean;
  disabled?: boolean;
  visible?: boolean;
  defaultVisible?: boolean;
  animation?: 'none' | 'fade' | 'scale' | 'slide';
  animationDuration?: number;
  zIndex?: number;
  closeOnEscape?: boolean;
  closeOnClickOutside?: boolean;
  onVisibilityChange?: (visible: boolean) => void;
  className?: string;
  contentClassName?: string;
}
```

## Mejores Prácticas

### Contenido
- Mantener texto conciso y útil
- Usar para información complementaria, no esencial
- Evitar tooltips en elementos de solo teclado en móviles
- Proporcionar alternativas para información crítica

### Rendimiento
- Lazy render del contenido complejo
- Debounce para tooltips con retraso
- Reutilizar instancias cuando sea posible
- Optimizar animaciones para dispositivos lentos

## Componentes Relacionados

- [**Button**](./Button.md) - Comúnmente usado con tooltips
- [**Alert**](./Alert.md) - Para información más prominente

---

[← Volver a la Documentación](../README.md)