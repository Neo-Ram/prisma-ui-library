import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Checkbox } from '../Checkbox/Checkbox'
import { Radiogroup } from '../Radiogroup/Radiogroup'
import { Toggle } from '../Toggle/Toggle'
import { Slider } from '../Slider/Slider'
import { Select } from '../Select/Select'
import { Textarea } from '../Textarea/Textarea'
import { Pagination } from '../Pagination/Pagination'
import { Breadcrumb } from '../Breadcrumb/Breadcrumb'
import { Spinner } from '../Spinner/Spinner'
import { Tooltip } from '../Tooltip/Tooltip'
import { Alert } from '../Alert/Alert'



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
  const [selectValue, setSelectValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <main style={{padding:20, display:'grid', gap:16}}>
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
      <h2>🎨 Ejemplos con customColors</h2>
      <p style={{marginTop:-8, opacity:.8}}>Aquí puedes ver componentes con paletas de colores personalizadas para diferentes modos de visión.</p>
      
      <div style={{display:'grid', gap:24, gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))'}}>
        {/* BUTTON CON CUSTOM COLORS */}
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Button con CustomColors (Normal)</h3>
          <Button
            variant="custom"
            size="md"
            colorVision="normal"
            customColors={{
              defaultColor: '#ba0000',
              defaultColorHover: '#cb1d14',
              defaultColorActive: '#c72a2a',
              protanopiaColor: '#8e5400',
              protanopiaColorHover: '#996300',
              protanopiaColorActive: '#a65b00',
              deuteranopiaColor: '#214dd1',
              deuteranopiaColorHover: '#1E3A8A',
              deuteranopiaColorActive: '#0C2D78',
              tritanopiaColor: '#7041cf',
              tritanopiaColorHover: '#7851A9',
              tritanopiaColorActive: '#5A3E7A',
              textColor: '#fff'
            }}
          >
            🎨 Rojo Personalizado
          </Button>
        </div>

        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Button con CustomColors (Protanopia)</h3>
          <Button
            variant="custom"
            size="md"
            colorVision="protanopia"
            customColors={{
              defaultColor: '#ba0000',
              defaultColorHover: '#cb1d14',
              defaultColorActive: '#c72a2a',
              protanopiaColor: '#8e5400',
              protanopiaColorHover: '#996300',
              protanopiaColorActive: '#a65b00',
              deuteranopiaColor: '#214dd1',
              deuteranopiaColorHover: '#1E3A8A',
              deuteranopiaColorActive: '#0C2D78',
              tritanopiaColor: '#7041cf',
              tritanopiaColorHover: '#7851A9',
              tritanopiaColorActive: '#5A3E7A',
              textColor: '#fff'
            }}
          >
            🎨 Naranja Protanopia
          </Button>
        </div>

        {/* ALERT CON CUSTOM COLORS */}
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Alert con CustomColors (Normal)</h3>
          <Alert
            variant="custom"
            colorVision="normal"
            title="✨ Éxito Personalizado"
            customColors={{
              defaultBg: '#D4EDDA',
              defaultBorder: '#1f8035',
              defaultColor: '#155724',
              defaultIconColor: '#1f8035',
              defaultTitleColor: '#0B5394',
              protanopiaBg: '#E8F4F8',
              protanopiaBorder: '#0271ae',
              protanopiaColor: '#01579B',
              protanopiaIconColor: '#0271ae',
              protanopiaTitleColor: '#004A7A',
              deuteranopiaBg: '#F3E5F5',
              deuteranopiaBorder: '#7B1FA2',
              deuteranopiaColor: '#4A148C',
              deuteranopiaIconColor: '#7B1FA2',
              deuteranopiaTitleColor: '#6A0080',
              tritanopiaBg: '#FFEBEE',
              tritanopiaBorder: '#C62828',
              tritanopiaColor: '#b51c1c',
              tritanopiaIconColor: '#c82a2a',
              tritanopiaTitleColor: '#8B0000'
            }}
          >
            La operación fue completada exitosamente con colores personalizados.
          </Alert>
        </div>

        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Alert con CustomColors (Protanopia)</h3>
          <Alert
            variant="custom"
            colorVision="deuteranopia"
            title="✨ Éxito Protanopia"
            customColors={{
              defaultBg: '#D4EDDA',
              defaultBorder: '#1f8035',
              defaultColor: '#155724',
              defaultIconColor: '#1f8035',
              defaultTitleColor: '#0B5394',
              protanopiaBg: '#E8F4F8',
              protanopiaBorder: '#0271ae',
              protanopiaColor: '#01579B',
              protanopiaIconColor: '#0271ae',
              protanopiaTitleColor: '#004A7A',
              deuteranopiaBg: '#F3E5F5',
              deuteranopiaBorder: '#7B1FA2',
              deuteranopiaColor: '#4A148C',
              deuteranopiaIconColor: '#7B1FA2',
              deuteranopiaTitleColor: '#6A0080',
              tritanopiaBg: '#FFEBEE',
              tritanopiaBorder: '#C62828',
              tritanopiaColor: '#b51c1c',
              tritanopiaIconColor: '#c82a2a',
              tritanopiaTitleColor: '#8B0000'
            }}
          >
            Perfecto para personas con protanopia.
          </Alert>
        </div>

        {/* INPUT CON CUSTOM COLORS */}
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Input con CustomColors (Normal)</h3>
          <Input
            label="Email"
            type="email"
            variant='custom'
            placeholder="tu@email.com"
            colorVision="protanopia"
            customColors={{
              defaultBorder: '#ca1452',
              defaultBorderFocus: '#C2185B',
              defaultColor: '#880E4F',
              defaultBg: '#FCE4EC',
              protanopiaBorder: '#007887',
              protanopiaBorderFocus: '#007986',
              protanopiaColor: '#006064',
              protanopiaBg: '#E0F2F1',
              deuteranopiaBorder: '#9C27B0',
              deuteranopiaBorderFocus: '#7B1FA2',
              deuteranopiaColor: '#4A148C',
              deuteranopiaBg: '#F3E5F5',
              tritanopiaBorder: '#a16000',
              tritanopiaBorderFocus: '#bb4200',
              tritanopiaColor: '#ac310b',
              tritanopiaBg: '#FFE0B2'
            }}
          />
        </div>

        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Input con CustomColors (Protanopia)</h3>
          <Input
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            variant='custom'
            colorVision="deuteranopia"
            customColors={{
              defaultBorder: '#ca1452',
              defaultBorderFocus: '#C2185B',
              defaultColor: '#880E4F',
              defaultBg: '#FCE4EC',
              protanopiaBorder: '#007887',
              protanopiaBorderFocus: '#007986',
              protanopiaColor: '#006064',
              protanopiaBg: '#E0F2F1',
              deuteranopiaBorder: '#9C27B0',
              deuteranopiaBorderFocus: '#7B1FA2',
              deuteranopiaColor: '#4A148C',
              deuteranopiaBg: '#F3E5F5',
              tritanopiaBorder: '#a16000',
              tritanopiaBorderFocus: '#bb4200',
              tritanopiaColor: '#ac310b',
              tritanopiaBg: '#FFE0B2'
            }}
          />
        </div>

        {/* CHECKBOX CON CUSTOM COLORS */}
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Checkbox con CustomColors (Normal)</h3>
          <Checkbox
            label="He leído los términos"
            variant='custom'
            colorVision="normal"
            customColors={{
              defaultAccent: '#007887',
              defaultBorder: '#007986',
              defaultBg: '#B2EBF2',
              defaultLabelColor: '#006064',
              protanopiaAccent: '#b24e00',
              protanopiaBorder: '#bb4200',
              protanopiaBg: '#FFE0B2',
              protanopiaLabelColor: '#ac310b',
              deuteranopiaAccent: '#673AB7',
              deuteranopiaBorder: '#512DA8',
              deuteranopiaBg: '#EDE7F6',
              deuteranopiaLabelColor: '#311B92',
              tritanopiaAccent: '#ca1452',
              tritanopiaBorder: '#C2185B',
              tritanopiaBg: '#F8BBD0',
              tritanopiaLabelColor: '#880E4F'
            }}
          />
        </div>

        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Checkbox con CustomColors (Protanopia)</h3>
          <Checkbox
            label="Recordar esta decisión"
            variant='custom'
            colorVision="deuteranopia"
            customColors={{
              defaultAccent: '#007887',
              defaultBorder: '#007986',
              defaultBg: '#B2EBF2',
              defaultLabelColor: '#006064',
              protanopiaAccent: '#b24e00',
              protanopiaBorder: '#bb4200',
              protanopiaBg: '#FFE0B2',
              protanopiaLabelColor: '#ac310b',
              deuteranopiaAccent: '#673AB7',
              deuteranopiaBorder: '#512DA8',
              deuteranopiaBg: '#EDE7F6',
              deuteranopiaLabelColor: '#311B92',
              tritanopiaAccent: '#ca1452',
              tritanopiaBorder: '#C2185B',
              tritanopiaBg: '#F8BBD0',
              tritanopiaLabelColor: '#880E4F'
            }}
          />
        </div>

        {/* TOGGLE CON CUSTOM COLORS */}
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Toggle con CustomColors (Normal)</h3>
          <ToggleDemoCustom
            checked={false}
            onChange={() => {}}
            variant='custom'
            colorVision="normal"
            customColors={{
              defaultBg: '#CFD8DC',
              defaultBorder: '#5e7681',
              defaultBgOn: '#387e3b',
              defaultBorderOn: '#358039',
              defaultKnob: '#FFFFFF',
              protanopiaBg: '#FFCC80',
              protanopiaBorder: '#a05f00',
              protanopiaBgOn: '#0774a5',
              protanopiaBorderOn: '#176dc2',
              protanopiaKnob: '#FFFFFF',
              deuteranopiaBg: '#CE93D8',
              deuteranopiaBorder: '#a944ba',
              deuteranopiaBgOn: '#aa44bb',
              deuteranopiaBorderOn: '#8E24AA',
              deuteranopiaKnob: '#FFFFFF',
              tritanopiaBg: '#80DEEA',
              tritanopiaBorder: '#177986',
              tritanopiaBgOn: '#c52f00',
              tritanopiaBorderOn: '#be3b13',
              tritanopiaKnob: '#FFFFFF'
            }}
            label="Modo oscuro personalizado"
          />
        </div>

        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Toggle con CustomColors (Protanopia)</h3>
          <ToggleDemoCustom
            checked={true}
            onChange={() => {}}
            colorVision="protanopia"
            customColors={{
              defaultBg: '#CFD8DC',
              defaultBorder: '#5e7681',
              defaultBgOn: '#387e3b',
              defaultBorderOn: '#358039',
              defaultKnob: '#FFFFFF',
              protanopiaBg: '#FFCC80',
              protanopiaBorder: '#a05f00',
              protanopiaBgOn: '#0774a5',
              protanopiaBorderOn: '#176dc2',
              protanopiaKnob: '#FFFFFF',
              deuteranopiaBg: '#CE93D8',
              deuteranopiaBorder: '#a944ba',
              deuteranopiaBgOn: '#aa44bb',
              deuteranopiaBorderOn: '#8E24AA',
              deuteranopiaKnob: '#FFFFFF',
              tritanopiaBg: '#80DEEA',
              tritanopiaBorder: '#177986',
              tritanopiaBgOn: '#c52f00',
              tritanopiaBorderOn: '#be3b13',
              tritanopiaKnob: '#FFFFFF'
            }}
            label="Notificaciones activadas"
          />
        </div>

        {/* SLIDER CON CUSTOM COLORS */}
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Slider con CustomColors (Normal)</h3>
          <Slider
            label="Volumen"
            value={50}
            onChange={() => {}}
            min={0}
            max={100}
            variant='custom'
            colorVision="deuteranopia"
            customColors={{
              defaultTrackBg: '#ECEFF1',
              defaultTrackBorder: '#78919d',
              defaultFillBg: '#d10000',
              defaultThumbBg: '#FF5252',
              defaultThumbBorder: '#c82a2a',
              protanopiaTrackBg: '#FFF9C4',
              protanopiaTrackBorder: '#b48203',
              protanopiaFillBg: '#916903',
              protanopiaThumbBg: '#FBC02D',
              protanopiaThumbBorder: '#ae5507',
              deuteranopiaTrackBg: '#F3E5F5',
              deuteranopiaTrackBorder: '#bd6eca',
              deuteranopiaFillBg: '#9C27B0',
              deuteranopiaThumbBg: '#9C27B0',
              deuteranopiaThumbBorder: '#6A1B9A',
              tritanopiaTrackBg: '#E1F5FE',
              tritanopiaTrackBorder: '#088ecb',
              tritanopiaFillBg: '#0271ae',
              tritanopiaThumbBg: '#0288D1',
              tritanopiaThumbBorder: '#01579B'
            }}
            showValue={true}
          />
        </div>

        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Slider con CustomColors (Protanopia)</h3>
          <Slider
            label="Brillo"
            value={75}
            onChange={() => {}}
            min={0}
            max={100}
            colorVision="protanopia"
            customColors={{
              defaultTrackBg: '#ECEFF1',
              defaultTrackBorder: '#78919d',
              defaultFillBg: '#d10000',
              defaultThumbBg: '#FF5252',
              defaultThumbBorder: '#c82a2a',
              protanopiaTrackBg: '#FFF9C4',
              protanopiaTrackBorder: '#b48203',
              protanopiaFillBg: '#916903',
              protanopiaThumbBg: '#FBC02D',
              protanopiaThumbBorder: '#ae5507',
              deuteranopiaTrackBg: '#F3E5F5',
              deuteranopiaTrackBorder: '#bd6eca',
              deuteranopiaFillBg: '#9C27B0',
              deuteranopiaThumbBg: '#9C27B0',
              deuteranopiaThumbBorder: '#6A1B9A',
              tritanopiaTrackBg: '#E1F5FE',
              tritanopiaTrackBorder: '#088ecb',
              tritanopiaFillBg: '#0271ae',
              tritanopiaThumbBg: '#0288D1',
              tritanopiaThumbBorder: '#01579B'
            }}
            showValue={true}
          />
        </div>
      </div>

      {/* Pagination Custom Colors */}
      <div style={{marginTop:32}}>
        <h2 style={{marginBottom:16}}>Pagination Con CustomColors</h2>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Pagination con CustomColors (Normal)</h3>
          <Pagination
            ariaLabel="Paginación de ejemplo 1"
            currentPage={1}
            totalPages={5}
            onPageChange={() => {}}
            variant="custom"
            colorVision="normal"
            customColors={{
              defaultColorActive: '#FFFFFF',
              defaultBgActive: '#176dc2',
              defaultShadowFocus: 'rgba(25, 118, 210, 0.5)',
              protanopiaColorActive: '#FFFFFF',
              protanopiaBgActive: '#996300',
              protanopiaShadowFocus: 'rgba(255, 165, 0, 0.5)',
              deuteranopiaColorActive: '#FFFFFF',
              deuteranopiaBgActive: '#9C27B0',
              deuteranopiaShadowFocus: 'rgba(156, 39, 176, 0.5)',
              tritanopiaColorActive: '#ffffff',
              tritanopiaBgActive: '#007887',
              tritanopiaShadowFocus: 'rgba(0, 188, 212, 0.5)'
            }}
          />
        </div>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16, marginTop:16}}>
          <h3 style={{marginTop:0}}>Pagination con CustomColors (Protanopia)</h3>
          <Pagination
            ariaLabel="Paginación de ejemplo 2"
            currentPage={2}
            totalPages={5}
            onPageChange={() => {}}
            variant="custom"
            colorVision="protanopia"
            customColors={{
              defaultColorActive: '#FFFFFF',
              defaultBgActive: '#176dc2',
              defaultShadowFocus: 'rgba(25, 118, 210, 0.5)',
              protanopiaColorActive: '#FFFFFF',
              protanopiaBgActive: '#996300',
              protanopiaShadowFocus: 'rgba(255, 165, 0, 0.5)',
              deuteranopiaColorActive: '#FFFFFF',
              deuteranopiaBgActive: '#9C27B0',
              deuteranopiaShadowFocus: 'rgba(156, 39, 176, 0.5)',
              tritanopiaColorActive: '#ffffff',
              tritanopiaBgActive: '#007887',
              tritanopiaShadowFocus: 'rgba(0, 188, 212, 0.5)'
            }}
          />
        </div>
      </div>

      {/* Select Custom Colors */}
      <div style={{marginTop:32}}>
        <h2 style={{marginBottom:16}}>Select Con CustomColors</h2>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Select con CustomColors (Normal)</h3>
          <Select
            value="option1"
            onChange={() => {}}
            options={[
              { value: 'option1', label: 'Opción 1' },
              { value: 'option2', label: 'Opción 2' },
              { value: 'option3', label: 'Opción 3' }
            ]}
            variant="custom"
            colorVision="deuteranopia"
            customColors={{
              defaultBg: '#FFFFFF',
              defaultBorder: '#757575',
              defaultBorderFocus: '#176dc2',
              defaultColor: '#000000',
              defaultPlaceholder: '#676767',
              defaultShadowFocus: 'rgba(25, 118, 210, 0.2)',
              protanopiaBg: '#FFFFFF',
              protanopiaBorder: '#8a6f00',
              protanopiaBorderFocus: '#996300',
              protanopiaColor: '#000000',
              protanopiaPlaceholder: '#676767',
              protanopiaShadowFocus: 'rgba(255, 165, 0, 0.2)',
              deuteranopiaBg: '#FFFFFF',
              deuteranopiaBorder: '#b43f8e',
              deuteranopiaBorderFocus: '#9C27B0',
              deuteranopiaColor: '#000000',
              deuteranopiaPlaceholder: '#676767',
              deuteranopiaShadowFocus: 'rgba(156, 39, 176, 0.2)',
              tritanopiaBg: '#FFFFFF',
              tritanopiaBorder: '#0774a7',
              tritanopiaBorderFocus: '#007887',
              tritanopiaColor: '#000000',
              tritanopiaPlaceholder: '#676767',
              tritanopiaShadowFocus: 'rgba(0, 188, 212, 0.2)'
            }}
          />
        </div>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16, marginTop:16}}>
          <h3 style={{marginTop:0}}>Select con CustomColors (Protanopia)</h3>
          <Select
            value="option1"
            onChange={() => {}}
            options={[
              { value: 'option1', label: 'Opción 1' },
              { value: 'option2', label: 'Opción 2' },
              { value: 'option3', label: 'Opción 3' }
            ]}
            variant="custom"
            colorVision="protanopia"
            customColors={{
              defaultBg: '#FFFFFF',
              defaultBorder: '#757575',
              defaultBorderFocus: '#176dc2',
              defaultColor: '#000000',
              defaultPlaceholder: '#676767',
              defaultShadowFocus: 'rgba(25, 118, 210, 0.2)',
              protanopiaBg: '#FFFFFF',
              protanopiaBorder: '#8a6f00',
              protanopiaBorderFocus: '#996300',
              protanopiaColor: '#000000',
              protanopiaPlaceholder: '#676767',
              protanopiaShadowFocus: 'rgba(255, 165, 0, 0.2)',
              deuteranopiaBg: '#FFFFFF',
              deuteranopiaBorder: '#b43f8e',
              deuteranopiaBorderFocus: '#9C27B0',
              deuteranopiaColor: '#000000',
              deuteranopiaPlaceholder: '#676767',
              deuteranopiaShadowFocus: 'rgba(156, 39, 176, 0.2)',
              tritanopiaBg: '#FFFFFF',
              tritanopiaBorder: '#0774a7',
              tritanopiaBorderFocus: '#007887',
              tritanopiaColor: '#000000',
              tritanopiaPlaceholder: '#676767',
              tritanopiaShadowFocus: 'rgba(0, 188, 212, 0.2)'
            }}
          />
        </div>
      </div>

      {/* Radiogroup Custom Colors */}
      <div style={{marginTop:32}}>
        <h2 style={{marginBottom:16}}>Radiogroup Con CustomColors</h2>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Radiogroup con CustomColors (Normal)</h3>
          <Radiogroup
            name="demo-custom-normal"
            value="option1"
            onChange={() => {}}
            variant="custom"
            colorVision="tritanopia"
            customColors={{
              defaultColor: '#1460ab',
              defaultBorderColor: '#757575',
              defaultBorderColorHover: '#176dc2',
              defaultBorderColorFocus: '#176dc2',
              defaultLabelColor: '#000000',
              defaultDescriptionColor: '#666666',
              protanopiaColor: '#8a5900',
              protanopiaBorderColor: '#8a6f00',
              protanopiaBorderColorHover: '#996300',
              protanopiaBorderColorFocus: '#996300',
              protanopiaLabelColor: '#000000',
              protanopiaDescriptionColor: '#666666',
              deuteranopiaColor: '#9C27B0',
              deuteranopiaBorderColor: '#b43f8e',
              deuteranopiaBorderColorHover: '#9C27B0',
              deuteranopiaBorderColorFocus: '#9C27B0',
              deuteranopiaLabelColor: '#000000',
              deuteranopiaDescriptionColor: '#666666',
              tritanopiaColor: '#006b78',
              tritanopiaBorderColor: '#0774a7',
              tritanopiaBorderColorHover: '#007887',
              tritanopiaBorderColorFocus: '#007887',
              tritanopiaLabelColor: '#000000',
              tritanopiaDescriptionColor: '#666666'
            }}
            options={[
              { value: 'option1', label: 'Opción 1' },
              { value: 'option2', label: 'Opción 2' },
              { value: 'option3', label: 'Opción 3' }
            ]}
          />
        </div>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16, marginTop:16}}>
          <h3 style={{marginTop:0}}>Radiogroup con CustomColors (Protanopia)</h3>
          <Radiogroup
            name="demo-custom-protanopia"
            value="option1"
            onChange={() => {}}
            variant="custom"
            colorVision="protanopia"
            customColors={{
              defaultColor: '#1460ab',
              defaultBorderColor: '#757575',
              defaultBorderColorHover: '#176dc2',
              defaultBorderColorFocus: '#176dc2',
              defaultLabelColor: '#000000',
              defaultDescriptionColor: '#666666',
              protanopiaColor: '#8a5900',
              protanopiaBorderColor: '#8a6f00',
              protanopiaBorderColorHover: '#996300',
              protanopiaBorderColorFocus: '#996300',
              protanopiaLabelColor: '#000000',
              protanopiaDescriptionColor: '#666666',
              deuteranopiaColor: '#9C27B0',
              deuteranopiaBorderColor: '#b43f8e',
              deuteranopiaBorderColorHover: '#9C27B0',
              deuteranopiaBorderColorFocus: '#9C27B0',
              deuteranopiaLabelColor: '#000000',
              deuteranopiaDescriptionColor: '#666666',
              tritanopiaColor: '#006b78',
              tritanopiaBorderColor: '#0774a7',
              tritanopiaBorderColorHover: '#007887',
              tritanopiaBorderColorFocus: '#007887',
              tritanopiaLabelColor: '#000000',
              tritanopiaDescriptionColor: '#666666'
            }}
            options={[
              { value: 'option1', label: 'Opción 1' },
              { value: 'option2', label: 'Opción 2' },
              { value: 'option3', label: 'Opción 3' }
            ]}
          />
        </div>
      </div>

      {/* Breadcrumb Custom Colors */}
      <div style={{marginTop:32}}>
        <h2 style={{marginBottom:16}}>Breadcrumb Con CustomColors</h2>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Breadcrumb con CustomColors (Normal)</h3>
          <Breadcrumb
            ariaLabel="Ruta de ejemplo 1"
            variant="custom"
            colorVision="tritanopia"
            customColors={{
              defaultColor: '#1460ab',
              defaultColorHover: '#1565C0',
              defaultColorCurrent: '#000000',
              defaultSeparator: '#8f8f8f',
              protanopiaColor: '#8a5900',
              protanopiaColorHover: '#a65b00',
              protanopiaColorCurrent: '#000000',
              protanopiaSeparator: '#8f8f8f',
              deuteranopiaColor: '#9C27B0',
              deuteranopiaColorHover: '#8E24AA',
              deuteranopiaColorCurrent: '#000000',
              deuteranopiaSeparator: '#8f8f8f',
              tritanopiaColor: '#006b78',
              tritanopiaColorHover: '#007986',
              tritanopiaColorCurrent: '#000000',
              tritanopiaSeparator: '#8f8f8f'
            }}
            items={[
              { label: 'Inicio', href: '#' },
              { label: 'Categoría', href: '#' },
              { label: 'Subcategoría' }
            ]}
          />
        </div>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16, marginTop:16}}>
          <h3 style={{marginTop:0}}>Breadcrumb con CustomColors (Protanopia)</h3>
          <Breadcrumb
            ariaLabel="Ruta de ejemplo 2"
            variant="custom"
            colorVision="protanopia"
            customColors={{
              defaultColor: '#1460ab',
              defaultColorHover: '#1565C0',
              defaultColorCurrent: '#000000',
              defaultSeparator: '#8f8f8f',
              protanopiaColor: '#8a5900',
              protanopiaColorHover: '#a65b00',
              protanopiaColorCurrent: '#000000',
              protanopiaSeparator: '#8f8f8f',
              deuteranopiaColor: '#9C27B0',
              deuteranopiaColorHover: '#8E24AA',
              deuteranopiaColorCurrent: '#000000',
              deuteranopiaSeparator: '#8f8f8f',
              tritanopiaColor: '#006b78',
              tritanopiaColorHover: '#007986',
              tritanopiaColorCurrent: '#000000',
              tritanopiaSeparator: '#8f8f8f'
            }}
            items={[
              { label: 'Inicio', href: '#' },
              { label: 'Categoría', href: '#' },
              { label: 'Subcategoría' }
            ]}
          />
        </div>
      </div>

      {/* Spinner Custom Colors */}
      <div style={{marginTop:32}}>
        <h2 style={{marginBottom:16}}>Spinner Con CustomColors</h2>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Spinner con CustomColors (Normal)</h3>
          <Spinner
            variant="custom"
            colorVision="tritanopia"
            customColors={{
              defaultColor: '#1460ab',
              protanopiaColor: '#8a5900',
              deuteranopiaColor: '#9C27B0',
              tritanopiaColor: '#006b78'
            }}
          />
        </div>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16, marginTop:16}}>
          <h3 style={{marginTop:0}}>Spinner con CustomColors (Protanopia)</h3>
          <Spinner
            variant="custom"
            colorVision="protanopia"
            customColors={{
              defaultColor: '#1460ab',
              protanopiaColor: '#8a5900',
              deuteranopiaColor: '#9C27B0',
              tritanopiaColor: '#006b78'
            }}
          />
        </div>
      </div>

      {/* Textarea Custom Colors */}
      <div style={{marginTop:32}}>
        <h2 style={{marginBottom:16}}>Textarea Con CustomColors</h2>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Textarea con CustomColors (Normal)</h3>
          <Textarea
            label="Comentarios"
            placeholder="Escribe tus comentarios aquí..."
            variant="custom"
            colorVision="normal"
            customColors={{
              defaultBg: '#FFFFFF',
              defaultBorder: '#757575',
              defaultBorderFocus: '#176dc2',
              defaultColor: '#000000',
              defaultPlaceholder: '#676767',
              protanopiaBg: '#FFFFFF',
              protanopiaBorder: '#8a6f00',
              protanopiaBorderFocus: '#996300',
              protanopiaColor: '#000000',
              protanopiaPlaceholder: '#676767',
              deuteranopiaBg: '#FFFFFF',
              deuteranopiaBorder: '#b43f8e',
              deuteranopiaBorderFocus: '#9C27B0',
              deuteranopiaColor: '#000000',
              deuteranopiaPlaceholder: '#676767',
              tritanopiaBg: '#FFFFFF',
              tritanopiaBorder: '#0774a7',
              tritanopiaBorderFocus: '#007887',
              tritanopiaColor: '#000000',
              tritanopiaPlaceholder: '#676767'
            }}
          />
        </div>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16, marginTop:16}}>
          <h3 style={{marginTop:0}}>Textarea con CustomColors (Protanopia)</h3>
          <Textarea
            label="Comentarios"
            placeholder="Escribe tus comentarios aquí..."
            variant="custom"
            colorVision="tritanopia"
            customColors={{
              defaultBg: '#FFFFFF',
              defaultBorder: '#757575',
              defaultBorderFocus: '#176dc2',
              defaultColor: '#000000',
              defaultPlaceholder: '#676767',
              protanopiaBg: '#FFFFFF',
              protanopiaBorder: '#8a6f00',
              protanopiaBorderFocus: '#996300',
              protanopiaColor: '#000000',
              protanopiaPlaceholder: '#676767',
              deuteranopiaBg: '#FFFFFF',
              deuteranopiaBorder: '#b43f8e',
              deuteranopiaBorderFocus: '#9C27B0',
              deuteranopiaColor: '#000000',
              deuteranopiaPlaceholder: '#676767',
              tritanopiaBg: '#FFFFFF',
              tritanopiaBorder: '#0774a7',
              tritanopiaBorderFocus: '#007887',
              tritanopiaColor: '#000000',
              tritanopiaPlaceholder: '#676767'
            }}
          />
        </div>
      </div>

      {/* Tooltip Custom Colors */}
      <div style={{marginTop:32}}>
        <h2 style={{marginBottom:16}}>Tooltip Con CustomColors</h2>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16}}>
          <h3 style={{marginTop:0}}>Tooltip con CustomColors (Normal)</h3>
          <Tooltip
            content="Tooltip personalizado"
            variant="custom"
            colorVision="normal"
            customColors={{
              defaultBg: '#333333',
              defaultColor: '#FFFFFF',
              defaultBorder: '#176dc2',
              protanopiaBg: '#333333',
              protanopiaColor: '#FFFFFF',
              protanopiaBorder: '#996300',
              deuteranopiaBg: '#333333',
              deuteranopiaColor: '#FFFFFF',
              deuteranopiaBorder: '#9C27B0',
              tritanopiaBg: '#333333',
              tritanopiaColor: '#FFFFFF',
              tritanopiaBorder: '#007887'
            }}
          >
            <span>Pasar sobre mí</span>
          </Tooltip>
        </div>
        <div style={{border:'1px solid #ccc', borderRadius:8, padding:16, marginTop:16}}>
          <h3 style={{marginTop:0}}>Tooltip con CustomColors (Protanopia)</h3>
          <Tooltip
            content="Tooltip personalizado"
            variant="custom"
            colorVision="protanopia"
            customColors={{
              defaultBg: '#333333',
              defaultColor: '#FFFFFF',
              defaultBorder: '#176dc2',
              protanopiaBg: '#333333',
              protanopiaColor: '#FFFFFF',
              protanopiaBorder: '#996300',
              deuteranopiaBg: '#333333',
              deuteranopiaColor: '#FFFFFF',
              deuteranopiaBorder: '#9C27B0',
              tritanopiaBg: '#333333',
              tritanopiaColor: '#FFFFFF',
              tritanopiaBorder: '#007887'
            }}
          >
            <span>Pasar sobre mí</span>
          </Tooltip>
        </div>
      </div>

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
          colorVision={colorVision}
          accessibility={accessibility}
          disabled={disabled}
        />
      </div>
      <div>
        <h2>Demo Radiogroup accesible</h2>
        <RadiogroupDemoInline
          variant={variant}
          size={size}
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
      <div>
        <h2>Demo Select accesible</h2>
        <SelectDemoInline
          value={selectValue}
          onChange={setSelectValue}
          variant={variant}
          size={size}
          fontSize={fontSize}
          colorVision={colorVision}
          accessibility={accessibility}
          disabled={disabled}
        />
      </div>
      <div>
        <h2>Demo Textarea accesible</h2>
        <TextareaDemoInline
          value={textareaValue}
          onChange={setTextareaValue}
          variant={variant}
          textareaSize={size}
          fontSize={fontSize}
          colorVision={colorVision}
          accessibility={accessibility}
          disabled={disabled}
        />
      </div>
      <div>
        <h2>Demo Pagination accesible</h2>
        <PaginationDemoInline
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          variant={variant}
          size={size}
          fontSize={fontSize}
          colorVision={colorVision}
          accessibility={accessibility}
          disabled={disabled}
        />
      </div>
      <div>
        <h2>Demo Breadcrumb accesible</h2>
        <BreadcrumbDemoInline
          variant={variant}
          fontSize={fontSize}
          colorVision={colorVision}
          accessibility={accessibility}
        />
      </div>
      <div>
        <h2>Demo Spinner accesible</h2>
        <SpinnerDemoInline
          variant={variant}
          size={size}
          colorVision={colorVision}
          accessibility={accessibility}
        />
      </div>
      <div>
        <h2>Demo Tooltip accesible</h2>
        <TooltipDemoInline
          variant={variant}
          size={size}
          fontSize={fontSize}
          colorVision={colorVision}
          accessibility={accessibility}
        />
      </div>
      <div>
        <h2>Demo Alert accesible</h2>
        <AlertDemoInline
          variant={variant}
          size={size}
          fontSize={fontSize}
          colorVision={colorVision}
          accessibility={accessibility}
        />
      </div>
      <div style={{opacity:.7, fontSize:12}}>
        Sugerencia: habilita "High Contrast" del sistema o "prefers-reduced-motion" para probar ajustes.
      </div>
    </main>
  )
}

