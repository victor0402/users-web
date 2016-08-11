'use strict';

angular.module('app').run(['$rootScope', '$http', '$location', 'titleService', function ($rootScope, $http, $location, titleService) {

    $rootScope.navigateTo = "/main";

   
}]);