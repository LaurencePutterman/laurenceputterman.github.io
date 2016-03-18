'use strict';

// Declare app level module which depends on views, and components
angular.module('personal-site', [
  'ngRoute',
  'personal-site.services',
  'personal-site.Projects',
  'personal-site.AboutMe',
  'personal-site.version',
  'personal-site.Contact',
    'ngMaterial',
    'dmCarrousel',
    'ngSanitize'
]).
config(['$routeProvider', '$mdThemingProvider',function($routeProvider, $mdThemingProvider) {
  $routeProvider.otherwise({redirectTo: '/Work'});
  var lighterBlueMap = $mdThemingProvider.extendPalette('light-blue', {
    '400': '#9AE0FF'
  });
  $mdThemingProvider.definePalette('lighterBlue', lighterBlueMap);
  $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('lighterBlue',{
        'default': '400' // use shade 200 for default, and keep all other shades the same
      });
}]).
controller('AppCtrl', ['$scope','$location',function($scope,$location) {
    $scope.selectedIndex = 1;
    switch($location.path()){
        case "/AboutMe":
            $scope.selectedIndex = 0;
            break;
        case "/Work":
            $scope.selectedIndex = 1;
            break;
    }
    $scope.$watch('selectedIndex', function(current, old){
        switch(current){
            case 0:
                location.href = "#/AboutMe";
                break;
            case 1:
                location.href = "#/Work";
                break;
            case 2:
                location.href = "downloads/Laurence-Putterman-Resume.pdf";
                break;
        }
    });

}]);
