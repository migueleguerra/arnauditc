var cliente = require("./../controllers/clientes.js");
var https = require("https");

module.exports = function(app) {
  app.post("/crearCliente", function(req, res) {
    cliente.crearCliente(req, res);
  });
};
