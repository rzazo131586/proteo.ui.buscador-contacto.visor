(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.visor').controller('buscadorContactoVisorCtrl', function($scope,$http) {
		console.log("buscadorContactoVisorCtrl");
		$http.get('http://localhost:3000/users').success(function(data) {
            $scope.users = data;
        });
        setTimeout(function(){
	        console.log("datacontact || "+$scope.datacontact);
	        console.log("users || "+JSON.stringify($scope.users));
        },500);

	});

}());
