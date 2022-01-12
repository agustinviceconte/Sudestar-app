import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const onDecrease = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  };
  const onIncrease = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  };

  const onAdd = () => {
    const message = `Agregaste ${count} producto`;

    count == 1 ? alert(message) : alert(`${message}s`);
  };

  return (
    <div>
      <h1 className="contador">Contador</h1>
      <div className="contenedorContador">
        <button className="boton" onClick={onDecrease}>
          -
        </button>
        <h3 className="contador">{count}</h3>
        <button className="boton" onClick={onIncrease}>
          +
        </button>
        
      </div>
        <div className="agregar">
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
      
    </div>
  );
};

export default ItemCount;
