const { Router } = require("express");
const authControllers = require("../controllers/auth.controllers");

const router = Router();

router.post("/login", authControllers.login);

module.exports = router;
