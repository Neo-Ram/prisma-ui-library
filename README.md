
# neo-ram-prisma 🎯

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?logo=github&style=for-the-badge)](https://github.com/Neo-Ram/prisma-ui-library)
![npm version](https://img.shields.io/npm/v/neo-ram-prisma)
![npm downloads](https://img.shields.io/npm/dt/neo-ram-prisma)
![WCAG Compliant](https://img.shields.io/badge/WCAG-2.1%20AA-green)

> **Current version:** 1.0.0

A comprehensive, accessible, and customizable React component library built with TypeScript for academic research. Designed following WCAG 2.1 AA guidelines with accessibility-first principles, complete colorblind support, and consistent design patterns across all components.

## ✨ Key Features

- 🎯 **WCAG 2.1 AA Compliant**: Full accessibility with ARIA, keyboard navigation, screen reader support
- 🌈 **Colorblind Friendly**: Support for protanopia, deuteranopia, and tritanopia
- 📱 **Responsive Design**: Mobile-first approach with adaptive layouts
- ⚡ **TypeScript**: Full type safety with comprehensive prop interfaces
- 🎨 **Consistent Design**: Unified color system and sizing across all components
- ♿ **Accessibility Modes**: Low-vision and high-contrast support
- 🚀 **Modern React**: Hooks, functional components, and modern patterns

## 📦 Installation

```bash
npm install neo-ram-prisma
# or
yarn add neo-ram-prisma
# or
pnpm add neo-ram-prisma
```

## 🧩 Available Components

### Form Controls
- **Button** - Interactive buttons with loading states
- **Input** - Text inputs with validation and types
- **Checkbox** - Checkboxes with indeterminate state
- **Radiogroup** - Radio button groups with descriptions
- **Toggle** - Switch toggles for boolean values
- **Slider** - Range sliders with real-time feedback
- **Select** - Custom dropdowns with search
- **Textarea** - Multi-line text inputs with resize options

### Navigation & Layout
- **Breadcrumb** - Navigation breadcrumbs with smart truncation
- **Pagination** - Page navigation with intelligent display

### Feedback & Communication
- **Alert** - Status messages with emojis and variants
- **Tooltip** - Smart positioning tooltips with animations
- **Spinner** - 5 different loading spinner variants

## 🎨 Design System

### Variants
All components support consistent color variants:
- `primary` - Main brand color (blue)
- `secondary` - Neutral gray tones
- `success` - Green for positive actions
- `warning` - Orange for caution
- `danger` - Red for destructive actions

### Sizes
Consistent sizing system across all components:
- `xs` - Extra small (compact interfaces)
- `sm` - Small (dense layouts)
- `md` - Medium (default/recommended)
- `lg` - Large (prominent elements)
- `xl` - Extra large (accessibility/emphasis)

### Font Sizes
Independent font size control:
- `fs-xs` - 12px
- `fs-sm` - 13px
- `fs-md` - 14px (default)
- `fs-lg` - 16px
- `fs-xl` - 18px

### Color Vision Support
Complete colorblind accessibility:
- `normal` - Standard colors
- `protanopia` - Red-blind adjusted colors
- `deuteranopia` - Green-blind adjusted colors
- `tritanopia` - Blue-blind adjusted colors

### Accessibility Modes
Enhanced accessibility features:
- `default` - Standard accessibility
- `low-vision` - Larger text and elements
- `high-contrast` - High contrast colors and borders

## 💻 Usage Examples

### Button Component

```tsx
import { Button } from 'neo-ram-prisma';

// Basic usage
<Button variant="primary" size="md">
  Click me
</Button>

// With loading state
<Button variant="success" isLoading loadingText="Saving...">
  Save Changes
</Button>

// Accessible for colorblind users
<Button 
  variant="danger" 
  colorVision="protanopia"
  accessibility="high-contrast"
>
  Delete Item
</Button>
```

### Form Controls

```tsx
import { Input, Checkbox, Radiogroup, Select } from 'neo-ram-prisma';

// Input with validation
<Input
  type="email"
  label="Email Address"
  placeholder="Enter your email"
  required
  error={hasError}
  errorMessage="Please enter a valid email"
  variant="primary"
/>

// Checkbox with indeterminate state
<Checkbox
  label="Select all items"
  checked={allSelected}
  indeterminate={someSelected}
  onChange={handleSelectAll}
/>

// Radio group with descriptions
<Radiogroup
  name="plan"
  label="Choose your plan"
  options={[
    { value: 'basic', label: 'Basic', description: 'Perfect for individuals' },
    { value: 'pro', label: 'Pro', description: 'Best for teams' },
    { value: 'enterprise', label: 'Enterprise', description: 'For large organizations' }
  ]}
  value={selectedPlan}
  onChange={setSelectedPlan}
/>

// Custom select with search
<Select
  label="Select Country"
  placeholder="Choose a country"
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
  searchable
/>
```

### Navigation Components

```tsx
import { Breadcrumb, Pagination } from 'neo-ram-prisma';

// Smart breadcrumb navigation
<Breadcrumb
  items={[
    { label: 'Home', onClick: () => navigate('/') },
    { label: 'Products', onClick: () => navigate('/products') },
    { label: 'Electronics', onClick: () => navigate('/electronics') },
    { label: 'iPhone 15 Pro' } // Current page
  ]}
  maxItems={4}
  showHome
/>

// Intelligent pagination
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  showFirstLast
  showPrevNext
  maxVisiblePages={7}
/>
```

### Feedback Components

```tsx
import { Alert, Tooltip, Spinner } from 'neo-ram-prisma';

// Alert with emoji and dismissible
<Alert
  variant="success"
  title="Success!"
  dismissible
  onDismiss={handleDismiss}
>
  Your changes have been saved successfully ✅
</Alert>

// Smart tooltip positioning
<Tooltip
  content="This action cannot be undone"
  position="auto"
  variant="warning"
>
  <Button variant="danger">Delete</Button>
</Tooltip>

// Animated spinner variants
<Spinner 
  variant="primary" 
  spinnerVariant="3" 
  size="lg"
  label="Loading content..."
/>
```

## ♿ Accessibility Features

### ARIA Support
- Comprehensive ARIA labels and descriptions
- Proper roles and states for screen readers
- Live regions for dynamic content updates

### Keyboard Navigation
- Full keyboard support for all interactive elements
- Logical tab order and focus management
- Escape key handling for modals and dropdowns

### Screen Reader Support
- Semantic HTML structure
- Descriptive labels and instructions
- Status announcements for state changes

### Visual Accessibility
- High contrast mode support
- Scalable text and UI elements
- Colorblind-friendly color palettes
- Reduced motion support

## 🔧 Customization

### Custom CSS Variables

All components use CSS custom properties that can be overridden:

```css
:root {
  --button-primary-bg: #your-brand-color;
  --input-border-radius: 12px;
  --font-family: 'Your Custom Font', sans-serif;
}
```

## 📱 Responsive Design

All components are mobile-first and responsive:
- Automatic size adjustments on smaller screens
- Touch-friendly interactive areas
- Horizontal layouts switch to vertical on mobile
- Optimized spacing and typography

## 🎭 Animation & Transitions

Smooth, accessible animations throughout:
- Respects `prefers-reduced-motion`
- Subtle hover and focus states
- Fluid transitions between states
- Loading and state change animations

## 🎓 Academic Project

This is a free and open-source project developed as part of a thesis research on accessible web components. Built following WCAG 2.1 AA accessibility guidelines to ensure inclusive design for all users.

## 👥 Authors

**Neo-Ram & OmarMur** - Creators and maintainers

## 📞 Support

- 📖 [Documentation](https://github.com/Neo-Ram/prisma-ui-library/wiki)

---

*Built with ❤️ for the React community*