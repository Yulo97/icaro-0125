// 1. Importar a express
const express = require("express");

// 2. Guardar en app la ejecicion de express
const app = express();

// 3. Ejecutamos en metodo "listen" y le asignamos un puerto
app.listen(3002, () => {
  console.log("Servidor escuchando en puerto 3000");
});

// 4. Crear el endpoint "/" con el metodo GET
app.get("/", (req, res) => {
  res.send("Hola mundo desde Express!");
});
