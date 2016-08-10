'use strict';

angular.module('app.services').service('usersService', [ '$http', '$q', 'propertiesConstant', function ($http, $q, propertiesConstant) {
    this.getUsers = function () {
        var d = $q.defer();

        $http.get(propertiesConstant.API_URL + '/user/list')
            .success(function (users) {
                d.resolve(users);
            })
            .error(function (data, status, headers, config) {
                d.reject(status);
            });

        return d.promise;
    };

    this.deleteUser = function (id) {
        var d = $q.defer();

        $http.delete(propertiesConstant.API_URL + '/user/delete/' + id)
            .success(function (response) {
                d.resolve(response);
            })
            .error(function () {
                d.reject();
            });

        return d.promise;
    };

    this.saveUser = function (user) {
        var d = $q.defer();

        $http.post(propertiesConstant.API_URL + '/user/save', user)
            .success(function (response) {
                d.resolve(response);
            })
            .error(function () {
                d.reject();
            });

        return d.promise;
    };
    
  
}]);