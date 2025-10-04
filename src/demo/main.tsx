import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Checkbox } from '../Checkbox/Checkbox'
import { Toggle } from '../Toggle/Toggle'
import { Slider } from '../Slider/Slider'



function CheckboxDemoInline(props: import('../Checkbox/Checkbox').CheckboxProps) {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox
      label="Acepto los términos"
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
      {...props}
    />
  );
}

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type FontSize = 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl'
type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia'
type Accessibility = 'default' | 'low-vision' | 'high-contrast'

const variants: Variant[] = ['primary','secondary','success','warning','danger']
const sizes: Size[] = ['xs','sm','md','lg','xl']
const fontSizes: FontSize[] = ['fs-xs','fs-sm','fs-md','fs-lg','fs-xl']
const colorModes: ColorVision[] = ['normal','protanopia','deuteranopia','tritanopia']
const a11yModes: Accessibility[] = ['default','low-vision','high-contrast']

export function Controls(props: {
  variant: Variant, setVariant: (v: Variant)=>void,
  size: Size, setSize: (v: Size)=>void,
  fontSize: FontSize, setFontSize: (v: FontSize)=>void,
  colorVision: ColorVision, setColorVision: (v: ColorVision)=>void,
  accessibility: Accessibility, setAccessibility: (v: Accessibility)=>void,
  isLoading: boolean, setIsLoading: (b: boolean)=>void,
  disabled: boolean, setDisabled: (b: boolean)=>void,
}){
  return (
    <div style={{display:'grid',gap:12, gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', alignItems:'end'}}>
      <label>Variante
        <select value={props.variant} onChange={e=>props.setVariant(e.target.value as Variant)}>
          {variants.map(v=> <option key={v} value={v}>{v}</option>)}
        </select>
      </label>
      <label>Tamaño botón
        <select value={props.size} onChange={e=>props.setSize(e.target.value as Size)}>
          {sizes.map(v=> <option key={v} value={v}>{v}</option>)}
        </select>
      </label>
      <label>Tamaño fuente
        <select value={props.fontSize} onChange={e=>props.setFontSize(e.target.value as FontSize)}>
          {fontSizes.map(v=> <option key={v} value={v}>{v}</option>)}
        </select>
      </label>
      <label>Daltonismo
        <select value={props.colorVision} onChange={e=>props.setColorVision(e.target.value as ColorVision)}>
          {colorModes.map(v=> <option key={v} value={v}>{v}</option>)}
        </select>
      </label>
      <label>Accesibilidad
        <select value={props.accessibility} onChange={e=>props.setAccessibility(e.target.value as Accessibility)}>
          {a11yModes.map(v=> <option key={v} value={v}>{v}</option>)}
        </select>
      </label>
      <label style={{display:'flex',gap:8,alignItems:'center'}}>
        <input type="checkbox" checked={props.isLoading} onChange={e=>props.setIsLoading(e.target.checked)} />
        isLoading
      </label>
      <label style={{display:'flex',gap:8,alignItems:'center'}}>
        <input type="checkbox" checked={props.disabled} onChange={e=>props.setDisabled(e.target.checked)} />
        disabled
      </label>
    </div>
  )
}

export function Grid(props: {variant: Variant, size: Size, fontSize: FontSize, colorVision: ColorVision, accessibility: Accessibility, isLoading: boolean, disabled: boolean}){
  const {variant, size, fontSize, colorVision, accessibility, isLoading, disabled} = props
  const gridStyle: React.CSSProperties = useMemo(()=>({
    display:'grid', gap: 12,
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))'
  }), [])

  return (
    <div style={gridStyle}>
      {variants.map(v => (
        <div key={v} style={{display:'grid', gap:8, border: v===variant? '1px solid #999' : '1px solid transparent', borderRadius:8, padding:8}} aria-current={v===variant ? 'true' : undefined}>
          <div style={{fontSize:12, opacity:.7}}>variant: {v} {v===variant ? '(seleccionado)' : ''}</div>
          <Button
            variant={v}
            size={size}
            fontSize={fontSize}
            colorVision={colorVision}
            accessibility={accessibility}
            isLoading={isLoading}
            disabled={disabled}
          >
            {isLoading ? 'Procesando' : 'Ejemplo'}
          </Button>
        </div>
      ))}
    </div>
  )
}

