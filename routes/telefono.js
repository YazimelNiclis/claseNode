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
//importo logger
const {
  loggerGetParams,
  loggerGet,
  loggerPost,
} = require("../middlewares/logger");
//import middlewares de autorizacion
const {
  verificarPerfil1,
  verificarPerfil2,
  verificarPerfil3,
} = require("../middlewares/permisos");
const { verifyToken } = require("../middlewares/auth");

//Utilizamos la funcion Router de express
const router = express.Router();

//primero se verifica la autenticacion(si esta logeado), y luego la autorizacion (si tiene los permisos)
router.get("/agenda", verifyToken, verificarPerfil1, agendaAll);

router.post(
  "/agenda",
  loggerPost,
  datosTelefono,
  runValidation,
  verificarPerfil3,
  agendaAdd
);

router.get(
  "/agenda/:id",
  loggerGetParams,
  paramTelefono,
  runValidation,
  verificarPerfil3,
  agendaFilter
);

module.exports = router;
