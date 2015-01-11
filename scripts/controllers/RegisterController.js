'use strict';

adsApp.controller('RegisterController',
    function ($scope, $location, authService, notifyService, townsService) {
        $scope.userData = {
            username: null,
            password: null,
            confirmPassword: null,
            name: null,
            email: null,
            townId: null
        };

        $scope.towns = townsService.getTowns();

        $scope.register = function () {
            authService.register(
                $scope.userData,
                function success(data) {
                    notifyService.showInfo("Successfully registered.");
                    $location.path('/login');
                },
                function error(error) {
                    notifyService.showError("Error", error);
                }
            );
        }
    }
);