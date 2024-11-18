import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './itemListContainer.css';
import { Link } from 'react-router-dom';


const ItemListContainer = ({ mensaje }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

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

                const normalizedCategoryId = categoryId?.toLowerCase().replace(/%20/g, ' ');
                const filteredProducts = categoryId
                    ? mockProductos.filter((item) => item.categoria.toLowerCase() === normalizedCategoryId)
                    : mockProductos;

                resolve(filteredProducts);
            }, 1000);
        });

        fetchData.then((data) => {
            setProductos(data);
            setLoading(false);
        });
    }, [categoryId]);

    return (
        <div className="item-list-container">
            <h2>{categoryId ? `Categoría: ${categoryId}` : mensaje}</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div className="productos-grid">
                    {productos.map((producto) => (
                        <div key={producto.id} className="producto-card">
                            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
                            <h3>{producto.nombre}</h3>
                            <p>{producto.descripcion}</p>
                            <Link to={`/item/${producto.id}`} className="ver-detalle-btn">Ver detalle</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default ItemListContainer;