describe('UsersController Tests', function () {
    beforeEach(module('app.controllers'));
    beforeEach(module(function ($provide) {

            $provide.value('$scope', {
                remove: jasmine.createSpy('$scope.remove'),
                save: jasmine.createSpy('$scope.save')
            });

            $provide.factory('usersService', function ($jasmine) {
                return $jasmine.createPromiseSpyObj(
                    'checklistService', [ 'getUsers', 'deleteUser', 'saveUser' ]
                );
            });

            $provide.factory('messageService', function ($jasmine) {
                return $jasmine.createPromiseSpyObj(
                    'messageService', [ 'error' ]
                );
            });
        })
    );

    describe('UsersController Structural Tests', function () {
        it('should have an remove function in scope', inject(function ($scope) {
            expect(angular.isFunction($scope.remove)).toBe(true);
        }));

        it('should have an save function in scope', inject(function ($scope) {
            expect(angular.isFunction($scope.save)).toBe(true);
        }));

    });

    describe('UsersController Save Tests', function () {
        it('should have not saved any data with service call returning true', inject(function ($controller, $scope, usersService, messageService) {
            $controller('UsersController');

            $scope.users = [
                {"id": 1, "name": "João", "email": "teste1@gmail.com"},
                {"id": 2, "name": "Maria", "email": "teste2@gmail.com"},
                {"id": 3, "name": "José", "email": "teste3@gmail.com"},
                {"id": 4, "name": "Ana", "email": "teste4@gmail.com"}
            ];

            $scope.save(2);

            usersService.saveUser.$resolve(true);

            expect(usersService.saveUser).toHaveBeenCalledWith({"id": 2, "name": "Maria", "email": "teste2@gmail.com"});
            expect(messageService.error).not.toHaveBeenCalled();
        }));

    });
});