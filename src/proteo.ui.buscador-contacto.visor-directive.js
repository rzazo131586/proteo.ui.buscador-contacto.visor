(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.visor').directive('buscadorContacto.visor',function() {
	  return {
	    restrict	: 	"E",
		scope: {
			contactsFiltered : '=datacontact'
		},
	    controller 	: 	'buscadorContactoVisorCtrl',
	    templateUrl : 	'./bower_components/proteo.ui.buscador-contacto.visor/dist/proteo.ui.buscador-contacto.visor.tpl.html',
	  };
	});

}());