'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state) {

     $scope.dynamicPopover = {
    content: '',
    templateUrl: 'myPopoverTemplate.html',
    title: ''
  };

    // algunas variables para que funcione el mapa
    $scope.mostrarMarker=false;
    $scope.markers = [];
    $scope.$state = $state;
    $scope.map = { center: { latitude: 15.5073, longitude: -88.0333333 }, zoom: 14 };
    $scope.loc ={lat:15.5073, lon:-88.0333333};

//add marker en el evento click del mapa y setearlo al map y push en un arreglo de markers



    $scope.gotoCurrentLocation =function(){
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(function(position){
                var c = position.coords;
               $scope.gotoLocation(c.latitude, c.longitude);
                
            });

            return true;
        }
        return false;
    };

    $scope.gotoLocation=function(lat, lon){
        $scope.loc={lat:lat,lon:lon};
          $scope.marker={
        coords:{
            latitude:lat,
            longitude:lon
        },
        options:{
         draggable: true
        },

     }
     $scope.map={center:{latitude:lat,longitude:lon},zoom:14};

        if(!$scope.$$phase) $scope.$apply("loc");
    };
 

    
      
	
});
