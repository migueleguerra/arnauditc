var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');
var keys = require('../keys/keys');

mongoose.connect(keys.mongoURI);
var modelsPath = path.join(__dirname, './../models');

fs.readdirSync(modelsPath).forEach(function(file) {
  if (file.indexOf('.js') > 0) require(modelsPath + '/' + file);
});
