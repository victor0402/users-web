'use strict';

angular.module('app.controllers').controller('UsersController', ['$rootScope', '$scope', '$location', 'messageService', 'usersService', '$routeParams',
    function ($rootScope, $scope, $location, messageService, usersService, $routeParams) {
        
        
        var id_user = $routeParams.id;

        if(id_user){
                usersService.getUser(id_user).then(
                function success(user) {
                    $scope.user_edit  = user;
                    console.log($scope.user_edit)
                },
                function error(status) {
                    messageService.error("CUSTOMERS_GET_FAILURE", "Algo deu errado. Por favor, tente novamente");
                });
        }

        usersService.getUsers().then(
            function success(users) {
                $scope.users = users;
            },
            function error(status) {
                messageService.error("CUSTOMERS_GET_FAILURE", "Algo deu errado. Por favor, tente novamente");
            });

        $scope.remove = function remove(id) {
            messageService.clearAllMessages();

            usersService.deleteUser(id).then(
                function success(response) {
                    if (response) {
                        angular.forEach($scope.users, function (user, index) {
                            if (id == user.id) {
                                $scope.users.splice(index, 1);
                                messageService.info("CUSTOMER_DELETE_SUCCESS", "Usuário deletado com sucesso!");

                            }
                        });
                    }
                    $.unblockUI();

                },
                function error(response) {
                    $.unblockUI();
                    messageService.error("CUSTOMER_DELETE_FAILURE", "Algo deu errado. Por favor, tente novamente");
                });

       
        };

        $scope.save = function (id) {
            messageService.clearAllMessages();

            angular.forEach($scope.users, function (user) {
                    if (id == user.id) {
                        usersService.saveUser(user).then(
                            function success(response) {
                                messageService.info("CUSTOMER_SAVE_SUCCESS", 'Salvo com sucesso');
                            });
                    }
                },
                function error() {
                    messageService.error("CUSTOMER_SAVE_FAILURE", "Algo deu errado. Por favor, tente novamente");
                });
        };


        $scope.new_user = function (user) {
            messageService.clearAllMessages();

            usersService.saveUser(user)
                .then(function () {
                    $.unblockUI();
                    $location.path('/users/search');
                    messageService.info("CUSTOMER_SAVE_SUCCESS", 'Salvo com sucesso');

                })
                .catch(function () {
                    $.unblockUI();
                    messageService.error("CUSTOMER_SAVE_FAILURE", "Algo deu errado. Por favor, tente novamente.");
                });
        };

        $scope.edit_user = function (user) {
            messageService.clearAllMessages();
            usersService.editUser(user)
                .then(function () {
                    $.unblockUI();
                    $location.path('/users/search');
                    messageService.info("CUSTOMER_SAVE_SUCCESS", 'Editado com sucesso');

                })
                .catch(function () {
                    $.unblockUI();
                    messageService.error("CUSTOMER_SAVE_FAILURE", "Algo deu errado. Por favor, tente novamente.");
                });
        };

    }])