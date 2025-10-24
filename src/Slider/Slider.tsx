import React from 'react';
import styles from './Slider.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'custom';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';

export interface CustomSliderColors {
  // Normal vision colors
  defaultTrackBg: string;
  defaultTrackBorder: string;
  defaultFillBg: string;
  defaultThumbBg: string;
  defaultThumbBorder: string;

  // Protanopia colors
  protanopiaTrackBg: string;
  protanopiaTrackBorder: string;
  protanopiaFillBg: string;
  protanopiaThumbBg: string;
  protanopiaThumbBorder: string;

  // Deuteranopia colors
  deuteranopiaTrackBg: string;
  deuteranopiaTrackBorder: string;
  deuteranopiaFillBg: string;
  deuteranopiaThumbBg: string;
  deuteranopiaThumbBorder: string;

  // Tritanopia colors
  tritanopiaTrackBg: string;
  tritanopiaTrackBorder: string;
  tritanopiaFillBg: string;
  tritanopiaThumbBg: string;
  tritanopiaThumbBorder: string;
}

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  disabled?: boolean;
  showValue?: boolean;
  customColors?: CustomSliderColors;
  style?: React.CSSProperties;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  disabled = false,
  showValue = true,
  customColors,
  style,
}) => {
  const rootClasses = [styles.slider];
  const trackClasses = [styles.track];
  const thumbClasses = [styles.thumb];

  // Aplicar customColors solo cuando variant es 'custom'
  const customStyle = { ...style } as React.CSSProperties & { [key: string]: string }
  if (customColors && variant === 'custom') {
    // Aplicar colores según el modo de visión de color
    if (colorVision === 'normal') {
      customStyle['--slider-track-bg'] = customColors.defaultTrackBg
      customStyle['--slider-track-border'] = customColors.defaultTrackBorder
      customStyle['--slider-fill-bg'] = customColors.defaultFillBg
      customStyle['--slider-thumb-bg'] = customColors.defaultThumbBg
      customStyle['--slider-thumb-border'] = customColors.defaultThumbBorder
    } else if (colorVision === 'protanopia') {
      customStyle['--slider-track-bg'] = customColors.protanopiaTrackBg
      customStyle['--slider-track-border'] = customColors.protanopiaTrackBorder
      customStyle['--slider-fill-bg'] = customColors.protanopiaFillBg
      customStyle['--slider-thumb-bg'] = customColors.protanopiaThumbBg
      customStyle['--slider-thumb-border'] = customColors.protanopiaThumbBorder
    } else if (colorVision === 'deuteranopia') {
      customStyle['--slider-track-bg'] = customColors.deuteranopiaTrackBg
      customStyle['--slider-track-border'] = customColors.deuteranopiaTrackBorder
      customStyle['--slider-fill-bg'] = customColors.deuteranopiaFillBg
      customStyle['--slider-thumb-bg'] = customColors.deuteranopiaThumbBg
      customStyle['--slider-thumb-border'] = customColors.deuteranopiaThumbBorder
    } else if (colorVision === 'tritanopia') {
      customStyle['--slider-track-bg'] = customColors.tritanopiaTrackBg
      customStyle['--slider-track-border'] = customColors.tritanopiaTrackBorder
      customStyle['--slider-fill-bg'] = customColors.tritanopiaFillBg
      customStyle['--slider-thumb-bg'] = customColors.tritanopiaThumbBg
      customStyle['--slider-thumb-border'] = customColors.tritanopiaThumbBorder
    }
  }

  if (variant) {
    rootClasses.push(styles[variant]);
    trackClasses.push(styles[variant]);
    thumbClasses.push(styles[variant]);
  }
  if (colorVision && colorVision !== 'normal') {
    rootClasses.push(styles[`cv-${colorVision}`]);
    trackClasses.push(styles[`cv-${colorVision}`]);
    thumbClasses.push(styles[`cv-${colorVision}`]);
  }
  if (accessibility && accessibility !== 'default') {
    rootClasses.push(styles[`a11y-${accessibility}`]);
    trackClasses.push(styles[`a11y-${accessibility}`]);
    thumbClasses.push(styles[`a11y-${accessibility}`]);
  }

  const percentage = ((value - min) / (max - min)) * 100;



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(parseFloat(e.target.value));
    }
  };

  const handleInputMove = (e: React.FormEvent<HTMLInputElement>) => {
    if (!disabled) {
      const target = e.target as HTMLInputElement;
      const newValue = parseFloat(target.value);
      const newPercentage = ((newValue - min) / (max - min)) * 100;
      
      // Update custom thumb position immediately
      const container = target.parentElement;
      const thumb = container?.querySelector(`.${styles.thumb}`) as HTMLElement;
      if (thumb) {
        thumb.style.left = `${newPercentage}%`;
      }
      
      // Update fill bar immediately
      const fill = container?.querySelector(`.${styles.fill}`) as HTMLElement;
      if (fill) {
        fill.style.width = `${newPercentage}%`;
      }
    }
  };

  return (
    <div className={rootClasses.join(' ')}>
      {label && <label className={styles.label} htmlFor={`slider-${label}`}>{label}</label>}
      <div className={styles.container}>
        <div className={trackClasses.join(' ')} style={customStyle}>
          <div 
            className={styles.fill} 
            style={{ width: `${percentage}%` }}
          />
          <input
            id={`slider-${label}`}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleInputChange}
            onInput={handleInputMove}
            disabled={disabled}
            className={styles.input}
            aria-label={label || 'Slider'}
          />
          <div 
            className={thumbClasses.join(' ')} 
            style={{ left: `${percentage}%` }}
          />
        </div>
        {showValue && (
          <span className={styles.value}>{value}</span>
        )}
      </div>
    </div>
  );
};
