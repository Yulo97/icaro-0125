import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        {/* Nombre */}
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            minLength: {
              value: 2,
              message: "El minimo de caracteres es 2",
            },
            maxLength: 20,
          })}
        />
        {errors.nombre && <span>{errors.nombre.message}</span>}

        {/* Password */}
        <label htmlFor="password">Contraseña:</label>
        <input
          type="text"
          name="password"
          {...register("password", {
            required: true,
          })}
        />
        {errors.password && <span>Contraseña requerida</span>}

        {/* Email */}
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" {...register("email")} />

        <button type="submit">Enviar</button>

        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </form>
    </>
  );
}

export default App;