const rootEl = document.getElementById('root')!
createRoot(rootEl).render(<App />)

// Demo Toggle Inline
function ToggleDemoInline(props: import('../Toggle/Toggle').ToggleProps) {
  return (
    <Toggle
      checked={props.checked}
      onChange={props.onChange}
      variant={props.variant}
      colorVision={props.colorVision}
      accessibility={props.accessibility}
      disabled={props.disabled}
      label={props.label ?? 'Notificaciones'}
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

// Demo Select Inline
function SelectDemoInline(props: Omit<import('../Select/Select').SelectProps, 'options'>) {
  const options = [
    { value: 'opcion1', label: 'Primera opción' },
    { value: 'opcion2', label: 'Segunda opción' },
    { value: 'opcion3', label: 'Tercera opción' },
    { value: 'opcion4', label: 'Cuarta opción (deshabilitada)', disabled: true },
    { value: 'opcion5', label: 'Quinta opción' }
  ];

  return (
    <Select
      label="Selecciona una opción"
      value={props.value}
      onChange={props.onChange}
      options={options}
      placeholder="Elige una opción..."
      variant={props.variant}
      size={props.size}
      fontSize={props.fontSize}
      colorVision={props.colorVision}
      accessibility={props.accessibility}
      disabled={props.disabled}
    />
  );
}

// Demo Textarea Inline
function TextareaDemoInline(props: Omit<import('../Textarea/Textarea').TextareaProps, 'onChange'> & { onChange: (value: string) => void }) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <Textarea
      label="Escribe tu mensaje"
      value={props.value}
      onChange={handleChange}
      placeholder="Escribe aquí tu mensaje..."
      rows={4}
      variant={props.variant}
      textareaSize={props.textareaSize}
      fontSize={props.fontSize}
      colorVision={props.colorVision}
      accessibility={props.accessibility}
      disabled={props.disabled}
      resize="vertical"
    />
  );
}

