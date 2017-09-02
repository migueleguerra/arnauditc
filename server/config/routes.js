var cliente = require("./../controllers/clientes.js");

module.exports = function(app){
	app.post("/crearCliente", function(req, res){
		cliente.crearCliente(req, res);
	});
}
