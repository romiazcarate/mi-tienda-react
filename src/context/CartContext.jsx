import React, { createContext, useState } from 'react';
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    const itemExistente = carrito.find((item) => item.id === producto.id)

    if (itemExistente) {
      setCarrito(carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + producto.cantidad } : item
      ));
    } else {
      setCarrito([...carrito, producto])
    }

    Swal.fire({
      title: "Producto agregado",
      text: `${producto.title} se ha agregado al carrito.`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    })
  }

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id))
  }

  const vaciarCarrito = () => setCarrito([])

  const totalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0)

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, totalProductos }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;