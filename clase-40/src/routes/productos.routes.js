const { Router } = require("express");
const productosControllers = require("../controllers/productos.controllers");
const { isAdmin, isLogged } = require("../middlewares/auth");

const router = Router();

router.get("/", productosControllers.getProducts);
router.get("/:id", isLogged, productosControllers.getProductById);
router.post("/", isAdmin, productosControllers.createProduct);
router.put("/", isAdmin, productosControllers.updateProduct);
router.delete("/:id", [isLogged, isAdmin], productosControllers.deleteProduct);

module.exports = router;
