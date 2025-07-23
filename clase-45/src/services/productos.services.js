const Producto = require("../models/producto");
const Categoria = require("../models/categoria");

const getAll = async (filters) => {
  const where = {};

  if (filters.categoriaId) where.categoriaId = filters.categoriaId;
  if (filters.name) where.name = filters.name;

  return await Producto.findAll({
    attributes: { exclude: ["categoriaId"] },
    include: [{ model: Categoria, attributes: ["name"] }],
    where,
  });
};

const getById = async (id) => await Producto.findByPk(id);
const create = async (body) => await Producto.create(body);

module.exports = {
  getAll,
  create,
  getById,
};
