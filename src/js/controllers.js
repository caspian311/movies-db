var testControllers = angular.module('testControllers', []);

testControllers.controller('HomeCtrl', ['$scope', 'MoviesService', function($scope, MoviesService) {
   MoviesService.get().success(function(data) {
      $scope.movies = data;
   });
}]);

