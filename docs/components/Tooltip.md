# Tooltip Component

Smart positioning tooltip component with animations and accessibility features.

## Import

```tsx
import { Tooltip } from 'neo-ram-prisma';
```

## Basic Usage

```tsx
<Tooltip content="This is helpful information">
  <Button variant="primary">Hover me</Button>
</Tooltip>
```

## Props Reference

### Required Props
- `content` - Tooltip text or content
- `children` - Element that triggers the tooltip

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant of the tooltip |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the tooltip |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-sm'` | Font size override |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color vision accessibility mode |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Accessibility enhancement mode |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'auto'` | `'auto'` | Preferred tooltip position |
| `trigger` | `'hover' \| 'click' \| 'focus' \| 'manual'` | `'hover'` | How tooltip is triggered |
| `delay` | `number` | `200` | Delay before showing (ms) |
| `hideDelay` | `number` | `100` | Delay before hiding (ms) |
| `offset` | `number` | `8` | Distance from trigger element (px) |
| `arrow` | `boolean` | `true` | Show pointing arrow |
| `maxWidth` | `number` | `300` | Maximum tooltip width (px) |
| `disabled` | `boolean` | `false` | Disable tooltip display |
| `className` | `string` | - | Additional CSS classes |
| `onShow` | `() => void` | - | Callback when tooltip shows |
| `onHide` | `() => void` | - | Callback when tooltip hides |

## Examples

### Basic Tooltips

```tsx
// Simple hover tooltip
<Tooltip content="Save your current work">
  <Button variant="primary">💾 Save</Button>
</Tooltip>

// With different positions
<Tooltip content="This appears above" position="top">
  <Button variant="secondary">Top</Button>
</Tooltip>

<Tooltip content="This appears below" position="bottom">
  <Button variant="secondary">Bottom</Button>
</Tooltip>

<Tooltip content="This appears to the left" position="left">
  <Button variant="secondary">Left</Button>
</Tooltip>

<Tooltip content="This appears to the right" position="right">
  <Button variant="secondary">Right</Button>
</Tooltip>
```

### Different Variants

```tsx
<Tooltip content="Primary information" variant="primary">
  <Button variant="primary">Info</Button>
</Tooltip>

<Tooltip content="Success message" variant="success">
  <Button variant="success">✓ Done</Button>
</Tooltip>

<Tooltip content="Warning notice" variant="warning">
  <Button variant="warning">⚠ Caution</Button>
</Tooltip>

<Tooltip content="Error details" variant="danger">
  <Button variant="danger">✗ Error</Button>
</Tooltip>
```

### Rich Content Tooltips

```tsx
// Multi-line content
<Tooltip
  content={
    <div>
      <strong>Keyboard Shortcut</strong><br />
      Ctrl+S (Windows)<br />
      Cmd+S (Mac)
    </div>
  }
  variant="secondary"
  maxWidth={200}
>
  <Button variant="primary">Save</Button>
</Tooltip>

// With icons and formatting
<Tooltip
  content={
    <div className="tooltip-rich">
      <div className="tooltip-header">
        <span className="icon">🛡️</span>
        <strong>Security Info</strong>
      </div>
      <p>This action requires admin privileges to complete.</p>
    </div>
  }
  variant="warning"
  maxWidth={250}
>
  <Button variant="warning">Admin Action</Button>
</Tooltip>
```

### Interactive Tooltips

```tsx
// Click to show/hide
<Tooltip
  content="Click the button again to hide this tooltip"
  trigger="click"
  variant="primary"
>
  <Button variant="primary">Click me</Button>
</Tooltip>

// Manual control
function ManualTooltip() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <Tooltip
        content="Manually controlled tooltip"
        trigger="manual"
        disabled={!showTooltip}
        variant="success"
      >
        <Button variant="primary">Manual Trigger</Button>
      </Tooltip>
      
      <Button
        variant="secondary"
        onClick={() => setShowTooltip(!showTooltip)}
      >
        {showTooltip ? 'Hide' : 'Show'} Tooltip
      </Button>
    </>
  );
}
```

