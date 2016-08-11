'use strict';

angular.module('app.services').service('usersService', ['$http', '$q', 'propertiesConstant', function ($http, $q, propertiesConstant) {


    this.getUsers = function () {
        var d = $q.defer();

        $http.get('https://usrs-api.herokuapp.com/api/v1/users')
            .success(function (users) {
                d.resolve(users);
            })
            .error(function (data, status, headers, config) {
                d.reject(status);
            });

        return d.promise;
    };

    this.getUser = function (id) {
        var d = $q.defer();

        $http.get('https://usrs-api.herokuapp.com/api/v1/users/' + id)
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

        $http.delete('https://usrs-api.herokuapp.com/api/v1/users/' + id, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
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

        $http.post('https://usrs-api.herokuapp.com/api/v1/users', user)
            .success(function (response) {
                d.resolve(response);
            })
            .error(function () {
                d.reject();
            });

        return d.promise;
    };

    this.editUser = function (user) {
        var d = $q.defer();

        $http.put('https://usrs-api.herokuapp.com/api/v1/users/' + user.id, user)
            .success(function (response) {
                d.resolve(response);
            })
            .error(function () {
                d.reject();
            });

        return d.promise;
    };


}]);