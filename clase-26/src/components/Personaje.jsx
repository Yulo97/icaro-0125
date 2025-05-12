import { useState, useEffect } from "react";

export const Personaje = ({ personaje }) => {
  const [color, setColor] = useState("black");

  useEffect(() => {
    switch (personaje.family) {
      case "House Stark":
        setColor("blue");
        break;

      case "House Targaryen":
        setColor("red");
        break;

      case "House Baratheon":
        setColor("#f6ce2f ");
        break;

      case "House Lannister":
        setColor("#F0221E");
        break;

      case "House Lanister":
        setColor("#F0221E");
        break;

      default:
        break;
    }
  }, []);

  return (
    <li style={{ listStyle: "none" }}>
      <div
        style={{
          display: "flex",
          margin: "15px",
          border: "0.5px solid black",
          padding: "10px",
          borderRadius: "8px",
          gap: "8px",
        }}
      >
        <img src={personaje.imageUrl} style={{ width: "50px" }} />
        <h4>{personaje.fullName}</h4>
        <h6
          style={{
            color: color,
          }}
        >
          {personaje.family}
        </h6>
      </div>
    </li>
  );
};
