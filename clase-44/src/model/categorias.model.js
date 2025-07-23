const connection = require("../db/config");

const createCategory = async (body) => {
  try {
    await connection.beginTransaction();

    const [rows] = await connection.execute(
      "INSERT INTO categorias (categoria) VALUES (?)",
      [body.categoria]
    );

    await connection.commit();

    console.log("Transaccion exitosa");

    return rows;
  } catch (error) {
    await connection.rollback();
    console.log("ROLLBACK ejecutado:", error.message);
  }
};

module.exports = {
  createCategory,
};
