import React from 'react';
import styles from './Toggle.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  disabled = false,
}) => {
  const rootClasses = [styles.toggle];
  const switchClasses = [styles.switch];
  if (variant) {
    rootClasses.push(styles[variant]);
    switchClasses.push(styles[variant]);
  }
  if (colorVision && colorVision !== 'normal') {
    rootClasses.push(styles[`cv-${colorVision}`]);
    switchClasses.push(styles[`cv-${colorVision}`]);
  }
  if (accessibility && accessibility !== 'default') {
    rootClasses.push(styles[`a11y-${accessibility}`]);
    switchClasses.push(styles[`a11y-${accessibility}`]);
  }

  return (
    <label className={rootClasses.join(' ')}>
      <span className={styles.label}>{label}</span>
      <span
        tabIndex={0}
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        className={switchClasses.join(' ') + (checked ? ` ${styles.on}` : '')}
        onClick={() => !disabled && onChange(!checked)}
        onKeyDown={e => {
          if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
            e.preventDefault();
            onChange(!checked);
          }
        }}
      >
        <span className={styles.knob} />
      </span>
    </label>
  );
};
