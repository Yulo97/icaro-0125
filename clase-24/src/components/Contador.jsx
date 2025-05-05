import { useState } from "react";

export const Contador = ({ valorInicial = 0 }) => {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const resetear = () => {
    setContador(0);
  };

  return (
    <div>
      <h3>Contador: {contador}</h3>

      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
      <button onClick={resetear}>Resetear</button>
    </div>
  );
};
