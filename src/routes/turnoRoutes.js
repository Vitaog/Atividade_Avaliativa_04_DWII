const express = require("express");
const router = express.Router();
const turnoController = require("../controllers/turnoController");

router.get("/", turnoController.getTurnos);

module.exports = router