// Demo Pagination Inline
function PaginationDemoInline(props: Omit<import('../Pagination/Pagination').PaginationProps, 'totalPages'>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div style={{ fontSize: '14px', color: '#4b5563' }}>
        Página {props.currentPage} de 25 (ejemplo con 25 páginas)
      </div>
      <Pagination
        ariaLabel="Paginación de ejemplo 3"
        currentPage={props.currentPage}
        totalPages={25}
        onPageChange={props.onPageChange}
        variant={props.variant}
        size={props.size}
        fontSize={props.fontSize}
        colorVision={props.colorVision}
        accessibility={props.accessibility}
        disabled={props.disabled}
        showFirstLast={true}
        showPrevNext={true}
        maxVisiblePages={7}
      />
    </div>
  );
}

// Demo Breadcrumb Inline
function BreadcrumbDemoInline(props: Omit<import('../Breadcrumb/Breadcrumb').BreadcrumbProps, 'items'>) {
  const breadcrumbItems = [
    { label: 'Inicio', onClick: () => console.log('Ir a inicio') },
    { label: 'Productos', onClick: () => console.log('Ir a productos') },
    { label: 'Electrónicos', onClick: () => console.log('Ir a electrónicos') },
    { label: 'Smartphones', onClick: () => console.log('Ir a smartphones') },
    { label: 'Samsung Z Fold 7' } // Último elemento sin onClick (página actual)
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ fontSize: '14px', color: '#4b5563' }}>
        Navegación actual: Inicio {'->'} Productos {'->'} Electrónicos {'->'} Smartphones {'->'} Samsung Z Fold 7
      </div>
      <Breadcrumb
        ariaLabel="Ruta de ejemplo 3"
        items={breadcrumbItems}
        variant={props.variant}
        fontSize={props.fontSize}
        colorVision={props.colorVision}
        accessibility={props.accessibility}
        maxItems={5}
        showHome={false}
      />
      <div style={{ fontSize: '12px', color: '#757575', marginTop: '8px' }}>
        ℹ️ Los elementos son clickeables excepto el último (página actual)
      </div>
    </div>
  );
}

