
/**
 *  Main Controller 
 * */

angular.module('bridgeApp')

    /** Injecting all JSON to the Controller
     * 
     * */
    .controller('bridgeCtrl', ['$scope', '$http', 'myCache', function ($scope, $http, myCache) {

        var cache = myCache.get('myData');
       
        if (cache) {

            //Fellow Service
            $scope.company = cache.company;

            //Fellow Service1
            $scope.bridgelabz = cache.bridgelabz;

            //Team Service
            $scope.team = cache.team;

            //Parteners Service
            $scope.Parteners = cache.parterners;


        }

else{
        $http.get('json/Details.json').success(function (data) {


            //Fellow Service
            $scope.company = data.company;

            //Fellow Service1
            $scope.bridgelabz = data.bridgelabz;

            //Team Service
            $scope.team = data.team;

            //Parteners Service
            $scope.Parteners = data.parterners;

            myCache.put('myData', data);
            
    
        });
}
    }]);







