var cliente = require("./../controllers/clientes.js");
var https = require("https");

module.exports = function(app) {
  app.post("/crearCliente", function(req, res) {
    cliente.crearCliente(req, res);
  });

  setInterval(function() {
    https.get("https://salty-cliffs-33321.herokuapp.com/");
  }, 300000);
};
