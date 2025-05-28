import styles from "./protegido.module.css";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export const Protegido = () => {
  return (
    <div>
      <h1 className={styles.tituloSecundario}>Esta es una ruta protegida</h1>
      <Button color="red" texto="Ver" />
      <Button color="blue" texto="Comprar" />

      <Card
        titulo={"Receta: Pastas de la Nona"}
        parrafo={"Estos son los pasos para hacer la receta"}
        textoButton={"Ver Receta"}
      />

      <Card
        titulo={"Receta: Asado"}
        parrafo={"Estos son los pasos para hacer la receta"}
        textoButton={"Ver Receta"}
      />
    </div>
  );
};
