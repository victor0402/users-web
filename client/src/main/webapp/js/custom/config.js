'use strict';

angular.module('app')

    .config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {

        //


        $locationProvider.html5Mode(true);

        // ======= router configuration =============

        $routeProvider
            .when('/main', {
                title: 'Início',
                controller: 'DashboardController',
                templateUrl: 'html/partials/view/main.html'
            })
            .when('/users/search', {
                title: 'Usuários Cadastrados',
                controller: 'UsersController',
                templateUrl: 'html/partials/view/users_search.html'
            })
            .when('/users/new', {
                title: 'Novo Usuário',
                controller: 'UsersController',
                templateUrl: 'html/partials/view/users_new.html'
            })
            .when('/users/edit/:id', {
                title: 'Editar Usuário',
                controller: 'UsersController',
                templateUrl: 'html/partials/view/users_edit.html'
            })

            .otherwise({redirectTo: "/main"});

        // ======== http configuration ===============

        $httpProvider.interceptors.push(function ($q, $location, messageService, storageService, storageConstant) {
            return {
                'response': function (response) {
                    return response;
                },
                'responseError': function (rejection) {
                    switch (rejection.status) {
                        case 400:
                        case 401:
                        case 403:
                        case 500:
                        {
                            break;
                        }
                        default :
                        {
                            messageService.error("UNKNOWN_ERROR", "Um erro ocorreu. Por favor, tente novamente.");

                            break;
                        }
                    }

                    return $q.reject(rejection);
                }
            };
        });
    }])
    .run(['$rootScope', 'messageService', function($rootScope, messageService) {
        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            // messageService.clearError();
            // messageService.clearInfo();
        });
    }]);