export function App(){
  const [variant, setVariant] = useState<Variant>('primary')
  const [size, setSize] = useState<Size>('md')
  const [fontSize, setFontSize] = useState<FontSize>('fs-md')
  const [colorVision, setColorVision] = useState<ColorVision>('normal')
  const [accessibility, setAccessibility] = useState<Accessibility>('default')
  const [isLoading, setIsLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [toggleChecked, setToggleChecked] = useState(false)
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <div style={{padding:20, display:'grid', gap:16}}>
      <h1>Demo Button accesible</h1>
      <p style={{marginTop:-8, opacity:.8}}>Cambia las props y observa las variantes en la cuadrícula.</p>
      <Controls
        variant={variant} setVariant={setVariant}
        size={size} setSize={setSize}
        fontSize={fontSize} setFontSize={setFontSize}
        colorVision={colorVision} setColorVision={setColorVision}
        accessibility={accessibility} setAccessibility={setAccessibility}
        isLoading={isLoading} setIsLoading={setIsLoading}
        disabled={disabled} setDisabled={setDisabled}
      />
      <hr />
      <Grid
        variant={variant}
        size={size}
        fontSize={fontSize}
        colorVision={colorVision}
        accessibility={accessibility}
        isLoading={isLoading}
        disabled={disabled}
      />
      <hr />
      <div>
        <h2>Demo Input accesible</h2>
        <Input
          type='password'
          label="Nombre"
          placeholder="Escribe tu nombre"
          variant={variant}
          inputSize={size}
          fontSize={fontSize}
          colorVision={colorVision}
          accessibility={accessibility}
          disabled={disabled}
        />
      </div>
      <div>
        <h2>Demo Checkbox accesible</h2>
        <CheckboxDemoInline
          variant={variant}
          checkboxSize={size}
          fontSize={fontSize}
          colorVision={colorVision}
          accessibility={accessibility}
          disabled={disabled}
        />
      </div>
      <div>
        <h2>Demo Toggle accesible</h2>
        <ToggleDemoInline
          checked={toggleChecked}
          onChange={setToggleChecked}
          variant={variant}
          colorVision={colorVision}
          accessibility={accessibility}
          disabled={disabled}
        />
      </div>
      <div>
        <h2>Demo Slider accesible</h2>
        <SliderDemoInline
          value={sliderValue}
          onChange={setSliderValue}
          variant={variant}
          colorVision={colorVision}
          accessibility={accessibility}
          disabled={disabled}
        />
      </div>
      <div style={{opacity:.7, fontSize:12}}>
        Sugerencia: habilita "High Contrast" del sistema o "prefers-reduced-motion" para probar ajustes.
      </div>
    </div>
  )
}

const rootEl = document.getElementById('root')!
createRoot(rootEl).render(<App />)

// Demo Toggle Inline
function ToggleDemoInline(props: import('../Toggle/Toggle').ToggleProps) {
  return (
    <Toggle
      label="¿Activar opción?"
      checked={props.checked}
      onChange={props.onChange}
      variant={props.variant}
      colorVision={props.colorVision}
      accessibility={props.accessibility}
      disabled={props.disabled}
    />
  );
}

// Demo Slider Inline
function SliderDemoInline(props: import('../Slider/Slider').SliderProps) {
  return (
    <Slider
      label="Selecciona un valor"
      value={props.value}
      onChange={props.onChange}
      min={0}
      max={100}
      step={1}
      variant={props.variant}
      colorVision={props.colorVision}
      accessibility={props.accessibility}
      disabled={props.disabled}
      showValue={true}
    />
  );
}
