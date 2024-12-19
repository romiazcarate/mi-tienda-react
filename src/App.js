import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/Checkout/CheckoutForm';
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
