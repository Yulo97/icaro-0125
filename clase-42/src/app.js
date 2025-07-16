const express = require("express");
const authRouter = require("./routes/auth.routes");
const viewsRouter = require("./routes/views.routes");
const usuariosRouter = require("./routes/usuarios.routes");
const path = require("path");

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log("Server UP:", PORT));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Router
app.use("/auth", authRouter);
app.use("/usuarios", usuariosRouter);
app.use("/", viewsRouter);
