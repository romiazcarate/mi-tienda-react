import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CartContext);
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="container mt-5">
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío. <Link to="/">Ir a la tienda</Link></p>
      ) : (
        <>
          <ul>
            {carrito.map(item => (
              <li key={item.id} className="mb-3">
                {item.nombre} - {item.cantidad} x ${item.precio}
                <button onClick={() => eliminarDelCarrito(item.id)} className="btn btn-danger ms-2">
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h4>Total: ${total}</h4>
          <button onClick={vaciarCarrito} className="btn btn-warning me-3">Vaciar Carrito</button>
          <Link to="/checkout" className="btn btn-success">Finalizar Compra</Link>
        </>
      )}
    </div>
  );
};

export default Cart;