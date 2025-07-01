const isAdmin = (req, res, next) => {
  const isAdmin = true;

  if (!isAdmin) {
    return res.status(403).json({
      status: "failure",
      message: "Debes ser ADMIN para acceder aqui",
    });
  }

  next();
};

const isLogged = (req, res, next) => {
  const isLogged = true;

  if (!isLogged) {
    return res.status(403).json({
      status: "failure",
      message: "Debes estar Logueado para acceder aqui",
    });
  }

  next();
};

module.exports = {
  isAdmin,
  isLogged,
};
