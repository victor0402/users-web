describe('UsersService Tests', function (){

    beforeEach(module('app.services'));
    beforeEach(module(function ($provide) {
            $provide.value('$scope', {
                getUsers: jasmine.createSpy('$scope.getUsers'),
                deleteUser: jasmine.createSpy('$scope.deleteUser'),
                saveUser: jasmine.createSpy('$scope.saveUser')
            });
        })
    );

    describe('UsersService Structural Tests', function() {

        it('should have an get users function', inject(function ($scope) {
            expect(angular.isFunction($scope.getUsers)).toBe(true);
        }));

        it('should have an delete user function', inject(function ($scope) {
            expect(angular.isFunction($scope.deleteUser)).toBe(true);
        }));

        it('should have an save user function', inject(function ($scope) {
            expect(angular.isFunction($scope.saveUser)).toBe(true);
        }));
    });

    describe('UsersService Get Users Tests', function() {
        it('should return results from get users function call', inject(function ($httpBackend, usersService, propertiesConstant) {
            var users = [
                {"id": 1, "name": "João", "email": "teste1@gmail.com"},
                {"id": 2, "name": "Maria", "email": "teste2@gmail.com"},
                {"id": 3, "name": "José", "email": "teste3@gmail.com"},
                {"id": 4, "name": "Ana", "email": "teste4@gmail.com"}
            ];

            $httpBackend.whenGET(propertiesConstant.API_URL + '/user/users/retrieve').respond(users);

            // check result returned from service call
            usersService.getUsers().then(function (data) {
                expect(data).toEqual(users);
            });

            $httpBackend.flush();

            $httpBackend.expectGET(propertiesConstant.API_URL + '/user/users/retrieve').respond(users);
        }));
    });
});