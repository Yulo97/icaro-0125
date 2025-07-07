const login = (req, res) => {
  const body = req.body;

  if (body.user !== user.user || body.pass !== user.pass) {
    return res.send("Credenciales Incorrectas");
  }

  const { pass, ...resto } = user;

  //   GUARDAMOS EL USER EN UNA COOKIE
  //   res.cookie("user", JSON.stringify(resto), { maxAge: 600000, signed: true });

  // CREAR UNA SESION
  req.session.user = resto;

  res.redirect("/mi-usuario");
};

const logout = (req, res) => {
  req.session.destroy();
  res.clearCookie("connect.sid");
  res.redirect("/login");
};

const user = {
  user: "asd",
  pass: "asd",
  role: "admin",
};

module.exports = { login, logout };
