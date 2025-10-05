# Button Component

Interactive button component with loading states, accessibility features, and consistent theming.

## Import

```tsx
import { Button } from 'neo-ram-prisma';
```

## Basic Usage

```tsx
<Button variant="primary" size="md">
  Click me
</Button>
```

## Props Reference

### Required Props
None - all props are optional with sensible defaults.

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant of the button |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the button |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Font size override |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color vision accessibility mode |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Accessibility enhancement mode |
| `isLoading` | `boolean` | `false` | Shows loading state with spinner |
| `loadingText` | `string` | `'Loading...'` | Text to display when loading |
| `disabled` | `boolean` | `false` | Disables the button |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `onClick` | `(event: MouseEvent) => void` | - | Click event handler |
| `onFocus` | `(event: FocusEvent) => void` | - | Focus event handler |
| `onBlur` | `(event: FocusEvent) => void` | - | Blur event handler |
| `children` | `ReactNode` | - | Button content |
| `className` | `string` | - | Additional CSS classes |
| `ariaLabel` | `string` | - | Accessible label override |

## Examples

### Basic Variants

```tsx
// Primary button (default)
<Button variant="primary">Primary Action</Button>

// Secondary button  
<Button variant="secondary">Secondary Action</Button>

// Success button
<Button variant="success">Save Changes</Button>

// Warning button
<Button variant="warning">Proceed with Caution</Button>

// Danger button
<Button variant="danger">Delete Item</Button>
```

### Different Sizes

```tsx
<Button size="xs" variant="primary">Extra Small</Button>
<Button size="sm" variant="primary">Small</Button>
<Button size="md" variant="primary">Medium</Button>
<Button size="lg" variant="primary">Large</Button>
<Button size="xl" variant="primary">Extra Large</Button>
```

### Loading States

```tsx
// Basic loading
<Button isLoading variant="primary">
  Save Document
</Button>

// Custom loading text
<Button 
  isLoading 
  loadingText="Uploading..." 
  variant="success"
>
  Upload File
</Button>
```

### Accessibility Features

```tsx
// For users with protanopia (red-blind)
<Button 
  variant="danger" 
  colorVision="protanopia"
>
  Delete (Colorblind Friendly)
</Button>

// High contrast mode
<Button 
  variant="primary" 
  accessibility="high-contrast"
>
  High Contrast Button
</Button>

// Low vision mode (larger size)
<Button 
  variant="primary" 
  accessibility="low-vision"
>
  Large Button for Low Vision
</Button>
```

### Event Handling

```tsx
function InteractiveButton() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const handleFocus = () => {
    console.log('Button focused');
  };

  return (
    <Button
      variant="primary"
      onClick={handleClick}
      onFocus={handleFocus}
    >
      Interactive Button
    </Button>
  );
}
```

### Form Usage

```tsx
function FormExample() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <form>
      {/* Form fields here */}
      
      <Button
        type="submit"
        variant="primary"
        isLoading={isSubmitting}
        loadingText="Submitting..."
        onClick={handleSubmit}
      >
        Submit Form
      </Button>
    </form>
  );
}
```

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Color Contrast**: All variants meet minimum 4.5:1 contrast ratio
- ✅ **Focus Indicators**: Visible focus rings with 3px outline
- ✅ **Touch Targets**: Minimum 44px touch area for mobile
- ✅ **Screen Reader**: Proper ARIA labels and button semantics

### Keyboard Navigation
- **Space/Enter**: Activates the button
- **Tab**: Moves focus to/from the button
- **Escape**: No default behavior (can be customized)

### Screen Reader Support
- Announces button role and current state
- Loading state communicated with `aria-live="polite"`
- Disabled state properly announced
- Custom `ariaLabel` for additional context

### Color Vision Support
Each variant has specially adjusted colors for different types of color blindness:

**Protanopia (Red-blind)**:
- Danger buttons use high-contrast alternatives
- Success buttons use yellow/gold tones
- Primary buttons use enhanced blues

**Deuteranopia (Green-blind)**:
- Success buttons use bright lime colors
- Warning buttons use enhanced yellows
- Maintains visual hierarchy

**Tritanopia (Blue-blind)**:
- Primary buttons use adjusted blues
- Maintains brand consistency
- Enhanced contrast where needed

## CSS Customization

The Button component uses CSS custom properties that can be overridden:

```css
:root {
  /* Primary variant colors */
  --button-primary-bg: #007bff;
  --button-primary-hover: #0056b3;
  --button-primary-color: #ffffff;
  
  /* Size variables */
  --button-padding-md: 8px 16px;
  --button-font-size-md: 14px;
  --button-border-radius: 6px;
  
  /* Accessibility */
  --button-focus-ring: 0 0 0 3px rgba(11,92,255,.25);
  --button-min-height: 44px; /* Touch target */
}
```

## TypeScript Interface

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}
```

## Related Components

- [**Input**](./Input.md) - For form inputs that pair with buttons
- [**Alert**](./Alert.md) - For displaying action results
- [**Spinner**](./Spinner.md) - Standalone loading indicators

---

[← Back to Documentation](../README.md)