const express = require("express");
const {
  listaClientes,
  listaClientesReducida,
  insertarCliente2,
} = require("../controllers/clienteController");
const router = express.Router();

router.get("/listaClientes", listaClientes);
router.get("/listaClientesReducida/:id", listaClientesReducida);
router.post("/insertarCliente", insertarCliente2);

module.exports = router;
