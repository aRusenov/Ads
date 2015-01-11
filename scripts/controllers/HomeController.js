'use strict';

adsApp.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {

        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        }

        $scope.reloadAds = function () {
            adsService.getAds(
                $scope.adsParams,
                function success (data) {
                    $scope.ads = data;
                },
                function error (error) {
                    notifyService.showError("Could not load ads.", error);
                }
            );
        }

        $scope.reloadAds();

        $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });

        $scope.$on("townSelectionChanged", function(event, selectedTownId) {
            $scope.adsParams.townId = selectedTownId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });

    }
);