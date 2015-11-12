/* Buscador-Contacto.VISOR DIRECTIVE */
	angular.module('proteo.ui.buscador-contacto.visor').directive('buscadorContacto.visor',function() {
	  return {
	    restrict	: 	"E",
		scope: {
			showContacts : '='
		},
	    controller 	: 	'buscadorContactoVisorCtrl',
	    templateUrl : 	'src/proteo.ui.buscador-contacto.visor.tpl.html',
	  };
	});
/* END Buscador-Contacto.VISOR DIRECTIVE */
