import { useState, useEffect } from "react";
import { Personaje } from "./Personaje";
import { getPersonajes } from "../services/personajes";

export const ListaPersonajes = () => {
  const [personajes, setPersonajes] = useState([]);

  const fetch = async () => {
    const response = await getPersonajes();

    if (response.status != 200) {
      console.log("Ocurrio un error");
    } else {
      setPersonajes(response.data);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {personajes.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {personajes.map((personaje) => (
            <Personaje key={personaje.id} personaje={personaje} />
          ))}
        </ul>
      )}
    </div>
  );
};
