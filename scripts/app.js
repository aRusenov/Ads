var adsApp = angular.module('adsApp', ['ngResource', 'ngRoute', 'ui.bootstrap.pagination', 'flow']);

adsApp.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
adsApp.constant('pageSize', 3);

adsApp.config(function($routeProvider) {
    $routeProvider
        .when('/ads', {
            templateUrl: 'views/ads-list.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController'
        })
        .when('/user/ads/publish', {
            templateUrl: 'views/publish-ad.html',
            controller: 'PublishAdController'
        })
        .when('/user/ads', {
            templateUrl: 'views/user-ads.html',
            controller: 'UserAdsController'
        })
        .when('/', {
            redirectTo: '/ads'
        })
        .otherwise({redirectTo: '/ads'});
})
