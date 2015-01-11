'use strict';

adsApp.controller('PublishAdController',
    function($scope, $location, userService ,townsService, categoriesService, notifyService) {
        $scope.adData = {
            townId: null,
            categoryId: null
        }
        $scope.towns = townsService.getTowns();
        $scope.categories = categoriesService.getCategories();

        $scope.publish = function() {
            userService.publishAd(
                $scope.adData,
                function success(data) {
                    notifyService.showInfo("Ad successfully added.", data);
                    $location.path('/');
                },
                function error(error) {
                    notifyService.showError("Error", error);
                }
            )
        }

        $scope.fileSelected = function(fileInputField) {
            delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.adData.imageDataUrl = reader.result;
                    $(".image-container").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };

    }
);