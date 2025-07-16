const jwt = require("jsonwebtoken");

const login = (req, res) => {
  if (!req.body?.username || !req.body?.password) {
    return res
      .status(401)
      .json({ status: "failure", message: "Faltan proveer las credenciales" });
  }

  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res
      .status(401)
      .json({ status: "failure", message: "Credenciales incorrectas" });
  }

  const token = jwt.sign(user, "secreto", { expiresIn: "1h" });

  res.status(200).json({ status: "success", token });
};

module.exports = {
  login,
};

const users = [
  {
    username: "pepe",
    password: "asd",
  },
  {
    username: "mario",
    password: "asd",
  },
  {
    username: "estela",
    password: "asd",
  },
];
