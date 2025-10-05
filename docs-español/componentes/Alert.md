# Componente Alert

Componente de mensaje de estado con emojis, variantes y características de accesibilidad.

## Importación

```tsx
import { Alert } from 'neo-ram-prisma';
```

## Uso Básico

```tsx
<Alert variant="success">
  ¡Tus cambios han sido guardados exitosamente!
</Alert>
```

## Referencia de Props

### Props Requeridas
- `children` - Contenido del mensaje de alerta

### Props Opcionales

| Prop | Tipo | Predeterminado | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Tipo de alerta y variante de color |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño de la alerta |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Anulación del tamaño de fuente |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Modo de accesibilidad para daltonismo |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Modo de mejora de accesibilidad |
| `showIcon` | `boolean` | `true` | Mostrar icono/emoji de estado |
| `dismissible` | `boolean` | `false` | Permitir que la alerta sea descartada |
| `onDismiss` | `() => void` | - | Callback cuando la alerta es descartada |
| `title` | `string` | - | Título opcional de la alerta |
| `role` | `'alert' \| 'alertdialog' \| 'status'` | `'alert'` | Rol ARIA para lectores de pantalla |
| `autoHide` | `number` | - | Auto-ocultar después de X milisegundos |
| `className` | `string` | - | Clases CSS adicionales |

## Ejemplos

### Variantes Básicas

```tsx
// Alerta de éxito
<Alert variant="success">
  ✅ ¡Tu perfil ha sido actualizado exitosamente!
</Alert>

// Alerta de advertencia
<Alert variant="warning">
  ⚠️ Por favor revisa tu información antes de enviar.
</Alert>

// Alerta de error
<Alert variant="danger">
  ❌ Ocurrió un error al procesar tu solicitud.
</Alert>

// Alerta informativa
<Alert variant="primary">
  ℹ️ Nuevas características están disponibles en tu panel.
</Alert>

// Alerta secundaria
<Alert variant="secondary">
  📝 No olvides guardar tus cambios antes de salir.
</Alert>
```

### Con Títulos

```tsx
<Alert variant="success" title="¡Éxito!">
  Tu cuenta ha sido creada y se ha enviado un correo de confirmación.
</Alert>

<Alert variant="danger" title="Error de Validación">
  Por favor corrige los siguientes errores:
  <ul>
    <li>La dirección de correo electrónico es requerida</li>
    <li>La contraseña debe tener al menos 8 caracteres</li>
  </ul>
</Alert>

<Alert variant="warning" title="Aviso Importante">
  Esta acción no se puede deshacer. Por favor asegúrate de haber respaldado tus datos.
</Alert>
```

### Alertas Descartables

```tsx
function AlertaDescartable() {
  const [mostrarAlerta, setMostrarAlerta] = useState(true);

  if (!mostrarAlerta) return null;

  return (
    <Alert
      variant="primary"
      dismissible
      onDismiss={() => setMostrarAlerta(false)}
      title="¡Bienvenido!"
    >
      Gracias por unirte a nuestra plataforma. Explora las características para comenzar.
    </Alert>
  );
}
```

### Alertas Auto-Ocultas

```tsx
function AlertaToast({ mensaje, variant, onOcultar }) {
  return (
    <Alert
      variant={variant}
      autoHide={5000} // Ocultar después de 5 segundos
      onDismiss={onOcultar}
      dismissible
    >
      {mensaje}
    </Alert>
  );
}

// Uso en sistema de notificaciones
function SistemaNotificaciones() {
  const [notificaciones, setNotificaciones] = useState([]);

  const agregarNotificacion = (mensaje, variant) => {
    const id = Date.now();
    setNotificaciones(prev => [...prev, { id, mensaje, variant }]);
  };

  const removerNotificacion = (id) => {
    setNotificaciones(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="contenedor-notificaciones">
      {notificaciones.map(notificacion => (
        <AlertaToast
          key={notificacion.id}
          mensaje={notificacion.mensaje}
          variant={notificacion.variant}
          onOcultar={() => removerNotificacion(notificacion.id)}
        />
      ))}
    </div>
  );
}
```

### Alertas de Validación de Formularios

