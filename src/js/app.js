var testApp = angular.module('test', [
  'ngRoute',

  'testControllers',
  'testServices'
]);

testApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

