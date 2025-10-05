# Toggle Component

Switch toggle component for boolean values with accessibility features.

## Import

```tsx
import { Toggle } from 'neo-ram-prisma';
```

## Basic Usage

```tsx
<Toggle 
  label="Enable notifications" 
  variant="primary" 
/>
```

## Props Reference

### Required Props
- `label` - Text label for the toggle

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant of the toggle |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the toggle |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Font size override |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color vision accessibility mode |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Accessibility enhancement mode |
| `checked` | `boolean` | `false` | Controlled toggle state |
| `defaultChecked` | `boolean` | `false` | Default uncontrolled toggle state |
| `disabled` | `boolean` | `false` | Disable the toggle |
| `description` | `string` | - | Additional description text |
| `onChange` | `(checked: boolean, event: ChangeEvent) => void` | - | Change event handler |
| `onFocus` | `(event: FocusEvent) => void` | - | Focus event handler |
| `onBlur` | `(event: FocusEvent) => void` | - | Blur event handler |
| `className` | `string` | - | Additional CSS classes |
| `name` | `string` | - | Form field name |

## Examples

### Basic Usage

```tsx
// Simple toggle
<Toggle label="Dark mode" variant="primary" />

// With description
<Toggle 
  label="Email notifications"
  description="Receive updates about your account activity"
  variant="primary"
/>

// Different variants
<Toggle label="Auto-save" variant="success" />
<Toggle label="Debug mode" variant="warning" />
<Toggle label="Delete on exit" variant="danger" />
```

### Controlled State

```tsx
function ControlledToggle() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <Toggle
        label="Feature enabled"
        checked={isEnabled}
        onChange={(checked) => setIsEnabled(checked)}
        variant="primary"
        description={isEnabled ? "Feature is currently active" : "Feature is disabled"}
      />
      
      {isEnabled && (
        <div>Feature-specific content here...</div>
      )}
    </>
  );
}
```

### Settings Panel Example

```tsx
function SettingsPanel() {
  const [settings, setSettings] = useState({
    notifications: true,
    autoSave: false,
    darkMode: false,
    analytics: true
  });

  const updateSetting = (key: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="settings-panel">
      <h3>User Preferences</h3>
      
      <Toggle
        label="Push Notifications"
        description="Receive notifications on your device"
        checked={settings.notifications}
        onChange={(checked) => updateSetting('notifications', checked)}
        variant="primary"
      />
      
      <Toggle
        label="Auto-save Documents"
        description="Automatically save changes every 30 seconds"
        checked={settings.autoSave}
        onChange={(checked) => updateSetting('autoSave', checked)}
        variant="success"
      />
      
      <Toggle
        label="Dark Theme"
        description="Use dark colors throughout the interface"
        checked={settings.darkMode}
        onChange={(checked) => updateSetting('darkMode', checked)}
        variant="secondary"
      />
      
      <Toggle
        label="Analytics"
        description="Help improve our service by sharing usage data"
        checked={settings.analytics}
        onChange={(checked) => updateSetting('analytics', checked)}
        variant="warning"
      />
    </div>
  );
}
```

### Different Sizes

```tsx
<Toggle label="Extra Small" size="xs" variant="primary" />
<Toggle label="Small" size="sm" variant="primary" />
<Toggle label="Medium" size="md" variant="primary" />
<Toggle label="Large" size="lg" variant="primary" />
<Toggle label="Extra Large" size="xl" variant="primary" />
```

### Accessibility Features

```tsx
// High contrast mode
<Toggle 
  label="High contrast setting" 
  accessibility="high-contrast"
  variant="primary"
/>

// For users with protanopia
<Toggle 
  label="Critical feature" 
  colorVision="protanopia"
  variant="danger"
  description="This will permanently delete data"
/>

// Low vision mode
<Toggle 
  label="Large toggle option" 
  accessibility="low-vision"
  variant="primary"
/>
```

### Form Integration

```tsx
function ProfileForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: false
  });

  const handleToggleChange = (field: string) => (checked: boolean) => {
    setFormData(prev => ({ ...prev, [field]: checked }));
  };

  return (
    <form>
      <Input 
        label="Name" 
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
      />
      
      <Input 
        label="Email" 
        type="email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
      />
      
      <fieldset>
        <legend>Notification Preferences</legend>
        
        <Toggle
          label="Email Notifications"
          name="emailNotifications"
          checked={formData.emailNotifications}
          onChange={handleToggleChange('emailNotifications')}
          variant="primary"
        />
        
        <Toggle
          label="SMS Notifications"
          name="smsNotifications"
          checked={formData.smsNotifications}
          onChange={handleToggleChange('smsNotifications')}
          variant="primary"
        />
        
        <Toggle
          label="Marketing Emails"
          name="marketingEmails"
          checked={formData.marketingEmails}
          onChange={handleToggleChange('marketingEmails')}
          variant="secondary"
          description="Receive updates about new features and promotions"
        />
      </fieldset>
      
      <Button type="submit" variant="primary">
        Save Settings
      </Button>
    </form>
  );
}
```

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Switch role** with proper ARIA attributes
- ✅ **State communication** with `aria-checked`
- ✅ **Keyboard navigation** with space key activation
- ✅ **Focus indicators** with visible focus rings

### Keyboard Navigation
- **Space**: Toggle the switch state
- **Enter**: Toggle the switch state
- **Tab**: Move focus to/from toggle
- **Shift+Tab**: Move focus backward

### Screen Reader Support
- Announces as "Switch" with current state
- State changes announced immediately
- Description text associated and announced
- Label properly connected to control

### Visual States
- **On/Off states** clearly differentiated
- **Smooth animations** for state transitions
- **Focus indicators** for keyboard users
- **Disabled state** visually distinct

## TypeScript Interface

```tsx
interface ToggleProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  description?: string;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
}
```

## CSS Customization

```css
:root {
  /* Toggle track colors */
  --toggle-track-on: #007bff;
  --toggle-track-off: #6c757d;
  --toggle-thumb: #ffffff;
  
  /* Sizes */
  --toggle-width-md: 44px;
  --toggle-height-md: 24px;
  --toggle-thumb-size-md: 20px;
  
  /* Animation */
  --toggle-transition: all 0.2s ease-in-out;
}
```

## Related Components

- [**Checkbox**](./Checkbox.md) - For true/false selection with different visual style
- [**Radiogroup**](./Radiogroup.md) - For single selection from multiple options

---

[← Back to Documentation](../README.md)