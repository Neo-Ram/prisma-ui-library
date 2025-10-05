# Textarea Component

Multi-line text input component with resize options and accessibility features.

## Import

```tsx
import { Textarea } from 'neo-ram-prisma';
```

## Basic Usage

```tsx
<Textarea 
  label="Description" 
  placeholder="Enter your description here..."
  variant="primary" 
/>
```

## Props Reference

### Required Props
- `label` - Text label for the textarea

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant of the textarea |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the textarea |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Font size override |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color vision accessibility mode |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Accessibility enhancement mode |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Controlled textarea value |
| `defaultValue` | `string` | - | Default uncontrolled value |
| `rows` | `number` | `4` | Number of visible text lines |
| `minRows` | `number` | - | Minimum number of rows (auto-resize) |
| `maxRows` | `number` | - | Maximum number of rows (auto-resize) |
| `resize` | `'none' \| 'vertical' \| 'horizontal' \| 'both'` | `'vertical'` | Resize behavior |
| `required` | `boolean` | `false` | Mark field as required |
| `disabled` | `boolean` | `false` | Disable the textarea |
| `error` | `boolean` | `false` | Show error state |
| `errorMessage` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text below textarea |
| `maxLength` | `number` | - | Maximum character length |
| `showCharCount` | `boolean` | `false` | Display character count |
| `onChange` | `(event: ChangeEvent) => void` | - | Change event handler |
| `onFocus` | `(event: FocusEvent) => void` | - | Focus event handler |
| `onBlur` | `(event: FocusEvent) => void` | - | Blur event handler |
| `className` | `string` | - | Additional CSS classes |
| `name` | `string` | - | Form field name |

## Examples

### Basic Usage

```tsx
// Simple textarea
<Textarea 
  label="Comments" 
  placeholder="Enter your comments..."
  variant="primary"
/>

// With helper text
<Textarea 
  label="Feedback"
  helperText="Please provide detailed feedback to help us improve"
  rows={6}
  variant="primary"
/>

// Required field
<Textarea 
  label="Description"
  required
  placeholder="This field is required..."
  variant="primary"
/>
```

### Auto-Resizing Textarea

```tsx
<Textarea
  label="Auto-resizing Message"
  placeholder="Start typing and watch this expand..."
  minRows={3}
  maxRows={10}
  resize="none"
  variant="primary"
  helperText="This textarea will grow as you type"
/>
```

### With Character Count

```tsx
function CharacterCountTextarea() {
  const [text, setText] = useState('');
  const maxLength = 280;

  return (
    <Textarea
      label="Tweet Message"
      value={text}
      onChange={(e) => setText(e.target.value)}
      maxLength={maxLength}
      showCharCount
      placeholder="What's happening?"
      variant={text.length > maxLength * 0.8 ? "warning" : "primary"}
      helperText={`${text.length}/${maxLength} characters used`}
    />
  );
}
```

### Controlled State with Validation

```tsx
function ValidatedTextarea() {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const validateContent = (value: string) => {
    if (value.length < 10) {
      setError('Content must be at least 10 characters long');
      return false;
    }
    if (value.length > 500) {
      setError('Content must not exceed 500 characters');
      return false;
    }
    setError('');
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setContent(newValue);
    validateContent(newValue);
  };

  return (
    <Textarea
      label="Article Content"
      value={content}
      onChange={handleChange}
      error={!!error}
      errorMessage={error}
      variant={error ? "danger" : content.length >= 10 ? "success" : "primary"}
      maxLength={500}
      showCharCount
      rows={8}
      placeholder="Write your article content here..."
    />
  );
}
```

### Different Sizes and Resize Options

```tsx
// Different sizes
<Textarea label="Extra Small" size="xs" rows={2} variant="primary" />
<Textarea label="Small" size="sm" rows={3} variant="secondary" />
<Textarea label="Medium" size="md" rows={4} variant="success" />
<Textarea label="Large" size="lg" rows={5} variant="warning" />
<Textarea label="Extra Large" size="xl" rows={6} variant="danger" />

// Resize options
<Textarea label="No Resize" resize="none" variant="primary" />
<Textarea label="Vertical Resize" resize="vertical" variant="secondary" />
<Textarea label="Horizontal Resize" resize="horizontal" variant="success" />
<Textarea label="Both Directions" resize="both" variant="warning" />
```

### Form Integration

```tsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleTextareaChange = (field: string) => 
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <form>
      <Input 
        label="Name" 
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        required
      />
      
      <Input 
        label="Email" 
        type="email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        required
      />
      
      <Input 
        label="Subject" 
        value={formData.subject}
        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
        required
      />
      
      <Textarea
        label="Message"
        value={formData.message}
        onChange={handleTextareaChange('message')}
        placeholder="Please describe your inquiry in detail..."
        required
        rows={6}
        maxLength={1000}
        showCharCount
        variant="primary"
        helperText="Provide as much detail as possible to help us assist you"
      />
      
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
}
```

### Accessibility Features

```tsx
// High contrast mode
<Textarea 
  label="High contrast input" 
  accessibility="high-contrast"
  placeholder="Enhanced visibility mode"
  variant="primary"
/>

// For users with protanopia
<Textarea 
  label="Important notes" 
  colorVision="protanopia"
  variant="danger"
  placeholder="Critical information input"
/>

// Low vision mode
<Textarea 
  label="Large text area" 
  accessibility="low-vision"
  rows={4}
  variant="primary"
/>
```

### Code Editor Style

```tsx
function CodeInput() {
  const [code, setCode] = useState('');

  return (
    <Textarea
      label="CSS Code"
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder={`.example {
  color: #333;
  font-size: 16px;
}`}
      rows={10}
      resize="both"
      variant="secondary"
      className="font-mono"
      maxLength={5000}
      showCharCount
      helperText="Enter your CSS code here"
    />
  );
}
```

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Proper labeling** with `<label>` elements
- ✅ **Error association** with `aria-describedby`
- ✅ **Required field indication** with `aria-required`
- ✅ **Invalid state** communicated with `aria-invalid`

### Keyboard Navigation
- **Tab**: Move focus to/from textarea
- **Shift+Tab**: Move focus backward
- **All text editing keys**: Standard textarea behavior
- **Ctrl+A**: Select all text

### Screen Reader Support
- Announces label, current content, and character count
- Error messages announced immediately when they appear
- Required state properly communicated
- Helper text associated and announced

### Auto-resize Behavior
- Maintains cursor position during resize
- Announces size changes to screen readers
- Respects min/max row constraints
- Smooth transitions for better UX

## TypeScript Interface

```tsx
interface TextareaProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  rows?: number;
  minRows?: number;
  maxRows?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  maxLength?: number;
  showCharCount?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  className?: string;
  name?: string;
}
```

## CSS Customization

```css
:root {
  /* Textarea specific styles */
  --textarea-min-height: 80px;
  --textarea-line-height: 1.5;
  --textarea-resize-handle: auto;
  
  /* Character count colors */
  --char-count-normal: #6c757d;
  --char-count-warning: #ffc107;
  --char-count-danger: #dc3545;
}
```

## Related Components

- [**Input**](./Input.md) - For single-line text input
- [**Button**](./Button.md) - For form submission

---

[← Back to Documentation](../README.md)