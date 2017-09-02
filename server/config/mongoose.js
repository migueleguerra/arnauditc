var mongoose = require("mongoose");
var path = require("path");
var fs = require("fs");

mongoose.connect("mongodb://localhost/arnauditc");
var modelsPath = path.join(__dirname, "./../models");

fs.readdirSync(modelsPath).forEach(function(file){
	if(file.indexOf(".js") > 0)
		require(modelsPath + "/" + file);
});