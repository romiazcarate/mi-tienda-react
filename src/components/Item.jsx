import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Link } from "react-router-dom"; 
import './item.css';


const Item = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const handleAgregarCarrito = async () => {
    if (producto.stock > 0) {
      // Actualizar stock en Firestore
      const productoRef = doc(db, "productos", producto.id);
      await updateDoc(productoRef, { stock: producto.stock - 1 });

      // Agregar al carrito
      agregarAlCarrito({ ...producto, cantidad: 1 });
    } else {
      alert("Producto sin stock disponible.");
    }
  };

  return (
    <div className="card h-100 text-center">
      <img
        src={producto.image}
        className="card-img-top"
        alt={producto.title}
        style={{ height: "200px", objectFit: "cover" }}
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
  );
};

export default Item;