const verificarPerfil1 = (req, res, next) => {
  const user = req.body;
  if (user.perfil != 1) {
    res.status(401).json({
      error: "Acceso al recurso denegado, se requiere perfil administrador",
    });
  }
  next();
};

const verificarPerfil2 = (req, res, next) => {
  const { perfil, nombre, id } = req.body;
  if (perfil != 2) {
    res.status(401).json({
      error: "Acceso al recurso denegado, se requiere perfil vendedor",
    });
  }
  next();
};

const verificarPerfil3 = (req, res, next) => {
  const { perfil, nombre, id } = req.body;
  if (perfil != 3) {
    res.status(401).json({
      error: "Acceso al recurso denegado, se requiere perfil cliente",
    });
  }
  next();
};

module.exports = { verificarPerfil1, verificarPerfil2, verificarPerfil3 };
