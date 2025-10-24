import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Tooltip.module.css';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type AccessibilityMode = 'default' | 'low-vision' | 'high-contrast';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FontSize = 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right' | 'auto';

export interface CustomTooltipColors {
  // Normal vision colors
  defaultBg: string;
  defaultColor: string;
  defaultBorder: string;

  // Protanopia colors
  protanopiaBg: string;
  protanopiaColor: string;
  protanopiaBorder: string;

  // Deuteranopia colors
  deuteranopiaBg: string;
  deuteranopiaColor: string;
  deuteranopiaBorder: string;

  // Tritanopia colors
  tritanopiaBg: string;
  tritanopiaColor: string;
  tritanopiaBorder: string;
}

export interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: TooltipPosition;
  variant?: Variant;
  colorVision?: ColorVision;
  accessibility?: AccessibilityMode;
  size?: Size;
  fontSize?: FontSize;
  disabled?: boolean;
  delay?: number;
  hideDelay?: number;
  arrow?: boolean;
  trigger?: 'hover' | 'click' | 'focus' | 'manual';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  maxWidth?: number;
  offset?: number;
  ariaLabel?: string;
  customColors?: CustomTooltipColors;
  style?: React.CSSProperties;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'auto',
  variant = 'primary',
  colorVision = 'normal',
  accessibility = 'default',
  size = 'md',
  fontSize = 'fs-md',
  disabled = false,
  delay = 500,
  hideDelay = 200,
  arrow = true,
  trigger = 'hover',
  open: controlledOpen,
  onOpenChange,
  maxWidth = 300,
  offset = 8,
  ariaLabel,
  customColors,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [actualPosition, setActualPosition] = useState<Exclude<TooltipPosition, 'auto'>>('top');
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Crear estilos inline para customColors
  const customStyle = { ...style } as React.CSSProperties & { [key: string]: string }
  if (customColors) {
    // Aplicar colores según el modo de visión de color
    if (colorVision === 'normal') {
      customStyle['--tooltip-bg'] = customColors.defaultBg
      customStyle['--tooltip-color'] = customColors.defaultColor
      customStyle['--tooltip-border'] = customColors.defaultBorder
    } else if (colorVision === 'protanopia') {
      customStyle['--tooltip-bg'] = customColors.protanopiaBg
      customStyle['--tooltip-color'] = customColors.protanopiaColor
      customStyle['--tooltip-border'] = customColors.protanopiaBorder
    } else if (colorVision === 'deuteranopia') {
      customStyle['--tooltip-bg'] = customColors.deuteranopiaBg
      customStyle['--tooltip-color'] = customColors.deuteranopiaColor
      customStyle['--tooltip-border'] = customColors.deuteranopiaBorder
    } else if (colorVision === 'tritanopia') {
      customStyle['--tooltip-bg'] = customColors.tritanopiaBg
      customStyle['--tooltip-color'] = customColors.tritanopiaColor
      customStyle['--tooltip-border'] = customColors.tritanopiaBorder
    }
  }

  const open = controlledOpen !== undefined ? controlledOpen : isOpen;

  const handleOpenChange = useCallback((newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen);
    } else {
      setIsOpen(newOpen);
    }
  }, [onOpenChange]);

  const showTooltip = useCallback(() => {
    if (disabled) return;
    
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      handleOpenChange(true);
    }, delay);
  }, [disabled, delay, handleOpenChange]);

  const hideTooltip = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    hideTimeoutRef.current = setTimeout(() => {
      handleOpenChange(false);
    }, hideDelay);
  }, [hideDelay, handleOpenChange]);

  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    let finalPosition = position;

    if (position === 'auto') {
      // Determinar la mejor posición basada en el espacio disponible
      const spaceTop = triggerRect.top;
      const spaceBottom = viewport.height - triggerRect.bottom;
      const spaceLeft = triggerRect.left;
      const spaceRight = viewport.width - triggerRect.right;

      if (spaceTop >= tooltipRect.height + offset) {
        finalPosition = 'top';
      } else if (spaceBottom >= tooltipRect.height + offset) {
        finalPosition = 'bottom';
      } else if (spaceRight >= tooltipRect.width + offset) {
        finalPosition = 'right';
      } else if (spaceLeft >= tooltipRect.width + offset) {
        finalPosition = 'left';
      } else {
        finalPosition = 'top'; // fallback
      }
    }

    setActualPosition(finalPosition as Exclude<TooltipPosition, 'auto'>);

    // Calcular la posición exacta en el DOM
    const tooltip = tooltipRef.current;
    let left = 0;
    let top = 0;

    switch (finalPosition) {
      case 'top':
        left = triggerRect.left + triggerRect.width / 2;
        top = triggerRect.top - offset;
        break;
      case 'bottom':
        left = triggerRect.left + triggerRect.width / 2;
        top = triggerRect.bottom + offset;
        break;
      case 'left':
        left = triggerRect.left - offset;
        top = triggerRect.top + triggerRect.height / 2;
        break;
      case 'right':
        left = triggerRect.right + offset;
        top = triggerRect.top + triggerRect.height / 2;
        break;
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }, [position, offset]);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      // Calcular posición después de que el tooltip sea visible
      setTimeout(() => {
        calculatePosition();
      }, 10);
    } else {
      // Delay para permitir que la animación de salida termine
      const timer = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [open, calculatePosition]);

  useEffect(() => {
    const handleResize = () => {
      if (open) calculatePosition();
    };

    const handleScroll = () => {
      if (open) calculatePosition();
    };

    if (open) {
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll, true);
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll, true);
      };
    }
  }, [open, calculatePosition]);

  const handleTriggerEvents = () => {
    const events: Record<string, (() => void) | ((e: React.MouseEvent | React.FocusEvent) => void)> = {};

    if (trigger === 'hover') {
      events.onMouseEnter = showTooltip;
      events.onMouseLeave = hideTooltip;
      events.onFocus = showTooltip;
      events.onBlur = hideTooltip;
    } else if (trigger === 'click') {
      events.onClick = () => handleOpenChange(!open);
    } else if (trigger === 'focus') {
      events.onFocus = showTooltip;
      events.onBlur = hideTooltip;
    }

    return events;
  };

  const tooltipClasses = [
    styles.tooltip,
    styles[variant],
    styles[size],
    styles[fontSize],
    styles[actualPosition],
    open ? styles.open : styles.closed,
  ];

  if (colorVision && colorVision !== 'normal') {
    tooltipClasses.push(styles[`cv-${colorVision}`]);
  }
  if (accessibility && accessibility !== 'default') {
    tooltipClasses.push(styles[`a11y-${accessibility}`]);
  }

  const tooltipId = React.useId();

  if (!content || disabled) {
    return <>{children}</>;
  }

  return (
    <>
      <div
        ref={triggerRef}
        className={styles.trigger}
        aria-describedby={open ? tooltipId : undefined}
        {...handleTriggerEvents()}
      >
        {children}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          aria-label={ariaLabel}
          className={tooltipClasses.join(' ')}
          style={{
            ...customStyle,
            maxWidth: `${maxWidth}px`,
            '--tooltip-offset': `${offset}px`,
          } as React.CSSProperties}
        >
          <div className={styles.content}>
            {content}
          </div>
          {arrow && <div className={styles.arrow} />}
        </div>
      )}
    </>
  );
};
