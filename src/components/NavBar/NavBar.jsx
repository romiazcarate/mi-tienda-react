import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import './navBar.css';

const NavBar = () => {
    const { carrito } = useContext(CartContext);

    // Calcular la cantidad total de productos en el carrito
    const totalProductos = carrito.reduce((total, item) => total + item.cantidad, 0);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mi Tienda</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100 justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/Color unico">Color único</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/Colores varios">Colores varios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/Pintura total">Pintura total</Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="btn btn-outline-light d-flex align-items-center ">
                        <span className="me-2">🛒</span>
                        <span>{totalProductos}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
