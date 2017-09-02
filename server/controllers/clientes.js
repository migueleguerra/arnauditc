var request = require("request");
var mongoose = require("mongoose");
var Cliente = mongoose.model("Cliente");
const nodemailer = require("nodemailer");

//Configuración de nodemailer
let transporter = nodemailer.createTransport({
	service: "gmail",
	secure: false,
	port: 25,
	auth: {
		user: "arnauditc@gmail.com",
		pass: "Tampico2017"
	},
	tls: {
		rejectUnauthorized: false
	}
});

module.exports = (function(){
	return {

		crearCliente: function(req, res){

			if(req.body.nombreCliente == null || req.body.email == null || req.body.apellidoCliente == null)
				res.json({exito: false, msg: "Error! llenar todos los campos obligatorios"});
			else
			{
				var cliente = new Cliente({
					nombreCliente: req.body.nombreCliente,
					apellidoCliente: req.body.apellidoCliente,
					nombreEmpresa: req.body.nombreEmpresa,	
					ubicacionCliente: req.body.ubicacionCliente,
					telefono: req.body.telefono,
					email: req.body.email,
					tipoServicio: req.body.tipoServicio,
					origenServicio: req.body.origenServicio,
					destinoServicio: req.body.destinoServicio,
					producto: req.body.producto,
					comentarios: req.body.comentarios
				});

				cliente.save(function(error){
					if(error)
						if(error.code == 11000)
							return res.json({exito: false, msg: "Este correo ya existe."});
						else
							return res.json({exito: false, msg: "Error de la base de datos."});
					else
					{
						agregarEmailMailchimp(req.body.email, req.body.nombreCliente, req.body.apellidoCliente);

						let HelperOptions = {
							from: '"Arnauditc" <arnauditc@gmail.com',
							to: 'thierry@arnauditc.com',
							subject: 'nuevo cliente: ' + req.body.nombreCliente + ' ' + req.body.apellidoCliente,
							html: '<body style="padding: 0px;margin: 0px;">' +
								  '<div style="padding: 30px;margin: 0px;background: #0872BA;>' +
								  '<div style="padding: 0px;margin: 0 auto;max-width: 600px;background: white;font-family: sans-serif;">' +
								  '<h1 style="padding: 30px;margin: 0px;text-align: center;">El cliente: ' + req.body.nombreCliente + ' ' + req.body.apellidoCliente + ' mando la siguiente información:</h1>' +
						          '<table style="padding: 5px;margin: 0px;border: 2px solid black;">' +
							         '<tr style="padding: 0px;margin: 0px;">' +
								     '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Nombre:</td>' +
								     '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' + req.body.nombreCliente + '</td>' +
							         '</tr>' +
							         '<tr style="padding: 0px;margin: 0px;">' +
								     '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Apellido:</td>' +
									 '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' + req.body.apellidoCliente + '</td>' +
									 '</tr>' +
							         '<tr style="padding: 0px;margin: 0px;">' +
								     '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Email:</td>' +
								     '<td style="padding: 5px;margin: 0px;border: 2px solid black;"><a href="mailto:' + req.body.email + '" style="padding: 0px;margin: 0px;">' + req.body.email + '</a></td>' +
									 '</tr>' +
									 '<tr style="padding: 0px;margin: 0px;">' +
									 '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Empresa:</td>' +
								     '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' + req.body.nombreEmpresa + '</td>' +
									 '</tr>' +
							         '<tr style="padding: 0px;margin: 0px;">' +
								     '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Ubicación:</td>' +
								     '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' + req.body.ubicacionCliente + '</td>' +
							         '</tr>' +
									 '<tr style="padding: 0px;margin: 0px;">' +
									 '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Teléfono:</td>' +
									 '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' + req.body.telefono + '</td>' +
									 '</tr>' +
									 '<tr style="padding: 0px;margin: 0px;">' +
									 '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Tipo de servicio:</td>' +
									 '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' + req.body.tipoServicio + '</td>' +
									 '</tr>' +
								     '<tr style="padding: 0px;margin: 0px;">' +
								     '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Origen:</td>' +
								     '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' + req.body.origenServicio + '</td>' +
								     '</tr>' +
									 '<tr style="padding: 0px;margin: 0px;">' +
									 '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Destino:</td>' +
									 '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' + req.body.destinoServicio + '</td>' +
									 '</tr>' +
									 '<tr style="padding: 0px;margin: 0px;">' +
									 '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Producto:</td>' +
									 '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' + req.body.producto + '</td>' +
									 '</tr>' +
									 '<tr style="padding: 0px;margin: 0px;">' +
									 '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Comentarios:</td>' +
									 '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' + req.body.comentarios + '</td>' +
									 '</tr>' +
								  '</table>' +		
								  '</div>' +	
								  '</div>' +
								  '</body>'
						}

						transporter.sendMail(HelperOptions, (error, info) =>{
							if(error)
								return console.log(error);

							console.log("The mensage was sent!");
							console.log(info);
						});

						res.json({exito: true, msg: "El cliente se creo correctamente."});
					}
				});
			}
		}
				
	}
})();

//agregar Email a la lista de mailchimp
function agregarEmailMailchimp(email, nombre, apellido)
{
	var options = { method: 'POST',
	  url: 'https://us16.api.mailchimp.com/3.0/lists/a00a0da61f/members',
	  headers: 
	   { 'postman-token': '6bd9f9d2-3192-58f4-cd89-10cd5e1c4baf',
	     'cache-control': 'no-cache',
	     'content-type': 'application/json',
	     authorization: 'Basic YW55c3RyaW5nOjNhMmE1NTgwMDQ3ZDFkZTYzNzViMDBkOGMzZTViZWFhLXVzMTY=' },
	  body: 
	   { email_address: email,
	     status: 'subscribed',
	     merge_fields: { FNAME: nombre, LNAME: apellido }, },
	  json: true };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);

	  console.log("Se agrego " + nombre + " " + apellido + " a MailChimp");
	});
}