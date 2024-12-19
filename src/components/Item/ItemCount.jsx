import React, { useState } from 'react';
import './itemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial)

  const handleIncrement = () => {
    if (count < stock) setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <div className="item-count-container">
      <button
        className="custom-btn"
        onClick={handleDecrement}
        disabled={count === 1}
      >
        -
      </button>
      <span className="count-display">{count}</span>
      <button
        className="custom-btn"
        onClick={handleIncrement}
        disabled={count === stock}
      >
        +
      </button>
      <button
        className="add-btn"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        Agregar al Carrito
      </button>
    </div>
  )
}

export default ItemCount;