
/**
 *  Main Controller 
 * */

angular.module('bridgeApp')

/** Injecting all services to the Controller
 * */
.controller('bridgeCtrl', function ($scope, fellowService,fellowService1, teamService, partenerService) {


    //Fellow Service
    $scope.fellow = fellowService.infoFellow();

    //Fellow Service1
    $scope.fellow1 = fellowService1.infoFellow1();
    
    //Team Service
    $scope.team = teamService.infoTeam();
   
    //Parteners Service
    $scope.Parteners = partenerService.infoPartener();
    
});







