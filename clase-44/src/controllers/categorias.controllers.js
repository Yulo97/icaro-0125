const categoriasModel = require("../model/categorias.model");

const createCategory = async (req, res) => {
  try {
    const data = await categoriasModel.createCategory(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ status: "failure", error });
  }
};

module.exports = {
  createCategory,
};
