# Componente Textarea

Componente de área de texto multilínea con conteo de caracteres, redimensionado automático y características de accesibilidad.

## Importación

```tsx
import { Textarea } from 'neo-ram-prisma';
```

## Uso Básico

```tsx
<Textarea 
  label="Comentarios" 
  placeholder="Escribe tus comentarios aquí..."
  variant="primary" 
/>
```

## Referencia de Props

### Props Requeridas
- `label` - Etiqueta de texto para el textarea

### Props Opcionales

| Prop | Tipo | Predeterminado | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Variante de color del textarea |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño del textarea |
| `fontSize` | `'fs-xs' \| 'fs-sm' \| 'fs-md' \| 'fs-lg' \| 'fs-xl'` | `'fs-md'` | Anulación del tamaño de fuente |
| `colorVision` | `'normal' \| 'protanopia' \| 'deuteranopia' \| 'tritanopia'` | `'normal'` | Modo de accesibilidad para daltonismo |
| `accessibility` | `'default' \| 'low-vision' \| 'high-contrast'` | `'default'` | Modo de mejora de accesibilidad |
| `value` | `string` | - | Valor controlado del textarea |
| `defaultValue` | `string` | - | Valor predeterminado no controlado |
| `placeholder` | `string` | - | Texto de placeholder |
| `disabled` | `boolean` | `false` | Desactivar el textarea |
| `required` | `boolean` | `false` | Marcar textarea como requerido |
| `readonly` | `boolean` | `false` | Hacer textarea de solo lectura |
| `error` | `boolean` | `false` | Mostrar estado de error |
| `errorMessage` | `string` | - | Mensaje de error a mostrar |
| `helperText` | `string` | - | Texto de ayuda para el textarea |
| `rows` | `number` | `4` | Número inicial de filas |
| `minRows` | `number` | - | Número mínimo de filas (para autoResize) |
| `maxRows` | `number` | - | Número máximo de filas (para autoResize) |
| `autoResize` | `boolean` | `false` | Redimensionar automáticamente basado en contenido |
| `resize` | `'none' \| 'vertical' \| 'horizontal' \| 'both'` | `'vertical'` | Control de redimensionado manual |
| `maxLength` | `number` | - | Longitud máxima de caracteres |
| `showCharCount` | `boolean` | `false` | Mostrar contador de caracteres |
| `wrapText` | `'soft' \| 'hard'` | `'soft'` | Comportamiento de ajuste de línea |
| `spellCheck` | `boolean` | `true` | Habilitar revisión ortográfica |
| `onChange` | `(value: string, event: ChangeEvent) => void` | - | Manejador de evento de cambio |
| `onFocus` | `(event: FocusEvent) => void` | - | Manejador de evento de foco |
| `onBlur` | `(event: FocusEvent) => void` | - | Manejador de evento de desenfoque |
| `onKeyDown` | `(event: KeyboardEvent) => void` | - | Manejador de evento de tecla presionada |
| `className` | `string` | - | Clases CSS adicionales |
| `name` | `string` | - | Nombre del campo de formulario |

## Ejemplos

### Uso Básico

```tsx
// Textarea simple
<Textarea 
  label="Descripción del Proyecto"
  placeholder="Describe los objetivos y alcance del proyecto..."
  rows={6}
  variant="primary"
/>

// Con texto de ayuda
<Textarea 
  label="Biografía"
  placeholder="Cuéntanos sobre ti..."
  helperText="Esta información aparecerá en tu perfil público"
  variant="secondary"
/>

// Con contador de caracteres
<Textarea 
  label="Tweet"
  placeholder="¿Qué está pasando?"
  maxLength={280}
  showCharCount
  variant="primary"
/>
```

### Estado Controlado

