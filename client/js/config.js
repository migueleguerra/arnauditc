var myApp = angular.module("myApp", ["ngRoute", "ngMessages"]);

myApp.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when("/", {
		templateUrl: "partials/home.html"
	})
	.when("/quote", {
		templateUrl: "partials/cotizacion.html"
	})
	.when("/who_are_we", {
		templateUrl: "partials/quienes_somos.html"
	})
	.when("/services", {
		templateUrl: "partials/servicios.html"
	})
	.when("/contact", {
		templateUrl: "partials/contacto.html"
	})
	.when("/transportation", {
		templateUrl: "partials/transportacion.html"
	})
	.when("/logistic", {
		templateUrl: "partials/logistica.html"
	})
	.when("/products", {
		templateUrl: "partials/productos.html"
	})
	.when("/distribution", {
		templateUrl: "partials/servicios_de_distribucion.html"
	})
	.when("/farm_products", {
		templateUrl: "partials/limones.html"
	})
	.when("/food_packaging", {
		templateUrl: "partials/plasticos.html"
	})
	.when("/privacy_policy", {
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
