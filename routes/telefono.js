//Importamos la libreria express
const express = require("express");
//Importamos el controller
const {
  agendaAll,
  agendaFilter,
  agendaAdd,
} = require("../controllers/telefono");
//Importar validators
const { runValidation } = require("../middlewares/validators/index");
const {
  datosTelefono,
  paramTelefono,
} = require("../middlewares/validators/telefonoValidator");

//Utilizamos la funcion Router de express
const router = express.Router();

/* router.get("/agenda", agendaAll); */

router.post("/agenda", datosTelefono, runValidation, agendaAdd);

router.get("/agenda/:id", paramTelefono, runValidation, agendaFilter);

module.exports = router;
