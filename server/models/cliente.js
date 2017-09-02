var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
	nombreCliente: {
		type: String,
		require: true
	},
	apellidoCliente:
	{
		type: String,
		requrie: true
	},
	nombreEmpresa: {
		type: String
	},
	ubicacionCliente: {
		type: String
	},
	telefono: {
		type: Number
	},
	email: {
		type: String,
		require: true,
		unique: true
	},
	tipoServicio: {
		type: String
	},
	origenServicio: {
		type: String
	},
	destinoServicio: {
		type: String
	},
	producto: {
		type: String
	},
	comentarios: {
		type: String
	}
}, {timestamps: true});

mongoose.model("Cliente", ClienteSchema);