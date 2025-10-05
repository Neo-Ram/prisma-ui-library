# Documentación de neo-ram-prisma 📚

Documentación completa para la biblioteca de componentes neo-ram-prisma - Una biblioteca de componentes React compatible con WCAG 2.1 AA para aplicaciones web accesibles.

## 📖 Tabla de Contenidos

### Primeros Pasos
- [Instalación y Configuración](../README.md#installation)
- [Uso Básico](../README.md#usage-examples)
- [Resumen del Sistema de Diseño](../README.md#design-system)

### 🧩 Documentación de Componentes

#### Controles de Formulario
- [**Botón**](./componentes/Button.md) - Botones interactivos con estados de carga y accesibilidad
- [**Campo de Texto**](./componentes/Input.md) - Campos de entrada con validación, tipos y manejo de errores
- [**Casilla de Verificación**](./componentes/Checkbox.md) - Casillas con soporte para estado indeterminado
- [**Grupo de Radio**](./componentes/Radiogroup.md) - Grupos de botones radio con descripciones
- [**Interruptor**](./componentes/Toggle.md) - Switches para valores booleanos
- [**Control Deslizante**](./componentes/Slider.md) - Controles deslizantes con retroalimentación en tiempo real
- [**Selector**](./componentes/Select.md) - Menús desplegables personalizados con funcionalidad de búsqueda
- [**Área de Texto**](./componentes/Textarea.md) - Entradas de texto multilínea con opciones de redimensionamiento

#### Navegación y Diseño
- [**Migas de Pan**](./componentes/Breadcrumb.md) - Migas de navegación con truncamiento inteligente
- [**Paginación**](./componentes/Pagination.md) - Navegación de páginas con visualización inteligente

#### Retroalimentación y Comunicación
- [**Alerta**](./componentes/Alert.md) - Mensajes de estado con emojis y variantes
- [**Tooltip**](./componentes/Tooltip.md) - Tooltips con posicionamiento inteligente y animaciones
- [**Spinner**](./componentes/Spinner.md) - 5 variantes diferentes de indicadores de carga

### ♿ Accesibilidad y Estándares
- [**Cumplimiento WCAG 2.1 AA**](./accesibilidad.md) - Implementación completa de pautas de accesibilidad
- [**Soporte para Daltonismo**](./accesibilidad.md#vision-de-colores) - Patrones de diseño amigables para daltónicos
- [**Navegación por Teclado**](./accesibilidad.md#teclado) - Guía completa de accesibilidad por teclado
- [**Soporte para Lectores de Pantalla**](./accesibilidad.md#lectores-de-pantalla) - Uso de ARIA y HTML semántico

### 🎨 Sistema de Diseño
- [**Sistema de Variantes**](./sistema-de-diseño.md#variantes) - Variantes de color en todos los componentes
- [**Sistema de Tamaños**](./sistema-de-diseño.md#tamaños) - Escala de tamaños consistente (xs → xl)
- [**Tipografía**](./sistema-de-diseño.md#tipografia) - Tamaños de fuente y estilos de texto
- [**Espaciado y Diseño**](./sistema-de-diseño.md#espaciado) - Estándares de márgenes, padding y gaps

### 📋 Referencia de API
- [**Props Comunes**](./referencia-api.md#props-comunes) - Props compartidas entre todos los componentes
- [**Interfaces TypeScript**](./referencia-api.md#interfaces) - Definiciones de tipos completas
- [**Variables CSS**](./referencia-api.md#variables-css) - Propiedades CSS personalizables

## 🚀 Ejemplos de Inicio Rápido

### Formulario Básico
```tsx
import { Button, Input, Checkbox } from 'neo-ram-prisma';

function FormularioContacto() {
  return (
    <form>
      <Input 
        label="Nombre" 
        required 
        variant="primary" 
        accessibility="default" 
      />
      <Input 
        type="email" 
        label="Correo Electrónico" 
        required 
        variant="primary" 
      />
      <Checkbox 
        label="Suscribirse al boletín" 
        variant="primary" 
      />
      <Button 
        type="submit" 
        variant="primary" 
        size="md"
      >
        Enviar Mensaje
      </Button>
    </form>
  );
}
```

### Navegación Accesible
```tsx
import { Breadcrumb, Pagination } from 'neo-ram-prisma';

function Navegacion({ paginaActual, totalPaginas, onCambioPagina }) {
  return (
    <>
      <Breadcrumb 
        items={[
          { label: 'Inicio', onClick: () => navigate('/') },
          { label: 'Productos', onClick: () => navigate('/productos') },
          { label: 'Página Actual' }
        ]}
        accessibility="default"
        variant="primary"
      />
      
      <Pagination 
        currentPage={paginaActual}
        totalPages={totalPaginas}
        onPageChange={onCambioPagina}
        accessibility="default"
        variant="primary"
      />
    </>
  );
}
```

## 🎯 Características Destacadas

### ♿ Accesibilidad Primero
Cada componente está construido con la accesibilidad como preocupación principal:
- **WCAG 2.1 AA** cumplimiento desde el principio
- **Etiquetas ARIA** y descripciones en todos los elementos interactivos
- **Navegación por teclado** con orden lógico de tabulación
- **Optimizado para lectores de pantalla** con HTML semántico

### 🌈 Amigable para Daltónicos
Soporte completo para usuarios con deficiencias en la visión de colores:
- **Protanopia** (ceguera al rojo) - ajustes de color
- **Deuteranopia** (ceguera al verde) - ajustes de color  
- **Tritanopia** (ceguera al azul) - ajustes de color
- **Visión normal** - colores estándar

### 🎨 Diseño Consistente
Sistema de diseño unificado en todos los componentes:
- **5 variantes de color** para temas consistentes
- **5 escalas de tamaño** para diseños flexibles
- **Tamaño de fuente independiente** para control tipográfico
- **Diseño responsivo** que se adapta a todas las pantallas

## 📱 Comportamiento Responsivo

Todos los componentes se adaptan automáticamente a diferentes tamaños de pantalla:
- **Enfoque móvil primero** en el diseño
- **Áreas interactivas amigables al táctil** (44px mínimo)
- **Diseños horizontales** cambian a vertical en móviles
- **Espaciado y tipografía optimizados** para pantallas pequeñas

## 🛠️ Uso Avanzado

### Modos de Accesibilidad
```tsx
// Modo de baja visión - texto y elementos más grandes
<Button accessibility="low-vision" variant="primary">
  Botón Grande
</Button>

// Modo de alto contraste - visibilidad mejorada
<Input accessibility="high-contrast" variant="primary" />
```

### Soporte para Daltonismo
```tsx
// Para usuarios con protanopia (ceguera al rojo)
<Alert colorVision="protanopia" variant="danger">
  Mensaje de error con colores ajustados
</Alert>

// Para usuarios con deuteranopia (ceguera al verde)  
<Button colorVision="deuteranopia" variant="success">
  Acción exitosa con colores ajustados
</Button>
```

## 🎓 Contexto de Investigación Académica

Esta biblioteca fue desarrollada como parte de una investigación académica sobre diseño de componentes web accesibles. Sirve como implementación práctica de las pautas WCAG 2.1 AA y demuestra cómo los componentes React modernos pueden construirse con la accesibilidad como principio fundamental en lugar de una idea tardía.

### Áreas de Enfoque de la Investigación
- **Estándares de Accesibilidad Web** - Implementación de WCAG 2.1 AA
- **Diseño Inclusivo** - Soporte para deficiencias en la visión de colores
- **Experiencia de Usuario** - Patrones de interacción consistentes
- **Desarrollo Web Moderno** - Mejores prácticas de TypeScript y React

## 📞 Soporte y Comunidad

- **Repositorio GitHub**: [neo-ram/prisma-ui-library](https://github.com/Neo-Ram/prisma-ui-library)
- **Reportes de Errores**: [GitHub Issues](https://github.com/Neo-Ram/prisma-ui-library/issues)
- **Solicitudes de Características**: [GitHub Discussions](https://github.com/Neo-Ram/prisma-ui-library/discussions)

---

**Construido con ❤️ para el desarrollo web accesible**  
*Proyecto de investigación académica por Neo-Ram & OmarMur*