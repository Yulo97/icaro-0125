const { Router } = require("express");

const router = Router();

// Obtener todas las Peliculas
router.get("/", (req, res) => {
  const { genero } = req.query;

  if (!genero) {
    return res.status(200).json(peliculas);
  }

  const peliculasFiltradas = peliculas.filter(
    (pelicula) => pelicula.genero.toLowerCase() === genero.toLowerCase()
  );

  return res.status(200).json(peliculasFiltradas);
});

// Obtener todas Pelicula por ID
router.get("/:id", (req, res) => {
  const id = req.params.id;

  res.status(200).json(peliculas[id]);
});

// Crear un pelicula
router.post("/", (req, res) => {
  const body = req.body;

  peliculas.push(body);

  res.status(200).json({ status: "success", message: "Pelicula creada" });
});

// Eliminar una pelicula
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  peliculas.splice(id, 1);
  res.status(200).json({ status: "success", message: "Pelicula eliminada" });
});

// Actualizar una pelicula
router.put("/:id", (req, res) => {
  const body = req.body;
  const id = req.params.id;

  peliculas[id] = body;

  res.status(200).json({ status: "success", message: "Pelicula actualizada" });
});

module.exports = router;

const peliculas = [
  {
    name: "Titanic",
    genero: "Romance",
    estreno: 1997,
  },
  {
    name: "Harry Potter",
    genero: "Ciencia Ficcion",
    estreno: 2003,
  },
  {
    name: "Tienes un Email",
    genero: "Romance",
    estreno: 2018,
  },
  {
    name: "Star Wars IV",
    genero: "Ciencia Ficcion",
    estreno: 1977,
  },
];
