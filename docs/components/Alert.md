# Alert Component

Status message component with emojis, variants, and accessibility features.

## Import

```tsx
import { Alert } from 'neo-ram-prisma';
```

## Basic Usage

```tsx
<Alert variant="success">
  Your changes have been saved successfully!
</Alert>
```

## Props Reference

### Required Props
- `children` - Alert message content

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Alert type and color variant |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the alert |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Font size override |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color vision accessibility mode |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Accessibility enhancement mode |
| `showIcon` | `boolean` | `true` | Show status icon/emoji |
| `dismissible` | `boolean` | `false` | Allow alert to be dismissed |
| `onDismiss` | `() => void` | - | Callback when alert is dismissed |
| `title` | `string` | - | Optional alert title |
| `role` | `'alert' \| 'alertdialog' \| 'status'` | `'alert'` | ARIA role for screen readers |
| `autoHide` | `number` | - | Auto-hide after X milliseconds |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Basic Variants

```tsx
// Success alert
<Alert variant="success">
  ✅ Your profile has been updated successfully!
</Alert>

// Warning alert
<Alert variant="warning">
  ⚠️ Please review your information before submitting.
</Alert>

// Error alert
<Alert variant="danger">
  ❌ An error occurred while processing your request.
</Alert>

// Info alert
<Alert variant="primary">
  ℹ️ New features are available in your dashboard.
</Alert>

// Secondary alert
<Alert variant="secondary">
  📝 Don't forget to save your changes before leaving.
</Alert>
```

### With Titles

```tsx
<Alert variant="success" title="Success!">
  Your account has been created and a confirmation email has been sent.
</Alert>

<Alert variant="danger" title="Validation Error">
  Please correct the following errors:
  <ul>
    <li>Email address is required</li>
    <li>Password must be at least 8 characters</li>
  </ul>
</Alert>

<Alert variant="warning" title="Important Notice">
  This action cannot be undone. Please make sure you have backed up your data.
</Alert>
```

### Dismissible Alerts

```tsx
function DismissibleAlert() {
  const [showAlert, setShowAlert] = useState(true);

  if (!showAlert) return null;

  return (
    <Alert
      variant="primary"
      dismissible
      onDismiss={() => setShowAlert(false)}
      title="Welcome!"
    >
      Thanks for joining our platform. Explore the features to get started.
    </Alert>
  );
}
```

### Auto-Hide Alerts

```tsx
function ToastAlert({ message, variant, onHide }) {
  return (
    <Alert
      variant={variant}
      autoHide={5000} // Hide after 5 seconds
      onDismiss={onHide}
      dismissible
    >
      {message}
    </Alert>
  );
}

// Usage in notification system
function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, variant) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, variant }]);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="notification-container">
      {notifications.map(notification => (
        <ToastAlert
          key={notification.id}
          message={notification.message}
          variant={notification.variant}
          onHide={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
}
```

### Form Validation Alerts

```tsx
function FormWithValidation() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await submitForm(formData);
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitStatus === 'success' && (
        <Alert variant="success" dismissible onDismiss={() => setSubmitStatus(null)}>
          Account created successfully! Check your email for confirmation.
        </Alert>
      )}
      
      {submitStatus === 'error' && (
        <Alert variant="danger" dismissible onDismiss={() => setSubmitStatus(null)}>
          Failed to create account. Please try again later.
        </Alert>
      )}
      
      {Object.keys(errors).length > 0 && (
        <Alert variant="danger" title="Please fix the following errors:">
          <ul>
            {Object.values(errors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </Alert>
      )}
      
      {/* Form fields */}
    </form>
  );
}
```

### Different Sizes

```tsx
<Alert variant="primary" size="xs">Extra small alert message</Alert>
<Alert variant="secondary" size="sm">Small alert message</Alert>
<Alert variant="success" size="md">Medium alert message</Alert>
<Alert variant="warning" size="lg">Large alert message</Alert>
<Alert variant="danger" size="xl">Extra large alert message</Alert>
```

### System Status Alerts

