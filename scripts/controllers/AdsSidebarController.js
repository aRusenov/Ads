'use strict';

// The RightSidebarController controls the content displayed in the right sidebar
adsApp.controller('AdsSidebarController',
    function ($scope, $rootScope, categoriesService, townsService) {

        $scope.categoryClicked = function(clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
        };

        $scope.townClicked = function(clickedTownId) {
            $scope.selectedTownId = clickedTownId;
            $rootScope.$broadcast("townSelectionChanged", clickedTownId);
        };

        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();
    }
);
