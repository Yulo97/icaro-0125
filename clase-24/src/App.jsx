import { Titulo } from "./components/Titulo";
import { Superheroe } from "./components/Superheroe";
import { Contador } from "./components/Contador";

function App() {
  return (
    <>
      <Titulo />

      {/* TARJETAS SUPERHEROS */}
      <div style={{ display: "flex" }}>
        <Superheroe
          nombre={"IronMan"}
          descripcion={"Tiene un supertraje"}
          imagen={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExHrVQYT5SWY4NodkOYSu0WxvwZ9E1QU0bw&s"
          }
        />
        <Superheroe
          nombre={"Thor"}
          descripcion={"Es el hijo de Odin"}
          imagen={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT90dl70OK7oBl0y1ylvOPIaxwBZwbzRoFoPQ&s"
          }
        />
        <Superheroe
          nombre={"Spiderman"}
          descripcion={"Tiene poderes aragnidos"}
          imagen={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/960px-Spider-Man.jpg"
          }
        />
      </div>

      {/* CONTADOR */}
      <Contador valorInicial={5} />
      <Contador valorInicial={15} />
      <Contador />
    </>
  );
}

export default App;
