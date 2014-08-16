var testServices = angular.module('testServices', []);

testServices.factory('MoviesService', ['$http', function($http) {
   return {
      get: function() {
         return $http.get('services/data.json');
      }
   };
}]);
