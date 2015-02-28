'use strict';

/**
 * @ngdoc overview
 * @name fontmasterApp
 * @description
 * # fontmasterApp
 *
 * Main module of the application.
 */
angular
  .module('fontmasterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'gajus.swing'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
