/**
 * Created by BurggrafM on 13.06.2017.
 */

angular.module('myApp.springPlayground')
    .controller('consoleCtrl', consoleCtrl);

    function consoleCtrl($http) {
        var self = this;
        healthCheck();

        function healthCheck() {
            $http.get("/healthCheck")
              .then(function(response) {
                  self.output = response.data.content;
            });
        }
    }