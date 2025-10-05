# Slider Component

Range slider component with real-time feedback and accessibility features.

## Import

```tsx
import { Slider } from 'neo-ram-prisma';
```

## Basic Usage

```tsx
<Slider 
  label="Volume" 
  min={0} 
  max={100} 
  variant="primary" 
/>
```

## Props Reference

### Required Props
- `label` - Text label for the slider

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant of the slider |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the slider |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Font size override |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color vision accessibility mode |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Accessibility enhancement mode |
| `min` | `number` | `0` | Minimum slider value |
| `max` | `number` | `100` | Maximum slider value |
| `step` | `number` | `1` | Step increment for value changes |
| `value` | `number` | - | Controlled slider value |
| `defaultValue` | `number` | - | Default uncontrolled value |
| `disabled` | `boolean` | `false` | Disable the slider |
| `showValue` | `boolean` | `true` | Display current value |
| `showMinMax` | `boolean` | `false` | Display min/max labels |
| `unit` | `string` | - | Unit to display with value (e.g., "%", "px") |
| `formatValue` | `(value: number) => string` | - | Custom value formatting function |
| `onChange` | `(value: number, event: ChangeEvent) => void` | - | Change event handler |
| `onFocus` | `(event: FocusEvent) => void` | - | Focus event handler |
| `onBlur` | `(event: FocusEvent) => void` | - | Blur event handler |
| `className` | `string` | - | Additional CSS classes |
| `name` | `string` | - | Form field name |

## Examples

### Basic Usage

```tsx
// Simple volume slider
<Slider 
  label="Volume" 
  min={0} 
  max={100} 
  defaultValue={50}
  unit="%"
  variant="primary"
/>

// Price range slider
<Slider 
  label="Maximum Price" 
  min={0} 
  max={1000} 
  step={10}
  defaultValue={500}
  unit="$"
  variant="success"
  showMinMax
/>

// Opacity slider
<Slider 
  label="Opacity" 
  min={0} 
  max={1} 
  step={0.1}
  defaultValue={1}
  formatValue={(value) => `${(value * 100).toFixed(0)}%`}
  variant="secondary"
/>
```

### Controlled State

```tsx
function ControlledSlider() {
  const [volume, setVolume] = useState(75);

  return (
    <>
      <Slider
        label="Audio Volume"
        min={0}
        max={100}
        value={volume}
        onChange={(value) => setVolume(value)}
        unit="%"
        variant="primary"
      />
      
      <div>
        Current volume: {volume}%
        <br />
        Status: {volume === 0 ? 'Muted' : volume < 30 ? 'Low' : volume < 70 ? 'Medium' : 'High'}
      </div>
    </>
  );
}
```

### Custom Formatting

```tsx
function CustomSliders() {
  const [temperature, setTemperature] = useState(20);
  const [fileSize, setFileSize] = useState(512);

  const formatTemperature = (value: number) => `${value}°C / ${(value * 9/5 + 32).toFixed(1)}°F`;
  
  const formatFileSize = (value: number) => {
    if (value < 1024) return `${value} MB`;
    return `${(value / 1024).toFixed(1)} GB`;
  };

  return (
    <>
      <Slider
        label="Temperature"
        min={-10}
        max={50}
        value={temperature}
        onChange={setTemperature}
        formatValue={formatTemperature}
        variant="warning"
      />
      
      <Slider
        label="File Size Limit"
        min={100}
        max={5120}
        step={100}
        value={fileSize}
        onChange={setFileSize}
        formatValue={formatFileSize}
        variant="primary"
        showMinMax
      />
    </>
  );
}
```

### Settings Panel Example

