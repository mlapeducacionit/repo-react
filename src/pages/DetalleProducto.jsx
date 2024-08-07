import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinner from '../components/Spinner'

const DetalleProducto = () => {

    const [producto, setProducto] = useState(null)

    /* Para obtener los parametros pasados como parte de la url uso un Hook */
    const { id } = useParams()
    // console.log(id)
    
    useEffect(() => {
        getOneProducto()
    }, [])

    const getOneProducto = async () => {
      const url = import.meta.env.VITE_API_PRODUCTOS

      try {

        const urlPeticion = url + id

        const res = await fetch(urlPeticion)

        if ( !res.ok ) {
          throw new Error('No se pudo obtener el producto')
        }

        const data = await res.json()

        //console.log(data)

        setProducto(data)
        
      } catch (error) {
        console.error('[getOneProducto]', error)
      }

    }

    

  return (
    <>
      {
        producto ? <h1>{producto.nombre}</h1> : <Spinner />
      }
    </>
  )
}

export default DetalleProducto