var app = angular.module('myApp',[]);

//creating a controller
app.controller('MyController',function($scope){
  $scope.person = {
    name: 'Prince Kumar'
  }
});
