# Spinner Component

Loading spinner component with 5 different variants and accessibility features.

## Import

```tsx
import { Spinner } from 'neo-ram-prisma';
```

## Basic Usage

```tsx
<Spinner variant="primary" />
```

## Props Reference

### Required Props
None - all props are optional with sensible defaults.

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant of the spinner |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the spinner |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Font size for label text |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color vision accessibility mode |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Accessibility enhancement mode |
| `spinnerType` | `'circular' \| 'dots' \| 'bars' \| 'pulse' \| 'ring'` | `'circular'` | Type of spinner animation |
| `label` | `string` | - | Accessible label for screen readers |
| `showLabel` | `boolean` | `false` | Display label text visually |
| `speed` | `'slow' \| 'normal' \| 'fast'` | `'normal'` | Animation speed |
| `center` | `boolean` | `false` | Center the spinner in its container |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Basic Spinner Types

```tsx
// Circular spinner (default)
<Spinner variant="primary" spinnerType="circular" />

// Dots spinner
<Spinner variant="secondary" spinnerType="dots" />

// Bars spinner
<Spinner variant="success" spinnerType="bars" />

// Pulse spinner
<Spinner variant="warning" spinnerType="pulse" />

// Ring spinner
<Spinner variant="danger" spinnerType="ring" />
```

### Different Sizes

```tsx
<Spinner size="xs" variant="primary" />
<Spinner size="sm" variant="secondary" />
<Spinner size="md" variant="success" />
<Spinner size="lg" variant="warning" />
<Spinner size="xl" variant="danger" />
```

### With Labels

```tsx
// Visible labels
<Spinner 
  variant="primary" 
  label="Loading content..." 
  showLabel 
/>

<Spinner 
  variant="success" 
  label="Processing your request..." 
  showLabel 
  spinnerType="dots"
/>

// Screen reader only labels
<Spinner 
  variant="primary" 
  label="Loading data from server"
  showLabel={false} // Label only for screen readers
/>
```

### Loading States in Components

```tsx
// Button with loading spinner
function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await saveData();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleClick} 
      disabled={isLoading}
      variant="primary"
    >
      {isLoading ? (
        <>
          <Spinner 
            size="sm" 
            variant="primary" 
            label="Saving..."
            spinnerType="circular"
          />
          <span>Saving...</span>
        </>
      ) : (
        'Save Changes'
      )}
    </Button>
  );
}

// Data loading state
function DataTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then(result => {
      setData(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Spinner 
          variant="primary" 
          size="lg"
          label="Loading table data..."
          showLabel
          center
          spinnerType="dots"
        />
      </div>
    );
  }

  return (
    <table>
      {/* Table content */}
    </table>
  );
}
```

### Page-Level Loading

```tsx
function PageSpinner({ message = "Loading..." }) {
  return (
    <div className="page-spinner-overlay">
      <div className="page-spinner-content">
        <Spinner 
          variant="primary" 
          size="xl"
          label={message}
          showLabel
          spinnerType="ring"
          center
        />
      </div>
    </div>
  );
}

// Usage in app
function App() {
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    initializeApp().then(() => {
      setInitializing(false);
    });
  }, []);

  if (initializing) {
    return <PageSpinner message="Initializing application..." />;
  }

  return (
    <div className="app">
      {/* App content */}
    </div>
  );
}
```

### Form Submission Loading

```tsx
function ContactForm() {
  const [formData, setFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      await submitForm(formData);
      setSubmitted(true);
    } catch (error) {
      // Handle error
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Alert variant="success">
        ✅ Thank you! Your message has been sent successfully.
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      
      <Button 
        type="submit" 
        variant="primary" 
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Spinner 
              size="sm" 
              variant="primary"
              label="Sending message..."
              spinnerType="circular"
            />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
      
      {submitting && (
        <div className="form-loading-overlay">
          <Spinner 
            variant="primary" 
            size="lg"
            label="Processing your submission..."
            showLabel
            center
            spinnerType="pulse"
          />
        </div>
      )}
    </form>
  );
}
```

### Different Animation Speeds

```tsx
<Spinner speed="slow" variant="primary" label="Slow loading..." />
<Spinner speed="normal" variant="secondary" label="Normal loading..." />
<Spinner speed="fast" variant="success" label="Fast loading..." />
```

### Conditional Loading States

```tsx
function SmartLoader({ 
  loading, 
  error, 
  children, 
  loadingMessage = "Loading...",
  errorMessage = "Something went wrong" 
}) {
  if (error) {
    return (
      <Alert variant="danger">
        {errorMessage}
      </Alert>
    );
  }

  if (loading) {
    return (
      <div className="content-loader">
        <Spinner 
          variant="primary"
          size="md"
          label={loadingMessage}
          showLabel
          center
          spinnerType="dots"
        />
      </div>
    );
  }

  return children;
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useUser(userId);

  return (
    <SmartLoader 
      loading={loading}
      error={error}
      loadingMessage="Loading user profile..."
      errorMessage="Failed to load user profile"
    >
      <div className="user-profile">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    </SmartLoader>
  );
}
```