// Demo Spinner Inline
function SpinnerDemoInline(props: Omit<import('../Spinner/Spinner').SpinnerProps, 'spinnerVariant' | 'label'>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ fontSize: '14px', color: '#4b5563' }}>
        Tres variantes de spinners con diferentes animaciones
      </div>
      
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Spinner
            variant={props.variant}
            size={props.size}
            colorVision={props.colorVision}
            accessibility={props.accessibility}
            spinnerVariant="1"
            label="Circular"
            speed="normal"
          />
          <div style={{ fontSize: '12px', color: '#757575' }}>Variante 1: Circular</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Spinner
            variant={props.variant}
            size={props.size}
            colorVision={props.colorVision}
            accessibility={props.accessibility}
            spinnerVariant="2"
            label="Dots pulsantes"
            speed="normal"
          />
          <div style={{ fontSize: '12px', color: '#757575' }}>Variante 2: Dots</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Spinner
            variant={props.variant}
            size={props.size}
            colorVision={props.colorVision}
            accessibility={props.accessibility}
            spinnerVariant="3"
            label="Barras ondulantes"
            speed="normal"
          />
          <div style={{ fontSize: '12px', color: '#757575' }}>Variante 3: Barras</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Spinner
            variant={props.variant}
            size={props.size}
            colorVision={props.colorVision}
            accessibility={props.accessibility}
            spinnerVariant="4"
            label="Grid cuadrados"
            speed="normal"
          />
          <div style={{ fontSize: '12px', color: '#757575' }}>Variante 4: Grid</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Spinner
            variant={props.variant}
            size={props.size}
            colorVision={props.colorVision}
            accessibility={props.accessibility}
            spinnerVariant="5"
            label="Onda wave"
            speed="normal"
          />
          <div style={{ fontSize: '12px', color: '#757575' }}>Variante 5: Wave</div>
        </div>
      </div>

      <div style={{ fontSize: '12px', color: '#757575' }}>
        ⚡ 5 variantes diferentes | Velocidades: slow, normal, fast | 🎯 Soporte completo para reduced-motion
      </div>
    </div>
  );
}

