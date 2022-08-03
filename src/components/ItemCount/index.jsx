import React, { useState, useEffect } from "react";
import "../ItemCount/itemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));
  const incrementar = () => {
    setCount(count + 1);
  };
  const decrementar = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);
  return (
    <div className="itemCount">
      <button onClick={incrementar} disabled={count >= stock}>
        +
      </button>
      <button onClick={decrementar} disabled={count <= 1}>
        -
      </button>
      <span>{count}</span>
      <div className="itemButton">
        <button onClick={() => onAdd(count)} disabled={stock <= 1}>
          agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
