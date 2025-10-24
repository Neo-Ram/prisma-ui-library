import React from 'react'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia'
type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type FontSize = 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl'

export type CustomColors = {
  defaultColor: string
  defaultColorHover: string
  defaultColorActive: string
  protanopiaColor: string
  protanopiaColorHover: string
  protanopiaColorActive: string
  deuteranopiaColor: string
  deuteranopiaColorHover: string
  deuteranopiaColorActive: string
  tritanopiaColor: string
  tritanopiaColorHover: string
  tritanopiaColorActive: string
  textColor?: string
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  variant?: Variant
  colorVision?: ColorVision
  accessibility?: AccessibilityMode
  size?: Size
  fontSize?: FontSize
  isLoading?: boolean
  loadingLabel?: string
  customColors?: CustomColors
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  size = 'md',
  fontSize = 'fs-md',
  isLoading = false,
  loadingLabel = 'Cargando',
  disabled,
  className,
  customColors,
  style,
  ...rest
}) => {
  const computedDisabled = disabled || isLoading

  const classes = [
    styles.btn, // base
    styles[variant],
    styles[size],
    styles[fontSize],
  ]

  // color vision mode
  if (colorVision && colorVision !== 'normal') {
    classes.push(styles[`cv-${colorVision}`])
  }

  // accessibility mode
  if (accessibility && accessibility !== 'default') {
    classes.push(styles[`a11y-${accessibility}`])
  }

  if (isLoading) classes.push(styles.loading)
  if (className) classes.push(className)

  // Crear estilos inline para customColors
  const customStyle = { ...style } as React.CSSProperties & { [key: string]: string }
  if (customColors) {
    customStyle['--btn-bg'] = customColors.defaultColor
    customStyle['--btn-bg-hover'] = customColors.defaultColorHover
    customStyle['--btn-bg-active'] = customColors.defaultColorActive
    
    if (customColors.textColor) {
      customStyle['--btn-color'] = customColors.textColor
    }

    // Protanopia
    if (colorVision === 'protanopia') {
      customStyle['--btn-bg'] = customColors.protanopiaColor
      customStyle['--btn-bg-hover'] = customColors.protanopiaColorHover
      customStyle['--btn-bg-active'] = customColors.protanopiaColorActive
    }

    // Deuteranopia
    if (colorVision === 'deuteranopia') {
      customStyle['--btn-bg'] = customColors.deuteranopiaColor
      customStyle['--btn-bg-hover'] = customColors.deuteranopiaColorHover
      customStyle['--btn-bg-active'] = customColors.deuteranopiaColorActive
    }

    // Tritanopia
    if (colorVision === 'tritanopia') {
      customStyle['--btn-bg'] = customColors.tritanopiaColor
      customStyle['--btn-bg-hover'] = customColors.tritanopiaColorHover
      customStyle['--btn-bg-active'] = customColors.tritanopiaColorActive
    }
  }

  return (
    <button
      type={rest.type ?? 'button'}
      className={classes.filter(Boolean).join(' ')}
      style={customStyle}
      disabled={computedDisabled}
      aria-disabled={computedDisabled || undefined}
      aria-busy={isLoading || undefined}
      aria-label={isLoading ? loadingLabel : rest['aria-label']}
      {...rest}
    >
      <span className={styles.content} aria-hidden={isLoading ? 'true' : undefined}>
        {children}
      </span>
      {isLoading && (
        <span className={styles.loader} aria-live="polite">
          <span className={styles.srOnly}>{loadingLabel}</span>
          <span className={styles.dots} aria-hidden="true">
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </span>
        </span>
      )}
    </button>
  )
}
