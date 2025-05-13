import React from "react";
import { useForm } from "react-hook-form";

export const Formulario2 = () => {
  const { register, handleSubmit, formState, watch } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("👌 Formulario enviado");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Nombre */}
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        name="name"
        {...register("name", {
          required: {
            value: true,
            message: "El nombre es requerido",
          },
          minLength: {
            value: 3,
            message: "La cantidad minima de caracteres es 3",
          },
        })}
      />
      {errors.name && <span>{errors.name.message}</span>}

      {/* Password */}
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        {...register("password", {
          required: { value: true, message: "Contraseña requerida" },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      {/* Confirmacion de Password */}
      <label htmlFor="confirmPassword">Confirmacion de Password</label>
      <input
        type="text"
        name="confirmPassword"
        {...register("confirmPassword", {
          required: {
            value: true,
            message: "Confirmacion de contraseña requerida",
          },
          validate: (value) => {
            const password = watch("password");
            if (value === password) {
              return true;
            } else {
              return "Las contraseñas no coinciden";
            }
          },
        })}
      />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

      {/* Email */}
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        {...register("email", {
          required: { value: true, message: "Email requerido" },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@gmail.com$/,
            message: "El correo debe ser @gmail.com",
          },
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input type="submit" />
    </form>
  );
};
