import { useState, useEffect } from "react";

const Componente = () => {
  const [nombre, setNombre] = useState("Pepers");

  const handleChange = (event) => {
    const value = event.target.value;
    setNombre(value);
  };

  useEffect(() => {
    console.log("El nombre es:", nombre);
  }, [nombre]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Efecto Activo");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Componente Desmontando");
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        onChange={handleChange}
      />
      <h1>Nombre: {nombre}</h1>
    </div>
  );
};

export default Componente;
