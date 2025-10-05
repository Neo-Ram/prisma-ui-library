# Select Component

Custom dropdown component with search functionality and accessibility features.

## Import

```tsx
import { Select } from 'neo-ram-prisma';
```

## Basic Usage

```tsx
<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico' }
  ]}
  variant="primary"
/>
```

## Props Reference

### Required Props
- `label` - Text label for the select
- `options` - Array of selectable options

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant of the select |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the select |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Font size override |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color vision accessibility mode |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Accessibility enhancement mode |
| `value` | `string` | - | Controlled selected value |
| `defaultValue` | `string` | - | Default uncontrolled selected value |
| `placeholder` | `string` | `'Select an option...'` | Placeholder text when no option is selected |
| `searchable` | `boolean` | `true` | Enable search functionality |
| `searchPlaceholder` | `string` | `'Search options...'` | Search input placeholder |
| `disabled` | `boolean` | `false` | Disable the select |
| `required` | `boolean` | `false` | Mark select as required |
| `error` | `boolean` | `false` | Show error state |
| `errorMessage` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text below select |
| `maxHeight` | `number` | `200` | Maximum height of dropdown (px) |
| `onChange` | `(value: string, option: SelectOption) => void` | - | Change event handler |
| `onFocus` | `(event: FocusEvent) => void` | - | Focus event handler |
| `onBlur` | `(event: FocusEvent) => void` | - | Blur event handler |
| `className` | `string` | - | Additional CSS classes |
| `name` | `string` | - | Form field name |

### Option Interface

```tsx
interface SelectOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
  group?: string;
}
```

## Examples

### Basic Select

```tsx
const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' }
];

<Select
  label="Country"
  options={countries}
  placeholder="Select your country..."
  variant="primary"
  required
/>
```

### With Descriptions

```tsx
const plans = [
  { 
    value: 'basic', 
    label: 'Basic Plan',
    description: 'Perfect for individuals - $9/month'
  },
  { 
    value: 'pro', 
    label: 'Pro Plan',
    description: 'Great for small teams - $29/month'
  },
  { 
    value: 'enterprise', 
    label: 'Enterprise Plan',
    description: 'Full features for large organizations - $99/month'
  }
];

<Select
  label="Subscription Plan"
  options={plans}
  variant="primary"
/>
```

### Grouped Options

```tsx
const locations = [
  { value: 'ny', label: 'New York', group: 'North America' },
  { value: 'la', label: 'Los Angeles', group: 'North America' },
  { value: 'toronto', label: 'Toronto', group: 'North America' },
  { value: 'london', label: 'London', group: 'Europe' },
  { value: 'paris', label: 'Paris', group: 'Europe' },
  { value: 'berlin', label: 'Berlin', group: 'Europe' },
  { value: 'tokyo', label: 'Tokyo', group: 'Asia' },
  { value: 'singapore', label: 'Singapore', group: 'Asia' }
];

<Select
  label="Office Location"
  options={locations}
  searchable
  variant="primary"
/>
```

### Controlled State

```tsx
function ControlledSelect() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' }
  ];

  const cities = {
    us: [
      { value: 'ny', label: 'New York' },
      { value: 'la', label: 'Los Angeles' },
      { value: 'chicago', label: 'Chicago' }
    ],
    ca: [
      { value: 'toronto', label: 'Toronto' },
      { value: 'vancouver', label: 'Vancouver' },
      { value: 'montreal', label: 'Montreal' }
    ],
    uk: [
      { value: 'london', label: 'London' },
      { value: 'manchester', label: 'Manchester' },
      { value: 'edinburgh', label: 'Edinburgh' }
    ]
  };

  return (
    <>
      <Select
        label="Country"
        options={countries}
        value={selectedCountry}
        onChange={(value) => {
          setSelectedCountry(value);
          setSelectedCity(''); // Reset city when country changes
        }}
        variant="primary"
      />
      
      {selectedCountry && (
        <Select
          label="City"
          options={cities[selectedCountry] || []}
          value={selectedCity}
          onChange={(value) => setSelectedCity(value)}
          variant="secondary"
          placeholder="Select a city..."
        />
      )}
    </>
  );
}
```

### Searchable Select

```tsx
const languages = [
  { value: 'js', label: 'JavaScript', description: 'Dynamic programming language' },
  { value: 'ts', label: 'TypeScript', description: 'JavaScript with static typing' },
  { value: 'py', label: 'Python', description: 'High-level programming language' },
  { value: 'java', label: 'Java', description: 'Object-oriented programming language' },
  { value: 'cpp', label: 'C++', description: 'Low-level systems programming' },
  { value: 'rust', label: 'Rust', description: 'Memory-safe systems programming' },
  { value: 'go', label: 'Go', description: 'Concurrent programming language' }
];

<Select
  label="Programming Language"
  options={languages}
  searchable
  searchPlaceholder="Type to search languages..."
  variant="success"
/>
```

### Error Handling

```tsx
function ValidatedSelect() {
  const [selectedValue, setSelectedValue] = useState('');
  const [showError, setShowError] = useState(false);

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const handleSubmit = () => {
    if (!selectedValue) {
      setShowError(true);
    }
  };

  return (
    <>
      <Select
        label="Required Selection"
        options={options}
        value={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
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
<Select
  label="Theme Selection"
  options={[
    { value: 'light', label: 'Light Theme' },
    { value: 'dark', label: 'Dark Theme' }
  ]}
  accessibility="high-contrast"
  variant="primary"
/>

// For users with deuteranopia
<Select
  label="Status Filter"
  options={[
    { value: 'active', label: 'Active Items' },
    { value: 'inactive', label: 'Inactive Items' }
  ]}
  colorVision="deuteranopia"
  variant="success"
/>

// Low vision mode
<Select
  label="Large Select Option"
  options={[
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ]}
  accessibility="low-vision"
  variant="primary"
/>
```

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Combobox role** with proper ARIA attributes
- ✅ **Expanded state** communication with `aria-expanded`
- ✅ **Active option** indicated with `aria-activedescendant`
- ✅ **Keyboard navigation** with arrow keys and typing

### Keyboard Navigation
- **Arrow Up/Down**: Navigate between options
- **Enter/Space**: Select current option or toggle dropdown
- **Escape**: Close dropdown
- **Type**: Search for options (when searchable)
- **Tab**: Move focus to/from select

### Screen Reader Support
- Announces as "Combobox" with current selection
- Option count and position announced during navigation
- Search functionality announced when enabled
- Group headers announced when navigating grouped options

### Focus Management
- Clear focus indicators on trigger and options
- Focus returns to trigger when dropdown closes
- Focus moves logically through search and options
- Trapped focus within dropdown when open

## TypeScript Interface

```tsx
interface SelectOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
  group?: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  maxHeight?: number;
  onChange?: (value: string, option: SelectOption) => void;
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
  className?: string;
  name?: string;
}
```

## Related Components

- [**Radiogroup**](./Radiogroup.md) - For single selection with visible options
- [**Input**](./Input.md) - For text input with autocomplete

---

[← Back to Documentation](../README.md)