# Breadcrumb Component

Navigation breadcrumb component with smart truncation and accessibility features.

## Import

```tsx
import { Breadcrumb } from 'neo-ram-prisma';
```

## Basic Usage

```tsx
<Breadcrumb
  items={[
    { label: 'Home', onClick: () => navigate('/') },
    { label: 'Products', onClick: () => navigate('/products') },
    { label: 'Laptops', onClick: () => navigate('/products/laptops') },
    { label: 'Current Page' }
  ]}
  variant="primary"
/>
```

## Props Reference

### Required Props
- `items` - Array of breadcrumb items

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant of the breadcrumb |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the breadcrumb |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Font size override |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color vision accessibility mode |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Accessibility enhancement mode |
| `separator` | `string \| ReactNode` | `'/'` | Custom separator between items |
| `maxItems` | `number` | `5` | Maximum number of items to show before truncation |
| `showRoot` | `boolean` | `true` | Always show the first (root) item |
| `className` | `string` | - | Additional CSS classes |

### Item Interface

```tsx
interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  icon?: ReactNode;
}
```

## Examples

### Basic Breadcrumb

```tsx
const breadcrumbItems = [
  { label: 'Home', onClick: () => navigate('/') },
  { label: 'Electronics', onClick: () => navigate('/electronics') },
  { label: 'Computers', onClick: () => navigate('/electronics/computers') },
  { label: 'Laptops', onClick: () => navigate('/electronics/computers/laptops') },
  { label: 'Gaming Laptops' } // Current page (no onClick)
];

<Breadcrumb
  items={breadcrumbItems}
  variant="primary"
/>
```

### With Icons

```tsx
import { HomeIcon, FolderIcon, DocumentIcon } from './icons';

const itemsWithIcons = [
  { 
    label: 'Home', 
    icon: <HomeIcon />, 
    onClick: () => navigate('/') 
  },
  { 
    label: 'Documents', 
    icon: <FolderIcon />, 
    onClick: () => navigate('/documents') 
  },
  { 
    label: 'Reports', 
    icon: <FolderIcon />, 
    onClick: () => navigate('/documents/reports') 
  },
  { 
    label: 'Annual Report 2024', 
    icon: <DocumentIcon /> 
  }
];

<Breadcrumb
  items={itemsWithIcons}
  variant="secondary"
/>
```

### Custom Separator

```tsx
// Using emoji separator
<Breadcrumb
  items={breadcrumbItems}
  separator="→"
  variant="primary"
/>

// Using custom component separator
<Breadcrumb
  items={breadcrumbItems}
  separator={<ChevronRightIcon className="w-4 h-4" />}
  variant="success"
/>
```

### With Truncation

```tsx
const longPath = [
  { label: 'Root', onClick: () => navigate('/') },
  { label: 'Level 1', onClick: () => navigate('/level1') },
  { label: 'Level 2', onClick: () => navigate('/level1/level2') },
  { label: 'Level 3', onClick: () => navigate('/level1/level2/level3') },
  { label: 'Level 4', onClick: () => navigate('/level1/level2/level3/level4') },
  { label: 'Level 5', onClick: () => navigate('/level1/level2/level3/level4/level5') },
  { label: 'Current Page' }
];

// Will show: Root > ... > Level 4 > Level 5 > Current Page
<Breadcrumb
  items={longPath}
  maxItems={5}
  showRoot={true}
  variant="primary"
/>
```

### Different Sizes

```tsx
<Breadcrumb items={breadcrumbItems} size="xs" variant="primary" />
<Breadcrumb items={breadcrumbItems} size="sm" variant="secondary" />
<Breadcrumb items={breadcrumbItems} size="md" variant="success" />
<Breadcrumb items={breadcrumbItems} size="lg" variant="warning" />
<Breadcrumb items={breadcrumbItems} size="xl" variant="danger" />
```

### Dynamic Breadcrumb with Router

