import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import CartProvider from './context/CartContext';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer mensaje="Bienvenidos a Polymera" />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer mensaje="Categoría" />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<CheckoutForm />} />
                    <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;
