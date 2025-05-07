import { useEffect, useState } from "react";
import axios from "axios";

export const Buscador = () => {
  const [id, setId] = useState(1);
  const [personaje, setPersonaje] = useState({});

  const baseURL = `https://rickandmortyapi.com/api/character/`;

  const getCharacter = async () => {
    try {
      const response = await axios(baseURL + id);
      setPersonaje(response.data);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  const handleChangeId = (event) => setId(event.target.value);

  useEffect(() => {
    getCharacter();
  }, [id]);

  return (
    <div>
      <input
        type="number"
        placeholder="ID"
        min={1}
        max={255}
        onChange={handleChangeId}
      />
      <h2>{personaje.name}</h2>
      <img src={personaje.image} alt="" />
      <h3>Localizacion: {personaje.location.name}</h3>
      <h3>Genero: {personaje.gender}</h3>
    </div>
  );
};