```tsx
import { useLocation } from 'react-router-dom';

function DynamicBreadcrumb() {
  const location = useLocation();

  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = (pathname: string) => {
    const paths = pathname.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [
      { label: 'Home', onClick: () => navigate('/') }
    ];

    paths.forEach((path, index) => {
      const fullPath = '/' + paths.slice(0, index + 1).join('/');
      const isLast = index === paths.length - 1;
      
      items.push({
        label: path.charAt(0).toUpperCase() + path.slice(1),
        ...(isLast ? {} : { onClick: () => navigate(fullPath) })
      });
    });

    return items;
  };

  return (
    <Breadcrumb
      items={generateBreadcrumbs(location.pathname)}
      variant="primary"
    />
  );
}
```

### E-commerce Example

```tsx
function ProductBreadcrumb({ category, subcategory, product }) {
  const items = [
    { label: 'Home', onClick: () => navigate('/') },
    { 
      label: 'Shop', 
      onClick: () => navigate('/shop') 
    },
    { 
      label: category.name, 
      onClick: () => navigate(`/shop/${category.slug}`) 
    }
  ];

  if (subcategory) {
    items.push({
      label: subcategory.name,
      onClick: () => navigate(`/shop/${category.slug}/${subcategory.slug}`)
    });
  }

  if (product) {
    items.push({ label: product.name }); // Current product page
  }

  return (
    <Breadcrumb
      items={items}
      variant="primary"
      separator="›"
    />
  );
}
```

### Accessibility Features

```tsx
// High contrast mode
<Breadcrumb
  items={breadcrumbItems}
  accessibility="high-contrast"
  variant="primary"
/>

// For users with deuteranopia
<Breadcrumb
  items={breadcrumbItems}
  colorVision="deuteranopia"
  variant="success"
/>

// Low vision mode
<Breadcrumb
  items={breadcrumbItems}
  accessibility="low-vision"
  variant="primary"
/>
```

### With Loading State

```tsx
function AsyncBreadcrumb() {
  const [breadcrumbData, setBreadcrumbData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to get breadcrumb data
    fetchBreadcrumbData().then(data => {
      setBreadcrumbData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="breadcrumb-skeleton">
        <Spinner size="sm" variant="primary" />
        <span>Loading navigation...</span>
      </div>
    );
  }

  return (
    <Breadcrumb
      items={breadcrumbData}
      variant="primary"
    />
  );
}
```

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Navigation landmark** with `<nav>` element and `aria-label`
- ✅ **Ordered list** structure for screen readers
- ✅ **Current page indication** with `aria-current="page"`
- ✅ **Link semantics** for navigable items

### Keyboard Navigation
- **Tab**: Move focus between clickable breadcrumb items
- **Enter/Space**: Activate focused breadcrumb link
- **Shift+Tab**: Move focus backward through items

### Screen Reader Support
- Announces as "Breadcrumb navigation"
- Reads list structure with position information
- Current page clearly identified
- Separator characters ignored in screen reader output

### Semantic Structure
```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li aria-current="page">Current Page</li>
  </ol>
</nav>
```

## TypeScript Interface

```tsx
interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  separator?: string | React.ReactNode;
  maxItems?: number;
  showRoot?: boolean;
  className?: string;
}
```

## Truncation Algorithm

When the number of items exceeds `maxItems`:
1. **Always show** the first item (if `showRoot` is true)
2. **Always show** the last 2 items (current page and parent)
3. **Show ellipsis** (`...`) for collapsed middle items
4. **Maintain** logical navigation hierarchy

Example with `maxItems={5}`:
- **Before**: Home > Category > Subcategory > Product Type > Brand > Model > Current
- **After**: Home > ... > Brand > Model > Current

## CSS Customization

```css
:root {
  /* Breadcrumb colors */
  --breadcrumb-link-color: #007bff;
  --breadcrumb-link-hover: #0056b3;
  --breadcrumb-current-color: #6c757d;
  --breadcrumb-separator-color: #6c757d;
  
  /* Spacing */
  --breadcrumb-item-spacing: 0.5rem;
  --breadcrumb-padding: 0.75rem 0;
}
```

## Related Components

- [**Pagination**](./Pagination.md) - For page navigation controls
- [**Button**](./Button.md) - For individual navigation actions

---

[← Back to Documentation](../README.md)