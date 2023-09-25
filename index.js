//------------LIBRERIAS---------------------------

const express = require("express"); //importacion de libreria
const bodyParser = require("body-parser"); //importacion de libreria
const telefonoRoutes = require("./routes/telefono");

// Inicializar express
const app = express();

// ------------MIDDLEWARE-------------------------

app.use(bodyParser.json());

// -------------DECLARACION DE ENDPOINTS -----------------------------

app.use("/api", telefonoRoutes);

app.get("/api/*", (req, res) => {
  res.status(404).json({
    error:
      "El recurso que quiere consumir no existe, revise los datos de la url",
  });
});

// ----------- LEVANTAMOS EL SERVIDOR EN EL PUERTO 8000 ------------------

app.listen(8000, () => {
  console.log("Servidor levantado y escuchando en el puerto 8000");
});
