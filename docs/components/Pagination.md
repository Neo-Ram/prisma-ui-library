# Pagination Component

Page navigation component with intelligent display and accessibility features.

## Import

```tsx
import { Pagination } from 'neo-ram-prisma';
```

## Basic Usage

```tsx
<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log('Go to page:', page)}
  variant="primary"
/>
```

## Props Reference

### Required Props
- `currentPage` - Currently active page (1-indexed)
- `totalPages` - Total number of pages
- `onPageChange` - Function called when page changes

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant of the pagination |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the pagination buttons |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Font size override |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Color vision accessibility mode |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Accessibility enhancement mode |
| `showFirstLast` | `boolean` | `true` | Show first/last page buttons |
| `showPrevNext` | `boolean` | `true` | Show previous/next page buttons |
| `maxVisible` | `number` | `7` | Maximum number of page buttons to show |
| `showPageInfo` | `boolean` | `false` | Show "Page X of Y" text |
| `showJumpToPage` | `boolean` | `false` | Show jump-to-page input |
| `disabled` | `boolean` | `false` | Disable all pagination controls |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Basic Pagination

```tsx
function BasicPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 25;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      variant="primary"
    />
  );
}
```

### With Page Information

```tsx
function PaginationWithInfo() {
  const [currentPage, setCurrentPage] = useState(5);
  const totalPages = 50;
  const itemsPerPage = 10;
  const totalItems = 487;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        Showing {startItem}-{endItem} of {totalItems} results
      </div>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        variant="primary"
        showPageInfo
        showJumpToPage
      />
    </div>
  );
}
```

### Different Configurations

```tsx
// Minimal pagination (no first/last buttons)
<Pagination
  currentPage={5}
  totalPages={20}
  onPageChange={(page) => console.log(page)}
  showFirstLast={false}
  maxVisible={5}
  variant="secondary"
/>

// Compact pagination (fewer visible pages)
<Pagination
  currentPage={10}
  totalPages={100}
  onPageChange={(page) => console.log(page)}
  maxVisible={3}
  variant="primary"
/>

// With jump-to-page functionality
<Pagination
  currentPage={25}
  totalPages={50}
  onPageChange={(page) => console.log(page)}
  showJumpToPage
  showPageInfo
  variant="success"
/>
```

### Data Table Integration

```tsx
function DataTableWithPagination() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 20;
  const totalItems = 1247;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const fetchData = async (page: number) => {
    setLoading(true);
    try {
      const response = await api.getData({ page, limit: itemsPerPage });
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Optionally scroll to top of table
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <Spinner variant="primary" />
          <span>Loading data...</span>
        </div>
      ) : (
        <table className="data-table">
          {/* Table content here */}
        </table>
      )}
      
      <div className="pagination-wrapper">
        <div className="results-info">
          Showing {((currentPage - 1) * itemsPerPage) + 1} to{' '}
          {Math.min(currentPage * itemsPerPage, totalItems)} of{' '}
          {totalItems} entries
        </div>
        
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          variant="primary"
          showJumpToPage
          disabled={loading}
        />
      </div>
    </div>
  );
}
```

### Different Sizes

```tsx
<Pagination currentPage={1} totalPages={10} onPageChange={() => {}} size="xs" />
<Pagination currentPage={1} totalPages={10} onPageChange={() => {}} size="sm" />
<Pagination currentPage={1} totalPages={10} onPageChange={() => {}} size="md" />
<Pagination currentPage={1} totalPages={10} onPageChange={() => {}} size="lg" />
<Pagination currentPage={1} totalPages={10} onPageChange={() => {}} size="xl" />
```

### Search Results Pagination

```tsx
function SearchResults() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const resultsPerPage = 10;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const performSearch = async (term: string, page: number = 1) => {
    const response = await searchAPI(term, page, resultsPerPage);
    setResults(response.results);
    setTotalResults(response.total);
    setCurrentPage(page);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page on new search
    performSearch(term, 1);
  };

  return (
    <div>
      <Input
        label="Search"
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder="Search products..."
        variant="primary"
      />
      
      {results.length > 0 && (
        <>
          <div className="search-results">
            <h3>Search Results ({totalResults} found)</h3>
            {results.map(result => (
              <div key={result.id} className="result-item">
                {/* Result content */}
              </div>
            ))}
          </div>
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => performSearch(searchTerm, page)}
            variant="primary"
            showPageInfo
          />
        </>
      )}
    </div>
  );
}
```