// Demo Tooltip Inline
function TooltipDemoInline(props: Omit<import('../Tooltip/Tooltip').TooltipProps, 'children' | 'content'>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ fontSize: '14px', color: '#4b5563', textAlign: 'center' }}>
        Tooltips con animaciones fluidas y posicionamiento inteligente
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px', width: '100%', maxWidth: '600px' }}>
        <Tooltip
          content="Tooltip en la parte superior con animación fluida"
          position="top"
          variant={props.variant}
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
        >
          <Button variant={props.variant} size={props.size}>
            Hover Top
          </Button>
        </Tooltip>

        <Tooltip
          content="Este tooltip aparece abajo del elemento"
          position="bottom"
          variant={props.variant}
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
        >
          <Button variant={props.variant} size={props.size}>
            Hover Bottom
          </Button>
        </Tooltip>

        <Tooltip
          content="Tooltip a la izquierda"
          position="left"
          variant={props.variant}
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
        >
          <Button variant={props.variant} size={props.size}>
            Hover Left
          </Button>
        </Tooltip>

        <Tooltip
          content="Tooltip a la derecha del botón"
          position="right"
          variant={props.variant}
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
        >
          <Button variant={props.variant} size={props.size}>
            Hover Right
          </Button>
        </Tooltip>
      </div>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Tooltip
          content={<div style={{ textAlign: 'left' }}>
            <strong>Tooltip con HTML</strong><br/>
            • Soporta contenido rico<br/>
            • Múltiples líneas<br/>
            • <em>Texto enfatizado</em>
          </div>}
          position="auto"
          variant={props.variant}
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          maxWidth={250}
        >
          <Button variant="success" size={props.size}>
            Contenido Rico
          </Button>
        </Tooltip>

        <Tooltip
          content="Este tooltip se posiciona automáticamente donde haya más espacio disponible"
          position="auto"
          variant={props.variant}
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          delay={100}
          hideDelay={50}
        >
          <Button variant="warning" size={props.size}>
            Auto Position
          </Button>
        </Tooltip>
      </div>

      <div style={{ fontSize: '12px', color: '#757575', textAlign: 'center' }}>
        ✨ Posicionamiento inteligente | 🎯 Animaciones fluidas | ♿ Accesible con ARIA
      </div>
    </div>
  );
}

