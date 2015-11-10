var app = angular.module('myApp',[]);

//creating a controller
app.controller('MyController',function($scope){
  $scope.person = {
    name: 'Prince Kumar'
  }

  var updateClock = function(){
    $scope.clock = new Date();
  };

  var timer = setInterval(function(){
    $scope.$apply(updateClock);
  },1000);

  updateClock();
});



app.controller('DemoController',function($scope){
  $scope.counter = 0;
  $scope.add = function(amount){
    $scope.counter += amount;
  };
  $scope.substract = function(amount){
    $scope.counter -= amount;
  };
});

var apiKey = 'MDIxMjA0OTAzMDE0NDcxNTg1NzY1MTcyYw000';
var nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';


app.controller('PlayerController', ['$scope', '$http', function($scope, $http) {

  $http({
    method: 'JSONP',
    url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'

  }).success(function(data,status){

     $scope.programs = data.list.story;

  }).error(function(data,status){

  });
}]);
