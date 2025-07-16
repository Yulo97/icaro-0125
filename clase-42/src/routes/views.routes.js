const { Router } = require("express");
const { isLogin } = require("../middlewares/auth.middleware");

const router = Router();

router.get("/", isLogin, (req, res) => {
  // res.json({ message: "LLEGASTE", user: req.user });
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