// Demo Alert Inline
function AlertDemoInline(props: Omit<import('../Alert/Alert').AlertProps, 'children' | 'title'>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ fontSize: '14px', color: '#4b5563' }}>
        Diferentes tipos de alertas con emojis correspondientes a cada variante
      </div>
      
      <div style={{ display: 'grid', gap: '12px' }}>
        <Alert
          variant="primary"
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          title="Información importante"
          dismissible={true}
        >
          Esta es una alerta informativa con emoji 💡. Perfecto para mostrar información general.
        </Alert>

        <Alert
          variant="success"
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          title="¡Operación exitosa!"
          dismissible={true}
        >
          La operación se completó correctamente ✅. Todo funcionó según lo esperado.
        </Alert>

        <Alert
          variant="warning"
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          title="Advertencia importante"
          dismissible={true}
        >
          Ten cuidado con esta acción ⚠️. Podría tener consecuencias importantes.
        </Alert>

        <Alert
          variant="danger"
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          title="Error crítico"
          dismissible={true}
        >
          Ha ocurrido un error crítico ❌. Por favor, revisa la configuración.
        </Alert>

        <Alert
          variant="secondary"
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          title="Nota informativa"
          dismissible={false}
        >
          Esta es una nota neutral ℹ️ que no requiere acción inmediata.
        </Alert>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px', marginTop: '16px' }}>
        <Alert
          type="info"
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          dismissible={true}
        >
          Alert con tipo "info" 💡 - Sobrescribe la variante
        </Alert>

        <Alert
          type="error"
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          dismissible={true}
        >
          Alert con tipo "error" ❌ - Color específico
        </Alert>

        <Alert
          variant="success"
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          showIcon={false}
        >
          Alerta sin emoji - Solo texto y colores
        </Alert>

        <Alert
          variant="warning"
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          icon={<span>🚨</span>}
        >
          Alerta con emoji personalizado 🚨
        </Alert>
      </div>

      <div style={{ fontSize: '12px', color: '#757575' }}>
        💡 Primary | ✅ Success | ⚠️ Warning | ❌ Danger | ℹ️ Secondary | 🎯 Completamente accesible
      </div>
    </div>
  );
}

