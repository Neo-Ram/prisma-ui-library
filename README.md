
# neo-ram-prisma 🎯

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?logo=github&style=for-the-badge)](https://github.com/Neo-Ram/prisma-ui-library)
![npm version](https://img.shields.io/npm/v/neo-ram-prisma)
![npm downloads](https://img.shields.io/npm/dt/neo-ram-prisma)
![WCAG Compliant](https://img.shields.io/badge/WCAG-2.1%20AA-green)

> 🆕 **v1.2.0** - Complete custom colors system for all 13 components! 236+ customizable color properties with full colorblind support.

A comprehensive, accessible, and customizable React component library built with TypeScript for academic research. Designed following WCAG 2.1 AA guidelines with accessibility-first principles, complete colorblind support, and consistent design patterns across all components.

With **v1.1.0**, every component supports fully customizable colors through the `customColors` prop, allowing granular control over every color for every color vision mode.

## ✨ Key Features

- 🎯 **WCAG 2.1 AA Compliant**
- 🌈 **Colorblind Friendly**: Support for protanopia, deuteranopia, and tritanopia
- 📱 **Responsive Design**: Mobile-first approach with adaptive layouts
- ⚡ **TypeScript**: Full type safety with comprehensive prop interfaces
- 🎨 **Consistent Design**: Unified color system and sizing across all components
- ♿ **Accessibility Modes**: Low-vision and high-contrast support
- 🚀 **Modern React**: Hooks, functional components, and modern patterns

## 🆕 What's New in v1.1.0

### 🎨 Complete Custom Colors System for All 13 Components

Every component now supports **fully customizable colors** with the new `customColors` prop! This release brings unprecedented customization capabilities to the entire library.

**Key Improvements in v1.1.0:**
- ✅ **All 13 components** updated with `custom` variant and `customColors` support
- ✅ **236+ color properties** customizable across the entire library
- ✅ **Clean CSS architecture** - No `!important` flags, no specificity conflicts
- ✅ **Complete color vision support** - All 4 modes (normal, protanopia, deuteranopia, tritanopia)
- ✅ **Comprehensive documentation** - Full API reference for every component
- ✅ **Demo examples** - 26 interactive demo examples showing all components with custom colors

**What Changed:**
1. **Custom Variant Pattern**: All components now include a `custom` variant that doesn't apply predefined colors, allowing inline CSS variables to take full control
2. **Inline CSS Variables**: Colors are applied via React's `style` prop without `!important`, ensuring clean, maintainable CSS
3. **Vision Mode Support**: Each component accepts a `colorVision` prop to switch between 4 color vision modes
4. **Type Safety**: Complete TypeScript interfaces for every component's `customColors` prop

### Basic Usage Example

Define colors for each color vision mode directly:

```tsx
<Button
  variant="custom"
  colorVision="normal"
  customColors={{
    // Normal vision (background, hover, active)
    defaultColor: '#1c64d7',
    defaultColorHover: '#1855b7',
    defaultColorActive: '#144697',
    
    // Protanopia (Red-blind)
    protanopiaColor: '#2253f0',
    protanopiaColorHover: '#1d47cc',
    protanopiaColorActive: '#183aa8',
    
    // Deuteranopia (Green-blind)
    deuteranopiaColor: '#006ebe',
    deuteranopiaColorHover: '#005ea2',
    deuteranopiaColorActive: '#004d85',
    
    // Tritanopia (Blue-blind)
    tritanopiaColor: '#6a45f0',
    tritanopiaColorHover: '#5a3bcc',
    tritanopiaColorActive: '#4a30a8',
    
    // Text color for every mode (>= 4.5:1 against all backgrounds above)
    textColor: '#ffffff',
  }}
>
  Fully Customizable Button
</Button>
```

### Components Updated

All 13 components now have complete custom color support:

| Component | Custom Properties | Vision Modes | Status |
|---|---|---|---|
| Button | 3 colors | 4 | ✅ |
| Alert | 5 colors | 4 | ✅ |
| Breadcrumb | 4 colors | 4 | ✅ |
| Checkbox | 4 colors | 4 | ✅ |
| Input | 4 colors | 4 | ✅ |
| Pagination | 3 colors | 4 | ✅ |
| Radiogroup | 6 colors | 4 | ✅ |
| Select | 6 colors | 4 | ✅ |
| Slider | 5 colors | 4 | ✅ |
| Spinner | 1 color | 4 | ✅ |
| Textarea | 5 colors | 4 | ✅ |
| Toggle | 5 colors | 4 | ✅ |
| Tooltip | 3 colors | 4 | ✅ |

### Demo & Testing

A complete demo application (`src/demo/main.tsx`) showcases all components with:
- ✨ Basic usage examples for each component
- 🎨 Custom color examples for all 13 components
- 👁️ Two vision mode demonstrations per component (normal + protanopia)
- 🔄 Interactive controls for testing different configurations

Run the demo with: `npm run dev`

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
    defaultColor: '#c92400',
    defaultColorHover: '#C41E3A',
    defaultColorActive: '#8B0000',
    protanopiaColor: '#a35f00',
    protanopiaColorHover: '#b84900',
    protanopiaColorActive: '#bd3f00',
    deuteranopiaColor: '#008100',
    deuteranopiaColorHover: '#008000',
    deuteranopiaColorActive: '#005500',
    tritanopiaColor: '#bf00bf',
    tritanopiaColorHover: '#c100c1',
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
  variant="custom"
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
    protanopiaBorder: '#007efc',
    protanopiaBorderFocus: '#2570b2',
    protanopiaColor: '#222222',
    protanopiaBg: '#FFFFFF',

    // Deuteranopia
    deuteranopiaBorder: '#4F83CC',
    deuteranopiaBorderFocus: '#3A5C99',
    deuteranopiaColor: '#222222',
    deuteranopiaBg: '#FFFFFF',

    // Tritanopia
    tritanopiaBorder: '#d841ef',
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
  variant="custom"
  label="I agree to terms"
  colorVision="protanopia"
  customColors={{
    // Normal vision
    defaultAccent: '#007BFF',
    defaultBorder: '#007BFF',
    defaultBg: '#FFFFFF',
    defaultLabelColor: '#222222',

    // Protanopia
    protanopiaAccent: '#007efc',
    protanopiaBorder: '#007efc',
    protanopiaBg: '#FFFFFF',
    protanopiaLabelColor: '#222222',

    // Deuteranopia
    deuteranopiaAccent: '#4F83CC',
    deuteranopiaBorder: '#4F83CC',
    deuteranopiaBg: '#FFFFFF',
    deuteranopiaLabelColor: '#222222',

    // Tritanopia
    tritanopiaAccent: '#d841ef',
    tritanopiaBorder: '#d841ef',
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
  variant="custom"
  items={[
    { label: 'Dashboard', onClick: () => navigate('/') },
    { label: 'Projects', onClick: () => navigate('/projects') },
    { label: 'UI Library' } // Current page
  ]}
  colorVision="tritanopia"
  customColors={{
    // Normal vision
    defaultColor: '#4c4fef',
    defaultColorHover: '#4F46E5',
    defaultColorCurrent: '#4C0519',
    defaultSeparator: '#748eaf',

    // Protanopia
    protanopiaColor: '#0a5de4',
    protanopiaColorHover: '#1759ea',
    protanopiaColorCurrent: '#1E3A8A',
    protanopiaSeparator: '#7b8ea8',

    // Deuteranopia
    deuteranopiaColor: '#763ff4',
    deuteranopiaColorHover: '#7C3AED',
    deuteranopiaColorCurrent: '#581C87',
    deuteranopiaSeparator: '#848e9f',

    // Tritanopia
    tritanopiaColor: '#ba12d4',
    tritanopiaColorHover: '#BE185D',
    tritanopiaColorCurrent: '#7E22CE',
    tritanopiaSeparator: '#848ea1'
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
  variant="custom"
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  colorVision="tritanopia"
  customColors={{
    // Normal vision
    defaultColorActive: '#FFFFFF',
    defaultBgActive: '#0065d1',
    defaultShadowFocus: '0 0 0 3px rgba(11,92,255,.15)',

    // Protanopia
    protanopiaColorActive: '#FFFFFF',
    protanopiaBgActive: '#0067cf',
    protanopiaShadowFocus: '0 0 0 3px rgba(51,153,255,.15)',

    // Deuteranopia
    deuteranopiaColorActive: '#FFFFFF',
    deuteranopiaBgActive: '#366ebc',
    deuteranopiaShadowFocus: '0 0 0 3px rgba(79,131,204,.15)',

    // Tritanopia
    tritanopiaColorActive: '#FFFFFF',
    tritanopiaBgActive: '#ba12d4',
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
  variant="custom"
  title="Custom Alert"
  dismissible
  colorVision="deuteranopia"
  customColors={{
    // Normal vision
    defaultBg: '#F3E8FF',
    defaultBorder: '#b067ff',
    defaultColor: '#6B21A8',
    defaultIconColor: '#A855F7',
    defaultTitleColor: '#581C87',

    // Protanopia
    protanopiaBg: '#FEF3C7',
    protanopiaBorder: '#a98803',
    protanopiaColor: '#92400E',
    protanopiaIconColor: '#be7a08',
    protanopiaTitleColor: '#78350F',

    // Deuteranopia
    deuteranopiaBg: '#DBEAFE',
    deuteranopiaBorder: '#1c7ffb',
    deuteranopiaColor: '#1E40AF',
    deuteranopiaIconColor: '#3B82F6',
    deuteranopiaTitleColor: '#1E3A8A',

    // Tritanopia
    tritanopiaBg: '#F5F3FF',
    tritanopiaBorder: '#8f76f9',
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

### 🎨 Custom Colors Architecture

The custom color system uses a **clean, maintainable architecture** that avoids CSS specificity conflicts:

**The Core Pattern:**

1. **`variant="custom"`** - A special variant that applies no predefined colors
2. **`customColors` prop** - TypeScript-safe object with color properties for all vision modes
3. **Inline CSS variables** - React's `style` prop applies colors without `!important`
4. **`colorVision` prop** - Switches which color set to use (normal, protanopia, deuteranopia, tritanopia)

**Why This Design?**
- 🔴 **No Specificity Wars**: The `custom` variant doesn't define ANY color values, so inline CSS variables always win
- ✨ **Clean CSS**: No `!important` flags anywhere in the codebase
- 🎯 **Predictable**: Color customization only works when you explicitly set `variant="custom"`
- ⚡ **Maintainable**: Each variant has a clear, single responsibility
- ♿ **Accessible**: Every color can be calibrated for different color vision modes

**Usage Pattern:**

```tsx
// ✅ CORRECT - Use variant="custom" with customColors
<Button
  variant="custom"
  colorVision="normal"
  customColors={{
    defaultColor: '#1c64d7',
    defaultColorHover: '#1855b7',
    defaultColorActive: '#144697',
    protanopiaColor: '#2253f0',
    protanopiaColorHover: '#1d47cc',
    protanopiaColorActive: '#183aa8',
    deuteranopiaColor: '#006ebe',
    deuteranopiaColorHover: '#005ea2',
    deuteranopiaColorActive: '#004d85',
    tritanopiaColor: '#6a45f0',
    tritanopiaColorHover: '#5a3bcc',
    tritanopiaColorActive: '#4a30a8',
    textColor: '#ffffff',
  }}
>
  Custom Button
</Button>

// ❌ DON'T - Using customColors without variant="custom" won't work
<Button
  variant="primary"
  customColors={{...}}
>
  This won't show custom colors
</Button>
```

**All 13 components support this pattern:**
- Form Controls: Button, Input, Checkbox, Radiogroup, Toggle, Slider, Select, Textarea
- Navigation: Breadcrumb, Pagination
- Feedback: Alert, Spinner, Tooltip

### 🎨 Custom Colors Architecture

**Important:** To use customizable colors, **always use `variant="custom"`** on the component. This creates a dedicated CSS variant that applies no predefined color values, allowing inline CSS variables to work perfectly without specificity conflicts.

```tsx
// ✅ CORRECT - Use variant="custom" with customColors
<Button
  variant="custom"
  customColors={{ /* ... */ }}
>
  Custom Button
</Button>

// ❌ DON'T - Using customColors without variant="custom" won't work
<Button
  variant="primary"
  customColors={{ /* ... */ }}
>
  This won't show custom colors
</Button>
```

**Why this design?**
- 🔴 **No CSS Specificity Wars**: The `custom` variant doesn't define any color values, so inline CSS variables always win
- ✨ **Clean & Maintainable**: Each variant has a clear purpose and responsibility
- 🎯 **Predictable Behavior**: Color customization only works when explicitly intended
- ⚡ **No !important Flags**: Clean CSS without performance penalties

All 13 components support this pattern:
- Button, Alert, Breadcrumb, Checkbox, Input, Pagination, Radiogroup
- Select, Slider, Spinner, Textarea, Toggle, Tooltip

### Custom Colors for Button

The Button component supports fully customizable colors for each color vision mode. Use the `customColors` prop with `variant="custom"`:

```tsx
import { Button } from 'neo-ram-prisma';

<Button 
  variant="custom"
  customColors={{
    // Normal vision colors
    defaultColor: '#c92400',
    defaultColorHover: '#C41E3A',
    defaultColorActive: '#8B0000',
    
    // Protanopia (Red-blind) colors
    protanopiaColor: '#a35f00',
    protanopiaColorHover: '#b84900',
    protanopiaColorActive: '#bd3f00',
    
    // Deuteranopia (Green-blind) colors
    deuteranopiaColor: '#008100',
    deuteranopiaColorHover: '#008000',
    deuteranopiaColorActive: '#005500',
    
    // Tritanopia (Blue-blind) colors
    tritanopiaColor: '#bf00bf',
    tritanopiaColorHover: '#c100c1',
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
  variant="custom"
  title="Custom Alert"
  dismissible
  colorVision="deuteranopia"
  customColors={{
    // Normal vision colors
    defaultBg: '#F3E8FF',
    defaultBorder: '#b067ff',
    defaultColor: '#6B21A8',
    defaultIconColor: '#A855F7',
    defaultTitleColor: '#581C87',

    // Protanopia (Red-blind) colors
    protanopiaBg: '#FEF3C7',
    protanopiaBorder: '#a98803',
    protanopiaColor: '#92400E',
    protanopiaIconColor: '#be7a08',
    protanopiaTitleColor: '#78350F',

    // Deuteranopia (Green-blind) colors
    deuteranopiaBg: '#DBEAFE',
    deuteranopiaBorder: '#1c7ffb',
    deuteranopiaColor: '#1E40AF',
    deuteranopiaIconColor: '#3B82F6',
    deuteranopiaTitleColor: '#1E3A8A',

    // Tritanopia (Blue-blind) colors
    tritanopiaBg: '#F5F3FF',
    tritanopiaBorder: '#8f76f9',
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
  variant="custom"
  items={[
    { label: 'Home', onClick: () => navigate('/') },
    { label: 'Products', onClick: () => navigate('/products') },
    { label: 'Current Page' }
  ]}
  colorVision="protanopia"
  customColors={{
    // Normal vision colors
    defaultColor: '#1F2937',
    defaultColorHover: '#0065d1',
    defaultColorCurrent: '#1E3A8A',
    defaultSeparator: '#878f9e',

    // Protanopia (Red-blind) colors
    protanopiaColor: '#1F2937',
    protanopiaColorHover: '#0067cf',
    protanopiaColorCurrent: '#004499',
    protanopiaSeparator: '#878f9e',

    // Deuteranopia (Green-blind) colors
    deuteranopiaColor: '#1F2937',
    deuteranopiaColorHover: '#366ebc',
    deuteranopiaColorCurrent: '#1E3A8A',
    deuteranopiaSeparator: '#878f9e',

    // Tritanopia (Blue-blind) colors
    tritanopiaColor: '#1F2937',
    tritanopiaColorHover: '#ba12d4',
    tritanopiaColorCurrent: '#7E22CE',
    tritanopiaSeparator: '#848ea1'
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
  variant="custom"
  label="Accept terms"
  colorVision="protanopia"
  customColors={{
    // Normal vision
    defaultAccent: '#007BFF',
    defaultBorder: '#007BFF',
    defaultBg: '#FFFFFF',
    defaultLabelColor: '#222222',

    // Protanopia (Red-blind)
    protanopiaAccent: '#007efc',
    protanopiaBorder: '#007efc',
    protanopiaBg: '#FFFFFF',
    protanopiaLabelColor: '#222222',

    // Deuteranopia (Green-blind)
    deuteranopiaAccent: '#4F83CC',
    deuteranopiaBorder: '#4F83CC',
    deuteranopiaBg: '#FFFFFF',
    deuteranopiaLabelColor: '#222222',

    // Tritanopia (Blue-blind)
    tritanopiaAccent: '#d841ef',
    tritanopiaBorder: '#d841ef',
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
  variant="custom"
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
    protanopiaBorder: '#007efc',
    protanopiaBorderFocus: '#2570b2',
    protanopiaColor: '#222222',
    protanopiaBg: '#FFFFFF',

    // Deuteranopia (Green-blind)
    deuteranopiaBorder: '#4F83CC',
    deuteranopiaBorderFocus: '#3A5C99',
    deuteranopiaColor: '#222222',
    deuteranopiaBg: '#FFFFFF',

    // Tritanopia (Blue-blind)
    tritanopiaBorder: '#d841ef',
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
  variant="custom"
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
  colorVision="tritanopia"
  customColors={{
    // Normal vision
    defaultColorActive: '#FFFFFF',
    defaultBgActive: '#0065d1',
    defaultShadowFocus: '0 0 0 3px rgba(11,92,255,.15)',

    // Protanopia (Red-blind)
    protanopiaColorActive: '#FFFFFF',
    protanopiaBgActive: '#0067cf',
    protanopiaShadowFocus: '0 0 0 3px rgba(51,153,255,.15)',

    // Deuteranopia (Green-blind)
    deuteranopiaColorActive: '#FFFFFF',
    deuteranopiaBgActive: '#366ebc',
    deuteranopiaShadowFocus: '0 0 0 3px rgba(79,131,204,.15)',

    // Tritanopia (Blue-blind)
    tritanopiaColorActive: '#FFFFFF',
    tritanopiaBgActive: '#ba12d4',
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

### Custom Colors for Radiogroup

The Radiogroup component supports fully customizable colors for each color vision mode:

```tsx
import { Radiogroup } from 'neo-ram-prisma';

<Radiogroup
  variant="custom"
  name="plan"
  label="Choose your plan"
  colorVision="protanopia"
  customColors={{
    // Normal vision colors
    defaultColor: '#176dc2',
    defaultBorderColor: '#8f8f8f',
    defaultBorderColorHover: '#176dc2',
    defaultBorderColorFocus: '#176dc2',
    defaultLabelColor: '#000000',
    defaultDescriptionColor: '#666666',

    // Protanopia (Red-blind)
    protanopiaColor: '#996300',
    protanopiaBorderColor: '#a98700',
    protanopiaBorderColorHover: '#996300',
    protanopiaBorderColorFocus: '#996300',
    protanopiaLabelColor: '#000000',
    protanopiaDescriptionColor: '#666666',

    // Deuteranopia (Green-blind)
    deuteranopiaColor: '#9C27B0',
    deuteranopiaBorderColor: '#c967a9',
    deuteranopiaBorderColorHover: '#9C27B0',
    deuteranopiaBorderColorFocus: '#9C27B0',
    deuteranopiaLabelColor: '#000000',
    deuteranopiaDescriptionColor: '#666666',

    // Tritanopia (Blue-blind)
    tritanopiaColor: '#007887',
    tritanopiaBorderColor: '#088ecc',
    tritanopiaBorderColorHover: '#007887',
    tritanopiaBorderColorFocus: '#007887',
    tritanopiaLabelColor: '#000000',
    tritanopiaDescriptionColor: '#666666'
  }}
  options={[
    { value: 'basic', label: 'Basic', description: 'Perfect for individuals' },
    { value: 'pro', label: 'Pro', description: 'Best for teams' },
    { value: 'enterprise', label: 'Enterprise', description: 'For large organizations' }
  ]}
/>
```

**`CustomRadiogroupColors` Properties:**
- `defaultColor` - Radio button accent color for normal vision
- `defaultBorderColor` - Radio button border color for normal vision
- `defaultBorderColorHover` - Radio button hover border for normal vision
- `defaultBorderColorFocus` - Radio button focus border for normal vision
- `defaultLabelColor` - Label text color for normal vision
- `defaultDescriptionColor` - Description text color for normal vision
- `protanopiaColor` - Accent color for protanopia users
- `protanopiaBorderColor` - Border color for protanopia users
- `protanopiaBorderColorHover` - Hover border for protanopia users
- `protanopiaBorderColorFocus` - Focus border for protanopia users
- `protanopiaLabelColor` - Label color for protanopia users
- `protanopiaDescriptionColor` - Description color for protanopia users
- `deuteranopiaColor` - Accent color for deuteranopia users
- `deuteranopiaBorderColor` - Border color for deuteranopia users
- `deuteranopiaBorderColorHover` - Hover border for deuteranopia users
- `deuteranopiaBorderColorFocus` - Focus border for deuteranopia users
- `deuteranopiaLabelColor` - Label color for deuteranopia users
- `deuteranopiaDescriptionColor` - Description color for deuteranopia users
- `tritanopiaColor` - Accent color for tritanopia users
- `tritanopiaBorderColor` - Border color for tritanopia users
- `tritanopiaBorderColorHover` - Hover border for tritanopia users
- `tritanopiaBorderColorFocus` - Focus border for tritanopia users
- `tritanopiaLabelColor` - Label color for tritanopia users
- `tritanopiaDescriptionColor` - Description color for tritanopia users

### Custom Colors for Select

The Select component supports fully customizable colors for each color vision mode:

```tsx
import { Select } from 'neo-ram-prisma';

<Select
  variant="custom"
  label="Select Country"
  placeholder="Choose a country"
  value="option1"
  onChange={(value) => setValue(value)}
  colorVision="deuteranopia"
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]}
  customColors={{
    // Normal vision colors
    defaultBg: '#FFFFFF',
    defaultBorder: '#8f8f8f',
    defaultBorderFocus: '#176dc2',
    defaultColor: '#000000',
    defaultPlaceholder: '#757575',
    defaultShadowFocus: 'rgba(25, 118, 210, 0.2)',

    // Protanopia (Red-blind)
    protanopiaBg: '#FFFFFF',
    protanopiaBorder: '#a98700',
    protanopiaBorderFocus: '#996300',
    protanopiaColor: '#000000',
    protanopiaPlaceholder: '#757575',
    protanopiaShadowFocus: 'rgba(255, 165, 0, 0.2)',

    // Deuteranopia (Green-blind)
    deuteranopiaBg: '#FFFFFF',
    deuteranopiaBorder: '#c967a9',
    deuteranopiaBorderFocus: '#9C27B0',
    deuteranopiaColor: '#000000',
    deuteranopiaPlaceholder: '#757575',
    deuteranopiaShadowFocus: 'rgba(156, 39, 176, 0.2)',

    // Tritanopia (Blue-blind)
    tritanopiaBg: '#FFFFFF',
    tritanopiaBorder: '#088ecc',
    tritanopiaBorderFocus: '#007887',
    tritanopiaColor: '#000000',
    tritanopiaPlaceholder: '#757575',
    tritanopiaShadowFocus: 'rgba(0, 188, 212, 0.2)'
  }}
/>
```

**`CustomSelectColors` Properties:**
- `defaultBg` - Background color for normal vision
- `defaultBorder` - Border color for normal vision
- `defaultBorderFocus` - Focus border color for normal vision
- `defaultColor` - Text color for normal vision
- `defaultPlaceholder` - Placeholder color for normal vision
- `defaultShadowFocus` - Focus shadow for normal vision
- `protanopiaBg` - Background for protanopia users
- `protanopiaBorder` - Border for protanopia users
- `protanopiaBorderFocus` - Focus border for protanopia users
- `protanopiaColor` - Text color for protanopia users
- `protanopiaPlaceholder` - Placeholder for protanopia users
- `protanopiaShadowFocus` - Focus shadow for protanopia users
- `deuteranopiaBg` - Background for deuteranopia users
- `deuteranopiaBorder` - Border for deuteranopia users
- `deuteranopiaBorderFocus` - Focus border for deuteranopia users
- `deuteranopiaColor` - Text color for deuteranopia users
- `deuteranopiaPlaceholder` - Placeholder for deuteranopia users
- `deuteranopiaShadowFocus` - Focus shadow for deuteranopia users
- `tritanopiaBg` - Background for tritanopia users
- `tritanopiaBorder` - Border for tritanopia users
- `tritanopiaBorderFocus` - Focus border for tritanopia users
- `tritanopiaColor` - Text color for tritanopia users
- `tritanopiaPlaceholder` - Placeholder for tritanopia users
- `tritanopiaShadowFocus` - Focus shadow for tritanopia users


### Slider

Customize Slider colors for different color vision modes:

```tsx
<Slider
  variant="custom"
  value={50}
  onChange={(value) => setValue(value)}
  label="Accessible Slider"
  colorVision="protanopia"
  customColors={{
    // Normal vision colors
    defaultTrackBg: '#E5E7EB',
    defaultTrackBorder: '#848e9f',
    defaultFillBg: '#3B82F6',
    defaultThumbBg: '#2563EB',
    defaultThumbBorder: '#1E40AF',

    // Protanopia (Red-blind)
    protanopiaTrackBg: '#E5E7EB',
    protanopiaTrackBorder: '#848e9f',
    protanopiaFillBg: '#007efc',
    protanopiaThumbBg: '#0066FF',
    protanopiaThumbBorder: '#0052CC',

    // Deuteranopia (Green-blind)
    deuteranopiaTrackBg: '#E5E7EB',
    deuteranopiaTrackBorder: '#848e9f',
    deuteranopiaFillBg: '#4F83CC',
    deuteranopiaThumbBg: '#2E5090',
    deuteranopiaThumbBorder: '#1A2D5C',

    // Tritanopia (Blue-blind)
    tritanopiaTrackBg: '#E5E7EB',
    tritanopiaTrackBorder: '#848e9f',
    tritanopiaFillBg: '#a88700',
    tritanopiaThumbBg: '#E6B800',
    tritanopiaThumbBorder: '#b08500'
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
  variant="custom"
  colorVision="protanopia"
  size="md"
  spinnerVariant="1"
  label="Loading..."
  customColors={{
    // Normal vision colors
    defaultColor: '#0065d1',

    // Protanopia (Red-blind)
    protanopiaColor: '#0067cf',

    // Deuteranopia (Green-blind)
    deuteranopiaColor: '#366ebc',

    // Tritanopia (Blue-blind)
    tritanopiaColor: '#8a6e00'
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
  variant="custom"
  label="Comments"
  placeholder="Enter your message..."
  colorVision="deuteranopia"
  customColors={{
    // Normal vision colors
    defaultBg: '#ffffff',
    defaultBorder: '#7c8eaa',
    defaultBorderFocus: '#0065d1',
    defaultColor: '#1a1f2b',
    defaultPlaceholder: '#6b7280',

    // Protanopia (Red-blind)
    protanopiaBg: '#ffffff',
    protanopiaBorder: '#7c8eaa',
    protanopiaBorderFocus: '#0067cf',
    protanopiaColor: '#1a1f2b',
    protanopiaPlaceholder: '#6b7280',

    // Deuteranopia (Green-blind)
    deuteranopiaBg: '#ffffff',
    deuteranopiaBorder: '#7c8eaa',
    deuteranopiaBorderFocus: '#366ebc',
    deuteranopiaColor: '#1a1f2b',
    deuteranopiaPlaceholder: '#6b7280',

    // Tritanopia (Blue-blind)
    tritanopiaBg: '#ffffff',
    tritanopiaBorder: '#7c8eaa',
    tritanopiaBorderFocus: '#8a6e00',
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
  label="Enable notifications"
  checked={isEnabled}
  onChange={setIsEnabled}
  variant="custom"
  colorVision="tritanopia"
  customColors={{
    // Normal vision colors
    defaultBg: '#e9ecf1',
    defaultBorder: '#7c8eaa',
    defaultBgOn: '#1c64d7',
    defaultBorderOn: '#1c64d7',
    defaultKnob: '#ffffff',

    // Protanopia (Red-blind)
    protanopiaBg: '#e9ecf1',
    protanopiaBorder: '#7c8eaa',
    protanopiaBgOn: '#007efc',
    protanopiaBorderOn: '#007efc',
    protanopiaKnob: '#ffffff',

    // Deuteranopia (Green-blind)
    deuteranopiaBg: '#e9ecf1',
    deuteranopiaBorder: '#7c8eaa',
    deuteranopiaBgOn: '#006ebe',
    deuteranopiaBorderOn: '#006ebe',
    deuteranopiaKnob: '#ffffff',

    // Tritanopia (Blue-blind)
    tritanopiaBg: '#e9ecf1',
    tritanopiaBorder: '#7c8eaa',
    tritanopiaBgOn: '#a88700',
    tritanopiaBorderOn: '#a88700',
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
  variant="custom"
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
  variant="custom"
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

## 📋 Changelog v1.1.0

### 🆕 New Features

**Complete Custom Colors System**
- Added `customColors` prop to all 13 components
- Added `custom` variant to all components for color customization
- Support for 4 color vision modes per component (normal, protanopia, deuteranopia, tritanopia)
- **236+ customizable color properties** across the entire library

**Components Updated:**
1. **Button** - 3 customizable properties × 4 vision modes = 12 options
2. **Alert** - 5 customizable properties × 4 vision modes = 20 options
3. **Breadcrumb** - 4 customizable properties × 4 vision modes = 16 options
4. **Checkbox** - 4 customizable properties × 4 vision modes = 16 options
5. **Input** - 4 customizable properties × 4 vision modes = 16 options
6. **Pagination** - 3 customizable properties × 4 vision modes = 12 options
7. **Radiogroup** - 6 customizable properties × 4 vision modes = 24 options
8. **Select** - 6 customizable properties × 4 vision modes = 24 options
9. **Slider** - 5 customizable properties × 4 vision modes = 20 options
10. **Spinner** - 1 customizable property × 4 vision modes = 4 options
11. **Textarea** - 5 customizable properties × 4 vision modes = 20 options
12. **Toggle** - 5 customizable properties × 4 vision modes = 20 options
13. **Tooltip** - 3 customizable properties × 4 vision modes = 12 options

### 🏗️ Architecture Improvements

- **Removed `!important` flags**: All components now use clean CSS without importance declarations
- **Inline CSS variables**: Colors applied via React's `style` prop for perfect specificity control
- **Custom variant pattern**: Each component has a dedicated `custom` variant that doesn't apply predefined colors
- **Type-safe customization**: Full TypeScript interfaces for every component's `customColors` prop

### 📚 Documentation

- Added complete API reference for all 13 components' `customColors` prop
- Added usage examples showing custom color setup for each vision mode
- Created interactive demo application with 26 example configurations
- Documented the custom colors architecture pattern and best practices

### 🧪 Demo Application

- Added comprehensive demo in `src/demo/main.tsx`
- 26 total demo examples (2 per component showing normal + protanopia modes)
- Interactive controls for testing different component states
- Color vision mode switching support

### ✅ Quality Assurance

- All 13 components verified for TypeScript compilation
- All demo examples tested and working
- No breaking changes - existing code continues to work as before
- Full backward compatibility maintained

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