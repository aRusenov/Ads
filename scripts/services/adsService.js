'use strict';

adsApp.factory('adsService',
    function ($resource, baseServiceUrl) {
        var adsResource = $resource(
            baseServiceUrl + '/api/ads',
            null,
            {
                'getAll': { method: 'GET' }
            }
        )

        return {
            getAds: function (params, success, error) {
                return adsResource.getAll(params, success, error);
            }
        }
});

adsApp.factory('townsService',
    function ($resource, baseServiceUrl) {

        var townsResource = $resource(
            baseServiceUrl + '/api/towns'
        );

        return {
            getTowns: function(success, error) {
                return townsResource.query(success, error);
            }
        }
});

adsApp.factory('categoriesService',
    function ($resource, baseServiceUrl) {
        var categoriesResource = $resource(
                baseServiceUrl + '/api/categories'
        );

        return {
            getCategories: function(success, error) {
                return categoriesResource.query(success, error);
            }
        }
    }
);