### Form Field Tooltips

```tsx
function FormWithTooltips() {
  return (
    <form>
      <div className="form-field">
        <label htmlFor="username">
          Username
          <Tooltip
            content="Username must be 3-20 characters, letters and numbers only"
            position="right"
            variant="primary"
          >
            <span className="help-icon">ℹ️</span>
          </Tooltip>
        </label>
        <Input id="username" variant="primary" />
      </div>
      
      <div className="form-field">
        <label htmlFor="password">
          Password
          <Tooltip
            content={
              <div>
                <strong>Password Requirements:</strong>
                <ul>
                  <li>At least 8 characters</li>
                  <li>One uppercase letter</li>
                  <li>One lowercase letter</li>
                  <li>One number or symbol</li>
                </ul>
              </div>
            }
            position="right"
            variant="warning"
            maxWidth={220}
          >
            <span className="help-icon">🔒</span>
          </Tooltip>
        </label>
        <Input type="password" id="password" variant="primary" />
      </div>
    </form>
  );
}
```

### Data Visualization Tooltips

```tsx
function ChartWithTooltips() {
  const dataPoints = [
    { x: 10, y: 20, value: 150, label: 'Q1 Sales' },
    { x: 50, y: 80, value: 200, label: 'Q2 Sales' },
    { x: 90, y: 60, value: 175, label: 'Q3 Sales' },
    { x: 130, y: 100, value: 250, label: 'Q4 Sales' }
  ];

  return (
    <svg className="chart" width="200" height="150">
      {dataPoints.map((point, index) => (
        <Tooltip
          key={index}
          content={
            <div>
              <strong>{point.label}</strong><br />
              Value: ${point.value}k<br />
              Growth: +12%
            </div>
          }
          position="top"
          variant="primary"
          trigger="hover"
        >
          <circle
            cx={point.x}
            cy={point.y}
            r="6"
            fill="#007bff"
            className="data-point"
          />
        </Tooltip>
      ))}
    </svg>
  );
}
```

### Different Sizes and Delays

```tsx
// Different sizes
<Tooltip content="Extra small tooltip" size="xs" variant="primary">
  <Button size="xs">XS</Button>
</Tooltip>

<Tooltip content="Small tooltip" size="sm" variant="secondary">
  <Button size="sm">SM</Button>
</Tooltip>

<Tooltip content="Large tooltip with more content" size="lg" variant="success">
  <Button size="lg">LG</Button>
</Tooltip>

// Custom delays
<Tooltip 
  content="Quick tooltip (no delay)" 
  delay={0} 
  hideDelay={0}
  variant="primary"
>
  <Button variant="primary">Instant</Button>
</Tooltip>

<Tooltip 
  content="Slow tooltip (1 second delay)" 
  delay={1000} 
  hideDelay={500}
  variant="warning"
>
  <Button variant="warning">Delayed</Button>
</Tooltip>
```

### Accessibility Features

```tsx
// High contrast mode
<Tooltip 
  content="High contrast tooltip for better visibility" 
  accessibility="high-contrast"
  variant="primary"
>
  <Button variant="primary">High Contrast</Button>
</Tooltip>

// For users with deuteranopia
<Tooltip 
  content="Success action tooltip with adjusted colors" 
  colorVision="deuteranopia"
  variant="success"
>
  <Button variant="success">Color-Safe Success</Button>
</Tooltip>

// Low vision mode
<Tooltip 
  content="Large tooltip for users with low vision" 
  accessibility="low-vision"
  variant="primary"
>
  <Button variant="primary">Low Vision</Button>
</Tooltip>

// Focus-triggered for keyboard users
<Tooltip 
  content="This tooltip appears on focus for keyboard navigation"
  trigger="focus"
  variant="primary"
>
  <Button variant="primary">Focus Tooltip</Button>
</Tooltip>
```

