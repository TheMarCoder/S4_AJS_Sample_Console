/**
 * Created by BurggrafM on 13.06.2017.
 */

angular.module('myApp.springPlayground')
    .controller('consoleCtrl', consoleCtrl);

    function consoleCtrl($http) {
        var self = this;
        self.executeHealthCheck = executeHealthCheck;
        self.clear = clear;

        clear();
        executeHealthCheck();

        function executeHealthCheck() {
            $http.get("/healthCheck")
              .success(function(response) {
                  self.logEntries.push(response.content);
                }
              )
              .error(function (error) {
                  self.logEntries.push(error === null ? "Backend healthCheck ... FAILED" : error);
              });
        }
        
        function clear() {
            self.logEntries = [];
        }
    }