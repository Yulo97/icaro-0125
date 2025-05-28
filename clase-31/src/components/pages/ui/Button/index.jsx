export const Button = ({ texto, color, size = "grande" }) => {
  return (
    <button
      style={{ color: color, padding: size === "grande" ? "22px" : "16px" }}
    >
      {texto}
    </button>
  );
};
