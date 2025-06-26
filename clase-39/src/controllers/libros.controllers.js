// const Libro = require("../models/libros.model");
const Libro = require("../models/libros.model");

const getLibros = (req, res) => {
  try {
    const libros = Libro.findAll();

    res.json({ status: "success", data: libros });
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

const getLibroById = (req, res) => {
  try {
    const { id } = req.params;
    const libro = Libro.findById(id);

    res.json({ status: "success", data: libro });
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

const createLibro = (req, res) => {
  try {
    const body = req.body;

    Libro.create(body);

    res.json({ status: "success", message: "Libro creado" });
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

const updateLibro = (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;

    Libro.update(body, id);

    res.json({ status: "success", message: "Libro actualizado" });
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

const deleteLibro = (req, res) => {
  try {
    const id = req.params.id;

    Libro.delete(id);

    res.json({ status: "success", message: "Libro eliminado" });
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

module.exports = {
  getLibros,
  getLibroById,
  createLibro,
  deleteLibro,
  updateLibro,
};
