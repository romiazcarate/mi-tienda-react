import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import './navBar.css';

const NavBar = () => {
    const { carrito } = useContext(CartContext);

    // Calcular la cantidad total de productos en el carrito
    const totalProductos = carrito.reduce((total, item) => total + item.cantidad, 0);

    return (
        <nav className="navbar">
            <Link className="navbar-brand" to="/">Mi Tienda</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/category/Color unico">Color único</Link>
                </li>
                <li className="nav-item">
                    <Link to="/category/Colores varios">Colores varios</Link>
                </li>
                <li className="nav-item">
                    <Link to="/category/Pintura total">Pintura total</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
            <Link to="/cart" className="cart-icon">
                🛒 {totalProductos}
            </Link>
        </nav>
    );
};

export default NavBar;
