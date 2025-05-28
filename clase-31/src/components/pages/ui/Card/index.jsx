import styles from "./card.module.css";
import { Button } from "../Button";

export const Card = ({ titulo, parrafo, textoButton }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <p>{parrafo}</p>
      <Button texto={textoButton} color={"blueviolet"} size="pequeño" />
    </div>
  );
};
