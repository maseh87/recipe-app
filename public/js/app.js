angular.module('recipe-app', [
  'ngRoute',
  'ngAnimate',
  'fx.animations'
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
      $scope.foods = sortData(data.data);
    })
  };
  $scope.ingredient;
  $scope.allRecipes = [];
  var sortData = function(data) {
    var matches = data.matches;
    for(var i = 0; i < matches.length; i++) {
      if(matches[i].smallImageUrls[0]) {
        $scope.allRecipes.push({
          name: matches[i].recipeName,
          ingredients: matches[i].ingredients,
          pic: matches[i].smallImageUrls[0]
        });
      }
    }
  };

  $scope.removeCard = function(index) {
    $scope.allRecipes.splice(index, 1);
  };
});
