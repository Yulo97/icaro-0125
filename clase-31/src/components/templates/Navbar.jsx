import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/contacto"}>Contacto</Link>
        </li>
        <li>
          <Link to={"/protegido"}>Protegida</Link>
        </li>
      </ul>
    </nav>
  );
};
