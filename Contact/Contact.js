'use strict';

angular.module('personal-site.Contact', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/Contact', {
            templateUrl: 'Contact/Contact.html',
            controller: 'ContactCtrl'
        });
    }])

    .controller('ContactCtrl', ['$scope','Contact',function($scope, Contact) {
        $scope.user = {};

        $scope.submit = function(data){
            Contact.submitContact(data).then(function(response){
                console.log(response);
                $scope.submitWasSuccessful = true;
            });
        }
    }]);