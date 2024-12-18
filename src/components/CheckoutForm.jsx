import React, { useState, useContext } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';

const CheckoutForm = () => {
  const { carrito, vaciarCarrito } = useContext(CartContext);
  const [formData, setFormData] = useState({ nombre: '', email: '' });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore();

    const orden = {
      buyer: formData,
      items: carrito,
      total: carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), orden);
      setOrderId(docRef.id);
      vaciarCarrito();
    } catch (error) {
      console.error('Error al generar la orden:', error);
    }
  };

  return (
    <div className="container mt-5">
      {orderId ? (
        <h4>¡Gracias por tu compra! ID de la orden: {orderId}</h4>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Finalizar Compra</h2>
          <div className="mb-3">
            <label>Nombre</label>
            <input type="text" name="nombre" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-success">Confirmar Compra</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;