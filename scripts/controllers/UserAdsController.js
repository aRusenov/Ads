'use strict';

adsApp.controller('UserAdsController',
    function($scope, userService, authService, notifyService, pageSize) {

        $scope.params = {
            'startPage': 1,
            'pageSize': pageSize
        }

        $scope.reloadAds = function () {
            $scope.ads = userService.getUserAds(
                $scope.params,
                function success(data) {
                    $scope.ads = data;
                },
                function error(error) {
                    notifyService.showError("Error:", error);
                }
            );
        };
        $scope.reloadAds();


        $scope.statusChanged = function (status) {
            $scope.params.status = status;
            $scope.selectedStatus = status;
            $scope.reloadAds();
        }
    }
);