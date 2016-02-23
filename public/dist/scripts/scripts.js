"use strict";var app=angular.module("yapp",["ui.router","ngAnimate","uiGmapgoogle-maps","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider",function(t,e){e.when("/dashboard","/dashboard/overview"),e.otherwise("/login"),t.state("base",{"abstract":!0,url:"",templateUrl:"views/base.html"}).state("login",{url:"/login",parent:"base",templateUrl:"views/login.html",controller:"LoginCtrl"}).state("register",{url:"/register",parent:"base",templateUrl:"views/register.html",controller:"LoginCtrl"}).state("dashboard",{url:"/dashboard",parent:"base",templateUrl:"views/dashboard.html",controller:"DashboardCtrl"}).state("overview",{url:"/overview",parent:"dashboard",templateUrl:"views/dashboard/overview.html"}).state("reports",{url:"/reports",parent:"dashboard",templateUrl:"views/dashboard/reports.html"})}]);app.controller("LoginCtrl",["$scope","$location","$http",function(t,e,r){t.submit=function(){r.post("http://localhost:9000/api/users/login",{username:t.credentials.user,password:t.credentials.pass}).success(function(t){console.log(JSON.stringify(t)),e.path("/dashboard")}).error(function(t){alert("Error madafoca "+JSON.stringify(t))})},t.register=function(){r.post("http://localhost:9000/api/users/register",{username:t.credentials.user,password:t.credentials.pass}).success(function(t){alert("estas registrado"),e.path("/login")}).error(function(t){alert("error")})}}]),angular.module("yapp").controller("DashboardCtrl",["$scope","$state",function(t,e){t.dynamicPopover={content:"",templateUrl:"myPopoverTemplate.html",title:""},t.mostrarMarker=!1,t.markers=[],t.$state=e,t.map={center:{latitude:15.5073,longitude:-88.0333333},zoom:14},t.loc={lat:15.5073,lon:-88.0333333},t.gotoCurrentLocation=function(){return"geolocation"in navigator?(navigator.geolocation.getCurrentPosition(function(e){var r=e.coords;t.gotoLocation(r.latitude,r.longitude)}),!0):!1},t.gotoLocation=function(e,r){t.loc={lat:e,lon:r},t.marker={coords:{latitude:e,longitude:r},options:{draggable:!0}},t.map={center:{latitude:e,longitude:r},zoom:14},t.$$phase||t.$apply("loc")}}]);