const express = require("express");
const router = express.Router();
const funcionarioController = require("../controllers/funcionarioController");

router.get("/", funcionarioController.getFuncionarios);

router.get("/:id", funcionarioController.getFuncionarioById);

router.post("/", funcionarioController.cadastroFuncionario);

router.put("/:id", funcionarioController.updateFuncionario);

router.delete("/:id", funcionarioController.deletarFuncionario);

module.exports = router