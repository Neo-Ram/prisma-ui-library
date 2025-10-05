# neo-ram-prisma Documentation 📚

Complete documentation for the neo-ram-prisma component library - A WCAG 2.1 AA compliant React component library for accessible web applications.

## 📖 Table of Contents

### Getting Started
- [Installation & Setup](../README.md#installation)
- [Basic Usage](../README.md#usage-examples)
- [Design System Overview](../README.md#design-system)

### 🧩 Components Documentation

#### Form Controls
- [**Button**](./components/Button.md) - Interactive buttons with loading states and accessibility
- [**Input**](./components/Input.md) - Text inputs with validation, types, and error handling
- [**Checkbox**](./components/Checkbox.md) - Checkboxes with indeterminate state support
- [**Radiogroup**](./components/Radiogroup.md) - Radio button groups with descriptions
- [**Toggle**](./components/Toggle.md) - Switch toggles for boolean values
- [**Slider**](./components/Slider.md) - Range sliders with real-time feedback
- [**Select**](./components/Select.md) - Custom dropdowns with search functionality
- [**Textarea**](./components/Textarea.md) - Multi-line text inputs with resize options

#### Navigation & Layout
- [**Breadcrumb**](./components/Breadcrumb.md) - Navigation breadcrumbs with smart truncation
- [**Pagination**](./components/Pagination.md) - Page navigation with intelligent display

#### Feedback & Communication
- [**Alert**](./components/Alert.md) - Status messages with emojis and variants
- [**Tooltip**](./components/Tooltip.md) - Smart positioning tooltips with animations
- [**Spinner**](./components/Spinner.md) - 5 different loading spinner variants

### ♿ Accessibility & Standards
- [**WCAG 2.1 AA Compliance**](./accessibility.md) - Complete accessibility guidelines implementation
- [**Color Vision Support**](./accessibility.md#color-vision) - Colorblind-friendly design patterns
- [**Keyboard Navigation**](./accessibility.md#keyboard) - Full keyboard accessibility guide
- [**Screen Reader Support**](./accessibility.md#screen-readers) - ARIA and semantic HTML usage

### 🎨 Design System
- [**Variants System**](./design-system.md#variants) - Color variants across all components
- [**Sizing System**](./design-system.md#sizes) - Consistent sizing scale (xs → xl)
- [**Typography**](./design-system.md#typography) - Font sizes and text styles
- [**Spacing & Layout**](./design-system.md#spacing) - Margin, padding, and gap standards

### 📋 API Reference
- [**Common Props**](./api-reference.md#common-props) - Shared props across all components
- [**TypeScript Interfaces**](./api-reference.md#interfaces) - Complete type definitions
- [**CSS Variables**](./api-reference.md#css-variables) - Customizable CSS custom properties

## 🚀 Quick Start Examples

### Basic Form
```tsx
import { Button, Input, Checkbox } from 'neo-ram-prisma';

function ContactForm() {
  return (
    <form>
      <Input 
        label="Name" 
        required 
        variant="primary" 
        accessibility="default" 
      />
      <Input 
        type="email" 
        label="Email" 
        required 
        variant="primary" 
      />
      <Checkbox 
        label="Subscribe to newsletter" 
        variant="primary" 
      />
      <Button 
        type="submit" 
        variant="primary" 
        size="md"
      >
        Send Message
      </Button>
    </form>
  );
}
```

### Accessible Navigation
```tsx
import { Breadcrumb, Pagination } from 'neo-ram-prisma';

function Navigation({ currentPage, totalPages, onPageChange }) {
  return (
    <>
      <Breadcrumb 
        items={[
          { label: 'Home', onClick: () => navigate('/') },
          { label: 'Products', onClick: () => navigate('/products') },
          { label: 'Current Page' }
        ]}
        accessibility="default"
        variant="primary"
      />
      
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        accessibility="default"
        variant="primary"
      />
    </>
  );
}
```

## 🎯 Key Features Highlight

### ♿ Accessibility First
Every component is built with accessibility as the primary concern:
- **WCAG 2.1 AA** compliance out of the box
- **ARIA** labels and descriptions on all interactive elements
- **Keyboard navigation** support with logical tab order
- **Screen reader** optimized with semantic HTML

### 🌈 Colorblind Friendly
Complete support for users with color vision deficiencies:
- **Protanopia** (red-blind) color adjustments
- **Deuteranopia** (green-blind) color adjustments  
- **Tritanopia** (blue-blind) color adjustments
- **Normal vision** standard colors

### 🎨 Consistent Design
Unified design system across all components:
- **5 color variants** for consistent theming
- **5 size scales** for flexible layouts
- **Independent font sizing** for typography control
- **Responsive design** that adapts to all screen sizes

## 📱 Responsive Behavior

All components automatically adapt to different screen sizes:
- **Mobile-first** design approach
- **Touch-friendly** interactive areas (44px minimum)
- **Horizontal layouts** switch to vertical on mobile
- **Optimized spacing** and typography for smaller screens

## 🛠️ Advanced Usage

### Accessibility Modes
```tsx
// Low vision mode - larger text and elements
<Button accessibility="low-vision" variant="primary">
  Large Button
</Button>

// High contrast mode - enhanced visibility
<Input accessibility="high-contrast" variant="primary" />
```

### Color Vision Support
```tsx
// For users with protanopia (red-blind)
<Alert colorVision="protanopia" variant="danger">
  Error message with adjusted colors
</Alert>

// For users with deuteranopia (green-blind)  
<Button colorVision="deuteranopia" variant="success">
  Success action with adjusted colors
</Button>
```

## 🎓 Academic Research Context

This library was developed as part of academic research into accessible web component design. It serves as a practical implementation of WCAG 2.1 AA guidelines and demonstrates how modern React components can be built with accessibility as a core principle rather than an afterthought.

### Research Focus Areas
- **Web Accessibility Standards** - WCAG 2.1 AA implementation
- **Inclusive Design** - Color vision deficiency support
- **User Experience** - Consistent interaction patterns
- **Modern Web Development** - TypeScript and React best practices

## 📞 Support & Community

- **GitHub Repository**: [neo-ram/prisma-ui-library](https://github.com/Neo-Ram/prisma-ui-library)
- **Issues & Bug Reports**: [GitHub Issues](https://github.com/Neo-Ram/prisma-ui-library/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/Neo-Ram/prisma-ui-library/discussions)

---

**Built with ❤️ for accessible web development**  
*Academic research project by Neo-Ram & OmarMur*