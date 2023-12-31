const verificarPerfil1 = (req, res, next) => {
  const user = req.user;
  console.log(user);
  if (user.perfil != 1) {
    res.status(401).json({
      error: "Acceso al recurso denegado, se requiere perfil administrador",
    });
    return;
  }
  next();
};

const verificarPerfil2 = (req, res, next) => {
  const { perfil } = req.user;
  if (perfil != 2) {
    res.status(401).json({
      error: "Acceso al recurso denegado, se requiere perfil vendedor",
    });
    return;
  }
  next();
};

const verificarPerfil3 = (req, res, next) => {
  const { perfil } = req.user;
  if (perfil != 3) {
    res.status(401).json({
      error: "Acceso al recurso denegado, se requiere perfil cliente",
    });
    return;
  }
  next();
};

module.exports = { verificarPerfil1, verificarPerfil2, verificarPerfil3 };
