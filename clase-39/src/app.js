const express = require("express");
const librosRouter = require("./routes/libros.routes");

const app = express();

const PORT = Number(process.argv[2]) || 3000;

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

// Middlewares
app.use(express.json());

// Router
app.use("/libros", librosRouter);
