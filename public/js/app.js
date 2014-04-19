angular.module('recipe-app', [
  'ngRoute'
])
// .config(function($routeProvider) {
//     $routeProvider
//       .when('/login', {
//         templateUrl: "../views/login.html"
//     })
//       .otherwise({
//         redirectTo: '/'
//       });
// });

.controller('mainController', function($scope, $http) {
  $scope.getFood = function(food) {
    return $http({
      method: 'GET',
      url: '/' + food,
    }).
    then(function(data){
      $scope.foods = sortData(data);
    })
  };
  $scope.ingredient = 'chicken';
});

var sortData = function(data) {
  var allRecipes = data.data.matches;
  allRecipes.name = allRecipes[0].recipeName;
  console.log(allRecipes.name);
  return allRecipes.name;
};