import React, { useState, useContext } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useLocation } from "react-router-dom";

const CheckoutForm = () => {
  //console.log(carrito)
  const { carrito, vaciarCarrito } = useContext(CartContext);
  const [formData, setFormData] = useState({ nombre: '', email: '' })
  const [orderId, setOrderId] = useState(null)
  // console.log(carrito)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const db = getFirestore()

    const orden = {
      buyer: formData,
      items: carrito,
      total: carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
      date: new Date(),
    }

    try {
      const docRef = await addDoc(collection(db, 'orders'), orden)
      setOrderId(docRef.id)
      const productoRef = doc(db, "productos", carrito[0].id)
      await updateDoc(productoRef, { stock: carrito[0].stock - 1 })
      vaciarCarrito()
    } catch (error) {
      console.error('Error al generar la orden:', error)
    }
  }

  return (
    <div className="container mt-5">
      {orderId ? (
        <div className="alert alert-success">
          <h4>¡Gracias por tu compra! </h4>
          <p>ID de la orden: <strong>{orderId}</strong></p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded bg-light">
          <h2 className="text-center mb-4">Finalizar Compra</h2>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" name="nombre" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-success w-100">Confirmar Compra</button>
        </form>
      )}
    </div>
  )
}

export default CheckoutForm;