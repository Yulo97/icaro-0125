const jwt = require("jsonwebtoken");

const isLogin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res
      .status(401)
      .json({ status: "Failure", message: "Debes proporcionar un TOKEN" });

  jwt.verify(token, "secreto", (error, decoded) => {
    if (error) {
      return res.status(401).json({
        status: "Failure",
        message: "Token INVALIDO",
        error: error.message,
      });
    }
    const { username, password } = decoded;

    req.user = { username, password };
    next();
  });
};

module.exports = {
  isLogin,
};
