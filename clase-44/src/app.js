const express = require("express");
const productosRouter = require("./routes/productos.routes");
const categoriasRouter = require("./routes/categorias.routes");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto", PORT);
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
app.use("/productos", productosRouter);
app.use("/categorias", categoriasRouter);
