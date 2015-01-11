'use strict';

adsApp.controller('LoginController',
    function ($scope, $location, authService, notifyService) {

        $scope.login = function () {
            authService.login(
                $scope.userData,
                function success(data) {
                    notifyService.showInfo("Successfully logged in!");
                    $location.path('/');
                },
                function error(error) {
                    notifyService.showError("Incorrect username/password.");
                });
        }

    }
);