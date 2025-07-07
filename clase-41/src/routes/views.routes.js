const { Router } = require("express");
const { isLogin, isAdmin } = require("../middlewares/auth.middleware");

const router = Router();

router.get("/login", (req, res) => {
  res.cookie("nombre", "Alberto", { maxAge: 60000 });
  res.render("login.ejs");
});

router.get("/ver", (req, res) => {
  res.send(`nombre: ${req.signedCookies.nombre}`);
});

router.get("/eliminar", (req, res) => {
  res.clearCookie("nombre");
  res.send("Cookie Eliminada");
});

router.get("/mi-usuario", isLogin, (req, res) => {
  // const { user, role } = JSON.parse(req.signedCookies.user);
  // res.send(`Bienvenido ${user}. Tu rol es ${role}`);

  console.log(req.session.user);
  const { user, role } = req.session.user;

  res.render("perfil.ejs", { user, role });
});

module.exports = router;
