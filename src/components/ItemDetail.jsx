import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const [added, setAdded] = useState(false);

  const onAdd = (cantidad) => {
    console.log(`Se agregaron ${cantidad} unidades.`);
    setAdded(true);
  };

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Descripción: {producto.descripcion}</p>
      <p>Stock: {producto.stock}</p>
      {added ? (
        <p>Producto agregado al carrito</p>
      ) : (
        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;