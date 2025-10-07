import React, { useRef } from 'react';
import styles from './Checkbox.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';
export type CheckboxSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  checkboxSize?: CheckboxSize;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  checkboxSize = 'md',
  className,
  id,
  disabled,
  ...rest
}) => {
  const [exploding, setExploding] = React.useState(false);
  const inputId = id || `checkbox-${Math.random().toString(36).slice(2,8)}`;
  const inputRef = useRef<HTMLInputElement>(null);

  const classes = [
    styles.checkbox,
    styles[variant],
    styles[checkboxSize],
  ];
  if (colorVision && colorVision !== 'normal') {
    classes.push(styles[`cv-${colorVision}`]);
  }
  if (className) classes.push(className);
  if (accessibility && accessibility !== 'default') {
    classes.push(styles[`a11y-${accessibility}`]);
  }

  const bigFont = accessibility === 'low-vision' ? { fontSize: '22px' } : {};

  return (
    <label className={classes.join(' ')} style={bigFont} htmlFor={inputId}>
      <input
        ref={inputRef}
        id={inputId}
        type="checkbox"
        className={styles.input + (exploding ? ' ' + styles.explode : '')}
        disabled={disabled}
        aria-checked={rest.checked}
        aria-disabled={disabled}
        {...rest}
        onChange={e => {
          if (rest.onChange) rest.onChange(e);
          if (e.target.checked) {
            setExploding(true);
            setTimeout(() => setExploding(false), 400);
          }
        }}
      />
      {label && (
        <span className={styles.label} style={bigFont}>{label}</span>
      )}
    </label>
  );
};
