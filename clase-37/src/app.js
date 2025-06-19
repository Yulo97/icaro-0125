const express = require("express");
const moviesRouter = require("./router/movies.routes.js");

const app = express();
const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Servidor funcionando en el puerto ${PORT}`)
);

// Middlewares
app.use(express.json());

// Router
app.use("/movies", moviesRouter);
