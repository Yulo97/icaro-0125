const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    titulo: "HOLA MUNDO !",
    nombre: "Ana Belen Del Lujan",
    admin: false,
  });
});

router.get("/productos/:id", (req, res) => {
  const id = req.params.id;

  res.render("producto", productos[id]);
});

router.get("/productos", (req, res) => {
  res.render("productos", { productos });
});

router.get("/upload", (req, res) => {
  res.render("uploadImage");
});

module.exports = router;

const productos = [
  {
    id: 0,
    producto: "Cafetera",
    precio: 5000,
    detalle:
      "Excelente calidad y de color negro para que convien con tu cocina",
  },
  {
    id: 1,
    producto: "Televisor",
    precio: 15000,
    detalle:
      "Excelente calidad y de color blanco para que convien con tu living",
  },
];