```tsx
function EditorMensaje() {
  const [mensaje, setMensaje] = useState('');
  const [contadorPalabras, setContadorPalabras] = useState(0);

  const contarPalabras = (texto) => {
    return texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;
  };

  const manejarCambio = (nuevoTexto) => {
    setMensaje(nuevoTexto);
    setContadorPalabras(contarPalabras(nuevoTexto));
  };

  return (
    <div className="editor-mensaje">
      <Textarea
        label="Mensaje del Blog"
        value={mensaje}
        onChange={manejarCambio}
        placeholder="Escribe tu artículo aquí..."
        autoResize
        minRows={6}
        maxRows={20}
        maxLength={5000}
        showCharCount
        variant="primary"
        helperText={`${contadorPalabras} palabras`}
      />
      
      <div className="estadisticas-texto">
        <span>Palabras: {contadorPalabras}</span>
        <span>Caracteres: {mensaje.length}/5000</span>
      </div>
    </div>
  );
}
```

### Formulario de Comentarios

```tsx
function FormularioComentario() {
  const [comentario, setComentario] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');

  const manejarEnvio = async (e) => {
    e.preventDefault();
    
    if (comentario.trim().length < 10) {
      setError('El comentario debe tener al menos 10 caracteres');
      return;
    }
    
    setEnviando(true);
    setError('');
    
    try {
      await enviarComentario(comentario);
      setComentario('');
      // Mostrar éxito
    } catch (err) {
      setError('Error al enviar el comentario. Inténtalo de nuevo.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="formulario-comentario">
      <Textarea
        label="Tu Comentario"
        value={comentario}
        onChange={(valor) => {
          setComentario(valor);
          setError('');
        }}
        placeholder="Comparte tus pensamientos..."
        minRows={3}
        maxRows={8}
        autoResize
        maxLength={1000}
        showCharCount
        error={!!error}
        errorMessage={error}
        variant={error ? "danger" : "primary"}
        required
        disabled={enviando}
      />
      
      <Button 
        type="submit" 
        variant="primary" 
        disabled={comentario.trim().length < 10 || enviando}
      >
        {enviando ? 'Enviando...' : 'Publicar Comentario'}
      </Button>
    </form>
  );
}
```

### Editor de Código Simple

```tsx
function EditorCodigo() {
  const [codigo, setCodigo] = useState(`function saludar(nombre) {
  return "¡Hola, " + nombre + "!";
}

console.log(saludar("Mundo"));`);

  return (
    <div className="editor-codigo">
      <Textarea
        label="Editor de Código JavaScript"
        value={codigo}
        onChange={setCodigo}
        rows={12}
        resize="both"
        variant="secondary"
        fontSize="fs-sm"
        spellCheck={false}
        className="fuente-monoespacio"
        helperText="Escribe tu código JavaScript aquí"
      />
      
      <div className="controles-editor">
        <Button 
          onClick={() => setCodigo('')} 
          variant="secondary" 
          size="sm"
        >
          Limpiar
        </Button>
        <Button 
          onClick={() => console.log(codigo)} 
          variant="primary" 
          size="sm"
        >
          Ejecutar
        </Button>
      </div>
    </div>
  );
}
```

### Textarea con Autocompletado

