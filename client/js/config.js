var myApp = angular.module("myApp", ["ngRoute", "ngMessages"]);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "partials/home.html"
    })
    .when("/quote", {
      templateUrl: "partials/quote.html"
    })
    .when("/about_us", {
      templateUrl: "partials/about_us.html"
    })
    .when("/services", {
      templateUrl: "partials/services.html"
    })
    .when("/contact", {
      templateUrl: "partials/contact.html"
    })
    .when("/products", {
      templateUrl: "partials/products.html"
    })
    .when("/distribution", {
      templateUrl: "partials/servicios_de_distribucion.html"
    })
    .when("/farm_products", {
      templateUrl: "partials/farm_products.html"
    })
    .when("/food_packaging", {
      templateUrl: "partials/food_packaging.html"
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
