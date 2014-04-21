angular.module('recipe-app', [
  'ngAnimate',
  'fx.animations',
  'ui.router',
  'login',
  'recipesService'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/home',
      templateUrl: '../views/home.tpl.html',
      controller: 'mainController'
    })
    .state('login', {
      url: '/login',
      templateUrl: '../views/login.html',
      controller: 'testing'
    });
  $urlRouterProvider
    .otherwise('/home')
})

.controller('mainController', function($scope, $http, Recipes, $filter) {
  console.log('mainController');
  $scope.search = function(food) {
    Recipes.getFood(food)
    .then(function(data) {
      console.log(data);
      $scope.recipes = [];
      for(var i = 0; i < data.length; i++) {
        if(data[i].smallImageUrls[0]) {
          $scope.recipes.push({
            name: $filter('smallHeading')(data[i].recipeName),
            ingredients: data[i].ingredients,
            pic: data[i].smallImageUrls[0]
          })
        }
      }
    })
  };
})
.filter('smallHeading', function(){
  return function(input){
    var result = input
    if(input.length > 30){
      result = input.slice(0, 30) + '...';
      return result;
    }
    return result;
  };
})
.directive('card', function(){
  return {
    restrict: 'E',
    scope: {
      foods: '='
    },
    transclude: true,
    replace: true,
    template:
    '<div ng-repeat="food in foods"class="card">'+
      '<h4 class="card-header">{{ food.name }}</h4>'+
      '<img src="{{ food.pic }}" class="img-rounded" />'+
    '</div>'
  };
});









  // var sortData = function($scope.recipes) {
  //   var matches = data.matches;
  //   for(var i = 0; i < matches.length; i++) {
  //     if(matches[i].smallImageUrls[0]) {
  //       $scope.allRecipes.push({
  //         name: matches[i].recipeName,
  //         ingredients: matches[i].ingredients,
  //         pic: matches[i].smallImageUrls[0]
  //       });
  //     }
  //     console.log($scope.allRecipes.ingredients);
  //   } else if ($scope.allRecipes.length <= 0 || 0) {
  //     var matches = data.matches;
  //     for(var i = 0; i < matches.length; i++) {
  //       if(matches[i].smallImageUrls[0]) {
  //         $scope.allRecipes.push({
  //           name: matches[i].recipeName,
  //           ingredients: matches[i].ingredients,
  //           pic: matches[i].smallImageUrls[0]
  //         });
  //       }
  //     }
  //   }
  // };
  // $scope.onEnter = function(event, food) {
  //   if(event.keyCode === 13) {
  //     $scope.getFood(food);
  //   }
  // };
  // $scope.removeCard = function(index) {
  //   console.log(index);
  //   if(index === 0) {
  //     $scope.allRecipes.splice(1);
  //   }
  //   $scope.allRecipes.splice(0, index);
  //   $scope.allRecipes.splice(index);
  // };
  // $scope.getFood = function(food) {
  //   return $http({
  //     method: 'GET',
  //     url: '/' + food,
  //   }).
  //   then(function(data){
  //     $scope.foods = sortData(data.data);
  //     $scope.ingredient = '';
  //   })
  // };









