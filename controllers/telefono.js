const agenda = require("../data/agenda");

const agendaAll = (req, res) => {
  res.json(agenda);
};

const agendaFilter = (req, res) => {
  const idRequest = +req.params.id;
  const result = agenda.find((registro) => registro.id === idRequest);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      error: "No se ha encontrado un registro con ese id",
      pista: "Los ids estan en un rango entre 1 y 4",
    });
  }
};

const agendaAdd = (req, res) => {
  const { name, number } = req.body;

  //creacion de id autoincremental
  const id = agenda.length + 1;

  //validacion que no se repita el id en mi base de datos
  /* const idExiste = agenda.find((telefono) => {
    return telefono.id == id;
  });

  if (idExiste) {
    res
      .status(409)
      .json({ error: "Ya existe un registro con ese id, id duplicado" });
  } */

  //todo ok
  agenda.push({ id, name, number });
  res.status(200).json(agenda);
};

module.exports = { agendaAll, agendaFilter, agendaAdd };
