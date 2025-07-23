const connection = require("../db/config");

const getAllProductos = async () => {
  const [rows] = await connection.query(
    "SELECT * FROM productos ORDER BY precio ASC"
  );
  return rows;
};

const getProductById = async (id) => {
  const [rows] = await connection.query(
    `SELECT p.*, c.categoria FROM productos AS p
    INNER JOIN categorias AS c
    ON p.id = c.id
    WHERE p.id = ?
    `,
    [id]
  );

  return rows;
};

const createProduct = async (data) => {
  const { nombre, precio, categoriaId } = data;

  const [rows] = await connection.query(
    "INSERT INTO productos (nombre, precio, categoriaId) VALUES (?, ?, ?)",
    [nombre, precio, categoriaId]
  );

  return rows;
};

const deleteProduct = async (id) => {
  const [rows] = await connection.query(
    "DELETE FROM productos WHERE id = ? limit 1",
    [id]
  );

  return rows;
};

const updateProduct = async (id, data) => {
  if (!data.nombre || !data.precio || !data.categoriaId) {
    throw new Error("Debes proporcionar todos los datos");
  }

  const [rows] = await connection.query(
    "UPDATE productos SET nombre = ?, precio = ?, categoriaId = ? WHERE id = ?",
    [data.nombre, data.precio, data.categoriaId, id]
  );

  return rows;
};

module.exports = {
  getAllProductos,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
