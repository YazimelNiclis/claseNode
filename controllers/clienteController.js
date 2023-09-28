const knex = require("../config/knexfile");

const listaClientes = async (req, res) => {
  try {
    const resultado = await knex("clientes");
    res.json(resultado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const listaClientesReducida = async (req, res) => {
  const id = Number(req.params.id);
  knex("clientes")
    .select("clienteid", "cedula_ruc", "nombrecia")
    .where("clienteid", id)
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

const insertarCliente = async (req, res) => {
  const { clienteid, cedula_ruc, nombrecia, nombrecontacto, direccioncli } =
    req.body;
  knex("clientes")
    .select("clienteid")
    .where("clienteid", clienteid)
    .then((resultado) => {
      if (resultado.length) {
        res.status(400).json({ error: "Ya existe un registro con ese id" });
        return;
      }
      knex("clientes")
        .insert({
          clienteid: clienteid,
          cedula_ruc: cedula_ruc,
          nombrecia: nombrecia,
          nombrecontacto: nombrecontacto,
          direccioncli: direccioncli,
        })
        .then(() => {
          res
            .status(200)
            .json({ mensaje: "Se inserto correctamente el registro" });
        })
        .catch((error) => {
          res.status(400).json({ error: error.message });
        });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

const insertarCliente2 = async (req, res) => {
  const { clienteid, cedula_ruc, nombrecia, nombrecontacto, direccioncli } =
    req.body;

  try {
    const validacion = await knex("clientes")
      .select("clienteid")
      .where("clienteid", clienteid);
    if (validacion) {
      res.status(400).json({ error: "Ya existe un registro con ese id" });
      return;
    }
    await knex("clientes").insert({
      clienteid: clienteid,
      cedula_ruc: cedula_ruc,
      nombrecia: nombrecia,
      nombrecontacto: nombrecontacto,
      direccioncli: direccioncli,
    });
    res.status(200).json({ mensaje: "Se inserto correctamente el registro" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { listaClientes, listaClientesReducida, insertarCliente2 };
