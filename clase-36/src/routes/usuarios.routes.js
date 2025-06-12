const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.status(400).json(usuarios);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const usuario = usuarios.find((usuario) => usuario.id == id);

  if (!usuario) {
    return res
      .status(400)
      .json({ status: "error", message: "Usuario no encontrado" });
  }

  res.status(200).json(usuario);
});

module.exports = router;

const usuarios = [
  {
    id: 1,
    nombre: "Lucía Fernández",
    email: "luciaf@gmail.com",
    rol: "admin",
    activo: true,
  },
  {
    id: 2,
    nombre: "Carlos Ruiz",
    email: "cruiz@hotmail.com",
    rol: "cliente",
    activo: true,
  },
  {
    id: 3,
    nombre: "Sofía Méndez",
    email: "sofia.mz@gmail.com",
    rol: "cliente",
    activo: false,
  },
  {
    id: 4,
    nombre: "Martín López",
    email: "martinlopez@gmail.com",
    rol: "editor",
    activo: true,
  },
  {
    id: 5,
    nombre: "Ana Torres",
    email: "ana.torres@yahoo.com",
    rol: "cliente",
    activo: true,
  },
  {
    id: 6,
    nombre: "Julián Díaz",
    email: "julian.dz@gmail.com",
    rol: "cliente",
    activo: false,
  },
  {
    id: 7,
    nombre: "Valentina Pérez",
    email: "valenp@gmail.com",
    rol: "admin",
    activo: true,
  },
  {
    id: 8,
    nombre: "Esteban Romero",
    email: "esteban.romero@gmail.com",
    rol: "editor",
    activo: true,
  },
  {
    id: 9,
    nombre: "Camila García",
    email: "camigarcía@gmail.com",
    rol: "cliente",
    activo: true,
  },
  {
    id: 10,
    nombre: "Nicolás Herrera",
    email: "nico.herrera@gmail.com",
    rol: "cliente",
    activo: true,
  },
];
