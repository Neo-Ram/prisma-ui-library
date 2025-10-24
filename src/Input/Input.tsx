
import React, { useRef, useState } from 'react'
import styles from './Input.module.css'

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';
export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FontSize = 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';

export interface CustomInputColors {
  // Normal vision colors
  defaultBorder: string;
  defaultBorderFocus: string;
  defaultColor: string;
  defaultBg: string;

  // Protanopia colors
  protanopiaBorder: string;
  protanopiaBorderFocus: string;
  protanopiaColor: string;
  protanopiaBg: string;

  // Deuteranopia colors
  deuteranopiaBorder: string;
  deuteranopiaBorderFocus: string;
  deuteranopiaColor: string;
  deuteranopiaBg: string;

  // Tritanopia colors
  tritanopiaBorder: string;
  tritanopiaBorderFocus: string;
  tritanopiaColor: string;
  tritanopiaBg: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  inputSize?: InputSize;
  fontSize?: FontSize;
  customColors?: CustomInputColors;
  style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  label,
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  inputSize = 'md',
  fontSize = 'fs-md',
  className,
  value,
  defaultValue,
  placeholder,
  id,
  type,
  customColors,
  style,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Crear estilos inline para customColors
  const customStyle = { ...style } as React.CSSProperties & { [key: string]: string }
  if (customColors) {
    // Aplicar colores según el modo de visión de color
    if (colorVision === 'normal') {
      customStyle['--input-border'] = customColors.defaultBorder
      customStyle['--input-border-focus'] = customColors.defaultBorderFocus
      customStyle['--input-color'] = customColors.defaultColor
      customStyle['--input-bg'] = customColors.defaultBg
    } else if (colorVision === 'protanopia') {
      customStyle['--input-border'] = customColors.protanopiaBorder
      customStyle['--input-border-focus'] = customColors.protanopiaBorderFocus
      customStyle['--input-color'] = customColors.protanopiaColor
      customStyle['--input-bg'] = customColors.protanopiaBg
    } else if (colorVision === 'deuteranopia') {
      customStyle['--input-border'] = customColors.deuteranopiaBorder
      customStyle['--input-border-focus'] = customColors.deuteranopiaBorderFocus
      customStyle['--input-color'] = customColors.deuteranopiaColor
      customStyle['--input-bg'] = customColors.deuteranopiaBg
    } else if (colorVision === 'tritanopia') {
      customStyle['--input-border'] = customColors.tritanopiaBorder
      customStyle['--input-border-focus'] = customColors.tritanopiaBorderFocus
      customStyle['--input-color'] = customColors.tritanopiaColor
      customStyle['--input-bg'] = customColors.tritanopiaBg
    }
  }

  const classes = [
    styles.input,
    styles[variant],
    styles[inputSize],
    styles[fontSize],
  ]
  if (colorVision && colorVision !== 'normal') {
    classes.push(styles[`cv-${colorVision}`])
  }
  if (className) classes.push(className)
  // Asegura que .a11y-low-vision esté al final para máxima prioridad
  if (accessibility && accessibility !== 'default') {
    classes.push(styles[`a11y-${accessibility}`])
  }

  const inputId = id || `input-${Math.random().toString(36).slice(2,8)}`

  // Si es baja visión, fuerza font-size grande en label y input
  const bigFont = accessibility === 'low-vision' ? { fontSize: '18px' } : {}
  return (
    <div className={styles.wrapper}>
      {label && (
        <div className={styles.labelStatic} style={bigFont}>
          <label htmlFor={inputId} style={bigFont}>{label}</label>
        </div>
      )}
      <div style={{position:'relative'}}>
        <input
          id={inputId}
          ref={inputRef}
          className={classes.join(' ')}
          style={{ ...customStyle, ...bigFont }}
          placeholder={placeholder}
          aria-label={label || placeholder}
          value={value}
          defaultValue={defaultValue}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          {...rest}
        />
        {type === 'password' && (
          <button
            type="button"
            tabIndex={0}
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            onClick={() => setShowPassword(v => !v)}
            style={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              fontSize: bigFont.fontSize || '16px',
              color: '#888',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {showPassword ? (
              // Ojo abierto (contraseña visible)
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              // Ojo cerrado (contraseña oculta)
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.07 21.07 0 0 1 5.06-6.06" />
                <path d="M1 1l22 22" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
