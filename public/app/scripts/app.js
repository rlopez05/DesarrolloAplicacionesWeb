'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
var app = angular
  .module('yapp', [
    'ui.router',
    'ngAnimate',
    'uiGmapgoogle-maps',
    'ui.bootstrap'
   ])
// .config(function($httpProvider) {
// $httpProvider.interceptors.push(function($q,$rootScope, $injector, $localStorage, toaster, cfpLoadingBar) {
// var $http;
// 
//     return {
//       request: function(config) {
//         config.headers = config.headers || {};
//         cfpLoadingBar.start();
//         var authData = $localStorage.authorizationData;
//         if (authData) {
//             config.headers.Authorization = 'Bearer ' + authData.token;
//         }
//         return config;
//       },
//       response: function(response) {
//         //return null; // <-- this is not returning the config object
//         cfpLoadingBar.complete();
//         return response || $q.when(response);
//      },
//       responseError: function(rejection) {
//         var deferred = $q.defer();
// 
//         var _retryHttpRequest = function (config, _deferred) {
//                     $http = $http || $injector.get('$http');
//                     $http(config).then(function (response) {
//                         _deferred.resolve(response);
//                     }, function (response) {
//                         _deferred.reject(response);
//                     });
//          }
//         var authService = $injector.get('authService');
// 
//         if (rejection.status === 401){
//             authService.refreshToken().then(function (response) {
//                 _retryHttpRequest(rejection.config, deferred);
//                  var $http = $http || $injector.get('$http');
//                  $http(rejection.config);
//             }, function () {
//                 authService.logOut();
//                // $state.go('app.logIn');
//                 deferred.reject(rejection);
//             });
//         cfpLoadingBar.complete();
//         return deferred.promise;
// 
//       }else if(rejection.status === 400){
//         toaster.pop('error', 'Error de Ingreso', 'Su usuario o contraseña son invalidos');
// 
//         deferred.reject(rejection);
// 
//       }else if(rejection.status === 0){
//         toaster.pop('warning', 'Error de conexion', 'Por favor revise su conexion a internet');
// 
//         deferred.reject(rejection);
//       }else if(rejection.status === 422){
//         toaster.pop('warning', 'Error al eliminar', 'No se puede eliminar esta entidad ya que hay registros relacionados');
// 
//         deferred.reject(rejection);
//       }else if(rejection.status === 404){
//         toaster.pop('warning', 'No Encontrado', 'Pagina o archivo no encontrado');
// 
//         deferred.reject(rejection);
//       }
// 
//         cfpLoadingBar.complete();
//     }
//   }
// })
// })
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('register', {
          url: '/register',
          parent: 'base',
          templateUrl: 'views/register.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/overview.html'
          })
          .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/reports.html'
          });

  });
