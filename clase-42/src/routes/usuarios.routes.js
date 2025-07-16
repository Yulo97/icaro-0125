const { Router } = require("express");
const { isLogin } = require("../middlewares/auth.middleware");

const router = Router();

router.get("/", isLogin, (req, res) => {
  res.status(200).json(users);
});

const users = [
  {
    id: 1,
    username: "yulord",
    email: "yulord@example.com",
    password: "1234yulo",
  },
  {
    id: 2,
    username: "marce_dev",
    email: "marce@example.com",
    password: "password2",
  },
  {
    id: 3,
    username: "luz2025",
    email: "luz@example.com",
    password: "luzpass",
  },
  {
    id: 4,
    username: "nico_stack",
    email: "nico@example.com",
    password: "nico123",
  },
  {
    id: 5,
    username: "fullcoder",
    email: "fullcoder@example.com",
    password: "coderlife",
  },
  {
    id: 6,
    username: "juani_mern",
    email: "juani@example.com",
    password: "mernstack",
  },
  {
    id: 7,
    username: "flor_admin",
    email: "flor@example.com",
    password: "adminpass",
  },
  {
    id: 8,
    username: "matiux",
    email: "mati@example.com",
    password: "matiuxpass",
  },
  {
    id: 9,
    username: "lauti_dev",
    email: "lauti@example.com",
    password: "lautipass",
  },
  {
    id: 10,
    username: "alma_js",
    email: "alma@example.com",
    password: "alma2025",
  },
];

module.exports = router;
