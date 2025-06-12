const express = require("express");
const usuariosRouter = require("./routes/usuarios.routes.js");
const productosRouter = require("./routes/productos.routes.js");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server escuchando el puerto ${PORT}`);
});

// Middlewares
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1> Bienvenido a mi Servidor de Express </h1>");
});

// Router
app.use("/usuarios", usuariosRouter);
app.use("/productos", productosRouter);
