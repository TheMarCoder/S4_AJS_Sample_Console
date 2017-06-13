'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp.springPlayground', [
  'ui.router',
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', '$stateProvider',
    function($locationProvider, $routeProvider, $stateProvider) {
        $stateProvider
            .state('springPlayground', {
              abstract: true,
              url: "/playground/spring",
              views: {
                  '': {
                        templateUrl: "springPlayground/springPlayground.html" },
                  'console@springPlayground': {
                        templateUrl: "springPlayground/console.html" }
              }
            })

            .state('springPlayground.overview', {
              url: "/overview",
              views: {
                  'headline@springPlayground': {
                        template: "<h1>Spring 4 Playground</h1>" }
              }
        });
}]);