```tsx
function FormularioConValidacion() {
  const [datosFormulario, setDatosFormulario] = useState({ email: '', password: '' });
  const [errores, setErrores] = useState({});
  const [estadoEnvio, setEstadoEnvio] = useState(null);

  const validarFormulario = () => {
    const nuevosErrores = {};
    
    if (!datosFormulario.email) {
      nuevosErrores.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(datosFormulario.email)) {
      nuevosErrores.email = 'El correo electrónico es inválido';
    }
    
    if (!datosFormulario.password) {
      nuevosErrores.password = 'La contraseña es requerida';
    } else if (datosFormulario.password.length < 8) {
      nuevosErrores.password = 'La contraseña debe tener al menos 8 caracteres';
    }
    
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    try {
      await enviarFormulario(datosFormulario);
      setEstadoEnvio('success');
    } catch (error) {
      setEstadoEnvio('error');
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      {estadoEnvio === 'success' && (
        <Alert variant="success" dismissible onDismiss={() => setEstadoEnvio(null)}>
          ¡Cuenta creada exitosamente! Revisa tu correo para la confirmación.
        </Alert>
      )}
      
      {estadoEnvio === 'error' && (
        <Alert variant="danger" dismissible onDismiss={() => setEstadoEnvio(null)}>
          Falló al crear la cuenta. Por favor intenta nuevamente más tarde.
        </Alert>
      )}
      
      {Object.keys(errores).length > 0 && (
        <Alert variant="danger" title="Por favor corrige los siguientes errores:">
          <ul>
            {Object.values(errores).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </Alert>
      )}
      
      {/* Campos del formulario */}
    </form>
  );
}
```

### Características de Accesibilidad

```tsx
// Modo de alto contraste
<Alert 
  variant="warning" 
  accessibility="high-contrast"
  title="Alerta de Alto Contraste"
>
  Esta alerta usa contraste mejorado para mejor visibilidad.
</Alert>

// Para usuarios con protanopia (ceguera al rojo)
<Alert 
  variant="danger" 
  colorVision="protanopia"
  title="Error (Amigable para Daltónicos)"
>
  Este mensaje de error usa colores seguros para usuarios ciegos al rojo.
</Alert>

// Modo de baja visión
<Alert 
  variant="success" 
  accessibility="low-vision"
  title="Alerta Grande"
>
  Esta alerta tiene texto y elementos más grandes para mejor visibilidad.
</Alert>

// Diferentes roles ARIA para diferentes casos de uso
<Alert role="status" variant="primary">
  Actualización de estado no crítica (anunciada cortésmente)
</Alert>

<Alert role="alert" variant="danger">
  Error crítico (anunciado inmediatamente)
</Alert>
```

## Características de Accesibilidad

### Cumplimiento WCAG 2.1 AA
- ✅ **Roles ARIA** (`alert`, `alertdialog`, `status`) para anuncio apropiado
- ✅ **Contraste de color** cumple con la relación 4.5:1 para todas las variantes
- ✅ **Gestión de foco** para alertas descartables
- ✅ **Estructura semántica** con encabezados y contenido apropiados

### Soporte para Lectores de Pantalla
- **role="alert"**: Anunciado inmediatamente (para mensajes críticos)
- **role="status"**: Anunciado cortésmente (para actualizaciones de estado)
- **role="alertdialog"**: Para alertas que requieren interacción del usuario
- Título y contenido estructurado apropiadamente para lectores de pantalla

### Navegación por Teclado
- **Tab**: Enfocar botón de cerrar descartable
- **Enter/Espacio**: Activar botón de cerrar
- **Escape**: Cerrar alerta descartable (opcional)

### Indicadores Visuales
- **Codificación de colores** para diferentes tipos de alerta
- **Iconos/emojis** para contexto visual (puede ser deshabilitado)
- **Jerarquía tipográfica clara** con títulos y contenido
- **Patrones consistentes** de espaciado y diseño

## Interfaz TypeScript

```tsx
interface AlertProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  showIcon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  title?: string;
  role?: 'alert' | 'alertdialog' | 'status';
  autoHide?: number;
  className?: string;
}
```

## Componentes Relacionados

- [**Button**](./Button.md) - Para botones de acción de alerta
- [**Tooltip**](./Tooltip.md) - Para mensajes de ayuda contextual

---

[← Volver a la Documentación](../README.md)