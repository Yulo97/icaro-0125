const express = require("express");
const morgan = require("morgan");
const transporter = require("./config/mailer");
const correosRouter = require("./routes/correos.routes");
const config = require("./config/enviroments");

const app = express();

const PORT = Number(config.PORT) || 8080;

app.listen(PORT, () => {
  console.log("Server UP in PORT", PORT);
});

// Middlewares
app.use(morgan("tiny"));
app.use(express.json());
app.use("/imagenes", express.static("public"));

// Router
app.use("/correos", correosRouter);

// Verificacion de Transporter
transporter
  .verify()
  .then(() => console.log("Transporter Exitoso"))
  .catch((err) => console.log("Error:", err));
