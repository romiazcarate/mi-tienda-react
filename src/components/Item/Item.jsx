import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom"; 
import './item.css';


const Item = ({ producto }) => {
  const { agregarAlCarrito,carrito } = useContext(CartContext)
  // console.log(CartContext)
  const handleAgregarCarrito = async () => {
    let productoAgregar
  
    
    const itemExistente = carrito.find((item) => item.id === producto.id)
  
    if (itemExistente) {
      
      productoAgregar = itemExistente;
      console.log("El producto ya está en el carrito:", productoAgregar)
    } else {
      
      productoAgregar = { ...producto, cantidad: 1 }
      console.log("Producto a agregar:", productoAgregar)
    }
  
    
    const totalCantidadEnCarrito = itemExistente ? itemExistente.cantidad : 0
  
    if (producto.stock - totalCantidadEnCarrito > 0) {
      // Agregar al carrito
      agregarAlCarrito({ ...producto, cantidad: 1 })
      console.log("Producto agregado al carrito.")
    } else {
      alert("Producto sin stock disponible.")
    }
  };
  

  return (
    <div className="card h-100 text-center">
      <img
        src={producto.image}
        className="card-img-top"
        alt={producto.title}
        style={{ height: "300px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{producto.title}</h5>
        <p className="card-text">${producto.price}</p>
        <p>Stock: {producto.stock}</p>
        <button className="btn btn-primary" onClick={handleAgregarCarrito}>
          Agregar al Carrito
        </button>
        {/* Botón para ver detalles */}
        <Link to={`/item/${producto.id}`} className="btn btn-info">
          Ver Detalles
        </Link>
      </div>
    </div>
  )
}

export default Item;