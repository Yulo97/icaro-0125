const { Router } = require("express");
const productosControllers = require("../controllers/productos.controllers");

const router = Router();

router.get("/", productosControllers.getAllProducts);
router.get("/:id", productosControllers.getProductoById);
router.post("/", productosControllers.createProduct);
router.delete("/:id", productosControllers.deleteProduct);
router.put("/:id", productosControllers.updateProduct);

module.exports = router;
