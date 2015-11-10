/* Buscador-Contacto.VISOR MODULE */
(function () {

    'use strict';	

	angular.module('proteo.ui.buscador-contacto.visor',['pascalprecht.translate'])
		.config(['$translateProvider', function ($translateProvider) {
			// custom code 
	}]);
}());
/* END Buscador-Contacto.VISOR MODULE */

/* Buscador-Contacto.VISOR CONTROLLER */
(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.visor').controller('buscadorContactoVisorCtrl', function($scope,$http) {
		console.log("buscadorContactoVisorCtrl");
	});

}());
/* END Buscador-Contacto.VISOR CONTROLLER */

/* Buscador-Contacto.VISOR DIRECTIVE */

(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.visor').directive('buscadorContacto.visor',function() {
	  return {
	    restrict	: 	"E",
		scope: {
			showContacts : '='
		},
	    controller 	: 	'buscadorContactoVisorCtrl',
	    templateUrl : 	'./bower_components/proteo.ui.buscador-contacto.visor/dist/proteo.ui.buscador-contacto.visor.tpl.html',
	  };
	});

}());
/* END Buscador-Contacto.VISOR DIRECTIVE */

/* Buscador-Contacto.VISOR SERVICE */
(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.visor').service('visorService', function () {

		/*
		this.getFullname = function(customer){return customer.firstName+ ' ' + customer.lastName;};

		this.basePath={};
		this.setBasePath = function(path) {basePath=path;};
		this.getBasePath = function() { return basePath;}
		*/
	
	});

}());
/* END Buscador-Contacto.VISOR SERVICE */