### Complex Interactive Example

```tsx
function HelpSystem() {
  const [currentTip, setCurrentTip] = useState(0);
  
  const tips = [
    {
      selector: '.feature-1',
      content: 'This is the main navigation menu. Use it to access different sections.',
      position: 'bottom'
    },
    {
      selector: '.feature-2', 
      content: 'Click here to access your user profile and settings.',
      position: 'left'
    },
    {
      selector: '.feature-3',
      content: 'Use this search bar to quickly find what you need.',
      position: 'bottom'
    }
  ];

  return (
    <div className="app-layout">
      {tips.map((tip, index) => (
        <Tooltip
          key={index}
          content={
            <div>
              <div>{tip.content}</div>
              <div className="tooltip-navigation">
                <Button
                  size="xs"
                  variant="secondary"
                  onClick={() => setCurrentTip(Math.max(0, currentTip - 1))}
                  disabled={currentTip === 0}
                >
                  Previous
                </Button>
                <span>{currentTip + 1} of {tips.length}</span>
                <Button
                  size="xs" 
                  variant="primary"
                  onClick={() => setCurrentTip(Math.min(tips.length - 1, currentTip + 1))}
                  disabled={currentTip === tips.length - 1}
                >
                  Next
                </Button>
              </div>
            </div>
          }
          position={tip.position}
          trigger="manual"
          disabled={currentTip !== index}
          variant="primary"
        >
          <div className={tip.selector.substring(1)}>
            {/* App content */}
          </div>
        </Tooltip>
      ))}
    </div>
  );
}
```

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **ARIA attributes** (`aria-describedby`, `role="tooltip"`)
- ✅ **Keyboard accessibility** with focus trigger support
- ✅ **Screen reader support** with proper announcements
- ✅ **Focus management** maintains logical tab order

### Keyboard Navigation
- **Tab**: Focus trigger element (tooltip shows if trigger="focus")
- **Escape**: Hide visible tooltip
- **Space/Enter**: Show tooltip (if trigger="click")

### Screen Reader Support
- Tooltip content announced when triggered
- Proper association with trigger element via `aria-describedby`
- Role="tooltip" for screen reader identification
- Content changes announced dynamically

### Smart Positioning
- **Auto-positioning** prevents tooltips from going off-screen
- **Viewport detection** adjusts position dynamically
- **Collision detection** with screen edges
- **Responsive behavior** on different screen sizes

## TypeScript Interface

```tsx
interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  position?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  trigger?: 'hover' | 'click' | 'focus' | 'manual';
  delay?: number;
  hideDelay?: number;
  offset?: number;
  arrow?: boolean;
  maxWidth?: number;
  disabled?: boolean;
  className?: string;
  onShow?: () => void;
  onHide?: () => void;
}
```

## CSS Customization

```css
:root {
  /* Tooltip appearance */
  --tooltip-bg: rgba(0, 0, 0, 0.9);
  --tooltip-color: #ffffff;
  --tooltip-border-radius: 0.375rem;
  --tooltip-padding: 0.5rem 0.75rem;
  --tooltip-font-size: 0.875rem;
  
  /* Animation */
  --tooltip-transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  --tooltip-z-index: 1070;
  
  /* Arrow */
  --tooltip-arrow-size: 6px;
  --tooltip-arrow-color: var(--tooltip-bg);
}
```

## Positioning Algorithm

1. **Calculate available space** in all directions
2. **Choose optimal position** based on space and preference  
3. **Adjust for viewport boundaries** to prevent overflow
4. **Position arrow** to point to trigger element center
5. **Apply entrance animation** with appropriate direction

## Related Components

- [**Alert**](./Alert.md) - For persistent status messages
- [**Button**](./Button.md) - Common tooltip trigger element

---

[← Back to Documentation](../README.md)