const { Router } = require("express");
const usuariosControllers = require("../controllers/usuarios.controllers");

const router = Router();

router.get("/", usuariosControllers.getUsuarios);

module.exports = router;
