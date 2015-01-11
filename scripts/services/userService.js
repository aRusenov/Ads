'use strict';

adsApp.factory('userService',
    function($http, baseServiceUrl, authService) {
        var publishAd = function(adData, success, error) {
            var request = {
                method: 'POST',
                url: baseServiceUrl + '/api/user/ads',
                headers: authService.getAuthHeaders(),
                data: adData
            };
            $http(request)
                .success(success)
                .error(error);
        }

        var getUserAds = function(params, success, error) {
            var request = {
                method: 'GET',
                url: baseServiceUrl + '/api/user/ads',
                headers: authService.getAuthHeaders(),
                params: params
            }
            $http(request)
                .success(success)
                .error(error);
        }

        var deactivateAd = function(id, success, error) {
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/api/user/ads/deactivate/' + id,
                headers: authService.getAuthHeaders()
            }
            $http(request)
                .success(success)
                .error(error);
        }


        var publishAgainAd = function(id, success, error) {
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/api/user/ads/publishagain/' + id,
                headers: authService.getAuthHeaders()
            }
            $http(request)
                .success(success)
                .error(error);
        }

        return {
            publishAd: publishAd,
            getUserAds: getUserAds,
            deactivateAd: deactivateAd,
            publishAgainAd: publishAgainAd
        }
    }
);