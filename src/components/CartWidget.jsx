import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { totalProductos } = useContext(CartContext);

    return (
        <div className="cart-widget">
            <img src="/carrito.png" alt="Carrito" />
            <span>{totalProductos}</span>
        </div>
    );
};

export default CartWidget;