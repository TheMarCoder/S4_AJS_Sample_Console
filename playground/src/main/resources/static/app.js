'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngRoute',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', '$stateProvider', '$urlRouterProvider',
    function($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/playground/spring');

        $stateProvider
            .state('springPlayground', {
              url: "/playground/spring",
              templateUrl: "springPlayground/springPlayground.html"
            })
            .state('angularPlayground', {
              url: "/playground/angular",
              templateUrl: "angularPlayground/angularPlayground.html"
        });
}]);
