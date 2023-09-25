const { check, param } = require("express-validator");

//validador de body con funcion check
const datosTelefono = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name es un campo requerido")
    .isString()
    .withMessage("El campo solo debe contener letras"),
  check("number")
    .not()
    .isEmpty()
    .withMessage("Number es un campo requerido")
    .isNumeric()
    .withMessage("El campo solo debe contener numeros")
    .isLength({ min: 9, max: 12 })
    .withMessage("Debe contener minimo 9 numeros y 12 numeros como maximo"),
];

const paramTelefono = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("Se requiere un id por uri params")
    .isNumeric()
    .withMessage("El campo debe ser numerico"),
];

module.exports = { datosTelefono, paramTelefono };
