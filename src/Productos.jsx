import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Tabla from "./components/Tabla"

/* CONTENEDOR */
const Productos = () => {
  const url = import.meta.env.VITE_API_PRODUCTOS
  
  const [products, setProducts] = useState(null)
  const [productoAEditar, setProductoAEditar] = useState(null)

  useEffect(() => {
    document.title = 'Educación IT - Productos'
    console.log('Se monta el componente en la pantalla')
    obtenerTodosLosProductos()
  }, [])
  
  const obtenerTodosLosProductos = async () => {
    
    try {

      const res = await fetch(url)

      if (!res.ok) {
        throw new Error(`No se pudo obtener los productos ${res.status}`)
      }

      const data = await res.json()

      setProducts(data)
      
    } catch (error) {
      console.error('[obtenerTodosLosProductos]', error)
    }

  }

  const agregarProducto = async (producto) => {

    try {
       
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(producto)
      }

      const res = await fetch(url, options)

      if (!res.ok) {
        throw new Error(`No se pudo crear el producto ${res.status}`)
      }

      const dataNuevoProducto = await res.json()

      console.log(dataNuevoProducto) // nuevo id

      const nuevoEstadoProductos = [...products, dataNuevoProducto]
      setProducts(nuevoEstadoProductos)


    } catch (error) {
      console.error('[agregarProducto]', error)
    }


   }

  const editarProducto = async (productoEditado) => { 

    try {

      
      const urlEdicion = url + productoEditado.id 
      const options = {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(productoEditado)
      }
      const res = await fetch(urlEdicion, options)

      if ( !res.ok ) {
        throw new Error(`No se pudo editar el producto ${res.status}`)
      }
      
      const dataEditado = await res.json()
      console.log(dataEditado)
 

      const nuevoEstadoProductos = products.map( 
        prod => 
          (prod.id === productoEditado.id)
          ?
           productoEditado 
           : 
           prod
          )
      
      setProducts(nuevoEstadoProductos)

      
    } catch (error) {
      console.error('[editarProducto]', error)
    }

  }

  const eliminarProducto = async (id) => { 

    try {
      

      const urlEliminacion = url + id 

      const options = {
        method: 'DELETE'
      }

      const res = await fetch(urlEliminacion, options)

      if ( !res.ok ) {
        throw new Error(`No se pudo borrar el producto ${res.status}`)
      }

      const dataEliminado = await res.json()

      const data = {
        id: id,
        producto: dataEliminado
      }

      const nuevoEstadoProductos = products.filter( prod => prod.id !== data.id)
      setProducts(nuevoEstadoProductos)

    } catch (error) {
      
    }



  }

  return (
    <div className="container">
      <Formulario 
        agregarProducto={agregarProducto}
        productoAEditar={productoAEditar}
        setProductoAEditar={setProductoAEditar}
        editarProducto={editarProducto}
      />
      <Tabla 
        products={products} 
        eliminarProducto={eliminarProducto}
        setProductoAEditar={setProductoAEditar}
      />
    </div>
  )
}

export default Productos