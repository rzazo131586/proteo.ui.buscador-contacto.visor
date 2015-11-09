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
