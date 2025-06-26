@echo off
set /p projectName="Nombre del proyecto: "
mkdir %projectName%
cd %projectName%

echo Creando estructura de carpetas...
mkdir controllers
mkdir models
mkdir routes
mkdir views
mkdir config

echo Inicializando proyecto Node.js...
echo {
  "name": "%projectName%",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  }
} > package.json

echo Instalando Express...
call npm init -y >nul
call npm install express >nul

echo Creando archivo app.js...
(
echo const express = require('express');
echo const app = express();
echo const PORT = process.env.PORT || 3000;
echo.
echo app.use(express.json());
echo.
echo app.get('/', (req, res) => {
echo     res.send('Servidor Express en marcha 🚀');
echo });
echo.
echo app.listen(PORT, () => {
echo     console.log(`Servidor corriendo en puerto %PORT%`);
echo });
) > app.js

echo Proyecto "%projectName%" creado con éxito.
pause
