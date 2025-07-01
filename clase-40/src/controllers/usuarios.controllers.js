const getUsuarios = (req, res) => {
  res.status(200).json({ status: "success", message: "Obteniendo usuario" });
};

module.exports = { getUsuarios };
