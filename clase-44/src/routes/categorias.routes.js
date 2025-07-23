const { Router } = require("express");
const categoriasControllers = require("../controllers/categorias.controllers");

const router = Router();

router.post("/", categoriasControllers.createCategory);

module.exports = router;
