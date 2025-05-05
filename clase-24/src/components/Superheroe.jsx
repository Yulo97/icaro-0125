import React from "react";

export const Superheroe = ({ nombre, descripcion, imagen }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "8px",
        margin: "5px",
        padding: "15px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3>Nombre: {nombre} </h3>
      <img width={"75px"} src={imagen} alt="" />
      <p>{descripcion}</p>
    </div>
  );
};
