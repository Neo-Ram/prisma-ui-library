# Input Component

Text input component with validation, error handling, and accessibility features.

## Import

```tsx
import { Input } from 'neo-ram-prisma';
```

## Basic Usage

```tsx
<Input 
  label="Email Address" 
  type="email" 
  variant="primary" 
  required 
/>
```

## Props Reference

### Required Props
- `label` - Text label for the input field

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant of the input |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the input |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Font size override |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color vision accessibility mode |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Accessibility enhancement mode |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url'` | `'text'` | HTML input type |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Controlled input value |
| `defaultValue` | `string` | - | Default uncontrolled value |
| `required` | `boolean` | `false` | Mark field as required |
| `disabled` | `boolean` | `false` | Disable the input |
| `error` | `boolean` | `false` | Show error state |
| `errorMessage` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text below input |
| `maxLength` | `number` | - | Maximum character length |
| `minLength` | `number` | - | Minimum character length |
| `pattern` | `string` | - | Regex validation pattern |
| `onChange` | `(event: ChangeEvent) => void` | - | Change event handler |
| `onFocus` | `(event: FocusEvent) => void` | - | Focus event handler |
| `onBlur` | `(event: FocusEvent) => void` | - | Blur event handler |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Basic Input Types

```tsx
// Text input
<Input label="Full Name" type="text" variant="primary" />

// Email input with validation
<Input 
  label="Email" 
  type="email" 
  required 
  variant="primary"
  helperText="We'll never share your email"
/>

// Password input
<Input 
  label="Password" 
  type="password" 
  required
  minLength={8}
  variant="primary"
/>

// Number input
<Input 
  label="Age" 
  type="number" 
  min={0}
  max={120}
  variant="primary"
/>
```

### Error Handling

```tsx
function ValidatedInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const validateEmail = (value: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setError(!isValid && value.length > 0);
  };

  return (
    <Input
      label="Email Address"
      type="email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
      }}
      error={error}
      errorMessage="Please enter a valid email address"
      variant={error ? "danger" : "primary"}
      required
    />
  );
}
```

### Accessibility Features

```tsx
// High contrast mode
<Input 
  label="Username" 
  accessibility="high-contrast"
  variant="primary"
/>

// For users with deuteranopia
<Input 
  label="Amount" 
  type="number" 
  colorVision="deuteranopia"
  variant="success"
/>

// Low vision mode
<Input 
  label="Description" 
  accessibility="low-vision"
  variant="primary"
/>
```

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Proper labeling** with `<label>` elements
- ✅ **Error association** with `aria-describedby`
- ✅ **Required field indication** with `aria-required`
- ✅ **Invalid state** communicated with `aria-invalid`

### Keyboard Navigation
- **Tab**: Move focus to/from input
- **Shift+Tab**: Move focus backward
- **All standard typing**: Input text
- **Ctrl+A**: Select all text

### Screen Reader Support
- Announces label, type, and current value
- Error messages announced immediately
- Required state properly communicated
- Helper text associated and announced

## TypeScript Interface

```tsx
interface InputProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
}
```

---

[← Back to Documentation](../README.md)