// Demo Radiogroup Inline
function RadiogroupDemoInline(props: Omit<import('../Radiogroup/Radiogroup').RadiogroupProps, 'name' | 'options' | 'value' | 'onChange'>) {
  const [selectedValue, setSelectedValue] = React.useState('medium');
  
  const options = [
    { 
      value: 'small', 
      label: 'Pequeño', 
      description: 'Opción compacta y minimalista' 
    },
    { 
      value: 'medium', 
      label: 'Mediano', 
      description: 'Tamaño estándar recomendado' 
    },
    { 
      value: 'large', 
      label: 'Grande', 
      description: 'Máxima visibilidad y accesibilidad' 
    },
    { 
      value: 'custom', 
      label: 'Personalizado', 
      description: 'Configuración avanzada disponible',
      disabled: props.disabled 
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ fontSize: '14px', color: '#4b5563' }}>
        Radio groups con selección única y descripciones
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <Radiogroup
          name="size-vertical"
          label="Selecciona un tamaño (vertical)"
          description="Elige la opción que mejor se adapte a tus necesidades"
          options={options}
          value={selectedValue}
          onChange={setSelectedValue}
          variant={props.variant}
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          direction="vertical"
          disabled={props.disabled}
          required={true}
        />

        <Radiogroup
          name="size-horizontal"
          label="Selecciona un tamaño (horizontal)"
          options={options.slice(0, 3)} // Solo 3 opciones para horizontal
          value={selectedValue}
          onChange={setSelectedValue}
          variant={props.variant}
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          direction="horizontal"
          disabled={props.disabled}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
        <Radiogroup
          name="priority"
          label="Prioridad"
          options={[
            { value: 'low', label: 'Baja' },
            { value: 'medium', label: 'Media' },
            { value: 'high', label: 'Alta' }
          ]}
          defaultValue="medium"
          variant={props.variant}
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          direction="horizontal"
        />

        <Radiogroup
          name="notifications"
          label="Notificaciones"
          options={[
            { value: 'all', label: 'Todas', description: 'Recibir todas las notificaciones' },
            { value: 'important', label: 'Solo importantes', description: 'Solo alertas críticas' },
            { value: 'none', label: 'Ninguna', description: 'No recibir notificaciones' }
          ]}
          defaultValue="important"
          variant={props.variant}
          size={props.size}
          fontSize={props.fontSize}
          colorVision={props.colorVision}
          accessibility={props.accessibility}
          direction="vertical"
        />
      </div>

      <div style={{ fontSize: '12px', color: '#757575' }}>
        🔘 Selección única | 📝 Con descripciones | ↕️ Vertical/Horizontal | ♿ Completamente accesible
      </div>
    </div>
  );
}

// Demo Toggle Custom
function ToggleDemoCustom(props: import('../Toggle/Toggle').ToggleProps & { label?: string }) {
  const [checked, setChecked] = React.useState(props.checked || false);
  return (
    <div style={{display:'flex', alignItems:'center', gap:12}}>
      <Toggle
        checked={checked}
        onChange={setChecked}
        variant="custom"
        colorVision={props.colorVision}
        customColors={props.customColors}
        label={props.label}
      />
    </div>
  );
}
