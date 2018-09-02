var cliente = require('./../controllers/clientes.js');
var http = require('http');

module.exports = function(app) {
  app.post('/crearCliente', function(req, res) {
    cliente.crearCliente(req, res);
  });

  setInterval(function() {
    http.get('https://salty-cliffs-33321.herokuapp.com/');
  }, 300000);
};
