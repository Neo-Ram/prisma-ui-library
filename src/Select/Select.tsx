import React, { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FontSize = 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface CustomSelectColors {
  // Normal vision colors
  defaultBg: string;
  defaultBorder: string;
  defaultBorderFocus: string;
  defaultColor: string;
  defaultPlaceholder: string;
  defaultShadowFocus: string;

  // Protanopia colors
  protanopiaBg: string;
  protanopiaBorder: string;
  protanopiaBorderFocus: string;
  protanopiaColor: string;
  protanopiaPlaceholder: string;
  protanopiaShadowFocus: string;

  // Deuteranopia colors
  deuteranopiaBg: string;
  deuteranopiaBorder: string;
  deuteranopiaBorderFocus: string;
  deuteranopiaColor: string;
  deuteranopiaPlaceholder: string;
  deuteranopiaShadowFocus: string;

  // Tritanopia colors
  tritanopiaBg: string;
  tritanopiaBorder: string;
  tritanopiaBorderFocus: string;
  tritanopiaColor: string;
  tritanopiaPlaceholder: string;
  tritanopiaShadowFocus: string;
}

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  label?: string;
  placeholder?: string;
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  size?: Size;
  fontSize?: FontSize;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  customColors?: CustomSelectColors;
  style?: React.CSSProperties;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  label,
  placeholder = 'Selecciona una opción',
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  size = 'md',
  fontSize = 'fs-md',
  disabled = false,
  required = false,
  error,
  customColors,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Crear estilos inline para customColors
  const customStyle = { ...style } as React.CSSProperties & { [key: string]: string }
  if (customColors) {
    // Aplicar colores según el modo de visión de color
    if (colorVision === 'normal') {
      customStyle['--select-bg'] = customColors.defaultBg
      customStyle['--select-border'] = customColors.defaultBorder
      customStyle['--select-border-focus'] = customColors.defaultBorderFocus
      customStyle['--select-color'] = customColors.defaultColor
      customStyle['--select-placeholder'] = customColors.defaultPlaceholder
      customStyle['--select-shadow-focus'] = customColors.defaultShadowFocus
    } else if (colorVision === 'protanopia') {
      customStyle['--select-bg'] = customColors.protanopiaBg
      customStyle['--select-border'] = customColors.protanopiaBorder
      customStyle['--select-border-focus'] = customColors.protanopiaBorderFocus
      customStyle['--select-color'] = customColors.protanopiaColor
      customStyle['--select-placeholder'] = customColors.protanopiaPlaceholder
      customStyle['--select-shadow-focus'] = customColors.protanopiaShadowFocus
    } else if (colorVision === 'deuteranopia') {
      customStyle['--select-bg'] = customColors.deuteranopiaBg
      customStyle['--select-border'] = customColors.deuteranopiaBorder
      customStyle['--select-border-focus'] = customColors.deuteranopiaBorderFocus
      customStyle['--select-color'] = customColors.deuteranopiaColor
      customStyle['--select-placeholder'] = customColors.deuteranopiaPlaceholder
      customStyle['--select-shadow-focus'] = customColors.deuteranopiaShadowFocus
    } else if (colorVision === 'tritanopia') {
      customStyle['--select-bg'] = customColors.tritanopiaBg
      customStyle['--select-border'] = customColors.tritanopiaBorder
      customStyle['--select-border-focus'] = customColors.tritanopiaBorderFocus
      customStyle['--select-color'] = customColors.tritanopiaColor
      customStyle['--select-placeholder'] = customColors.tritanopiaPlaceholder
      customStyle['--select-shadow-focus'] = customColors.tritanopiaShadowFocus
    }
  }

  const rootClasses = [styles.select];
  const triggerClasses = [styles.trigger, styles[variant], styles[size], styles[fontSize]];
  const dropdownClasses = [styles.dropdown, styles[variant], styles[fontSize]];

  if (colorVision && colorVision !== 'normal') {
    rootClasses.push(styles[`cv-${colorVision}`]);
    triggerClasses.push(styles[`cv-${colorVision}`]);
    dropdownClasses.push(styles[`cv-${colorVision}`]);
  }
  if (accessibility && accessibility !== 'default') {
    rootClasses.push(styles[`a11y-${accessibility}`]);
    triggerClasses.push(styles[`a11y-${accessibility}`]);
    dropdownClasses.push(styles[`a11y-${accessibility}`]);
  }
  if (error) {
    triggerClasses.push(styles.error);
  }
  if (isOpen) {
    triggerClasses.push(styles.open);
    dropdownClasses.push(styles.open);
  }

  const selectedOption = options.find(opt => opt.value === value);
  const availableOptions = options.filter(opt => !opt.disabled);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setFocusedIndex(-1);
    }
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else if (focusedIndex >= 0) {
          handleSelect(availableOptions[focusedIndex].value);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex(prev => Math.min(prev + 1, availableOptions.length - 1));
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => Math.max(prev - 1, -1));
        }
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const selectId = `select-${label?.replace(/\s+/g, '-').toLowerCase() || 'field'}`;

  return (
    <div className={rootClasses.join(' ')} style={customStyle}>
      {label && (
        <label className={styles.label} htmlFor={selectId}>
          {label}
          {required && <span className={styles.required} aria-label="obligatorio">*</span>}
        </label>
      )}
      <div ref={containerRef} className={styles.container}>
        <div
          id={selectId}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={label ? `${selectId}-label` : undefined}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${selectId}-error` : undefined}
          tabIndex={disabled ? -1 : 0}
          className={triggerClasses.join(' ')}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
        >
          <span className={styles.value}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <div className={styles.arrow} aria-hidden="true">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <div ref={dropdownRef} className={dropdownClasses.join(' ')}>
          <ul role="listbox" className={styles.list}>
            {availableOptions.map((option, index) => (
              <li
                key={option.value}
                role="option"
                aria-selected={option.value === value}
                className={`${styles.option} ${
                  option.value === value ? styles.selected : ''
                } ${
                  index === focusedIndex ? styles.focused : ''
                }`}
                onClick={() => handleSelect(option.value)}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {error && (
        <div id={`${selectId}-error`} className={styles.errorMessage} role="alert">
          {error}
        </div>
      )}
    </div>
  );
};
