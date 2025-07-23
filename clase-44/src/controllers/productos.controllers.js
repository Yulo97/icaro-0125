const productosModel = require("../model/productos.model");

const getAllProducts = async (req, res) => {
  try {
    const data = await productosModel.getAllProductos();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ status: "failure", error });
  }
};

const getProductoById = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await productosModel.getProductById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ status: "failure", error });
  }
};

const createProduct = async (req, res) => {
  try {
    const data = await productosModel.createProduct(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ status: "failure", error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await productosModel.deleteProduct(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ status: "failure", error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const data = await productosModel.updateProduct(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ status: "failure", error });
  }
};

module.exports = {
  getAllProducts,
  getProductoById,
  createProduct,
  deleteProduct,
  updateProduct,
};
