const { Router } = require("express");

const router = Router();

router.post("/subir-imagen", (req, res) => {
  console.log(req);

  res.send("ARCHIVO subido");
});

module.exports = router;
