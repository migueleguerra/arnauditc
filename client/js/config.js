var myApp = angular.module("myApp", ["ngRoute", "ngMessages"]);

myApp.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when("/", {
		templateUrl: "partials/home.html"
	})
	.when("/cotizacion", {
		templateUrl: "partials/cotizacion.html"
	})
	.when("/quienes_somos", {
		templateUrl: "partials/quienes_somos.html"
	})
	.when("/servicios", {
		templateUrl: "partials/servicios.html"
	})
	.when("/contacto", {
		templateUrl: "partials/contacto.html"
	})
	.when("/transportacion", {
		templateUrl: "partials/transportacion.html"
	})
	.when("/logistica", {
		templateUrl: "partials/logistica.html"
	})
	.when("/productos", {
		templateUrl: "partials/productos.html"
	})
	.when("/distribucion", {
		templateUrl: "partials/servicios_de_distribucion.html"
	})
	.when("/limones", {
		templateUrl: "partials/limones.html"
	})
	.when("/plasticos", {
		templateUrl: "partials/plasticos.html"
	})
	.when("/politica", {
		templateUrl: "partials/politica_privacidad.html"
	})
	.otherwise({
		redirectTo: "/"
	});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

});
