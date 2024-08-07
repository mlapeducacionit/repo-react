import { Link } from "react-router-dom";
import { notificacionSweet } from "./TablaFila.service";


const TablaFila = ( { product, eliminarProducto, setProductoAEditar } ) => {
    
  //console.log(product) // product = {id, nombre, categoria, }

  const handleEliminar = () => {
    
    notificacionSweet(product.nombre, () => {
      eliminarProducto(product.id)
    })

  }

  const handleEditar = (prod) => {
    //console.log(prod)
    setProductoAEditar(prod)
  }

  return (
    <tr>
      <th scope="row">{product.nombre}</th>
      <td>{product.categoria}</td>
      <td>${product.precio}</td>
      <td>
        <Link className="btn btn-info me-2" to={`/detalle-producto/${product.id}`}>Ver</Link>
        <button className="btn btn-warning me-2" onClick={() => handleEditar(product)}>Editar</button>
        <button className="btn btn-danger" onClick={handleEliminar}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TablaFila;
