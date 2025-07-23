const { Router } = require("express");
const productosControllers = require("../controllers/productos.controllers");

const router = Router();

router.get("/", productosControllers.getAllProducts);
router.get("/:id", productosControllers.getProductById);
router.post("/", productosControllers.createProduct);

module.exports = router;
