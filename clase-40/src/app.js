const express = require("express");
const productosRouter = require("./routes/productos.routes");
const usuariosRouter = require("./routes/usuarios.routes");
const logger = require("./middlewares/globales");
const handleError = require("./middlewares/errors");
const morgan = require("morgan");

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log("Server UP", PORT));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
// app.use(logger); // global

// Router
// app.use("/productos", logger, productosRouter); Se aplica el middleware solo a un Router
app.use("/productos", productosRouter);
app.use("/usuarios", usuariosRouter);

// Middleware para manejo de errores
app.use(handleError);
