const { Router } = require("express");
const librosControllers = require("../controllers/libros.controllers");

const router = Router();

router.get("/", librosControllers.getLibros);
router.get("/:id", librosControllers.getLibroById);
router.post("/", librosControllers.createLibro);
router.put("/:id", librosControllers.updateLibro);
router.delete("/:id", librosControllers.deleteLibro);

module.exports = router;
