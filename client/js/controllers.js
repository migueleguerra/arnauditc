myApp.controller("mainController", function($scope, $location, $rootScope, $timeout){
	$rootScope.isHome = true;
	$scope.msgExito = false;
	$scope.msgError = false;

	$scope.cRapida = function(cotizacionRapida){
		console.log($scope.cotizacionRapida);
		var data = true;
		if(data)
		{
			$scope.msgExito = "Exito! Uno de nuestros representantes lo contactara lo antes posible.";
			$timeout(function(){
				$scope.msgExito = false;
			}, 3000);
		}
		else
		{
			$scope.msgError = "No Exito";
			$timeout(function(){
				$scope.msgError = false;
			}, 3000);
		}
	}	
});

myApp.controller("cotisacionController", function($scope, $location, $rootScope, $window){
	$rootScope.isHome = false;

	$rootScope.homeRelo = function(){
		$window.location.reload();
	}
});

myApp.controller("quienesController", function($scope, $location, $rootScope, $window){
	$rootScope.isHome = false;

	$rootScope.homeRelo = function(){
		$window.location.reload();
	}
});

myApp.controller("serviciosController", function($scope, $location, $rootScope, $window){
	$rootScope.isHome = false;

	$rootScope.homeRelo = function(){
		$window.location.reload();
	}
});

myApp.controller("contactoController", function($scope, $location, $rootScope, $window){
	$rootScope.isHome = false;

	$rootScope.homeRelo = function(){
		$window.location.reload();
	}

	$scope.sendContacto = function(contacto){
		console.log(contacto);
	}
});

myApp.controller("transportacionController", function($scope, $location, $rootScope, $window){
	$rootScope.isHome = false;

	$rootScope.homeRelo = function(){
		$window.location.reload();
	}
});

myApp.controller("logisticaController", function($scope, $location, $rootScope, $window){
	$rootScope.isHome = false;

	$rootScope.homeRelo = function(){
		$window.location.reload();
	}
});

myApp.controller("distribucionController", function($scope, $location, $rootScope, $window){
	$rootScope.isHome = false;

	$rootScope.homeRelo = function(){
		$window.location.reload();
	}
});

myApp.controller("productosController", function($scope, $location, $rootScope, $window){
	$rootScope.isHome = false;

	$rootScope.homeRelo = function(){
		$window.location.reload();
	}
});

myApp.controller("limonesController", function($scope, $location, $rootScope, $window){
	$rootScope.isHome = false;

	$rootScope.homeRelo = function(){
		$window.location.reload();
	}
});

myApp.controller("plasticosController", function($scope, $location, $rootScope, $window){
	$rootScope.isHome = false;

	$rootScope.homeRelo = function(){
		$window.location.reload();
	}
});

myApp.controller("politicaController", function($scope, $location, $rootScope, $window){
	$rootScope.isHome = false;

	$rootScope.homeRelo = function(){
		$window.location.reload();
	}
});