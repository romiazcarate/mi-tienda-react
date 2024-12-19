import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../../context/CartContext"; 



const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito, carrito } = useContext(CartContext)
  const [added, setAdded] = useState(false)

  const onAdd = (cantidad) => {
    const itemEnCarrito = carrito.find((item) => item.id === producto.id)
    const cantidadExistente = itemEnCarrito ? itemEnCarrito.cantidad : 0

    if (cantidadExistente + cantidad <= producto.stock) {
      agregarAlCarrito({ ...producto, cantidad })
      setAdded(true)
      console.log(`Se agregaron ${cantidad} unidades.`)
    
    }else{
      alert(
        `No podes agregar más de ${producto.stock - cantidadExistente} unidades de este producto.`
      )
    }
  }

  return (
    <div className="container mt-5">
      <div className="card mb-3 shadow-lg">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={producto.image} 
              className="img-fluid rounded-start"
              alt={producto.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{producto.title}</h2>
              <p className="card-text text-muted">Precio: ${producto.price}</p>
              <p className="card-text">Descripción: {producto.description}</p>
              <p className="card-text text-secondary">Stock: {producto.stock}</p>
              {added ? (
                <div className="alert alert-success">
                  Producto agregado al carrito
                </div>
              ) : (
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;