import React from "react";
import { Mensaje1 } from "./Mensaje1";
import { Mensaje2 } from "./Mensaje2";

export const Button = () => {
  const mostrarMensaje = false;

  const renderizarMensaje = () => {
    if (mostrarMensaje) {
      return <Mensaje1 />;
    } else {
      return <Mensaje2 />;
    }
  };

  return (
    <>
      <p>{renderizarMensaje()}</p>
    </>
  );
};
