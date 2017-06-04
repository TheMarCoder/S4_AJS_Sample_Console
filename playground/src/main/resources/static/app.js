'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngRoute',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', '$stateProvider', '$urlRouterProvider',
    function($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise('/welcome');

          $stateProvider
            .state('welcome', {
              url: "/welcome",
              templateUrl: "welcome/welcome.html"
          });
}]);
