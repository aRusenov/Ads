'use strict';

adsApp.controller('AppController', function ($scope, $location, authService, notifyService) {
    $scope.authService = authService;

    $scope.logout = function() {
        authService.logout();
        notifyService.showInfo("Successfully logged out.");
        $location.path('/ads');
    }

    adsApp.run(function ($rootScope, $location, authService) {
        $rootScope.$on('$locationChangeStart', function (event) {
            if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
                // Authorization check: anonymous site visitors cannot access user routes
                $location.path("/");
            }
        });
    });

});