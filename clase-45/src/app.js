const express = require("express");
const sequelize = require("./db/config/db.js");
const productosRouter = require("./routes/productos.routes.js");
const categoriaRouter = require("./routes/categoria.routes.js");

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`Server UP in port ${PORT}`));

// Middlewares
app.use(express.json());

const probarConexion = async () => {
  try {
    // await sequelize.sync({ force: true });
    await sequelize.sync({ alter: true });

    console.log("Conexion establecida");
  } catch (error) {
    console.log("Conexion fallida:", error);
  }
};

probarConexion();

// Router
app.use("/producto", productosRouter);
app.use("/categoria", categoriaRouter);
