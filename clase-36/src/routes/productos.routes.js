const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  const order = req.query.order;

  if (order === "desc") {
    const ordenadoDesc = [...productos];

    ordenadoDesc.sort((a, b) => b.id - a.id);

    res.json(ordenadoDesc);
  } else {
    res.json(productos);
  }
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const producto = productos.find((producto) => producto.id == id);
  res.json(producto);
});

module.exports = router;

const productos = [
  {
    id: 1,
    nombre: "Auriculares Bluetooth",
    precio: 18999,
    categoria: "Electrónica",
  },
  { id: 2, nombre: "Camiseta Deportiva", precio: 5499, categoria: "Ropa" },
  { id: 3, nombre: "Notebook 15''", precio: 489999, categoria: "Tecnología" },
  { id: 4, nombre: "Mochila Urbana", precio: 21999, categoria: "Accesorios" },
  { id: 5, nombre: "Mouse Gamer", precio: 9999, categoria: "Electrónica" },
  { id: 6, nombre: "Libro 'El Alquimista'", precio: 3799, categoria: "Libros" },
  { id: 7, nombre: "Silla Ergonómica", precio: 89999, categoria: "Oficina" },
  { id: 8, nombre: "Zapatillas Running", precio: 32999, categoria: "Calzado" },
  { id: 9, nombre: "Botella Térmica", precio: 7499, categoria: "Hogar" },
  { id: 10, nombre: "Smartwatch", precio: 69999, categoria: "Tecnología" },
];
