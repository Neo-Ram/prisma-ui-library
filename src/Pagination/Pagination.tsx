import React from 'react';
import styles from './Pagination.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FontSize = 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  size?: Size;
  fontSize?: FontSize;
  disabled?: boolean;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  ariaLabel?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  size = 'md',
  fontSize = 'fs-md',
  disabled = false,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 7,
  ariaLabel = 'Navegación de páginas',
}) => {
  const rootClasses = [styles.pagination];
  const buttonBaseClasses = [styles.button, styles[variant], styles[size], styles[fontSize]];

  if (colorVision && colorVision !== 'normal') {
    rootClasses.push(styles[`cv-${colorVision}`]);
  }
  if (accessibility && accessibility !== 'default') {
    rootClasses.push(styles[`a11y-${accessibility}`]);
  }

  // Calculate which pages to show
  const getVisiblePages = (): number[] => {
    const pages: number[] = [];
    const half = Math.floor(maxVisiblePages / 2);
    
    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);
    
    // Adjust start if we're near the end
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();
  const showStartEllipsis = visiblePages[0] > 1;
  const showEndEllipsis = visiblePages[visiblePages.length - 1] < totalPages;

  const handlePageClick = (page: number) => {
    if (!disabled && page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getButtonClasses = (isActive = false, isDisabled = false) => {
    const classes = [...buttonBaseClasses];
    
    if (colorVision && colorVision !== 'normal') {
      classes.push(styles[`cv-${colorVision}`]);
    }
    if (accessibility && accessibility !== 'default') {
      classes.push(styles[`a11y-${accessibility}`]);
    }
    if (isActive) {
      classes.push(styles.active);
    }
    if (isDisabled || disabled) {
      classes.push(styles.disabled);
    }
    
    return classes.join(' ');
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className={rootClasses.join(' ')} aria-label={ariaLabel}>
      <ul className={styles.list}>
        {/* First page button */}
        {showFirstLast && (
          <li>
            <button
              type="button"
              className={getButtonClasses(false, currentPage === 1)}
              onClick={() => handlePageClick(1)}
              disabled={disabled || currentPage === 1}
              aria-label="Primera página"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  fill="currentColor"
                />
                <path
                  d="M7.354 1.646a.5.5 0 0 1 0 .708L1.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </li>
        )}

        {/* Previous page button */}
        {showPrevNext && (
          <li>
            <button
              type="button"
              className={getButtonClasses(false, currentPage === 1)}
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={disabled || currentPage === 1}
              aria-label="Página anterior"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </li>
        )}

        {/* Start ellipsis */}
        {showStartEllipsis && (
          <li>
            <span className={styles.ellipsis} aria-hidden="true">...</span>
          </li>
        )}

        {/* Page number buttons */}
        {visiblePages.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={getButtonClasses(page === currentPage)}
              onClick={() => handlePageClick(page)}
              disabled={disabled}
              aria-label={`Página ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}

        {/* End ellipsis */}
        {showEndEllipsis && (
          <li>
            <span className={styles.ellipsis} aria-hidden="true">...</span>
          </li>
        )}

        {/* Next page button */}
        {showPrevNext && (
          <li>
            <button
              type="button"
              className={getButtonClasses(false, currentPage === totalPages)}
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={disabled || currentPage === totalPages}
              aria-label="Página siguiente"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </li>
        )}

        {/* Last page button */}
        {showFirstLast && (
          <li>
            <button
              type="button"
              className={getButtonClasses(false, currentPage === totalPages)}
              onClick={() => handlePageClick(totalPages)}
              disabled={disabled || currentPage === totalPages}
              aria-label="Última página"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  fill="currentColor"
                />
                <path
                  d="M8.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L14.293 8 8.646 2.354a.5.5 0 0 1 0-.708z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
