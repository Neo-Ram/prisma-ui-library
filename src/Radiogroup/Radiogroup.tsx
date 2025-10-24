import React from 'react';
import styles from './Radiogroup.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FontSize = 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
export type Direction = 'vertical' | 'horizontal';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
}

export interface CustomRadiogroupColors {
  // Normal vision colors
  defaultColor: string;
  defaultBorderColor: string;
  defaultBorderColorHover: string;
  defaultBorderColorFocus: string;
  defaultLabelColor: string;
  defaultDescriptionColor: string;

  // Protanopia colors
  protanopiaColor: string;
  protanopiaBorderColor: string;
  protanopiaBorderColorHover: string;
  protanopiaBorderColorFocus: string;
  protanopiaLabelColor: string;
  protanopiaDescriptionColor: string;

  // Deuteranopia colors
  deuteranopiaColor: string;
  deuteranopiaBorderColor: string;
  deuteranopiaBorderColorHover: string;
  deuteranopiaBorderColorFocus: string;
  deuteranopiaLabelColor: string;
  deuteranopiaDescriptionColor: string;

  // Tritanopia colors
  tritanopiaColor: string;
  tritanopiaBorderColor: string;
  tritanopiaBorderColorHover: string;
  tritanopiaBorderColorFocus: string;
  tritanopiaLabelColor: string;
  tritanopiaDescriptionColor: string;
}

export interface RadiogroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  size?: Size;
  fontSize?: FontSize;
  direction?: Direction;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  description?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  customColors?: CustomRadiogroupColors;
  style?: React.CSSProperties;
}

export const Radiogroup: React.FC<RadiogroupProps> = ({
  name,
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  size = 'md',
  fontSize = 'fs-md',
  direction = 'vertical',
  disabled = false,
  required = false,
  error = false,
  errorMessage,
  label,
  description,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  customColors,
  style,
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || '');
  
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleChange = (optionValue: string) => {
    if (disabled) return;
    
    if (!isControlled) {
      setInternalValue(optionValue);
    }
    
    if (onChange) {
      onChange(optionValue);
    }
  };

  const groupId = React.useId();
  const descriptionId = React.useId();
  const errorId = React.useId();

  // Crear estilos inline para customColors
  const customStyle = { ...style } as React.CSSProperties & { [key: string]: string }
  if (customColors) {
    // Aplicar colores según el modo de visión de color
    if (colorVision === 'normal') {
      customStyle['--radio-color'] = customColors.defaultColor
      customStyle['--radio-border-color'] = customColors.defaultBorderColor
      customStyle['--radio-border-color-hover'] = customColors.defaultBorderColorHover
      customStyle['--radio-border-color-focus'] = customColors.defaultBorderColorFocus
      customStyle['--radio-label-color'] = customColors.defaultLabelColor
      customStyle['--radio-description-color'] = customColors.defaultDescriptionColor
    } else if (colorVision === 'protanopia') {
      customStyle['--radio-color'] = customColors.protanopiaColor
      customStyle['--radio-border-color'] = customColors.protanopiaBorderColor
      customStyle['--radio-border-color-hover'] = customColors.protanopiaBorderColorHover
      customStyle['--radio-border-color-focus'] = customColors.protanopiaBorderColorFocus
      customStyle['--radio-label-color'] = customColors.protanopiaLabelColor
      customStyle['--radio-description-color'] = customColors.protanopiaDescriptionColor
    } else if (colorVision === 'deuteranopia') {
      customStyle['--radio-color'] = customColors.deuteranopiaColor
      customStyle['--radio-border-color'] = customColors.deuteranopiaBorderColor
      customStyle['--radio-border-color-hover'] = customColors.deuteranopiaBorderColorHover
      customStyle['--radio-border-color-focus'] = customColors.deuteranopiaBorderColorFocus
      customStyle['--radio-label-color'] = customColors.deuteranopiaLabelColor
      customStyle['--radio-description-color'] = customColors.deuteranopiaDescriptionColor
    } else if (colorVision === 'tritanopia') {
      customStyle['--radio-color'] = customColors.tritanopiaColor
      customStyle['--radio-border-color'] = customColors.tritanopiaBorderColor
      customStyle['--radio-border-color-hover'] = customColors.tritanopiaBorderColorHover
      customStyle['--radio-border-color-focus'] = customColors.tritanopiaBorderColorFocus
      customStyle['--radio-label-color'] = customColors.tritanopiaLabelColor
      customStyle['--radio-description-color'] = customColors.tritanopiaDescriptionColor
    }
  }

  const rootClasses = [
    styles.radiogroup,
    styles[variant],
    styles[size],
    styles[fontSize],
    styles[direction]
  ];

  if (colorVision && colorVision !== 'normal') {
    rootClasses.push(styles[`cv-${colorVision}`]);
  }
  if (accessibility && accessibility !== 'default') {
    rootClasses.push(styles[`a11y-${accessibility}`]);
  }
  if (disabled) {
    rootClasses.push(styles.disabled);
  }
  if (error) {
    rootClasses.push(styles.error);
  }

  const getAriaDescribedBy = () => {
    const ids = [];
    if (description) ids.push(descriptionId);
    if (error && errorMessage) ids.push(errorId);
    if (ariaDescribedBy) ids.push(ariaDescribedBy);
    return ids.length > 0 ? ids.join(' ') : undefined;
  };

  return (
    <fieldset 
      className={rootClasses.join(' ')}
      disabled={disabled}
      aria-required={required}
      aria-invalid={error}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={getAriaDescribedBy()}
      style={customStyle}
    >
      {label && (
        <legend className={styles.legend}>
          {label}
          {required && <span className={styles.required} aria-label="requerido">*</span>}
        </legend>
      )}
      
      {description && (
        <div id={descriptionId} className={styles.description}>
          {description}
        </div>
      )}

      <div 
        className={styles.optionsContainer}
        role="radiogroup" 
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy || (label ? groupId : undefined)}
      >
        {options.map((option, index) => {
          const optionId = `${groupId}-option-${index}`;
          const isSelected = currentValue === option.value;
          const isDisabled = disabled || option.disabled;

          const optionClasses = [styles.option];
          if (isSelected) optionClasses.push(styles.selected);
          if (isDisabled) optionClasses.push(styles.optionDisabled);

          return (
            <label 
              key={option.value} 
              htmlFor={optionId}
              className={optionClasses.join(' ')}
            >
              <input
                type="radio"
                id={optionId}
                name={name}
                value={option.value}
                checked={isSelected}
                disabled={isDisabled}
                onChange={() => handleChange(option.value)}
                className={styles.input}
                aria-describedby={option.description ? `${optionId}-desc` : undefined}
              />
              
              <div className={styles.radioButton}>
                <div className={styles.radioIndicator} />
              </div>
              
              <div className={styles.labelContent}>
                <span className={styles.labelText}>
                  {option.label}
                </span>
                {option.description && (
                  <span id={`${optionId}-desc`} className={styles.optionDescription}>
                    {option.description}
                  </span>
                )}
              </div>
            </label>
          );
        })}
      </div>

      {error && errorMessage && (
        <div id={errorId} className={styles.errorMessage} role="alert">
          {errorMessage}
        </div>
      )}
    </fieldset>
  );
};
