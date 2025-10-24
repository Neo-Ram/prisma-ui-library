
# neo-ram-prisma 🎯

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?logo=github&style=for-the-badge)](https://github.com/Neo-Ram/prisma-ui-library)
![npm version](https://img.shields.io/npm/v/neo-ram-prisma)
![npm downloads](https://img.shields.io/npm/dt/neo-ram-prisma)
![WCAG Compliant](https://img.shields.io/badge/WCAG-2.1%20AA-green)


A comprehensive, accessible, and customizable React component library built with TypeScript for academic research. Designed following WCAG 2.1 AA guidelines with accessibility-first principles, complete colorblind support, and consistent design patterns across all components.

## ✨ Key Features

- 🎯 **WCAG 2.1 AA Compliant**
- 🌈 **Colorblind Friendly**: Support for protanopia, deuteranopia, and tritanopia
- 📱 **Responsive Design**: Mobile-first approach with adaptive layouts
- ⚡ **TypeScript**: Full type safety with comprehensive prop interfaces
- 🎨 **Consistent Design**: Unified color system and sizing across all components
- ♿ **Accessibility Modes**: Low-vision and high-contrast support
- 🚀 **Modern React**: Hooks, functional components, and modern patterns

## 🆕 What's New in v1.1.0

### 🎨 Custom Colors for All Components

Every component now supports **fully customizable colors** with the new `customColors` prop! 

Define colors for each color vision mode directly:

```tsx
<Button
  customColors={{
    // Normal vision
    defaultColor: '#ffffff',
    defaultBg: '#007bff',
    
    // Protanopia (Red-blind)
    protanopiaColor: '#ffffff',
    protanopiaBg: '#3399ff',
    
    // Deuteranopia (Green-blind)
    deuteranopiaColor: '#ffffff',
    deuteranopiaBg: '#4f83cc',
    
    // Tritanopia (Blue-blind)
    tritanopiaColor: '#000000',
    tritanopiaBg: '#ffcc00',
  }}
/>
```

**All 13 components now include:**
- ✅ `customColors` prop with full TypeScript support
- ✅ Inline style customization for every color variable
- ✅ Support for all 4 color vision modes (normal, protanopia, deuteranopia, tritanopia)
- ✅ **236+ customizable color properties** across the library
- ✅ No conflicts with existing CSS classes or variants

See the [documentation](#-customizable-colors) below for complete examples of each component.

## 📦 Installation

```bash
npm install neo-ram-prisma
# or
yarn add neo-ram-prisma
# or
pnpm add neo-ram-prisma
```

## 📚 Documentation

For the **complete and organized documentation**, visit:

### 🌐 [https://prisma-drab.vercel.app/](https://prisma-drab.vercel.app/)

Our comprehensive documentation includes:
- ✨ Live component previews
- 🎨 Interactive color vision mode demonstrations
- 📖 Detailed API documentation for each component
- 🔧 Customization guides
- ♿ Accessibility features explained

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
import 'neo-ram-prisma/style.css';

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

// Custom colors with colorblind support
<Button 
  customColors={{
    defaultColor: '#FF5733',
    defaultColorHover: '#C41E3A',
    defaultColorActive: '#8B0000',
    protanopiaColor: '#FFAA33',
    protanopiaColorHover: '#FF6600',
    protanopiaColorActive: '#CC4400',
    deuteranopiaColor: '#00AA00',
    deuteranopiaColorHover: '#008800',
    deuteranopiaColorActive: '#005500',
    tritanopiaColor: '#FF00FF',
    tritanopiaColorHover: '#DD00DD',
    tritanopiaColorActive: '#BB00BB',
    textColor: '#FFFFFF'
  }}
  colorVision="protanopia"
  size="lg"
>
  Botón Personalizado
</Button>
```

### Form Controls

```tsx
import { Input, Checkbox, Radiogroup, Select } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

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

// Custom Input colors with colorblind support
<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  colorVision="deuteranopia"
  customColors={{
    // Normal vision
    defaultBorder: '#007BFF',
    defaultBorderFocus: '#0056B3',
    defaultColor: '#222222',
    defaultBg: '#FFFFFF',

    // Protanopia
    protanopiaBorder: '#3399FF',
    protanopiaBorderFocus: '#2673B6',
    protanopiaColor: '#222222',
    protanopiaBg: '#FFFFFF',

    // Deuteranopia
    deuteranopiaBorder: '#4F83CC',
    deuteranopiaBorderFocus: '#3A5C99',
    deuteranopiaColor: '#222222',
    deuteranopiaBg: '#FFFFFF',

    // Tritanopia
    tritanopiaBorder: '#D946EF',
    tritanopiaBorderFocus: '#BE185D',
    tritanopiaColor: '#222222',
    tritanopiaBg: '#FFFFFF'
  }}
/>

// Checkbox with indeterminate state
<Checkbox
  label="Select all items"
  checked={allSelected}
  indeterminate={someSelected}
  onChange={handleSelectAll}
/>

// Custom Checkbox colors with colorblind support
<Checkbox
  label="I agree to terms"
  colorVision="protanopia"
  customColors={{
    // Normal vision
    defaultAccent: '#007BFF',
    defaultBorder: '#007BFF',
    defaultBg: '#FFFFFF',
    defaultLabelColor: '#222222',

    // Protanopia
    protanopiaAccent: '#3399FF',
    protanopiaBorder: '#3399FF',
    protanopiaBg: '#FFFFFF',
    protanopiaLabelColor: '#222222',

    // Deuteranopia
    deuteranopiaAccent: '#4F83CC',
    deuteranopiaBorder: '#4F83CC',
    deuteranopiaBg: '#FFFFFF',
    deuteranopiaLabelColor: '#222222',

    // Tritanopia
    tritanopiaAccent: '#D946EF',
    tritanopiaBorder: '#D946EF',
    tritanopiaBg: '#FFFFFF',
    tritanopiaLabelColor: '#222222'
  }}
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
import 'neo-ram-prisma/style.css';
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

// Custom breadcrumb colors with colorblind support
<Breadcrumb
  items={[
    { label: 'Dashboard', onClick: () => navigate('/') },
    { label: 'Projects', onClick: () => navigate('/projects') },
    { label: 'UI Library' } // Current page
  ]}
  colorVision="tritanopia"
  customColors={{
    // Normal vision
    defaultColor: '#6366F1',
    defaultColorHover: '#4F46E5',
    defaultColorCurrent: '#4C0519',
    defaultSeparator: '#CBD5E1',

    // Protanopia
    protanopiaColor: '#3B82F6',
    protanopiaColorHover: '#2563EB',
    protanopiaColorCurrent: '#1E3A8A',
    protanopiaSeparator: '#94A3B8',

    // Deuteranopia
    deuteranopiaColor: '#8B5CF6',
    deuteranopiaColorHover: '#7C3AED',
    deuteranopiaColorCurrent: '#581C87',
    deuteranopiaSeparator: '#D1D5DB',

    // Tritanopia
    tritanopiaColor: '#D946EF',
    tritanopiaColorHover: '#BE185D',
    tritanopiaColorCurrent: '#7E22CE',
    tritanopiaSeparator: '#E5E7EB'
  }}
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

// Custom Pagination colors with colorblind support
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  colorVision="tritanopia"
  customColors={{
    // Normal vision
    defaultColorActive: '#FFFFFF',
    defaultBgActive: '#007BFF',
    defaultShadowFocus: '0 0 0 3px rgba(11,92,255,.15)',

    // Protanopia
    protanopiaColorActive: '#FFFFFF',
    protanopiaBgActive: '#3399FF',
    protanopiaShadowFocus: '0 0 0 3px rgba(51,153,255,.15)',

    // Deuteranopia
    deuteranopiaColorActive: '#FFFFFF',
    deuteranopiaBgActive: '#4F83CC',
    deuteranopiaShadowFocus: '0 0 0 3px rgba(79,131,204,.15)',

    // Tritanopia
    tritanopiaColorActive: '#FFFFFF',
    tritanopiaBgActive: '#D946EF',
    tritanopiaShadowFocus: '0 0 0 3px rgba(217,70,239,.15)'
  }}
/>
```

### Feedback Components

```tsx
import { Alert, Tooltip, Spinner } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';
// Alert with emoji and dismissible
<Alert
  variant="success"
  title="Success!"
  dismissible
  onDismiss={handleDismiss}
>
  Your changes have been saved successfully ✅
</Alert>

// Custom Alert colors with colorblind support
<Alert
  title="Custom Alert"
  dismissible
  colorVision="deuteranopia"
  customColors={{
    // Normal vision
    defaultBg: '#F3E8FF',
    defaultBorder: '#E9D5FF',
    defaultColor: '#6B21A8',
    defaultIconColor: '#A855F7',
    defaultTitleColor: '#581C87',

    // Protanopia
    protanopiaBg: '#FEF3C7',
    protanopiaBorder: '#FDE68A',
    protanopiaColor: '#92400E',
    protanopiaIconColor: '#F59E0B',
    protanopiaTitleColor: '#78350F',

    // Deuteranopia
    deuteranopiaBg: '#DBEAFE',
    deuteranopiaBorder: '#BFDBFE',
    deuteranopiaColor: '#1E40AF',
    deuteranopiaIconColor: '#3B82F6',
    deuteranopiaTitleColor: '#1E3A8A',

    // Tritanopia
    tritanopiaBg: '#F5F3FF',
    tritanopiaBorder: '#EDE9FE',
    tritanopiaColor: '#4C1D95',
    tritanopiaIconColor: '#8B5CF6',
    tritanopiaTitleColor: '#3C0F7B'
  }}
>
  This is a custom colored alert accessible to colorblind users
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

### Visual Accessibility
- High contrast mode support
- Scalable text and UI elements
- Colorblind-friendly color palettes
- Reduced motion support

## 🔧 Customization

### Custom Colors for Button

The Button component supports fully customizable colors for each color vision mode. Use the `customColors` prop to define colors for all accessibility modes:

```tsx
import { Button } from 'neo-ram-prisma';

<Button 
  customColors={{
    // Normal vision colors
    defaultColor: '#FF5733',
    defaultColorHover: '#C41E3A',
    defaultColorActive: '#8B0000',
    
    // Protanopia (Red-blind) colors
    protanopiaColor: '#FFAA33',
    protanopiaColorHover: '#FF6600',
    protanopiaColorActive: '#CC4400',
    
    // Deuteranopia (Green-blind) colors
    deuteranopiaColor: '#00AA00',
    deuteranopiaColorHover: '#008800',
    deuteranopiaColorActive: '#005500',
    
    // Tritanopia (Blue-blind) colors
    tritanopiaColor: '#FF00FF',
    tritanopiaColorHover: '#DD00DD',
    tritanopiaColorActive: '#BB00BB',
    
    // Optional: text color
    textColor: '#FFFFFF'
  }}
  colorVision="protanopia"
  size="lg"
>
  Custom Colored Button
</Button>
```

**`CustomColors` Properties:**
- `defaultColor` - Background color for normal vision
- `defaultColorHover` - Hover state for normal vision
- `defaultColorActive` - Active/clicked state for normal vision
- `protanopiaColor` - Background color for protanopia users
- `protanopiaColorHover` - Hover state for protanopia
- `protanopiaColorActive` - Active state for protanopia
- `deuteranopiaColor` - Background color for deuteranopia users
- `deuteranopiaColorHover` - Hover state for deuteranopia
- `deuteranopiaColorActive` - Active state for deuteranopia
- `tritanopiaColor` - Background color for tritanopia users
- `tritanopiaColorHover` - Hover state for tritanopia
- `tritanopiaColorActive` - Active state for tritanopia
- `textColor` *(optional)* - Text color for all modes

### Custom Colors for Alert

The Alert component supports fully customizable colors for each color vision mode. Use the `customColors` prop to define colors for all accessibility modes:

```tsx
import { Alert } from 'neo-ram-prisma';

<Alert
  title="Custom Alert"
  dismissible
  colorVision="deuteranopia"
  customColors={{
    // Normal vision colors
    defaultBg: '#F3E8FF',
    defaultBorder: '#E9D5FF',
    defaultColor: '#6B21A8',
    defaultIconColor: '#A855F7',
    defaultTitleColor: '#581C87',

    // Protanopia (Red-blind) colors
    protanopiaBg: '#FEF3C7',
    protanopiaBorder: '#FDE68A',
    protanopiaColor: '#92400E',
    protanopiaIconColor: '#F59E0B',
    protanopiaTitleColor: '#78350F',

    // Deuteranopia (Green-blind) colors
    deuteranopiaBg: '#DBEAFE',
    deuteranopiaBorder: '#BFDBFE',
    deuteranopiaColor: '#1E40AF',
    deuteranopiaIconColor: '#3B82F6',
    deuteranopiaTitleColor: '#1E3A8A',

    // Tritanopia (Blue-blind) colors
    tritanopiaBg: '#F5F3FF',
    tritanopiaBorder: '#EDE9FE',
    tritanopiaColor: '#4C1D95',
    tritanopiaIconColor: '#8B5CF6',
    tritanopiaTitleColor: '#3C0F7B'
  }}
>
  This alert has custom colors for each color vision mode!
</Alert>
```

**`CustomAlertColors` Properties:**
- `defaultBg` - Background color for normal vision
- `defaultBorder` - Border color for normal vision
- `defaultColor` - Text color for normal vision
- `defaultIconColor` - Icon color for normal vision
- `defaultTitleColor` - Title color for normal vision
- `protanopiaBg` - Background for protanopia users
- `protanopiaBorder` - Border for protanopia users
- `protanopiaColor` - Text color for protanopia users
- `protanopiaIconColor` - Icon color for protanopia users
- `protanopiaTitleColor` - Title color for protanopia users
- `deuteranopiaBg` - Background for deuteranopia users
- `deuteranopiaBorder` - Border for deuteranopia users
- `deuteranopiaColor` - Text color for deuteranopia users
- `deuteranopiaIconColor` - Icon color for deuteranopia users
- `deuteranopiaTitleColor` - Title color for deuteranopia users
- `tritanopiaBg` - Background for tritanopia users
- `tritanopiaBorder` - Border for tritanopia users
- `tritanopiaColor` - Text color for tritanopia users
- `tritanopiaIconColor` - Icon color for tritanopia users
- `tritanopiaTitleColor` - Title color for tritanopia users

### Custom Colors for Breadcrumb

The Breadcrumb component supports fully customizable colors for each color vision mode. Use the `customColors` prop to define colors for all accessibility modes:

```tsx
import { Breadcrumb } from 'neo-ram-prisma';

<Breadcrumb
  items={[
    { label: 'Home', onClick: () => navigate('/') },
    { label: 'Products', onClick: () => navigate('/products') },
    { label: 'Current Page' }
  ]}
  colorVision="protanopia"
  customColors={{
    // Normal vision colors
    defaultColor: '#1F2937',
    defaultColorHover: '#007BFF',
    defaultColorCurrent: '#1E3A8A',
    defaultSeparator: '#9CA3AF',

    // Protanopia (Red-blind) colors
    protanopiaColor: '#1F2937',
    protanopiaColorHover: '#3399FF',
    protanopiaColorCurrent: '#004499',
    protanopiaSeparator: '#9CA3AF',

    // Deuteranopia (Green-blind) colors
    deuteranopiaColor: '#1F2937',
    deuteranopiaColorHover: '#4F83CC',
    deuteranopiaColorCurrent: '#1E3A8A',
    deuteranopiaSeparator: '#9CA3AF',

    // Tritanopia (Blue-blind) colors
    tritanopiaColor: '#1F2937',
    tritanopiaColorHover: '#D946EF',
    tritanopiaColorCurrent: '#7E22CE',
    tritanopiaSeparator: '#E5E7EB'
  }}
/>
```

**`CustomBreadcrumbColors` Properties:**
- `defaultColor` - Link color for normal vision
- `defaultColorHover` - Hover color for normal vision
- `defaultColorCurrent` - Current page color for normal vision
- `defaultSeparator` - Separator color for normal vision
- `protanopiaColor` - Link color for protanopia users
- `protanopiaColorHover` - Hover color for protanopia users
- `protanopiaColorCurrent` - Current page color for protanopia users
- `protanopiaSeparator` - Separator color for protanopia users
- `deuteranopiaColor` - Link color for deuteranopia users
- `deuteranopiaColorHover` - Hover color for deuteranopia users
- `deuteranopiaColorCurrent` - Current page color for deuteranopia users
- `deuteranopiaSeparator` - Separator color for deuteranopia users
- `tritanopiaColor` - Link color for tritanopia users
- `tritanopiaColorHover` - Hover color for tritanopia users
- `tritanopiaColorCurrent` - Current page color for tritanopia users
- `tritanopiaSeparator` - Separator color for tritanopia users

### Custom Colors for Checkbox

The Checkbox component supports fully customizable colors for each color vision mode:

```tsx
import { Checkbox } from 'neo-ram-prisma';

<Checkbox
  label="Accept terms"
  colorVision="protanopia"
  customColors={{
    // Normal vision
    defaultAccent: '#007BFF',
    defaultBorder: '#007BFF',
    defaultBg: '#FFFFFF',
    defaultLabelColor: '#222222',

    // Protanopia (Red-blind)
    protanopiaAccent: '#3399FF',
    protanopiaBorder: '#3399FF',
    protanopiaBg: '#FFFFFF',
    protanopiaLabelColor: '#222222',

    // Deuteranopia (Green-blind)
    deuteranopiaAccent: '#4F83CC',
    deuteranopiaBorder: '#4F83CC',
    deuteranopiaBg: '#FFFFFF',
    deuteranopiaLabelColor: '#222222',

    // Tritanopia (Blue-blind)
    tritanopiaAccent: '#D946EF',
    tritanopiaBorder: '#D946EF',
    tritanopiaBg: '#FFFFFF',
    tritanopiaLabelColor: '#222222'
  }}
/>
```

**`CustomCheckboxColors` Properties:**
- `defaultAccent` - Checkbox accent color for normal vision
- `defaultBorder` - Checkbox border color for normal vision
- `defaultBg` - Checkbox background for normal vision
- `defaultLabelColor` - Label color for normal vision
- `protanopiaAccent` - Accent color for protanopia users
- `protanopiaBorder` - Border color for protanopia users
- `protanopiaBg` - Background for protanopia users
- `protanopiaLabelColor` - Label color for protanopia users
- `deuteranopiaAccent` - Accent color for deuteranopia users
- `deuteranopiaBorder` - Border color for deuteranopia users
- `deuteranopiaBg` - Background for deuteranopia users
- `deuteranopiaLabelColor` - Label color for deuteranopia users
- `tritanopiaAccent` - Accent color for tritanopia users
- `tritanopiaBorder` - Border color for tritanopia users
- `tritanopiaBg` - Background for tritanopia users
- `tritanopiaLabelColor` - Label color for tritanopia users

### Custom Colors for Input

The Input component supports fully customizable colors for each color vision mode:

```tsx
import { Input } from 'neo-ram-prisma';

<Input
  label="Email"
  type="email"
  colorVision="deuteranopia"
  customColors={{
    // Normal vision
    defaultBorder: '#007BFF',
    defaultBorderFocus: '#0056B3',
    defaultColor: '#222222',
    defaultBg: '#FFFFFF',

    // Protanopia (Red-blind)
    protanopiaBorder: '#3399FF',
    protanopiaBorderFocus: '#2673B6',
    protanopiaColor: '#222222',
    protanopiaBg: '#FFFFFF',

    // Deuteranopia (Green-blind)
    deuteranopiaBorder: '#4F83CC',
    deuteranopiaBorderFocus: '#3A5C99',
    deuteranopiaColor: '#222222',
    deuteranopiaBg: '#FFFFFF',

    // Tritanopia (Blue-blind)
    tritanopiaBorder: '#D946EF',
    tritanopiaBorderFocus: '#BE185D',
    tritanopiaColor: '#222222',
    tritanopiaBg: '#FFFFFF'
  }}
/>
```

**`CustomInputColors` Properties:**
- `defaultBorder` - Border color for normal vision
- `defaultBorderFocus` - Border focus color for normal vision
- `defaultColor` - Text color for normal vision
- `defaultBg` - Background for normal vision
- `protanopiaBorder` - Border color for protanopia users
- `protanopiaBorderFocus` - Border focus color for protanopia users
- `protanopiaColor` - Text color for protanopia users
- `protanopiaBg` - Background for protanopia users
- `deuteranopiaBorder` - Border color for deuteranopia users
- `deuteranopiaBorderFocus` - Border focus color for deuteranopia users
- `deuteranopiaColor` - Text color for deuteranopia users
- `deuteranopiaBg` - Background for deuteranopia users
- `tritanopiaBorder` - Border color for tritanopia users
- `tritanopiaBorderFocus` - Border focus color for tritanopia users
- `tritanopiaColor` - Text color for tritanopia users
- `tritanopiaBg` - Background for tritanopia users

### Custom Colors for Pagination

The Pagination component supports fully customizable colors for each color vision mode:

```tsx
import { Pagination } from 'neo-ram-prisma';

<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
  colorVision="tritanopia"
  customColors={{
    // Normal vision
    defaultColorActive: '#FFFFFF',
    defaultBgActive: '#007BFF',
    defaultShadowFocus: '0 0 0 3px rgba(11,92,255,.15)',

    // Protanopia (Red-blind)
    protanopiaColorActive: '#FFFFFF',
    protanopiaBgActive: '#3399FF',
    protanopiaShadowFocus: '0 0 0 3px rgba(51,153,255,.15)',

    // Deuteranopia (Green-blind)
    deuteranopiaColorActive: '#FFFFFF',
    deuteranopiaBgActive: '#4F83CC',
    deuteranopiaShadowFocus: '0 0 0 3px rgba(79,131,204,.15)',

    // Tritanopia (Blue-blind)
    tritanopiaColorActive: '#FFFFFF',
    tritanopiaBgActive: '#D946EF',
    tritanopiaShadowFocus: '0 0 0 3px rgba(217,70,239,.15)'
  }}
/>
```

**`CustomPaginationColors` Properties:**
- `defaultColorActive` - Text color for active page (normal vision)
- `defaultBgActive` - Background color for active page (normal vision)
- `defaultShadowFocus` - Focus shadow for normal vision
- `protanopiaColorActive` - Text color for protanopia users
- `protanopiaBgActive` - Background color for protanopia users
- `protanopiaShadowFocus` - Focus shadow for protanopia users
- `deuteranopiaColorActive` - Text color for deuteranopia users
- `deuteranopiaBgActive` - Background color for deuteranopia users
- `deuteranopiaShadowFocus` - Focus shadow for deuteranopia users
- `tritanopiaColorActive` - Text color for tritanopia users
- `tritanopiaBgActive` - Background color for tritanopia users
- `tritanopiaShadowFocus` - Focus shadow for tritanopia users


**`CustomBreadcrumbColors` Properties:**
- `defaultColor` - Link color for normal vision
- `defaultColorHover` - Hover color for normal vision
- `defaultColorCurrent` - Current page color for normal vision
- `defaultSeparator` - Separator color for normal vision
- `protanopiaColor` - Link color for protanopia users
- `protanopiaColorHover` - Hover color for protanopia users
- `protanopiaColorCurrent` - Current page color for protanopia users
- `protanopiaSeparator` - Separator color for protanopia users
- `deuteranopiaColor` - Link color for deuteranopia users
- `deuteranopiaColorHover` - Hover color for deuteranopia users
- `deuteranopiaColorCurrent` - Current page color for deuteranopia users
- `deuteranopiaSeparator` - Separator color for deuteranopia users
- `tritanopiaColor` - Link color for tritanopia users
- `tritanopiaColorHover` - Hover color for tritanopia users
- `tritanopiaColorCurrent` - Current page color for tritanopia users
- `tritanopiaSeparator` - Separator color for tritanopia users


### Slider

Customize Slider colors for different color vision modes:

```tsx
<Slider
  value={50}
  onChange={(value) => setValue(value)}
  label="Accessible Slider"
  colorVision="protanopia"
  customColors={{
    // Normal vision colors
    defaultTrackBg: '#E5E7EB',
    defaultTrackBorder: '#D1D5DB',
    defaultFillBg: '#3B82F6',
    defaultThumbBg: '#2563EB',
    defaultThumbBorder: '#1E40AF',

    // Protanopia (Red-blind)
    protanopiaTrackBg: '#E5E7EB',
    protanopiaTrackBorder: '#D1D5DB',
    protanopiaFillBg: '#3399FF',
    protanopiaThumbBg: '#0066FF',
    protanopiaThumbBorder: '#0052CC',

    // Deuteranopia (Green-blind)
    deuteranopiaTrackBg: '#E5E7EB',
    deuteranopiaTrackBorder: '#D1D5DB',
    deuteranopiaFillBg: '#4F83CC',
    deuteranopiaThumbBg: '#2E5090',
    deuteranopiaThumbBorder: '#1A2D5C',

    // Tritanopia (Blue-blind)
    tritanopiaTrackBg: '#E5E7EB',
    tritanopiaTrackBorder: '#D1D5DB',
    tritanopiaFillBg: '#FFCC00',
    tritanopiaThumbBg: '#E6B800',
    tritanopiaThumbBorder: '#CC9A00'
  }}
/>
```

**`CustomSliderColors` Properties:**
- `defaultTrackBg` - Track background color for normal vision
- `defaultTrackBorder` - Track border color for normal vision
- `defaultFillBg` - Filled portion background for normal vision
- `defaultThumbBg` - Thumb background color for normal vision
- `defaultThumbBorder` - Thumb border color for normal vision
- `protanopiaTrackBg` - Track background for protanopia users
- `protanopiaTrackBorder` - Track border for protanopia users
- `protanopiaFillBg` - Filled portion background for protanopia users
- `protanopiaThumbBg` - Thumb background for protanopia users
- `protanopiaThumbBorder` - Thumb border for protanopia users
- `deuteranopiaTrackBg` - Track background for deuteranopia users
- `deuteranopiaTrackBorder` - Track border for deuteranopia users
- `deuteranopiaFillBg` - Filled portion background for deuteranopia users
- `deuteranopiaThumbBg` - Thumb background for deuteranopia users
- `deuteranopiaThumbBorder` - Thumb border for deuteranopia users
- `tritanopiaTrackBg` - Track background for tritanopia users
- `tritanopiaTrackBorder` - Track border for tritanopia users
- `tritanopiaFillBg` - Filled portion background for tritanopia users
- `tritanopiaThumbBg` - Thumb background for tritanopia users
- `tritanopiaThumbBorder` - Thumb border for tritanopia users


### Spinner

Customize Spinner colors for different color vision modes:

```tsx
<Spinner
  variant="primary"
  colorVision="protanopia"
  size="md"
  spinnerVariant="1"
  label="Loading..."
  customColors={{
    // Normal vision colors
    defaultColor: '#007bff',

    // Protanopia (Red-blind)
    protanopiaColor: '#3399ff',

    // Deuteranopia (Green-blind)
    deuteranopiaColor: '#4f83cc',

    // Tritanopia (Blue-blind)
    tritanopiaColor: '#ffcc00'
  }}
/>
```

**`CustomSpinnerColors` Properties:**
- `defaultColor` - Spinner color for normal vision
- `protanopiaColor` - Spinner color for protanopia users
- `deuteranopiaColor` - Spinner color for deuteranopia users
- `tritanopiaColor` - Spinner color for tritanopia users


### Textarea

Customize Textarea colors for different color vision modes:

```tsx
<Textarea
  label="Comments"
  placeholder="Enter your message..."
  colorVision="deuteranopia"
  customColors={{
    // Normal vision colors
    defaultBg: '#ffffff',
    defaultBorder: '#cbd2dd',
    defaultBorderFocus: '#007bff',
    defaultColor: '#1a1f2b',
    defaultPlaceholder: '#6b7280',

    // Protanopia (Red-blind)
    protanopiaBg: '#ffffff',
    protanopiaBorder: '#cbd2dd',
    protanopiaBorderFocus: '#3399ff',
    protanopiaColor: '#1a1f2b',
    protanopiaPlaceholder: '#6b7280',

    // Deuteranopia (Green-blind)
    deuteranopiaBg: '#ffffff',
    deuteranopiaBorder: '#cbd2dd',
    deuteranopiaBorderFocus: '#4f83cc',
    deuteranopiaColor: '#1a1f2b',
    deuteranopiaPlaceholder: '#6b7280',

    // Tritanopia (Blue-blind)
    tritanopiaBg: '#ffffff',
    tritanopiaBorder: '#cbd2dd',
    tritanopiaBorderFocus: '#ffcc00',
    tritanopiaColor: '#1a1f2b',
    tritanopiaPlaceholder: '#6b7280'
  }}
  rows={5}
/>
```

**`CustomTextareaColors` Properties:**
- `defaultBg` - Background color for normal vision
- `defaultBorder` - Border color for normal vision
- `defaultBorderFocus` - Focus border color for normal vision
- `defaultColor` - Text color for normal vision
- `defaultPlaceholder` - Placeholder color for normal vision
- `protanopiaBg` - Background for protanopia users
- `protanopiaBorder` - Border for protanopia users
- `protanopiaBorderFocus` - Focus border for protanopia users
- `protanopiaColor` - Text color for protanopia users
- `protanopiaPlaceholder` - Placeholder for protanopia users
- `deuteranopiaBg` - Background for deuteranopia users
- `deuteranopiaBorder` - Border for deuteranopia users
- `deuteranopiaBorderFocus` - Focus border for deuteranopia users
- `deuteranopiaColor` - Text color for deuteranopia users
- `deuteranopiaPlaceholder` - Placeholder for deuteranopia users
- `tritanopiaBg` - Background for tritanopia users
- `tritanopiaBorder` - Border for tritanopia users
- `tritanopiaBorderFocus` - Focus border for tritanopia users
- `tritanopiaColor` - Text color for tritanopia users
- `tritanopiaPlaceholder` - Placeholder for tritanopia users


### Toggle

Customize Toggle colors for different color vision modes:

```tsx
<Toggle
  checked={isEnabled}
  onChange={setIsEnabled}
  variant="primary"
  colorVision="tritanopia"
  customColors={{
    // Normal vision colors
    defaultBg: '#e9ecf1',
    defaultBorder: '#cbd2dd',
    defaultBgOn: '#007bff',
    defaultBorderOn: '#007bff',
    defaultKnob: '#ffffff',

    // Protanopia (Red-blind)
    protanopiaBg: '#e9ecf1',
    protanopiaBorder: '#cbd2dd',
    protanopiaBgOn: '#3399ff',
    protanopiaBorderOn: '#3399ff',
    protanopiaKnob: '#ffffff',

    // Deuteranopia (Green-blind)
    deuteranopiaBg: '#e9ecf1',
    deuteranopiaBorder: '#cbd2dd',
    deuteranopiaBgOn: '#4f83cc',
    deuteranopiaBorderOn: '#4f83cc',
    deuteranopiaKnob: '#ffffff',

    // Tritanopia (Blue-blind)
    tritanopiaBg: '#e9ecf1',
    tritanopiaBorder: '#cbd2dd',
    tritanopiaBgOn: '#ffcc00',
    tritanopiaBorderOn: '#ffcc00',
    tritanopiaKnob: '#000000'
  }}
/>
```

**`CustomToggleColors` Properties:**
- `defaultBg` - Background color when off (normal vision)
- `defaultBorder` - Border color when off (normal vision)
- `defaultBgOn` - Background color when on (normal vision)
- `defaultBorderOn` - Border color when on (normal vision)
- `defaultKnob` - Knob/thumb color (normal vision)
- `protanopiaBg` - Background when off (protanopia users)
- `protanopiaBorder` - Border when off (protanopia users)
- `protanopiaBgOn` - Background when on (protanopia users)
- `protanopiaBorderOn` - Border when on (protanopia users)
- `protanopiaKnob` - Knob color (protanopia users)
- `deuteranopiaBg` - Background when off (deuteranopia users)
- `deuteranopiaBorder` - Border when off (deuteranopia users)
- `deuteranopiaBgOn` - Background when on (deuteranopia users)
- `deuteranopiaBorderOn` - Border when on (deuteranopia users)
- `deuteranopiaKnob` - Knob color (deuteranopia users)
- `tritanopiaBg` - Background when off (tritanopia users)
- `tritanopiaBorder` - Border when off (tritanopia users)
- `tritanopiaBgOn` - Background when on (tritanopia users)
- `tritanopiaBorderOn` - Border when on (tritanopia users)
- `tritanopiaKnob` - Knob color (tritanopia users)


### Tooltip

Customize Tooltip colors for different color vision modes:

```tsx
<Tooltip
  content="This is a helpful tooltip"
  position="top"
  variant="primary"
  colorVision="protanopia"
  customColors={{
    // Normal vision colors
    defaultBg: '#1f2937',
    defaultColor: '#ffffff',
    defaultBorder: 'rgba(255, 255, 255, 0.1)',

    // Protanopia (Red-blind)
    protanopiaBg: '#1f2937',
    protanopiaColor: '#ffffff',
    protanopiaBorder: 'rgba(51, 153, 255, 0.2)',

    // Deuteranopia (Green-blind)
    deuteranopiaBg: '#1f2937',
    deuteranopiaColor: '#ffffff',
    deuteranopiaBorder: 'rgba(79, 131, 204, 0.2)',

    // Tritanopia (Blue-blind)
    tritanopiaBg: '#1f2937',
    tritanopiaColor: '#ffffff',
    tritanopiaBorder: 'rgba(255, 204, 0, 0.2)'
  }}
>
  <button>Hover me</button>
</Tooltip>
```

**`CustomTooltipColors` Properties:**
- `defaultBg` - Background color for normal vision
- `defaultColor` - Text color for normal vision
- `defaultBorder` - Border color for normal vision
- `protanopiaBg` - Background for protanopia users
- `protanopiaColor` - Text color for protanopia users
- `protanopiaBorder` - Border for protanopia users
- `deuteranopiaBg` - Background for deuteranopia users
- `deuteranopiaColor` - Text color for deuteranopia users
- `deuteranopiaBorder` - Border for deuteranopia users
- `tritanopiaBg` - Background for tritanopia users
- `tritanopiaColor` - Text color for tritanopia users
- `tritanopiaBorder` - Border for tritanopia users


## 🎨 Customizable Colors Overview

### Version 1.1.0 - Full customColor Support

The `customColors` prop has been added to **all 13 components**, providing unprecedented customization capabilities:

| Component | Properties | Vision Modes | Total Options |
|---|---|---|---|
| Button | 3 colors | 4 | 12 |
| Alert | 5 colors | 4 | 20 |
| Breadcrumb | 4 colors | 4 | 16 |
| Checkbox | 4 colors | 4 | 16 |
| Input | 4 colors | 4 | 16 |
| Pagination | 3 colors | 4 | 12 |
| Radiogroup | 6 colors | 4 | 24 |
| Select | 6 colors | 4 | 24 |
| Slider | 5 colors | 4 | 20 |
| Spinner | 1 color | 4 | 4 |
| Textarea | 5 colors | 4 | 20 |
| Toggle | 5 colors | 4 | 20 |
| Tooltip | 3 colors | 4 | 12 |
| **TOTAL** | | | **236 customizable properties** |

### How to Use

Every component accepts a `customColors` prop with properties for each color vision mode:

```tsx
<MyComponent
  colorVision="protanopia"
  customColors={{
    defaultColor: '#value',        // Normal vision
    protanopiaColor: '#value',     // Red-blind
    deuteranopiaColor: '#value',   // Green-blind
    tritanopiaColor: '#value',     // Blue-blind
  }}
/>
```

### Benefits

- ✨ **Granular Control**: Customize every color for every vision mode
- 🎨 **Brand Integration**: Align components with your design system
- ♿ **Accessibility**: Ensure colors are properly calibrated for colorblind users
- 🔄 **No Conflicts**: Works alongside existing `variant` and `style` props
- ⚡ **Type Safe**: Full TypeScript support with intellisense


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

## 📞 Support & Documentation

**Need help?** Visit our complete documentation:

### 🌐 **[https://prisma-drab.vercel.app/](https://prisma-drab.vercel.app/)**

The website features:
- 🎯 **Live Component Explorer** - Interactive component previews
- 🌈 **Color Vision Mode Simulator** - Test accessibility for colorblind users
- 📚 **Complete API Reference** - Every component's props and usage
- 💻 **Code Examples** - Copy-paste ready code snippets
- 🔍 **Search Functionality** - Quick access to what you need

For GitHub issues and contributions:
- 🐛 [Report Issues](https://github.com/Neo-Ram/prisma-ui-library/issues)
- 🔗 [GitHub Repository](https://github.com/Neo-Ram/prisma-ui-library)

---

*Built with ❤️ for the React community*