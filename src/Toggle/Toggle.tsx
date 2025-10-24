import React from 'react';
import styles from './Toggle.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';

export interface CustomToggleColors {
  // Normal vision colors
  defaultBg: string;
  defaultBorder: string;
  defaultBgOn: string;
  defaultBorderOn: string;
  defaultKnob: string;

  // Protanopia colors
  protanopiaBg: string;
  protanopiaBorder: string;
  protanopiaBgOn: string;
  protanopiaBorderOn: string;
  protanopiaKnob: string;

  // Deuteranopia colors
  deuteranopiaBg: string;
  deuteranopiaBorder: string;
  deuteranopiaBgOn: string;
  deuteranopiaBorderOn: string;
  deuteranopiaKnob: string;

  // Tritanopia colors
  tritanopiaBg: string;
  tritanopiaBorder: string;
  tritanopiaBgOn: string;
  tritanopiaBorderOn: string;
  tritanopiaKnob: string;
}

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  disabled?: boolean;
  customColors?: CustomToggleColors;
  style?: React.CSSProperties;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  disabled = false,
  customColors,
  style,
}) => {
  const rootClasses = [styles.toggle];
  const switchClasses = [styles.switch];

  // Crear estilos inline para customColors
  const customStyle = { ...style } as React.CSSProperties & { [key: string]: string }
  if (customColors) {
    // Aplicar colores según el modo de visión de color
    if (colorVision === 'normal') {
      customStyle['--toggle-bg'] = customColors.defaultBg
      customStyle['--toggle-border'] = customColors.defaultBorder
      customStyle['--toggle-bg-on'] = customColors.defaultBgOn
      customStyle['--toggle-border-on'] = customColors.defaultBorderOn
      customStyle['--toggle-knob'] = customColors.defaultKnob
    } else if (colorVision === 'protanopia') {
      customStyle['--toggle-bg'] = customColors.protanopiaBg
      customStyle['--toggle-border'] = customColors.protanopiaBorder
      customStyle['--toggle-bg-on'] = customColors.protanopiaBgOn
      customStyle['--toggle-border-on'] = customColors.protanopiaBorderOn
      customStyle['--toggle-knob'] = customColors.protanopiaKnob
    } else if (colorVision === 'deuteranopia') {
      customStyle['--toggle-bg'] = customColors.deuteranopiaBg
      customStyle['--toggle-border'] = customColors.deuteranopiaBorder
      customStyle['--toggle-bg-on'] = customColors.deuteranopiaBgOn
      customStyle['--toggle-border-on'] = customColors.deuteranopiaBorderOn
      customStyle['--toggle-knob'] = customColors.deuteranopiaKnob
    } else if (colorVision === 'tritanopia') {
      customStyle['--toggle-bg'] = customColors.tritanopiaBg
      customStyle['--toggle-border'] = customColors.tritanopiaBorder
      customStyle['--toggle-bg-on'] = customColors.tritanopiaBgOn
      customStyle['--toggle-border-on'] = customColors.tritanopiaBorderOn
      customStyle['--toggle-knob'] = customColors.tritanopiaKnob
    }
  }

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
    <div className={rootClasses.join(' ')} style={customStyle}>
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
    </div>
  );
};
