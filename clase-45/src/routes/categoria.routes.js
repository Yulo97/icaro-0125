const { Router } = require("express");
const categoriaControllers = require("../controllers/categoria.controllers");

const router = Router();

router.get("/", categoriaControllers.getCategories);
router.get("/:id", categoriaControllers.getCategoryById);
router.post("/", categoriaControllers.createCategory);
router.put("/", categoriaControllers.updateCategory);
router.delete("/:id", categoriaControllers.deleteCategory);

module.exports = router;
