'use strict';

angular.module('personal-site.AboutMe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/AboutMe', {
    templateUrl: 'AboutMe/view2.html',
    controller: 'AboutMeCtrl'
  });
}])

.controller('AboutMeCtrl', [function() {

}]);