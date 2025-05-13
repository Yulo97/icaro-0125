import { useState } from "react";

export const Formulario = () => {
  const [form, setForm] = useState({
    nombre: "",
    password: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.nombre) return console.log("❌ Nombre requerido");
    if (!form.password) return console.log("❌ Contraseña requerida");

    console.log("Formulario Enviado 👍");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Nombre */}
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />

        {/* Contraseña */}
        <label htmlFor="password">Contraseña: </label>
        <input
          className="input"
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};
