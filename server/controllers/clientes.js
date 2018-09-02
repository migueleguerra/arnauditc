var request = require('request');
var mongoose = require('mongoose');
var keys = require('../keys/keys');
var Cliente = mongoose.model('Cliente');
const nodemailer = require('nodemailer');

//Configuración de nodemailer
let transporter = nodemailer.createTransport({
  host: keys.serviceMail,
  port: 587,
  secure: false,
  auth: {
    user: keys.userMail,
    pass: keys.passwordMail
  }
});

module.exports = (function() {
  return {
    crearCliente: function(req, res) {
      if (
        req.body.pagina == 'quickQuote' &&
        (req.body.nombreCliente == null ||
          req.body.email == null ||
          req.body.producto == null ||
          req.body.tipoServicio == null ||
          req.body.nombreCliente == '' ||
          req.body.email == '' ||
          req.body.producto == '' ||
          req.body.tipoServicio == '')
      )
        res.json({ exito: false, msg: 'Please fill all the required fields.' });
      else if (
        (req.body.pagina == 'contacto' || req.body.pagina == 'quote') &&
        (req.body.nombreCliente == null ||
          req.body.email == null ||
          req.body.apellidoCliente == null ||
          req.body.nombreCliente == '' ||
          req.body.email == '' ||
          req.body.apellidoCliente == '')
      )
        res.json({ exito: false, msg: 'Please fill all the required fields.' });
      else {
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

        cliente.save(function(error) {
          if (error)
            if (error.code == 11000)
              return res.json({
                exito: false,
                msg:
                  'This email already exists in our database. ' +
                  'Wait for one of our representatives to contact you.'
              });
            else
              return res.json({
                exito: false,
                msg: 'Error! please try again later.'
              });
          else {
            let HelperOptions = {
              from: '"Arnauditc" <' + keys.userMail + '>',
              to: keys.ownerMail,
              subject:
                'nuevo cliente: ' +
                req.body.nombreCliente +
                ' ' +
                req.body.apellidoCliente,
              html:
                '<body style="padding: 0px;margin: 0px;">' +
                '<div style="padding: 30px;margin: 0px;background: #0872BA;>' +
                '<div style="padding: 0px;margin: 0 auto;max-width: 600px;background: white;font-family: sans-serif;">' +
                '<h1 style="padding: 30px;margin: 0px;text-align: center;">El cliente: ' +
                req.body.nombreCliente +
                ' ' +
                req.body.apellidoCliente +
                ' mando la siguiente información:</h1>' +
                '<table style="padding: 5px;margin: 0px;border: 2px solid black;">' +
                '<tr style="padding: 0px;margin: 0px;">' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Nombre:</td>' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' +
                req.body.nombreCliente +
                '</td>' +
                '</tr>' +
                '<tr style="padding: 0px;margin: 0px;">' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Apellido:</td>' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' +
                req.body.apellidoCliente +
                '</td>' +
                '</tr>' +
                '<tr style="padding: 0px;margin: 0px;">' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Email:</td>' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;"><a href="mailto:' +
                req.body.email +
                '" style="padding: 0px;margin: 0px;">' +
                req.body.email +
                '</a></td>' +
                '</tr>' +
                '<tr style="padding: 0px;margin: 0px;">' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Empresa:</td>' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' +
                req.body.nombreEmpresa +
                '</td>' +
                '</tr>' +
                '<tr style="padding: 0px;margin: 0px;">' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Ubicación:</td>' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' +
                req.body.ubicacionCliente +
                '</td>' +
                '</tr>' +
                '<tr style="padding: 0px;margin: 0px;">' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Teléfono:</td>' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' +
                req.body.telefono +
                '</td>' +
                '</tr>' +
                '<tr style="padding: 0px;margin: 0px;">' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Tipo de servicio:</td>' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' +
                req.body.tipoServicio +
                '</td>' +
                '</tr>' +
                '<tr style="padding: 0px;margin: 0px;">' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Origen:</td>' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' +
                req.body.origenServicio +
                '</td>' +
                '</tr>' +
                '<tr style="padding: 0px;margin: 0px;">' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Destino:</td>' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' +
                req.body.destinoServicio +
                '</td>' +
                '</tr>' +
                '<tr style="padding: 0px;margin: 0px;">' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Producto:</td>' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' +
                req.body.producto +
                '</td>' +
                '</tr>' +
                '<tr style="padding: 0px;margin: 0px;">' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">Comentarios:</td>' +
                '<td style="padding: 5px;margin: 0px;border: 2px solid black;">' +
                req.body.comentarios +
                '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '</body>'
            };

            transporter.sendMail(HelperOptions, (error, info) => {
              if (error) {
                console.log(error);
                return res.json({
                  exito: false,
                  msg: 'Error! please try again later.'
                });
              } else {
                console.log('The mensage was sent!');
                console.log(info);
                agregarEmailMailchimp(
                  req.body.email,
                  req.body.nombreCliente,
                  req.body.apellidoCliente
                );
                res.json({
                  exito: true,
                  msg:
                    'Tank you! One of our representatives will contact you as soon as posible.'
                });
              }
            });
          }
        });
      }
    }
  };
})();

//agregar Email a la lista de mailchimp
function agregarEmailMailchimp(email, nombre, apellido) {
  var options = {
    method: 'POST',
    url:
      'https://' +
      keys.mailchimpInstance +
      '.api.mailchimp.com/3.0/lists/' +
      keys.mailchimpListUniqueId +
      '/members',
    headers: {
      'postman-token': '6bd9f9d2-3192-58f4-cd89-10cd5e1c4baf',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      authorization: 'Basic ' + keys.mailchimpApiKey
    },
    body: {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: nombre,
        LNAME: apellido
      }
    },
    json: true
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    console.log('Se agrego ' + nombre + ' ' + apellido + ' a MailChimp');
  });
}
