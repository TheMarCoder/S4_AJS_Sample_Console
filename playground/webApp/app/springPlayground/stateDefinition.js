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
              url: "/playground/spring",
              templateUrl: "springPlayground/springPlayground.html"
            });
}]);
