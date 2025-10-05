# Radiogroup Component

Radio button group component for single selection with descriptions and accessibility features.

## Import

```tsx
import { Radiogroup } from 'neo-ram-prisma';
```

## Basic Usage

```tsx
<Radiogroup
  label="Preferred Contact Method"
  name="contact"
  options={[
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'sms', label: 'SMS' }
  ]}
  variant="primary"
/>
```

## Props Reference

### Required Props
- `label` - Text label for the radio group
- `name` - Form field name for the group
- `options` - Array of radio button options

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant of the radio group |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the radio buttons |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Font size override |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color vision accessibility mode |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Accessibility enhancement mode |
| `value` | `string` | - | Controlled selected value |
| `defaultValue` | `string` | - | Default uncontrolled selected value |
| `disabled` | `boolean` | `false` | Disable the entire radio group |
| `required` | `boolean` | `false` | Mark radio group as required |
| `error` | `boolean` | `false` | Show error state |
| `errorMessage` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text for the group |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout orientation |
| `onChange` | `(value: string, event: ChangeEvent) => void` | - | Change event handler |
| `className` | `string` | - | Additional CSS classes |

### Option Interface

```tsx
interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}
```

## Examples

### Basic Radio Groups

```tsx
// Simple vertical radio group
<Radiogroup
  label="Size"
  name="size"
  options={[
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ]}
  variant="primary"
/>

// Horizontal layout
<Radiogroup
  label="Priority Level"
  name="priority"
  orientation="horizontal"
  options={[
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' }
  ]}
  variant="warning"
/>
```

### With Descriptions

```tsx
<Radiogroup
  label="Subscription Plan"
  name="plan"
  options={[
    { 
      value: 'basic', 
      label: 'Basic Plan',
      description: 'Essential features for individuals - $9/month'
    },
    { 
      value: 'pro', 
      label: 'Pro Plan',
      description: 'Advanced features for professionals - $29/month'
    },
    { 
      value: 'enterprise', 
      label: 'Enterprise Plan',
      description: 'Full suite for organizations - $99/month'
    }
  ]}
  variant="primary"
/>
```

### Controlled State

```tsx
function ControlledRadiogroup() {
  const [selectedValue, setSelectedValue] = useState('medium');

  const options = [
    { value: 'small', label: 'Small (S)' },
    { value: 'medium', label: 'Medium (M)' },
    { value: 'large', label: 'Large (L)' },
    { value: 'xlarge', label: 'Extra Large (XL)' }
  ];

  return (
    <Radiogroup
      label="T-Shirt Size"
      name="tshirt-size"
      options={options}
      value={selectedValue}
      onChange={(value) => setSelectedValue(value)}
      variant="primary"
      helperText={`Selected: ${selectedValue.toUpperCase()}`}
    />
  );
}
```

### With Disabled Options

```tsx
<Radiogroup
  label="Delivery Method"
  name="delivery"
  options={[
    { value: 'standard', label: 'Standard Delivery', description: '5-7 business days' },
    { value: 'express', label: 'Express Delivery', description: '2-3 business days' },
    { 
      value: 'overnight', 
      label: 'Overnight Delivery', 
      description: 'Next business day',
      disabled: true // Not available for this order
    }
  ]}
  variant="primary"
/>
```

### Error Handling

```tsx
function ValidatedRadiogroup() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (!selectedOption) {
      setShowError(true);
    }
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  return (
    <>
      <Radiogroup
        label="Required Selection"
        name="required-choice"
        options={options}
        value={selectedOption}
        onChange={(value) => {
          setSelectedOption(value);
          setShowError(false);
        }}
        error={showError}
        errorMessage="Please select an option to continue"
        variant={showError ? "danger" : "primary"}
        required
      />
      <Button onClick={handleSubmit} variant="primary">
        Continue
      </Button>
    </>
  );
}
```

### Accessibility Features

```tsx
// High contrast mode
<Radiogroup
  label="Theme Preference"
  name="theme"
  accessibility="high-contrast"
  options={[
    { value: 'light', label: 'Light Mode' },
    { value: 'dark', label: 'Dark Mode' }
  ]}
  variant="primary"
/>

// For users with deuteranopia
<Radiogroup
  label="Status"
  name="status"
  colorVision="deuteranopia"
  options={[
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' }
  ]}
  variant="success"
/>

// Low vision mode
<Radiogroup
  label="Large Options"
  name="large-options"
  accessibility="low-vision"
  options={[
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ]}
  variant="primary"
/>
```

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Fieldset and Legend** for proper group labeling
- ✅ **Radio button semantics** with proper ARIA attributes
- ✅ **Keyboard navigation** with arrow keys
- ✅ **Focus management** within the group

### Keyboard Navigation
- **Arrow Up/Down**: Navigate between options (vertical)
- **Arrow Left/Right**: Navigate between options (horizontal)
- **Space**: Select current option
- **Tab**: Move focus to/from the radio group

### Screen Reader Support
- Group announced as "Radio group: [label]"
- Each option announced with position and selection state
- Descriptions properly associated with options
- Required state communicated for the group

### Focus Management
- Only selected option is in tab order
- Arrow keys navigate within group
- Focus visible with clear indicators
- Logical reading order maintained

## TypeScript Interface

```tsx
interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

interface RadiogroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  orientation?: 'vertical' | 'horizontal';
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
```

## Related Components

- [**Checkbox**](./Checkbox.md) - For multiple selection options
- [**Select**](./Select.md) - For dropdown single selection

---

[← Back to Documentation](../README.md)