```tsx
function SystemStatusAlerts() {
  const [systemStatus, setSystemStatus] = useState('operational');

  const statusAlerts = {
    operational: {
      variant: 'success',
      title: 'All Systems Operational',
      message: 'All services are running normally.',
      icon: '✅'
    },
    degraded: {
      variant: 'warning', 
      title: 'Degraded Performance',
      message: 'Some services may be experiencing slower response times.',
      icon: '⚠️'
    },
    maintenance: {
      variant: 'primary',
      title: 'Scheduled Maintenance',
      message: 'We are performing scheduled maintenance. Service will resume shortly.',
      icon: '🔧'
    },
    outage: {
      variant: 'danger',
      title: 'Service Outage',
      message: 'We are experiencing technical difficulties. Our team is working to resolve this.',
      icon: '🚨'
    }
  };

  const currentAlert = statusAlerts[systemStatus];

  return (
    <Alert 
      variant={currentAlert.variant}
      title={currentAlert.title}
      showIcon={false}
    >
      {currentAlert.icon} {currentAlert.message}
    </Alert>
  );
}
```

### Accessibility Features

```tsx
// High contrast mode
<Alert 
  variant="warning" 
  accessibility="high-contrast"
  title="High Contrast Alert"
>
  This alert uses enhanced contrast for better visibility.
</Alert>

// For users with protanopia (red-blind)
<Alert 
  variant="danger" 
  colorVision="protanopia"
  title="Error (Color-blind Friendly)"
>
  This error message uses colors safe for red-blind users.
</Alert>

// Low vision mode
<Alert 
  variant="success" 
  accessibility="low-vision"
  title="Large Alert"
>
  This alert has larger text and elements for better visibility.
</Alert>

// Different ARIA roles for different use cases
<Alert role="status" variant="primary">
  Non-critical status update (announced politely)
</Alert>

<Alert role="alert" variant="danger">
  Critical error (announced immediately)
</Alert>
```

### Custom Alert with Actions

```tsx
function ActionAlert({ onConfirm, onCancel }) {
  return (
    <Alert variant="warning" title="Confirm Action">
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
      <div className="alert-actions">
        <Button 
          variant="danger" 
          size="sm" 
          onClick={onConfirm}
        >
          Delete
        </Button>
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </Alert>
  );
}
```

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **ARIA roles** (`alert`, `alertdialog`, `status`) for proper announcement
- ✅ **Color contrast** meets 4.5:1 ratio for all variants
- ✅ **Focus management** for dismissible alerts
- ✅ **Semantic structure** with proper headings and content

### Screen Reader Support
- **role="alert"**: Announced immediately (for critical messages)
- **role="status"**: Announced politely (for status updates)
- **role="alertdialog"**: For alerts requiring user interaction
- Title and content properly structured for screen readers

### Keyboard Navigation
- **Tab**: Focus dismissible close button
- **Enter/Space**: Activate close button
- **Escape**: Close dismissible alert (optional)

### Visual Indicators
- **Color coding** for different alert types
- **Icons/emojis** for visual context (can be disabled)
- **Clear typography** hierarchy with titles and content
- **Consistent spacing** and layout patterns

## TypeScript Interface

```tsx
interface AlertProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  showIcon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  title?: string;
  role?: 'alert' | 'alertdialog' | 'status';
  autoHide?: number;
  className?: string;
}
```

## CSS Customization

```css
:root {
  /* Alert variants */
  --alert-success-bg: #d4edda;
  --alert-success-border: #c3e6cb;
  --alert-success-color: #155724;
  
  --alert-warning-bg: #fff3cd;
  --alert-warning-border: #ffeaa7;
  --alert-warning-color: #856404;
  
  --alert-danger-bg: #f8d7da;
  --alert-danger-border: #f5c6cb;
  --alert-danger-color: #721c24;
  
  /* Layout */
  --alert-padding: 1rem;
  --alert-border-radius: 0.375rem;
  --alert-border-width: 1px;
  --alert-margin-bottom: 1rem;
}
```

## Alert Patterns

### Toast Notifications
- Use `autoHide` for temporary notifications
- Position fixed or absolute for overlay display
- Stack multiple alerts vertically

### Inline Form Validation
- Use `role="alert"` for immediate error announcement
- Position near related form fields
- Clear previous alerts when new validation occurs

### System Messages
- Use `role="status"` for non-critical updates
- Consider auto-hide for temporary system status
- Use consistent placement across the application

## Related Components

- [**Button**](./Button.md) - For alert action buttons
- [**Tooltip**](./Tooltip.md) - For contextual help messages

---

[← Back to Documentation](../README.md)