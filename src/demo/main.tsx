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
    </div>
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
      <div style={{ fontSize: '14px', color: '#666' }}>
        Página {props.currentPage} de 25 (ejemplo con 25 páginas)
      </div>
      <Pagination
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
      <div style={{ fontSize: '14px', color: '#666' }}>
        Navegación actual: Inicio {'->'} Productos {'->'} Electrónicos {'->'} Smartphones {'->'} Samsung Z Fold 7
      </div>
      <Breadcrumb
        items={breadcrumbItems}
        variant={props.variant}
        fontSize={props.fontSize}
        colorVision={props.colorVision}
        accessibility={props.accessibility}
        maxItems={5}
        showHome={false}
      />
      <div style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
        ℹ️ Los elementos son clickeables excepto el último (página actual)
      </div>
    </div>
  );
}

// Demo Spinner Inline
function SpinnerDemoInline(props: Omit<import('../Spinner/Spinner').SpinnerProps, 'spinnerVariant' | 'label'>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ fontSize: '14px', color: '#666' }}>
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
          <div style={{ fontSize: '12px', color: '#999' }}>Variante 1: Circular</div>
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
          <div style={{ fontSize: '12px', color: '#999' }}>Variante 2: Dots</div>
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
          <div style={{ fontSize: '12px', color: '#999' }}>Variante 3: Barras</div>
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
          <div style={{ fontSize: '12px', color: '#999' }}>Variante 4: Grid</div>
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
          <div style={{ fontSize: '12px', color: '#999' }}>Variante 5: Wave</div>
        </div>
      </div>

      <div style={{ fontSize: '12px', color: '#999' }}>
        ⚡ 5 variantes diferentes | Velocidades: slow, normal, fast | 🎯 Soporte completo para reduced-motion
      </div>
    </div>
  );
}

// Demo Tooltip Inline
function TooltipDemoInline(props: Omit<import('../Tooltip/Tooltip').TooltipProps, 'children' | 'content'>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
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

      <div style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
        ✨ Posicionamiento inteligente | 🎯 Animaciones fluidas | ♿ Accesible con ARIA
      </div>
    </div>
  );
}

// Demo Alert Inline
function AlertDemoInline(props: Omit<import('../Alert/Alert').AlertProps, 'children' | 'title'>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ fontSize: '14px', color: '#666' }}>
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

      <div style={{ fontSize: '12px', color: '#999' }}>
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
      <div style={{ fontSize: '14px', color: '#666' }}>
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

      <div style={{ fontSize: '12px', color: '#999' }}>
        🔘 Selección única | 📝 Con descripciones | ↕️ Vertical/Horizontal | ♿ Completamente accesible
      </div>
    </div>
  );
}
