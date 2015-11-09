(function () {

    'use strict';	

	angular.module('proteo.ui.buscador-contacto.visor',['pascalprecht.translate'])
		.config(['$translateProvider', function ($translateProvider) {
			// custom code 
	}]);
}());
(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.visor').controller('buscadorContactoVisorCtrl', function($scope,personService) {
		console.log("buscadorContactoVisorCtrl");
		$http.get('http://localhost:3000/users').success(function(data) {
            $scope.users = data;
        });
        console.log("datacontact || "+$scope.datacontact);
        console.log("users || "+$scope.users);

	});

}());

(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.visor').directive('buscadorContacto.visor',function() {
	  return {
	    restrict	: 	"E",
		scope: {
			datacontact : '=datacontact'
		},
	    controller 	: 	'buscadorContactoVisorCtrl',
	    templateUrl : 	'./bower_components/proteo.ui.buscador-contacto.visor/dist/proteo.ui.buscador-contacto.visor.tpl.html',
	  };
	});

}());
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
