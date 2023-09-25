import { createRoot } from 'react-dom/client'
import { App } from './App'
const root = createRoot(document.getElementById('app')) // Creación de la raiz de un nodo en el DOm para poder renderizar.
// root.render(<h1> Hola mundito</h1>) se renderiza en la pagina principal index.html.
root.render(<App />)