### Accessibility Features

```tsx
// High contrast mode
<Pagination
  currentPage={5}
  totalPages={20}
  onPageChange={(page) => console.log(page)}
  accessibility="high-contrast"
  variant="primary"
/>

// For users with deuteranopia
<Pagination
  currentPage={3}
  totalPages={15}
  onPageChange={(page) => console.log(page)}
  colorVision="deuteranopia"
  variant="success"
/>

// Low vision mode
<Pagination
  currentPage={2}
  totalPages={8}
  onPageChange={(page) => console.log(page)}
  accessibility="low-vision"
  variant="primary"
/>
```

### Server-Side Pagination

```tsx
function ServerPaginatedList() {
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 25
  });

  const fetchPage = async (page: number) => {
    try {
      const response = await fetch(`/api/items?page=${page}&limit=${pagination.itemsPerPage}`);
      const data = await response.json();
      
      setItems(data.items);
      setPagination({
        currentPage: data.currentPage,
        totalPages: data.totalPages,
        totalItems: data.totalItems,
        itemsPerPage: pagination.itemsPerPage
      });
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  };

  useEffect(() => {
    fetchPage(1);
  }, []);

  return (
    <>
      <div className="items-grid">
        {items.map(item => (
          <div key={item.id} className="item-card">
            {/* Item content */}
          </div>
        ))}
      </div>
      
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={fetchPage}
        variant="primary"
        showPageInfo
        showJumpToPage
      />
    </>
  );
}
```

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Navigation landmark** with proper ARIA labels
- ✅ **Current page indication** with `aria-current="page"`
- ✅ **Page number semantics** with `aria-label` descriptions
- ✅ **Disabled state** communication with `aria-disabled`

### Keyboard Navigation
- **Tab**: Move focus between pagination controls
- **Enter/Space**: Activate focused page button
- **Arrow Left/Right**: Navigate between adjacent pages (optional)
- **Home/End**: Jump to first/last page (when jump-to-page is enabled)

### Screen Reader Support
- Announces as "Pagination navigation"
- Current page clearly identified
- Page numbers announced with context ("Page 5 of 20")
- Previous/Next buttons with clear labels

### Focus Management
- Clear focus indicators on all interactive elements
- Logical tab order through pagination controls
- Focus remains on pagination after page changes
- Skip links available for long pagination lists

## Pagination Algorithm

The component intelligently displays pages based on `maxVisible`:

**For maxVisible = 7:**
- **Pages 1-5**: `1 2 3 4 5 6 7`
- **Middle pages**: `1 ... 8 9 10 11 12 ... 20`
- **End pages**: `1 ... 14 15 16 17 18 19 20`

**Rules:**
1. Always show current page
2. Show context around current page
3. Use ellipsis for gaps > 1 page
4. Always show first and last when `showFirstLast` is true

## TypeScript Interface

```tsx
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisible?: number;
  showPageInfo?: boolean;
  showJumpToPage?: boolean;
  disabled?: boolean;
  className?: string;
}
```

## CSS Customization

```css
:root {
  /* Pagination button styles */
  --pagination-button-padding: 0.5rem 0.75rem;
  --pagination-button-margin: 0.125rem;
  --pagination-border-radius: 0.375rem;
  
  /* Current page styles */
  --pagination-current-bg: #007bff;
  --pagination-current-color: #ffffff;
  
  /* Hover states */
  --pagination-hover-bg: #e9ecef;
  --pagination-hover-color: #495057;
}
```

## Related Components

- [**Breadcrumb**](./Breadcrumb.md) - For hierarchical navigation
- [**Button**](./Button.md) - For individual action buttons

---

[← Back to Documentation](../README.md)