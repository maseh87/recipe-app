angular.module('recipesService', [
  'ui.router'
])

.factory('Recipes', function($http, $q) {
  return {
    getFood: function(food) {
      console.log('in Receipes.getFood()');
      var dfd = $q.defer();

      $http({
        method: 'GET',
        url: '/' + food
      })
      .success(function(data) {
        console.log('got food succesfflly ', data);
        dfd.resolve(data.matches);
      })
      .error(function(err) {
        console.log('shit fucked up ', err);
        dfd.reject(err);
      })

      return dfd.promise;
    }
  };
});