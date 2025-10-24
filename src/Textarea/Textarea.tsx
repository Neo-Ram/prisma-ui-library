import React from 'react';
import styles from './Textarea.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'custom';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FontSize = 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';

export interface CustomTextareaColors {
  // Normal vision colors
  defaultBg: string;
  defaultBorder: string;
  defaultBorderFocus: string;
  defaultColor: string;
  defaultPlaceholder: string;

  // Protanopia colors
  protanopiaBg: string;
  protanopiaBorder: string;
  protanopiaBorderFocus: string;
  protanopiaColor: string;
  protanopiaPlaceholder: string;

  // Deuteranopia colors
  deuteranopiaBg: string;
  deuteranopiaBorder: string;
  deuteranopiaBorderFocus: string;
  deuteranopiaColor: string;
  deuteranopiaPlaceholder: string;

  // Tritanopia colors
  tritanopiaBg: string;
  tritanopiaBorder: string;
  tritanopiaBorderFocus: string;
  tritanopiaColor: string;
  tritanopiaPlaceholder: string;
}

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  placeholder?: string;
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  textareaSize?: Size;
  fontSize?: FontSize;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  rows?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  customColors?: CustomTextareaColors;
  style?: React.CSSProperties;
}

export const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  label,
  placeholder,
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  textareaSize = 'md',
  fontSize = 'fs-md',
  disabled = false,
  required = false,
  error,
  rows = 4,
  resize = 'vertical',
  customColors,
  style,
  className,
  ...rest
}) => {
  const rootClasses = [styles.textarea];
  const inputClasses = [styles.input, styles[variant], styles[textareaSize], styles[fontSize]];

  // Aplicar customColors solo cuando variant es 'custom'
  const customStyle = { ...style } as React.CSSProperties & { [key: string]: string }
  if (customColors && variant === 'custom') {
    // Aplicar colores según el modo de visión de color
    if (colorVision === 'normal') {
      customStyle['--textarea-bg'] = customColors.defaultBg
      customStyle['--textarea-border'] = customColors.defaultBorder
      customStyle['--textarea-border-focus'] = customColors.defaultBorderFocus
      customStyle['--textarea-color'] = customColors.defaultColor
      customStyle['--textarea-placeholder'] = customColors.defaultPlaceholder
    } else if (colorVision === 'protanopia') {
      customStyle['--textarea-bg'] = customColors.protanopiaBg
      customStyle['--textarea-border'] = customColors.protanopiaBorder
      customStyle['--textarea-border-focus'] = customColors.protanopiaBorderFocus
      customStyle['--textarea-color'] = customColors.protanopiaColor
      customStyle['--textarea-placeholder'] = customColors.protanopiaPlaceholder
    } else if (colorVision === 'deuteranopia') {
      customStyle['--textarea-bg'] = customColors.deuteranopiaBg
      customStyle['--textarea-border'] = customColors.deuteranopiaBorder
      customStyle['--textarea-border-focus'] = customColors.deuteranopiaBorderFocus
      customStyle['--textarea-color'] = customColors.deuteranopiaColor
      customStyle['--textarea-placeholder'] = customColors.deuteranopiaPlaceholder
    } else if (colorVision === 'tritanopia') {
      customStyle['--textarea-bg'] = customColors.tritanopiaBg
      customStyle['--textarea-border'] = customColors.tritanopiaBorder
      customStyle['--textarea-border-focus'] = customColors.tritanopiaBorderFocus
      customStyle['--textarea-color'] = customColors.tritanopiaColor
      customStyle['--textarea-placeholder'] = customColors.tritanopiaPlaceholder
    }
  }

  if (colorVision && colorVision !== 'normal') {
    rootClasses.push(styles[`cv-${colorVision}`]);
    inputClasses.push(styles[`cv-${colorVision}`]);
  }
  if (accessibility && accessibility !== 'default') {
    rootClasses.push(styles[`a11y-${accessibility}`]);
    inputClasses.push(styles[`a11y-${accessibility}`]);
  }
  if (error) {
    inputClasses.push(styles.error);
  }
  if (resize !== 'both') {
    inputClasses.push(styles[`resize-${resize}`]);
  }
  if (className) {
    rootClasses.push(className);
  }

  const textareaId = `textarea-${label?.replace(/\s+/g, '-').toLowerCase() || 'field'}`;

  return (
    <div className={rootClasses.join(' ')}>
      {label && (
        <label className={styles.label} htmlFor={textareaId}>
          {label}
          {required && <span className={styles.required} aria-label="obligatorio">*</span>}
        </label>
      )}
      <div className={styles.container}>
        <textarea
          id={textareaId}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={rows}
          className={inputClasses.join(' ')}
          style={customStyle}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...rest}
        />
      </div>
      {error && (
        <div id={`${textareaId}-error`} className={styles.errorMessage} role="alert">
          {error}
        </div>
      )}
    </div>
  );
};
