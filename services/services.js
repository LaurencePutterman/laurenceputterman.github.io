angular.module('personal-site.services', [])

    .factory('Projects', function($http) {
        var url = location.origin+"/backend/projectsBackend.php";
        return {
            getProjectsDB: function(){                          //Old. if using php
                return $http.get(url).success(function (data){
                    return data;
                })
            },
            getProjects: function(){
                return $http.get('Projects/personalwebsitedata.json');
            }
        }

    }).
factory('Contact', function($http, $httpParamSerializerJQLike) {
    var url = location.origin+"/backend/contactBackend.php";
    return {
        submitContact: function(data){
            return $http({
                method: 'POST',
                url: url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)
            }).success(function (resp) {
                return resp;
            });
        }
    }

});