### Accessibility Features

```tsx
// High contrast mode
<Spinner 
  variant="primary" 
  accessibility="high-contrast"
  label="Loading with enhanced visibility"
  showLabel
/>

// For users with deuteranopia
<Spinner 
  variant="success" 
  colorVision="deuteranopia"
  label="Processing success state"
  spinnerType="pulse"
/>

// Low vision mode
<Spinner 
  variant="primary" 
  accessibility="low-vision"
  size="xl"
  label="Large spinner for low vision users"
  showLabel
/>

// Reduced motion consideration
function MotionSafeSpinner(props) {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  
  return (
    <Spinner 
      {...props}
      speed={prefersReducedMotion ? 'slow' : props.speed}
      spinnerType={prefersReducedMotion ? 'pulse' : props.spinnerType}
    />
  );
}
```

### Inline vs Block Spinners

```tsx
// Inline spinner (for buttons, inline text)
<p>
  Processing your request 
  <Spinner 
    size="xs" 
    variant="primary" 
    label="Processing..."
    spinnerType="dots"
  />
</p>

// Block spinner (for content areas)
<div className="content-section">
  <Spinner 
    variant="primary"
    size="lg" 
    label="Loading section content..."
    showLabel
    center
    spinnerType="circular"
  />
</div>
```

### Custom Spinner Combinations

```tsx
function StatusSpinner({ status, message }) {
  const spinnerConfig = {
    loading: { variant: 'primary', spinnerType: 'circular' },
    processing: { variant: 'warning', spinnerType: 'bars' },
    uploading: { variant: 'success', spinnerType: 'ring' },
    error: { variant: 'danger', spinnerType: 'pulse' }
  };

  const config = spinnerConfig[status] || spinnerConfig.loading;

  return (
    <div className="status-spinner">
      <Spinner 
        {...config}
        size="md"
        label={message}
        showLabel
        center
      />
    </div>
  );
}

// Usage
<StatusSpinner status="uploading" message="Uploading files..." />
<StatusSpinner status="processing" message="Processing data..." />
```

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **ARIA attributes** (`role="status"`, `aria-label`)
- ✅ **Screen reader support** with meaningful labels
- ✅ **Reduced motion** consideration for users with vestibular disorders
- ✅ **Focus management** doesn't trap focus during loading

### Screen Reader Support
- Announces loading state with `role="status"`
- Custom labels provide context about what's loading
- Live region updates when loading state changes
- Proper semantic structure for assistive technology

### Reduced Motion Support
- Respects `prefers-reduced-motion` media query
- Offers static or slower animations for sensitive users
- Pulse animation as fallback for motion-sensitive users
- Configurable animation speeds

### Visual Accessibility
- High contrast variants for better visibility
- Color-blind friendly variants
- Size options for different visual needs
- Clear visual indication of loading state

## Spinner Types

### 1. Circular (Default)
- Classic rotating circle
- Smooth, continuous animation
- Works well in all contexts

### 2. Dots
- Three bouncing dots
- Subtle, playful animation
- Good for inline use

### 3. Bars
- Animated bars of varying heights
- Modern, technical appearance
- Suitable for data processing

### 4. Pulse
- Pulsing circle animation
- Gentle, accessible option
- Best for reduced motion preferences

### 5. Ring
- Rotating ring with gap
- Clean, minimal appearance
- Good for larger sizes

## TypeScript Interface

```tsx
interface SpinnerProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  spinnerType?: 'circular' | 'dots' | 'bars' | 'pulse' | 'ring';
  label?: string;
  showLabel?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
  center?: boolean;
  className?: string;
}
```

## CSS Customization

```css
:root {
  /* Animation speeds */
  --spinner-speed-slow: 2s;
  --spinner-speed-normal: 1s;
  --spinner-speed-fast: 0.5s;
  
  /* Sizes */
  --spinner-size-xs: 16px;
  --spinner-size-sm: 20px;
  --spinner-size-md: 24px;
  --spinner-size-lg: 32px;
  --spinner-size-xl: 40px;
  
  /* Colors */
  --spinner-primary: #007bff;
  --spinner-secondary: #6c757d;
  --spinner-success: #28a745;
  --spinner-warning: #ffc107;
  --spinner-danger: #dc3545;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation-duration: var(--spinner-speed-slow);
  }
}
```

## Related Components

- [**Button**](./Button.md) - Often contains loading spinners
- [**Alert**](./Alert.md) - For displaying loading messages

---

[← Back to Documentation](../README.md)