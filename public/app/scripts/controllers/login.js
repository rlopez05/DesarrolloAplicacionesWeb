'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
app
  .controller('LoginCtrl',function($scope,$location,$http){
    $scope.submit = function(){
       $http.post('http://localhost:9000/api/users/login',{username: $scope.credentials.user, password: $scope.credentials.pass})
       .success(function(response){
        console.log(JSON.stringify(response));
         $location.path('/dashboard');
      }).error(function(response){
        alert('Error madafoca ' + JSON.stringify(response));
      });       
//         $http({
//     method: 'POST',
//     url: 'http://localhost:9000/api/users/login',
//     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//     data: {username: $scope.credentials.user, password: $scope.credentials.pass}
// }).success(function (response) {
//         console.log(JSON.stringify(response.token));
//         $location.path('/dashboard');
// }).error(function(response){
//         alert('Error madafoca ' + JSON.stringify(response));
//       });
         
    };

    $scope.register = function(){
      $http.post('http://localhost:9000/api/users/register',{username: $scope.credentials.user, password: $scope.credentials.pass})
      .success(function(response){
        alert("estas registrado");
        $location.path('/login');
      }).error(function(response){
        alert("error");
      });
    };


  });
  
