//------------LIBRERIAS---------------------------

const express = require("express"); //importacion de libreria
const bodyParser = require("body-parser"); //importacion de libreria
const telefonoRoutes = require("./routes/telefono");
const clienteRoutes = require("./routes/clienteRoutes");
const authRoutes = require("./routes/authRoutes");
const morgan = require("morgan");
const cors = require("cors");

// Inicializar express
const app = express();

// ------------MIDDLEWARE-------------------------
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

// -------------DECLARACION DE ENDPOINTS -----------------------------

app.use("/api", telefonoRoutes);
app.use("/api", clienteRoutes);
app.use("/api", authRoutes);

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
