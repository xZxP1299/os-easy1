'use strict';

angular.module('myApp.view13', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view13', {
    templateUrl: 'view13/view13.html',
    controller: 'View13Ctrl'
  });
}])

.controller('View13Ctrl', [function() {

}]);