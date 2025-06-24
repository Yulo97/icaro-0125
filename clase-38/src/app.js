const express = require("express");
const usuariosRouter = require("./routes/usuarios.routes");
const viewsRouter = require("./routes/views.routes");

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`Server UP port ${PORT} `));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estaticos en public
app.use("/public", express.static("public"));

// Configuracion de motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Router
app.use("/usuarios", usuariosRouter);
app.use("/", viewsRouter);
