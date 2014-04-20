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
    if($scope.allRecipes.length > 0) {
      $scope.removeCard(0);
      $scope.allRecipes = [];
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
      // console.log($scope.allRecipes.ingredients);
    } else if ($scope.allRecipes.length <= 0 || 0) {
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
    }
  };
  $scope.onEnter = function(event, food) {
    if(event.keyCode === 13) {
      $scope.getFood(food);
    }
  };
  $scope.removeCard = function(index) {
    console.log(index);
    if(index === 0) {
      $scope.allRecipes.splice(1);
    }
    $scope.allRecipes.splice(0, index);
    $scope.allRecipes.splice(index);
  };
});
