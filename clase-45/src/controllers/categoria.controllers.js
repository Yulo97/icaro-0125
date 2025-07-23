const Categoria = require("../models/categoria");

const getCategories = async (req, res) => {
  try {
    const data = await Categoria.findAll();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Error al descargar categorias",
      error,
    });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const data = await Categoria.findByPk(req.params.id);

    if (data) return res.status(200).json(data);

    res
      .status(404)
      .json({ status: "failure", message: "Categoria no encontrada" });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Error al descargar categorias",
      error,
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const body = req.body;

    await Categoria.create(body);

    res.status(201).json({ status: "success", message: "Categoria Creada" });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Error al crear la categoria",
      error,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id, ...body } = req.body;

    await Categoria.update(body, {
      where: {
        id,
      },
    });

    res
      .status(200)
      .json({ status: "success", message: "Categoria actualizada" });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Error al actualizar categoria",
      error,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedData = await Categoria.destroy({ where: { id } });

    if (!deletedData)
      return res
        .status(404)
        .json({ status: "failure", message: "Categoria no encontrada" });

    res.status(200).json({ status: "success", message: "Categoria eliminada" });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Error al eliminar la categoria",
      error,
    });
  }
};

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
  getCategoryById,
  updateCategory,
};