```tsx
function AudioSettings() {
  const [settings, setSettings] = useState({
    masterVolume: 80,
    musicVolume: 70,
    effectsVolume: 90,
    voiceVolume: 85
  });

  const updateSetting = (key: string, value: number) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="audio-settings">
      <h3>Audio Settings</h3>
      
      <Slider
        label="Master Volume"
        min={0}
        max={100}
        value={settings.masterVolume}
        onChange={(value) => updateSetting('masterVolume', value)}
        unit="%"
        variant="primary"
      />
      
      <Slider
        label="Music Volume"
        min={0}
        max={100}
        value={settings.musicVolume}
        onChange={(value) => updateSetting('musicVolume', value)}
        unit="%"
        variant="success"
      />
      
      <Slider
        label="Sound Effects"
        min={0}
        max={100}
        value={settings.effectsVolume}
        onChange={(value) => updateSetting('effectsVolume', value)}
        unit="%"
        variant="warning"
      />
      
      <Slider
        label="Voice Volume"
        min={0}
        max={100}
        value={settings.voiceVolume}
        onChange={(value) => updateSetting('voiceVolume', value)}
        unit="%"
        variant="secondary"
      />
    </div>
  );
}
```

### Different Sizes and Variants

```tsx
// Different sizes
<Slider label="Extra Small" size="xs" variant="primary" />
<Slider label="Small" size="sm" variant="secondary" />
<Slider label="Medium" size="md" variant="success" />
<Slider label="Large" size="lg" variant="warning" />
<Slider label="Extra Large" size="xl" variant="danger" />

// With min/max display
<Slider 
  label="Range with Labels" 
  min={-100} 
  max={100} 
  showMinMax 
  variant="primary"
/>
```

### Accessibility Features

```tsx
// High contrast mode
<Slider 
  label="Contrast setting" 
  accessibility="high-contrast"
  min={0}
  max={100}
  variant="primary"
/>

// For users with deuteranopia
<Slider 
  label="Success metric" 
  colorVision="deuteranopia"
  min={0}
  max={100}
  variant="success"
/>

// Low vision mode
<Slider 
  label="Large slider option" 
  accessibility="low-vision"
  min={0}
  max={100}
  variant="primary"
/>
```

### Advanced Example with Validation

```tsx
function ValidatedSlider() {
  const [value, setValue] = useState(50);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (newValue: number) => {
    setValue(newValue);
    // Example validation: value must be between 25 and 75
    setIsValid(newValue >= 25 && newValue <= 75);
  };

  return (
    <>
      <Slider
        label="Performance Setting"
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
        variant={isValid ? "success" : "danger"}
        unit="%"
        showMinMax
      />
      
      {!isValid && (
        <Alert variant="danger">
          Value must be between 25% and 75% for optimal performance
        </Alert>
      )}
    </>
  );
}
```

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Slider role** with proper ARIA attributes
- ✅ **Value communication** with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- ✅ **Keyboard navigation** with arrow keys
- ✅ **Focus indicators** with visible focus rings

### Keyboard Navigation
- **Arrow Left/Right**: Decrease/increase value by step
- **Arrow Up/Down**: Increase/decrease value by step
- **Home**: Set to minimum value
- **End**: Set to maximum value
- **Page Up/Down**: Large increments (10% of range)

### Screen Reader Support
- Announces as "Slider" with current value and range
- Value changes announced in real-time
- Min/max values communicated
- Units and formatted values announced

### Touch Support
- **Touch-friendly** thumb size (minimum 44px)
- **Drag gestures** for mobile interaction
- **Tap** to jump to specific values
- **Responsive** touch targets

## TypeScript Interface

```tsx
interface SliderProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  disabled?: boolean;
  showValue?: boolean;
  showMinMax?: boolean;
  unit?: string;
  formatValue?: (value: number) => string;
  onChange?: (value: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
}
```

## CSS Customization

```css
:root {
  /* Track colors */
  --slider-track-bg: #e9ecef;
  --slider-track-fill: #007bff;
  --slider-thumb-bg: #ffffff;
  --slider-thumb-border: #007bff;
  
  /* Sizes */
  --slider-height-md: 6px;
  --slider-thumb-size-md: 20px;
  
  /* Focus */
  --slider-focus-ring: 0 0 0 3px rgba(11,92,255,.25);
}
```

## Related Components

- [**Input**](./Input.md) - For precise numeric input
- [**Toggle**](./Toggle.md) - For boolean on/off controls

---

[← Back to Documentation](../README.md)