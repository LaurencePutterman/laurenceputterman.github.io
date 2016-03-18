'use strict';

angular.module('personal-site.Projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Work', {
    templateUrl: 'Projects/view1.html',
    controller: 'ProjectsCtrl'
  });
}])

.controller('ProjectsCtrl', ['Projects','$scope','$mdDialog','$sce',function(Projects,$scope,$mdDialog, $sce) {
    $scope.$sce = $sce;
    Projects.getProjects().then(function(result){
        $scope.projects = result.data;
    });

    $scope.toggle = function(elementID){
    document.querySelector("#"+elementID).classList.toggle('hover');
    };


    $scope.openInfo = function(obj, ev){
        $mdDialog.show({
            controller: DialogCtrl,
            templateUrl: 'templates/project.tmpl.html',
            targetEvent: ev,
            locals: {
                project: obj
            },
            clickOutsideToClose: true
        });
    };

}]);

function DialogCtrl($scope, $mdDialog, project) {
    $scope.project = project;

    $scope.lengthOfImg = function(){
        if(window.innerWidth < 1078){
            return 0
        }
        else{
            return Object.keys($scope.project.ImgURLS).length;
        }
    };
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
}