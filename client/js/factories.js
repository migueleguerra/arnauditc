myApp.factory("ClienteFactory", function($http){
	var factory = {};

	factory.quote = function(quoteData, callback){
		$http.post("/crearCliente", quoteData).then(function(data){
			callback(data.data);
		});
	}

	return factory;
});