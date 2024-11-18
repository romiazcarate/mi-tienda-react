// ItemDetailContainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const { id } = useParams(); // Obtener el ID del producto desde la URL
    const [producto, setProducto] = useState(null); // Producto único
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = new Promise((resolve) => {
            setTimeout(() => {
                const mockProductos = [
                    { id: 1, categoria: 'Color unico', nombre: 'Producto 1', imagen: '/images/colorUnico1.jpeg', descripcion: 'Pintura roja de alta calidad, ideal para interiores.' },
                    { id: 2, categoria: 'Color unico', nombre: 'Producto 2', imagen: '/images/colorUnico2.jpeg', descripcion: 'Pintura roja de alta calidad, ideal para interiores.' },
                    { id: 3, categoria: 'Colores varios', nombre: 'Producto 1', imagen: '/images/colorVario1.jpeg', descripcion: 'Pintura roja de alta calidad, ideal para interiores.' },
                    { id: 4, categoria: 'Colores varios', nombre: 'Producto 2', imagen: '/images/colorVario2.jpeg', descripcion: 'Pintura roja de alta calidad, ideal para interiores.' },
                    { id: 5, categoria: 'Pintura total', nombre: 'Producto 1', imagen: '/images/pintura1.jpeg', descripcion: 'Pintura roja de alta calidad, ideal para interiores.' },
                    { id: 6, categoria: 'Pintura total', nombre: 'Producto 2', imagen: '/images/pintura2.jpeg', descripcion: 'Pintura roja de alta calidad, ideal para interiores.' },
                ];

                // Convertir `id` a número antes de compararlo
                const selectedProduct = mockProductos.find(
                    (item) => item.id === Number(id) // Aseguramos que ambos sean números
                );
                resolve(selectedProduct);
            }, 1000);
        });

        fetchData.then((data) => {
            setProducto(data);
            setLoading(false);
        });
    }, [id]);

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : producto ? (
                <div className="producto-detalle">
                    <h2>{producto.nombre}</h2>
                    <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
                    <p>{producto.descripcion}</p>
                </div>
            ) : (
                <p>No se encontró el producto.</p>
            )}
        </div>
    );
};
export default ItemDetailContainer;