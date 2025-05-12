import axios from "axios";

export const getPersonajes = async () => {
  return await axios.get("https://thronesapi.com/api/v2/Characters");
};

export const getPersonaje = async (id) => {
  return await axios.get(`https://thronesapi.com/api/v2/Characters/${id}`);
};