```tsx
function TextareaAutocompletado() {
  const [texto, setTexto] = useState('');
  const [sugerencias, setSugerencias] = useState([]);
  const [posicionCursor, setPosicionCursor] = useState(0);

  const etiquetasComunes = [
    '#javascript', '#react', '#typescript', '#css', 
    '#html', '#nodejs', '#frontend', '#backend'
  ];

  const manejarCambio = (nuevoTexto, evento) => {
    setTexto(nuevoTexto);
    setPosicionCursor(evento.target.selectionStart);
    
    // Detectar si el usuario está escribiendo una etiqueta
    const palabraActual = obtenerPalabraEnPosicion(nuevoTexto, evento.target.selectionStart);
    
    if (palabraActual.startsWith('#')) {
      const sugerenciasFiltradas = etiquetasComunes.filter(etiqueta =>
        etiqueta.toLowerCase().includes(palabraActual.toLowerCase())
      );
      setSugerencias(sugerenciasFiltradas);
    } else {
      setSugerencias([]);
    }
  };

  const insertarSugerencia = (sugerencia) => {
    const nuevotexto = reemplazarPalabraEnPosicion(texto, posicionCursor, sugerencia);
    setTexto(nuevotexto);
    setSugerencias([]);
  };

  return (
    <div className="textarea-con-sugerencias">
      <Textarea
        label="Publicación Social"
        value={texto}
        onChange={manejarCambio}
        placeholder="¿Qué está pasando? Usa # para etiquetas..."
        autoResize
        minRows={3}
        maxRows={6}
        maxLength={500}
        showCharCount
        variant="primary"
      />
      
      {sugerencias.length > 0 && (
        <div className="sugerencias">
          {sugerencias.map((sugerencia, indice) => (
            <button 
              key={indice}
              onClick={() => insertarSugerencia(sugerencia)}
              className="sugerencia"
            >
              {sugerencia}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

### Formulario de Retroalimentación

```tsx
function FormularioRetroalimentacion() {
  const [datosFormulario, setDatosFormulario] = useState({
    tipo: '',
    asunto: '',
    descripcion: '',
    pasos: '',
    expectativa: ''
  });

  const actualizarCampo = (campo, valor) => {
    setDatosFormulario(prev => ({ ...prev, [campo]: valor }));
  };

  return (
    <form className="formulario-retroalimentacion">
      <Select
        label="Tipo de Retroalimentación"
        value={datosFormulario.tipo}
        onChange={(valor) => actualizarCampo('tipo', valor)}
        options={[
          { value: 'bug', label: 'Reporte de Error' },
          { value: 'feature', label: 'Solicitud de Función' },
          { value: 'improvement', label: 'Sugerencia de Mejora' }
        ]}
        required
      />
      
      <Input
        label="Asunto"
        value={datosFormulario.asunto}
        onChange={(e) => actualizarCampo('asunto', e.target.value)}
        placeholder="Descripción breve del problema o sugerencia"
        required
      />
      
      <Textarea
        label="Descripción Detallada"
        value={datosFormulario.descripcion}
        onChange={(valor) => actualizarCampo('descripcion', valor)}
        placeholder="Proporciona una descripción detallada..."
        minRows={4}
        maxRows={8}
        autoResize
        maxLength={2000}
        showCharCount
        required
        variant="primary"
      />
      
      {datosFormulario.tipo === 'bug' && (
        <Textarea
          label="Pasos para Reproducir"
          value={datosFormulario.pasos}
          onChange={(valor) => actualizarCampo('pasos', valor)}
          placeholder="1. Ir a la página...&#10;2. Hacer clic en...&#10;3. Ver el error..."
          minRows={3}
          maxRows={6}
          autoResize
          variant="warning"
          helperText="Describe los pasos exactos para reproducir el problema"
        />
      )}
      
      <Textarea
        label="Comportamiento Esperado"
        value={datosFormulario.expectativa}
        onChange={(valor) => actualizarCampo('expectativa', valor)}
        placeholder="Describe lo que esperabas que ocurriera..."
        minRows={2}
        maxRows={4}
        autoResize
        variant="success"
      />
      
      <Button type="submit" variant="primary">
        Enviar Retroalimentación
      </Button>
    </form>
  );
}
```

### Diferentes Tamaños

```tsx
<Textarea label="Extra Pequeño" size="xs" variant="primary" />
<Textarea label="Pequeño" size="sm" variant="secondary" />
<Textarea label="Mediano" size="md" variant="success" />
<Textarea label="Grande" size="lg" variant="warning" />
<Textarea label="Extra Grande" size="xl" variant="danger" />
```

### Características de Accesibilidad

```tsx
// Modo de alto contraste
<Textarea 
  label="Textarea de alto contraste" 
  accessibility="high-contrast"
  variant="primary"
  placeholder="Escribe aquí..."
/>

// Para usuarios con protanopia
<Textarea 
  label="Campo crítico" 
  colorVision="protanopia"
  variant="danger"
  error
  errorMessage="Este campo requiere atención"
/>

// Modo de baja visión
<Textarea 
  label="Textarea de gran visibilidad" 
  accessibility="low-vision"
  size="xl"
  fontSize="fs-lg"
  variant="primary"
