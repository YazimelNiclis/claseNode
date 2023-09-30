const express = require("express");
const {
  listaClientes,
  listaClientesReducida,
  insertarCliente2,
} = require("../controllers/clienteController");
const { verifyToken } = require("../middlewares/auth");
const { verificarPerfil1 } = require("../middlewares/permisos");

const router = express.Router();

router.get("/listaClientes", verifyToken, verificarPerfil1, listaClientes);
router.get("/listaClientesReducida/:id", listaClientesReducida);
router.post("/insertarCliente", insertarCliente2);

module.exports = router;
