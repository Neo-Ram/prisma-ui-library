import React from 'react';
import styles from './Textarea.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FontSize = 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';

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
  className,
  ...rest
}) => {
  const rootClasses = [styles.textarea];
  const inputClasses = [styles.input, styles[variant], styles[textareaSize], styles[fontSize]];

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