/>
```

### Plantillas y Formatos

```tsx
function EditorPlantillas() {
  const [contenido, setContenido] = useState('');
  const [plantillaSeleccionada, setPlantillaSeleccionada] = useState('');

  const plantillas = {
    email: `Asunto: [Tu asunto aquí]

Estimado/a [Nombre],

[Cuerpo del mensaje]

Atentamente,
[Tu nombre]`,
    
    informe: `# Informe de Estado del Proyecto

## Resumen Ejecutivo
[Resumen breve]

## Progreso Actual
- [ ] Tarea 1
- [ ] Tarea 2
- [ ] Tarea 3

## Próximos Pasos
[Pasos a seguir]

## Riesgos e Issues
[Problemas identificados]`,
    
    actas: `# Actas de Reunión

**Fecha:** ${new Date().toLocaleDateString()}
**Participantes:** [Lista de participantes]

## Agenda
1. [Punto 1]
2. [Punto 2]
3. [Punto 3]

## Decisiones Tomadas
- [Decisión 1]
- [Decisión 2]

## Acciones a Seguir
- [ ] [Acción 1] - Responsable: [Nombre]
- [ ] [Acción 2] - Responsable: [Nombre]`
  };

  const aplicarPlantilla = (tipo) => {
    setContenido(plantillas[tipo]);
    setPlantillaSeleccionada('');
  };

  return (
    <div className="editor-plantillas">
      <div className="controles-plantilla">
        <Select
          label="Seleccionar Plantilla"
          value={plantillaSeleccionada}
          onChange={setPlantillaSeleccionada}
          options={[
            { value: 'email', label: 'Plantilla de Email' },
            { value: 'informe', label: 'Informe de Proyecto' },
            { value: 'actas', label: 'Actas de Reunión' }
          ]}
          placeholder="Elegir plantilla..."
        />
        
        {plantillaSeleccionada && (
          <Button 
            onClick={() => aplicarPlantilla(plantillaSeleccionada)}
            variant="secondary"
            size="sm"
          >
            Aplicar Plantilla
          </Button>
        )}
      </div>
      
      <Textarea
        label="Editor de Contenido"
        value={contenido}
        onChange={setContenido}
        placeholder="Selecciona una plantilla o empieza a escribir..."
        autoResize
        minRows={10}
        maxRows={25}
        maxLength={10000}
        showCharCount
        variant="primary"
        resize="both"
      />
    </div>
  );
}
```

## Características de Accesibilidad

### Cumplimiento WCAG 2.1 AA
- ✅ **Etiquetado apropiado** con elementos `<label>` asociados
- ✅ **Navegación por teclado** estándar de textarea
- ✅ **Comunicación de estado** con atributos ARIA
- ✅ **Soporte para lectores de pantalla** con descripciones

### Navegación por Teclado
- **Tab**: Enfocar/desenfocar textarea
- **Ctrl+A**: Seleccionar todo el texto
- **Ctrl+Z/Y**: Deshacer/rehacer cambios
- **Ctrl+Enter**: Envío rápido (en formularios)
- **Alt+Enter**: Nueva línea (en algunos contextos)

### Soporte para Lectores de Pantalla
- Etiquetas y descripciones apropiadamente asociadas
- Estado de error anunciado claramente
- Contador de caracteres comunicado cuando es relevante
- Placeholder text anunciado como ayuda contextual

### Funcionalidad de Redimensionado
- Redimensionado manual respeta preferencias del usuario
- Auto-redimensionado mejora la usabilidad sin afectar accesibilidad
- Límites de tamaño comunicados cuando son alcanzados
- Scroll automático para mantener contenido visible

## Interfaz TypeScript

```tsx
interface TextareaProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontSize?: 'fs-xs' | 'fs-sm' | 'fs-md' | 'fs-lg' | 'fs-xl';
  colorVision?: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  accessibility?: 'default' | 'low-vision' | 'high-contrast';
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  rows?: number;
  minRows?: number;
  maxRows?: number;
  autoResize?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  maxLength?: number;
  showCharCount?: boolean;
  wrapText?: 'soft' | 'hard';
  spellCheck?: boolean;
  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  className?: string;
  name?: string;
}
```

## Componentes Relacionados

- [**Input**](./Input.md) - Para texto de una sola línea
- [**Select**](./Select.md) - Para selección de opciones predefinidas

---

[← Volver a la Documentación](../README.md)