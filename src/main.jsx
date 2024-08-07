import React from 'react' // Corazon de react
import ReactDOM from 'react-dom/client' // Un adapatador para gestionar el DOM
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as bootstrap from 'bootstrap' /* javascript bootstrap */

import './index.css'
import Productos from './Productos'
import NoEncontrado from './pages/NoEncontrado'
import Inicio from './pages/Inicio'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'
import Navbar from './components/Navbar'
import DetalleProducto from './pages/DetalleProducto'

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <BrowserRouter>

    {/* Navbar */}
    <Navbar />

    <Routes>

      <Route path="/" element={<Inicio />}/>
      <Route path="/productos" element={<Productos />} />
      <Route path="/detalle-producto/:id" element={<DetalleProducto />} /> {/* ! Parametro ID es Obligatorio */}
      {/* <Route path="/detalle-producto/:id?" element={<DetalleProducto />} /> */} {/* Parametro ID es Opcional */}
      <Route path="/nosotros" element={<Nosotros />}/>
      <Route path="/contacto" element={<Contacto />}/>
      <Route path="*" element={<NoEncontrado />} />

    </Routes>

  </BrowserRouter>
)

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InicioApp />
     
    2 Formas de colocar un componente
    <InicioApp />
    <InicioApp></InicioApp> 
  </React.StrictMode>,
) */
