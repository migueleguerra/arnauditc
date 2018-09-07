myApp.controller("mainController", function(
  $scope,
  $location,
  $rootScope,
  $timeout,
  ClienteFactory
) {
  $rootScope.isHome = true;
  $scope.msgExito = false;
  $scope.msgError = false;
  $scope.cotizacionRapida = {};

  $scope.cRapida = function() {
    $scope.cotizacionRapida.pagina = "quickQuote";

    ClienteFactory.quote($scope.cotizacionRapida, function(data) {
      if (data.exito) {
        $scope.cotizacionRapida = {};
        $scope.msgExito = data.msg;
        $timeout(function() {
          $scope.msgExito = false;
        }, 3000);
      } else {
        $scope.msgError = data.msg;
        $timeout(function() {
          $scope.msgError = false;
        }, 3000);
      }
    });
  };
});

myApp.controller("cotizacionController", function(
  $scope,
  $location,
  $rootScope,
  $window,
  $timeout,
  ClienteFactory
) {
  $rootScope.isHome = false;
  $scope.cotizacion = {};

  $rootScope.homeRelo = function() {
    $window.location.reload();
  };

  $scope.cot = function() {
    $scope.cotizacion.pagina = "quote";

    ClienteFactory.quote($scope.cotizacion, function(data) {
      if (data.exito) {
        $scope.cotizacion = {};
        $scope.msgExito = data.msg;
        $timeout(function() {
          $location.path("/");
          $rootScope.homeRelo();
          $scope.msgExito = false;
        }, 3000);
      } else {
        $scope.msgError = data.msg;
        $timeout(function() {
          $scope.msgError = false;
        }, 3000);
      }
    });
  };
});

myApp.controller("quienesController", function(
  $scope,
  $location,
  $rootScope,
  $window
) {
  $rootScope.isHome = false;

  $rootScope.homeRelo = function() {
    $window.location.reload();
  };
});

myApp.controller("serviciosController", function(
  $scope,
  $location,
  $rootScope,
  $window
) {
  $rootScope.isHome = false;

  $rootScope.homeRelo = function() {
    $window.location.reload();
  };
});

myApp.controller("contactoController", function(
  $scope,
  $location,
  $rootScope,
  $window,
  $timeout,
  ClienteFactory
) {
  $rootScope.isHome = false;
  $scope.contacto = {};

  $rootScope.homeRelo = function() {
    $window.location.reload();
  };

  $scope.sendContacto = function() {
    $scope.contacto.pagina = "contacto";
    ClienteFactory.quote($scope.contacto, function(data) {
      if (data.exito) {
        $scope.contacto = {};
        $scope.msgExito = data.msg;
        $timeout(function() {
          $location.path("/");
          $rootScope.homeRelo();
          $scope.msgExito = false;
        }, 3000);
      } else {
        $scope.msgError = data.msg;
        $timeout(function() {
          $scope.msgError = false;
        }, 3000);
      }
    });
  };
});

myApp.controller("transportacionController", function(
  $scope,
  $location,
  $rootScope,
  $window
) {
  $rootScope.isHome = false;

  $rootScope.homeRelo = function() {
    $window.location.reload();
  };
});

myApp.controller("logisticaController", function(
  $scope,
  $location,
  $rootScope,
  $window
) {
  $rootScope.isHome = false;

  $rootScope.homeRelo = function() {
    $window.location.reload();
  };
});

myApp.controller("distribucionController", function(
  $scope,
  $location,
  $rootScope,
  $window
) {
  $rootScope.isHome = false;

  $rootScope.homeRelo = function() {
    $window.location.reload();
  };
});

myApp.controller("productosController", function(
  $scope,
  $location,
  $rootScope,
  $window
) {
  $rootScope.isHome = false;

  $rootScope.homeRelo = function() {
    $window.location.reload();
  };
});

myApp.controller("limonesController", function(
  $scope,
  $location,
  $rootScope,
  $window
) {
  $rootScope.isHome = false;

  $rootScope.homeRelo = function() {
    $window.location.reload();
  };
});

myApp.controller("plasticosController", function(
  $scope,
  $location,
  $rootScope,
  $window
) {
  $rootScope.isHome = false;

  $rootScope.homeRelo = function() {
    $window.location.reload();
  };
});

myApp.controller("politicaController", function(
  $scope,
  $location,
  $rootScope,
  $window
) {
  $rootScope.isHome = false;

  $rootScope.homeRelo = function() {
    $window.location.reload();
  };
});

myApp.controller("termController", function(
  $scope,
  $location,
  $rootScope,
  $window
) {
  $rootScope.isHome = false;

  $rootScope.homeRelo = function() {
    $window.location.reload();
  };
});
