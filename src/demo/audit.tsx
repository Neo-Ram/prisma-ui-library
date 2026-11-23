/**
 * Página de auditoría de accesibilidad.
 * Renderiza cada componente en todas las combinaciones de
 * variante × modo de visión × modo de accesibilidad para poder
 * pasar Lighthouse / axe DevTools sobre toda la paleta de una vez.
 *
 * Uso: npm run dev  →  http://localhost:5173/audit.html
 * Filtros opcionales por query string: ?cv=protanopia&a11y=default
 */
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Alert, Breadcrumb, Button, Checkbox, Input, Pagination, Radiogroup,
  Select, Slider, Spinner, Textarea, Toggle, Tooltip,
} from '../main'

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
type ColorVision = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia'
type A11y = 'default' | 'low-vision' | 'high-contrast'

const variants: Variant[] = ['primary', 'secondary', 'success', 'warning', 'danger']
const params = new URLSearchParams(window.location.search)
const allCv: ColorVision[] = ['normal', 'protanopia', 'deuteranopia', 'tritanopia']
const allA11y: A11y[] = ['default', 'low-vision', 'high-contrast']
const cvs = params.get('cv') ? allCv.filter(c => c === params.get('cv')) : allCv
const a11ys = params.get('a11y') ? allA11y.filter(a => a === params.get('a11y')) : allA11y

const options = [
  { value: 'a', label: 'Opción A' },
  { value: 'b', label: 'Opción B' },
  { value: 'c', label: 'Opción C' },
]

function Row({ v, cv, a11y }: { v: Variant; cv: ColorVision; a11y: A11y }) {
  const [checked, setChecked] = useState(true)
  const [toggle, setToggle] = useState(true)
  const [slider, setSlider] = useState(60)
  const [select, setSelect] = useState('b')
  const [radio, setRadio] = useState('a')
  const [page, setPage] = useState(3)
  const common = { variant: v, colorVision: cv, accessibility: a11y } as const
  const id = `${v} ${cv} ${a11y}`

  return (
    <section
      aria-label={id}
      style={{ border: '1px solid #6b7280', borderRadius: 8, padding: 12, display: 'grid', gap: 12 }}
    >
      <h3 style={{ margin: 0, fontSize: 16 }}>{v} · {cv} · {a11y}</h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button {...common}>Guardar</Button>
        <Tooltip {...common} content={`Tooltip ${v}`} open trigger="manual" position="right">
          <span style={{ padding: 4 }}>Tooltip abierto</span>
        </Tooltip>
      </div>
      <Alert {...common} title={`Alerta ${v}`}>Mensaje de la alerta con texto normal.</Alert>
      <Breadcrumb
        {...common}
        ariaLabel={`Ruta ${id}`}
        items={[{ label: 'Inicio', href: '#' }, { label: 'Productos', href: '#' }, { label: 'Detalle' }]}
      />
      <Pagination {...common} ariaLabel={`Paginación ${id}`} currentPage={page} totalPages={8} onPageChange={setPage} />
      <Input {...common} label={`Correo ${id}`} placeholder="nombre@correo.com" />
      <Textarea {...common} label={`Comentario ${id}`} placeholder="Escribe aquí" required />
      <Select {...common} label={`Selección ${id}`} options={options} value={select} onChange={setSelect} required />
      <Checkbox {...common} label={`Acepto ${id}`} checked={checked} onChange={e => setChecked(e.target.checked)} />
      <Radiogroup
        {...common}
        name={`radio-${id}`}
        label={`Plan ${id}`}
        options={[
          { value: 'a', label: 'Básico', description: 'Para una persona' },
          { value: 'b', label: 'Equipo', description: 'Hasta 10 personas' },
        ]}
        value={radio}
        onChange={setRadio}
      />
      <Toggle {...common} label={`Activar ${id}`} checked={toggle} onChange={setToggle} />
      <Slider {...common} label={`Volumen ${id}`} value={slider} onChange={setSlider} />
      <Spinner {...common} label="Cargando" ariaLabel={`Cargando ${id}`} />
    </section>
  )
}

function Audit() {
  return (
    <main style={{ padding: 16, display: 'grid', gap: 24, fontFamily: 'system-ui, sans-serif', color: '#1a1f2b', background: '#fff' }}>
      <h1 style={{ margin: 0 }}>Auditoría de accesibilidad — Prisma UI</h1>
      {cvs.map(cv => (
        <div key={cv} style={{ display: 'grid', gap: 16 }}>
          <h2 style={{ margin: 0 }}>Modo de visión: {cv}</h2>
          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {a11ys.flatMap(a11y => variants.map(v => <Row key={`${v}-${a11y}`} v={v} cv={cv} a11y={a11y} />))}
          </div>
        </div>
      ))}
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<Audit />)
