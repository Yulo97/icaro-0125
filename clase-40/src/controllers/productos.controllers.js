const getProducts = (req, res, next) => {
  try {
    res.status(200).json({ status: "success", message: "Productos obtenidos" });
  } catch (error) {
    next(error);
  }
};

const getProductById = (req, res, next) => {
  try {
    if (!req.query.id) {
      throw new Error("Debes proporcionar un ID");
    }

    res.status(200).json({ status: "success", message: "Producto obtenido" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

const createProduct = (req, res, next) => {
  try {
    res.status(200).json({ status: "success", message: "Producto creado" });
  } catch (error) {
    next(error);
  }
};

const updateProduct = (req, res, next) => {
  try {
    res
      .status(200)
      .json({ status: "success", message: "Producto actualizado" });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = (req, res, next) => {
  try {
    res.status(200).json({ status: "success", message: "Producto eliminado" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  updateProduct,
  createProduct,
  getProductById,
  deleteProduct,
};
