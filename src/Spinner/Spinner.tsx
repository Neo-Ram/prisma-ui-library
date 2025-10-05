import React from 'react';
import styles from './Spinner.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerVariant = '1' | '2' | '3' | '4' | '5';

export interface SpinnerProps {
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  size?: Size;
  spinnerVariant?: SpinnerVariant;
  label?: string;
  ariaLabel?: string;
  speed?: 'slow' | 'normal' | 'fast';
  show?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  size = 'md',
  spinnerVariant = '1',
  label,
  ariaLabel,
  speed = 'normal',
  show = true,
}) => {
  if (!show) return null;

  const rootClasses = [
    styles.spinner,
    styles[variant],
    styles[size],
    styles[`variant${spinnerVariant}`],
    styles[`speed-${speed}`]
  ];

  if (colorVision && colorVision !== 'normal') {
    rootClasses.push(styles[`cv-${colorVision}`]);
  }
  if (accessibility && accessibility !== 'default') {
    rootClasses.push(styles[`a11y-${accessibility}`]);
  }

  const renderSpinner = () => {
    switch (spinnerVariant) {
      case '1':
        // Circular spinner clásico
        return (
          <div className={styles.circularSpinner}>
            <div className={styles.circularRing}></div>
          </div>
        );
      
      case '2':
        // Dots pulsantes
        return (
          <div className={styles.dotsSpinner}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        );
      
      case '3':
        // Barras deslizantes
        return (
          <div className={styles.barsSpinner}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        );
      
      case '4':
        // Grid de cuadrados
        return (
          <div className={styles.gridSpinner}>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
          </div>
        );
      
      case '5':
        // Wave/Onda
        return (
          <div className={styles.waveSpinner}>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const effectiveAriaLabel = ariaLabel || 'Cargando...';

  return (
    <div 
      className={rootClasses.join(' ')}
      role="status"
      aria-label={effectiveAriaLabel}
      aria-live="polite"
    >
      {renderSpinner()}
      {label && (
        <div className={styles.label} aria-hidden="true">
          {label}
        </div>
      )}
      {/* Screen reader only text */}
      <span className={styles.srOnly}>{effectiveAriaLabel}</span>
    </div>
  );
};
