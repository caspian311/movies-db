var testControllers = angular.module('testControllers', []);

testControllers.controller('HomeCtrl', ['$scope', 'MoviesService', function($scope, MoviesService) {
   MoviesService.get().success(function(data) {
      $scope.movies = data;
   }).error(function() {
      $scope.errorMessage = 'Movies failed to load: ' + arguments;
   });
   $scope.sortOrder = 'release';
   $scope.reverse = false;
}]);

