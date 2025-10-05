# Checkbox Component

Checkbox input component with indeterminate state support and accessibility features.

## Import

```tsx
import { Checkbox } from 'neo-ram-prisma';
```

## Basic Usage

```tsx
<Checkbox 
  label="Subscribe to newsletter" 
  variant="primary" 
/>
```

## Props Reference

### Required Props
- `label` - Text label for the checkbox

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant of the checkbox |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the checkbox |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Font size override |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color vision accessibility mode |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Accessibility enhancement mode |
| `checked` | `boolean` | `false` | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Default uncontrolled checked state |
| `indeterminate` | `boolean` | `false` | Show indeterminate state (partial selection) |
| `disabled` | `boolean` | `false` | Disable the checkbox |
| `required` | `boolean` | `false` | Mark checkbox as required |
| `error` | `boolean` | `false` | Show error state |
| `errorMessage` | `string` | - | Error message to display |
| `description` | `string` | - | Additional description text |
| `onChange` | `(checked: boolean, event: ChangeEvent) => void` | - | Change event handler |
| `onFocus` | `(event: FocusEvent) => void` | - | Focus event handler |
| `onBlur` | `(event: FocusEvent) => void` | - | Blur event handler |
| `className` | `string` | - | Additional CSS classes |
| `name` | `string` | - | Form field name |
| `value` | `string` | - | Form field value |

## Examples

### Basic Usage

```tsx
// Simple checkbox
<Checkbox label="Accept terms and conditions" variant="primary" />

// With description
<Checkbox 
  label="Marketing emails"
  description="Receive updates about new features and promotions"
  variant="primary"
/>

// Required checkbox
<Checkbox 
  label="I agree to the privacy policy"
  required
  variant="primary"
/>
```

### Controlled State

```tsx
function ControlledCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Checkbox
      label="Controlled checkbox"
      checked={isChecked}
      onChange={(checked) => setIsChecked(checked)}
      variant="primary"
    />
  );
}
```

### Indeterminate State

```tsx
function ParentChildCheckboxes() {
  const [items, setItems] = useState([
    { id: 1, label: 'Item 1', checked: false },
    { id: 2, label: 'Item 2', checked: true },
    { id: 3, label: 'Item 3', checked: false }
  ]);

  const allChecked = items.every(item => item.checked);
  const someChecked = items.some(item => item.checked);
  const indeterminate = someChecked && !allChecked;

  const handleSelectAll = (checked: boolean) => {
    setItems(items.map(item => ({ ...item, checked })));
  };

  return (
    <>
      <Checkbox
        label="Select All"
        checked={allChecked}
        indeterminate={indeterminate}
        onChange={handleSelectAll}
        variant="primary"
      />
      
      {items.map(item => (
        <Checkbox
          key={item.id}
          label={item.label}
          checked={item.checked}
          onChange={(checked) => 
            setItems(items.map(i => 
              i.id === item.id ? { ...i, checked } : i
            ))
          }
          variant="secondary"
        />
      ))}
    </>
  );
}
```

### Error Handling

```tsx
function ValidatedCheckbox() {
  const [accepted, setAccepted] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (!accepted) {
      setShowError(true);
    }
  };

  return (
    <>
      <Checkbox
        label="I accept the terms and conditions"
        checked={accepted}
        onChange={(checked) => {
          setAccepted(checked);
          setShowError(false);
        }}
        error={showError}
        errorMessage="You must accept the terms to continue"
        variant={showError ? "danger" : "primary"}
        required
      />
      <Button onClick={handleSubmit} variant="primary">
        Submit
      </Button>
    </>
  );
}
```

### Accessibility Features

```tsx
// High contrast mode
<Checkbox 
  label="Enable notifications" 
  accessibility="high-contrast"
  variant="primary"
/>

// For users with protanopia
<Checkbox 
  label="Important setting" 
  colorVision="protanopia"
  variant="danger"
/>

// Low vision mode
<Checkbox 
  label="Large checkbox option" 
  accessibility="low-vision"
  variant="primary"
/>
```

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Proper labeling** with `<label>` elements
- ✅ **Keyboard navigation** with space key activation
- ✅ **Focus indicators** with visible focus rings
- ✅ **State communication** with `aria-checked` and `aria-describedby`

### Keyboard Navigation
- **Space**: Toggle checkbox state
- **Tab**: Move focus to/from checkbox
- **Shift+Tab**: Move focus backward

### Screen Reader Support
- Announces checkbox role and current state
- Indeterminate state properly communicated
- Error messages associated and announced
- Description text linked with `aria-describedby`

### States Announced
- **Checked**: "Checked checkbox"
- **Unchecked**: "Unchecked checkbox"  
- **Indeterminate**: "Mixed state checkbox"
- **Required**: "Required checkbox"

## TypeScript Interface

```tsx
interface CheckboxProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  description?: string;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  value?: string;
}
```

## Related Components

- [**Radiogroup**](./Radiogroup.md) - For single selection from multiple options
- [**Toggle**](./Toggle.md) - For boolean switch controls

---

[← Back to Documentation](../README.md)