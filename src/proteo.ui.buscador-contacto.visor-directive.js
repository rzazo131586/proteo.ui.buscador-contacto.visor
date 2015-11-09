(function () {
    'use strict';

angular.module('proteo.ui.buscador-contacto.visor').directive('buscadorContacto.visor',function() {
  return {
    scope 		: 	{},
    restrict	: 	"E",
    controller 	: 	'buscadorContactoVisorCtrl',
    templateUrl : 	'src/proteo.ui.buscador-contacto.visor.tpl.html'
  };
});

}());