import React from 'react';
import './cartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src="/carrito.png" alt="Carrito" />
            <span>0</span> 
        </div>
    );
};

export default CartWidget;