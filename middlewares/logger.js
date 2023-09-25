const loggerGetParams = (req, res, next) => {
  console.log("Metodo de la request", req.method);
  console.log("Parametros de la request", req.params);
  console.log("Url de la request", req.url);
  next();
};

const loggerGet = (req, res, next) => {
  console.log("Metodo de la request", req.method);
  console.log("Url de la request", req.url);
  next();
};

const loggerPost = (req, res, next) => {
  console.log("Metodo de la request", req.method);
  console.log("Body de la request", req.body);
  console.log("Url de la request", req.url);
  next();
};

module.exports = { loggerGetParams, loggerGet, loggerPost };
