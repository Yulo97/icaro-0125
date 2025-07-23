const productoService = require("../services/productos.services");

const getAllProducts = async (req, res) => {
  try {
    const filters = req.query;

    const data = await productoService.getAll({ ...filters });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Error al obtener todos los productos",
      error,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const data = await productoService.getById(req.params.id);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Error al obtener el producto",

      error,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { body } = req;

    const data = await productoService.create(body);

    res
      .status(200)
      .json({ status: "success", message: "Producto creado", data });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Error al crear el producto",
      error,
    });
  }
};

module.exports = {
  createProduct,
  getProductById,
  getAllProducts,
};
