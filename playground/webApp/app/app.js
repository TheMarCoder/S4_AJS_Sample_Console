'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngRoute',
  'myApp.version',
  'myApp.springPlayground'
]).
config(['$locationProvider', '$routeProvider', '$stateProvider', '$urlRouterProvider',
    function($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/playground/spring');

        $stateProvider
            .state('angularPlayground', {
              url: "/playground/angular",
              templateUrl: "angularPlayground/angularPlayground.html"
        });
}]);
