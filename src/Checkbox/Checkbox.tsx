import React, { useRef } from 'react';
import styles from './Checkbox.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'custom';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';
export type CheckboxSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface CustomCheckboxColors {
  // Normal vision colors
  defaultAccent: string;
  defaultBorder: string;
  defaultBg: string;
  defaultLabelColor: string;

  // Protanopia colors
  protanopiaAccent: string;
  protanopiaBorder: string;
  protanopiaBg: string;
  protanopiaLabelColor: string;

  // Deuteranopia colors
  deuteranopiaAccent: string;
  deuteranopiaBorder: string;
  deuteranopiaBg: string;
  deuteranopiaLabelColor: string;

  // Tritanopia colors
  tritanopiaAccent: string;
  tritanopiaBorder: string;
  tritanopiaBg: string;
  tritanopiaLabelColor: string;
}

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  checkboxSize?: CheckboxSize;
  disabled?: boolean;
  customColors?: CustomCheckboxColors;
  style?: React.CSSProperties;
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
  customColors,
  style,
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
  // Aplicar customColors solo cuando variant es 'custom'
  const customStyle = { ...style } as React.CSSProperties & { [key: string]: string }
  if (customColors && variant === 'custom') {
    // Aplicar colores según el modo de visión de color
    if (colorVision === 'normal') {
      customStyle['--checkbox-accent'] = customColors.defaultAccent
      customStyle['--checkbox-border'] = customColors.defaultBorder
      customStyle['--checkbox-bg'] = customColors.defaultBg
      customStyle['--checkbox-label-color'] = customColors.defaultLabelColor
    } else if (colorVision === 'protanopia') {
      customStyle['--checkbox-accent'] = customColors.protanopiaAccent
      customStyle['--checkbox-border'] = customColors.protanopiaBorder
      customStyle['--checkbox-bg'] = customColors.protanopiaBg
      customStyle['--checkbox-label-color'] = customColors.protanopiaLabelColor
    } else if (colorVision === 'deuteranopia') {
      customStyle['--checkbox-accent'] = customColors.deuteranopiaAccent
      customStyle['--checkbox-border'] = customColors.deuteranopiaBorder
      customStyle['--checkbox-bg'] = customColors.deuteranopiaBg
      customStyle['--checkbox-label-color'] = customColors.deuteranopiaLabelColor
    } else if (colorVision === 'tritanopia') {
      customStyle['--checkbox-accent'] = customColors.tritanopiaAccent
      customStyle['--checkbox-border'] = customColors.tritanopiaBorder
      customStyle['--checkbox-bg'] = customColors.tritanopiaBg
      customStyle['--checkbox-label-color'] = customColors.tritanopiaLabelColor
    }
  }

  const bigFont = accessibility === 'low-vision' ? { fontSize: '22px' } : {};

  return (
    <label className={classes.join(' ')} style={{ ...customStyle, ...bigFont }} htmlFor={inputId}>
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
