import React from 'react';
import styles from './Breadcrumb.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'custom';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';
export type FontSize = 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface CustomBreadcrumbColors {
  // Normal vision colors
  defaultColor: string;
  defaultColorHover: string;
  defaultColorCurrent: string;
  defaultSeparator: string;

  // Protanopia colors
  protanopiaColor: string;
  protanopiaColorHover: string;
  protanopiaColorCurrent: string;
  protanopiaSeparator: string;

  // Deuteranopia colors
  deuteranopiaColor: string;
  deuteranopiaColorHover: string;
  deuteranopiaColorCurrent: string;
  deuteranopiaSeparator: string;

  // Tritanopia colors
  tritanopiaColor: string;
  tritanopiaColorHover: string;
  tritanopiaColorCurrent: string;
  tritanopiaSeparator: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  fontSize?: FontSize;
  separator?: React.ReactNode;
  maxItems?: number;
  showHome?: boolean;
  homeLabel?: string;
  onHomeClick?: () => void;
  ariaLabel?: string;
  customColors?: CustomBreadcrumbColors;
  style?: React.CSSProperties;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  fontSize = 'fs-md',
  separator,
  maxItems,
  showHome = false,
  homeLabel = 'Inicio',
  onHomeClick,
  ariaLabel = 'Breadcrumb',
  customColors,
  style,
}) => {
  const rootClasses = [styles.breadcrumb, styles[variant], styles[fontSize]];

  if (colorVision && colorVision !== 'normal') {
    rootClasses.push(styles[`cv-${colorVision}`]);
  }
  if (accessibility && accessibility !== 'default') {
    rootClasses.push(styles[`a11y-${accessibility}`]);
  }

  // Aplicar customColors solo cuando variant es 'custom'
  const customStyle = { ...style } as React.CSSProperties & { [key: string]: string }
  if (customColors && variant === 'custom') {
    // Aplicar colores según el modo de visión de color
    if (colorVision === 'normal') {
      customStyle['--breadcrumb-color'] = customColors.defaultColor
      customStyle['--breadcrumb-color-hover'] = customColors.defaultColorHover
      customStyle['--breadcrumb-color-current'] = customColors.defaultColorCurrent
      customStyle['--breadcrumb-separator'] = customColors.defaultSeparator
    } else if (colorVision === 'protanopia') {
      customStyle['--breadcrumb-color'] = customColors.protanopiaColor
      customStyle['--breadcrumb-color-hover'] = customColors.protanopiaColorHover
      customStyle['--breadcrumb-color-current'] = customColors.protanopiaColorCurrent
      customStyle['--breadcrumb-separator'] = customColors.protanopiaSeparator
    } else if (colorVision === 'deuteranopia') {
      customStyle['--breadcrumb-color'] = customColors.deuteranopiaColor
      customStyle['--breadcrumb-color-hover'] = customColors.deuteranopiaColorHover
      customStyle['--breadcrumb-color-current'] = customColors.deuteranopiaColorCurrent
      customStyle['--breadcrumb-separator'] = customColors.deuteranopiaSeparator
    } else if (colorVision === 'tritanopia') {
      customStyle['--breadcrumb-color'] = customColors.tritanopiaColor
      customStyle['--breadcrumb-color-hover'] = customColors.tritanopiaColorHover
      customStyle['--breadcrumb-color-current'] = customColors.tritanopiaColorCurrent
      customStyle['--breadcrumb-separator'] = customColors.tritanopiaSeparator
    }
  }

  // Process items based on maxItems
  const processedItems = React.useMemo(() => {
    if (!maxItems || items.length <= maxItems) {
      return items;
    }

    // If we have too many items, show first, ellipsis, and last few items
    const firstItem = items[0];
    const lastItems = items.slice(-(maxItems - 2));
    
    return [
      firstItem,
      { label: '...', disabled: true },
      ...lastItems
    ];
  }, [items, maxItems]);

  const allItems = showHome 
    ? [{ label: homeLabel, onClick: onHomeClick }, ...processedItems]
    : processedItems;

  const defaultSeparator = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.separatorIcon}>
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const renderSeparator = () => {
    if (separator) return separator;
    return defaultSeparator;
  };

  const handleItemClick = (item: BreadcrumbItem, index: number) => {
    // Don't handle click for current page (last item) or disabled items
    if (index === allItems.length - 1 || item.disabled) return;
    
    if (item.onClick) {
      item.onClick();
    }
  };

  const renderItem = (item: BreadcrumbItem, index: number) => {
    const isLast = index === allItems.length - 1;
    const isClickable = !isLast && !item.disabled && (item.href || item.onClick);
    const isEllipsis = item.label === '...';

    const itemClasses = [styles.item];
    if (isLast) itemClasses.push(styles.current);
    if (item.disabled || isEllipsis) itemClasses.push(styles.disabled);
    if (isClickable) itemClasses.push(styles.clickable);

    const content = isClickable ? (
      item.href ? (
        <a
          href={item.href}
          className={styles.link}
          onClick={(e) => {
            if (item.onClick) {
              e.preventDefault();
              item.onClick();
            }
          }}
        >
          {item.label}
        </a>
      ) : (
        <button
          type="button"
          className={styles.button}
          onClick={() => handleItemClick(item, index)}
        >
          {item.label}
        </button>
      )
    ) : (
      <span className={styles.text}>{item.label}</span>
    );

    return (
      <li key={`${item.label}-${index}`} className={itemClasses.join(' ')}>
        {content}
        {!isLast && (
          <span className={styles.separator} aria-hidden="true">
            {renderSeparator()}
          </span>
        )}
      </li>
    );
  };

  if (allItems.length === 0) {
    return null;
  }

  return (
    <nav className={rootClasses.join(' ')} aria-label={ariaLabel} style={customStyle}>
      <ol className={styles.list}>
        {allItems.map(renderItem)}
      </ol>
    </nav>
  );
};