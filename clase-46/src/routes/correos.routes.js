const { Router } = require("express");
const correosControllers = require("../controllers/correos.controllers");

const router = Router();

router.post("/envio", correosControllers.envioMail);
router.get("/envio", correosControllers.envioMailPlantilla);

module.exports = router;
