'use strict';

angular.module('app.controllers').controller('UsersController', ['$rootScope', '$scope', '$location', 'messageService', 'usersService',
    function ($rootScope, $scope, $location, messageService, usersService) {


        usersService.getUsers().then(
            function success(users) {
                $scope.users = users;
            },
            function error(status) {
                messageService.error("CUSTOMERS_GET_FAILURE", "Algo deu errado. Por favor, tente novamente");
            });

        $scope.remove = function remove(id) {
            usersService.deleteUser(id).then(
                function success(response) {
                    if (response) {
                        angular.forEach($scope.users, function (user, index) {
                            if (id == user.id) {
                                $scope.users.splice(index, 1);
                            }
                        });
                    }
                    $.unblockUI();

                },
                function error() {
                    $.unblockUI();

                    messageService.error("CUSTOMER_DELETE_FAILURE", "Algo deu errado. Por favor, tente novamente");
                });
        };

        $scope.save = function (id) {
            angular.forEach($scope.users, function (user) {
                    if (id == user.id) {
                        usersService.saveUser(user).then(
                            function success(response) {
                            });
                    }
                },
                function error() {
                    messageService.error("CUSTOMER_SAVE_FAILURE", "Algo deu errado. Por favor, tente novamente");
                });
        };


        $scope.new_user = function (user) {

            usersService.saveUser(user)
                .then(function () {
                    $.unblockUI();
                    $location.path($rootScope.navigateTo);
                })
                .catch(function () {
                    $.unblockUI();
                    messageService.error("CUSTOMER_SAVE_FAILURE", "Algo deu errado. Por favor, tente novamente.");
                });
        };

    }]);