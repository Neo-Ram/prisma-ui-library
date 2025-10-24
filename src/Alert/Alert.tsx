import React, { useState } from 'react';
import styles from './Alert.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FontSize = 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
export type AlertType = 'info' | 'success' | 'warning' | 'error' | 'neutral';

export interface ColorVisionConfig {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  iconColor: string;
  titleColor: string;
}

export interface CustomAlertColors {
  // Normal vision colors
  defaultBg: string;
  defaultBorder: string;
  defaultColor: string;
  defaultIconColor: string;
  defaultTitleColor: string;

  // Protanopia colors
  protanopiaBg: string;
  protanopiaBorder: string;
  protanopiaColor: string;
  protanopiaIconColor: string;
  protanopiaTitleColor: string;

  // Deuteranopia colors
  deuteranopiaBg: string;
  deuteranopiaBorder: string;
  deuteranopiaColor: string;
  deuteranopiaIconColor: string;
  deuteranopiaTitleColor: string;

  // Tritanopia colors
  tritanopiaBg: string;
  tritanopiaBorder: string;
  tritanopiaColor: string;
  tritanopiaIconColor: string;
  tritanopiaTitleColor: string;
}

export interface AlertProps {
  children: React.ReactNode;
  title?: string;
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  size?: Size;
  fontSize?: FontSize;
  type?: AlertType;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
  showIcon?: boolean;
  role?: 'alert' | 'alertdialog' | 'status';
  ariaLabel?: string;
  className?: string;
  customColors?: CustomAlertColors;
  style?: React.CSSProperties;
}

const defaultEmojis = {
  primary: '💡',
  secondary: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  danger: '❌',
  info: '💡',
  neutral: 'ℹ️',
  error: '❌'
};

export const Alert: React.FC<AlertProps> = ({
  children,
  title,
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  size = 'md',
  fontSize = 'fs-md',
  type,
  dismissible = false,
  onDismiss,
  icon,
  showIcon = true,
  role = 'alert',
  ariaLabel,
  className,
  customColors,
  style,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  // Determinar el emoji basado en type o variant
  const getDefaultIcon = () => {
    if (type) {
      return defaultEmojis[type];
    }
    return defaultEmojis[variant];
  };

  const rootClasses = [styles.alert, styles[variant], styles[size], styles[fontSize]];

  if (colorVision && colorVision !== 'normal') {
    rootClasses.push(styles[`cv-${colorVision}`]);
  }
  if (accessibility && accessibility !== 'default') {
    rootClasses.push(styles[`a11y-${accessibility}`]);
  }
  if (type) {
    rootClasses.push(styles[`type-${type}`]);
  }
  if (dismissible) {
    rootClasses.push(styles.dismissible);
  }
  if (className) {
    rootClasses.push(className);
  }

  // Crear estilos inline para customColors
  const customStyle = { ...style } as React.CSSProperties & { [key: string]: string }
  if (customColors) {
    // Aplicar colores según el modo de visión de color
    if (colorVision === 'normal') {
      customStyle['--alert-bg'] = customColors.defaultBg
      customStyle['--alert-border'] = customColors.defaultBorder
      customStyle['--alert-color'] = customColors.defaultColor
      customStyle['--alert-icon-color'] = customColors.defaultIconColor
      customStyle['--alert-title-color'] = customColors.defaultTitleColor
    } else if (colorVision === 'protanopia') {
      customStyle['--alert-bg'] = customColors.protanopiaBg
      customStyle['--alert-border'] = customColors.protanopiaBorder
      customStyle['--alert-color'] = customColors.protanopiaColor
      customStyle['--alert-icon-color'] = customColors.protanopiaIconColor
      customStyle['--alert-title-color'] = customColors.protanopiaTitleColor
    } else if (colorVision === 'deuteranopia') {
      customStyle['--alert-bg'] = customColors.deuteranopiaBg
      customStyle['--alert-border'] = customColors.deuteranopiaBorder
      customStyle['--alert-color'] = customColors.deuteranopiaColor
      customStyle['--alert-icon-color'] = customColors.deuteranopiaIconColor
      customStyle['--alert-title-color'] = customColors.deuteranopiaTitleColor
    } else if (colorVision === 'tritanopia') {
      customStyle['--alert-bg'] = customColors.tritanopiaBg
      customStyle['--alert-border'] = customColors.tritanopiaBorder
      customStyle['--alert-color'] = customColors.tritanopiaColor
      customStyle['--alert-icon-color'] = customColors.tritanopiaIconColor
      customStyle['--alert-title-color'] = customColors.tritanopiaTitleColor
    }
  }

  return (
    <div
      className={rootClasses.join(' ')}
      role={role}
      aria-label={ariaLabel}
      aria-live={role === 'alert' ? 'assertive' : 'polite'}
      style={customStyle}
    >
      {showIcon && (
        <div className={styles.iconContainer}>
          {icon || <span className={styles.emoji}>{getDefaultIcon()}</span>}
        </div>
      )}
      
      <div className={styles.content}>
        {title && (
          <div className={styles.title}>
            {title}
          </div>
        )}
        <div className={styles.message}>
          {children}
        </div>
      </div>

      {dismissible && (
        <button
          type="button"
          className={styles.dismissButton}
          onClick={handleDismiss}
          aria-label="Cerrar alerta"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={styles.dismissIcon}
          >
            <path
              d="M12 4L4 12M4 4l8 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
